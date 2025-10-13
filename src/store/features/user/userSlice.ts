import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IQuoteData, IUser, IUserState } from './interfaces/IUserSlice.interface';

const initialState: IUserState = {
    oUser: null,
    oQuoteData: null,
    bLoading: false,
    sError: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        startLoadingUser: (state) => {
            state.bLoading = true;
        },
        setUser: (state, action: PayloadAction<IUser>) => {
            state.bLoading = false;
            state.oUser = action.payload;
        },
        setUserError: (state, action: PayloadAction<string>) => {
            state.bLoading = false;
            state.sError = action.payload;
        },
        setQuoteData: (state, action: PayloadAction<IQuoteData>) => {
            state.oQuoteData = action.payload;
        }
    }
});

export const { startLoadingUser, setUser, setUserError, setQuoteData } = userSlice.actions;