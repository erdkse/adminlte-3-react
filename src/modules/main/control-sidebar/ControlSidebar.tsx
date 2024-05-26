import { useCallback, useEffect } from 'react';
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
  toggleTopNavigation,
} from '@app/store/reducers/ui';
import {
  NAVBAR_DARK_VARIANTS,
  NAVBAR_LIGHT_VARIANTS,
  SIDEBAR_DARK_SKINS,
  SIDEBAR_LIGHT_SKINS,
} from '@app/utils/themes';
import useScrollPosition from '@app/hooks/useScrollPosition';
import styled from 'styled-components';
import { Checkbox, Select } from '@app/styles/common';
import { useAppDispatch, useAppSelector } from '@app/store/store';
import { addWindowClass, removeWindowClass } from '@app/utils/helpers';

export const HorizontalFormItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  label {
    margin: 0;
    padding-left: 8px;
    font-weight: 500 !important;
  }
`;

export const VerticalFormItem = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  margin-bottom: 1rem;

  label {
    margin: 0;
    padding: 0;
    font-weight: 500 !important;
  }
`;

const ControlSidebar = () => {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.ui.darkMode);
  const headerBorder = useAppSelector((state) => state.ui.headerBorder);
  const headerFixed = useAppSelector((state) => state.ui.headerFixed);
  const footerFixed = useAppSelector((state) => state.ui.footerFixed);
  const layoutFixed = useAppSelector((state) => state.ui.layoutFixed);
  const navbarVariant = useAppSelector((state) => state.ui.navbarVariant);
  const sidebarSkin = useAppSelector((state) => state.ui.sidebarSkin);
  const layoutBoxed = useAppSelector((state) => state.ui.layoutBoxed);
  const topNavigation = useAppSelector((state) => state.ui.topNavigation);
  const menuItemFlat = useAppSelector((state) => state.ui.menuItemFlat);
  const menuChildIndent = useAppSelector((state) => state.ui.menuChildIndent);
  const menuSidebarCollapsed = useAppSelector(
    (state) => state.ui.menuSidebarCollapsed
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

  const handleTopNavigationChange = () => {
    dispatch(toggleTopNavigation());
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

  useEffect(() => {
    if (footerFixed) {
      addWindowClass('layout-footer-fixed');
    } else {
      removeWindowClass('layout-footer-fixed');
    }
  }, [footerFixed]);

  useEffect(() => {
    if (headerFixed) {
      addWindowClass('layout-navbar-fixed');
    } else {
      removeWindowClass('layout-navbar-fixed');
    }
  }, [headerFixed]);

  useEffect(() => {
    if (layoutBoxed) {
      addWindowClass('layout-boxed');
    } else {
      removeWindowClass('layout-boxed');
    }
  }, [layoutBoxed]);

  useEffect(() => {
    if (layoutFixed) {
      addWindowClass('layout-fixed');
    } else {
      removeWindowClass('layout-fixed');
    }
  }, [layoutFixed]);

  useEffect(() => {
    if (darkMode) {
      addWindowClass('dark-mode');
    } else {
      removeWindowClass('dark-mode');
    }
  }, [darkMode]);

  return (
    <aside
      className="control-sidebar control-sidebar-dark"
      style={{
        top: 0,
        bottom: footerFixed ? '57px' : '0px',
        padding: `${getContainerPaddingTop()} 16px 16px 16px`,
        overflowY: 'scroll',
        height: '100%',
      }}
    >
      <h5>Customize AdminLTE</h5>
      <hr className="mb-2" />

      <div style={{ padding: '8px 0' }}>
        <div className="mb-4">
          <HorizontalFormItem>
            <Checkbox checked={darkMode} onChange={handleDarkModeChange} />
            <label>Dark mode</label>
          </HorizontalFormItem>
          <HorizontalFormItem>
            <Checkbox
              checked={layoutBoxed}
              onChange={handleLayoutBoxedChange}
            />
            <label>Boxed</label>
          </HorizontalFormItem>
          <HorizontalFormItem>
            <Checkbox
              checked={topNavigation}
              onChange={handleTopNavigationChange}
            />
            <label>Top Navigation</label>
          </HorizontalFormItem>
        </div>

        <h6>Header Options</h6>

        <div className="mb-4">
          <HorizontalFormItem>
            <Checkbox
              disabled={layoutBoxed}
              checked={headerFixed}
              onChange={handleHeaderFixedChange}
            />
            <label>Fixed</label>
          </HorizontalFormItem>
          <HorizontalFormItem>
            <Checkbox
              checked={headerBorder}
              onChange={handleHeaderBorderChange}
            />
            <label>No Border</label>
          </HorizontalFormItem>
        </div>

        <h6>Sidebar Options</h6>

        <div className="mb-4">
          <HorizontalFormItem>
            <Checkbox
              disabled={topNavigation}
              checked={menuSidebarCollapsed}
              onChange={handleMenuSidebarCollapsed}
            />
            <label>Collapse</label>
          </HorizontalFormItem>
          <HorizontalFormItem>
            <Checkbox
              disabled={layoutBoxed}
              checked={layoutFixed}
              onChange={handleLayoutFixedChange}
            />
            <label>Fixed</label>
          </HorizontalFormItem>
          <HorizontalFormItem>
            <Checkbox
              disabled={topNavigation}
              checked={menuItemFlat}
              onChange={handleMenuItemFlatChange}
            />
            <label>Nav Flat Style</label>
          </HorizontalFormItem>
          <HorizontalFormItem>
            <Checkbox
              disabled={topNavigation}
              checked={menuChildIndent}
              onChange={handleMenuChildIndentChange}
            />
            <label>Nav Child Indent</label>
          </HorizontalFormItem>
        </div>

        <h6>Footer Options</h6>

        <div className="mb-4">
          <HorizontalFormItem>
            <Checkbox
              disabled={layoutBoxed}
              checked={footerFixed}
              onChange={handleFooterFixedChange}
            />
            <label>Fixed</label>
          </HorizontalFormItem>
        </div>

        <VerticalFormItem>
          <label>Light Navbar Variants</label>
          <Select
            className="mt-1"
            value={navbarVariant}
            options={NAVBAR_LIGHT_VARIANTS}
            onChange={(e: any) => onNavbarVariantChange(e?.target?.value)}
          />
        </VerticalFormItem>
        <VerticalFormItem>
          <label>Dark Navbar Variants</label>
          <Select
            className="mt-1"
            value={navbarVariant}
            options={NAVBAR_DARK_VARIANTS}
            onChange={(e: any) => onNavbarVariantChange(e.target.value)}
          />
        </VerticalFormItem>
        <VerticalFormItem>
          <label>Accent Color Variants</label>
          <Select className="mt-1" options={[]} disabled />
        </VerticalFormItem>
        <VerticalFormItem>
          <label>Light Sidebar Variants</label>
          <Select
            className="mt-1"
            value={sidebarSkin}
            options={SIDEBAR_LIGHT_SKINS}
            onChange={(e: any) => onSidebarSkinChange(e.target.value)}
          />
        </VerticalFormItem>
        <VerticalFormItem>
          <label>Dark Sidebar Variants</label>
          <Select
            className="mt-1"
            value={sidebarSkin}
            options={SIDEBAR_DARK_SKINS}
            onChange={(e: any) => onSidebarSkinChange(e.target.value)}
          />
        </VerticalFormItem>
        <VerticalFormItem>
          <label>Brand Logo Variants</label>
          <Select className="mt-1" options={[]} disabled />
        </VerticalFormItem>
      </div>
    </aside>
  );
};

export default ControlSidebar;
