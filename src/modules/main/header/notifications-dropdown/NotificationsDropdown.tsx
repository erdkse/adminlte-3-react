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
        <span className="badge badge-warning navbar-badge">15</span>
      </div>
      <div slot="menu">
        <span className="dropdown-item dropdown-header">
          {t<string>('header.notifications.count', {quantity: '15'})}
        </span>
        <div className="dropdown-divider" />
        <Link to="/" className="dropdown-item">
          <i className="fas fa-envelope mr-2" />
          <span>
            {t<string>('header.notifications.newMessagesCount', {
              quantity: '4'
            })}
          </span>
          <span className="float-right text-muted text-sm">
            {t<string>('measurement.quantityUnit', {
              quantity: '3',
              unit: 'mins'
            })}
          </span>
        </Link>
        <div className="dropdown-divider" />
        <Link to="/" className="dropdown-item">
          <i className="fas fa-users mr-2" />
          <span>
            {t<string>('header.notifications.friendRequestsCount', {
              quantity: '5'
            })}
          </span>
          <span className="float-right text-muted text-sm">
            {t<string>('measurement.quantityUnit', {
              quantity: '12',
              unit: 'hours'
            })}
          </span>
        </Link>
        <div className="dropdown-divider" />
        <Link to="/" className="dropdown-item">
          <i className="fas fa-file mr-2" />
          <span>
            {t<string>('header.notifications.reportsCount', {
              quantity: '3'
            })}
          </span>
          <span className="float-right text-muted text-sm">
            {t<string>('measurement.quantityUnit', {
              quantity: '2',
              unit: 'days'
            })}
          </span>
        </Link>
        <div className="dropdown-divider" />
        <Link to="/" className="dropdown-item dropdown-footer">
          {t<string>('header.notifications.seeAll')}
        </Link>
      </div>
    </StyledDropdown>
  );
};

export default NotificationsDropdown;
