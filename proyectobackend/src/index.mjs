import express, { json } from "express";

import { getUsersController,getOneUserController, postUserController } from "./controllers/usersControllers.mjs";
import { deletePublicationController, getPublicationsOfUserController, postPublicationController } from "./controllers/publicationControllers.mjs";
import { getComments, postComment, deleteComment } from "./controllers/commentsController.mjs";
import { deleteFriendOfUser, getFriendsOfUser, postFriendOfUser } from "./controllers/friendsControllers.mjs";
import { authMiddleware } from "./middleware/authorization.mjs";

const PATH_PREFIX = "/name/V0.0"
const app = express();

try {
    const jsonParser = express.json();
    app.get(PATH_PREFIX + "/users/", jsonParser, getUsersController);
    app.get(PATH_PREFIX + "/user/:userId", jsonParser, getOneUserController);
    app.post(PATH_PREFIX + "/users/", jsonParser, postUserController);

    app.post(PATH_PREFIX + "/publication/", jsonParser, authMiddleware , postPublicationController);
    app.delete(PATH_PREFIX + "/publication/", jsonParser, authMiddleware, deletePublicationController);
    app.get(PATH_PREFIX + "/publicationsofuser/:publicationsUserId", jsonParser, getPublicationsOfUserController);

    app.get(PATH_PREFIX + "/comments/:commentsFromPostId", jsonParser, getComments);
    app.post(PATH_PREFIX + "/comment/", jsonParser, postComment);
    app.delete(PATH_PREFIX + "/comment/", jsonParser, deleteComment);
    app.post(PATH_PREFIX + "/comment", jsonParser, postComment);
    app.delete(PATH_PREFIX + "/comment", jsonParser, deleteComment);

    app.get(PATH_PREFIX + "/friends/:friendId", jsonParser, getFriendsOfUser);
    app.post(PATH_PREFIX + "/friend/", jsonParser, postFriendOfUser);
    app.delete(PATH_PREFIX + "/friend/", jsonParser, deleteFriendOfUser);


    
    app.listen(process.env.PORT || 4000, () => {
        console.log("Express running...");

    });
} catch (err) {
    console.error(err);
}