import { renderHook, act } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { useForm } from './useForm';
import type { ChangeEvent } from 'react';

describe('Pruebas en el hook useForm', () => {

    const initialState = {
        sDocumento: '',
        sCelular: '',
        bPoliticaCom: false
    };

    test('debe regresar el estado inicial', () => {
        const { result } = renderHook(() => useForm(initialState));
        expect(result.current.sDocumento).toBe('');
        expect(result.current.sCelular).toBe('');
        expect(result.current.bPoliticaCom).toBe(false);
    });

    test('debe cambiar el valor de un campo de texto', () => {
        const { result } = renderHook(() => useForm(initialState));
        const { onChange } = result.current;

        const mockEvent = {
            target: { name: 'sDocumento', value: '12345678' }
        } as ChangeEvent<HTMLInputElement>;

        act(() => {
            onChange(mockEvent);
        });

        expect(result.current.sDocumento).toBe('12345678');
    });

    test('debe cambiar el valor de un checkbox', () => {
        const { result } = renderHook(() => useForm(initialState));
        const { onChange } = result.current;

        const mockEvent = {
            target: { name: 'bPoliticaCom', checked: true, type: 'checkbox' }
        } as ChangeEvent<HTMLInputElement>;
        
        act(() => {
            onChange(mockEvent);
        });

        expect(result.current.bPoliticaCom).toBe(true);
    });

    test('debe devolver errores si los campos están vacíos', () => {
        const labels = { sDocumento: 'Documento', sCelular: 'Celular' };
        const { result } = renderHook(() => useForm(initialState, labels));

        act(() => {
            result.current.validateFormData();
        });

        expect(result.current.errors.sDocumento).toBe('El campo Documento es obligatorio');
        expect(result.current.errors.sCelular).toBe('El campo Celular es obligatorio');
    });

});