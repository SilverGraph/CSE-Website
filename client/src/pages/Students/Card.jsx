import React  from 'react'
import "./Students.css"
import { FaGithub , FaLinkedinIn , FaInstagram} from "react-icons/fa";
import {IconContext} from "react-icons";

export default function Card({seno , index}) {
    return (
        
        <div className="col-lg-3 col-md-6 col-sm-12 ">
            <div className="cardContainer card mb-xs-1 mb-4 p-1">
                <img alt="user" className="card-img-top img-fluid cardImg" src={seno.imageUrl}/>
            <div className="cardBody py-22">
               <h4>{seno.name}</h4>
               <h5>{seno.title}</h5>
               <p className="px-2">HOBBIES: {seno.hobbies}</p>

               <IconContext.Provider value={{color: 'black', size: 30}}>
                   <a href="#" className="mx-2  icon"> <FaInstagram/></a>
                   <a href="#" className="mx-2 icon "> <FaLinkedinIn/></a>
                   <a href="#" className="mx-2 icon"> <FaGithub/></a>
               </IconContext.Provider>
               
              
            </div>
          </div>
        </div>
    )
}
