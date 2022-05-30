import { useContext, useState } from "react";
import UserData from "../UserData/UserData";
import Buttons from "../ButtonsRRSS/Buttons";
import Comments from "../Comments/Comments";
import { get } from '../../aux_api'
function Posts({ userId }) {
    const [listOfPost, setListOfPost] = useState("")
    const arrayOfPost = []

    async function getPostOf(){
        const postsOfUser = await get(`http://localhost:4000/name/V0.0/publicationsofuser/${userId}`)
        
        for (let item in postsOfUser) {
            arrayOfPost.push(item)
        }
        setListOfPost(<p>
            {arrayOfPost.map((arrayOfPost) => (
                <>
                    <ul>
                    {arrayOfPost}
                    <Buttons></Buttons>
                    <Comments></Comments>
                    </ul>
                </>
            
            ))}
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

