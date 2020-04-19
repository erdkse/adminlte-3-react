import React from 'react';
import { PropTypes } from 'prop-types';

const icons = {
  facebook: 'fab fa-facebook',
  google: 'fab fa-google',
  googlePlus: 'fab fa-google-plus'
};

const Button = (props) => {
  const { text, isLoading, icon, block, theme, disabled, type, onClick } = props;

  let spinnerTemplate;
  let iconTemplate;

  if (isLoading) {
    spinnerTemplate = <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />;
  }

  if (icon && icons[icon]) {
    iconTemplate = <i className={`${icons[icon]} mr-2`} />;
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={`btn btn-${theme} ${block ? 'btn-block' : ''}`} disabled={isLoading || disabled} onClick={onClick}>
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
  theme: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func
};

Button.defaultProps = {
  isLoading: false,
  icon: null,
  block: false,
  theme: 'primary',
  disabled: false,
  type: 'button',
  onClick: () => {}
};

export default Button;
