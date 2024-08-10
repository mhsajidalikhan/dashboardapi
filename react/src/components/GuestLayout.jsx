import { Outlet } from "react-router-dom";

export default function GuestLayout(){

    return (
        <div className="content">
            <div>Gusest Layout</div>
            < Outlet />
        </div>
    );
}