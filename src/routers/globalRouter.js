import express from "express";
import { join, login } from "../controllers/usercontrollers";
import { home, search } from "../controllers/videoControllers";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;
``;
