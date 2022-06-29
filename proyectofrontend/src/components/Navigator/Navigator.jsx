import { Link } from "react-router-dom"
import CreatePost from "../Post/CreatePost"

export function NavigatorBar() {
    return (
        <>
             <Link to={"/"}><input type="button" value="Inicio" /> </Link>
            <Link to={"/search"}> <input type="button" value="Buscar" /> </Link>
            <Link to={"/createPost"}><input type="button" value="Crear post" /></Link>
        </>
    )
}

export default NavigatorBar