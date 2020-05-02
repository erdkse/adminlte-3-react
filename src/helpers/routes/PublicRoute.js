import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PublicRoute = (props) => {
  const { component, isLoggedIn } = props;
  const Component = component;

  return isLoggedIn ? <Redirect to={{ pathname: '/' }} /> : <Component />;
};

PublicRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(PublicRoute);
