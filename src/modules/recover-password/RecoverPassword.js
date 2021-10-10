import React, {useRef} from 'react';
import {toast} from 'react-toastify';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Input, Button} from '@components';
import {faLock} from '@fortawesome/free-solid-svg-icons';

const RecoverPassword = () => {
    const passwordInput = useRef(null);
    const confirmPasswordInput = useRef(null);
    const [t] = useTranslation();

    const confirm = (event) => {
        event.preventDefault();
        toast.warn('Not yet functional');
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
                    <p className="login-box-msg">{t('recover.oneStepAway')}</p>
                    <form onSubmit={confirm}>
                        <Input
                            ref={passwordInput}
                            className="mb-3"
                            type="password"
                            placeholder="Password"
                            icon={faLock}
                        />
                        <Input
                            ref={confirmPasswordInput}
                            className="mb-3"
                            type="password"
                            placeholder="Confirm Password"
                            icon={faLock}
                        />
                        <div className="row">
                            <div className="col-12">
                                <Button type="submit" block>
                                    {t('recover.changePassword')}
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

export default RecoverPassword;
