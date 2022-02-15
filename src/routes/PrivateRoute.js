import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {useSelector} from 'react-redux';

const PrivateRoute = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;

    // return (
    //     <Route
    //         {...rest}
    //         render={({location}) =>
    //             isLoggedIn ? (
    //                 children
    //             ) : (
    //                 <Navigate
    //                     to={{
    //                         pathname: '/login',
    //                         state: {from: location}
    //                     }}
    //                 />
    //             )
    //         }
    //     />
    // );
};

export default PrivateRoute;
