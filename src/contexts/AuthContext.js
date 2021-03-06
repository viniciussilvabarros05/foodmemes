
import React, { createContext, useEffect, useState } from "react"
import { GoogleAuthProvider } from "firebase/auth"
import { auth } from "../services/fireabase"


export const AuthContext = createContext({})

export function AuthContextProvider(props) {

    const [Cardapio, setCardapio] = useState([])
    const [listPaymented, setListPaymented] = useState([])
    const [animation, setAnimationToCart] = useState('')
    const [valueItem, setValueItem] = useState("")
    const [user, setUser] = useState() //Setando o usuário logado

    const [contador, setContador] = useState(1) // Contador do slide para o index


    const [slide, setSlide] = useState({}) // Criando estado de slide para pegar informações por todas as páginas

    const [request, setRequest] = useState('') // Usando estado para definir se o model será mostrado ou não

    const [order, setOrder] = useState([])
   
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                const { displayName, photoURL, uid } = user


                if (!displayName || !photoURL) {
                    throw new Error("Necessário mais inforamções da conta")
                }


                setUser({
                    id: uid,
                    name: displayName,
                    avatar: photoURL
                })
            }
        })


        return () => {
            unsubscribe()
        }

    }, [])







    async function authenticationUser() {
        const provider = new GoogleAuthProvider()

        const result = await auth.signInWithPopup(provider).catch(error => {
            if (error) {
                return error
            }
        })

        if (result.user) {


            const { displayName, photoURL, uid } = result.user


            if (!displayName || !photoURL) {
                throw new Error("Necessário mais inforamções da conta")
            }



            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL
            })
        }


    }

    return (
        <AuthContext.Provider value={{
            Cardapio, setCardapio,
            user, authenticationUser,
            contador, setContador,
            slide,setSlide,
            request, setRequest,
            order,setOrder,
            valueItem,setValueItem,
            listPaymented, setListPaymented,
            animation, setAnimationToCart


        }}>
            {props.children}
        </AuthContext.Provider>
    )
}
