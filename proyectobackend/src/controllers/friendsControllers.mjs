import db from "../models/dataBase.mjs"
//No es una relacion simetrica, el request_userid sigue a confirm_userid
//Si el confirm_userid quiere seguir al otro usuario se crea otra entrada siendo
//él el request_userid.
export function getFriendsOfUser(request, response) {
     const { friendId } = request.params 
    db.all(`SELECT * FROM friends WHERE request_userid=("${friendId}")`,
    (err, data) => {    
        if (err) {
            console.error(err);
            response.sendStatus(500)
        } else {
            response.json(data)
        }
    }
)
}

export function postFriendOfUser(request, response) {
    const { request_userid, confirm_userid, confirmed } = request.body
    db.run(`INSERT INTO friends(request_userid, confirm_userid, confirmed)
    VALUES ("${request_userid}","${confirm_userid}","${confirmed}")`,
        (err, data) => {
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.sendStatus(201)
        }
   }
)
}
/**
 * El request userid borra/deja de seguir a confirm_userid pero si ambos se siguen
 * el confirm_userid no deja de seguir al otro.
 */
export function deleteFriendOfUser(request, response) {
    const { request_userid, confirm_userid  } = request.body
    db.run(`DELETE from friends WHERE request_userid=("${request_userid}") and confirm_userid=("${confirm_userid}")`,
        (err, data) => {
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.sendStatus(202)
        }
    }
)    
}           