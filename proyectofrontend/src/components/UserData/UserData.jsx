import { useContext, useEffect, useState } from 'react'
import Avatar from '../Avatar/Avatar'
import { get } from '../../aux_api';
import UserProfile from '../Views/UserProfile';
import { useParams, useNavigate, Link } from "react-router-dom"


function UserData({ userId }) {
    
    const [nameOfUser, setNameOfUser] = useState("")
    const infoAvatar = `foto de perfil de ${nameOfUser}`
    const urlAvatar = `https://fiverr-res.cloudinary.com/images/t_smartwm/t_delivery_thumb,q_auto,f_auto/deliveries/101236368/original/maxtimkovichUPDATED/create-custom-pixel-avatar-pokemon-character-icon.png`
    
    async function userNameSetter() {
        const users = await get("http://localhost:4000/name/V0.0/users/");
            for (let item of users) {
                if (item.id === userId) {
                setNameOfUser(item.name)
            }
        }
    }
    userNameSetter();      
    
    
        
    
    return (
        <>
            
            <div className='div1'>
                <Avatar url={urlAvatar} info={infoAvatar}/>
                <Link to={"/name/V0.0/user/" + userId}><a>{nameOfUser}</a></Link>
            </div>
        </>
    )
}
//Pasar prop userId a componente Link
export default UserData
