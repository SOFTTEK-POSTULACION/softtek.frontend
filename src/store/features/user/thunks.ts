import axios from 'axios';
import type { AppDispatch } from '../../store';
import type { IApiResponse } from '../../../core/interfaces/IApiResponse.interface';
import { setUser, setUserError, startLoadingUser } from './userSlice';
import type { IApiUserResponse } from './interfaces/IUserSlice.interface';

const fetchApiUser = async (): Promise<IApiResponse<IApiUserResponse>> => {
    const response = await axios.get<IApiUserResponse>('https://rimac-front-end-challenge.netlify.app/api/user.json');
    
    return {
        bSuccess: true,
        vMessage: "Usuario obtenido satisfactoriamente",
        aData: response.data,
        iTotalRecords: 1
    };
};

export const getUser = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(startLoadingUser());
        try {
            const oApiResponse = await fetchApiUser();
            if (oApiResponse.bSuccess) {
                const userData = {
                    sName: oApiResponse.aData.name,
                    sLastName: oApiResponse.aData.lastName,
                    sBirthDay: oApiResponse.aData.birthDay,
                };
                dispatch(setUser(userData));
            } else {
                throw new Error(oApiResponse.vMessage);
            }
        } catch (error) {
            const sErrorMessage = error instanceof Error ? error.message : 'Error desconocido';
            dispatch(setUserError(sErrorMessage));
        }
    };
};