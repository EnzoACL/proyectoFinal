import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {get} from '../aux_api'
import { Context, ContextProvider } from './Storage/Storage';

function LoginPage() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    
    const [data, setData] = useContext(Context)

    const getUserName = (event) => {
        setUserName(event.target.value)
    }
    const getUserPassword = (event) => {
        setPassword(event.target.value)
    }
    
    async function getData() {
        const users = await get("http://localhost:4000/name/V0.0/users/");
        // Bucle para obtener el ID del usuario usando su nombre
        for (let idx = 0; idx < users.length; idx++) {
            if (userName === users[idx].name) {
                const dataCopy = { ...data, user: userName, password, userId: users[idx].id }
                setData(dataCopy)
            }
        }
    }
    
 

    return (
        <>            
            <h1>¡Bienvenido!</h1>
            <p>Usuario:</p>
            <input type="text" onChange={getUserName} />
            <p>Contraseña:</p>
            <input type="text" onChange={getUserPassword} />            
            <input type="button" value="Entrar" onClick={getData} />
            <p><Link to={"/register"}><a>¿No tienes una cuenta?¡Registrate!</a></Link></p>
            


            
        </>
    );
}
export default LoginPage;