import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { PasosCotizacion } from '../../../components/PasosCotizacion';

describe('Pruebas en el componente <PasosCotizacion />', () => {

    test('debe renderizar el texto "Planes y Coberturas"', () => {
        render(<PasosCotizacion activeStep={1} />);

        expect(screen.getByText('Planes y Coberturas')).toBeInTheDocument();
    });

    test('debe tener la clase "active" en el primer paso si activeStep es 1', () => {
        render(<PasosCotizacion activeStep={1} />);

        const paso1 = screen.getByText(/Planes y Coberturas/i).closest('li');
        const paso2 = screen.getByText(/Resumen/i).closest('li');

        expect(paso1?.classList.contains('active')).toBe(true);
        expect(paso2?.classList.contains('active')).toBe(false);
    });

    test('debe tener la clase "active" en el segundo paso si activeStep es 2', () => {

        render(<PasosCotizacion activeStep={2} />);

        const paso1 = screen.getByText(/Planes y Coberturas/i).closest('li');
        const paso2 = screen.getByText(/Resumen/i).closest('li');

        expect(paso1?.classList.contains('active')).toBe(false);
        expect(paso2?.classList.contains('active')).toBe(true);
    });

});