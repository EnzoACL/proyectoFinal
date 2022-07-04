import { useState } from "react";
import { post } from "../aux_api.js"
import { Link } from "react-router-dom"
function Registrerpage() {
    const [userName, setUserName] = useState();
    const getUserName = (event) => {
        setUserName(event.target.value);
    }    
    const [password, setPassword] = useState();
    const getPassword = (event) => {
        setPassword(event.target.value);
    }
    const [userOrGroup, setUserOrGroup] = useState("");

    function userIsPerson() {
        setUserOrGroup(true)
    }
    function userIsGroup() {
        setUserOrGroup(false)
    }
    
    function registerUser() {
        const url = "http://localhost:4000/name/V0.0/users/"
        const data = JSON.stringify({ name: userName, password: password, isgroup: userOrGroup });
        post(url, data)          
    }

    

    return (
        <>
            <div className="login">
                <div className="divlogin">
                    <h1>Registrate</h1>
                    <p>Uusuario:</p>
                    <input type="text" className='input-text' onChange={getUserName} />
                    <p>Contraseña:</p>
                    <input type="text" className='input-text' onChange={getPassword} />
                    <p><Link to={`/`}><input type="button" value="Registrarse" className='input-log' onClick={registerUser} /></Link></p>

                    <p>
                        <a>Registrarse como usuario</a>
                        <input type="checkbox" value="Registrarse como usuario" onClick={userIsPerson} />
                    </p>
                    <p>
                        <a>Registrarse como grupo</a>
                        <input type="checkbox" value="Registrarse como grupo" onClick={userIsGroup} />
                    </p>
                </div>
            </div>
            
        </>
    )
}
export default Registrerpage