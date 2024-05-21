export const InfoBox = ({
  variant,
  title,
  text,
  useProgressBar,
  progressDescription,
  progressLevel,
}: {
  variant?: 'primary' | 'secondary' | 'warning' | 'danger' | 'success';
  title: string;
  text: string;
  useProgressBar: boolean;
  progressDescription: string;
  progressLevel: number;
}) => {
  variant = variant || 'primary';

  if(useProgressBar) {
    const level = progressLevel ? progressLevel : 0;
    const style = {
      width: `${level}%`
    };
    
    return (
      <div className="info-box">
        <span className={`info-box-icon bg-${variant}`}>
          <i className="far fa-bookmark"></i>
        </span>
        <div className="info-box-content">
          <span className="info-box-text">{title}</span>
          <span className="info-box-number">{text}</span>
          <div className="progress">
            <div className="progress-bar bg-info" style={style}></div>
          </div>
          <span className="progress-description">
            {progressDescription}
          </span>
        </div>
      </div>
    );
  }
  return (
    <div className="info-box">
      <span className={`info-box-icon bg-${variant}`}>
        <i className="far fa-envelope"></i>
      </span>

      <div className="info-box-content">
        <span className="info-box-text">{title}</span>
        <span className="info-box-number">{text}</span>
      </div>
    </div>
  );
};
