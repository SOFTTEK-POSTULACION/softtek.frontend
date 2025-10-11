import { FeaturesRoutes } from "../features/routes/FeaturesRoutes";
import { Layout } from "../features/layout/pages/Layout";
import { Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/*" element={<FeaturesRoutes />} />
            </Route>
        </Routes>
    )
}