import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Main from './pages/main/Main';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ForgetPassword from './pages/forgot-password/ForgotPassword';
import RecoverPassword from './pages/recover-password/RecoverPassword';
import PrivacyPolicy from './pages/privacy-policy/PrivacyPolicy';

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
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/forgot-password" component={ForgetPassword} />
        <Route exact path="/recover-password" component={RecoverPassword} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        <Route exact path="/callback" render={() => <h1>Callback</h1>} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
};

export default App;
