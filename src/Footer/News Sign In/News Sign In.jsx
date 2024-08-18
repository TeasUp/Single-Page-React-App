import React from "react"
import "./News Sign In.css"

function NewsSignIn() {
  return (
    <div className="footer-col news-signIn">
      <div className="news-title">
        <h4>News</h4>
        <p>Sign up Here to Get news and Stuff</p>
      </div>
      <div className="news-input-group">
        <input type="email" />
        <button type="submit">Subscribe</button>
      </div>
    </div>
  )
}

export default NewsSignIn
