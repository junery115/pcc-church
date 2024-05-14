import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  const {displayName } = user || {}
  return (
    <div className='footer'>
      {
        displayName ? (
          <Link to={`/profile/${displayName}`} className="footer__link">Profile</Link>
        ):(
          <Link to="/login" className="footer__link">Admin</Link>
        )
      }
    </div>
  )
}

export default Footer