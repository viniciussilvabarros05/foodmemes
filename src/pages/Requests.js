import React from "react";
import { Menubar } from "../components/Menu-bar";
import "../styles/pedidos.scss"

export function Requests() {
    return (
        <div className="container">
            <Menubar></Menubar>
            <div className="requests-list">

            </div>

            <footer>
                <h1>Aqui está o footer</h1>
            </footer>
        </div>
    )
}