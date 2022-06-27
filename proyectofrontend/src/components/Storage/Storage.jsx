import LoginPage from "../Loginpage";
import { useState, createContext } from "react";

export const Context = createContext();

export function ContextProvider({ children }) {
    const  data  = useState()
    return (
        <>
            <Context.Provider value={data}>           
                {children}
            </Context.Provider>
        </>
    )
}

//para usar context data.user data.password data.userId en return: 
// <LoginPage dataSetter={setData}/>
