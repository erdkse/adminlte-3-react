import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {toast} from 'react-toastify';
import {connect} from 'react-redux';
import {useFormik} from 'formik';
import {useTranslation} from 'react-i18next';

import * as Yup from 'yup';

import * as AuthService from '../../services/auth';
import Button from '../../components/button/Button';
import * as ActionTypes from '../../store/actions';

const Login = ({onUserLogin}) => {
    const [isAuthLoading, setAuthLoading] = useState(false);
    const [isGoogleAuthLoading, setGoogleAuthLoading] = useState(false);
    // const [isFacebookAuthLoading, setFacebookAuthLoading] = useState(false);

    const history = useHistory();
    const [t] = useTranslation();

    const login = (email, password) => {
        setAuthLoading(true);
        AuthService.loginByAuth(email, password)
            .then((token) => {
                toast.success('Login is succeed!');
                setAuthLoading(false);
                onUserLogin(token);
                history.push('/');
            })
            .catch((error) => {
                setAuthLoading(false);
                toast.error(
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                        'Failed'
                );
            });
    };

    const loginByGoogle = () => {
        setGoogleAuthLoading(true);
        AuthService.loginByGoogle()
            .then((token) => {
                toast.success('Login is succeeded!');
                setGoogleAuthLoading(false);
                onUserLogin(token);
                history.push('/');
            })
            .catch((error) => {
                setGoogleAuthLoading(false);
                toast.error(
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                        'Failed'
                );
            });
    };

    // const loginByFacebook = () => {
    //     setFacebookAuthLoading(true);

    //     AuthService.loginByFacebook()
    //         .then((token) => {
    //             toast.success('Login is succeeded!');
    //             setFacebookAuthLoading(false);
    //             onUserLogin(token);

    //             history.push('/');
    //         })
    //         .catch((error) => {
    //             setFacebookAuthLoading(false);
    //             toast.error(
    //                 (error.response &&
    //                     error.response.data &&
    //                     error.response.data.message) ||
    //                     'Failed'
    //             );
    //         });
    // };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .min(5, 'Must be 5 characters or more')
                .max(30, 'Must be 30 characters or less')
                .required('Required')
        }),
        onSubmit: (values) => {
            login(values.email, values.password);
        }
    });

    document.getElementById('root').classList = 'hold-transition login-page';

    return (
        <div className="login-box">
            <div className="card card-outline card-primary">
                <div className="card-header text-center">
                    <Link to="/" className="h1">
                        <b>Admin</b>
                        <span>LTE</span>
                    </Link>
                </div>
                <div className="card-body">
                    <p className="login-box-msg">{t('login.label.signIn')}</p>
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

                        <div className="row">
                            <div className="col-8">
                                <div className="icheck-primary">
                                    <input type="checkbox" id="remember" />
                                    <label htmlFor="remember">
                                        {t('login.label.rememberMe')}
                                    </label>
                                </div>
                            </div>
                            <div className="col-4">
                                <Button
                                    block
                                    type="submit"
                                    isLoading={isAuthLoading}
                                    // disabled={
                                    //     isFacebookAuthLoading ||
                                    //     isGoogleAuthLoading
                                    // }
                                    disabled={isGoogleAuthLoading}
                                >
                                    {t('login.button.signIn.label')}
                                </Button>
                            </div>
                        </div>
                    </form>
                    <div className="social-auth-links text-center mt-2 mb-3">
                        {/* <Button
                            block
                            icon="facebook"
                            onClick={loginByFacebook}
                            isLoading={isFacebookAuthLoading}
                            disabled={isAuthLoading || isGoogleAuthLoading}
                        >
                            {t('login.button.signIn.social', {
                                what: 'Facebook'
                            })}
                        </Button> */}
                        <Button
                            block
                            icon="google"
                            theme="danger"
                            onClick={loginByGoogle}
                            isLoading={isGoogleAuthLoading}
                            // disabled={isAuthLoading || isFacebookAuthLoading}
                            disabled={isAuthLoading}
                        >
                            {t('login.button.signIn.social', {what: 'Google'})}
                        </Button>
                    </div>
                    <p className="mb-1">
                        <Link to="/forgot-password">
                            {t('login.label.forgotPass')}
                        </Link>
                    </p>
                    <p className="mb-0">
                        <Link to="/register" className="text-center">
                            {t('login.label.registerNew')}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    onUserLogin: (token) => dispatch({type: ActionTypes.LOGIN_USER, token})
});

export default connect(null, mapDispatchToProps)(Login);
