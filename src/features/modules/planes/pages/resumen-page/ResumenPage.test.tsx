import { act, render, screen } from '@testing-library/react';
import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { ResumenPage } from './ResumenPage';
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

describe('Pruebas en <ResumenPage />', () => {

    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    test('debe redirigir a /planes si no hay datos en el store', () => {
        const preloadedStateWithoutData = {
            planes: {
                aList: [],
                sSelectedOption: null,
                bLoading: false,
                sError: null,
                oSelectedPlan: null,
            },
            user: {
                bLoading: false,
                sError: null,
                oQuoteData: null,
                oUser: null,
            }
        };

        const mockStore = configureStore({
            reducer: {
                planes: plansReducer,
                user: userReducer,
            },
            preloadedState: preloadedStateWithoutData,
        });

        render(
            <Provider store={mockStore}>
                <BrowserRouter>
                    <ResumenPage />
                </BrowserRouter>
            </Provider>
        );

        act(() => {
            vi.advanceTimersByTime(500);
        });
        
        expect(mockNavigate).toHaveBeenCalledWith('/planes');
    });

    test('debe mostrar la información del plan y del usuario si existen en el store', () => {
        const preloadedState = {
            planes: {
                aList: [],
                sSelectedOption: 'paraMi',
                bLoading: false,
                sError: null,
                oSelectedPlan: {
                    sName: 'Plan Test',
                    nPrice: 100,
                    aDescription: [],
                    nAge: 99
                }
            },
            user: {
                bLoading: false,
                sError: null,
                oQuoteData: {
                    sTipoDocumento: '1',
                    sDocumento: '87654321',
                    sCelular: '999888777'
                },
                oUser: {
                    sName: 'Juan',
                    sLastName: 'Perez',
                    sBirthDay: '1990-01-01'
                }
            }
        };

        const mockStore = configureStore({
            reducer: {
                planes: plansReducer,
                user: userReducer,
            },
            preloadedState,
        });

        render(
            <Provider store={mockStore}>
                <BrowserRouter>
                    <ResumenPage />
                </BrowserRouter>
            </Provider>
        );

        expect(screen.getByText('Plan Test')).toBeInTheDocument();
        expect(screen.getByText(/Costo del Plan: \$100.00 al mes/i)).toBeInTheDocument();
        expect(screen.getByText(/DNI: 87654321/i)).toBeInTheDocument();
        expect(screen.getByText(/Celular: 999888777/i)).toBeInTheDocument();
        expect(screen.getByText(/Juan Perez/i)).toBeInTheDocument();
    });
});