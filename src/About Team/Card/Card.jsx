import React from "react"
import "./Card.css"

function Card() {
  return (
    <div className="team-member-card">
      <div className="member-picture">
        <img src="" alt="MemberPicHere" />
      </div>

      <div className="member-info">
        <h4 className="member-name">MemberNameHere</h4>
        <p className="member-role">MemberRoleAndStuffHere</p>
      </div>

      <div className="member-social-info">
        <ul>
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

export default Card
