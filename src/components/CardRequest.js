import React, { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"

import "../styles/RequestCard.scss"

export function CardRequest() {
    const { setRequest, order } = useContext(AuthContext)


    const { slide, setSlide, request, setAnimationToCart } = useContext(AuthContext)



    const { name, value, img, desc, id, quant } = slide

    function incrementQuant() {





        const increment = {
            id: id,
            name: name,
            desc: desc,
            img: img,
            Paymented: false,
            quant: quant + 1,
            value: value,

        }
        setSlide(increment)

    }

    function decrementQuant() {



        if (quant == 1) {
            return
        }

        const increment = {
            id: id,
            name: name,
            desc: desc,
            img: img,
            Paymented: false,
            quant: quant - 1,
            value: value,

        }
        setSlide(increment)
    }
    function TotalValue() {

        const Total = slide.value.replace(/\D+/g, "") * slide.quant / 100


        return Total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

    }

    function SendRequestToCart(event) {

        event.preventDefault()





        const itemOrder = {
            id: id,
            name: name,
            desc: desc,
            img: img,
            Paymented: false,
            quant: quant,
            value: TotalValue(),

        }

        order.push(itemOrder)
        setRequest(false)


        setAnimationToCart('animation')

        setTimeout(()=>setAnimationToCart(""),2000)




    }



    return (
        <div className="Requestcard">
            <img src={slide.img} />

            <div><h2>{slide.name}</h2></div>

            <form>
                <div className="counter">
                    <a onClick={decrementQuant}>-</a>
                    <p>{slide.quant}</p>
                    <a onClick={incrementQuant}>+</a>
                </div>

                <div className="total"> <p>Valor: {TotalValue()}</p></div>



                <div className="description-card"><h3> {slide.desc}</h3></div>


                <button onClick={SendRequestToCart}>ADICIONAR AO CARRINHO</button>
                <a onClick={() => { setRequest(false) }} className="button-cancel">Cancelar Pedido</a>
            </form>



        </div>


    )
}