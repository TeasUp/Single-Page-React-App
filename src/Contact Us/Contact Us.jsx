import React from "react"
import "./Contact Us.css"
import Title from "../Title/Title"
import InfoCard from "./Info Card/Info Card"
import ContactForm from "./Contact Form/Contact Form"

function ContactUs() {
  return (
    <main className="ContactUs">
      <Title className="title" />

      <div className="content-wrapper">
        <section className="info-col">
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </section>
        <ContactForm />
      </div>
    </main>
  )
}

export default ContactUs
