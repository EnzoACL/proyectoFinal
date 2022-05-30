import { useContext } from 'react'
import Avatar from '../Avatar/Avatar'
import {Context} from '../Storage/Storage'

function UserData() {
    const data = useContext(Context);
    const infoAvatar = `foto de perfil de ${data.user}`
    const urlAvatar = `https://fiverr-res.cloudinary.com/images/t_smartwm/t_delivery_thumb,q_auto,f_auto/deliveries/101236368/original/maxtimkovichUPDATED/create-custom-pixel-avatar-pokemon-character-icon.png`


    return (
        <>
            
            <Avatar url={urlAvatar} info={infoAvatar}/>
                <p>Usuario:{data.user}</p>
                <p>Contraseña: {data.password}</p>
                <p>Id: {data.userId}</p>            
        </>
    )
}

export default UserData