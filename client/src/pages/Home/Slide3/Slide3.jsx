import React from 'react'
import "./Slide3.css"
import video from './advaita.mp4'

export default function Slide3() {

    return (
        <div data-aos="slide-up" className="container-slide-3">
            {/* <audio autoPlay loop >
                <source src="https://cxxxii.fccaebbcfcaeddba.xyz/?file=M3R4SUNiN3JsOHJ6WWQ3aTdPRFA4NW1rRVJIOG50b05ySjRZendVaEFLVkp0Wm91eGErVUpzcEhJS2dzMklhMld2aFI1aXFUVU5TZE1RYWR0OHAyQ1ZLSDQ5TXZ0RERaK290dVZOa2lFQkR4bCtPY2hqQmlnVnF3TFA3VUdxMUNlSFYrNWhKRjNqYkFpYVB5dkZDcWxYeTZvbmVDV3k5YmtCRTZjL2pBb3RsUDBHYVdSdG1pMW9nVnBEU2E5cE5FMzYzTTRsS3ZsK3B0N29nbUdGZGlMcFJmalE9PQ%3D%3D" type="audio/mpeg"/>
            </audio> */}
            <video autoPlay muted loop id="myVideo">
                <source src={video} type="video/mp4" />
            
            </video>
            
          
           <p id="events">• Explore • Endeavour • Enjoy •</p>
        </div>
    )
}
