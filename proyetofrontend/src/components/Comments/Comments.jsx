import { useState } from 'react';
import { get } from '../../aux_api'

 function Comments({postId}) {
    const [commentsShow, setCommentsShow] = useState ("")
    //const commentsFromPostId = 1 //valor que determina el post que es
    const arrayComments = []
    
     async function showComments() {
         const commentsFromPost = await get(`http://localhost:4000/name/V0.0/comments/${postId}`)
         const users = await get("http://localhost:4000/name/V0.0/users/");
         for (let item of commentsFromPost) {
             for (let thing of users) {
                if (thing.id === item.idfromusercomment) {
                    arrayComments.push(`${thing.name}: ${item.content}`);
                 }                       
             }                              
        }         
         if (commentsShow === "") {
             setCommentsShow(<ul>
                 {arrayComments.map((arrayComments) => (
                     <li>{arrayComments}</li>
                 ))}
             </ul>);
        } else {setCommentsShow("")}
     }
     /* Hay que usar el idfromusercomment de alguna forma para traer la info del usuario
     y asi sacar el nombre  */

    return (
        <>
            <input type="button" value="Ver comentarios" onClick={showComments}/>
            <p>{commentsShow}</p>
        </>
    )
}

export default Comments