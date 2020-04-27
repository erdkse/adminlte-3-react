import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from '../utils/axios';
import Header from './header/Header';
import Footer from './footer/Footer';
import MenuSidebar from './menu-sidebar/MenuSidebar';
import Dashboard from '../pages/Dashboard';
import PageLoading from '../components/page-loading/PageLoading';

let updateData = true;

const Main = () => {
  const [userState, updateUserState] = useState({
    user: {
      data: { email: 'mail@example.com', picture: null }
    }
  });

  const [appLoadingState, updateAppLoading] = useState(false);

  const [menusidebarState, updateMenusidebarState] = useState({
    isMenuSidebarCollapsed: false
  });

  const toggleMenuSidebar = () => {
    updateMenusidebarState({
      isMenuSidebarCollapsed: !menusidebarState.isMenuSidebarCollapsed
    });
  };

  useEffect(() => {
    if (updateData) {
      updateAppLoading(true);
      axios
        .get('/v1/users/profile')
        .then((response) => {
          updateAppLoading(false);
          updateUserState({
            user: {
              data: response.data
            }
          });
        })
        .catch(() => {
          updateAppLoading(false);
        });
    }

    return () => {
      updateData = false;
    };
  }, []);

  document.getElementById('root').classList.remove('register-page');
  document.getElementById('root').classList.remove('login-page');
  document.getElementById('root').classList.remove('hold-transition');

  document.getElementById('root').className += ' sidebar-mini';

  if (menusidebarState.isMenuSidebarCollapsed) {
    document.getElementById('root').classList.add('sidebar-collapse');
    document.getElementById('root').classList.remove('sidebar-open');
  } else {
    document.getElementById('root').classList.add('sidebar-open');
    document.getElementById('root').classList.remove('sidebar-collapse');
  }

  let template;

  if (appLoadingState) {
    template = <PageLoading />;
  } else {
    template = (
      <>
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
          role="presentation"
          onClick={toggleMenuSidebar}
          onKeyDown={() => {}}
        />
      </>
    );
  }

  return <div className="wrapper">{template}</div>;
};

export default Main;
