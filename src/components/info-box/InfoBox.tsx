import { ReactNode, useMemo } from 'react';

type VARIANT_TYPES =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'danger'
  | 'success'
  | 'info';

export const InfoBox = ({
  fillBg,
  variant,
  title,
  text,
  progressBar,
  icon,
}: {
  fillBg?: boolean;
  icon?: ReactNode;
  variant?: VARIANT_TYPES;
  title: string;
  text: string;
  progressBar?: {
    description?: string;
    level: number;
  };
}) => {
  variant = variant || 'primary';

  const iconClassName = 'info-box-icon ' + (fillBg ? '' : ('bg-' + variant));
  const infoBoxClassName = 'info-box ' + (fillBg ? ('bg-' + variant) : '');

  const progressBarContent = useMemo(() => {
    if (progressBar) {
      console.log('mert');
      const progressBarClassName = 'progress-bar ' + (fillBg ?  '' : 'bg-' + variant); 
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
  }, [progressBar, fillBg]);

  return (
    <div className={infoBoxClassName}>
      <span className={iconClassName}>
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
