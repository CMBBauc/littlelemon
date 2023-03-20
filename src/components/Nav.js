import Logo from "../assets/Logo.svg";
import "../styles/Nav.css";
import { Link } from 'react-router-dom';



function Nav() {
    return(
        <nav>
            <img src={Logo}alt="little lemon logo"></img>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="">About</a></li>
                <li><a href="">Menu</a></li>
                <li><Link to="/Booking">Reservations</Link></li>
                <li><a href="">Online Order</a></li>
                <li><a href="">Login</a></li>
            </ul>
        </nav>
    );
};

export default Nav;