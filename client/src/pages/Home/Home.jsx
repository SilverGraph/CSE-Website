import React, { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css";
import "./Home.css"
import Slide1 from "./Slide1/Slide1"
import Slide2 from "./Slide2/Slide2"
import Slide3 from "./Slide3/Slide3"
import BgStars from '../../components/background/BgStars';

export default function Home() {
    useEffect(() => {
        AOS.init({
            delay: 0,
            easing: 'ease-in-out',
            duration: 1500
        })
        AOS.refresh()        
    }, [])

    return (
        <div id="container-slides">
            <BgStars />
            <Slide1 />
            <Slide2 />
            <Slide3 />
        </div>
    )
}
