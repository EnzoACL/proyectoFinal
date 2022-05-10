import express from "express";

import { postUserController } from "./controllers/usersControllers.mjs";
import { postPublicationController } from "./controllers/publicationControllers.mjs";

const PATH_PREFIX = "/name/V0.0"
const app = express();
try {
    const jsonParser = express.json();
    
    app.post(PATH_PREFIX + "/users/", jsonParser, postUserController);
    app.post(PATH_PREFIX + "/publication/", jsonParser, postPublicationController);
    
    app.listen(process.env.PORT || 3000, () => {
        console.log("Express running...");

    });
} catch (err) {
    console.error(err);
}