import { createSlice } from '@reduxjs/toolkit';
import { calculateWindowSize } from '@app/utils/helpers';
import {
  NAVBAR_DARK_VARIANTS,
  NAVBAR_LIGHT_VARIANTS,
  SIDEBAR_DARK_SKINS,
  SIDEBAR_LIGHT_SKINS,
} from '@app/utils/themes';

export interface UiState {
  screenSize: string;
  menuSidebarCollapsed: boolean;
  controlSidebarCollapsed: boolean;
  darkMode: boolean;
  headerBorder: boolean;
  headerFixed: boolean;
  footerFixed: boolean;
  layoutBoxed: boolean;
  layoutFixed: boolean;
  menuItemFlat: boolean;
  menuChildIndent: boolean;
  navbarVariant: string;
  sidebarSkin: string;
  topNavigation: boolean;
}

const initialState: UiState = {
  screenSize: calculateWindowSize(window.innerWidth),
  darkMode: false,
  navbarVariant: 'navbar-light',
  sidebarSkin: 'sidebar-dark-primary',
  menuSidebarCollapsed: false,
  controlSidebarCollapsed: true,
  headerBorder: false,
  headerFixed: false,
  footerFixed: false,
  layoutBoxed: false,
  menuItemFlat: false,
  menuChildIndent: false,
  layoutFixed: false,
  topNavigation: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTopNavigation: (state) => {
      state.topNavigation = !state.topNavigation;
    },
    toggleSidebarMenu: (state) => {
      state.menuSidebarCollapsed = !state.menuSidebarCollapsed;
    },
    setSidebarMenuToggle: (state, { payload }) => {
      state.menuSidebarCollapsed = payload;
    },
    toggleControlSidebar: (state) => {
      state.controlSidebarCollapsed = !state.controlSidebarCollapsed;
    },
    toggleHeaderBorder: (state) => {
      state.headerBorder = !state.headerBorder;
    },
    toggleHeaderFixed: (state) => {
      state.headerFixed = !state.headerFixed;
    },
    toggleFooterFixed: (state) => {
      state.footerFixed = !state.footerFixed;
    },
    toggleLayoutBoxed: (state) => {
      if (!state.layoutBoxed) {
        state.headerFixed = false;
        state.footerFixed = false;
        state.layoutFixed = false;
      }
      state.layoutBoxed = !state.layoutBoxed;
    },
    toggleLayoutFixed: (state) => {
      state.layoutFixed = !state.layoutFixed;
    },
    toggleMenuItemFlat: (state) => {
      state.menuItemFlat = !state.menuItemFlat;
    },
    toggleMenuChildIndent: (state) => {
      state.menuChildIndent = !state.menuChildIndent;
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      if (state.darkMode) {
        state.navbarVariant = NAVBAR_DARK_VARIANTS[0].value;
        state.sidebarSkin = SIDEBAR_DARK_SKINS[0].value;
      } else {
        state.navbarVariant = NAVBAR_LIGHT_VARIANTS[0].value;
        state.sidebarSkin = SIDEBAR_LIGHT_SKINS[0].value;
      }
    },
    setNavbarVariant: (state, { payload }) => {
      if (state.darkMode) {
        state.navbarVariant = payload || NAVBAR_DARK_VARIANTS[0].value;
      } else {
        state.navbarVariant = payload || NAVBAR_LIGHT_VARIANTS[0].value;
      }
    },
    setSidebarSkin: (state, { payload }) => {
      if (state.darkMode) {
        state.sidebarSkin = payload || SIDEBAR_DARK_SKINS[0].value;
      } else {
        state.sidebarSkin = payload || SIDEBAR_LIGHT_SKINS[0].value;
      }
    },
    setWindowSize: (state, { payload }) => {
      state.screenSize = payload;
    },
  },
});

export const {
  toggleSidebarMenu,
  setWindowSize,
  toggleControlSidebar,
  toggleDarkMode,
  setNavbarVariant,
  setSidebarSkin,
  toggleHeaderBorder,
  toggleHeaderFixed,
  toggleFooterFixed,
  toggleLayoutBoxed,
  toggleMenuItemFlat,
  toggleMenuChildIndent,
  toggleLayoutFixed,
  setSidebarMenuToggle,
  toggleTopNavigation,
} = uiSlice.actions;

export default uiSlice.reducer;
