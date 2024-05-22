export const InfoBox = ({
  variant,
  title,
  text,
}: {
  variant?: 'primary' | 'secondary' | 'warning' | 'danger' | 'success';
  title: string;
  text: string;
}) => {
  variant = variant || 'primary';
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
