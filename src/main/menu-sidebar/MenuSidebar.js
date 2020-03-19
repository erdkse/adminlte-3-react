import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class MenuSidebar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <Link to="/" className="brand-link">
          <img
            src="/img/logo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: '.8' }}
          />
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </Link>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src={
                  this.props.user.image
                    ? this.props.user.image
                    : '/img/default-profile.png'
                }
                className="img-circle elevation-2"
                alt={this.props.user.firstName + ' ' + this.props.user.lastName}
              />
            </div>
            <div className="info">
              <Link to="/" className="d-block">
                {this.props.user.firstName + ' ' + this.props.user.lastName}
              </Link>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
                 with font-awesome or any other icon font library menu-open */}
              <li className="nav-item has-treeview">
                <NavLink to="/" exact className="nav-link">
                  <i className="nav-icon fa fa-dashboard" />
                  <p>Dashboard</p>
                </NavLink>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    );
  }
}

export default MenuSidebar;
