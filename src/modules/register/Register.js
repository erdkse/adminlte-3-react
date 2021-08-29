import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {toast} from 'react-toastify';
import {useFormik} from 'formik';
import {useTranslation} from 'react-i18next';
import * as Yup from 'yup';
import {loginUser} from '@store/reducers/auth';

import {Button} from '@components';
import * as AuthService from '../../services/auth';

const Register = () => {
    const [isAuthLoading, setAuthLoading] = useState(false);
    const [isGoogleAuthLoading, setGoogleAuthLoading] = useState(false);
    const [isFacebookAuthLoading, setFacebookAuthLoading] = useState(false);
    const [t] = useTranslation();
    const dispatch = useDispatch();

    const history = useHistory();

    const register = async (email, password) => {
        try {
            setAuthLoading(true);
            const token = await AuthService.registerByAuth(email, password);
            setAuthLoading(false);
            dispatch(loginUser(token));
            toast.success('Registration is success');
            history.push('/');
        } catch (error) {
            toast.error(
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    'Failed'
            );
            setAuthLoading(false);
        }
    };

    const loginByGoogle = async () => {
        try {
            setGoogleAuthLoading(true);
            const token = await AuthService.registerByGoogle();
            setGoogleAuthLoading(false);
            dispatch(loginUser(token));
            toast.success('Authentication is succeed!');
            history.push('/');
        } catch (error) {
            toast.error(
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    'Failed'
            );
            setGoogleAuthLoading(false);
        }
    };

    const loginByFacebook = async () => {
        try {
            setFacebookAuthLoading(true);

            const token = await AuthService.registerByFacebook();
            setFacebookAuthLoading(false);
            dispatch(loginUser(token));
            toast.success('Register is succeeded!');
            history.push('/');
        } catch (error) {
            setFacebookAuthLoading(false);
            toast.error(
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    'Failed'
            );
        }
    };

    const printFormError = (formik, key) => {
        if (formik.touched[key] && formik.errors[key]) {
            return <div>{formik.errors[key]}</div>;
        }
        return null;
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
                    <p className="login-box-msg">{t('register.registerNew')}</p>
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
                            {printFormError(formik, 'password')}
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

                            {printFormError(formik, 'passwordRetype')}
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
                                    {t('register.label')}
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
                            {t('login.button.signUp.social', {
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
                            {t('login.button.signUp.social', {what: 'Google'})}
                        </Button>
                    </div>
                    <Link to="/login" className="text-center">
                        {t('register.alreadyHave')}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
