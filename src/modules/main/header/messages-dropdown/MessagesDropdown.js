import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

const MessagesDropdown = () => {
    const dropdownRef = useRef(null);
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
        <li
            ref={dropdownRef}
            className="nav-item d-none d-sm-inline-block dropdown"
        >
            <button
                className="nav-link"
                data-toggle="dropdown"
                type="button"
                onClick={toggleDropdown}
            >
                <i className="far fa-comments" />
                <span className="badge badge-danger navbar-badge">3</span>
            </button>
            <div className={className}>
                <Link to="/" className="dropdown-item">
                    <div className="media">
                        <img
                            src="https://adminlte.io/themes/dev/AdminLTE/dist/img/user2-160x160.jpg"
                            alt="User Avatar"
                            className="img-size-50 mr-3 img-circle"
                        />
                        <div className="media-body">
                            <h3 className="dropdown-item-title">
                                Brad Diesel
                                <span className="float-right text-sm text-danger">
                                    <i className="fas fa-star" />
                                </span>
                            </h3>
                            <p className="text-sm">
                                Call me whenever you can...
                            </p>
                            <p className="text-sm text-muted">
                                <i className="far fa-clock mr-1" />
                                <span>
                                    {t('header.messages.ago', {
                                        quantity: '30',
                                        unit: 'Minutes'
                                    })}
                                </span>
                            </p>
                        </div>
                    </div>
                </Link>
                <div className="dropdown-divider" />
                <Link to="/" className="dropdown-item">
                    <div className="media">
                        <img
                            src="https://adminlte.io/themes/dev/AdminLTE/dist/img/user2-160x160.jpg"
                            alt="User Avatar"
                            className="img-size-50 img-circle mr-3"
                        />
                        <div className="media-body">
                            <h3 className="dropdown-item-title">
                                John Pierce
                                <span className="float-right text-sm text-muted">
                                    <i className="fas fa-star" />
                                </span>
                            </h3>
                            <p className="text-sm">I got your message bro</p>
                            <p className="text-sm text-muted">
                                <i className="far fa-clock mr-1" />
                                <span>
                                    {t('header.messages.ago', {
                                        quantity: '3',
                                        unit: 'Hours'
                                    })}
                                </span>
                            </p>
                        </div>
                    </div>
                </Link>
                <div className="dropdown-divider" />
                <Link to="/" className="dropdown-item">
                    <div className="media">
                        <img
                            src="https://adminlte.io/themes/dev/AdminLTE/dist/img/user2-160x160.jpg"
                            alt="User Avatar"
                            className="img-size-50 img-circle mr-3"
                        />
                        <div className="media-body">
                            <h3 className="dropdown-item-title">
                                Nora Silvester
                                <span className="float-right text-sm text-warning">
                                    <i className="fas fa-star" />
                                </span>
                            </h3>
                            <p className="text-sm">The subject goes here</p>
                            <p className="text-sm text-muted">
                                <i className="far fa-clock mr-1" />
                                <span>
                                    {t('header.messages.ago', {
                                        quantity: '4',
                                        unit: 'Hours'
                                    })}
                                </span>
                            </p>
                        </div>
                    </div>
                </Link>
                <div className="dropdown-divider" />
                <Link to="/" className="dropdown-item dropdown-footer">
                    {t('header.messages.seeAll')}
                </Link>
            </div>
        </li>
    );
};

export default MessagesDropdown;
