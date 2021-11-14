import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import {toast} from 'react-toastify';
import {useFormik} from 'formik';
import {useTranslation} from 'react-i18next';
import {loginUser} from '@store/reducers/auth';
import {Checkbox, Button, Input} from '@components';
import {faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';

import * as Yup from 'yup';

import * as AuthService from '../../services/auth';

const Login = () => {
    const [isAuthLoading, setAuthLoading] = useState(false);
    const [isGoogleAuthLoading, setGoogleAuthLoading] = useState(false);
    const [isFacebookAuthLoading, setFacebookAuthLoading] = useState(false);
    const dispatch = useDispatch();

    const history = useHistory();
    const [t] = useTranslation();

    const login = async (email, password) => {
        try {
            setAuthLoading(true);
            const token = await AuthService.loginByAuth(email, password);
            toast.success('Login is succeed!');
            setAuthLoading(false);
            dispatch(loginUser(token));
            history.push('/');
        } catch (error) {
            setAuthLoading(false);
            toast.error(error.message || 'Failed');
        }
    };

    const loginByGoogle = async () => {
        try {
            setGoogleAuthLoading(true);
            const token = await AuthService.loginByGoogle();
            toast.success('Login is succeeded!');
            setGoogleAuthLoading(false);
            dispatch(loginUser(token));
            history.push('/');
        } catch (error) {
            setGoogleAuthLoading(false);
            toast.error(error.message || 'Failed');
        }
    };

    const loginByFacebook = async () => {
        try {
            setFacebookAuthLoading(true);
            const token = await AuthService.loginByFacebook();
            toast.success('Login is succeeded!');
            setFacebookAuthLoading(false);
            dispatch(loginUser(token));
            history.push('/');
        } catch (error) {
            setFacebookAuthLoading(false);
            toast.error(error.message || 'Failed');
        }
    };

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
                            <Input
                                icon={faEnvelope}
                                placeholder="Email"
                                type="email"
                                formik={formik}
                                formikFieldProps={formik.getFieldProps('email')}
                            />
                        </div>
                        <div className="mb-3">
                            <Input
                                icon={faLock}
                                placeholder="Password"
                                type="password"
                                formik={formik}
                                formikFieldProps={formik.getFieldProps(
                                    'password'
                                )}
                            />
                        </div>

                        <div className="row">
                            <div className="col-8">
                                <Checkbox
                                    checked={false}
                                    label={t('login.label.rememberMe')}
                                />
                            </div>
                            <div className="col-4">
                                <Button
                                    block
                                    type="submit"
                                    isLoading={isAuthLoading}
                                    disabled={
                                        isFacebookAuthLoading ||
                                        isGoogleAuthLoading
                                    }
                                >
                                    {t('login.button.signIn.label')}
                                </Button>
                            </div>
                        </div>
                    </form>
                    <div className="social-auth-links text-center mt-2 mb-3">
                        <Button
                            block
                            icon="facebook"
                            onClick={loginByFacebook}
                            isLoading={isFacebookAuthLoading}
                            disabled={isAuthLoading || isGoogleAuthLoading}
                        >
                            {t('login.button.signIn.social', {
                                what: 'Facebook'
                            })}
                        </Button>
                        <Button
                            block
                            icon="google"
                            theme="danger"
                            onClick={loginByGoogle}
                            isLoading={isGoogleAuthLoading}
                            disabled={isAuthLoading || isFacebookAuthLoading}
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

export default Login;
