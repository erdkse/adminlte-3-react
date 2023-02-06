import React from 'react';
// import useEffect from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import Main from '@modules/main/Main';
import Login from '@modules/login/Login';
import Register from '@modules/register/Register';
// import Login from './hrms/Login';
// import Register from './hrms/Register';
import ForgetPassword from '@modules/forgot-password/ForgotPassword';
import RecoverPassword from '@modules/recover-password/RecoverPassword';
import {useWindowSize} from '@app/hooks/useWindowSize';
import {calculateWindowSize} from '@app/utils/helpers';
import {useDispatch, useSelector} from 'react-redux';
import {setWindowSize} from '@app/store/reducers/ui';

import Dashboard from '@pages/Dashboard';
import Profile from '@pages/profile/Profile';

import Attendence from './pages/personal_info/Attendence';
import Contact from './pages/contact/Contact';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import SalHistory from './pages/personal_info/SalHistory';
import CwfDet from './pages/personal_info/CwfDet';
import Apply from './pages/leave/Apply';
import AltArr from './pages/leave/AltArr';
import LeaveHis from './pages/leave/LeaveHis';
import ChangePassword from '@modules/forgot-password/ChangePassword';
const App = () => {
  const windowSize = useWindowSize();
  const screenSize = useSelector((state: any) => state.ui.screenSize);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const size = calculateWindowSize(windowSize.width);
  //   if (screenSize !== size) {
  //     dispatch(setWindowSize(size));
  //   }
  // }, [windowSize]);

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} >
</Route>

          <Route path="/register" element={<Register />} />

          <Route path="/changepassword" element={<ForgetPassword />} />

          {/* <Route path="/recover-password" element={<RecoverPassword />} /> */}

          <Route path="/main" element={<Main />}>
          <Route path="/main/attendence" element={<Attendence />} />
          <Route path="/main/salhistory" element={<SalHistory />} />
          <Route path="/main/cwfdet" element={<CwfDet />} />

            <Route path="/main/apply" element={<Apply />} />
            <Route path="/main/leavehis" element={<LeaveHis />} />
            <Route path="/main/altarr" element={<AltArr />} />
            <Route path="/main/profile" element={<Profile />} />
            <Route path="/main/contact" element={<Contact />} />
            <Route path="/main/dash" element={<Dashboard />} />
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
    </BrowserRouter>
  );
};

export default App;
