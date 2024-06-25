/* eslint-disable no-unused-vars */
import React from 'react'
// Auto acces to params
import { useParams } from 'react-router-dom'

function User() {
    const {userid} =useParams()
  return (
    <div className='p-4 bg-slate-700 text-white m-4 text-center'>
      User : {userid}
    </div>
  )
}

export default User
