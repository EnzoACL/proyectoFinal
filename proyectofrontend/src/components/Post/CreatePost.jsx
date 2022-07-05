import { useContext, useEffect, useState } from 'react'
import { Context } from '../Storage/Storage'
import { authPost } from '../../aux_api';
import { authToken } from '../../aux_api';
import {urls} from '../../defines/defines'


function CreatePost() {
    const data = useContext(Context);
    const [postInterface, setPostInterface] = useState("")
    const [postBody, setPostBody] = useState("")
    
    
    const getPostContent = (event) => {
        setPostBody(event.target.value)
    }
    function uploadPhoto() {
        window.alert("Función aun no disponible")
    }    
    function postPublication() {
        const publicationReady = JSON.stringify({idfromuser: data.userId, content: postBody });
        console.log(publicationReady);
        //const url = "http://localhost:4000/name/V0.0/publication/"
        const url = urls[4]
        //Aqui usamos el context para hacer el post con aut
        const tokenPost = authToken(data.user, data.password)
        authPost(url,tokenPost,publicationReady)
    }

    
    
    return (
        <>  
                                        
            <p>Crear tu publicación</p>
            <input type="button" value="Subir imagen 📤" onClick={uploadPhoto}/>
            <p>
                <textarea type="text" id="postContent" name="postContent" rows="10" cols="50" onChange={getPostContent} />
            </p>
            <p>
                
                <input type="button" value="Publicar post" onClick={postPublication} />
            </p>
                    
                    
                    
        </>
    )
}

export default CreatePost


