import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';
import {PfDropdown} from '@profabric/react-components';

export const StyledDropdown = styled(PfDropdown)`
  border: none;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  --pf-dropdown-menu-min-width: 18rem;

  .dropdown-item {
    padding: 0.5rem 1rem;
  }

  .text-sm {
    margin-bottom: 0;
  }
  .dropdown-divider {
    margin: 0;
  }
`;

const NotificationsDropdown = () => {
  const [t] = useTranslation();

  return (
    <StyledDropdown hideArrow>
      <div slot="button">
        <i className="far fa-bell" />
        <span className="badge badge-warning navbar-badge">0</span>
      </div>
      <div slot="menu">
        <div className="dropdown-divider" />
        <Link to="/" className="dropdown-item dropdown-footer">
          {t<string>('You have 0  Notification')}
        </Link>
      </div>
    </StyledDropdown>
  );
};

export default NotificationsDropdown;
