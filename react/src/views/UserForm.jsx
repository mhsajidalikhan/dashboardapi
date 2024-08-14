import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosClient from '../axios-clients';
import { useStateContext } from '../context/ContextProvider';
export default function UserForm() {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);

    const [errors, setErrors] = useState(null);
    const navigate = useNavigate();

    const { setNotification } = useStateContext()
    const [user, setUser] = useState({
        id: '',
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    })
    if (id) {
        useEffect(() => {
            axiosClient.get('/users/' + id).then(({ data }) => {

                setUser(data)
            })
                .catch(err => {
                    console.log(err)
                })


        }, [])
    }

    const onSubmit = (ev) => {
        ev.preventDefault();
        setErrors(null)
        if (user.id) {
            axiosClient.put(`/users/${user.id}`, user)
                .then(() => {
                    setNotification('User was successfully updated')
                    navigate('/users')
                })
                .catch(err => {

                    const response = err.response;
                    if (response && response.status === 422) {
                        setErrors(response.data.errors);
                    }

                })
        } else {
            axiosClient.post('/users', user).then((resp) => {
                setNotification('User was successfully created.')
                navigate('/users')

            })
                .catch((err) => {
                    const response = err.response;

                    if (response && response.status === 422) {
                        setErrors(response.data.errors)
                    }
                })
        }
    }
    return (
        <>
            {user.id && <h1> Update User</h1>}
            {!user.id && <h1> Add User</h1>}
            <div className='animated fadeInDown card'>
                {loading &&
                    <div className='text-center'>Loading...</div>
                }
                {
                    errors &&
                    <div className='alert'>
                        {
                            Object.keys(errors).map(key => (
                                <p key={key}>{errors[key][0]}</p>
                            ))
                        }
                    </div>
                }

                {!loading &&
                    <form onSubmit={onSubmit}>
                        <input placeholder='name' value={user.name} onChange={ev => setUser({ ...user, name: ev.target.value })} />
                        <input type='email' placeholder='email' value={user.email} onChange={ev => setUser({ ...user, email: ev.target.value })} />
                        <input type="password" placeholder='password' onChange={ev => setUser({ ...user, password: ev.target.value })} />
                        <input type="password" placeholder='password_confirmation' onChange={ev => setUser({ ...user, password_confirmation: ev.target.value })} />
                        <button className='btn'>Save</button>

                    </form>
                }
            </div>
        </>
    )
}
