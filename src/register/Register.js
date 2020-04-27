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
    if (
      passwordInputRef.current.value === passwordRetypeInputRef.current.value
    ) {
      setAuthLoading(true);
      axios
        .post('/v1/auth/register', {
          email: emailInputRef.current.value,
          password: passwordInputRef.current.value
        })
        .then((response) => {
          localStorage.setItem('token', response.data.token);
          document.getElementById('root').classList.remove('register-page');
          document.getElementById('root').classList.remove('hold-transition');
          setAuthLoading(false);
          toast.success('Registration is success');
          history.push('/');
        })
        .catch((error) => {
          setAuthLoading(false);
          toast.error(error.response.data.message);
        });
    } else {
      toast.warn('Password mismatch!');
    }

    event.preventDefault();
  };

  const loginByGoogle = () => {
    setGoogleAuthLoading(true);
    const auth2 = window.gapi.auth2.getAuthInstance();

    auth2
      .signIn()
      .then(
        (res) => {
          const basicProfile = res.getBasicProfile();
          const data = {};
          data.uid = basicProfile.getId();
          data.auth = res.getAuthResponse();
          return axios.post('/v1/google/register', {
            idToken: data.auth.id_token
          });
        },
        (err) => Promise.reject(err)
      )
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        document.getElementById('root').classList.remove('register-page');
        document.getElementById('root').classList.remove('hold-transition');
        setGoogleAuthLoading(false);
        toast.success('Authentication is succeed!');
        history.push('/');
      })
      .catch((error) => {
        setGoogleAuthLoading(false);
        toast.error(error.response.data.message);
      });
  };

  const loginByFacebook = () => {
    setFacebookAuthLoading(true);

    window.FB.getLoginStatus((resp) => {
      if (resp.status === 'connected') {
        axios
          .post('/v1/facebook/register', {
            accessToken: resp.authResponse.accessToken
          })
          .then((response) => {
            localStorage.setItem('token', response.data.token);
            document.getElementById('root').classList.remove('register-page');
            document.getElementById('root').classList.remove('hold-transition');
            setFacebookAuthLoading(false);
            toast.success('Registration is succeed!');
            history.push('/');
          })
          .catch((error) => {
            setFacebookAuthLoading(false);
            toast.error(error.response.data.message);
          });
        return;
      }

      window.FB.login(
        (data) => {
          if (data.authResponse) {
            axios
              .post('/v1/facebook/register', {
                accessToken: data.authResponse.accessToken
              })
              .then((response) => {
                localStorage.setItem('token', response.data.token);
                document
                  .getElementById('root')
                  .classList.remove('register-page');
                document
                  .getElementById('root')
                  .classList.remove('hold-transition');
                setFacebookAuthLoading(false);
                toast.success('Registration is succeed!');
                history.push('/');
              })
              .catch((error) => {
                setFacebookAuthLoading(false);
                toast.error(error.response.data.message);
              });
            setFacebookAuthLoading(false);
          } else {
            setFacebookAuthLoading(false);
            toast.error('Registration is failed!');
            // eslint-disable-next-line no-console
            console.log('ERROR2', data);
          }
        },
        { scope: 'email' }
      );
    });
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
              <input
                ref={emailInputRef}
                type="email"
                className="form-control"
                placeholder="Email"
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                ref={passwordInputRef}
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                ref={passwordRetypeInputRef}
                type="password"
                className="form-control"
                placeholder="Retype password"
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-7">
                <div className="icheck-primary">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="terms"
                    defaultValue="agree"
                  />
                  <label htmlFor="agreeTerms">
                    <span>I agree to the </span>
                    <Link to="/">terms</Link>
                  </label>
                </div>
              </div>
              <div className="col-5">
                <Button
                  type="submit"
                  block
                  isLoading={isAuthLoading}
                  disabled={isFacebookAuthLoading || isGoogleAuthLoading}
                >
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
