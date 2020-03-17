import React, { Component } from 'react';
import './App.css';
import Main from './main/Main';
import Login from './login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from './utils/axios';

class App extends Component {
  notificationSystem = null;

  componentWillMount() {}

  componentDidMount = () => {
    axios.interceptors.response.use(
      response => response,
      error => {
        return Promise.reject(error);
      }
    );
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/" component={Main} />
          <Route render={() => <h1>In App</h1>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
