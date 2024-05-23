import { ReactNode, useMemo } from 'react';

type VARIANT_TYPES =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'danger'
  | 'success'
  | 'info';

export const InfoBox = ({
  fillBackground,
  variant,
  title,
  text,
  progressBar,
  icon,
}: {
  fillBackground?: boolean;
  icon?: ReactNode;
  variant?: VARIANT_TYPES;
  title: string;
  text: string;
  progressBar?: {
    description?: string;
    level: number;
    variant?: VARIANT_TYPES;
  };
}) => {
  variant = variant || 'primary';

  const progressBarContent = useMemo(() => {
    if (progressBar) {
      const proggressBarVariant = progressBar.variant || variant;
      const progressBarClassName = `progress-bar ${progressBar.variant ? `bg-${proggressBarVariant}` : ''}`; 
      return (
        <>
          <div className="progress">
            <div
              className={progressBarClassName}
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

  return (
    <div className={`info-box ${fillBackground ? `bg-${variant}` : ''}`}>
      <span className={`info-box-icon ${fillBackground ? '' : `bg-${variant}`}`}>
        {icon || <i className="far fa-envelope" />}
      </span>

      <div className="info-box-content">
        <span className="info-box-text">{title}</span>
        <span className="info-box-number">{text}</span>
        {progressBarContent}
      </div>
    </div>
  );
};
