/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState,useContext } from 'react'
import UserContext from '../context/UserContext'
function Login() {
  const [username,setUsername]=useState('')
  const [password,setPassword]= useState('')

  const {setUser}=useContext(UserContext)
  

  const handleSubmitButton=(e)=>{
    e.preventDefault() //should be preventdefault
    setUser({username,password})
  }
  return (
    <div>
      <h2>
        Login 
      </h2>
      <input type="text" 
      value={username} 
      onChange={(e)=>setUsername(e.target.value)}
      placeholder='usernname' />
      <input type="password"
       name="" 
       value={password} 
      onChange={(e)=>setPassword(e.target.value)}
       id="" placeholder='password' />
      <button type="submit" onClick={handleSubmitButton}>Submit</button>
    </div>
  )
}

export default Login
