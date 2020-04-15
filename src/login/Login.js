import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from '../utils/axios';
import Button from '../components/Button';

const Login = () => {
  const history = useHistory();

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const login = (event) => {
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
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        toast.error('Giriş başarısız!');
      });

    event.preventDefault();
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
                <Button block text="Sign In" type="submit" />
              </div>
            </div>
          </form>
          <div className="social-auth-links text-center mb-3">
            <p>- OR -</p>
            <Button block icon="facebook" text="Sign in using Facebook" />
            <Button block icon="google" text="Sign in using Google" theme="danger" />
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
