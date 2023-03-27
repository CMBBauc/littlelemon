import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/Logo.svg";
import Hamburger from '../assets/hamburgericon.svg'
import "../styles/Nav.css";


function Nav() {
    const [isMobile, setIsMobile] = useState(false)

    return(
        <nav class="navbar">
            <img className="logo"src={Logo}alt="little lemon logo"></img>
                <ul
                    className={isMobile ? "nav-links-mobile": "navlinks"}
                    onClick={()=> {setIsMobile(false)}}
                >
                    <Link to="/"><li>Home</li></Link>
                    <Link to="About"><li>About</li></Link>
                    <Link to="Menu"><li>Menu</li></Link>
                    <Link to="/Booking"><li>Reservations</li></Link>
                    <Link to="/OnlineOrder"><li>Online Order</li></Link>
                    <Link to="/Login"><li>Login</li></Link>
                </ul>
                <a
                href="#"
                className="mobile-menu-icon"
                >
                <img
                    src={Hamburger}
                    alt="hamburger icon"
                    onClick={() => setIsMobile(!isMobile)}
                >
                </img>
            </a>
        </nav>
    );
};

export default Nav;