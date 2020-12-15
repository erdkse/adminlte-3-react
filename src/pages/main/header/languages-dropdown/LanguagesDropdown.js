import React, {useRef, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';

const LanguagesDropdown = () => {
    const dropdownRef = useRef(null);
    const {t, i18n} = useTranslation();

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

    let className = 'dropdown-menu dropdown-menu-right p-0';

    if (dropdownState.isDropdownOpen) {
        className += ' show';
    }

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <li
            ref={dropdownRef}
            className="nav-item d-none d-sm-inline-block dropdown"
        >
            <button
                onClick={toggleDropdown}
                type="button"
                className="nav-link"
                data-toggle="dropdown"
            >
                <i className="flag-icon flag-icon-tr" />
            </button>
            <div className={className}>
                <button
                    type="button"
                    className="dropdown-item active"
                    onClick={() => changeLanguage('tr')}
                >
                    <i className="flag-icon flag-icon-tr mr-2" />
                    <span>{t('header.language.turkish')}</span>
                </button>
                <button
                    type="button"
                    className="dropdown-item"
                    onClick={() => changeLanguage('en')}
                >
                    <i className="flag-icon flag-icon-us mr-2" />
                    <span>{t('header.language.english')}</span>
                </button>
                <button
                    type="button"
                    className="dropdown-item"
                    onClick={() => changeLanguage('de')}
                >
                    <i className="flag-icon flag-icon-de mr-2" />
                    <span>{t('header.language.german')}</span>
                </button>
                <button
                    type="button"
                    className="dropdown-item"
                    onClick={() => changeLanguage('fr')}
                >
                    <i className="flag-icon flag-icon-fr mr-2" />
                    <span>{t('header.language.french')}</span>
                </button>
                <button
                    type="button"
                    className="dropdown-item"
                    onClick={() => changeLanguage('es')}
                >
                    <i className="flag-icon flag-icon-es mr-2" />
                    <span>{t('header.language.spanish')}</span>
                </button>
            </div>
        </li>
    );
};

export default LanguagesDropdown;
