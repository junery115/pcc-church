import React from 'react'
import { Link } from 'react-router-dom'
import { podcast, soundCloud, spotify, youtube } from '../../assets'

const FooterSeries = () => {
  return (
    <div className="footer__message-container">
      <div className="footer__message">
        <div className="footer__message-left"></div>
        <div className="footer__message-right"></div>
      </div>
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
              <div className="footer__current-series-links">
              <div className="footer__current-series-link">
              <Link to='/events' className="footer__current-seriesLink">
                CHECKOUT EVENTS
              </Link>
              </div>
              <div className="footer__current-series-link">
              <Link to='/create-testimony' className="footer__current-seriesLink">
              SHARE YOUR STORY
              </Link>
              </div>
              </div>
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
  )
}

export default FooterSeries