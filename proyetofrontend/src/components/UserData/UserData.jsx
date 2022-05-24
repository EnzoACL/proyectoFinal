import { useContext } from 'react'
import Avatar from '../Avatar/Avatar'
import {Context} from '../Storage/Storage'

function UserData() {
    const urlAvatar = "https://png.pngitem.com/pimgs/s/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
    const infoAvatar = "foto de perfil de Juan"
    /* se importa useContext y Context, se usa useContext para
    traer los datos y ya se pueden usar */
    const data = useContext(Context);

    return (
        <>
            <Avatar url={urlAvatar} info={infoAvatar} />
            <p>Prueba:</p>
                <p>Usuario:{data.user}</p>
                <p>Contraseña: {data.password}
            </p>
        </>
    )
}

export default UserData