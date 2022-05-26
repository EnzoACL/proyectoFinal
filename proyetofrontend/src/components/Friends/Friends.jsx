import { useState } from 'react';
import { get } from '../../aux_api'
import { Context } from '../Storage/Storage'
import { useContext } from 'react'


export function Friends() {
    const data = useContext(Context)
    const [friendList, setFriendList] = useState();
    const friendListArray = []

    async function getFriendsOf() {
        //Se compara los id de lista de amigos y usuarios y se saca los nombres de los amigos
        const friendsOfUsers = await get(`http://localhost:4000/name/V0.0/friends/${data.userId}`);        
        const users = await get("http://localhost:4000/name/V0.0/users/");       
        for (let item of users)  {
            for (let thing of friendsOfUsers) {
                if (item.id === thing.confirm_userid)
                    friendListArray.push(item.name);
            }            
        }                   
        setFriendList(friendListArray);
    }
    
    return (
        <>
            <h1>Friends</h1>
            <input type="button" value="Lista amigos" onClick={getFriendsOf}/>
            <p>{friendList}</p>
        </>
    )
}

export default Friends

