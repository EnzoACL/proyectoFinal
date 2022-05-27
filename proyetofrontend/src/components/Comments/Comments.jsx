import { useState } from 'react';
import { get } from '../../aux_api'

 function Comments() {
    const [commentsShow, setCommentsShow] = useState ("")
    const commentsFromPostId = 1
  
    
     async function showComments() {
        const commentsFromPost = await get(`http://localhost:4000/name/V0.0/comments/${commentsFromPostId}`)
        const commentsString = JSON.stringify(commentsFromPost);
         if (commentsShow === "") {
            setCommentsShow(commentsString)
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