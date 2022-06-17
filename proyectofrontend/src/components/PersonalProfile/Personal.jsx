import { useContext } from 'react'
import { Context } from '../Storage/Storage'
import UserData from '../UserData/UserData'
import Posts from '../Post/Posts'
import Friends from '../Friends/Friends'

//El componente Personal muestra el perfil del usuario conectado actualmente.
function Personal() {
    const data = useContext(Context);
    return (
        <>
            <h1>Ejemplo de perfil</h1>
            <UserData userId={data.userId}/>
            <Posts userId={data.userId}></Posts>           
            <Friends userId={data.userId} />


        </>
    )
}

export default Personal

