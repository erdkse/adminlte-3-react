import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SmallBox = (props) => {
  const { type, icon, count, title, navigateTo } = props;

  let className = 'small-box';
  let iconClass = 'ion';
  switch (type) {
    case 'success':
      className += ' bg-success';
      break;
    case 'warning':
      className += ' bg-warning';
      break;
    case 'danger':
      className += ' bg-danger';
      break;
    case 'info':
      className += ' bg-info';
      break;
    default:
      className += ' bg-info';
      break;
  }

  iconClass += icon ? ` ${icon}` : ' ion-bag';

  return (
    <div className={className}>
      <div className="inner">
        <h3>{count}</h3>
        <p>{title}</p>
      </div>
      <div className="icon">
        <i className={iconClass} />
      </div>
      <Link to={navigateTo} className="small-box-footer">
        <span>More info</span>
        <i className="fa fa-arrow-circle-right" />
      </Link>
    </div>
  );
};

SmallBox.propTypes = {
  type: PropTypes.oneOf(['success', 'warning', 'danger', 'info']),
  icon: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  navigateTo: PropTypes.string.isRequired
};

SmallBox.defaultProps = {
  type: 'info'
};

export default SmallBox;
