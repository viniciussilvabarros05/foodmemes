import React from "react";
import { useRouteMatch } from "react-router-dom";
import twitter from "../assets/images/twitter-2430933_1280.png"
import instagram from "../assets/images/instagram.png"
import facebook from "../assets/images/facebook.png"
import { Link } from "react-router-dom"
import FoodSvg from "../assets/images/Food_Memes.svg"

export function Menubar() {

    const Math = useRouteMatch()
    return (<div>
        <div className="content-contacts">
            <a target="_blank" href="https://www.facebook.com/viniciussilva.silva.71">
                <div>
                    <button className="facebook">
                        <img src={facebook}/>
                    </button>
                    <span>Vinicius Silva Barros</span>
                </div>
            </a>

            <a target="_blank" href="https://twitter.com/Viniciusmarvel3">
                <div>
                    <button className="twitter">
                        <img src={twitter}/>
                    </button>
                    <span>@Viniciusmarvel3</span>
                </div>
            </a>
            <a target="_blank" href="https://www.instagram.com/vini_silva1973/">
                <div>
                    <button className="instagram">
                        <img src={instagram}/>
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