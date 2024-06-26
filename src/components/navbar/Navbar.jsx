import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { logo } from '../../assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar__logo">
       <Link to='/' className='navbar__link'>
      <img src={logo} alt="" />
       </Link>
      </div>
      <div className="navbar__links">
        <Link to='/about-us' className='navbar__link'>ABOUT</Link>
        <Link to='/events' className='navbar__link'>EVENTS</Link>
        <Link to='/contact-us' className='navbar__link'>CONTACT</Link>
        <Link to='/gallery' className='navbar__link'>GALLERY</Link>
      </div>
    </div>
  )
}

export default Navbar