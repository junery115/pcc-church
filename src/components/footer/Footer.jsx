import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { email, facebook, instagram, podcast, soundCloud, spotify, twitter, youtube } from '../../assets'

const Footer = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  const { displayName } = user || {}
  return (
    <div className='footer'>
      <div className="footer__message">
        <div className="footer__series">
          <div className="footer__current-series">
            <div className="footer__current-series-left">
              <div className="footer__current-seriesHeader">
                <h3>CURRENT SERIES</h3>
                <h2>Shape Your Life with the Words of Life.</h2>
              </div>
              <div className="footer__current-series-body">
                <p>Aut sed amet et quis aliquid laborum minus consequatur. Animi repellendus quas. Est voluptates minima ut dolorum aliquid sint. Ratione et et molestias rerum quibusdam. Deserunt suscipit ut expedita. Non numquam aut eum perferendis molestiae praesentium aliquid voluptatum numquam dolorum aliquid sint minima.</p>
              </div>
            </div>
            <div className="footer__current-series-right">
              <Link to='/events' className="footer__current-seriesLink">
                CHECKOUT EVENTS
              </Link>
              <Link to='/create-testimony' className="footer__current-seriesLink">
                SHARE YOUR STORY
              </Link>
              <div className="footer__current-series-right-line"></div>
              <div className="footer__current-series-right-text">
                <p>Never missed a message. Subscribe to our YouTube and Podcast channels.</p>
              </div>
              <div className="footer__socials-streaming">
                <Link to='/'>
                  <div className="footer__social-streaming">
                    <img src={podcast} alt="" />
                  </div>
                </Link>
                <Link to='/'>
                  <div className="footer__social-streaming">
                    <img src={spotify} alt="" />
                  </div>
                </Link>
                <Link to='/'>
                  <div className="footer__social-streaming">
                    <img src={soundCloud} alt="" />
                  </div>
                </Link>
                <Link to='/'>
                  <div className="footer__social-streaming">
                    <img src={youtube} alt="" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
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
            PCC-BELTSVILLE
          </Link>
          {
            displayName ? (
              <Link to={`/profile/${displayName}`} className="footer__link">Profile</Link>
            ) : (
              <Link to="/login" className="footer__link">Admin</Link>
            )
          }
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