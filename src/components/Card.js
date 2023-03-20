import React from "react";

export default function Card([title, price, description, imageSource]) {
    return (
        <div>
            <img src={imageSource} alt="Menu item"></img>
            <h1>{title}</h1>
            <p>{price}</p>
            <p>{description}</p>
            <h2>Order a delivery</h2>
        </div>
    )
}