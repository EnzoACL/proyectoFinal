import db from "../models/dataBase.mjs"

export function getFriendsOfUser(request, response) {
    db.all(`SELECT confirm_userid FROM friends WHERE confirmed=("${true}")`,
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

export function postFriendofUser(request, response) {
    const { request_userid, confirm_userid, confirmed } = request.body
    db.run(`INSERT INTO friends(request_userid, confirm_userid, confirmed)
    VALUES ("${request_userid}","${confirm_userid}","${confirmed}") `)   
}
`INSERT INTO posts(idfromuser ,content) VALUES ("${idfromuser}","${content}")`,


/*`request_userid INTEGER,            
            confirm_userid INTEGER,
            confirmed BOOLEAN DEFAULT false NOT NULL,
            FOREIGN KEY(request_userid) REFERENCES users(id),
            FOREIGN KEY(confirm_userid) REFERENCES users(id)`*/
            