import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from '../utils/axios';
import Button from '../components/button/Button';

const Register = () => {
  const [isAuthLoading, setAuthLoading] = useState(false);
  const [isGoogleAuthLoading, setGoogleAuthLoading] = useState(false);
  const [isFacebookAuthLoading, setFacebookAuthLoading] = useState(false);

  const history = useHistory();

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const passwordRetypeInputRef = useRef(null);

  const register = (event) => {
    if (passwordInputRef.current.value === passwordRetypeInputRef.current.value) {
      setAuthLoading(true);
      setTimeout(() => {
        axios
          .post('/v1/auth/signup', {
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value
          })
          .then((response) => {
            // localStorage.setItem('token', response.data.token);
            document.getElementById('root').classList.remove('register-page');
            document.getElementById('root').classList.remove('hold-transition');

            // eslint-disable-next-line no-console
            console.log('Response', response);
            setAuthLoading(false);
            toast.success('Kayıt başarılı');
            history.push('/login');
          })
          // eslint-disable-next-line no-unused-vars
          .catch((error) => {
            setAuthLoading(false);
            toast.error('Kayıt başarısız!');
          });
      }, 2000);
    } else {
      toast.warn('Şifreler uyuşmuyor!');
    }

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
              <input ref={emailInputRef} type="email" className="form-control" placeholder="Email" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input ref={passwordInputRef} type="password" className="form-control" placeholder="Password" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input ref={passwordRetypeInputRef} type="password" className="form-control" placeholder="Retype password" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-7">
                <div className="icheck-primary">
                  <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
                  <label htmlFor="agreeTerms">
                    <span>I agree to the </span>
                    <Link to="/">terms</Link>
                  </label>
                </div>
              </div>
              <div className="col-5">
                <Button type="submit" block isLoading={isAuthLoading} disabled={isFacebookAuthLoading || isGoogleAuthLoading}>
                  Register
                </Button>
              </div>
            </div>
          </form>
          <div className="social-auth-links text-center">
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
          <Link to="/login" className="text-center">
            I already have a membership
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
