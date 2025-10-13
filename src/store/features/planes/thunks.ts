import axios from 'axios';
import type { AppDispatch } from '../../store';
import { startLoadingPlans, setPlans, setPlansError } from './planesSlice';
import type { IApiResponse } from '../../../core/interfaces/IApiResponse.interface';
import type { IPlan } from './interfaces/IPlanesSlices.interface';
import type { IApiPlanResponse } from './interfaces/IApiPlanResponse.interface';

const fetchApiPlans = async (): Promise<IApiResponse<IPlan[]>> => {
    const response = await axios.get<{ list: IApiPlanResponse[] }>('https://rimac-front-end-challenge.netlify.app/api/plans.json');
    return {
        bSuccess: true,
        vMessage: "Listado obtenido satisfactoriamente",
        aData: response.data.list.map(plan => ({
            sName: plan.name,
            nPrice: plan.price,
            aDescription: plan.description,
            nAge: plan.age
        })),
        iTotalRecords: response.data.list.length
    };
};

export const getPlans = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(startLoadingPlans());
        
        try {
            const oApiResponse = await fetchApiPlans();
            if (oApiResponse.bSuccess) {
                dispatch(setPlans(oApiResponse.aData));
            } else {
                throw new Error(oApiResponse.vMessage);
            }

        } catch (error) {
            const sErrorMessage = error instanceof Error ? error.message : 'Error desconocido';
            dispatch(setPlansError(sErrorMessage));
            console.error("Error al obtener los planes:", sErrorMessage);
        }
    };
};