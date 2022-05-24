import { useState } from "react";

function Registrerpage() {
    const [userName, setUserName] = useState();
    const getUserName = (event) => {
        setUserName(event.target.value);
    }    
    const [password, setPassword] = useState();
    const getPassword = (event) => {
        setPassword(event.target.value);
    }

    

    return (
        <>
            <h1>Registrate</h1>
            <p>Uusuario:</p>
            <input type="text" onChange={getUserName} />
            <p>Contraseña:</p>
            <input type="text" onChange={getPassword}/>
        </>
    )
}
export default Registrerpage