import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Button from '../../components/button/Button';
import * as AuthService from '../../services/auth';

const Register = () => {
  const [isAuthLoading, setAuthLoading] = useState(false);
  const [isGoogleAuthLoading, setGoogleAuthLoading] = useState(false);
  const [isFacebookAuthLoading, setFacebookAuthLoading] = useState(false);

  const history = useHistory();

  const register = (email, password) => {
    setAuthLoading(true);
    AuthService.registerByAuth(email, password)
      .then(() => {
        setAuthLoading(false);
        toast.success('Registration is success');
        history.push('/');
      })
      .catch((error) => {
        toast.error(
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
            'Failed'
        );
        setAuthLoading(false);
      });
  };

  const loginByGoogle = () => {
    setGoogleAuthLoading(true);
    AuthService.registerByGoogle()
      .then(() => {
        setGoogleAuthLoading(false);
        toast.success('Authentication is succeed!');
        history.push('/');
      })
      .catch((error) => {
        toast.error(
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
            'Failed'
        );
        setGoogleAuthLoading(false);
      });
  };

  const loginByFacebook = () => {
    setFacebookAuthLoading(true);

    AuthService.loginByFacebook()
      .then(() => {
        toast.success('Register is succeeded!');
        setFacebookAuthLoading(false);
        history.push('/');
      })
      .catch((error) => {
        setFacebookAuthLoading(false);
        toast.error(
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
            'Failed'
        );
      });
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordRetype: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(6, 'Must be 6 characters or more')
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
      passwordRetype: Yup.string()
        .min(6, 'Must be 6 characters or more')
        .max(30, 'Must be 30 characters or less')
        .required('Required')
        .when('password', {
          is: (val) => !!(val && val.length > 0),
          then: Yup.string().oneOf(
            [Yup.ref('password')],
            'Both password need to be the same'
          )
        })
    }),
    onSubmit: (values) => {
      register(values.email, values.password);
    }
  });

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
          <form onSubmit={formik.handleSubmit}>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                {...formik.getFieldProps('email')}
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                {...formik.getFieldProps('password')}
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Retype password"
                {...formik.getFieldProps('passwordRetype')}
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
