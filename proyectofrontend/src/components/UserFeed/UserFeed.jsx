import { Context } from '../Storage/Storage'
import { useContext, useState, useEffect } from 'react'
import { get, dateArrange } from '../../aux_api';
import UserData from "../UserData/UserData";
import Buttons from "../ButtonsRRSS/Buttons";
import ShowComments from "../Comments/ShowComments";
import {urls} from '../../defines/defines'

function UserFeed() {
    const [postsOfFeed, setPostsOfFeed] = useState(<h1>Cargando feed...</h1>);
    const [data, setData] = useContext(Context)  
    //para usar context data.user data.password data.userId

    async function getPostsOfFriends() {

        const postsOfFriendsArray = []

        
        //Se compara los id de lista de amigos y usuarios y se saca los nombres de los amigos
        //const friendsOfUser = await get(`http://localhost:4000/name/V0.0/friends/${data.userId}`)
        const friendsOfUser = await get(urls[6]+`${data.userId}`)
        const arrayConfirm_userid = friendsOfUser.map(
            item => item.confirm_userid
        )
        for (let item of arrayConfirm_userid) {
            
            //const postsOfFriends = (await get(`http://localhost:4000/name/V0.0/publicationsofuser/${item}`))
            const postsOfFriends = await get(urls[7]+`${item}`)
            for (let item of postsOfFriends) {
                postsOfFriendsArray.push(item)
            }
        }        
        postsOfFriendsArray.sort(
            function (x, y) {
                return y.timeposted - x.timeposted
            }
        );
        setPostsOfFeed(
            <p>
                {
                
                    postsOfFriendsArray.map((post) => (
                        <>
                            <div key={post.id}>
                                <UserData userId={post.idfromuser} />
                                <p>{post.content}</p>
                                <p>{dateArrange(post.timeposted)}</p>
                                <p><Buttons></Buttons></p>
                                <p><ShowComments postId={post.id} /></p>
                            </div>
                        </>
                    ))
                }
            
             
            </p>
        )
    }
 
    useEffect(() => {
        const interval = setInterval(() => {
            getPostsOfFriends()}, 1000);
        return () => clearInterval(interval);
      }, []);
    return (
        <>
            {postsOfFeed}            
        </>
    )
}
export default UserFeed



