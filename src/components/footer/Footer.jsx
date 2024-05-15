import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { email, facebook, instagram,  logo,  twitter, } from '../../assets'
import FooterSeries from './FooterSeries'

const Footer = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  const { displayName } = user || {}
  return (
    <div className='footer'>
      <FooterSeries/>
      <div className="footer__socials">
        <Link to='/'>
          <div className="footer__social">
            <img src={facebook} alt="" />
          </div>
        </Link>
        <Link to='/'>
          <div className="footer__social">
            <img src={twitter} alt="" />
          </div>
        </Link>
        <Link to='/'>
          <div className="footer__social">
            <img src={instagram} alt="" />
          </div>
        </Link>
        <Link to='/'>
          <div className="footer__social">
            <img src={email} alt="" />
          </div>
        </Link>
      </div>
      <div className="footer__links">
        <div className="footer__main-links">
          <Link to='/' className='footer__link-main'>
          <img src={logo} alt="" />
          </Link>
          {
            displayName ? (
              <Link to={`/profile/${displayName}`} className="footer__link">Profile</Link>
            ) : (
              <Link to="/login" className="footer__link">Admin</Link>
            )
          }
          <div className="footer__link-text">
            <p>Laborum ad explicabo. Molestiae voluptates est. Quisquam labore tenetur et assumenda voluptatibus a beatae. Rerum odio ducimus reprehenderit sit animi laborum nostrum dolorum animi voluptates est voluptatibus a beatae.</p>
          </div>
        </div>
        <div className="footer__side-links">
          <div className="footer__side-links-location">
            <h4>OUR LOCATION</h4>
            <span>1600 Amphitheatre Parkway</span>
            <span>Mountain View, California</span>
            <span>94043 US</span>
          </div>
          <div className="footer__side-links-location">
            <h4>QUICK LINKS</h4>
            <Link to='/' className='footer__link'>
              Home
            </Link>
            <Link to='/about-us' className='footer__link'>
              About Us
            </Link>
            <Link to='/gallery' className='footer__link'>
              Gallery
            </Link>
            <Link to='/events' className='footer__link'>
              Events
            </Link>
            <Link to='/testimonies' className='footer__link'>
             Testimonies
            </Link>
            <Link to='/contact-us' className='footer__link'>
              Contact
            </Link>
          </div>
        </div>
        <div className="footer__copyright">
          <p>&copy;Copyright PCC Belts Ville 2024</p>
        </div>
      </div>
    </div>
  )
}

export default Footer