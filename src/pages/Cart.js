import React from "react";
import { Menubar } from "../components/Menu-bar";
import "../styles/Cart.scss"
import Carrinho from "../assets/images/Carrinho.png"
import Logo from "../assets/images/coxinha.png"
export function Cart() {
    return (

        <div className="container">
            <Menubar></Menubar>

            <div className="cart-list">

                <div className="list">
                    <img src={Carrinho} />
                    <div className="card card-cart">
                        <img src={Logo} />

                        <div className="request-description-card">
                            <div>Combo Completo</div>
                            <div>Valor: R$50.00</div>

                        </div>
                        <div className="buttons-request">
                            <button>CONFIRMAR PEDIDO</button>
                            <button>CANCELAR PEDIDO</button>
                        </div>

                    </div>


                </div>

            </div>

            <footer>
                <h1>Aqui está o footer</h1>
            </footer>
        </div>


    )
}