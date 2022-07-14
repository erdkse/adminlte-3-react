import React, {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {DateTime} from 'luxon';
import {useTranslation} from 'react-i18next';
import {logoutUser} from '@store/reducers/auth';
import {Dropdown} from '@components';
import styled from 'styled-components';
import {PfImage} from '@profabric/react-components';

const StyledSmallUserImage = styled(PfImage)`
  margin: -2px 0 0 -8px;
  --pf-box-shadow: 0 3px 6px #00000029, 0 3px 6px #0000003b !important;
`;

const StyledBigUserImage = styled(PfImage)`
  --pf-box-shadow: 0 3px 6px #00000029, 0 3px 6px #0000003b !important;
  --pf-border: 3px solid #fff3;
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
    <Dropdown
      isOpen={dropdownOpen}
      onChange={(open: boolean) => setDropdownOpen(open)}
      className="user-menu"
      menuContainerTag="ul"
      buttonTemplate={
        <StyledSmallUserImage
          src={user.picture}
          fallbackSrc="/img/default-profile.png"
          alt="User"
          width={25}
          height={25}
          rounded
        />
      }
      menuTemplate={
        <>
          <li className="user-header bg-primary">
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
          </li>
          <li className="user-body">
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
          </li>
          <li className="user-footer">
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
          </li>
        </>
      }
    />
  );
};

export default UserDropdown;
