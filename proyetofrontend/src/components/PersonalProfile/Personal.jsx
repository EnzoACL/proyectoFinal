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
    console.log(data.userId);
    return (
        <>
            <h1>Ejemplo de perfil</h1>
            <UserData/>
            <Posts userId={data.userId}></Posts>           
            <Friends/>


        </>
    )
}

export default Personal


