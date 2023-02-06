/* eslint-disable no-unused-vars */
import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  setNavbarVariant,
  setSidebarSkin,
  toggleDarkMode,
  toggleFooterFixed,
  toggleHeaderBorder,
  toggleHeaderFixed,
  toggleLayoutBoxed,
  toggleLayoutFixed,
  toggleMenuChildIndent,
  toggleMenuItemFlat,
  toggleSidebarMenu
} from '@app/store/reducers/ui';
import {
  NAVBAR_DARK_VARIANTS,
  NAVBAR_LIGHT_VARIANTS,
  SIDEBAR_DARK_SKINS,
  SIDEBAR_LIGHT_SKINS
} from '@app/utils/themes';
import useScrollPosition from '@app/hooks/useScrollPosition';
import {PfCheckbox, PfSelect} from '@profabric/react-components';

const ControlSidebar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: any) => state.ui.darkMode);
  const headerBorder = useSelector((state: any) => state.ui.headerBorder);
  const headerFixed = useSelector((state: any) => state.ui.headerFixed);
  const footerFixed = useSelector((state: any) => state.ui.footerFixed);
  const navbarVariant = useSelector((state: any) => state.ui.navbarVariant);
  const sidebarSkin = useSelector((state: any) => state.ui.sidebarSkin);
  const layoutBoxed = useSelector((state: any) => state.ui.layoutBoxed);
  const layoutFixed = useSelector((state: any) => state.ui.layoutFixed);
  const menuItemFlat = useSelector((state: any) => state.ui.menuItemFlat);
  const menuChildIndent = useSelector((state: any) => state.ui.menuChildIndent);
  const menuSidebarCollapsed = useSelector(
    (state: any) => state.ui.menuSidebarCollapsed
  );
  const scrollPosition = useScrollPosition();

  const handleDarkModeChange = () => {
    dispatch(toggleDarkMode());
  };

  const handleHeaderBorderChange = () => {
    dispatch(toggleHeaderBorder());
  };

  const handleHeaderFixedChange = () => {
    dispatch(toggleHeaderFixed());
  };

  const handleFooterFixedChange = () => {
    dispatch(toggleFooterFixed());
  };

  const handleLayoutBoxedChange = () => {
    dispatch(toggleLayoutBoxed());
  };

  const handleLayoutFixedChange = () => {
    dispatch(toggleLayoutFixed());
  };

  const onNavbarVariantChange = (value: string) => {
    dispatch(setNavbarVariant(value));
  };

  const onSidebarSkinChange = (value: string) => {
    dispatch(setSidebarSkin(value));
  };

  const handleMenuItemFlatChange = () => {
    dispatch(toggleMenuItemFlat());
  };

  const handleMenuChildIndentChange = () => {
    dispatch(toggleMenuChildIndent());
  };

  const handleMenuSidebarCollapsed = () => {
    dispatch(toggleSidebarMenu());
  };

  const getContainerPaddingTop = useCallback(() => {
    if (headerFixed) {
      return `${16 - (scrollPosition <= 16 ? scrollPosition : 0)}px`;
    }
    return `${73 - (scrollPosition <= 57 ? scrollPosition : 57)}px`;
  }, [scrollPosition, headerFixed]);

  return (
    <aside
      className="control-sidebar control-sidebar-dark"
      style={{
        top: 0,
        bottom: footerFixed ? '57px' : '0px',
        padding: `${getContainerPaddingTop()} 16px 16px 16px`,
        overflowY: 'scroll'
      }}
    >
      <h5>Customize AdminLTE</h5>
      <hr className="mb-2" />

      <div style={{padding: '8px 0'}}>
        <div className="mb-4">
          <PfCheckbox checked={darkMode} onChange={handleDarkModeChange}>
            Dark mode
          </PfCheckbox>
          <PfCheckbox checked={layoutBoxed} onChange={handleLayoutBoxedChange}>
            Boxed (Broken when header or footer is fixed)
          </PfCheckbox>
        </div>

        <h6>Header Options</h6>

        <div className="mb-4">
          <PfCheckbox checked={headerFixed} onChange={handleHeaderFixedChange}>
            Fixed
          </PfCheckbox>
          <PfCheckbox
            checked={headerBorder}
            onChange={handleHeaderBorderChange}
          >
            No Border
          </PfCheckbox>
        </div>

        <h6>Sidebar Options</h6>

        <div className="mb-4">
          <PfCheckbox
            checked={menuSidebarCollapsed}
            onChange={handleMenuSidebarCollapsed}
          >
            Collapse
          </PfCheckbox>
          <PfCheckbox checked={layoutFixed} onChange={handleLayoutFixedChange}>
            Fixed
          </PfCheckbox>
          <PfCheckbox
            checked={menuItemFlat}
            onChange={handleMenuItemFlatChange}
          >
            Nav Flat Style
          </PfCheckbox>
          <PfCheckbox
            checked={menuChildIndent}
            onChange={handleMenuChildIndentChange}
          >
            Nav Child Indent
          </PfCheckbox>
        </div>

        <h6>Footer Options</h6>

        <div className="mb-4">
          <PfCheckbox checked={footerFixed} onChange={handleFooterFixedChange}>
            Fixed
          </PfCheckbox>
        </div>

        <PfSelect
          className="mt-3"
          value={navbarVariant}
          label="Light Navbar Variants"
          options={NAVBAR_LIGHT_VARIANTS}
          onChange={(e: any) => onNavbarVariantChange(e.target.value)}
          type="custom"
        />
        <PfSelect
          className="mt-3"
          label="Dark Navbar Variants"
          value={navbarVariant}
          options={NAVBAR_DARK_VARIANTS}
          type="custom"
          onChange={(e: any) => onNavbarVariantChange(e.target.value)}
        />
        <PfSelect
          className="mt-3"
          label="Accent Color Variants"
          options={[]}
          type="custom"
          disabled
        />
        <PfSelect
          className="mt-3"
          label="Light Sidebar Variants"
          value={sidebarSkin}
          options={SIDEBAR_LIGHT_SKINS}
          type="custom"
          onChange={(e: any) => onSidebarSkinChange(e.target.value)}
        />
        <PfSelect
          className="mt-3"
          label="Dark Sidebar Variants"
          value={sidebarSkin}
          options={SIDEBAR_DARK_SKINS}
          type="custom"
          onChange={(e: any) => onSidebarSkinChange(e.target.value)}
        />
        <PfSelect
          className="mt-3"
          label="Brand Logo Variants"
          options={[]}
          type="custom"
          disabled
        />
      </div>
    </aside>
  );
};

export default ControlSidebar;
