import React, { useContext } from "react";
import { Menubar } from "../components/Menu-bar";
import "../styles/Cart.scss"
import Carrinho from "../assets/images/Carrinho.png"
import { Payment } from "../components/Payment";
import { AuthContext } from "../contexts/AuthContext";
export function Cart() {
    
    const { request, order, setOrder, setRequest, setValueItem } = useContext(AuthContext)



    function ConfirmAll() {
    
        setValueItem("")
        setRequest(true)
       
       
        
    }


    return (

        <div className={`container ${request ? "blur-payment-view" : ""}`}>
            <Menubar></Menubar>

            <div className="cart-list">

                <div className="list">
                    <img src={Carrinho} />


                    {
                        order.map((itemOrder, index) => {



                            index = index + 1
                            itemOrder.id = index


                            return (
                                <div key={index} className="card card-cart">


                                    <img src={itemOrder.img} />

                                    <div className="request-description-card">
                                        <div>{index}</div>
                                        <div>{itemOrder.name}</div>
                                        <div>Valor: {itemOrder.value}</div>

                                    </div>

                                    <div className="buttons-request">
                                        <button index={index} onClick={
                                            
                                            (event) => {
                                                const id = parseInt( event.target.getAttribute("index"))
                                                setRequest(true)
                                                setValueItem(id)
                                                console.log(id)
                                               
                                            }
                                        } >CONFIRMAR</button>
                                        <button onClick={() => setOrder(order.filter(item => item.id !== index))}>CANCELAR</button>
                                    </div>

                                </div>

                            )

                        })
                    }


                    <button onClick={ConfirmAll}>CONFIRMAR TODOS</button>
                </div>

            </div>
            <footer>
                <h1>Aqui está o footer</h1>
            </footer>

            {request ? <Payment></Payment> : ""}
        </div>


    )
}