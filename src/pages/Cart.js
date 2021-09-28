import React, { useContext, useEffect } from "react";
import { Menubar } from "../components/Menu-bar";
import "../styles/Cart.scss"
import Carrinho from "../assets/images/Carrinho.png"
import { Payment } from "../components/Payment";
import { AuthContext } from "../contexts/AuthContext";
export function Cart() {

    const { order, setOrder } = useContext(AuthContext)


    return (

        <div className="container">
            <Menubar></Menubar>

            <div className="cart-list">

                <div className="list">
                    <img src={Carrinho} />


                    {order.map((itemOrder, index) => {

                        index = index + 1
                        itemOrder.id = index
                        return (
                            <div className="card card-cart">


                                    <img src={itemOrder.img} />

                                    <div className="request-description-card">
                                        <div>{index}</div>
                                        <div>{itemOrder.name}</div>
                                        <div>Valor: {itemOrder.value}</div>

                                    </div>
                              
                                <div className="buttons-request">
                                    <button >CONFIRMAR</button>
                                    <button onClick={() => setOrder(order.filter(item => item.id !== index))}>CANCELAR</button>
                                </div>

                            </div>
                        )
                    })
                    }


                    <button>CONFIRMAR TODOS</button>
                </div>
                   
            </div>
            <footer>
                <h1>Aqui está o footer</h1>
            </footer>
            
            {/* <Payment></Payment> */}
        </div>


    )
}