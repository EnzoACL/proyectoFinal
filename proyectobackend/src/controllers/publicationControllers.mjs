import db from "../models/dataBase.mjs"

export function postPublicationController(request, response) {
    const { idfromuser, content } = request.body;
    db.run(
        `INSERT INTO posts(idfromuser ,content) VALUES ("${idfromuser}","${content}")`,
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
                response.sendStatus(200)
            } else {
                response.sendStatus(202)
            }
        }
    )
}
