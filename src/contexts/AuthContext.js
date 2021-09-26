
import React, { createContext, useEffect, useState } from "react"
import { GoogleAuthProvider } from "firebase/auth"
import { auth } from "../services/fireabase"

export const AuthContext = createContext({})

export function AuthContextProvider(props) {

    const [user, setUser] = useState()

    const [contador, setContador] = useState(1)


    const [slide, setSlide] = useState({})

    const [request, setRequest] = useState(false)


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

        const result = await auth.signInWithPopup(provider)

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
            user,
            authenticationUser,
            contador, slide,
            setContador,
            setSlide,
            request,
            setRequest
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}
