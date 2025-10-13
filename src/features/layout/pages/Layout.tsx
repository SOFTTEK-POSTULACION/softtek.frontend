import { useLocation } from "react-router-dom";

//CSS
import '../scss/layout.scss';
import { LayoutHeader } from "./components/LayoutHeader";
import { LayoutContent } from "./components/LayoutContent";
import { LayoutFooter } from "./components/LayoutFooter";

export const Layout = () => {

    const location = useLocation();

    return (
        <div className="main-layout">
            <LayoutHeader />
            
            <LayoutContent />

            {location.pathname === '/seguros-salud' && (
                <LayoutFooter />
            )}
        </div>
    )
}
