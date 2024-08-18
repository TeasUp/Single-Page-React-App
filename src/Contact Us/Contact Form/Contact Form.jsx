import React from "react"
import "./Contact Form.css"

function ContactForm() {
    return (
        <section className="Contact-form">
            <form>
                <div className="form-row">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                </div>
                <input type="text" placeholder="Title" />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    )
}

export default ContactForm
