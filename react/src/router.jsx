import { createBrowserRouter } from 'react-router-dom';
import Login from './views/Login.jsx';
import User from './views/User';
import Signup from './views/Signup';
import Notfound from './Notfound';
import GuestLayout from './components/GuestLayout.jsx';
import DefaultLayout from './components/DefaultLayout.jsx';
import { Children } from 'react';
import Dashboard from './views/Dashboard.jsx';
import UserForm from './views/UserForm.jsx';



const router = createBrowserRouter([

    {
        path: '/',
        element: <GuestLayout />,
        children: [

            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <Signup />
            },
            {
                path: '',
                element: <Notfound />
            }
        ]
    },

    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'users',
                element: <User />
            },
            {
                path: 'users/new',
                element: <UserForm  key='user-create'/>
            },
            {
                path: 'users/:id',
                element: <UserForm  key = 'user-update'/>
            }

        ]
    },



])

export default router;