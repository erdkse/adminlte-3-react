import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Checkbox, Select} from '@app/components';
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
          <Checkbox checked={darkMode} onChange={handleDarkModeChange}>
            Dark mode
          </Checkbox>
          <Checkbox checked={layoutBoxed} onChange={handleLayoutBoxedChange}>
            Boxed (Broken when header or footer is fixed)
          </Checkbox>
        </div>

        <h6>Header Options</h6>

        <div className="mb-4">
          <Checkbox checked={headerFixed} onChange={handleHeaderFixedChange}>
            Fixed
          </Checkbox>
          <Checkbox checked={headerBorder} onChange={handleHeaderBorderChange}>
            No Border
          </Checkbox>
        </div>

        <h6>Sidebar Options</h6>

        <div className="mb-4">
          <Checkbox
            checked={menuSidebarCollapsed}
            onChange={handleMenuSidebarCollapsed}
          >
            Collapse
          </Checkbox>
          <Checkbox checked={layoutFixed} onChange={handleLayoutFixedChange}>
            Fixed
          </Checkbox>
          <Checkbox checked={menuItemFlat} onChange={handleMenuItemFlatChange}>
            Nav Flat Style
          </Checkbox>
          <Checkbox
            checked={menuChildIndent}
            onChange={handleMenuChildIndentChange}
          >
            Nav Child Indent
          </Checkbox>
        </div>

        <h6>Footer Options</h6>

        <div className="mb-4">
          <Checkbox checked={footerFixed} onChange={handleFooterFixedChange}>
            Fixed
          </Checkbox>
        </div>

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
