import LoginPage from "../Loginpage";
import { useState, createContext } from "react";

export const Context = createContext();

export function ContextProvider({ children }) {
    const [data, setData] = useState({
        user: "",
        password: "",
        userId: "",
    });
    
    return (
        <>
            <LoginPage dataSetter={setData} />
            <Context.Provider value={data}>
                {children}
            </Context.Provider>
        </>
    )
}

