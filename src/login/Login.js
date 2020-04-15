import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from '../utils/axios';

const Login = () => {
  const history = useHistory();

  let emailInput = null;
  let passwordInput = null;

  const setEmailInputRef = (element) => {
    emailInput = element;
  };

  const setPasswordInputRef = (element) => {
    passwordInput = element;
  };

  const login = (event) => {
    axios
      .post('/v1/auth/signin', {
        email: emailInput.value,
        password: passwordInput.value
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
              <input type="email" ref={setEmailInputRef} className="form-control" placeholder="Email" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input type="password" ref={setPasswordInputRef} className="form-control" placeholder="Password" />
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
                <button type="submit" className="btn btn-primary btn-block">
                  Sign In
                </button>
              </div>
            </div>
          </form>
          <div className="social-auth-links text-center mb-3">
            <p>- OR -</p>
            <button type="button" className="btn btn-block btn-primary">
              <i className="fab fa-facebook mr-2" />
              <span> Sign in using Facebook</span>
            </button>
            <button type="button" className="btn btn-block btn-danger">
              <i className="fab fa-google-plus mr-2" />
              <span> Sign in using Google+</span>
            </button>
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
