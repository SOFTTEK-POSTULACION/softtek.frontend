import { Outlet } from "react-router-dom";

export const LayoutContent = () => {
    return (
        <div className="router-outlet">
            <Outlet />
        </div>
    );
};