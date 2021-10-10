import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Dropdown} from '@components';

const languages = [
    {
        key: 'en',
        icon: 'flag-icon-us',
        label: 'header.language.english'
    },
    {
        key: 'tr',
        icon: 'flag-icon-tr',
        label: 'header.language.turkish'
    },
    {
        key: 'de',
        icon: 'flag-icon-de',
        label: 'header.language.german'
    },
    {
        key: 'fr',
        icon: 'flag-icon-fr',
        label: 'header.language.french'
    },
    {
        key: 'es',
        icon: 'flag-icon-es',
        label: 'header.language.spanish'
    }
];

const LanguagesDropdown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const {t, i18n} = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const getCurrentLanguage = () => {
        const currentLanguage = i18n.language;
        if (currentLanguage) {
            return languages.find(
                (language) => language.key === currentLanguage
            );
        }
        return {};
    };

    const isActiveLanguage = (language) => {
        if (language) {
            return getCurrentLanguage().key === language.key ? 'active' : '';
        }
        return '';
    };

    return (
        <Dropdown
            isOpen={dropdownOpen}
            onChange={(open) => setDropdownOpen(open)}
            buttonTemplate={
                <i className={`flag-icon ${getCurrentLanguage().icon}`} />
            }
            menuTemplate={languages.map((language) => (
                <button
                    type="button"
                    key={language.key}
                    className={`dropdown-item ${isActiveLanguage(language)}`}
                    onClick={() => {
                        changeLanguage(language.key);
                        setDropdownOpen(false);
                    }}
                >
                    <i className={`flag-icon ${language.icon} mr-2`} />
                    <span>{t(language.label)}</span>
                </button>
            ))}
        />
    );
};

export default LanguagesDropdown;
