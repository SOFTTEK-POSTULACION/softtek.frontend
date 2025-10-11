import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../../../../store/store';

import { PlanesView } from './components/PlanesView';

interface Plan {
    name: string;
    price: number;
    description: string[];
}

export const PlanesPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    // --- CONEXIÓN CON REDUX ---
    // Descomenta estas líneas cuando crees tus slices para obtener datos reales del store
    // const { data: userData } = useSelector((state: RootState) => state.user);
    // const { list: plansData, selectedOption: planOption } = useSelector((state: RootState) => state.plans);
    
    // --- DATOS DE EJEMPLO (mientras no conectas Redux) ---
    const userName = "Bruno"; // Esto vendrá de: userData?.name || ''
    const plans: Plan[] = [
        { name: 'Plan Básico', price: 20, description: ['Cobertura esencial', 'Acceso a red médica'] },
        { name: 'Plan Avanzado', price: 40, description: ['Todo en básico', 'Chequeos anuales'] },
        { name: 'Plan Premium', price: 60, description: ['Todo en avanzado', 'Cobertura internacional'] },
        { name: 'Plan Premium2', price: 60, description: ['Todo en avanzado', 'Cobertura internacional'] },
    ];
    const selectedOption = 'paraMi'; // Esto vendrá de: planOption

    // Efecto para cargar datos iniciales (ej: datos del usuario)
    useEffect(() => {
        // Aquí llamarás a la API del usuario la primera vez que la página cargue
        // dispatch(fetchUser());
    }, [dispatch]);

    // --- MANEJADORES DE EVENTOS ---
    const handleGoBack = () => {
        navigate(-1); // Navega a la página anterior
    };

    const handleSelectOption = (option: string) => {
        console.log('Opción seleccionada:', option);
        // Cuando el usuario elija "Para mí" o "Para alguien más",
        // despacharías acciones para guardar esa opción y buscar los planes.
        // dispatch(setSelectedPlanOption(option));
        // dispatch(fetchPlans(option));
    };

    const handleSelectPlan = (plan: Plan) => {
        console.log('Plan seleccionado:', plan);
        // Cuando el usuario elija un plan, lo guardarías en el store
        // y lo llevarías a la página de resumen.
        // dispatch(selectPlan(plan));
        navigate('/resumen');
    };

    return (
        <PlanesView
            userName={userName}
            plans={plans}
            selectedOption={selectedOption}
            onGoBack={handleGoBack}
            onSelectOption={handleSelectOption}
            onSelectPlan={handleSelectPlan}
        />
    );
    
    
}
