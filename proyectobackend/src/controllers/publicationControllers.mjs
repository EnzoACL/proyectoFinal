import db from "../models/dataBase.mjs"

export function getPublicationsOfUserController(request, response) {
    const { publicationsUserId } = request.params
    db.all(
        `SELECT * FROM posts WHERE idfromuser=("${publicationsUserId}")`,
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
//Introducir datatime en el controlador
export function postPublicationController(request, response) {
    const { idfromuser, content } = request.body;
    db.run(//Preguntar lo de Date.now
        `INSERT INTO posts(idfromuser ,content, timeposted) VALUES ("${idfromuser}","${content}","${Date.now()}")`,
        (err)=> {
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.sendStatus(201)
            }
        }
    )
}
export function deletePublicationController(request, response) {
    const { idfromuser, id } = request.body;
    db.run(
        `DELETE FROM posts WHERE idfromuser=("${idfromuser}") AND id=("${id}")`,
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

