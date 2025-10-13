import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../../../../store/store';

import { PlanesView } from './components/PlanesView';
import { getPlans, setSelectedPlan, setSelectedPlanOption } from '../../../../../store/features/planes';
import type { IPlan } from '../../../../../store/features/planes/interfaces/IPlanesSlices.interface';
import { PasosCotizacion } from '../../components/PasosCotizacion';
import { getUser } from '../../../../../store/features/user/thunks';
import { calculateAge } from '../../components/calculateAge';


export const PlanesPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    // ONEXIÓN CON REDUX ---
    const { aList: plansData, sSelectedOption, bLoading, sError } = useSelector((state: RootState) => state.planes);

    const { oQuoteData, oUser } = useSelector((state: RootState) => state.user);

    // EFECTO PARA CARGAR DATOS ---
    useEffect(() => {
        if (!oQuoteData) {
            navigate('/');
        }
    }, [oQuoteData, navigate]);

    // EFECTO PARA CARGAR DATOS ---
    useEffect(() => {
        if (!oUser) {
            dispatch(getUser());
        }

        if (sSelectedOption) {
            dispatch(getPlans());
        }
    }, [sSelectedOption, dispatch]);


    const userAge = useMemo(() => {
        return oUser ? calculateAge(oUser.sBirthDay) : 0;
    }, [oUser]);

    
    const filteredPlans = useMemo(() => {
        if (!userAge || !plansData) return [];
        return plansData.filter(plan => userAge <= plan.nAge);
    }, [plansData, userAge]);

    // MANEJADORES DE EVENTOS ---
    const handleGoBack = () => navigate(-1);

    const handleSelectOption = (option: string) => {
        dispatch(setSelectedPlanOption(option));
    };

    const handleSelectPlan = (plan: IPlan) => {
        if (oQuoteData) {
            const planParaGuardar = { ...plan };
            if (sSelectedOption === 'paraAlguienMas') {
                planParaGuardar.nPrice = plan.nPrice * 0.95;
            }
            dispatch(setSelectedPlan(planParaGuardar));            
            navigate('/resumen');
        } else {
            navigate('/');
        }
    };

    if (!oQuoteData) {
        return null;
    }

    return (
        <>
            <PasosCotizacion activeStep={1} />
            <PlanesView
                userName={oUser?.sName || "Cliente"}
                plans={filteredPlans}
                selectedOption={sSelectedOption}
                onGoBack={handleGoBack}
                onSelectOption={handleSelectOption}
                onSelectPlan={handleSelectPlan}
                isLoading={bLoading}
                error={sError}
            />

        </>
    );
}