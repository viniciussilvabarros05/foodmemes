import React from "react"
import "../styles/Home.scss"
import Logo from "../assets/images/logo.svg"
import FoodSvg from "../assets/images/Food_Memes.svg"

import Google from "../assets/images/google-icon.svg"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"

import { useAuth } from "../hooks/useAuth"

export function Home() {

    const history = useHistory()
      
  
    const { user, authenticationUser } = useAuth()
    async function handleConectionUser(event) {
        event.preventDefault()

        await authenticationUser()

        if (user) {
           return history.push("/Menu")
        }

      
       
      
    }

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
                   {user ?<Link to ="/Menu">FAZER PEDIDO</Link>: "" } 
                </form>
            </div>
        </div>
    )
}