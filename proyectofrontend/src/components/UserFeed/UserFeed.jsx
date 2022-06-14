import { Context } from '../Storage/Storage'
import { useContext, useState, useSyncExternalStore } from 'react'
import { get, dateArrange } from '../../aux_api';
import Posts from '../Post/Posts';
import UserData from "../UserData/UserData";
import Buttons from "../ButtonsRRSS/Buttons";
import ShowComments from "../Comments/ShowComments";



function UserFeed() {
    const [postsOfFeed, setPostsOfFeed] = useState("");
    const data = useContext(Context)
    const postsOfFriendsArray = []
    /**
     * Funcion usada para limpiar el array postsOfFriendsArray, si no los posts se pushearian y se repetirian.
     * @param {constant} array Se pasa como argumento un array que se quiera dejar vacio.
     */
    function clearArray(array) {
        array.splice(0, Infinity)

    }

  
    //para usar context data.user data.password data.userId

    //Enseñar ultimos posts de gente que sigue el userId

    async function getPostsOfFriends() {
        clearArray(postsOfFriendsArray)
        //Se compara los id de lista de amigos y usuarios y se saca los nombres de los amigos
        const friendsOfUser = await get(`http://localhost:4000/name/V0.0/friends/${data.userId}`)
        const arrayConfirm_userid = friendsOfUser.map(
           item => item.confirm_userid
        )
        for (let item of arrayConfirm_userid) {
            
            const postsOfFriends = (await get(`http://localhost:4000/name/V0.0/publicationsofuser/${item}`))
            for (let item of postsOfFriends) {
                postsOfFriendsArray.push(item)    
            }
        }
        
        postsOfFriendsArray.sort(
            function (x, y) {
                return y.timeposted - x.timeposted      
            }
        );
        console.log(postsOfFriendsArray);

        setPostsOfFeed(
            <p>
            {
                
                postsOfFriendsArray.map((post) => (
                    <>
                        <div key={post.id}>
                            <UserData userId={post.idfromuser}/>
                            <p>{post.content}</p>
                            <p>{dateArrange(post.timeposted)}</p>
                            <p><Buttons></Buttons></p>
                            <p><ShowComments postId={post.id}/></p>
                        </div> 
                    </>
                ))
            }
            
             
             </p>
        )
        
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



