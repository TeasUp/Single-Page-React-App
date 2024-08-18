import React from "react"
import "./Hero.css"
import Title from "./Title/Title"
import ActionButtons from "./ActionButtons/ActionButtons"


function Cover() {
    return (
        <section class="cover">
            <Title />
            <ActionButtons />
        </section>
    )
}

export default Cover
