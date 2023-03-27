import React from 'react';
import Food from "../assets/restauranfood.jpg";
import { Link } from 'react-router-dom';
import "../styles/Header.css";
import BookingPage from '../pages/BookingPage';


function Header() {
    return(
        <header>
            <div className="leftside">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button><Link to="/Booking" element={<BookingPage />}>Reserve a Table</Link></button>
            </div>
            <div className="rightside">
                <img src={Food} alt="cook holding tablet"/>
            </div>
        </header>
    );
};


export default Header;