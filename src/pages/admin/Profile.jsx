import React from 'react'
import { auth, } from '../../firebaseConfig'
import { signOut } from 'firebase/auth'

import './admin.css'
import CreateEvent from './CreateEvent';

const Profile = () => {
   const { user } = localStorage.getItem("user")
  const { displayName } = user || {}
  const logOut = () => {
    signOut(auth)
    localStorage.clear()
  }



  return (
    <div className='main'>
     <div className="">
     <div className="main__header">
        <h3>{!displayName ? "ADMIN" : displayName}</h3>
        <button onClick={logOut}>LOG OUT</button>
      </div>
     </div>
      <div className="main__container">
        <CreateEvent/>
      </div>
    </div>
  )
}

export default Profile