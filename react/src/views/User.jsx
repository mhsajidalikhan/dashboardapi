import React, { useEffect, useState } from 'react'
import axiosClient from '../axios-clients';
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';

export default function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setNotification } = useStateContext();

  useEffect(() => {
    getUsers();

  }, [])
  const onDeleteClick = (u) => {
    if (!window.confirm('Are you sure to delete this user')) {
      return false;
    }

    axiosClient.delete(`/users/${u.id}`).then(() => {
      setNotification('User has been deleted successfully.')

    })
    getUsers();
  }
  const getUsers = () => {
    setLoading(true);
    axiosClient.get('/users').then((data) => {
      setLoading(false);
      setUsers(data.data.data)
    })
      .catch((err) => {
        setLoading(false);
        console.log(err)
      })
  }
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Users</h1>
        <Link to="new" className='btn-add'>Create User</Link>
      </div>
      <div className='card fadeInDown animated'>

        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Create Date</th>
              <th>Action</th>

            </tr>
          </thead>
          {loading && <tbody>
            <tr className='text-center'>
              <td colSpan={5}>Loading...</td>
            </tr>
          </tbody>}
          {!loading && <tbody>
            {users.map(u => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.created_at}</td>
                <td>
                  <Link className="btn-edit" to={'/users/' + u.id}>Edit</Link>
                  &nbsp;
                  <button className="btn-delete" onClick={ev => onDeleteClick(u)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
          }
        </table>
      </div>
    </div>
  )
}
