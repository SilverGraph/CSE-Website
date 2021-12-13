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

export default function Card1({title,content,image}) {
    const [lines, setlines] = useState(60);
    const [button, setButton] = useState(<p><i className="arrow down"></i></p>);
    const readMore = function(){
        if(lines===60){
            setlines('auto');
            setButton(<p><i className="arrow up"></i></p>)
        }else{
            setlines(60);
            setButton(<p><i className="arrow down"></i></p>)
        }
    }
    return (
        <>
            <div className="logos">
                <img className="logo" src={image}></img>
            </div>
            <div className="card">
                <h2 style={{fontSize: '18px'}}>{title}</h2>
                <p style={{height:lines}}>{content}</p>
                <div className="buttons" onClick={readMore}>{button}</div>{' '}
            </div>
        </>
    )
}