import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import { authSlice } from '@app/store/reducers/auth';
import { uiSlice } from '@app/store/reducers/ui';
import { createLogger } from 'redux-logger';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(createLogger()),
});

export default store;

export const useAppDispatch = () => useDispatch<ReduxDispatch>();
export const useAppSelector: TypedUseSelectorHook<ReduxState> = useSelector;

/* Types */
export type ReduxStore = typeof store;
export type ReduxState = ReturnType<typeof store.getState>;
export type ReduxDispatch = typeof store.dispatch;
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action
>;
