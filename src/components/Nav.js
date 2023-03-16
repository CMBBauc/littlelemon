import Logo from "../assets/Logo.svg"
import "./Nav.css";


function Nav() {
    return(
        <nav>
            <img src={Logo}alt="little lemon logo"></img>
            <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Menu</a></li>
                <li><a>Reservations</a></li>
                <li><a>Online Order</a></li>
                <li><a>Login</a></li>
            </ul>
        </nav>
    );
};

export default Nav;