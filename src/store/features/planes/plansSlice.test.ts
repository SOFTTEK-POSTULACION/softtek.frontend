import { describe, test, expect } from 'vitest';
import plansReducer, { setSelectedPlanOption, setSelectedPlan } from './planesSlice';
import type { IPlansState } from './interfaces/IPlanesSlices.interface';

describe('Pruebas en plansSlice', () => {

    const initialState: IPlansState = {
        aList: [],
        sSelectedOption: null,
        oSelectedPlan: null,
        bLoading: false,
        sError: null,
    };

    test('debe regresar el estado inicial', () => {
        const state = plansReducer(undefined, { type: 'unknown' });
        expect(state.sSelectedOption).toBe('paraMi');
        expect(state.oSelectedPlan).toBe(null);
    });

    test('debe cambiar la opción seleccionada con setSelectedPlanOption', () => {
        const newState = plansReducer(initialState, setSelectedPlanOption('paraAlguienMas'));

        expect(newState.sSelectedOption).toBe('paraAlguienMas');
        expect(newState.aList).toEqual(initialState.aList);
    });

    test('debe establecer el plan seleccionado con setSelectedPlan', () => {
        const planSeleccionado = {
            sName: 'Plan en Casa',
            nPrice: 39,
            aDescription: ['Descripción 1'],
            nAge: 60
        };

        const newState = plansReducer(initialState, setSelectedPlan(planSeleccionado));

        expect(newState.oSelectedPlan).toEqual(planSeleccionado);
        expect(newState.oSelectedPlan?.sName).toBe('Plan en Casa');
    });

});