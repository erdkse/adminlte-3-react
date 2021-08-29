import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';

const PublicRoute = ({children, ...rest}) => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
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

export default PublicRoute;
