import React from "react";
import imageerror from './../../assests/images/notfound.png'

export default function Expectation (){
    return <>
    
     <div>
        <img className="w-100 h-100" src={imageerror} alt="" />
     </div>
    </>
}