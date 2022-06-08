import { useContext, useEffect, useState } from 'react'
import Avatar from '../Avatar/Avatar'
import { get } from '../../aux_api';


function UserData({ userId }) {
    const [userName, setUserName] = useState("")
    const infoAvatar = `foto de perfil de ${userName}`
    const urlAvatar = `https://fiverr-res.cloudinary.com/images/t_smartwm/t_delivery_thumb,q_auto,f_auto/deliveries/101236368/original/maxtimkovichUPDATED/create-custom-pixel-avatar-pokemon-character-icon.png`

    
    async function userNameSetter() {
        const users = await get("http://localhost:4000/name/V0.0/users/");
            for (let item of users) {
                if (users.id === userId) {
                setUserName(users.name)
            }
        }
    }
    
    
        
    
    return (
        <>
            
            <Avatar url={urlAvatar} info={infoAvatar}/>
                <p>Usuario:{userName}</p>
                        
        </>
    )
}

export default UserData

