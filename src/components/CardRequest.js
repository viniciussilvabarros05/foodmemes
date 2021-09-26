import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"

import "../styles/RequestCard.scss"

export function CardRequest() {
    const { setRequest} = useContext(AuthContext)
    

    const { slide } = useContext(AuthContext)
    return (
        <div className="Requestcard">
            <img src={slide.img} />

            <div><h2>{slide.name}</h2></div>

            <form>
                <div className="counter">
                    <a>-</a>
                    <p>0</p>
                    <a>+</a>
                </div>

                <div className="total"> <p>Valor: R$ 50.00</p></div>



                <div className="description-card"><h3> {slide.desc}</h3></div>


                <button>ADICIONAR AO CARRINHO</button>
                <a onClick={()=>{setRequest(false)}} className = "button-cancel">Cancelar Pedido</a>
            </form>



        </div>


    )
}