import { useContext, useState } from "react";
import UserData from "../UserData/UserData";
import Buttons from "../ButtonsRRSS/Buttons";
function Post() {
    

    
    return (
        <>
            <UserData/>
            <p>Ejemplo de post</p>
            <p><Buttons/></p>
        </>
    )
}

export default Post

