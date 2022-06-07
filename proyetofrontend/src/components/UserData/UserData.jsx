import { useContext } from 'react'
import Avatar from '../Avatar/Avatar'
import {Context} from '../Storage/Storage'

function UserData({userName}) {
    const data = useContext(Context);
    const infoAvatar = `foto de perfil de ${data.user}`
    const urlAvatar = `https://fiverr-res.cloudinary.com/images/t_smartwm/t_delivery_thumb,q_auto,f_auto/deliveries/101236368/original/maxtimkovichUPDATED/create-custom-pixel-avatar-pokemon-character-icon.png`


    return (
        <>
            
            <Avatar url={urlAvatar} info={infoAvatar}/>
                <p>Usuario:{userName}</p>
                        
        </>
    )
}

export default UserData