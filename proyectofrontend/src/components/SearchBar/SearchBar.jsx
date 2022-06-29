import { useState } from 'react';
import { get } from '../../aux_api';
import UserData from '../UserData/UserData';


//Barra de busqueda. Se hace un get de los usuarios y se filtra por nombre.
function SearchBar() {
    const [userList, setUserList] = useState("");
    const [userNameOf, setUserNameOf] = useState("");
    
    const getUserNameOf = (event) => {
        setUserNameOf(event.target.value)
        
    }

    /**
     * 
     * @param {array} item 
     * @returns Nombres que coinciden con lo que hay en el input.
     */
    function filterFunction(item) {
         if (item.includes(userNameOf)) {
            return item
        }       
    }
    
    
    async function startSearch() {
        const idOfSearchedUsers = []
        const users = await get("http://localhost:4000/name/V0.0/users/"); 
        const usersNames = users.map(
            (item) => item.name
        );
        const filteredUsers = usersNames.filter(filterFunction)
        for (let item of filteredUsers) {
            for (let idx = 0; idx < Object.keys(users).length; idx++){
                if (item === users[idx].name) {
                    idOfSearchedUsers.push(users[idx].id);
                } 
            }
        }
        console.log(idOfSearchedUsers);
        setUserList(
            <>
            {
                idOfSearchedUsers.map((id) => (
                    <>
                        <div key={id}>
                            <p><UserData userId={id} /></p>    
                        </div>
                    </>
                ))
            }
                
            </>
        );     
    }

    return (
        <>
            <h1>🔍 Buscador</h1>
            <input placeholder="Buscar..." onChange={getUserNameOf}/>
            <input type="button" value="🔍" onClick={startSearch} />
            <ul>{userList}</ul>
        </>
    )
}
export default SearchBar