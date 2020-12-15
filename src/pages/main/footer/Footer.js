import React from 'react';
import {useTranslation} from 'react-i18next';
import {version} from '../../../../package.json';

const Footer = () => {
    const {t} = useTranslation();

    return (
        <footer className="main-footer">
            <div className="float-right d-none d-sm-block">
                <b>{t('footer.version')}</b>
                <b> </b>
                <span>{version}</span>
            </div>
            <strong>
                <span>Copyright © 2019-2020 </span>
                <a
                    href="http://adminlte.io"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    AdminLTE.io
                </a>
                <span>.</span>
            </strong>
            <span> </span>
            <span>{t('footer.copyright')}</span>
        </footer>
    );
};

export default Footer;
