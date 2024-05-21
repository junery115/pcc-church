import { ReactComponent as Logo } from '../../../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';
export default function Header() {
  return(

<header className="s-header">

        <div className="header-logo">
            <a className="site-logo" href="index.html">
             <Logo />
            </a>
        </div>

        <nav className="header-nav-wrap">
            <ul className="header-nav">
                <li><NavLink className="current" to="/">Home</NavLink></li>
                <li><NavLink to="/about" title="About">About</NavLink></li>
                <li><NavLink to="/events" title="Services">Events</NavLink></li>
                <li><NavLink to="/contact" title="Contact us">Contact</NavLink></li>	
            </ul>
        </nav>

        <a className="header-menu-toggle" href="#0"><span>Menu</span></a>

    </header> 
  )
}
