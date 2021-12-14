import React from 'react'
import "./Slide3.css"
import bgVideo from "./advaita.mp4"

export default function Slide3() {

    return (
        <div data-aos="slide-up" className="container-slide-3">
            <video autoPlay muted loop id="myVideo">
                <source src={bgVideo} type="video/mp4" />
            </video>
            {/* <h1>Slide 3</h1> */}
            <svg id="slide-3-svg" viewBox="0 0 1320 300">
                <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                    events
                </text>
            </svg>
        </div>
    )
}
