import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from '../utils/axios';
import Button from '../components/Button';

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
    setTimeout(() => {
      toast.warn('Not implemented yet');
      setGoogleAuthLoading(false);
    }, 2000);
  };

  const loginByFacebook = () => {
    setFacebookAuthLoading(true);
    setTimeout(() => {
      toast.warn('Not implemented yet');
      setFacebookAuthLoading(false);
    }, 2000);
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
              <div className="col-8">
                <div className="icheck-primary">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember Me</label>
                </div>
              </div>
              <div className="col-4">
                <Button
                  block
                  text="Sign In"
                  type="submit"
                  isLoading={isAuthLoading}
                  disabled={isFacebookAuthLoading || isGoogleAuthLoading}
                />
              </div>
            </div>
          </form>
          <div className="social-auth-links text-center mb-3">
            <p>- OR -</p>
            <Button
              block
              icon="facebook"
              text="Sign in using Facebook"
              onClick={loginByFacebook}
              isLoading={isFacebookAuthLoading}
              disabled={isAuthLoading || isGoogleAuthLoading}
            />
            <Button
              block
              icon="google"
              theme="danger"
              text="Sign in using Google"
              onClick={loginByGoogle}
              isLoading={isGoogleAuthLoading}
              disabled={isAuthLoading || isFacebookAuthLoading}
            />
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
