import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from '../utils/axios';

const Register = () => {
  const history = useHistory();

  let emailInput = null;
  let passwordInput = null;
  let passwordRetypeInput = null;

  const setEmailInputRef = (element) => {
    emailInput = element;
  };

  const setPasswordInputRef = (element) => {
    passwordInput = element;
  };

  const setPasswordRetypeInputRef = (element) => {
    passwordRetypeInput = element;
  };

  const register = (event) => {
    if (passwordInput.value === passwordRetypeInput.value) {
      axios
        .post('/v1/auth/signup', {
          email: emailInput.value,
          password: passwordInput.value
        })
        .then((response) => {
          // localStorage.setItem('token', response.data.token);
          document.getElementById('root').classList.remove('register-page');
          document.getElementById('root').classList.remove('hold-transition');

          // eslint-disable-next-line no-console
          console.log('Response', response);
          toast.success('Kayıt başarılı');
          history.push('/login');
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
          toast.error('Kayıt başarısız!');
        });
    } else {
      toast.warn('Şifreler uyuşmuyor!');
    }

    event.preventDefault();
  };

  document.getElementById('root').classList = 'hold-transition register-page';

  return (
    <div className="register-box">
      <div className="register-logo">
        <Link to="/">
          <b>Admin</b>
          <span>LTE</span>
        </Link>
      </div>
      <div className="card">
        <div className="card-body register-card-body">
          <p className="login-box-msg">Register a new membership</p>
          <form onSubmit={register}>
            <div className="input-group mb-3">
              <input ref={setEmailInputRef} type="email" className="form-control" placeholder="Email" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input ref={setPasswordInputRef} type="password" className="form-control" placeholder="Password" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input ref={setPasswordRetypeInputRef} type="password" className="form-control" placeholder="Retype password" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <div className="icheck-primary">
                  <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
                  <label htmlFor="agreeTerms">
                    <span>I agree to the </span>
                    <Link to="/">terms</Link>
                  </label>
                </div>
              </div>
              <div className="col-4">
                <button type="submit" className="btn btn-primary btn-block">
                  Register
                </button>
              </div>
            </div>
          </form>
          <div className="social-auth-links text-center">
            <p>- OR -</p>
            <button type="button" className="btn btn-block btn-primary">
              <i className="fab fa-facebook mr-2" />
              <span>Sign up using Facebook</span>
            </button>
            <button type="button" className="btn btn-block btn-danger">
              <i className="fab fa-google-plus mr-2" />
              <span>Sign up using Google+</span>
            </button>
          </div>
          <Link to="/login" className="text-center">
            I already have a membership
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
