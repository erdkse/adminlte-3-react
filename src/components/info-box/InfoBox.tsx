import { ReactNode, useMemo } from 'react';

type VARIANT_TYPES =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'danger'
  | 'success'
  | 'info';

export const InfoBox = ({
  variant,
  title,
  text,
  progressBar,
  icon,
}: {
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
      return (
        <>
          <div className="progress">
            <div
              className={`progress-bar bg-${progressBar?.variant || 'info'}`}
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
  }, [progressBar]);

  return (
    <div className="info-box">
      <span className={`info-box-icon bg-${variant || 'info'}`}>
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
