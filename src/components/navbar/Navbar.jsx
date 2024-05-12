import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar__logo">
       <Link to='/' className='navbar__link'>
       <h3>PCC-BELTSVILLE</h3>
       </Link>
      </div>
      <div className="navbar__links">
        <Link to='/about-us' className='navbar__link'>ABOUT US</Link>
        <Link to='/contact-us' className='navbar__link'>CONTACT US</Link>
        <Link to='/gallery' className='navbar__link'>GALLERY</Link>
      </div>
    </div>
  )
}

export default Navbar