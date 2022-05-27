import { useContext, useState } from "react";
import UserData from "../UserData/UserData";
import Buttons from "../ButtonsRRSS/Buttons";
import Comments from "../Comments/Comments";
function Post() {
    

    
    return (
        <>
            <h1>Ejemplo de post</h1>
            <UserData/>
            <p>Cuerpo del post</p>
            <p><Buttons /></p>
            <p><Comments></Comments></p>
        </>
    )
}

export default Post

