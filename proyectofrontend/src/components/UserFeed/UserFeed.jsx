import { Context } from '../Storage/Storage'
import { useContext, useState, useSyncExternalStore } from 'react'
import { get } from '../../aux_api';
import Posts from '../Post/Posts';


function UserFeed() {
    const [postsOfFeed, setPostsOfFeed] = useState("");
    const data = useContext(Context)
    
  
    //para usar context data.user data.password data.userId

    //Enseñar ultimos posts de gente que sigue el userId

    async function getPostsOfFriends() {
        //Se compara los id de lista de amigos y usuarios y se saca los nombres de los amigos
        const friendsOfUser = await get(`http://localhost:4000/name/V0.0/friends/${data.userId}`)
        const arrayConfirm_userid = friendsOfUser.map(
           item => item.confirm_userid
        )
        for (let item of arrayConfirm_userid) {
            const postsOfFriends = (await get(`http://localhost:4000/name/V0.0/publicationsofuser/${item}`))
            for (let item of postsOfFriends) {
                //Hay que comparar los timeposted y enseñar los posts de los amigos de mayor a menor
                //timeposted para que se muestren los mas recientes primero.
                //Tambien se puede hacer un reverse de postOfFriends y hacer un map ya que los ultimos añadidos
                //seran los mas actuales.
            }
        }

        
    } 
    return (
        <>
            <h1>Feed de {data.user} id:{data.userId}</h1>
            <input type="button" value="test" onClick={getPostsOfFriends} />
            {postsOfFeed}
        </>
    )
}

export default UserFeed



