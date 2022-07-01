import { useState } from 'react';
import { get } from '../../aux_api'
import UserData from '../UserData/UserData';

 function Comments({postId}) {
    const [commentsShow, setCommentsShow] = useState ("")
    //const commentsFromPostId = 1 //valor que determina el post que es
    const arrayCommentsId= []
    const arrayCommentsContent = []
    
     async function showComments() {
         const commentsFromPost = await get(`http://localhost:4000/name/V0.0/comments/${postId}`)
         if (commentsShow === "") {
             setCommentsShow(
                 <>
                     <UserData userId={commentsFromPost[0].idfromusercomment} />
                      {commentsFromPost[0].content}
                 </>
             )
         } else {setCommentsShow("")} 
     }
    return (
        <>
            <input type="button" value="Ver comentarios" onClick={showComments}/>
            <p>{commentsShow}</p>
        </>
    )
}

export default Comments