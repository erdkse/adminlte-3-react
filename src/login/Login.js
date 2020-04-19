import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from '../utils/axios';
import Button from '../components/button/Button';

const Login = () => {
  const [isAuthLoading, setAuthLoading] = useState(false);
  const [isGoogleAuthLoading, setGoogleAuthLoading] = useState(false);
  const [isFacebookAuthLoading, setFacebookAuthLoading] = useState(false);

  const history = useHistory();

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const login = (event) => {
    setAuthLoading(true);
    setTimeout(() => {
      axios
        .post('/v1/auth/signin', {
          email: emailInputRef.current.value,
          password: passwordInputRef.current.value
        })
        .then((response) => {
          localStorage.setItem('token', response.data.token);
          document.getElementById('root').classList.remove('login-page');
          document.getElementById('root').classList.remove('hold-transition');

          toast.success('Giriş başarılı');
          history.push('/');
          setAuthLoading(false);
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
          setAuthLoading(false);
          toast.error('Giriş başarısız!');
        });
    }, 2000);

    event.preventDefault();
  };

  const loginByGoogle = () => {
    setGoogleAuthLoading(true);
    const auth2 = window.gapi.auth2.getAuthInstance();

    auth2.signIn().then(
      (res) => {
        // If authorization pass well, we take profile info
        const basicProfile = res.getBasicProfile();
        const data = {};
        data.identity = {
          uid: basicProfile.getId(),
          provider: 'google'
        };
        data.user = {
          email: basicProfile.getEmail(),
          firstName: basicProfile.getGivenName(),
          lastName: basicProfile.getFamilyName()
        };
        data.auth = res.getAuthResponse();

        // Send data to back end
        setGoogleAuthLoading(false);
        // eslint-disable-next-line no-console
        console.log(data);
      },
      (err) => {
        setGoogleAuthLoading(false);
        // eslint-disable-next-line no-console
        console.log('ERROR', err);
      }
    );
  };

  const loginByFacebook = () => {
    setFacebookAuthLoading(true);

    window.FB.getLoginStatus((resp) => {
      // eslint-disable-next-line no-console
      console.log('FB:status:', resp.status);

      if (resp.status === 'connected') {
        // Send data to back end
        // eslint-disable-next-line no-console
        console.log('SUCCESS', resp);
        setFacebookAuthLoading(false);
        return;
      }

      window.FB.login(
        (response) => {
          // eslint-disable-next-line no-console
          console.log('FB:status:', response.status);
          if (response.authResponse) {
            // eslint-disable-next-line no-console
            console.log('SUCCESS', response);
            setFacebookAuthLoading(false);
          }
        },
        { scope: 'email' }
      );
    });
  };

  document.getElementById('root').classList = 'hold-transition login-page';

  return (
    <div className="login-box">
      <div className="login-logo">
        <Link to="/">
          <b>Admin</b>
          <span>LTE</span>
        </Link>
      </div>
      <div className="card">
        <div className="card-body login-card-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <form onSubmit={login}>
            <div className="input-group mb-3">
              <input type="email" ref={emailInputRef} className="form-control" placeholder="Email" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input type="password" ref={passwordInputRef} className="form-control" placeholder="Password" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-7">
                <div className="icheck-primary">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember Me</label>
                </div>
              </div>
              <div className="col-5">
                <Button block type="submit" isLoading={isAuthLoading} disabled={isFacebookAuthLoading || isGoogleAuthLoading}>
                  Sign In
                </Button>
              </div>
            </div>
          </form>
          <div className="social-auth-links text-center mb-3">
            <p>- OR -</p>
            <Button
              block
              icon="facebook"
              onClick={loginByFacebook}
              isLoading={isFacebookAuthLoading}
              disabled={isAuthLoading || isGoogleAuthLoading}
            >
              Sign in using Facebook
            </Button>
            <Button
              block
              icon="google"
              color="danger"
              onClick={loginByGoogle}
              isLoading={isGoogleAuthLoading}
              disabled={isAuthLoading || isFacebookAuthLoading}
            >
              Sign in using Google
            </Button>
          </div>
          <p className="mb-1">
            <Link to="/forgot-password">I forgot my password</Link>
          </p>
          <p className="mb-0">
            <Link to="/register" className="text-center">
              Register a new membership
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
