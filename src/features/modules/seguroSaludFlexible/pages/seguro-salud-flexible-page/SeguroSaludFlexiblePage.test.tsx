import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { SeguroSaludFlexiblePage } from './SeguroSaludFlexiblePage';
import { Provider } from 'react-redux';
import { store } from '../../../../../store';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async (importOriginal) => {
    const actual = await importOriginal<typeof import('react-router-dom')>();
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe('Pruebas en <SeguroSaludFlexiblePage />', () => {

    const renderComponent = () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <SeguroSaludFlexiblePage />
                </BrowserRouter>
            </Provider>
        );
    };

    test('debe mostrar mensajes de error si se intenta enviar el formulario vacío', () => {
        renderComponent();
        
        const submitButton = screen.getByRole('button', { name: /cotiza aquí/i });
        
        fireEvent.click(submitButton);

        expect(screen.getByText('El campo Nro. de Documento es obligatorio')).toBeInTheDocument();
        expect(screen.getByText('El campo Celular es obligatorio')).toBeInTheDocument();
        expect(screen.getByText('Debes aceptar la Política de Comunicaciones Comerciales')).toBeInTheDocument();
    });

    test('debe navegar a /planes si el formulario es válido y se envía', () => {
        renderComponent();

        const docInput = screen.getByLabelText(/nro. de documento/i);
        const cellInput = screen.getByLabelText(/celular/i);
        
        const privacyPolicyCheckbox = screen.getByLabelText(/acepto lo política de privacidad/i);
        const commercialPolicyCheckbox = screen.getByLabelText(/acepto la política comunicaciones comerciales/i);
        
        const submitButton = screen.getByRole('button', { name: /cotiza aquí/i });

        fireEvent.change(docInput, { target: { value: '12345678' } });
        fireEvent.change(cellInput, { target: { value: '987654321' } });
        
        fireEvent.click(privacyPolicyCheckbox);
        fireEvent.click(commercialPolicyCheckbox);
        
        fireEvent.click(submitButton);

        expect(mockNavigate).toHaveBeenCalledWith('/planes');
    });
});