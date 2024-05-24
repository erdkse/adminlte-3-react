import { IUser } from '@app/types/user';
import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  currentUser?: IUser | null;
}

const initialState: AuthState = {
  currentUser: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser: (state: any, { payload }: any) => {
      state.currentUser = payload;
    },
  },
});

export const { setCurrentUser } = authSlice.actions;

export default authSlice.reducer;
