import { type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

//CSS
import '../../scss/seguroSaludFlexible.scss';

//IMG
// import imgFamily from '../../img/family.png';
import blurOne from '../../img/blur-asset.png';
import blurTwo from '../../img/blur-asset2.png';
import { useForm } from '../../../../../hooks/useForm';
// import { Typography } from '@mui/material';
import { SeguroSaludImgMain } from './components/SeguroSaludImgMain';
import { SeguroSaludForm } from './components/SeguroSaludForm';
import { useDispatch } from 'react-redux';
import { setQuoteData } from '../../../../../store/features/user';

export const SeguroSaludFlexiblePage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formLabels = {
        sDocumento: 'Nro. de Documento',
        sCelular: 'Celular',
        bPoliticaCom: 'Política de Comunicaciones Comerciales'
    };

    const { formData, onChange, onSelectChange, errors, validateFormData } = useForm({
        sTipoDocumento: '1',
        sDocumento: '',
        sCelular: '',
        bPoliticaPriv: false,
        bPoliticaCom: false
    }, formLabels);

    const onSubmit = (event: FormEvent<HTMLElement>) => {
        event.preventDefault();

        // Validar campos
        const errors = validateFormData();
        if (Object.keys(errors).length > 0) {
            console.log("Errores de validación", errors);
            return;
        }

        dispatch(setQuoteData({
            sDocumento: formData.sDocumento,
            sCelular: formData.sCelular,
            sTipoDocumento: formData.sTipoDocumento
        }));

        navigate('/planes');
    }

    return (

        <section className="sectSeguroSaludFlexible">
            <div className="container">
                <div className="row">
                    <SeguroSaludImgMain />
                    <SeguroSaludForm 
                        onSubmit={onSubmit}
                        onChange={onChange}
                        onSelectChange={onSelectChange}
                        formData={formData}
                        errors={errors}
                    />
                    <div className='col-lg-2 col-xl-2'></div>
                </div>
            </div>
            <div className="blurOne"> <img src={blurOne} alt="" width="100%" /></div>
            <div className="blurTwo"> <img src={blurTwo} alt="" width="100%" /></div>
        </section>
    )
}