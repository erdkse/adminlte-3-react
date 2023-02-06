import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {MenuItem} from '@components';
import {PfImage} from '@profabric/react-components';
import styled from 'styled-components';
// import {SidebarSearch} from '@app/components/sidebar-search/SidebarSearch';
import i18n from '@app/utils/i18n';

export interface IMenuItem {
  name: string;
  icon?: string;
  path?: string;
  children?: Array<IMenuItem>;
}

export const MENU: IMenuItem[] = [
  {
    name: i18n.t('  Dashboard'),
    icon: 'fas fa-tachometer-alt nav-icon" />',
    path: '/main/dash'
  },
  
  {
    name: i18n.t('Personal Info'),
    icon: 'fa fa-university nav-icon',
    children: [
      {
        name: i18n.t('Attendence'),
        icon: 'fas fa-clock o nav-icon',
        path: '/main/attendence'
      },

      {
        name: i18n.t('Salary History'),
        icon: 'fas fa-rupee-sign nav-icon',
        path: '/main/salhistory'
      },
      {
        name: i18n.t('CWF Details'),
        icon: 'fas fa-rupee-sign nav-icon',
        path: '/main/cwfdet'
      }
    ]
  },
  {
    name: i18n.t('Leave'),
    icon: 'fa fa-calendar nav-icon',
    children: [
      {
        name: i18n.t('Apply Leave'),
        icon: '	fas fa-share-square nav-icon',
        path: '/main/apply'
      },

      {
        name: i18n.t('Leave History'),
        icon: 'fa fa-history nav-icon',
        path: '/main/leavehis'
      },
      {
        name: i18n.t('Alternative Arrangement'),
        icon: 'fas fa-user-plus nav-icon',
        path: '/main/altarr'
      }
    ]
  },
  {
    name: i18n.t('  Contact Details'),
    icon: '	fas fa-users nav-icon" />',
    path: '/main/contact'
  }
];

const StyledBrandImage = styled(PfImage)`
  float: left;
  line-height: 0.8;
  margin: -1px 8px 0 6px;
  opacity: 0.8;
  --pf-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23) !important;
`;

const StyledUserImage = styled(PfImage)`
  --pf-box-shadow: 0 3px 6px #00000029, 0 3px 6px #0000003b !important;
`;

const MenuSidebar = () => {
  const user = useSelector((state: any) => state.auth.currentUser);
  const sidebarSkin = useSelector((state: any) => state.ui.sidebarSkin);
  const menuItemFlat = useSelector((state: any) => state.ui.menuItemFlat);
  const menuChildIndent = useSelector((state: any) => state.ui.menuChildIndent);

  const [names , setName] = useState('');
  const [eid, setEid] = useState('');
  const {state} = useLocation();
  const history = useNavigate();

useEffect(() => {
 // e.preventDefault();
   axios.post('http://localhost:5000/getusers',{
      email: state.email,
      password: state.password
  }).then((res)=> {
      //console.log(res.data[0])
      setName(res.data[0]);
      setEid(res.data[0]);
  });
 
},[]);

  return (
    <aside className={`main-sidebar elevation-4 ${sidebarSkin}`}>
      <Link to="/main" className="brand-link">
        <img
          src="/img/hrms_logo.jpg"
          alt="AdminLTE Logo"
          width={220}
          height={50}
          
        />
        {/* <span className="brand-text font-weight-light">HRMS</span> */}
      </Link>
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <StyledUserImage
              src={user.picture}
              fallbackSrc="/img/default-profile.png"
              alt="User"
              width={45}
              height={50}
              rounded
            />
          </div>
          <div className="info">
            <Link to="/main" className="d-block">
            {names.name} <br/>
            Employee Id {eid.id}

            </Link>
          </div>
        </div>

        <div className="form-inline">
        </div>

        <nav className="mt-2" style={{overflowY: 'hidden'}}>
          <ul
            className={`nav nav-pills nav-sidebar flex-column${
              menuItemFlat ? ' nav-flat' : ''
            }${menuChildIndent ? ' nav-child-indent' : ''}`}
            role="menu"
          >
            {MENU.map((menuItem: IMenuItem) => (
              <MenuItem
                key={menuItem.name + menuItem.path}
                menuItem={menuItem}
              />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default MenuSidebar;
