import React from 'react'
import { auth, } from '../../firebaseConfig'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import './admin.css'
import CreateEvent from './CreateEvent';

const Profile = () => {
  const navigate = useNavigate()
   const  user  = JSON.parse(localStorage.getItem("user"))
  const { displayName } = user || {}
  const logOut = () => {
    signOut(auth)
    localStorage.clear()
    navigate('/')

  }



  return (
    <div className='main'>
     <div className="">
     <div className="main__header">
        <h3>{!displayName ? "ADMIN" : displayName}</h3>
        <button type='btn' onClick={logOut}>log out</button>
      </div>
     </div>
      <div className="main__container">
        <CreateEvent/>
      </div>
    </div>
  )
}

export default Profile
