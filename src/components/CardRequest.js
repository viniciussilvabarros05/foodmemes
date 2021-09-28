import React, { useContext} from "react"
import { AuthContext } from "../contexts/AuthContext"

import "../styles/RequestCard.scss"

export function CardRequest() {
    const { setRequest, order, setOrder} = useContext(AuthContext)
    

    const { slide } = useContext(AuthContext)

    function SendRequestToCart(event){

        event.preventDefault()

        const {name, value, img, desc, id} = slide

        const itemOrder ={
            id: id,
            name: name,
            desc: desc,
            img: img,
            value:value,
           
        }

        order.push(itemOrder)
        setRequest(false)
        
    }
    
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

                <div className="total"> <p>Valor: {slide.value}</p></div>



                <div className="description-card"><h3> {slide.desc}</h3></div>


                <button onClick = {SendRequestToCart}>ADICIONAR AO CARRINHO</button>
                <a onClick={()=>{setRequest(false)}} className = "button-cancel">Cancelar Pedido</a>
            </form>



        </div>


    )
}