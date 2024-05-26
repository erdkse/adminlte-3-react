import { ReactNode, useMemo } from 'react';
import { VARIANT_TYPES } from '../../utils/component-properties';
import { OverlayLoading } from '../OverlayLoading';

export interface InfoBoxProps {
  loading?: 'dark' | boolean;
  icon?: {
    content: ReactNode;
    variant?: VARIANT_TYPES;
  };
  variant?: VARIANT_TYPES;
  title: string;
  text: string;
  progressBar?: {
    description?: string;
    level: number;
    variant?: VARIANT_TYPES;
  };
}

export const InfoBox = ({
  variant,
  title,
  text,
  progressBar,
  icon,
  loading,
}: InfoBoxProps) => {
  const progressBarContent = useMemo(() => {
    if (progressBar) {
      const proggressBarVariant = progressBar.variant || variant;
      return (
        <>
          <div className="progress">
            <div
              className={`progress-bar ${proggressBarVariant ? `bg-${proggressBarVariant}` : ''}`}
              style={{ width: `${progressBar?.level || 0}%` }}
            />
          </div>
          {progressBar?.description || (
            <span className="progress-description">
              {progressBar?.description}
            </span>
          )}
        </>
      );
    }
    return;
  }, [progressBar, variant]);

  const iconContent = useMemo(() => {
    const iconVariant = icon?.variant || variant;

    return (
      <span
        className={`info-box-icon ${iconVariant ? `bg-${iconVariant}` : ''}`}
      >
        {icon?.content || <i className="far fa-envelope" />}
      </span>
    );
  }, [icon, variant]);

  return (
    <div className={`info-box ${variant ? `bg-${variant}` : ''}`}>
      {iconContent}
      <div className="info-box-content">
        <span className="info-box-text">{title}</span>
        <span className="info-box-number">{text}</span>
        {progressBarContent}
      </div>
      {loading && (
        <OverlayLoading
          type={typeof loading === 'string' ? loading : 'light'}
        />
      )}
    </div>
  );
};
