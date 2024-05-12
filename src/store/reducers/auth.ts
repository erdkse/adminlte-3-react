import { IUser } from '@app/types/user';
import { createSlice } from '@reduxjs/toolkit';
import { User } from 'oidc-client-ts';

export interface AuthState {
  authentication?: User;
  currentUser?: IUser | null;
}

const initialState: AuthState = {
  authentication: undefined,
  currentUser: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthentication: (state: any, { payload }: any) => {
      state.authentication = payload;
    },
    setCurrentUser: (state: any, { payload }: any) => {
      state.currentUser = payload;
    },
  },
});

export const { setAuthentication, setCurrentUser } = authSlice.actions;

export default authSlice.reducer;
