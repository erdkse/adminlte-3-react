import React, {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {DateTime} from 'luxon';
import {useTranslation} from 'react-i18next';
import {logoutUser} from '@store/reducers/auth';
import styled from 'styled-components';
import {PfDropdown, PfImage} from '@profabric/react-components';

const StyledSmallUserImage = styled(PfImage)`
  margin-top: 3px;
  --pf-box-shadow: 0 3px 6px #00000029, 0 3px 6px #0000003b !important;
`;

const StyledBigUserImage = styled(PfImage)`
  --pf-box-shadow: 0 3px 6px #00000029, 0 3px 6px #0000003b !important;
  --pf-border: 3px solid #fff3;
`;

const UserHeader = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 175px;
  padding: 10px;
  text-align: center;
  img {
    z-index: 5;
    height: 90px;
    width: 90px;
    border: 3px solid;
    border-color: transparent;
    border-color: rgba(255, 255, 255, 0.2);
  }
  p {
    z-index: 5;
    font-size: 17px;
    margin-top: 10px;
    small {
      display: block;
      font-size: 12px;
    }
  }
`;

const UserBody = styled.li`
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom: 1px solid #495057;
  border-top: 1px solid #dee2e6;
  padding: 15px;
  &::after {
    display: block;
    clear: both;
    content: '';
  }

  @media (min-width: 576px) {
    a {
      background: #ffffff !important;
      color: #495057 !important;
    }
  }
`;

const UserFooter = styled.li`
  background-color: #f8f9fa;
  padding: 10px;
  &::after {
    display: block;
    clear: both;
    content: '';
  }
  .btn-default {
    color: #6c757d;
  }

  @media (min-width: 576px) {
    .btn-default:hover {
      background-color: #f8f9fa;
    }
  }
`;

export const StyledDropdown = styled(PfDropdown)`
  border: none;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  --pf-dropdown-menu-min-width: 280px;

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

const UserDropdown = () => {
  const navigate = useNavigate();
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.auth.currentUser);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const logOut = (event: any) => {
    event.preventDefault();
    setDropdownOpen(false);
    dispatch(logoutUser());
    navigate('/login');
  };

  const navigateToProfile = (event: any) => {
    event.preventDefault();
    setDropdownOpen(false);
    navigate('/profile');
  };

  return (
    <StyledDropdown isOpen={dropdownOpen} hideArrow>
      <StyledSmallUserImage
        slot="button"
        src={user.picture}
        fallbackSrc="/img/default-profile.png"
        alt="User"
        width={25}
        height={25}
        rounded
      />
      <div slot="menu">
        <UserHeader className=" bg-primary">
          <StyledBigUserImage
            src={user.picture}
            fallbackSrc="/img/default-profile.png"
            alt="User"
            width={90}
            height={90}
            rounded
          />
          <p>
            {user.email}
            <small>
              <span>Member since </span>
              <span>
                {DateTime.fromISO(user.createdAt).toFormat('dd LLL yyyy')}
              </span>
            </small>
          </p>
        </UserHeader>
        <UserBody>
          <div className="row">
            <div className="col-4 text-center">
              <Link to="/">{t<string>('header.user.followers')}</Link>
            </div>
            <div className="col-4 text-center">
              <Link to="/">{t<string>('header.user.sales')}</Link>
            </div>
            <div className="col-4 text-center">
              <Link to="/">{t<string>('header.user.friends')}</Link>
            </div>
          </div>
        </UserBody>
        <UserFooter>
          <button
            type="button"
            className="btn btn-default btn-flat"
            onClick={navigateToProfile}
          >
            {t<string>('header.user.profile')}
          </button>
          <button
            type="button"
            className="btn btn-default btn-flat float-right"
            onClick={logOut}
          >
            {t<string>('login.button.signOut')}
          </button>
        </UserFooter>
      </div>
    </StyledDropdown>
  );
};

export default UserDropdown;
