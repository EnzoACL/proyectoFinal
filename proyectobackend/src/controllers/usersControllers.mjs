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
    const { userId } = request.params 

    db.get(
        `SELECT * FROM users WHERE id=("${userId}")`,
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

export function deleteUserController(request, response) {
    const { id } = request.body;
    db.run(
        `DELETE FROM users WHERE id=("${id}")`,
        (err) => {
            if (err) {
                console.error(err);
                response.sendStatus(204)
            } else {
                response.sendStatus(202)
            }
        }
    )
}