import React from "react";
import { Menubar } from "../components/Menu-bar";
import "../styles/pedidos.scss"
import "../styles/Cart.scss"

export function Requests() {
    return (
        <div className="container">
            <Menubar></Menubar>
            <div className="requests-list">
                <div className="card card-request">


                    <img />

                    <div className="request-description-card">
                        <div></div>
                        <div></div>
                        <div>Valor: </div>

                    </div>



                </div>

            </div>
            <footer>
                <h1>Aqui está o footer</h1>
            </footer>
        </div>
    )
}