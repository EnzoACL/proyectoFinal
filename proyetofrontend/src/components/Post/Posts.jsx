import { useContext, useState } from "react";
import UserData from "../UserData/UserData";
import Buttons from "../ButtonsRRSS/Buttons";
import ShowComments from "../Comments/ShowComments";
import { get } from '../../aux_api'
function Posts({ userId }) {
    const [listOfPost, setListOfPost] = useState("")
    //const arrayOfPost = []

    async function getPostOf(){
        const postsOfUser = await get(`http://localhost:4000/name/V0.0/publicationsofuser/${userId}`)
        console.log(postsOfUser);
        const arrayOfPost = postsOfUser.map(
            item => item.content
        )
        const postId = postsOfUser.map(
            item => item.id
        )
        console.log(postId)
        const arrayPostsTest = []

        function constructPosts() {
            let idx = 0
            while (arrayPostsTest.length < (arrayOfPost.length * 2)) {                
                arrayPostsTest.push(arrayOfPost[idx])
                arrayPostsTest.push(postId[idx])
                idx++
            }
            console.log(arrayPostsTest);
        }
        constructPosts();
       
   
      /* setListOfPost(<p>
            {arrayOfPost.map((arrayOfPost) => (
                <>
                    <ul>
                    {arrayOfPost}
                    <p><Buttons></Buttons></p>
                    <p><ShowComments postId={postId} /></p>
                    </ul>
                </>
            
                )
             )
           }
       </p>)*/
    }
    
    return (
        <>
            <input type="button" value="Posts de usuario " onClick={getPostOf} />
            <p>{listOfPost}</p>
           
        </>
    )
}

export default Posts

