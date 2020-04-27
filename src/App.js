import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from './utils/axios';

import { addGoogleScript } from './utils/social-auth-scripts';

import Main from './main/Main';
import Login from './login/Login';
import Register from './register/Register';
import ForgetPassword from './forgot-password/ForgotPassword';
import RecoverPassword from './recover-password/RecoverPassword';
import PrivacyPolicy from './privacy-policy/PrivacyPolicy';

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

class App extends Component {
  async componentDidMount() {
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        return Promise.reject(error);
      }
    );

    try {
      await addGoogleScript();
      const params = {
        client_id:
          '611723947949-kc52mv7i8t1bt0v8vson1h9nae0rer35.apps.googleusercontent.com',
        scope: 'openid profile email',
        cookie_policy: 'single_host_origin',
        fetch_basic_profile: true
      };
      window.gapi.load('auth2', () => {
        if (!window.gapi.auth2.getAuthInstance()) {
          window.gapi.auth2.init(params);
        }
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error.name, ':', error.message);
    }
  }

  render() {
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
  }
}

export default App;
