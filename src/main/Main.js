import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import MenuSidebar from './menu-sidebar/MenuSidebar';
import Dashboard from '../pages/Dashboard';
// import Users from '../pages/Users';
// import User from '../pages/User';
// import Companies from '../pages/Companies';
// import Company from '../pages/Company';
// import Employees from '../pages/Employees';
// import Employee from '../pages/Employee';
// import NotFound from '../pages/404';
import { Route, Switch } from 'react-router-dom';
import axios from './../utils/axios';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      isMenuSidebarCollapsed: true,
      user: {}
    };
    console.log('[Main] constructor');
  }

  toggleMenuSidebar = () => {
    this.setState((prevState, props) => {
      return {
        isMenuSidebarCollapsed: !prevState.isMenuSidebarCollapsed
      };
    });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      '[Main] getDerivedStateFromProps',
      '\nnextProps',
      nextProps,
      '\nprevState',
      prevState
    );

    return prevState;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      '[Main] getSnapshotBeforeUpdate',
      '\nprevProps',
      prevProps,
      '\nprevState',
      prevState
    );
    return null;
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log(
      '[Main] shouldComponentUpdate',
      '\nnextProps',
      nextProps,
      '\nnextState',
      nextState,
      '\nnextContext',
      nextContext
    );
    return true;
  }

  componentDidMount() {
    console.log('[Main] componentDidMount', '\nprops', this.props);
    axios
      .get('/users/profile', {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      })
      .then(response => {
        console.log(response);
        this.setState({ ...this.state, user: { ...response.data } });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      '[Main] componentDidUpdate',
      '\nprevProps',
      prevProps,
      '\nprevState',
      prevState
    );
  }

  componentWillUnmount() {
    console.log('[Main] componentWillUnmount');
  }

  componentDidCatch(error, errorInfo) {
    console.log(
      '[Main] componentDidCatch',
      '\nerror',
      error,
      '\nerrorInfo',
      errorInfo
    );
  }

  render() {
    console.log('[Main] render');

    document.body.className += ' sidebar-mini';

    if (this.state.isMenuSidebarCollapsed) {
      document.body.classList.add('sidebar-collapse');
      document.body.classList.remove('sidebar-open');
    } else {
      document.body.classList.add('sidebar-open');
      document.body.classList.remove('sidebar-collapse');
    }

    return (
      <div className="wrapper">
        <Header toggleMenuSidebar={this.toggleMenuSidebar} />

        <MenuSidebar user={this.state.user} />

        <div className="content-wrapper">
          {/* <ContentHeader title={'Dashboard'} /> */}
          <div className="pt-3" />
          <section className="content">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              {/* <Route exact path="/users" component={Users} />
              <Route exact path="/users/:userID" component={User} />
              <Route exact path="/companies" component={Companies} />
              <Route exact path="/companies/:companyID" component={Company} />
              <Route exact path="/employees" component={Employees} />
              <Route exact path="/employees/:employeeID" component={Employee} />
              <Route component={NotFound} /> */}
            </Switch>
          </section>
        </div>

        <Footer />

        <div id="sidebar-overlay" onClick={this.toggleMenuSidebar} />
      </div>
    );
  }
}

export default Main;
