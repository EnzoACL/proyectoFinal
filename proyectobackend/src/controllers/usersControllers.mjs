import db from "../models/dataBase.mjs"

export function getUsersController(request, response) {
    db.all(`SELECT id, name, isgroup FROM users`,
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
export function getOneUserController(request, response) {
    const { id } = request.body
    db.get(
        `SELECT * FROM users WHERE id=("${id}")`,
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

export function postUserController(request, response) {
    const { name, password, isgroup } = request.body;
    db.run(
        `INSERT INTO users(name, password, isgroup) VALUES ("${name}","${password}","${isgroup}")`,
        (err) => {
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.sendStatus(201)
            }
        }
    )
}

export function getFriendsOfUser(request, response) {
    
}

/*`request_userid INTEGER,            
            confirm_userid INTEGER,
            confirmed BOOLEAN DEFAULT false NOT NULL,
            FOREIGN KEY(request_userid) REFERENCES users(id),
            FOREIGN KEY(confirm_userid) REFERENCES users(id)`*/
            