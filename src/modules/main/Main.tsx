import { useState, useEffect, useCallback } from 'react';
import { toggleSidebarMenu } from '@app/store/reducers/ui';
import { addWindowClass, removeWindowClass } from '@app/utils/helpers';
import ControlSidebar from '@app/modules/main/control-sidebar/ControlSidebar';
import Header from '@app/modules/main/header/Header';
import Footer from '@app/modules/main/footer/Footer';
import { Image } from '@profabric/react-components';
import { Content } from './content/Content';
import { useAppDispatch, useAppSelector } from '@app/store/store';
import MenuSidebar from './menu-sidebar/MenuSidebar';

const Main = () => {
  const dispatch = useAppDispatch();
  const layout = useAppSelector((state) => state.ui.layout);
  const menuSidebarCollapsed = useAppSelector(
    (state) => state.ui.menuSidebarCollapsed
  );
  const controlSidebarCollapsed = useAppSelector(
    (state) => state.ui.controlSidebarCollapsed
  );
  const screenSize = useAppSelector((state) => state.ui.screenSize);
  const currentUser = useAppSelector((state) => state.auth.currentUser);
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  const handleToggleMenuSidebar = () => {
    dispatch(toggleSidebarMenu());
  };

  useEffect(() => {
    setIsAppLoaded(Boolean(currentUser));
  }, [currentUser]);

  useEffect(() => {
    removeWindowClass('register-page');
    removeWindowClass('login-page');
    removeWindowClass('hold-transition');

    addWindowClass('sidebar-mini');

    // fetchProfile();
    return () => {
      removeWindowClass('sidebar-mini');
    };
  }, []);

  useEffect(() => {
    removeWindowClass('sidebar-closed');
    removeWindowClass('sidebar-collapse');
    removeWindowClass('sidebar-open');
    if (menuSidebarCollapsed && screenSize === 'lg') {
      addWindowClass('sidebar-collapse');
    } else if (menuSidebarCollapsed && screenSize === 'xs') {
      addWindowClass('sidebar-open');
    } else if (!menuSidebarCollapsed && screenSize !== 'lg') {
      addWindowClass('sidebar-closed');
      addWindowClass('sidebar-collapse');
    }
  }, [screenSize, menuSidebarCollapsed]);

  useEffect(() => {
    if (controlSidebarCollapsed) {
      removeWindowClass('control-sidebar-slide-open');
    } else {
      addWindowClass('control-sidebar-slide-open');
    }
  }, [screenSize, controlSidebarCollapsed]);

  const getAppTemplate = useCallback(() => {
    if (!isAppLoaded) {
      return (
        <div className="preloader flex-column justify-content-center align-items-center">
          <Image
            className="animation__shake"
            src="/img/logo.png"
            alt="AdminLTELogo"
            height={60}
            width={60}
          />
        </div>
      );
    }
    return (
      <>
        <Header containered={layout === '1'} style={{ marginLeft: '0px' }} />

        {layout !== '1' && <MenuSidebar />}

        <Content containered={layout === '1'} />
        <Footer containered={layout === '1'} style={{ marginLeft: '0px' }} />
        <ControlSidebar />
        <div
          id="sidebar-overlay"
          role="presentation"
          onClick={handleToggleMenuSidebar}
          onKeyDown={() => {}}
          style={{
            display:
              screenSize === 'sm' && menuSidebarCollapsed ? 'block' : undefined,
          }}
        />
      </>
    );
  }, [
    isAppLoaded,
    menuSidebarCollapsed,
    screenSize,
    layout,
    handleToggleMenuSidebar,
  ]);

  return <div className="wrapper">{getAppTemplate()}</div>;
};

export default Main;
