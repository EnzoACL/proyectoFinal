import { useContext } from 'react'
import Avatar from '../Avatar/Avatar'
import {Context} from '../Storage/Storage'

function UserData() {
    const urlAvatar = "https://pngaqaa.pngitem.com/pimgs/s/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
    /* se importa useContext y Context, se usa useContext para
    traer los datos y ya se pueden usar */
    const data = useContext(Context);
    const infoAvatar = `foto de perfil de ${data.user}`

    return (
        <>
            
            <Avatar url={urlAvatar} info={infoAvatar}/>
                <p>Usuario:{data.user}</p>
                <p>Contraseña: {data.password}</p>
            
        </>
    )
}

export default UserData