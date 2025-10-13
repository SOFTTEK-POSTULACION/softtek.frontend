import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as faCircleSolid } from '@fortawesome/free-solid-svg-icons';

interface PasosCotizacionProps {
    activeStep: number;
}

export const PasosCotizacion = ({ activeStep }: PasosCotizacionProps) => {
    return (
        <section className="sectPasosCotizacion">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="listPasosCotizacion">
                            {/* 2. Usa una condición para la clase 'active' */}
                            <li className={activeStep === 1 ? 'item active' : 'item'}> 
                                <span>1</span> Planes y Coberturas
                            </li>
                            <li className="separator">
                                <FontAwesomeIcon icon={faCircleSolid} />
                                <FontAwesomeIcon icon={faCircleSolid} />
                                <FontAwesomeIcon icon={faCircleSolid} />
                                <FontAwesomeIcon icon={faCircleSolid} />
                            </li>
                            {/* 3. Usa una condición para la clase 'active' */}
                            <li className={activeStep === 2 ? 'item active' : 'item'}> 
                                <span>2</span> Resumen
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};