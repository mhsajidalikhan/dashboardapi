import { createBrowserRouter } from 'react-router-dom';
import Login from './views/Login.jsx';
import User from './views/User';
import Signup from './views/Signup';
import Notfound from './Notfound';



const router = createBrowserRouter([
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'users',
        element: <User />
    },
    {
        path: 'signup',
        element: <Signup />
    },
    {
        path : '',
        element: <Notfound />
    }

])

export default router;