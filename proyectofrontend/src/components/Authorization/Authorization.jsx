import React from "react"
import { useContext } from "react"
import LoginPage from "../Loginpage"
import { Context } from '../Storage/Storage'

function Authorization({ children }) {
    
    const [data, setData] = useContext(Context)

    return (
        <>
            { data.userId ? children : <LoginPage/>}
        </>
    )
}

export default Authorization