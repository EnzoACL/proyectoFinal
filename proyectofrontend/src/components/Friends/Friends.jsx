import { useState } from 'react';
import { get } from '../../aux_api'
import { Context } from '../Storage/Storage'
import { useContext } from 'react'
import UserData from '../UserData/UserData';
import { useEffect } from 'react';

export function Friends({ userId }) {
    const data = useContext(Context)
    const [friendList, setFriendList] = useState("");
    useEffect(
        () => {
            setFriendList("")
         }, [userId]
    )
    async function getFriendsOf() {
        const friendListArray = []   
        //Se compara los id de lista de amigos y usuarios y se saca los nombres de los amigos
        const friendsOfUsers = await get(`http://localhost:4000/name/V0.0/friends/${userId}`);
        const users = await get("http://localhost:4000/name/V0.0/users/");       
        for (let item of users) {
            for (let thing of friendsOfUsers) {
                if (item.id === thing.confirm_userid)
                    friendListArray.push(item);
                
            }            
        }
            if (friendList === "") {
                setFriendList( 
                    <>
                        <div className='friendlist'>
                        {
                            friendListArray.map((friends) => (
                                <>
                                    <div key={friends.id}>
                                        <p><UserData userId={friends.id} /></p>    
                                    </div>
                                </>
                            ))
                            }
                        </div>
                    </>
                )
            } else {setFriendList("")}
        }
        
    
    return (
        <>
            <input type="button" value="   👬 Amigos   " onClick={getFriendsOf}/>
            
                <p>{friendList}</p>
            
        </>
    )
}

export default Friends

