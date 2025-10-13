import type { SelectChangeEvent } from "@mui/material";
import type { FormEvent } from "react";

export interface ISeguroSaludFormProps {
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSelectChange: (event: SelectChangeEvent) => void;
    formData: {
        sTipoDocumento: string;
        sDocumento: string;
        sCelular: string;
        bPoliticaPriv: boolean;
        bPoliticaCom: boolean;
    };
    errors: { [key: string]: string };
}