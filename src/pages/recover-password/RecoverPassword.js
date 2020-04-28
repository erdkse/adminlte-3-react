import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const RecoverPassword = () => {
  const passwordInput = useRef(null);
  const confirmPasswordInput = useRef(null);

  const confirm = (event) => {
    toast.warn('Henüz fonksiyonel değil!');
    event.preventDefault();
  };

  document.getElementById('root').classList = 'hold-transition login-page';

  return (
    <div className="login-box">
      <div className="login-logo">
        <a href="../../index2.html">
          <b>Admin</b>
          <span>LTE</span>
        </a>
      </div>
      <div className="card">
        <div className="card-body login-card-body">
          <p className="login-box-msg">
            You are only one step a way from your new password, recover your
            password now.
          </p>
          <form onSubmit={confirm}>
            <div className="input-group mb-3">
              <input
                ref={passwordInput}
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                ref={confirmPasswordInput}
                type="password"
                className="form-control"
                placeholder="Confirm Password"
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <button type="submit" className="btn btn-primary btn-block">
                  Change password
                </button>
              </div>
            </div>
          </form>
          <p className="mt-3 mb-1">
            <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecoverPassword;
