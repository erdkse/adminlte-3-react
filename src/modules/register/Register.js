import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {toast} from 'react-toastify';
import {useFormik} from 'formik';
import {useTranslation} from 'react-i18next';
import * as Yup from 'yup';
import {loginUser} from '@store/reducers/auth';
import {Button, Checkbox, Input} from '@components';
import {faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';

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
            toast.error(error.message || 'Failed');
            setAuthLoading(false);
        }
    };

    const registerByGoogle = async () => {
        try {
            setGoogleAuthLoading(true);
            const token = await AuthService.registerByGoogle();
            setGoogleAuthLoading(false);
            dispatch(loginUser(token));
            toast.success('Authentication is succeed!');
            history.push('/');
        } catch (error) {
            toast.error(error.message || 'Failed');
            setGoogleAuthLoading(false);
        }
    };

    const registerByFacebook = async () => {
        try {
            setFacebookAuthLoading(true);

            const token = await AuthService.registerByFacebook();
            setFacebookAuthLoading(false);
            dispatch(loginUser(token));
            toast.success('Register is succeeded!');
            history.push('/');
        } catch (error) {
            setFacebookAuthLoading(false);
            toast.error(error.message || 'Failed');
        }
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
                            <Input
                                type="email"
                                placeholder="Email"
                                icon={faEnvelope}
                                formik={formik}
                                formikFieldProps={formik.getFieldProps('email')}
                            />
                        </div>
                        <div className="mb-3">
                            <Input
                                type="password"
                                placeholder="Password"
                                icon={faLock}
                                formik={formik}
                                formikFieldProps={formik.getFieldProps(
                                    'password'
                                )}
                            />
                        </div>

                        <div className="mb-3">
                            <Input
                                type="password"
                                placeholder="Retype password"
                                icon={faLock}
                                formik={formik}
                                formikFieldProps={formik.getFieldProps(
                                    'passwordRetype'
                                )}
                            />
                        </div>
                        <div className="row">
                            <div className="col-7">
                                <Checkbox
                                    checked={false}
                                    label={
                                        <>
                                            <span>I agree to the </span>
                                            <Link to="/">terms</Link>
                                        </>
                                    }
                                />
                            </div>
                            <div className="col-5">
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
                            onClick={registerByFacebook}
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
                            onClick={registerByGoogle}
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
