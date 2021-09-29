import React, { useContext } from "react";
import { AuthContext} from "../contexts/AuthContext";
import { CardRequest } from "./CardRequest";
export function ModelRequest (){


    const { setRequest} = useContext(AuthContext)

    return(
        
        <>
            <div onClick = {
                (event)=>{

              const attribute = event.target.getAttribute("class")

              if(attribute === "ModelRequest")
                setRequest(false)}}
                 className = "ModelRequest">
            <CardRequest></CardRequest>
            </div>
           
        </>
    )
}