import { useState, useContext } from "react"
import { Context } from '../Storage/Storage'
import { authPost } from '../../aux_api';
import { authToken } from '../../aux_api';
import {urls} from '../../defines/defines'

function Buttons({idFromPost}) {

    const data = useContext(Context);

    const [commentBody, setCommentBody] = useState("")
    const getCommentContent = (event) => {
        setCommentBody(event.target.value)
    }

    const [commentInterface, setCommentInterface] = useState("")    
    function showCreateComment() {
        if (commentInterface === "") {
            setCommentInterface(
                <>
                    <textarea type="text" id="commentContent" name="commentContent" onChange={getCommentContent} />
                    <input type="button" value="Publicar comentario" onClick={postComment} />                         
                </>
            )
        } else {setCommentInterface("")}
    }

    const postReady = (JSON.stringify({ content: commentBody, idfrompost: idFromPost ,idfromusercomment: data.userId}));

    function postComment() {
        
        //const url = "http://localhost:4000/name/V0.0/comment/"
        const url = urls[0]
        //Aqui usamos el context para hacer el post con aut
        const tokenPost = authToken(data.user, data.password)
        authPost(url,tokenPost,postReady)
    }




    return (
        <>
            <input type="button" value="Like" />            
            <input type="button" value="Comentar" onClick={showCreateComment}/>           
        </>
    )
}

export default Buttons