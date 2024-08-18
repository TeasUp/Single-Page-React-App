import React from "react"
import "./Navbar.css"
import Logo from "./Logo/Logo"
import Links from "./Links/Links"
import ActionButton from "./ActionButton/ActionButton"


function Navbar() {
    return (
        <nav>
            <Logo />
            <Links />
            <ActionButton />
        </nav>
    )
}

export default Navbar
