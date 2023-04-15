import {GoogleProvider} from '@app/utils/oidc-providers';
import {createSlice} from '@reduxjs/toolkit';

export interface AuthState {
  authentication: {
    access_token: string;
    id_token: string;
    refresh_token: string;
    profile: any;
  } | null;
}

const initialState: AuthState = {
  authentication: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthentication: (state: any, {payload}: any) => {
      state.authentication = payload;
    }
  }
});

export const {setAuthentication} = authSlice.actions;

export default authSlice.reducer;
