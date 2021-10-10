import React from 'react';
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import {useTranslation} from 'react-i18next';
import {Input, Button} from '@components';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

const ForgotPassword = () => {
    const [t] = useTranslation();
    let emailInput = null;

    const setEmailInputRef = (element) => {
        emailInput = element;
    };

    const requestNewPassword = (event) => {
        toast.warn('Not yet functional');
        // eslint-disable-next-line no-console
        console.log(emailInput);
        event.preventDefault();
    };

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
                    <p className="login-box-msg">
                        {t('recover.forgotYourPassword')}
                    </p>
                    <form onSubmit={requestNewPassword}>
                        <Input
                            className="mb-3"
                            icon={faEnvelope}
                            ref={setEmailInputRef}
                            type="email"
                            placeholder="Email"
                        />
                        <div className="row">
                            <div className="col-12">
                                <Button type="submit" block>
                                    {t('recover.requestNewPassword')}
                                </Button>
                            </div>
                        </div>
                    </form>
                    <p className="mt-3 mb-1">
                        <Link to="/login">
                            {t('login.button.signIn.label')}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
