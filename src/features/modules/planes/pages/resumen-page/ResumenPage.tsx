import { useNavigate } from 'react-router-dom';

//MATERIAL UI
import { Box, Button } from '@mui/material';

//CSS
import '../../scss/resumen.scss';

//FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../../../store';
import { useEffect } from 'react';
import { PasosCotizacion } from '../../components/PasosCotizacion';
import { ResumenSkeleton } from './components/ResumenSkeleton';

export const ResumenPage = () => {

    const navigate = useNavigate();

    const { oSelectedPlan } = useSelector((state: RootState) => state.planes);
    const { oQuoteData, oUser, bLoading: bUserLoading } = useSelector((state: RootState) => state.user);
    const sUserName = oUser ? `${oUser.sName} ${oUser.sLastName}` : "Cliente";
    const isLoading = !oSelectedPlan || !oQuoteData || bUserLoading;
    
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isLoading && (!oSelectedPlan || !oQuoteData)) {
                navigate('/planes');
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [isLoading, oSelectedPlan, oQuoteData, navigate]);

    return (
        <>
            <PasosCotizacion activeStep={2} />

            <section className="sectResumen">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <Box sx={{ textAlign: 'left', padding: '2rem 0', margin: 'auto' }}>
                                <Button onClick={() => navigate(-1)} sx={{ color: '#4a4fff', fontSize: '1rem', mb: 2 }} className="btnBack">
                                    <FontAwesomeIcon icon={faCircleChevronLeft} /> Volver
                                </Button>
                            </Box>

                            {isLoading ? (
                                <ResumenSkeleton />
                            ) : (
                                <div className="boxResumen">
                                    <div className="boxHead">
                                        <h2>Resumen del seguro</h2>
                                    </div>
                                    <div className="boxBody">
                                        <p>PRECIOS CALCULADOS PARA:</p>
                                        <h3><FontAwesomeIcon icon={faUserGroup} className="iconHead" /> {sUserName}</h3>
                                        <hr />
                                        <ul className="listDetail">
                                            <li>
                                                <h5><b>Responsable de pago</b></h5>
                                                <p>{oQuoteData.sTipoDocumento === '1' ? 'DNI' : 'CE'}: {oQuoteData.sDocumento}</p>
                                                <p>Celular: {oQuoteData.sCelular}</p>
                                            </li>
                                            <li>
                                                <h5><b>Plan Elegido</b></h5>
                                                <p>{oSelectedPlan.sName}</p>
                                                <p>Costo del Plan: ${oSelectedPlan.nPrice.toFixed(2)} al mes</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
