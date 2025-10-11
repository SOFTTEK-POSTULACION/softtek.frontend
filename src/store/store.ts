import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './admin/user';
// import { authSlice } from './admin/auth';

export const store = configureStore({
    reducer: {
        // auth: authSlice.reducer,
        user: userSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;