import express, { json } from "express";

import { getUsersController,getOneUserController, postUserController } from "./controllers/usersControllers.mjs";
import { deletePublicationController, getPublicationsOfUserController, postPublicationController } from "./controllers/publicationControllers.mjs";
import { getComments, postComment, deleteComment } from "./controllers/commentsController.mjs";
const PATH_PREFIX = "/name/V0.0"
const app = express();
try {
    const jsonParser = express.json();
    app.get(PATH_PREFIX + "/users/", jsonParser, getUsersController);
    app.get(PATH_PREFIX + "/user/", jsonParser, getOneUserController);
    app.post(PATH_PREFIX + "/users/", jsonParser, postUserController);

    app.post(PATH_PREFIX + "/publication/", jsonParser, postPublicationController);
    app.delete(PATH_PREFIX + "/publication/", jsonParser, deletePublicationController);
    app.get(PATH_PREFIX + "/publicationsofuser/", jsonParser, getPublicationsOfUserController);

    app.get(PATH_PREFIX + "/comments/", jsonParser, getComments);
    app.post(PATH_PREFIX + "/comment/", jsonParser, postComment);
    app.delete(PATH_PREFIX + "/comment/", jsonParser, deleteComment);

    app.get(PATH_PREFIX + "/friends/", jsonParser, getComments);
    app.post(PATH_PREFIX + "/comment", jsonParser, postComment);
    app.delete(PATH_PREFIX + "/comment", jsonParser, deleteComment);

    
    app.listen(process.env.PORT || 3000, () => {
        console.log("Express running...");

    });
} catch (err) {
    console.error(err);
}