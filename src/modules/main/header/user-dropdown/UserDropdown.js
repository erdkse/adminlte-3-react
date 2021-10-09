import React, {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {DateTime} from 'luxon';
import {useTranslation} from 'react-i18next';
import {logoutUser} from '@store/reducers/auth';
import {Dropdown} from '@components';

const UserDropdown = () => {
    const history = useHistory();
    const [t] = useTranslation();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.currentUser);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const logOut = (event) => {
        event.preventDefault();
        setDropdownOpen(false);
        dispatch(logoutUser());
        history.push('/login');
    };

    const navigateToProfile = (event) => {
        event.preventDefault();
        setDropdownOpen(false);
        history.push('/profile');
    };

    return (
        <Dropdown
            isOpen={dropdownOpen}
            onChange={(open) => setDropdownOpen(open)}
            className="user-menu"
            menuContainerTag="ul"
            buttonTemplate={
                <img
                    src={user.picture || '/img/default-profile.png'}
                    className="user-image img-circle elevation-2"
                    alt="User"
                />
            }
            menuTemplate={
                <>
                    <li className="user-header bg-primary">
                        <img
                            src={user.picture || '/img/default-profile.png'}
                            className="img-circle elevation-2"
                            alt="User"
                        />
                        <p>
                            {user.email}
                            <small>
                                <span>Member since </span>
                                <span>
                                    {DateTime.fromISO(user.createdAt).toFormat(
                                        'dd LLL yyyy'
                                    )}
                                </span>
                            </small>
                        </p>
                    </li>
                    <li className="user-body">
                        <div className="row">
                            <div className="col-4 text-center">
                                <Link to="/">{t('header.user.followers')}</Link>
                            </div>
                            <div className="col-4 text-center">
                                <Link to="/">{t('header.user.sales')}</Link>
                            </div>
                            <div className="col-4 text-center">
                                <Link to="/">{t('header.user.friends')}</Link>
                            </div>
                        </div>
                    </li>
                    <li className="user-footer">
                        <button
                            type="button"
                            className="btn btn-default btn-flat"
                            onClick={navigateToProfile}
                        >
                            {t('header.user.profile')}
                        </button>
                        <button
                            type="button"
                            className="btn btn-default btn-flat float-right"
                            onClick={logOut}
                        >
                            {t('login.button.signOut')}
                        </button>
                    </li>
                </>
            }
        />
    );
};

export default UserDropdown;
