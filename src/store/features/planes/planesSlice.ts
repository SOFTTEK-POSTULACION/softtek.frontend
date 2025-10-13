
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IPlan, IPlansState } from './interfaces/IPlanesSlices.interface';

const initialState: IPlansState = {
    aList: [],
    sSelectedOption: null,
    oSelectedPlan: null,
    bLoading: false,
    sError: null,
};

export const planesSlice = createSlice({
    name: 'plans',
    initialState,
    reducers: {
        startLoadingPlans: (state) => {
            state.bLoading = true;
            state.sError = null;
        },
        setPlans: (state, action: PayloadAction<IPlan[]>) => {
            state.bLoading = false;
            state.aList = action.payload;
        },
        setPlansError: (state, action: PayloadAction<string>) => {
            state.bLoading = false;
            state.sError = action.payload;
        },
        setSelectedPlanOption: (state, action: PayloadAction<string>) => {
            state.sSelectedOption = action.payload;
        },
        setSelectedPlan: (state, action: PayloadAction<IPlan>) => {
            state.oSelectedPlan = action.payload;
        }
    }
});

export const { startLoadingPlans, setPlans, setPlansError, setSelectedPlanOption, setSelectedPlan  } = planesSlice.actions;

export default planesSlice.reducer;