/* eslint-disable no-unused-vars */
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  toggleSidebarMenu,
} from '@app/store/reducers/ui';
import {
  NAVBAR_DARK_VARIANTS,
  NAVBAR_LIGHT_VARIANTS,
  SIDEBAR_DARK_SKINS,
  SIDEBAR_LIGHT_SKINS,
} from '@app/utils/themes';
import useScrollPosition from '@app/hooks/useScrollPosition';
import {
  Checkbox as RawCheckbox,
  Select as RawSelect,
} from '@profabric/react-components';
import styled from 'styled-components';

export const Select = styled(RawSelect)`
  --pf-width: 100%;
  --pf-display: block;
`;

export const Checkbox = styled(RawCheckbox)`
  --pf-display: block;
`;

export const FormItem = styled.div`
  display: flex;
  align-items: center;
`;

export const FormLabel = styled.label`
  margin: 0;
  padding: 0;
  padding-left: 8px;
`;

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
        overflowY: 'scroll',
      }}
    >
      <h5>Customize AdminLTE</h5>
      <hr className="mb-2" />

      <div style={{ padding: '8px 0' }}>
        <div className="mb-4">
          <FormItem>
            <Checkbox checked={darkMode} onChange={handleDarkModeChange} />
            <FormLabel>Dark mode</FormLabel>
          </FormItem>
          <FormItem>
            <Checkbox
              checked={layoutBoxed}
              onChange={handleLayoutBoxedChange}
            />
            <FormLabel>Boxed (Broken when header or footer is fixed)</FormLabel>
          </FormItem>
        </div>

        <h6>Header Options</h6>

        <div className="mb-4">
          <FormItem>
            <Checkbox
              checked={headerFixed}
              onChange={handleHeaderFixedChange}
            />
            <FormLabel>Fixed</FormLabel>
          </FormItem>
          <FormItem>
            <Checkbox
              checked={headerBorder}
              onChange={handleHeaderBorderChange}
            />
            <FormLabel> No Border</FormLabel>
          </FormItem>
        </div>

        <h6>Sidebar Options</h6>

        <div className="mb-4">
          <FormItem>
            <Checkbox
              checked={menuSidebarCollapsed}
              onChange={handleMenuSidebarCollapsed}
            />
            <FormLabel>Collapse</FormLabel>
          </FormItem>
          <FormItem>
            <Checkbox
              checked={layoutFixed}
              onChange={handleLayoutFixedChange}
            />
            <FormLabel>Fixed</FormLabel>
          </FormItem>
          <FormItem>
            <Checkbox
              checked={menuItemFlat}
              onChange={handleMenuItemFlatChange}
            />
            <FormLabel>Nav Flat Style</FormLabel>
          </FormItem>
          <FormItem>
            <Checkbox
              checked={menuChildIndent}
              onChange={handleMenuChildIndentChange}
            />
            <FormLabel>Nav Child Indent</FormLabel>
          </FormItem>
        </div>

        <h6>Footer Options</h6>

        <div className="mb-4">
          <FormItem>
            <Checkbox
              checked={footerFixed}
              onChange={handleFooterFixedChange}
            ></Checkbox>
            <FormLabel>Fixed</FormLabel>
          </FormItem>
        </div>

        <Select
          className="mt-3"
          value={navbarVariant}
          // label="Light Navbar Variants"
          // type="custom"
          options={NAVBAR_LIGHT_VARIANTS}
          onChange={(e: any) => onNavbarVariantChange(e.target.value)}
        />
        <Select
          className="mt-3"
          // label="Dark Navbar Variants"
          // type="custom"
          value={navbarVariant}
          options={NAVBAR_DARK_VARIANTS}
          onChange={(e: any) => onNavbarVariantChange(e.target.value)}
        />
        <Select
          className="mt-3"
          // label="Accent Color Variants"
          // type="custom"
          options={[]}
          disabled
        />
        <Select
          className="mt-3"
          // label="Light Sidebar Variants"
          // type="custom"
          value={sidebarSkin}
          options={SIDEBAR_LIGHT_SKINS}
          onChange={(e: any) => onSidebarSkinChange(e.target.value)}
        />
        <Select
          className="mt-3"
          // label="Dark Sidebar Variants"
          // type="custom"
          value={sidebarSkin}
          options={SIDEBAR_DARK_SKINS}
          onChange={(e: any) => onSidebarSkinChange(e.target.value)}
        />
        <Select
          className="mt-3"
          // label="Brand Logo Variants"
          // type="custom"
          options={[]}
          disabled
        />
      </div>
    </aside>
  );
};

export default ControlSidebar;
