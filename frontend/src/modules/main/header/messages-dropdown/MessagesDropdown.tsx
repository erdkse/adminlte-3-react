import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {PfDropdown, PfImage} from '@profabric/react-components';
import styled from 'styled-components';

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

const MessagesDropdown = () => {
  const [t] = useTranslation();

  return (
    <StyledDropdown hideArrow>
      <div slot="button">
      <i className="fa fa-users"></i>
              <span className="badge badge-danger navbar-badge">0</span>
      </div>
      <div slot="menu">
        <Link to="/" className="dropdown-item">
            <div className="media-body">
            Click Here to Approve Alternative arrangement
            </div>
            </Link>
        {/* </Link>
        <div className="dropdown-divider" />
        <Link to="/" className="dropdown-item dropdown-footer">
          {t<string>('header.messages.seeAll')}
        </Link> */}
      </div>
    </StyledDropdown>
  );
};

export default MessagesDropdown;
