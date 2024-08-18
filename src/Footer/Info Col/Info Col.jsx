import React from "react"
import "./Info Col.css"

function InfoCol() {
  return (
    <div className="footer-col help-info">
      <h2>YourNameHere</h2>
      <div className="info">
        <ul className="info-text">
          <li>
            <address>AddressAndStuff</address>
          </li>
          <li>
            <b>Phone:</b> PhoneNumber
          </li>
          <li>
            <b>Email:</b> YourEmail@Email.com
          </li>
        </ul>
        <ul className="info-social-media">
          <li>
            <a href="#">Icon</a>
          </li>
          <li>
            <a href="#">Icon</a>
          </li>
          <li>
            <a href="#">Icon</a>
          </li>
          <li>
            <a href="#">Icon</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default InfoCol
