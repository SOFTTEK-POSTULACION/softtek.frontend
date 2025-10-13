import { configureStore } from '@reduxjs/toolkit';
import { planesSlice } from './features/planes/planesSlice';
import { userSlice } from './features/user';

export const store = configureStore({
    reducer: {
        planes: planesSlice.reducer,
        user: userSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;