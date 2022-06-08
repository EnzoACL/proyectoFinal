import { useState } from 'react';
import { get } from '../../aux_api';


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
        const users = await get("http://localhost:4000/name/V0.0/users/");
        const usersNames = users.map(
            (item) => item.name
        );
        const filteredUsers = usersNames.filter(filterFunction)
        const arrangedUsersSearch = filteredUsers.map((item) => <ul>{item}</ul>)
        setUserList(arrangedUsersSearch);      
    }

    return (
        <>
            <h1>Ejemplo de buscador</h1>
            <input placeholder="Buscar..." onChange={getUserNameOf}/>
            <input type="button" value="🔍" onClick={startSearch} />
            <ul>{userList}</ul>
        </>
    )
}
export default SearchBar