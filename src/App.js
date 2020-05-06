import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { toast } from 'react-toastify';
import Main from './pages/main/Main';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ForgetPassword from './pages/forgot-password/ForgotPassword';
import RecoverPassword from './pages/recover-password/RecoverPassword';
import PrivacyPolicy from './pages/privacy-policy/PrivacyPolicy';

import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

toast.configure({
  autoClose: 3000,
  draggable: false,
  position: 'top-right',
  hideProgressBar: false,
  newestOnTop: true,
  closeOnClick: true,
  rtl: false,
  pauseOnVisibilityChange: true,
  pauseOnHover: true
});

const App = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/login">
          <Login />
        </PublicRoute>
        <PublicRoute exact path="/register">
          <Register />
        </PublicRoute>
        <PublicRoute exact path="/forgot-password">
          <ForgetPassword />
        </PublicRoute>
        <PublicRoute exact path="/recover-password">
          <RecoverPassword />
        </PublicRoute>
        <PublicRoute exact path="/privacy-policy">
          <PrivacyPolicy />
        </PublicRoute>
        <PublicRoute exact path="/callback">
          <h1>Callback</h1>
        </PublicRoute>
        <PrivateRoute path="/">
          <Main />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default App;
