import { useContext, useEffect, useState } from 'react'
import { Context } from '../Storage/Storage'
import { authPost } from '../../aux_api';
import { authToken } from '../../aux_api';

function CreatePost() {
    const data = useContext(Context);
    const [postInterface, setPostInterface] = useState("")
    const [postBody, setPostBody] = useState("")
    
    const getPostContent = (event) => {
        setPostBody(event.target.value)
    }
    
    const publicationReady = (JSON.stringify({idfromuser: data.userId, content: postBody }));
  

    function postPublication() {
        
        const url = "http://localhost:4000/name/V0.0/publication/"
        //Aqui usamos el context para hacer el post con aut
        const tokenPost = authToken(data.user, data.password)
        authPost(url,tokenPost,publicationReady)
    }

    function showCreatePost() {
        if (postInterface === "") {
            setPostInterface(
                <>  
                                        
                        <p>Contenido del post</p>
                        <p>
                            <textarea type="text" id="postContent" name="postContent" onChange={getPostContent} />
                        </p>
                        <p>
                            
                            <input type="button" value="Publicar post" onClick={postPublication} />
                        </p>
                    
                    
                    
                </>
            )
        } else {setPostInterface("")}
        
        

    }
    
    return (
        <>
            <h1>Crear post</h1>
            <input type="button" value="Crear post" onClick={showCreatePost} />
            {postInterface}
        </>
    )
}

export default CreatePost


