import React, { useState } from 'react'

function Register() {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  async function register(e){
    e.preventDefault();
    const response=await fetch('http://localhost:4000/register',{
      method:'POST',
      body:JSON.stringify({username, password}),
      headers:{'Content-Type':'application/json'}
    });
    if(response.status===200){
      alert('Registration Successful');
    }
    else{
      alert('Registration Failed');
    }
  }
  return (
    <form className='register' onSubmit={register}>
        <h2>Register</h2>
        <input type={'text'} placeholder={'UserId'} value={username} onChange={e=>setUsername(e.target.value)}/>
        <input type={'password'} placeholder={'Password'} value={password} onChange={e=>setPassword(e.target.value)}/>
        <button>Register</button>
    </form>
  )
}

export default Register
