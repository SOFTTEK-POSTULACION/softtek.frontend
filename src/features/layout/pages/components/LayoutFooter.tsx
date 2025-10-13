import logoBL from '../../../../shared/img/logo/logo-bl.svg';
import logoMobileBL from '../../../../shared/img/logo/logo-mobile-bl.svg';

export const LayoutFooter = () => {
    return (
        <footer className="footerMain">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-3 col-lg-1">
                        <img src={logoBL} alt="Logo de RIMAC Seguros en blanco" width="100%" className="imgLogoFooterDesktop" />
                        <img src={logoMobileBL} alt="Logo de RIMAC Seguros en blanco para móvil" width="100%" className="imgLogoFooterMobile" />
                    </div>
                    <div className="col-12 col-md-9 col-lg-11">
                        <p className="rightAutor"> &copy; 2025 RIMAC Seguros y Reaseguros</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};