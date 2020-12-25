import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import Messages from './messages-dropdown/MessagesDropdown';
import Notifications from './notifications-dropdown/NotificationsDropdown';
import Languages from './languages-dropdown/LanguagesDropdown';
import User from './user-dropdown/UserDropdown';

const Header = ({toggleMenuSidebar}) => {
    const [t] = useTranslation();
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            {/* Left navbar links */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <button
                        onClick={() => toggleMenuSidebar()}
                        type="button"
                        className="nav-link"
                        data-widget="pushmenu"
                        href="#"
                    >
                        <i className="fas fa-bars" />
                    </button>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <Link to="/" className="nav-link">
                        {t('header.label.home')}
                    </Link>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <Link to="/" className="nav-link">
                        {t('header.label.contact')}
                    </Link>
                </li>
            </ul>
            <form className="form-inline ml-3">
                <div className="input-group input-group-sm">
                    <input
                        className="form-control form-control-navbar"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <div className="input-group-append">
                        <button className="btn btn-navbar" type="submit">
                            <i className="fas fa-search" />
                        </button>
                    </div>
                </div>
            </form>
            <ul className="navbar-nav ml-auto">
                <Messages />
                <Notifications />
                <Languages />
                <User />
                {/* <li className="nav-item">
          <button
            className="nav-link"
            data-widget="control-sidebar"
            data-slide="true"
            type="button"
          >
            <i className="fas fa-th-large" />
          </button>
        </li> */}
            </ul>
        </nav>
    );
};

export default Header;
