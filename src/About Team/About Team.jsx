import React from "react"
import "./About Team.css"
import TitleText from "../Title/Title"
import Card from "./Card/Card"

function AboutTeam() {
  return (
    <main className="about-team">
      <TitleText className="about-team-title" />
      <section className="team-members">
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  )
}

export default AboutTeam
