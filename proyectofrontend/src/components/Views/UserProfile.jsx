import UserData from '../UserData/UserData'
import Posts from '../Post/Posts'
import Friends from '../Friends/Friends'
import { useParams } from 'react-router-dom';
function UserProfile() {
    const { id } = useParams();
    const idToNumber = parseInt(id)

    return (
        <>
            <h1>Ejemplo de perfil de otra persona</h1>
            <UserData userId={idToNumber}/>
            <Posts userId={idToNumber}></Posts>           
            <Friends userId={idToNumber} />
        </>
    )
}

export default UserProfile