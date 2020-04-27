import axios from '../utils/axios';
import {
  addGoogleScript,
  addFacebookScript
} from '../utils/social-auth-scripts';

const asyncGoogleGetAuthInstance = () => {
  return new Promise((resolve, reject) => {
    addGoogleScript()
      .then(() => {
        const params = {
          client_id:
            '611723947949-kc52mv7i8t1bt0v8vson1h9nae0rer35.apps.googleusercontent.com',
          scope: 'openid profile email',
          cookie_policy: 'single_host_origin',
          fetch_basic_profile: true
        };

        window.gapi.load('auth2', () => {
          if (!window.gapi.auth2.getAuthInstance()) {
            window.gapi.auth2.init(params);
          }
          resolve(window.gapi.auth2.getAuthInstance().signIn());
        });
      })
      .catch(() => reject(new Error('ADD_SCRIPT_ERROR')));
  });
};

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
      .catch(() => reject(new Error('ADD_SCRIPT_ERROR')));
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
  return asyncGoogleGetAuthInstance()
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
