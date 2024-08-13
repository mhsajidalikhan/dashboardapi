import React, { useEffect, useState } from 'react'
import axiosClient from '../axios-clients';

export default function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUsers();

  },[])

  const getUsers = () => {
    setLoading(true);
    axiosClient.get('/users').then((data) => {
      setLoading(false);
      console.log(data)
    })
      .catch((err) => {
        setLoading(false);
        console.log(errr)
      })
  }
  return (
    <div>
      Users
    </div>
  )
}
