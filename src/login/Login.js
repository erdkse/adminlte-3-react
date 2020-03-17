import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from './../utils/axios';

class Login extends Component {
  notificationSystem;
  login = event => {
    axios
      .post('/auth/login', {
        email: this.refs.email.value,
        password: this.refs.password.value
      })
      .then(response => {
        localStorage.setItem('token', response.data.token.accessToken);
        document.body.classList.remove('login-page');
        this.props.history.push('/');
      });

    event.preventDefault();
  };

  render() {
    document.body.classList = 'login-page';
    return (
      <div className="login-box">
        <div className="login-logo">
          <Link to="/">
            <b>Admin</b>Panel
          </Link>
        </div>

        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form onSubmit={this.login}>
              <div className="input-group mb-3">
                <input
                  type="email"
                  ref="email"
                  className="form-control"
                  placeholder="Email"
                />
                <div className="input-group-append">
                  <span className="fa fa-envelope input-group-text" />
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  ref="password"
                  className="form-control"
                  placeholder="Password"
                />
                <div className="input-group-append">
                  <span className="fa fa-lock input-group-text" />
                </div>
              </div>
              <div className="row">
                <div className="col-4 offset-8">
                  <button
                    className="btn btn-primary btn-block btn-flat"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
