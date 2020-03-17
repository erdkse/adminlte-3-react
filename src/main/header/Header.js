import React from 'react';
// import Messages from './messages/Messages';
// import Notifications from './notifications/Notifications'
// import Search from './search/Search';
// import User from './user/User';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <nav className="main-header navbar navbar-expand bg-white navbar-light border-bottom">
      <ul className="navbar-nav">
        <li className="nav-item">
          <button
            onClick={() => props.toggleMenuSidebar()}
            className="nav-link"
            data-widget="pushmenu"
          >
            <i className="fa fa-bars" />
          </button>
        </li>
        {/* <li className="nav-item d-none d-sm-inline-block">
          <a href="/" className="nav-link">Home</a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="/" className="nav-link">Contact</a>
        </li> */}
      </ul>

      {/* <Search></Search> */}

      <ul className="navbar-nav ml-auto">
        {/* <Messages></Messages>

        <Notifications></Notifications>
        
        <li className="nav-item">
          <button className="nav-link" data-widget="control-sidebar" data-slide="true">
            <i className="fa fa-th-large" />
          </button>
        </li> */}

        <li className="nav-item">
          <Link
            to="/login"
            className="nav-link"
            data-widget="control-sidebar"
            data-slide="true"
          >
            <i className="fa fa-power-off" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
