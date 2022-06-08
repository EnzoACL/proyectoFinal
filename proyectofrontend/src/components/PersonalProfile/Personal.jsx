import { useContext } from 'react'
import Avatar from '../Avatar/Avatar'
import { Context } from '../Storage/Storage'
import UserData from '../UserData/UserData'
import Buttons from '../ButtonsRRSS/Buttons'
import ShowComments from '../Comments/ShowComments'
import Posts from '../Post/Posts'
import Friends from '../Friends/Friends'

//El componente Personal muestra el perfil del usuario conectado actualmente.
function Personal() {
    const data = useContext(Context);
    return (
        <>
            <h1>Ejemplo de perfil</h1>
            <UserData userName={data.userId}/>
            <Posts userId={data.userId}></Posts>           
            <Friends/>


        </>
    )
}

export default Personal
//Pasar props a user data para poder reutilizar componente tanto para usuario logueado como para otro usuario.

