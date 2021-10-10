

import instagram from "../assets/images/instagram.png"
import github from "../assets/images/github.png"
import linkedin from "../assets/images/linkedin.png"
import { Link } from "react-router-dom"
import FoodSvg from "../assets/images/Food_Memes.svg"

import Logo from '../assets/images/Menu.png'
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { auth } from "../services/fireabase"

export function Menubar() {


    let menuResponseActived = false


    function SignOut() {
        auth.signOut()

        document.location.reload()

    }

    const { order, user, listPaymented } = useContext(AuthContext)


    return (<div>
        <div className="content-contacts">
            <a target="_blank" href="https://www.linkedin.com/in/vinicius-barros-5b616520a">
                <div>
                    <button className="facebook">
                        <img src={linkedin} />
                    </button>
                    <span>Vinicius Silva Barros</span>
                </div>
            </a>

            <a target="_blank" href="https://github.com/viniciussilvabarros05">
                <div>
                    <button className="twitter">
                        <img src={github} />
                    </button>
                    <span>viniciussilvabarros05</span>
                </div>
            </a>
            <a target="_blank" href="https://www.instagram.com/vini_silva1973/">
                <div>
                    <button className="instagram">
                        <img src={instagram} />
                    </button>
                    <span>@vini_silva1973</span>
                </div>

            </a>
        </div>
        <div className="content-bar">


            <div className="menu-bar">

                <div className="content-logo-menu">
                    <img src={FoodSvg} />

                </div>

                <div onClick={() => {

                    if  (menuResponseActived === true) {
                     menuResponseActived = false
                    } else {
                     menuResponseActived = true
                    }

                }}

                    className={`"" ${ !menuResponseActived? "menu-responsive" : ""}`}

                >
                    <img src={Logo} />
                    <div className="menu-links-responsive">
                        <Link to="/">HOME</Link>
                        <Link to="/Menu">MENU</Link>
                        <Link to="/contatos">CONTATOS</Link>
                        <Link to="/carrinho"> <span>{order.length} </span>CARRINHO</Link>
                        <Link Style={listPaymented.length === 0?"": 
                   "background-color:#ff4800;;box-shadow: 1px 1px 15px 5px #a3340883; animation:button  0.5s infinite linear alternate-reverse;"} to="/pedidos">PEDIDOS</Link>


                    </div>


                </div>

                <div className="menu-links">
                    <Link to="/">HOME</Link>
                    <Link to="/Menu">MENU</Link>
                    <Link to="/contatos">CONTATOS</Link>
                    <Link to="/carrinho"><span>{order.length} </span> CARRINHO</Link>
                   <Link Style={listPaymented.length === 0?"": 
                   "background-color:#ff4800;;box-shadow: 1px 1px 15px 5px #a3340883; animation:button  0.5s infinite linear alternate-reverse;"} to="/pedidos">PEDIDOS</Link>

                </div>

                <div className="content-avatar">
                    <img src={user.avatar}/>
                    <button onClick={SignOut}>Logout</button>
                </div>
            </div>

        </div>
    </div>
    )
}