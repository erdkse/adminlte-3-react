import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import MenuSidebar from './menu-sidebar/MenuSidebar';
import Dashboard from '../pages/Dashboard';

let updateUser = true;

const Main = () => {
  const user = {
    user: {
      data: { email: 'mail@example.com', image: null },
    },
  };

  const [userState, updateUserState] = useState({
    user: {
      data: { email: '', image: null },
    },
  });

  const [menusidebarState, updateMenusidebarState] = useState({
    isMenuSidebarCollapsed: false,
  });

  const toggleMenuSidebar = () => {
    updateMenusidebarState({
      isMenuSidebarCollapsed: !menusidebarState.isMenuSidebarCollapsed,
    });
  };

  useEffect(() => {
    if (updateUser) {
      updateUserState({
        user: {
          data: { email: 'mail@example.com', image: null },
        },
      });
    }

    return () => {
      updateUser = false;
    };
  }, [user]);

  document.body.classList.remove('register-page');
  document.body.classList.remove('login-page');
  document.body.classList.remove('hold-transition');

  document.body.className += ' sidebar-mini';

  if (menusidebarState.isMenuSidebarCollapsed) {
    document.body.classList.add('sidebar-collapse');
    document.body.classList.remove('sidebar-open');
  } else {
    document.body.classList.add('sidebar-open');
    document.body.classList.remove('sidebar-collapse');
  }

  return (
    <div className="wrapper">
      <Header toggleMenuSidebar={toggleMenuSidebar} user={userState.user} />

      <MenuSidebar user={userState.user} />

      <div className="content-wrapper">
        <div className="pt-3" />
        <section className="content">
          <Switch>
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </section>
      </div>
      <Footer />
      <div
        id="sidebar-overlay"
        role="complementary"
        onClick={toggleMenuSidebar}
      />
    </div>
  );
};

export default Main;
