import db from "../models/dataBase.mjs"

export function getComments (request,response) {
    const { commentsFromPostId } = request.params
    db.all(
        `SELECT * FROM comments WHERE idfrompost=("${commentsFromPostId}")`,
        (err, data) => {
            if (err) {
                console.error(err);
                response.sendStatus(500);
            } else {
                response.json(data);
            }
        }
    )
}
export function postComment (request, response) {
    const { content, idfrompost, idfromusercomment } = request.body
    db.run(
        `INSERT INTO comments(content, idfrompost, idfromusercomment) 
        VALUES ("${content}","${idfrompost}", "${idfromusercomment}")`,
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
        `DELETE FROM comments WHERE idfrompost=("${idfrompost}") AND id=("${id}")`,
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
