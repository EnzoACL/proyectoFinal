import LoginPage from "../Loginpage";
import { useState, createContext } from "react";

export const Context = createContext();

export function ContextProvider({ children }) {
    const [data, setData] = useState({
        user: "",
        password: "",
        userId: "",
        loggedIn: false,
    });
    return (
        <>
            <LoginPage dataSetter={setData}/>
            <Context.Provider value={data}>           
                {children}
            </Context.Provider>
        </>
    )
}

//para usar context data.user data.password data.userId en return: 
