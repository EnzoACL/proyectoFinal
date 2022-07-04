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
    
    
    
    function postPublication() {
        const publicationReady = JSON.stringify({idfromuser: data.userId, content: postBody });
        console.log(publicationReady);
        const url = "http://localhost:4000/name/V0.0/publication/"
        //Aqui usamos el context para hacer el post con aut
        const tokenPost = authToken(data.user, data.password)
        authPost(url,tokenPost,publicationReady)
    }

    
    
    return (
        <>  
                                        
            <p>Crear tu publicación</p>
            <p>
                <textarea type="text" id="postContent" name="postContent" onChange={getPostContent} />
            </p>
            <p>
                
                <input type="button" value="Publicar post" onClick={postPublication} />
            </p>
                    
                    
                    
        </>
    )
}

export default CreatePost


