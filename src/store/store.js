import {configureStore} from '@reduxjs/toolkit';

import {authSlice} from '@app/store/reducers/auth';
import {uiSlice} from '@app/store/reducers/ui';

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        ui: uiSlice.reducer
    }
});

export default store;
