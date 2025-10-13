import { Navigate, Route, Routes } from "react-router";

import { PlanesPage } from "../modules/planes/pages/planes-page/PlanesPage";
import { ResumenPage } from "../modules/planes/pages/resumen-page/ResumenPage";
import { SeguroSaludFlexiblePage } from "../modules/seguroSaludFlexible/pages/seguro-salud-flexible-page/SeguroSaludFlexiblePage";

export const FeaturesRoutes = () => {

    return (
        <Routes>
            <Route path="planes" element={<PlanesPage />} />
            <Route path="resumen" element={<ResumenPage />} />
            <Route path="seguros-salud" element={<SeguroSaludFlexiblePage />} />

            <Route path="/" element={<Navigate to="/seguros-salud" replace />} />

            <Route path="*" element={<Navigate to="/seguros-salud" replace />} />
        </Routes>
    )
}
