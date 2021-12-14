import React, { useEffect, useState } from 'react'
import AOS from "aos"
import "aos/dist/aos.css";
import "./Home.css"
import Slide1 from "./Slide1/Slide1"
import Slide2 from "./Slide2/Slide2"
import Slide3 from "./Slide3/Slide3"
import BgStars from '../../components/background/BgStars';
import Navbar from "../../components/Navbar";
import axios from "axios"

export default function Home() {
    const [auth, setAuth] = useState(false)

    useEffect(() => {
        AOS.init({
            delay: 0,
            easing: 'ease-in-out',
            duration: 1500
        })
        AOS.refresh()

        async function checkAuth() {
            await axios({
                method: 'get',
                url: 'https://cse-2k25.herokuapp.com/api/checklogin',
                // data: formData,
                // headers:{"Content-Type": "LOL"}, 
                withCredentials: true
            }).then((props) => {
                console.log(props.data.Status)
                setAuth(props.data.Status)
                // localStorage.setItem('userid', props.data.id)
                // window.location= "/"
            }).catch(function (response) {
                //handle error
                console.log(response);
            });
        }
        checkAuth()
        
    }, [])

    return (
        <div id="container-slides">
            <Navbar isAuth={auth}/>
            <BgStars />
            <Slide1 />
            <Slide2 />
            <Slide3 />
        </div>
    )
}
