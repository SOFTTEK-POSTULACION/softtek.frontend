// MATERIAL UI
import { Box, Button, Typography, Card, CardContent } from '@mui/material';

// SCSS
import '../../../scss/planes.scss';

// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircle as faCircleSolid, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircle as faCircleRegular } from '@fortawesome/free-regular-svg-icons';

// IMÁGENES
import iconForMe from '../../../img/iconforme.svg';
import iconForAnyOne from '../../../img/iconforanyone.svg';

// LIBRERÍAS
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { FreeMode, Pagination } from 'swiper/modules';
// 1. Definimos la forma de los datos que esperamos recibir
interface Plan {
    name: string;
    price: number;
    description: string[];
}

// 2. Definimos todas las props que el componente necesita del contenedor
interface PlanesViewProps {
    userName: string;
    plans: Plan[];
    selectedOption: string | null;
    onGoBack: () => void;
    onSelectOption: (option: string) => void;
    onSelectPlan: (plan: Plan) => void;
}

// 3. El componente es ahora puramente visual
export const PlanesView = ({
    userName,
    plans,
    selectedOption,
    onGoBack,
    onSelectOption,
    onSelectPlan,
}: PlanesViewProps) => {

    
    return (
        <>
            {/* Sección del Stepper de Pasos */}
            <section className="sectPasosCotizacion">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="listPasosCotizacion">
                                <li className="item active"> <span>1</span> Planes y Coberturas</li>
                                <li className="separator">
                                    <FontAwesomeIcon icon={ faCircleSolid } />
                                    <FontAwesomeIcon icon={ faCircleSolid } />
                                    <FontAwesomeIcon icon={ faCircleSolid } />
                                    <FontAwesomeIcon icon={ faCircleSolid } />
                                </li>
                                <li className="item"> <span>2</span> Resumen</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección Principal de Planes */}
            <section className="sectPlanes">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <Box
                                 sx={{
                                    textAlign: 'center'
                                    ,padding: '2rem 0'
                                    ,margin: 'auto'
                                    ,'@media (max-width: 991px)': {
                                        padding: '0',  // Elimina el padding a partir de 991px
                                    }
                                }}    
                            >
                                <Button
                                    // onClick={() => navigate(-1)}
                                    sx={{ color: '#4a4fff', fontSize: '1rem', mb: 2 }}
                                    className="btnBack"
                                >
                                    <FontAwesomeIcon icon={ faCircleChevronLeft } /> Volver
                                </Button>

                                <Typography variant="h4" component="h1" className="titleCotizacion">
                                    {userName}, ¿Para quién deseas <br className="brTitlePlans" /> cotizar?
                                </Typography>
                                <Typography variant="body1" className="textCotizacion">
                                    Selecciona la opción que se ajuste más a tus necesidades.
                                </Typography>

                                {/* Opciones de Cotización */}
                                <Box sx={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', gap: '1.5rem' }}>
                                    <Card
                                        // onClick={() => handleOptionSelect('paraMi')}
                                        sx={{
                                            width: 350,
                                            cursor: 'pointer',
                                            border: selectedOption === 'paraMi' ? '3px solid #000000' : '3px solid #ddd',
                                            boxShadow: selectedOption === 'paraMi' ? '0px 4px 10px rgba(74, 79, 255, 0.2)' : '0px 4px 10px rgba(0, 0, 0, 0.1)',
                                            borderRadius: '20px',
                                            padding: '25px',
                                            '&:hover': {
                                                transform: 'scale(1.05)',
                                            },
                                            transition: 'transform 0.3s, box-shadow 0.3s',
                                            '@media (max-width: 767px)': {
                                                width: '100% !important', // Cambia el ancho al 100% en pantallas pequeñas
                                            },
                                        }}
                                        className="boxCardCotizacionOption"
                                    >
                                        <CardContent className="boxContentCardCotizacionOption">
                                            { 
                                                (selectedOption === 'paraMi') ?
                                                    <FontAwesomeIcon icon={ faCircleCheck } className="iconCheck" />
                                                    : <FontAwesomeIcon icon={ faCircleRegular } className="iconNotCheck" />
                                            }
                                            <img src={ iconForMe } alt="" />
                                            <Typography variant="h6">Para mí</Typography>
                                            <Typography variant="body2" color="text.secondary">Cotiza tu seguro de salud y agrega familiares si así lo deseas. </Typography>
                                        </CardContent>
                                    </Card>

                                    <Card
                                        // onClick={() => handleOptionSelect('paraAlguienMas')}
                                        sx={{
                                            width: 350,
                                            cursor: 'pointer',
                                            // border: selectedOption === 'paraAlguienMas' ? '3px solid #000000' : '3px solid #ddd',
                                            boxShadow: selectedOption === 'paraAlguienMas' ? '0px 4px 10px rgba(74, 79, 255, 0.2)' : '0px 1px 32px 0px #AEACF359',
                                            borderRadius: '20px',
                                            padding: '25px',
                                            '&:hover': {
                                            transform: 'scale(1.05)',
                                            },
                                            transition: 'transform 0.3s, box-shadow 0.3s',
                                            '@media (max-width: 767px)': {
                                                width: '100% !important', // Cambia el ancho al 100% en pantallas pequeñas
                                            },
                                        }}
                                    >
                                        <CardContent className="boxContentCardCotizacionOption">
                                            { 
                                                (selectedOption === 'paraAlguienMas') 
                                                    ? <FontAwesomeIcon icon={ faCircleCheck } className="iconCheck" />
                                                    : <FontAwesomeIcon icon={ faCircleRegular } className="iconNotCheck"  />
                                            }
                                            <img src={ iconForAnyOne } alt="" />
                                            <Typography variant="h6">Para alguien más</Typography>
                                            <Typography variant="body2" color="text.secondary"> una cotización para uno de tus familiares o cualquier persona. </Typography>

                                        </CardContent>
                                    </Card>
                                </Box>

                                {/* Carrusel de Planes */}
                                <Box sx={{ mt: '0' }}>
                                    {selectedOption && plans.length > 0 ? (
                                        <Swiper
                                            slidesPerView={3}
                                            spaceBetween={0}
                                            freeMode={true}
                                            pagination={{ clickable: true }}
                                            modules={[FreeMode, Pagination]}
                                            className="mySwiper planes-swiper-container"
                                            breakpoints={{
                                                991   : {  slidesPerView: 3, spaceBetween: 0 }
                                                ,767  : {  slidesPerView: 2, spaceBetween: 0 }
                                                ,0    : {  slidesPerView: 1, spaceBetween: 0 }
                                            }}
                                        >
                                            {plans.map((plan, index) => (
                                                <SwiperSlide style={{ padding: '20px 16px', paddingBottom: '40px', }} key={index}>
                                                    <Box
                                                        sx={{ p: 2, borderRadius: 5, boxShadow: '0px 1px 18px 0px #AEACF359' }}
                                                        className="boxPlan"
                                                    >
                                                        <div className="boxHead">
                                                            <h3>{plan.name}</h3>
                                                            <h5>COSTO DEL PLAN</h5>
                                                            <h4>${plan.price.toFixed(2)}</h4>
                                                        </div>
                                                        <div className="boxBody">
                                                            <hr />
                                                            <ul>
                                                                {plan.description.map((desc, idx) => <li key={idx}>{desc}</li>)}
                                                            </ul>
                                                        </div>
                                                        <div className="boxFoot">
                                                            <Button
                                                                variant="contained" 
                                                                disableElevation
                                                                className="btnCotizar"
                                                                style={{
                                                                    borderRadius: 35,
                                                                    backgroundColor: "#FF1C44",
                                                                    padding: "10px 20px",
                                                                    fontSize: "18px",
                                                                    fontWeight: "700",
                                                                    textTransform: "capitalize",
                                                                    marginTop: "30px",
                                                                    width: "100%",
                                                                    letterSpacing: "1.5px"
                                                                }}
                                                                // onClick={() => onClickPlanSelected(plan)}
                                                            >
                                                                Seleccionar Plan
                                                            </Button>
                                                        </div>
                                                    </Box>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    ) : (
                                        <Typography variant="body1" sx={{ color: '#888', mt: 4 }}>
                                            {selectedOption ? 'No hay planes disponibles.' : 'Selecciona una opción para ver los planes.'}
                                        </Typography>
                                    )}
                                </Box>
                            </Box>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};