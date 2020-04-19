import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, Spinner } from 'reactstrap';

const icons = {
  facebook: 'fab fa-facebook',
  google: 'fab fa-google',
  googlePlus: 'fab fa-google-plus'
};

const AppButton = (props) => {
  const { children, isLoading, icon, block, color, disabled, type, onClick, outline } = props;

  let spinnerTemplate;
  let iconTemplate;

  if (isLoading) {
    spinnerTemplate = <Spinner className="ml-2" size="sm" color="light" />;
  }

  if (icon && icons[icon]) {
    iconTemplate = <i className={`${icons[icon]} mr-2`} />;
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <Button type={type} color={color} block={block} outline={outline} disabled={isLoading || disabled} onClick={onClick}>
      {iconTemplate}
      {children}
      {spinnerTemplate}
    </Button>
  );
};

AppButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  isLoading: PropTypes.bool,
  icon: PropTypes.string,
  block: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func
};

AppButton.defaultProps = {
  isLoading: false,
  icon: null,
  block: false,
  color: 'primary',
  disabled: false,
  outline: false,
  type: 'button',
  onClick: () => {}
};

export default AppButton;
