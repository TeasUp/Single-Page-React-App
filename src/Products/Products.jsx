import React from "react"
import "./Products.css"
import Title from "./Title/Title"
import Card from "./Card/Card"

function Products() {
    return (
        <main className="Products">
            <Title />
            <section className="Products-Cards">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </section>
        </main>
    )
}

export default Products
