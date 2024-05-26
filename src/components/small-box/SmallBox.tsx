import { ReactNode, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { VARIANT_TYPES } from '../../utils/component-properties';
import { OverlayLoading } from '../OverlayLoading';

export interface SmallBoxProps {
  loading?: 'dark' | boolean;
  variant: VARIANT_TYPES;
  icon?: {
    content: ReactNode;
    variant?: VARIANT_TYPES;
  };
  text: string;
  title: string;
  navigateTo: string;
}

const SmallBox = ({
  variant = 'info',
  icon,
  text,
  title,
  navigateTo,
  loading,
}: SmallBoxProps) => {
  const [t] = useTranslation();

  const iconContent = useMemo(() => {
    const iconVariant = icon?.variant || variant;

    return (
      <span className={`icon ${iconVariant ? `bg-${iconVariant}` : ''}`}>
        {icon?.content || <i className="far fa-envelope" />}
      </span>
    );
  }, [icon, variant]);

  return (
    <div className={`small-box bg-${variant}`}>
      <div className="inner">
        <h3>{text}</h3>
        <p>{title}</p>
      </div>
      {iconContent}
      <Link to={navigateTo} className="small-box-footer">
        <span className="mr-2">{t('main.label.moreInfo')}</span>
        <i className="fa fa-arrow-circle-right" />
      </Link>

      {loading && (
        <OverlayLoading
          type={typeof loading === 'string' ? loading : 'light'}
        />
      )}
    </div>
  );
};

export default SmallBox;
