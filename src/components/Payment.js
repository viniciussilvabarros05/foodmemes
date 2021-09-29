import userEvent from "@testing-library/user-event"
import React, { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import "../styles/CardPayment.scss"

export function Payment( props) {


const {setRequest,user, order,valueItem} = useContext(AuthContext)
    return ( 
        <div   onClick = {
            (event)=>{

          const attribute = event.target.getAttribute("class")

          if(attribute === "modelPayment")
            setRequest(false)}}

             className="modelPayment">
          <div className = "card-payment">
              <h1>Pagamento</h1>
            
              <form>
                <label>Escolha a forma de pagamento: </label>
              <select >
                  <option>
                      visa
                  </option>
                  <option>
                        boleto
                  </option>
                  <option>
                        carnê
                  </option>
                  <option>
                        mastercard
                  </option>
                  <option>
                        cielo
                  </option>
                  <option>
                        pix
                  </option>
              </select>

              <input type="text" value="0000-0000-000-00"></input>
             
              <input type="text" value = {user.name}></input>
              <h1>Valor total: {order[valueItem-1].value}</h1>
              <p>atenção, não é necessário colocar realmente as informações</p>
              </form>
              
          
             
            <button>PAGAR</button>
            <button onClick = {()=>setRequest(false)}>CANCELAR</button>
          </div>
        </div>


    )
}