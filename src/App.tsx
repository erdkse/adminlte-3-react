import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Main from '@modules/main/Main';
import Login from '@modules/login/Login';
import Register from '@modules/register/Register';
import ForgetPassword from '@modules/forgot-password/ForgotPassword';
import RecoverPassword from '@modules/recover-password/RecoverPassword';
import { useWindowSize } from '@app/hooks/useWindowSize';
import { calculateWindowSize } from '@app/utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { setWindowSize } from '@app/store/reducers/ui';
import ReactGA from 'react-ga4';

import Dashboard from '@pages/Dashboard';
import Blank from '@pages/Blank';
import SubMenu from '@pages/SubMenu';
import Profile from '@pages/profile/Profile';

import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import { setCurrentUser } from './store/reducers/auth';

import { firebaseAuth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { BASE_PATH } from './config';

const { VITE_NODE_ENV } = import.meta.env;

const App = () => {
  const windowSize = useWindowSize();
  const screenSize = useSelector((state: any) => state.ui.screenSize);
  const dispatch = useDispatch();
  const location = useLocation();

  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(
      firebaseAuth,
      (user) => {
        if (user) {
          dispatch(setCurrentUser(user as any));
        } else {
          dispatch(setCurrentUser(undefined));
        }
        setIsAppLoading(false);
      },
      (e) => {
        console.log(e);
        dispatch(setCurrentUser(undefined));
        setIsAppLoading(false);
      }
    );
  }, []);

  useEffect(() => {
    const size = calculateWindowSize(windowSize.width);
    if (screenSize !== size) {
      dispatch(setWindowSize(size));
    }
  }, [windowSize]);

  useEffect(() => {
    if (location && location.pathname && VITE_NODE_ENV === 'production') {
      ReactGA.send({
        hitType: 'pageview',
        page: location.pathname,
      });
    }
  }, [location]);

  if (isAppLoading) {
    return <p>Loading</p>;
  }

  return (
    <>
      <Routes>
        <Route path={`${BASE_PATH}/login`} element={<PublicRoute />}>
          <Route path={`${BASE_PATH}/login`} element={<Login />} />
        </Route>
        <Route path={`${BASE_PATH}/register`} element={<PublicRoute />}>
          <Route path={`${BASE_PATH}/register`} element={<Register />} />
        </Route>
        <Route path={`${BASE_PATH}/forgot-password`} element={<PublicRoute />}>
          <Route
            path={`${BASE_PATH}/forgot-password`}
            element={<ForgetPassword />}
          />
        </Route>
        <Route path={`${BASE_PATH}/recover-password`} element={<PublicRoute />}>
          <Route
            path={`${BASE_PATH}/recover-password`}
            element={<RecoverPassword />}
          />
        </Route>
        <Route path={`${BASE_PATH}`} element={<PrivateRoute />}>
          <Route path={`${BASE_PATH}`} element={<Main />}>
            <Route path={`${BASE_PATH}/sub-menu-2`} element={<Blank />} />
            <Route path={`${BASE_PATH}/sub-menu-1`} element={<SubMenu />} />
            <Route path={`${BASE_PATH}/blank`} element={<Blank />} />
            <Route path={`${BASE_PATH}/profile`} element={<Profile />} />
            <Route path={`${BASE_PATH}/`} element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer
        autoClose={3000}
        draggable={false}
        position="top-right"
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnHover
      />
    </>
  );
};

export default App;
