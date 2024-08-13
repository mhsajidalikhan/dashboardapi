import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '../axios-clients';
import { useStateContext } from '../context/ContextProvider';

function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { setUser, setToken } = useStateContext();
  const [errors, setErrors] = useState(null)
  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPasswordRef: confirmPasswordRef.current.value,
    }

    axiosClient.post('/signup', payload)
    .then(({data}) => {
      setUser(data.user)
      setToken(data.token);
    })
    .catch(err => {
      const response = err.response;
  
      if (response && response.status === 422) {
        setErrors(response.data.errors)
        console.log({sajidresponse : errors})
      }
    })
  }
        

  return (
    <div className='login-signup-form animated fadeInDown'>
      <div className='form'>
        <h1 className='title'>Sign up for free</h1>
         {
          errors && <div className='alert'>
            {Object.keys(errors).map(key => (

              <p key={key}> {errors[key][0]} </p>

            ))}

          </div>
         }
        
        <form onSubmit={onSubmit}>
          <input ref={nameRef} placeholder='Full Name' />
          <input type='email' placeholder='email' ref={emailRef} />
          <input type='password' placeholder='password' ref={passwordRef} />
          <input type='password' placeholder='password confirmation' ref={confirmPasswordRef} />
          <button className='btn btn-block' onSubmit={onSubmit}>Register</button>
          <p className='message'>

            Already registed? <Link>Create an accont</Link>
          </p>


        </form>
      </div>

    </div>
  )
}

export default Signup
