/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React,{useContext} from 'react'
import UserContext from '../context/UserContext'
function Profile() {
    //user 
    const {user}=useContext(UserContext)
    if (!user) 
        return (<div>please Login</div>)
    return (
    <div>
      Welcome {user.username}
      
    </div>
  )
}

export default Profile
