import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from '@modules/main/Main';
import Login from '@modules/login/Login';
import Register from '@modules/register/Register';
import ForgetPassword from '@modules/forgot-password/ForgotPassword';
import RecoverPassword from '@modules/recover-password/RecoverPassword';
import PrivacyPolicy from '@modules/privacy-policy/PrivacyPolicy';
import {useWindowSize} from '@app/hooks/useWindowSize';
import {calculateWindowSize} from '@app/utils/helpers';
import {useDispatch, useSelector} from 'react-redux';
import {setWindowSize} from '@app/store/reducers/ui';

import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

import './App.scss';

const App = () => {
    const windowSize = useWindowSize();
    const screenSize = useSelector((state) => state.ui.screenSize);
    const dispatch = useDispatch();

    useEffect(() => {
        const size = calculateWindowSize(windowSize.width);
        if (screenSize !== size) {
            dispatch(setWindowSize(size));
        }
    }, [windowSize]);

    return (
        <Router>
            <Routes>
                <Route exact path="/login" element={<PublicRoute />}>
                    <Route exact path="/login" element={<Login />} />
                </Route>
                <Route exact path="/register" element={<PublicRoute />}>
                    <Route exact path="/register" element={<Register />} />
                </Route>
                <Route exact path="/forgot-password" element={<PublicRoute />}>
                    <Route
                        exact
                        path="/forgot-password"
                        element={<ForgetPassword />}
                    />
                </Route>
                <Route exact path="/recover-password" element={<PublicRoute />}>
                    <Route
                        exact
                        path="/recover-password"
                        element={<RecoverPassword />}
                    />
                </Route>
                <Route exact path="/privacy-policy" element={<PublicRoute />}>
                    <Route
                        exact
                        path="/privacy-policy"
                        element={<PrivacyPolicy />}
                    />
                </Route>
                <Route exact path="/callback" element={<PublicRoute />}>
                    <Route exact path="/callback" element={<h1>Callback</h1>} />
                </Route>
                <Route path="/" element={<PrivateRoute />}>
                    <Route exact path="/" element={<Main />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
