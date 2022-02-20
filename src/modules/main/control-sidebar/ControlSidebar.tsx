import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Checkbox, Select} from '@app/components';
import {
    setNavbarVariant,
    setSidebarSkin,
    toggleDarkMode
} from '@app/store/reducers/ui';
import {
    NAVBAR_DARK_VARIANTS,
    NAVBAR_LIGHT_VARIANTS,
    SIDEBAR_DARK_SKINS,
    SIDEBAR_LIGHT_SKINS
} from '@app/utils/themes';

const ControlSidebar = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector((state: any) => state.ui.darkMode);
    const navbarVariant = useSelector((state: any) => state.ui.navbarVariant);
    const sidebarSkin = useSelector((state: any) => state.ui.sidebarSkin);

    const handleDarkModeChange = () => {
        dispatch(toggleDarkMode());
    };

    const onNavbarVariantChange = (value: string) => {
        dispatch(setNavbarVariant(value));
    };

    const onSidebarSkinChange = (value: string) => {
        dispatch(setSidebarSkin(value));
    };

    return (
        <aside
            className="control-sidebar control-sidebar-dark"
            style={{padding: '16px', paddingTop: '73px'}}
        >
            <h5>Customize AdminLTE</h5>
            <hr className="mb-2" />

            <div style={{padding: '8px 0'}}>
                <Checkbox
                    checked={darkMode}
                    onChange={handleDarkModeChange}
                    label="Dark mode"
                />
                <Select
                    className="mt-3"
                    value={navbarVariant}
                    options={NAVBAR_LIGHT_VARIANTS}
                    type="custom"
                    onChange={onNavbarVariantChange}
                >
                    Light Navbar Variants
                </Select>
                <Select
                    className="mt-3"
                    value={navbarVariant}
                    options={NAVBAR_DARK_VARIANTS}
                    type="custom"
                    onChange={onNavbarVariantChange}
                >
                    Dark Navbar Variants
                </Select>
                <Select className="mt-3" options={[]} type="custom" disabled>
                    Accent Color Variants
                </Select>
                <Select
                    className="mt-3"
                    value={sidebarSkin}
                    options={SIDEBAR_LIGHT_SKINS}
                    type="custom"
                    onChange={onSidebarSkinChange}
                >
                    Light Sidebar Variants
                </Select>
                <Select
                    className="mt-3"
                    value={sidebarSkin}
                    options={SIDEBAR_DARK_SKINS}
                    type="custom"
                    onChange={onSidebarSkinChange}
                >
                    Dark Sidebar Variants
                </Select>
                <Select className="mt-3" options={[]} type="custom" disabled>
                    Brand Logo Variants
                </Select>
            </div>
        </aside>
    );
};

export default ControlSidebar;
