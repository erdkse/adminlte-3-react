import axios from '../utils/axios';
import { addFacebookScript } from '../utils/social-auth-scripts';

const asyncFacebookGetLoginStatus = () => {
  return new Promise((resolve, reject) => {
    addFacebookScript()
      .then(() => {
        const params = {
          appId: '243170807046422',
          cookie: false,
          xfbml: false,
          version: 'v3.2'
        };
        window.FB.init(params);
        window.FB.getLoginStatus((data) => {
          if (data.status === 'connected') {
            resolve(data.authResponse.accessToken);
          }
          resolve(null);
        });
      })
      .catch((error) => reject(new Error(error)));
  });
};

const asyncFacebookLogin = () => {
  return new Promise((resolve, reject) => {
    window.FB.login(
      (data) => {
        if (data.status === 'connected') {
          resolve(data.authResponse.accessToken);
        }
        reject(new Error('FACEBOOK_ERROR'));
      },
      { scope: 'email' }
    );
  });
};

export const loginByAuth = (email, password) => {
  return axios
    .post('/v1/auth/login', {
      email,
      password
    })
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      document.getElementById('root').classList.remove('login-page');
      document.getElementById('root').classList.remove('hold-transition');
      return Promise.resolve({ token: response.data.token });
    });
};

export const loginByGoogle = () => {
  const auth2 = window.gapi.auth2.getAuthInstance();

  return auth2
    .signIn()
    .then(
      (res) => {
        const basicProfile = res.getBasicProfile();
        const data = {};
        data.uid = basicProfile.getId();
        data.auth = res.getAuthResponse();
        return axios.post('/v1/google/login', { idToken: data.auth.id_token });
      },
      (err) => Promise.reject(err)
    )
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      document.getElementById('root').classList.remove('login-page');
      document.getElementById('root').classList.remove('hold-transition');
      return Promise.resolve({ token: response.data.token });
    });
};

export const loginByFacebook = () => {
  return (
    asyncFacebookGetLoginStatus()
      // eslint-disable-next-line consistent-return
      .then((accessToken) => {
        if (accessToken) {
          return Promise.resolve(accessToken);
        }
        return asyncFacebookLogin();
      })
      .then((accessToken) => {
        return axios.post('/v1/facebook/login', {
          accessToken
        });
      })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        document.getElementById('root').classList.remove('login-page');
        document.getElementById('root').classList.remove('hold-transition');
        return Promise.resolve({ token: response.data.token });
      })
  );
};
