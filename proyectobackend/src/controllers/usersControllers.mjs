import db from "../models/dataBase.mjs"

export function getUsersController(request, response) {
    db.all(`SELECT id, name FROM users`,
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
    const { name, password } = request.body;
    db.run(
        `INSERT INTO users(name, password) VALUES ("${name}","${password}")`,
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