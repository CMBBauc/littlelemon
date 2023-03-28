import React from "react";
import '../styles/Card.css'

const Card = ({ image, title, price, description }) => {
    return (
      <main>
        <div className="card">
            <img src={image} alt="greek salad" />
            <div className="dish-info">
            <div className="title">
                <h3>{title}</h3>
                <p className="price">${price}</p>
            </div>
            <p className="description">{description}</p>
            </div>
        </div>
      </main>
    );
  };

  export default Card;