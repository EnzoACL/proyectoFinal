import db from "../models/dataBase.mjs"

export function getComments (request,response) {
    const { idfrompost } = request.body
    db.get(
        `SELECT * FROM comments WHERE idfrompost=("${idfrompost}")`,
        (err, data) => {
            if (err) {
                console.error(err);
                response.sendStatus(500);
            } else {
                response.json
            }
        }
    )
}
export function postComment (request, response) {
    const { content, idfrompost } = request.body
    db.run(
        `INSErT INTO comments(content, idfrompost) VALUES ("${content}","${idfrompost}")`,
            (err) => {
            if (err) {
                    console.error(err);
                    response.sendStatus(500)
            } else {
                    response.sendStatus(201);
            }
        }
    )
}

export function deleteComment(request, response) {
    const { idfrompost, id } = request.body;
    db.run(
        `DELETE FROM comments WHERE idfromuser=("${idfrompost}") AND id=("${id}")`,
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
