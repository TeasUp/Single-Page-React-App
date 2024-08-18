import React from "react"
import "./Title.css"
import TitleText from "../../Title/Title"

function Title() {
    return (
        <section className="Title">
            <TitleText />
            <div className="filter-buttons">
                <ul>
                    <il>
                        <button className="active-filter">All</button>
                    </il>
                    <il>
                        <button>Internet</button>
                    </il>
                    <il>
                        <button>Popular</button>
                    </il>
                    <il>
                        <button>Nice</button>
                    </il>
                </ul>
            </div>
        </section>
    )
}

export default Title