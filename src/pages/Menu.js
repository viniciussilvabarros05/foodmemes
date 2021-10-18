import React, { useContext, useEffect } from "react"



import FoodSvgRed from "../assets/images/FoodLogoRed.svg"

import "../styles/Menu.scss"


import { Card } from "../components/card"
import { Menubar } from "../components/Menu-bar"
import { AuthContext } from "../contexts/AuthContext"
import { ModelRequest } from "../components/ModelRequest"
import { Footer } from "../components/footer"




export function Menu() {

 

    const { request } = useContext(AuthContext)
    const { contador, setSlide, setContador, animation, Cardapio } = useContext(AuthContext)
    const { name, img, desc, value } = Cardapio[contador]

    
    
    
    



    useEffect(() => {
       
        if (contador === 0) {

            setContador(Cardapio.length - 1)

            setSlide({
                name: name,
                img: img,
                desc: desc,
                quant: 1,
                value: value
            })
        }
        setSlide({
            id: 0,
            name: name,
            img: img,
            desc: desc,
            quant: 1,
            value: value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

        })
    }, [contador])



    function nextSlide(i) {


        if (contador === Cardapio.length - 1) { //se contador chegar a ultima posição do cardápio
            if (i > 0) {
                setContador(1) // a proxima posição volta será a primeira
            } else {
                setContador(contador + i)
            }
        } else {
            setContador(contador + i)
        }

    }


    return (
        <>
            <div className="container">

                <Menubar></Menubar>

                <div className={`content-menu ${animation === 'animation' ? "Animation1" : ""}`}>


                    <div className='Logo'>
                        <div >

                            <img src={FoodSvgRed} />
                        </div>


                    </div>

                    <main>
                        <span onClick={() => nextSlide(-1)}>&#10094;</span>
                        <div className="slide">


                            <Card>
                            </Card>


                        </div>
                        <span onClick={() => nextSlide(1)}>&#10095;</span>
                    </main>

                    <div className="logo-page-end">
                        <div>

                        </div>
                    </div>
                </div>


                <Footer></Footer>

                {request ? < ModelRequest></ModelRequest> : ""}
            </div>

        </>
    )
}
