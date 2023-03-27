import Logo from "../assets/Logo.svg"
import '../styles/Footer.css'

function Footer() {
    return(
        <footer>
            <img src={Logo} alt="Little Lemon Logo"></img>
            <div className="divider"></div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Online Order</li>
                <li>Login</li>
            </ul>
            <div className="divider"></div>
            <ul>
                <li>FaceBook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>TikTok</li>
            </ul>
        </footer>
    );
};

export default Footer;