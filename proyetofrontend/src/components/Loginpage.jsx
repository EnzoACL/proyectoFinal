import { useEffect, useState } from 'react';


function LoginPage ({dataSetter}) {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

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
            })
        },
        [userName, password]
    )

    return (
        <>
            <h1>Log in</h1>
            <p>User:</p>
            <input type="text" onChange={getUserName} />
            <p>Password:</p>
            <input type="text" onChange={getUserPassword}/>
        </>
    );
}
export default LoginPage;