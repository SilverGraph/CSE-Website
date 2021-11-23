import React from 'react'
import "./Resources.css"
import psoc from './logos/psoc.png'
import {Container} from 'react-bootstrap'
import {Card} from 'react-bootstrap'

export default function SocCard() {
    return (
            <div className="societies">
                <Container>
                    <img className="logo" src={psoc}></img>
                </Container>
                <Container className="details">
                    <div className="info">
                        <h2>Programming Society</h2>
                        <p style={{fontSize: '18px'}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, ea. </p>
                        <button className="buttons">Read More</button>{' '}
                    </div>
                </Container>
            </div>
    )
}