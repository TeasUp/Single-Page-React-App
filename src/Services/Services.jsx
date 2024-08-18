import React from "react"
import "./Services.css"
import Title from "../Title/Title"
import Card from "./Card/Card"


function Services() {
    return (
        <main className="services">
            <Title />
            
            <section className="services-cards">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </section>
        </main>
    )
}

export default Services
