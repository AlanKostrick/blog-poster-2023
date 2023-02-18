import React, { createContext, useEffect, useReducer } from 'react';

import { authReducer } from './LoginReducer';

export const LoginContext = createContext();

const LoginContextProvider = (props) => {

    const [authSession, authDispatch] = useReducer(authReducer, {
        name: window.sessionStorage.getItem('name'),
        token: window.sessionStorage.getItem('token')
    });


    useEffect(() => {
        window.sessionStorage.setItem('name', window.sessionStorage.getItem('name'));
        window.sessionStorage.setItem('token', window.sessionStorage.getItem('token'));
    }, [authSession]);

    return (
        <LoginContext.Provider value={{ authSession, authDispatch }} >
            {props.children}
        </LoginContext.Provider>
    )

}

export default LoginContextProvider;