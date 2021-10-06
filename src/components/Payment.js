
import React, { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import "../styles/CardPayment.scss"

export function Payment(props) {



  const { setRequest, user, order, valueItem, setOrder, listPaymented } = useContext(AuthContext)

  function PriceTotal(total, num) {
    return total + num
  }

  
  
  
  function ConfirmAll() {
    const arrayPrice = []

    order.forEach(item => {
      let value = parseInt(item.value.replace(/\D+/g, "") / 100)
      arrayPrice.push(value)
    })



    setRequest(true)
    return (arrayPrice.reduce(PriceTotal).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }))



  }


  function pushItemPaymented(i) {
  
      listPaymented.push(order[i])
      setRequest(false)
      setOrder(order.filter(item => item.id !== i+1))

    

  }


  return (
    <div onClick={
      (event) => {

        const attribute = event.target.getAttribute("class")

        if (attribute === "modelPayment")
          setRequest(false)
      }}

      className="modelPayment">
      <div className="card-payment">
        <h1>Pagamento</h1>

        <form readOnly>
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

          <input type="text" value={user.name}></input>
          <h1>Valor total: {!valueItem ? ConfirmAll() : order[valueItem - 1].value}</h1>
          <p>atenção, não é necessário colocar realmente suas informações</p>
        </form>



        <button onClick={ () => {
          if (valueItem) {
            pushItemPaymented(valueItem - 1)
          } else {
             listPaymented.push(...order)
            setRequest(false)
            setOrder([])
         
          }
        }}>PAGAR</button>


        <button onClick={() => setRequest(false)}>CANCELAR</button>
      </div>
    </div>


  )
}