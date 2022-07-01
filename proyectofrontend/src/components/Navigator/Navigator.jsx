import { Link } from "react-router-dom"
import Friends from "../Friends/Friends"

export function NavigatorBar({ userId }) {
    return (
        <>            
            <p><Link to={"/"}><input type="button" value="     🏠 Inicio    " /> </Link></p>
            <p><Link to={"/search"}> <input type="button" value=" 🔍 Buscador " /> </Link></p>
            <p><Link to={"/createPost"}><input type="button" value="📝 Crear post" /></Link></p>
            <Friends userId={userId}/>
        </>
    )
}

export default NavigatorBar