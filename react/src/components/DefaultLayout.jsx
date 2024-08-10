import { Link, Outlet } from "react-router-dom";
import { useStateContext } from "../contextporvider/ContextProvider";


export default function () {
    const {user, token} = useStateContext();

    const onLogOut = (e) => {
        e.preventDefault();
    }

    return (
        <div id="defaultLayout">
            <aside>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/users">Users</Link>
            </aside>
            <div className="content">

                <header>
                    <div>Header</div>
                    <div>{user.name}
                    <a href="#" onClick={onLogOut} className="btn-logout">Logout</a>
                    </div>
                  
                </header>
                <main>
                    <Outlet />
                </main>
            </div>

        </div>
    );
}