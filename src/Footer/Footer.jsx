import React from "react"
import "./Footer.css"
import NewsSignIn from "./News Sign In/News Sign In"
import InfoCol from "./Info Col/Info Col"
import HelpLinks from "./Help Links/Help Links"

function Footer() {
  return (
    <footer className="footer">
      <InfoCol />
      <HelpLinks />
      <NewsSignIn />
    </footer>
  )
}

export default Footer
