import React, { useEffect } from "react"
import "../styles/Home.scss"
import Logo from "../assets/images/logo.svg"
import FoodSvg from "../assets/images/Food_Memes.svg"

import Google from "../assets/images/google-icon.svg"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"
import { useContext } from "react"


import { useAuth } from "../hooks/useAuth"
import { db } from "../services/fireabase.js"
export function Home() {

    const history = useHistory()
    const { setCardapio, Cardapio } = useContext(AuthContext)








    const { user, authenticationUser } = useAuth()

    
    async function handleConectionUser(event) {
       
        event.preventDefault()

        await authenticationUser()

        db.collection("Cardápio").doc("Lanches").get().then(doc => {
            setCardapio(doc.data().Cardapio)
        

            console.log(Cardapio)

        })






        if (user) {
            return history.push("/Menu")

        }




    }
    useEffect(()=>{
        if(user){
            db.collection("Cardápio").doc("Lanches").get().then(doc => {
                setCardapio(doc.data().Cardapio)
    
            })
        }

    }, [user])

 

    return (
        <div className="page-home">

            <aside>
                <img src={FoodSvg}></img>
                <h1>Um site de lanches divertidos com memes Br, aproveite a estadia, em breve iremos inaugurar</h1>
            </aside>
            <div className="content-form">
                <form>
                    <div className="content-logo">
                        <img src={Logo} />
                    </div>

                    <button className="login-google" onClick={handleConectionUser}> <img width="10px" src={Google} />Login with account google</button>
                    {user ? <Link to="/Menu">FAZER PEDIDO</Link> : ""}
                </form>
            </div>
        </div>
    )
}