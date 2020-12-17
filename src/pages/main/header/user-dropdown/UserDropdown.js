import React, {useRef, useEffect, useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Moment from 'react-moment';
import {useTranslation} from 'react-i18next';

import * as ActionTypes from '../../../../store/actions';

const UserDropdown = ({user, onUserLogout}) => {
    const dropdownRef = useRef(null);
    const history = useHistory();
    const {t} = useTranslation();

    const [dropdownState, updateDropdownState] = useState({
        isDropdownOpen: false
    });

    const toggleDropdown = () => {
        updateDropdownState({isDropdownOpen: !dropdownState.isDropdownOpen});
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef &&
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            updateDropdownState({isDropdownOpen: false});
        }
    };

    const logOut = (event) => {
        toggleDropdown();
        event.preventDefault();
        onUserLogout();
        history.push('/login');
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside, false);
        return () => {
            document.removeEventListener(
                'mousedown',
                handleClickOutside,
                false
            );
        };
    });

    let className = 'dropdown-menu dropdown-menu-lg dropdown-menu-right';

    if (dropdownState.isDropdownOpen) {
        className += ' show';
    }

    return (
        <li ref={dropdownRef} className="nav-item dropdown user-menu">
            <button
                onClick={toggleDropdown}
                type="button"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
            >
                <img
                    src={user.picture || '/img/default-profile.png'}
                    className="user-image img-circle elevation-2"
                    alt="User"
                />
                {/* <span className="d-none d-md-inline">{email}</span> */}
            </button>
            <ul className={className}>
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
                            <Moment format="D MMM YYYY" withTitle>
                                {user.createdAt}
                            </Moment>
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
                    <Link
                        to="/profile"
                        onClick={toggleDropdown}
                        className="btn btn-default btn-flat"
                    >
                        {t('header.user.profile')}
                    </Link>
                    <button
                        type="button"
                        className="btn btn-default btn-flat float-right"
                        onClick={logOut}
                    >
                        {t('login.button.signOut')}
                    </button>
                </li>
            </ul>
        </li>
    );
};

const mapStateToProps = (state) => ({
    user: state.auth.currentUser
});

const mapDispatchToProps = (dispatch) => ({
    onUserLogout: () => dispatch({type: ActionTypes.LOGOUT_USER})
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown);
