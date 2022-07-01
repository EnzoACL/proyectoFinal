import UserData from '../UserData/UserData'
import Posts from '../Post/Posts'
import Friends from '../Friends/Friends'
import NavigatorBar from '../Navigator/Navigator';
import { useParams } from 'react-router-dom';
function UserProfile() {
    const { id } = useParams();
    const idToNumber = parseInt(id)

    return (
        <>
            <div className='parent'>
                <div className='div1'>
                    <UserData userId={idToNumber} />
                    <NavigatorBar userId={idToNumber} /> 
                </div>
                <div className='div2'>
                    <Posts userId={idToNumber}></Posts> 
                </div>
            </div>
        </>
    )
}

export default UserProfile