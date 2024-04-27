import { useTranslation } from 'react-i18next';
import { DateTime } from 'luxon';
import packageJSON from '../../../../package.json';

const Footer = ({ style }: any) => {
  const [t] = useTranslation();

  return (
    <footer className="main-footer" style={style}>
      <strong>
        <span>Copyright © {DateTime.now().toFormat('y')} </span>
        <a href="https://erdkse.com" target="_blank" rel="noopener noreferrer">
          erdkse.com
        </a>
        <span>.</span>
      </strong>
      <div className="float-right d-none d-sm-inline-block">
        <b>{t('footer.version')}</b>
        <span>&nbsp;{packageJSON.version}</span>
      </div>
    </footer>
  );
};

export default Footer;
