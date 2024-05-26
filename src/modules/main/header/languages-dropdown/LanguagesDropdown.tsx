import { StyledDropdown } from '@app/styles/common';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export interface Language {
  key: string;
  icon: string;
  label: string;
}

const languages: Language[] = [
  {
    key: 'en',
    icon: 'flag-icon-us',
    label: 'header.language.english',
  },
  {
    key: 'tr',
    icon: 'flag-icon-tr',
    label: 'header.language.turkish',
  },
  {
    key: 'de',
    icon: 'flag-icon-de',
    label: 'header.language.german',
  },
  {
    key: 'fr',
    icon: 'flag-icon-fr',
    label: 'header.language.french',
  },
  {
    key: 'es',
    icon: 'flag-icon-es',
    label: 'header.language.spanish',
  },
];

const LanguagesDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const getCurrentLanguage = (): Language => {
    const currentLanguage = i18n.language;
    if (currentLanguage) {
      const language = languages.find(
        (language: Language) => language.key === currentLanguage
      );
      return language || languages[0];
    }
    return languages[0];
  };

  const isActiveLanguage = (language: Language) => {
    if (language) {
      return getCurrentLanguage().key === language.key ? 'active' : '';
    }
    return '';
  };

  return (
    <StyledDropdown isOpen={dropdownOpen} hideArrow>
      <div className="nav-link" slot="head">
        <i className={`flag-icon ${getCurrentLanguage().icon}`} />
      </div>
      <div slot="body">
        {languages.map((language) => (
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
      </div>
    </StyledDropdown>
  );
};

export default LanguagesDropdown;
