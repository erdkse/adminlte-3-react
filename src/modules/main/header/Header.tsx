import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {toggleControlSidebar, toggleSidebarMenu} from '@app/store/reducers/ui';
import {Button} from '@app/components';
import MessagesDropdown from '@app/modules/main/header/messages-dropdown/MessagesDropdown';
import NotificationsDropdown from '@app/modules/main/header/notifications-dropdown/NotificationsDropdown';
import LanguagesDropdown from '@app/modules/main/header/languages-dropdown/LanguagesDropdown';
import UserDropdown from '@app/modules/main/header/user-dropdown/UserDropdown';

const Header = () => {
    const [t] = useTranslation();
    const dispatch = useDispatch();
    const navbarVariant = useSelector((state: any) => state.ui.navbarVariant);

    const handleToggleMenuSidebar = () => {
        dispatch(toggleSidebarMenu());
    };

    const handleToggleControlSidebar = () => {
        dispatch(toggleControlSidebar());
    };

    return (
        <nav className={`main-header navbar navbar-expand ${navbarVariant}`}>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <button
                        onClick={handleToggleMenuSidebar}
                        type="button"
                        className="nav-link"
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
            <ul className="navbar-nav ml-auto">
                {/* <li className="nav-item">
                    <button className="nav-link" type="button">
                        <i className="fas fa-search" />
                    </button>
                    <div className="navbar-search-block">
                        <form className="form-inline">
                            <div className="input-group input-group-sm">
                                <input
                                    className="form-control form-control-navbar"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <div className="input-group-append">
                                    <button
                                        className="btn btn-navbar"
                                        type="submit"
                                    >
                                        <i className="fas fa-search" />
                                    </button>
                                    <button
                                        className="btn btn-navbar"
                                        type="button"
                                        data-widget="navbar-search"
                                    >
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li> */}
                <MessagesDropdown />
                <NotificationsDropdown />
                <LanguagesDropdown />
                <UserDropdown />
                <li className="nav-item">
                    <Button
                        className="nav-link"
                        onClick={handleToggleControlSidebar}
                    >
                        <i className="fas fa-th-large" />
                    </Button>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
