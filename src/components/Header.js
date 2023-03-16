import React from 'react'
import Food from "../assets/restauranfood.jpg";
import "./Header.css";


function Header() {
    return(
        <header>
            <div className="leftside">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button>Reserve a Table</button>
            </div>
            <div className="rightside">
                <img src={Food} alt="cook holding tablet"/>
            </div>
        </header>
    );
};


export default Header;