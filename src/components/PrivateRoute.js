import React from "react";

import { Redirect, Route } from "react-router";

import { useAuth } from "../hooks/useAuth";


export function PrivateRouter({ children, ...rest }) {

    const { user } = useAuth()
  

    return (<Route {...rest}

        render={ ({ location }) =>
            user ? (children) :
                (<Redirect to={{
                    pathname: "/",
                    state: { from: location }
                }}></Redirect>)
        }
    >

    </Route>)

}