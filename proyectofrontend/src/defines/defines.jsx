import { useContext } from 'react'
import { Context } from '../components/Storage/Storage'
import { HOST } from './host'

function Defines() {
    const data = useContext(Context);
    return (
        <>
        </>
    )
}
const urls = [
    HOST + "name/V0.0/comment/",
    HOST + "name/V0.0/comments/",
    HOST + "name/V0.0/friends/",
    HOST + "name/V0.0/users/",
    HOST + "name/V0.0/publication/",
    HOST + "name/V0.0/publicationsofuser/",
    HOST + "name/V0.0/friends/",
    HOST + "name/V0.0/publicationsofuser/",
]
export { urls }

