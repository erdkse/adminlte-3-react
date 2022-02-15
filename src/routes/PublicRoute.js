import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {useSelector} from 'react-redux';

const PublicRoute = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const isAuthenticated = isLoggedIn || localStorage.getItem('token');

    return isAuthenticated ? <Navigate to="/" /> : <Outlet />;

    // return (
    //     <Route
    //         {...rest}
    //         render={({location}) =>
    //             isAuthenticated ? (
    //                 <Navigate
    //                     to={{
    //                         pathname: '/',
    //                         state: {from: location}
    //                     }}
    //                 />
    //             ) : (
    //                 children
    //             )
    //         }
    //     />
    // );
};

export default PublicRoute;
