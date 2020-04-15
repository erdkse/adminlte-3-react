import React from 'react';
import { PropTypes } from 'prop-types';

const icons = {
  facebook: 'fab fa-facebook',
  google: 'fab fa-google',
  googlePlus: 'fab fa-google-plus'
};

const Button = (props) => {
  const { text, isLoading, icon, block, theme } = props;

  let spinnerTemplate;
  let iconTemplate;

  if (isLoading) {
    spinnerTemplate = <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />;
  }

  if (icon && icons[icon]) {
    iconTemplate = <i className={`${icons[icon]} mr-2`} />;
  }

  return (
    <button type="submit" className={`btn btn-${theme} ${block ? 'btn-block' : ''}`}>
      {iconTemplate}
      <span className="mr-2">{text}</span>
      {spinnerTemplate}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  icon: PropTypes.string,
  block: PropTypes.bool,
  theme: PropTypes.string
};

Button.defaultProps = {
  isLoading: false,
  icon: null,
  block: false,
  theme: 'primary'
};

export default Button;
