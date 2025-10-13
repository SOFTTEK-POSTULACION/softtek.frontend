import { render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { PlanesPage } from './PlanesPage';
import plansReducer from '../../../../../store/features/planes/planesSlice';
import userReducer from '../../../../../store/features/user/userSlice';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async (importOriginal) => {
    const actual = await importOriginal<typeof import('react-router-dom')>();
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

vi.mock('./components/PlanesView', () => ({
    PlanesView: ({ plans, userName }: { plans: any[], userName: string }) => (
        <div data-testid="mock-planes-view">
            <h1>{userName}</h1>
            <p>{plans.length} planes mostrados</p>
        </div>
    )
}));
vi.mock('../../components/PasosCotizacion', () => ({
    PasosCotizacion: () => <div data-testid="mock-pasos-cotizacion">Pasos</div>
}));


vi.mock('../../../../../store/features/planes/thunks', () => ({
    getPlans: vi.fn(() => () => {}),
}));
vi.mock('../../../../../store/features/user/thunks', () => ({
    getUser: vi.fn(() => () => {}),
}));

describe('Pruebas en <PlanesPage />', () => {

    test('debe redirigir a / si no hay datos de cotización (oQuoteData)', () => {
        const preloadedState = {
            user: {
                oQuoteData: null,
                oUser: null,
                bLoading: false,
                sError: null
            }
        };

        const store = configureStore({
            reducer: {
                user: userReducer,
                planes: plansReducer
            },
            preloadedState,
        });

        render(
            <Provider store={store}>
                <BrowserRouter>
                    <PlanesPage />
                </BrowserRouter>
            </Provider>
        );

        expect(mockNavigate).toHaveBeenCalledWith('/');
    });

    test('debe filtrar los planes según la edad del usuario', () => {
        const preloadedState = {
            user: {
                oQuoteData: { sDocumento: '123', sCelular: '123', sTipoDocumento: '1' },
                oUser: { sName: 'Juan', sLastName: 'Perez', sBirthDay: '1995-10-10' },
                bLoading: false,
                sError: null
            },
            planes: {
                aList: [
                    { sName: 'Plan Joven', nPrice: 20, nAge: 25, aDescription: [] },
                    { sName: 'Plan Adulto', nPrice: 50, nAge: 60, aDescription: [] },
                    { sName: 'Plan Senior', nPrice: 80, nAge: 70, aDescription: [] },
                ],
                sSelectedOption: 'paraMi',
                oSelectedPlan: null,
                bLoading: false,
                sError: null
            }
        };
        const store = configureStore({
            reducer: { user: userReducer, planes: plansReducer },
            preloadedState,
        });

        render(
            <Provider store={store}><BrowserRouter><PlanesPage /></BrowserRouter></Provider>
        );

        expect(screen.getByText('2 planes mostrados')).toBeInTheDocument();
    });

});