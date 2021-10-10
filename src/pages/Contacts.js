import React from "react";
import { Menubar } from "../components/Menu-bar";


import instagram from "../assets/images/instagram.png"
import github from "../assets/images/github.png"
import linkedin from "../assets/images/linkedin.png"

export function Contacts() {
    return (
        <div className="container">
            <Menubar></Menubar>
            <div>
                <div className="card contacts">

                    <div>
                        <div className="content-contacts">
                            <a target="_blank" href="https://www.linkedin.com/in/vinicius-barros-5b616520a">
                                <div>
                                    <button className="facebook">
                                        <img src={linkedin} />
                                    </button>
                                  
                                </div>
                            </a>

                            <a target="_blank" href="https://github.com/viniciussilvabarros05">
                                <div>
                                    <button className="twitter">
                                        <img src={github} />
                                    </button>
                                    
                                </div>
                            </a>
                            <a target="_blank" href="https://www.instagram.com/vini_silva1973/">
                                <div>
                                    <button className="instagram">
                                        <img src={instagram} />
                                    </button>
                              
                                </div>

                            </a>
                        </div>


                    </div>


                </div>

            </div>
        </div>
    )
}