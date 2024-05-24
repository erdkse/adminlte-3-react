import { ReactNode, useMemo } from 'react';

type VARIANT_TYPES =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'danger'
  | 'success'
  | 'info'
  | 'dark'
  | 'light';

export const InfoBox = ({
  variant,
  title,
  text,
  progressBar,
  icon,
  loading,
}: {
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
}) => {
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
  }, [icon]);

  function hasTheme(
    loading: boolean | { theme?: 'dark' }
  ): loading is { theme?: 'dark' } {
    return (loading as { theme?: 'dark' }).theme !== undefined;
  }

  return (
    <div className={`info-box ${variant ? `bg-${variant}` : ''}`}>
      {iconContent}
      <div className="info-box-content">
        <span className="info-box-text">{title}</span>
        <span className="info-box-number">{text}</span>
        {progressBarContent}
      </div>
      {loading && (
        <div className={`overlay ${typeof loading === 'string' && loading}`}>
          <i className="fas fa-2x fa-sync-alt fa-spin"></i>
        </div>
      )}
    </div>
  );
};
