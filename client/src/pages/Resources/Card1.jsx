import React, { useState } from 'react';
import "./Resources.css"

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
                <img alt="logo" className="logo" src={image}></img>
            </div>
            <div className="card">
                <h2 style={{fontSize: '18px'}}>{title}</h2>
                <p style={{height:lines}}>{content}</p>
                <div className="buttons" onClick={readMore}>{button}</div>{' '}
            </div>
        </>
    )
}