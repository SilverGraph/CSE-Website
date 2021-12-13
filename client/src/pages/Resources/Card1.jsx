import React, { useState } from 'react';
import "./Resources.css"

export default function Card1({title,content,image}) {
    const [lines, setlines] = useState(60);
    const [button, setButton] = useState('Read More');
    const readMore = function(){
        if(lines===60){
            setlines('auto');
            setButton('Read Less')
        }else{
            setlines(60);
            setButton('Read More')
        }
    }
    return (
        <div className="card card1">
            <img alt="logo" className="logo" src={image}></img>
            <div className="info">
                <h2>{title}</h2>
                <p style={{height:lines}}>{content}</p>
                <button className="buttons" onClick={readMore}>{button}</button>{' '}
            </div>
        </div>
    )
}