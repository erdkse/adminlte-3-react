import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = (props) => {
    const {children, isLoggedIn, ...rest} = props;

    return (
        <Route
            {...rest}
            render={({location}) =>
                isLoggedIn ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    isLoggedIn: PropTypes.bool.isRequired
};

PrivateRoute.defaultProps = {
    children: null
};

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(PrivateRoute);
