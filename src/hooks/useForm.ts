import type { SelectChangeEvent } from "@mui/material";
import { useState, type ChangeEvent } from "react";


export const useForm = <T>(initState: T, fieldLabels: { [key in keyof T]?: string } = {}) => {

    const [formData, setFormData] = useState(initState);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {

        const { name, type, checked, value } = event.target;

        setFormData(prev => ({
            ...prev
            , [name]: type === "checkbox" ? checked : value
        }));
    }

    // onChange para select
    const onSelectChange = (event: SelectChangeEvent) => {
        setFormData(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    };

    const validateFormData = () => {
        const validationErrors: { [key: string]: string } = {};

        // Recorre las claves de formData para validar dinámicamente
        for (const key in formData) {
            if (key) {
                const value = formData[key as keyof T];
                const friendlyName = fieldLabels[key as keyof T] || key;
                // Validaciones personalizadas
                if (typeof value === "string" && !value.trim()) {
                    validationErrors[key] = `El campo ${friendlyName} es obligatorio`;
                } else if (typeof value === "boolean" && !value) {
                    validationErrors[key] = `Debes aceptar la ${friendlyName}`;
                }
            }
        }

        if (!formData['bPoliticaPriv' as keyof T]) {
            validationErrors['bPoliticaPriv'] = 'Debes aceptar la Política de Privacidad';
        }
        if (!formData['bPoliticaCom' as keyof T]) {
            validationErrors['bPoliticaCom'] = 'Debes aceptar la Política de Comunicaciones Comerciales';
        }

        setErrors(validationErrors);
        return validationErrors;
    };

    return {
        ...formData
        //PROPERTIES
        , formData
        , errors

        //METHODS
        , onChange
        , onSelectChange
        , validateFormData
    }
}
