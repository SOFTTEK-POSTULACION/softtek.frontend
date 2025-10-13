import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../../shared/img/logo/logo.svg';

export const LayoutHeader = () => {
    return (
        <header>
            <nav className="navBarMain">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-3 col-sm-3 col-md-2 col-lg-1">
                            <img src={logo} alt="Logo de RIMAC Seguros" width="100%" />
                        </div>
                        <div className="col-9 col-sm-9 col-md-10 col-lg-11">
                            <ul className="listInfoNavBar">
                                <li><h5>¡Compra por este medio!</h5></li>
                                <li><a href="tel:014116001"><FontAwesomeIcon icon={faPhone} /> (01) 411 6001</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};