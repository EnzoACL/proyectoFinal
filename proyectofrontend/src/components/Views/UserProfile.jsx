import UserData from '../UserData/UserData'
import Posts from '../Post/Posts'
import Friends from '../Friends/Friends'
function UserProfile(userId) {

    return (
        <>
            <h1>Ejemplo de perfil de otra persona</h1>
            <UserData userId={userId}/>
            <Posts userId={userId}></Posts>           
            <Friends/>
        </>
    )
}

export default UserProfile