import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {toast} from 'react-toastify';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import Button from '../../components/button/Button';
import * as AuthService from '../../services/auth';
import * as ActionTypes from '../../store/actions';

const Register = (props) => {
    const {onUserLogin} = props;

    const [isAuthLoading, setAuthLoading] = useState(false);
    const [isGoogleAuthLoading, setGoogleAuthLoading] = useState(false);
    const [isFacebookAuthLoading, setFacebookAuthLoading] = useState(false);

    const history = useHistory();

    const register = (email, password) => {
        setAuthLoading(true);
        AuthService.registerByAuth(email, password)
            .then((token) => {
                setAuthLoading(false);
                onUserLogin(token);
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
            .then((token) => {
                setGoogleAuthLoading(false);
                onUserLogin(token);
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
            .then((token) => {
                setFacebookAuthLoading(false);
                onUserLogin(token);
                toast.success('Register is succeeded!');
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
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .min(5, 'Must be 5 characters or more')
                .max(30, 'Must be 30 characters or less')
                .required('Required'),
            passwordRetype: Yup.string()
                .min(5, 'Must be 5 characters or more')
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
            <div className="card card-outline card-primary">
                <div className="card-header text-center">
                    <Link to="/" className="h1">
                        <b>Admin</b>
                        <span>LTE</span>
                    </Link>
                </div>
                <div className="card-body">
                    <p className="login-box-msg">Register a new membership</p>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-3">
                            <div className="input-group">
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
                            {formik.touched.email && formik.errors.email ? (
                                <div>{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <div className="input-group">
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
                            {formik.touched.password &&
                            formik.errors.password ? (
                                <div>{formik.errors.password}</div>
                            ) : null}
                        </div>

                        <div className="mb-3">
                            <div className="input-group">
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
                            {formik.touched.passwordRetype &&
                            formik.errors.passwordRetype ? (
                                <div>{formik.errors.passwordRetype}</div>
                            ) : null}
                        </div>
                        <div className="row">
                            <div className="col-8">
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
                            <div className="col-4">
                                <Button
                                    type="submit"
                                    block
                                    isLoading={isAuthLoading}
                                    disabled={
                                        isFacebookAuthLoading ||
                                        isGoogleAuthLoading
                                    }
                                >
                                    Register
                                </Button>
                            </div>
                        </div>
                    </form>
                    <div className="social-auth-links text-center">
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
                            theme="danger"
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

Register.propTypes = {
    onUserLogin: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
    onUserLogin: (token) => dispatch({type: ActionTypes.LOGIN_USER, token})
});

export default connect(null, mapDispatchToProps)(Register);
