import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {get} from '../aux_api'
import { Context, ContextProvider } from './Storage/Storage';
import {urls} from '../defines/defines'


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
        //const users = await get("http://localhost:4000/name/V0.0/users/");
        const users = await get(urls[3])
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
            <div className='login'>
                <div className='divlogin'>
                    <h1>¡Bienvenido!</h1>
                    <a>Test: user: Manuel pass: 1</a>
                    <p>Usuario:</p>
                    <input type="text" className='input-text' onChange={getUserName} />
                    <p>Contraseña:</p>
                    <input type="text" className='input-text' onChange={getUserPassword} />            
                    <p><input type="button" value="Entrar" className='input-log' onClick={getData} /></p>
                    <p><Link to={"/register"}><a>¿No tienes una cuenta?¡Registrate!</a></Link></p>
                </div>
            </div>
        </>
    );
}
export default LoginPage;