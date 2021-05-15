import React from 'react';
import {useTranslation} from 'react-i18next';
import {DateTime} from 'luxon';
import {version} from '../../../../package.json';

const Footer = () => {
    const [t] = useTranslation();

    return (
        <footer className="main-footer">
            <div className="float-right d-none d-sm-block">
                <b>{t('footer.version')}</b>
                <b> </b>
                <span>{version}</span>
            </div>
            <strong>
                <span>Copyright © {DateTime.now().toFormat('y')} </span>
                <a
                    href="https://erdkse.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    erdkse.com
                </a>
                <span>.</span>
            </strong>
            <span> </span>
            <span>{t('footer.copyright')}</span>
        </footer>
    );
};

export default Footer;
