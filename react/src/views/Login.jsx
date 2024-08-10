import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const onSubmit = () => {

  }
  return (
    <div className='login-signup-form animated fadeInDown'>
      <div className='form'>
        <h1 className='title'>Login into your account</h1>
        <form onSubmit={onSubmit}>
          <input type='email' placeholder='email'/>
          <input type='password' placeholder='password'/>
          <button className='btn btn-block'>Login</button>
          <p className='message'>

            Not registred? <Link>Create an accont</Link>
          </p>

        
        </form>
      </div>

    </div>
  )
}
