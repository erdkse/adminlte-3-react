import {createSlice} from '@reduxjs/toolkit';
import {calculateWindowSize} from '@app/utils/helpers';

export interface UiState {
    screenSize: string;
    menuSidebarCollapsed: boolean;
    controlSidebarCollapsed: boolean;
    darkMode: boolean;
    navbarVariant: string;
    sidebarSkin: string;
}

const initialState: UiState = {
    screenSize: calculateWindowSize(window.innerWidth),
    darkMode: false,
    navbarVariant: 'navbar-light',
    sidebarSkin: 'sidebar-dark-primary',
    menuSidebarCollapsed: false,
    controlSidebarCollapsed: true
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleSidebarMenu: (state) => {
            state.menuSidebarCollapsed = !state.menuSidebarCollapsed;
        },
        setWindowSize: (state, {payload}) => {
            state.screenSize = payload;
        }
    }
});

export const {toggleSidebarMenu, setWindowSize} = uiSlice.actions;

export default uiSlice.reducer;
