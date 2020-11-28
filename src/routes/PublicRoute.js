import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const PublicRoute = (props) => {
    const {children, isLoggedIn, ...rest} = props;

    const isAuthenticated = isLoggedIn || localStorage.getItem('token');

    return (
        <Route
            {...rest}
            render={({location}) =>
                isAuthenticated ? (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: {from: location}
                        }}
                    />
                ) : (
                    children
                )
            }
        />
    );
};

PublicRoute.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(PublicRoute);
