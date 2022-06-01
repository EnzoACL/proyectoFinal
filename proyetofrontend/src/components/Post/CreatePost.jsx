import { useContext } from 'react'
import { Context } from '../Storage/Storage'

function CreatePost() {
    const data = useContext(Context);

    return (
        <>
            <h1>Crear post</h1>
            <input type="button" value="Crear post"/>
        </>
    )
}

export default CreatePost

//Creamos handler para mostrar interfaz de crear post.
//Con un context usamos una funcion que hace el post y cambia
//la interfaz a algo que indique que se ha creado el post.
