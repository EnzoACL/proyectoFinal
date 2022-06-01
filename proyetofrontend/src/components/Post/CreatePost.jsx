import { useContext, useState } from 'react'
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
    const publicationReady = (JSON.stringify({ content: postBody }));

    function postPublication() {
        const url = "http://localhost:4000/name/V0.0/publication/"
        //Aqui usamos el context para hacer el post con aut
        const tokenPost = authToken(data.userId, data.password)
        authPost(url,tokenPost,publicationReady)
    }
    function showCreatePost() {
        if (postInterface === "") {
            setPostInterface(
                <>  
                    <form onSubmit={postPublication}>
                        <p>
                            <label for="postTitle">Titulo del post:</label>
                            <input type="text" id="postTitle" name="postTitle"/>
                        </p>
                        <p>
                            <label for="postContent">Contenido del post</label>
                            <textarea type="text" id="postContent" name="postContent" onChange={getPostContent}/>
                        </p>  
                        <p>
                            <input type="submit" value="Publicar post" onClick={postPublication} />
                        </p>
                    </form>
                    
                    
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

//Creamos handler para mostrar interfaz de crear post.
//Con un context usamos una funcion que hace el post y cambia
//la interfaz a algo que indique que se ha creado el post.
