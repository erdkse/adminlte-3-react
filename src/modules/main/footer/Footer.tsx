import { useTranslation } from 'react-i18next';
import { DateTime } from 'luxon';
import packageJSON from '../../../../package.json';

const Footer = ({
  style = {},
  containered,
}: {
  style?: any;
  containered?: boolean;
}) => {
  const [t] = useTranslation();

  return (
    <footer className="main-footer" style={{ ...style }}>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        className={containered ? 'container' : ''}
      >
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
        <div className="float-right d-none d-sm-inline-block">
          <b>{t('footer.version')}</b>
          <span>&nbsp;{packageJSON.version}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
