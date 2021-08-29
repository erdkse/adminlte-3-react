import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';

const PrivateRoute = ({children, ...rest}) => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

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

export default PrivateRoute;
