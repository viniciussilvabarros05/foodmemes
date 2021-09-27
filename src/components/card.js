import React, { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"

import "../styles/Card.scss"

export function Card(){

    const [card,setCard] = useState(false)
    const { setRequest} = useContext(AuthContext)
    function requestCard (){
        setCard(true) 
        setTimeout(()=>{
            setCard(false) 
            setRequest(true)}, 1200)
    }

     const {slide} = useContext(AuthContext)
    return(
        <div onClick={requestCard} className={`card ${card? "card-selected": ""}` }>

           <img src = {slide.img}/>
           
        <div><h2>{slide.name}</h2></div>
     
        <div className="description-card"><h3> {slide.desc}</h3></div>
        </div>


    )
}