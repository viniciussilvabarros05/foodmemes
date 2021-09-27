

import instagram from "../assets/images/instagram.png"
import { Link } from "react-router-dom"
import FoodSvg from "../assets/images/Food_Memes.svg"
import github from "../assets/images/github.png"
import linkedin from "../assets/images/linkedin.png"
import Logo from '../assets/images/Menu.png'

export function Menubar() {


    let actived = false
  



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

                <div onClick = {()=>{

                    if(actived === true) {
                        actived = false
                    }else{
                         actived = true
                    }

                   }} 
                   
                   className={ !actived? "menu-responsive": ""}
                   
                   >
                    <img src = {Logo}/>
                    <div className="menu-links-responsive">
                        <Link to="/">HOME</Link>
                        <Link to="/Menu">MENU</Link>
                        <Link to="/contatos">CONTATOS</Link>
                        <Link to="/carrinho">CARRINHO</Link>
                        <Link to="/pedidos">PEDIDOS</Link>
                    </div>

                </div>

                <div className="menu-links">
                    <Link to="/">HOME</Link>
                    <Link to="/Menu">MENU</Link>
                    <Link to="/contatos">CONTATOS</Link>
                    <Link to="/carrinho">CARRINHO</Link>
                    <Link to="/pedidos">PEDIDOS</Link>
                </div>


            </div>

        </div>
    </div>
    )
}