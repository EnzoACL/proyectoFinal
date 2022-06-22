import { useEffect, useState, createContext } from 'react';
import { Link } from 'react-router-dom';
import {get} from '../aux_api'

function LoginPage ({dataSetter}) {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [userId, setUserId] = useState();
    const [loggedIn, setLoggedIn] = useState(false);

    const getUserName = (event) => {
        setUserName(event.target.value)
    }
    const getUserPassword = (event) => {
        setPassword(event.target.value)
    }


    useEffect(
        () => {
            dataSetter({
                user: userName,
                password: password,
                userId: userId,
                loggedIn: loggedIn,
            })
        },
        [userName, password, userId, loggedIn]
    )
    
    async function getData() {
        const users = await get("http://localhost:4000/name/V0.0/users/");
        const usersString = JSON.stringify(users);
        // Bucle para obtener el ID del usuario usando su nombre
        for (let idx = 0; idx < users.length; idx++) {
            if (userName === users[idx].name) {               
                setUserId(users[idx].id)
                setLoggedIn(true)
             }            
        }        
    }

    return (
        <>            
            <h1>Log in</h1>
            <p>User:</p>
            <input type="text" onChange={getUserName} />
            <p>Password:</p>
            <input type="text" onChange={getUserPassword} />
            
                <input type="button" value="Entrar" onClick={getData} />
            
            
        </>
    );
}
export default LoginPage;