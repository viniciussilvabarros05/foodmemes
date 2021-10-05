import React, { useContext, useState } from "react";
import { Menubar } from "../components/Menu-bar";
import "../styles/pedidos.scss"
import "../styles/Cart.scss"
import { AuthContext } from "../contexts/AuthContext";

export function Requests() {

    const { order, setOrder, listPaymented } = useContext(AuthContext)
    let dataAtual
    let data = new Date();
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();
    dataAtual = dia + '/' + mes + '/' + ano;
    

    return (
        <div className="container">
            <Menubar></Menubar>
            <h1>Seus Pedidos:</h1>
            <div className="requests-list">
                {listPaymented.map((item,index) => {

                  
                    
                    return (
                        <div key ={index} className="card card-request">

                            <div className="request-description-card">
                               
                                <img src={item.img} />

                                <div>Valor:{item.value} </div>
                                <div>{dataAtual} </div>

                            </div>



                        </div>

                    )


                })}

            </div>

            <footer>
                <h1>Aqui está o footer</h1>
            </footer>
        </div>
    )
}