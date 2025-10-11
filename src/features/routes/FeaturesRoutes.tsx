import { Navigate, Route, Routes } from "react-router";

import { PlanesPage } from "../modules/planes/pages/planes-page/PlanesPage";
import { ResumenPage } from "../modules/planes/pages/resumen-page/ResumenPage";

export const FeaturesRoutes = () => {

    return (
        <Routes>
            <Route path="planes" element={<PlanesPage />} />
            <Route path="resumen" element={<ResumenPage />} />
            <Route path="resumen" element={<ResumenPage />} />

            <Route path="/" element={<Navigate to="/seguros-salud" replace />} />

            <Route path="*" element={<Navigate to="/seguros-salud" replace />} />
        </Routes>
    )
}
