import React from "react"
import "./Card.css"

function Card() {
    return (
        <div className="product-card">
            <img src="https://picsum.photos/200/300" alt="Product 1" />
            <div className="product-info">
                <h3>Product 1</h3>
                <p>Description for Product 1</p>
            </div>
        </div>
    )
}

export default Card