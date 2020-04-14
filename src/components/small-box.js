import React from 'react';
import { Link } from 'react-router-dom';

const SmallBox = props => {
  let className = 'small-box';
  let iconClass = 'ion';
  switch (props.type) {
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

  iconClass += props.icon ? ' ' + props.icon : ' ion-bag';

  return (
    <div className={className}>
      <div className="inner">
        <h3>{props.count}</h3>
        <p>{props.title}</p>
      </div>
      <div className="icon">
        <i className={iconClass} />
      </div>
      <Link to={props.navigateTo} className="small-box-footer">
        More info <i className="fa fa-arrow-circle-right" />
      </Link>
    </div>
  );
};

export default SmallBox;
