import React, {useRef, useEffect, useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Moment from 'react-moment';

import * as ActionTypes from '../../../../store/actions';

const UserDropdown = (props) => {
    const {
        user: {email, picture, createdAt},
        onUserLogout
    } = props;

    const dropdownRef = useRef(null);
    const history = useHistory();

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
                    src={picture || '/img/default-profile.png'}
                    className="user-image img-circle elevation-2"
                    alt="User"
                />
                {/* <span className="d-none d-md-inline">{email}</span> */}
            </button>
            <ul className={className}>
                <li className="user-header bg-primary">
                    <img
                        src={picture || '/img/default-profile.png'}
                        className="img-circle elevation-2"
                        alt="User"
                    />
                    <p>
                        {/* Alexander Pierce - Web Developer */}
                        {email}
                        <small>
                            <span>Member since </span>
                            <Moment format="D MMM YYYY" withTitle>
                                {createdAt}
                            </Moment>
                        </small>
                    </p>
                </li>
                <li className="user-body">
                    <div className="row">
                        <div className="col-4 text-center">
                            <Link to="/">Followers</Link>
                        </div>
                        <div className="col-4 text-center">
                            <Link to="/">Sales</Link>
                        </div>
                        <div className="col-4 text-center">
                            <Link to="/">Friends</Link>
                        </div>
                    </div>
                </li>
                <li className="user-footer">
                    <Link
                        to="/profile"
                        onClick={toggleDropdown}
                        className="btn btn-default btn-flat"
                    >
                        Profile
                    </Link>
                    <button
                        type="button"
                        className="btn btn-default btn-flat float-right"
                        onClick={logOut}
                    >
                        Sign out
                    </button>
                </li>
            </ul>
        </li>
    );
};

UserDropdown.propTypes = {
    user: PropTypes.shape({
        email: PropTypes.string.isRequired,
        createdAt: PropTypes.string,
        picture: PropTypes.string
    }).isRequired,
    onUserLogout: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    user: state.auth.currentUser
});

const mapDispatchToProps = (dispatch) => ({
    onUserLogout: () => dispatch({type: ActionTypes.LOGOUT_USER})
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown);
