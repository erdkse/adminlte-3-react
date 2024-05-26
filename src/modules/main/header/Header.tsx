import { ReactNode, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  toggleControlSidebar,
  toggleSidebarMenu,
} from '@app/store/reducers/ui';
import MessagesDropdown from '@app/modules/main/header/messages-dropdown/MessagesDropdown';
import NotificationsDropdown from '@app/modules/main/header/notifications-dropdown/NotificationsDropdown';
import LanguagesDropdown from '@app/modules/main/header/languages-dropdown/LanguagesDropdown';
import UserDropdown from '@app/modules/main/header/user-dropdown/UserDropdown';
import { styled } from 'styled-components';
import { Image } from '@profabric/react-components';
import { useAppDispatch, useAppSelector } from '@app/store/store';

const StyledBrandImage = styled(Image)`
  float: left;
  line-height: 0.8;
  opacity: 0.8;
  --pf-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23) !important;
  margin: -1px 4px 0 6px;

  &:hover {
    color: inherit;
  }
`;

const Header = ({ containered, ...rest }: { containered?: boolean } & any) => {
  const [t] = useTranslation();
  const dispatch = useAppDispatch();
  const navbarVariant = useAppSelector((state) => state.ui.navbarVariant);
  const headerBorder = useAppSelector((state) => state.ui.headerBorder);
  const topNavigation = useAppSelector((state) => state.ui.topNavigation);

  const handleToggleMenuSidebar = () => {
    dispatch(toggleSidebarMenu());
  };

  const handleToggleControlSidebar = () => {
    dispatch(toggleControlSidebar());
  };

  const getContainerClasses = useCallback(() => {
    let classes = `main-header navbar navbar-expand ${navbarVariant}`;
    if (headerBorder) {
      classes = `${classes} border-bottom-0`;
    }
    return classes;
  }, [navbarVariant, headerBorder]);

  return (
    <nav className={getContainerClasses()} {...rest}>
      <div
        style={{ width: '100%', display: 'flex', alignItems: 'center' }}
        className={containered ? 'container' : ''}
      >
        {topNavigation && (
          <>
            <Link to="/" className="brand-link" style={{ display: 'contents' }}>
              <StyledBrandImage
                src="/img/logo.png"
                alt="AdminLTE Logo"
                width={33}
                height={33}
                rounded
              />
              <span
                className="brand-text font-weight-light"
                style={{ color: 'rgba(0, 0, 0, 0.9)' }}
              >
                AdminLTE 3
              </span>
            </Link>

            <button
              className="navbar-toggler order-1"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </>
        )}
        <ul className="navbar-nav">
          {!topNavigation && (
            <li className="nav-item">
              <button
                onClick={handleToggleMenuSidebar}
                type="button"
                className="nav-link"
              >
                <i className="fas fa-bars" />
              </button>
            </li>
          )}
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="/" className="nav-link">
              {t('header.label.home')}
            </Link>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="/profile" className="nav-link">
              Profile
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <MessagesDropdown />
          <NotificationsDropdown />
          <LanguagesDropdown />
          <UserDropdown />
          <li className="nav-item">
            <button
              type="button"
              className="nav-link"
              onClick={handleToggleControlSidebar}
            >
              <i className="fas fa-th-large" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
