import React  from 'react'
import "./Card.css";
import {IconContext} from "react-icons";

export default function Card({user , index}) {
    return (
     <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
         <div className="curve cards" style={{backgroundImage:`url(${user.photo_url})`,backgroundRrepeat: "no-repeat",
          backgroundSize:"cover"}}> 
          <div className="footer">
              <div className="connections mb-2">
              <IconContext.Provider value={{color: 'black', size: 30}}>
                         {user.social_media.Instagram && 
                          <a rel="noreferrer" target="_blank" className="connection insta" href={user.social_media.Instagram}>
                            <i style={{fontSize: '30px', color: 'black'}} className="fab fa-instagram"></i>
                          </a>}
                          {user.social_media.Linkedin && 
                          <a rel="noreferrer" target="_blank" className="connection linkedin"href={user.social_media.Linkedin}>
                          <i style={{fontSize: '30px', color: 'black'}} className="fab fa-linkedin-in"></i>
                          </a>}
                          {user.social_media.Github && 
                        //   <Link to={user.social_media.Github}>
                          <a rel="noreferrer" target="_blank" className="connection github" href={user.social_media.Github}>
                              <i style={{fontSize: '30px', color: 'black'}} className="fab fa-github"></i>
                          </a>
                        //   </Link>
                          }
                          
             </IconContext.Provider>
              </div>
              <svg className="curve">
                      <animate to="M0,50 Q80,100 400,50 V150 H0 V50" fill="freeze" begin="dummyRect.mouseover" end="dummyRect.mouseout" dur="0.1s" id="bounce1" />
                      <animate to="M0,50 Q80,0 400,50 V150 H0 V50" fill="freeze" begin="bounce1.end" end="dummyRect.mouseout" dur="0.15s" id="bounce2" />
                      <animate to="M0,50 Q80,80 400,50 V150 H0 V50" fill="freeze" begin="bounce2.end" end="dummyRect.mouseout" dur="0.15s" id="bounce3" />
                      <animate to="M0,50 Q80,45 400,50 V150 H0 V50" fill="freeze" begin="bounce3.end" end="dummyRect.mouseout" dur="0.1s" id="bounce4" />
                      <animate to="M0,50 Q80,50 400,50 V150 H0 V50" fill="freeze" begin="bounce4.end" end="dummyRect.mouseout" dur="0.05s" id="bounce5" />
                      <animate to="M0,200 Q80,100 400,200 V150 H0 V50" fill="freeze" begin="dummyRect.mouseout" dur="0.15s" id="bounceOut" />
             </svg>
             <div className="info p-1">
             <div className="name">{user.name}</div>
             <div style={{color:"rgba(0,0,0,0.8)"}}>{user.roll}</div>
             <div className="bio">{user.description}</div>
             </div>
          </div>
          <div className="card-blur"></div>
         </div>
         
     </div>  

    )
}