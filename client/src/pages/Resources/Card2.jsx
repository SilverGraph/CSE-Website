import React, { useState } from 'react';
import "./Resources.css"
import psoc from './logos/psoc.png'
import paracosm from './logos/paracosm.png'
import Ecell from './logos/Ecell.png'
import cult from './logos/cult.png'
import FATS from './logos/FATS.png'
import NAPS from './logos/NAPS.png'
import photogeeks from './logos/photogeeks.png'
import sports from './logos/sports.png'
import TARS from './logos/TARS.png'
import vedanta from './logos/vedanta.png'
export default function Card2({title,content,image}) {
    const [lines, setlines] = useState(60);
    const [button, setButton] = useState('Read More');
    const readMore = function(){
        if(lines==60){
            setlines('auto');
            setButton('Read Less')
        }else{
            setlines(60);
            setButton('Read More')
        }
    }
    return (
        <div className="card card2">
            <img className="logo" src={image}></img>
            <div className="info">
                <h2>{title}</h2>
                <p style={{height:lines}}>{content}</p>
                <button className="buttons" onClick={readMore}>{button}</button>{' '}
            </div>
        </div>
    )
}