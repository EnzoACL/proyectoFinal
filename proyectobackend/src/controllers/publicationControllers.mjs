import db from "../models/dataBase.mjs"

export function postPublicationController(request, response) {
    const { idfromuser, content } = request.body;
    db.run(
        `INSERT INTO posts(content) VALUES ("${idfromuser}","${content}")`,
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