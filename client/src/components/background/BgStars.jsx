import React, { useEffect } from 'react'
import "./BgStars.css"

export default function BgStars() {

    useEffect(() => {
        if (window.performance) {
            performance.navigation.type === 1 && window.scrollTo(0, 0)
        }
    },)

    return (
        <div style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
        }}>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
        </div>
    )
}
