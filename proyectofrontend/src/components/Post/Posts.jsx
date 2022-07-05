import { useContext, useEffect, useState } from "react";
import UserData from "../UserData/UserData";
import Buttons from "../ButtonsRRSS/Buttons";
import ShowComments from "../Comments/ShowComments";
import { get, dateArrange } from '../../aux_api'
import {urls} from '../../defines/defines'

function Posts({ userId }) {
    const [listOfPost, setListOfPost] = useState("")

    
    useEffect(
        () => {
                async function getPostOf() {
                    //const postsOfUser = await get(`http://localhost:4000/name/V0.0/publicationsofuser/${userId}`)
                    const postsOfUser = await get(urls[5]+`${userId}`)
                    const postsOfUserReversed = [...postsOfUser].reverse();
                    setListOfPost(<p>
                        {
                    
                            postsOfUserReversed.map((post) => (
                                <>
                                    <div key={post.id}>
                                        <UserData userId={userId} />
                                        <p>{post.content}</p>
                                        <p>{dateArrange(post.timeposted)}</p>
                                        <p><Buttons idFromPost={post.id} /></p>
                                        <p><ShowComments postId={post.id} /></p>
                                    </div>
                                </>
                            ))
                        }
                
                    
                    </p>)
            }
            getPostOf();
        }, [userId]       
    )   
    return (
        <>
            
            <p>{listOfPost}</p>

           
        </>
    )
}
export default Posts

