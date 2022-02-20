import React, {useState, useEffect, useCallback} from 'react';
import {Outlet} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Gatekeeper} from 'gatekeeper-client-sdk';
import {loadUser, logoutUser} from '@store/reducers/auth';
import {toggleSidebarMenu} from '@app/store/reducers/ui';
import {addWindowClass, removeWindowClass} from '@app/utils/helpers';

import Header from './header/Header';
import Footer from './footer/Footer';
import MenuSidebar from './menu-sidebar/MenuSidebar';
import PageLoading from '../../components/page-loading/PageLoading';

const Main = () => {
    const dispatch = useDispatch();
    const isSidebarMenuCollapsed = useSelector(
        (state: any) => state.ui.isSidebarMenuCollapsed
    );
    const screenSize = useSelector((state: any) => state.ui.screenSize);
    const [isAppLoaded, setIsAppLoaded] = useState(false);

    const handleToggleMenuSidebar = () => {
        dispatch(toggleSidebarMenu());
    };

    const fetchProfile = async () => {
        try {
            const response = await Gatekeeper.getProfile();
            dispatch(loadUser(response));
            setIsAppLoaded(true);
        } catch (error) {
            dispatch(logoutUser());
            setIsAppLoaded(true);
        }
    };

    useEffect(() => {
        removeWindowClass('register-page');
        removeWindowClass('login-page');
        removeWindowClass('hold-transition');

        addWindowClass('sidebar-mini');
        addWindowClass('layout-fixed');

        fetchProfile();
        return () => {
            removeWindowClass('sidebar-mini');
            removeWindowClass('layout-fixed');
        };
    }, []);

    useEffect(() => {
        removeWindowClass('sidebar-closed');
        removeWindowClass('sidebar-collapse');
        removeWindowClass('sidebar-open');
        if (isSidebarMenuCollapsed && screenSize === 'lg') {
            addWindowClass('sidebar-collapse');
        } else if (isSidebarMenuCollapsed && screenSize === 'xs') {
            addWindowClass('sidebar-open');
        } else if (!isSidebarMenuCollapsed && screenSize !== 'lg') {
            addWindowClass('sidebar-closed');
            addWindowClass('sidebar-collapse');
        }
    }, [screenSize, isSidebarMenuCollapsed]);

    const getAppTemplate = useCallback(() => {
        if (!isAppLoaded) {
            return <PageLoading />;
        }
        return (
            <>
                <Header toggleMenuSidebar={handleToggleMenuSidebar} />

                <MenuSidebar />

                <div className="content-wrapper">
                    <div className="pt-3" />
                    <section className="content">
                        <Outlet />
                    </section>
                </div>
                <Footer />
                <div
                    id="sidebar-overlay"
                    role="presentation"
                    onClick={handleToggleMenuSidebar}
                    onKeyDown={() => {}}
                />
            </>
        );
    }, [isAppLoaded]);

    return <div className="wrapper">{getAppTemplate()}</div>;
};

export default Main;
