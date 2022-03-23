import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/splash_footer'
// import trippyLogo from '../../../public/images/trippy-logo.jpeg';

const SplashPage = () => {

    return (
          <div className="splash-container">
            <div className="splash-header">
              <div className="splash-logo-container">
                <Link to="/" className="header-link">
                  <img id="splash-page-logo" src='images/trippy-logo.jpeg' alt="logo" />
                </Link>
              </div>
              <ul className="splash-nav-bar">
                <li className="links"><a className="links" href='https://github.com/avakil3/trippy' target="_blank" >GitHub</a></li>
                <li className="hidden">│</li>
                <li>
                  <Link to={ "/signup" } className="links">Sign Up</Link>
                </li>
                <li><Link to={ "/login" } className="links">Log In</Link></li>
              </ul>
            </div>
            <div className="main-splash-text">
              {/* <img className='center-logo' src="images/trippy-logos-white.png" alt="" /> */}
              {/* <p id="content-listening-is">A world to see.</p> */}
              <p id="content-world">A world to see.</p>
              <p id="splash-centered_content">Millions of destinations and experiences. Plan your next trip today.</p>
              <Link to={ "/signup" } className="splash-btn">
                  Sign up for Trippy
              </Link>
            </div>
            <footer>
              <Footer/>
            </footer>
          </div>
      )

    }
    
    export default SplashPage;