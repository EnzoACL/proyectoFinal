import React from "react"
import { useContext } from "react"
import LoginPage from "../Loginpage"
import { Context } from '../Storage/Storage'

function Authorization({ children }) {
    
    const [data, setData] = useContext(Context)

    return (
        <>
            <div className="logpage">
                <div className="login">
                { data.userId ? children : <LoginPage/>}
                </div>
            </div>
        </>
    )
}

export default Authorization