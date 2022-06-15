import { useContext, useState } from "react";
import UserData from "../UserData/UserData";
import Buttons from "../ButtonsRRSS/Buttons";
import ShowComments from "../Comments/ShowComments";
import { get, dateArrange } from '../../aux_api'
function Posts({ userId }) {
    const [listOfPost, setListOfPost] = useState("")

    

    async function getPostOf(){
        const postsOfUser = await get(`http://localhost:4000/name/V0.0/publicationsofuser/${userId}`)
        console.log(postsOfUser);
        const postsOfUserReversed = [...postsOfUser].reverse();
        setListOfPost(<p>
            {
                
                postsOfUserReversed.map((post) => (
                    <>
                        <div key={post.id}>
                            <UserData userId={userId}/>
                            <p>{post.content}</p>
                            <p>{dateArrange(post.timeposted)}</p>
                            <p><Buttons idFromPost={post.id} /></p>
                            <p><ShowComments postId={post.id}/></p>
                        </div> 
                    </>
                ))
            }
            
             
             </p>)
    }
    return (
        <>
            
            <input type="button" value="Posts de usuario " onClick={getPostOf} />
            <p>{listOfPost}</p>

           
        </>
    )
}
export default Posts

