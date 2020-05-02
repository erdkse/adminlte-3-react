import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = (props) => {
  const { component, isLoggedIn } = props;
  const Component = component;

  return isLoggedIn ? <Component /> : <Redirect to={{ pathname: '/login' }} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(PrivateRoute);
