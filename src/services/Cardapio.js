import Coxinha from "../assets/images/coxinha.png"
import { db } from "./fireabase"
export let Cardapio = []


db.collection('Cardápio').doc("Lanches").onSnapshot( snapshot => {
    const CardUpdate = []
    snapshot.data().Cardapio.forEach(  element => {
      
         CardUpdate.push(element)
         console.log(Cardapio)
         Cardapio = CardUpdate
    })
    
  
})



// function add() { 
//     db.collection("Cardápio").doc("Lanches").update({
//        Cardapio
//     }).then(() => console.log("Adicionado"))


// }

// function getAllItems(){
//     db.collection('Cardápio').onSnapshot((snapshot)=>{
//         snapshot.forEach((doc)=>{

//             // console.log(doc.data())
//         })
//     })
// }

// getAllItems()