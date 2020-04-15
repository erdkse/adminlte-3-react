import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from './utils/axios';

import Main from './main/Main';
import Login from './login/Login';
import Register from './register/Register';
import ForgetPassword from './forgot-password/ForgotPassword';
import RecoverPassword from './recover-password/RecoverPassword';

toast.configure({
  autoClose: 5000,
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
  componentDidMount() {
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgot-password" component={ForgetPassword} />
          <Route exact path="/recover-password" component={RecoverPassword} />
          <Route path="/" component={Main} />
          <Route render={() => <h1>In App</h1>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
