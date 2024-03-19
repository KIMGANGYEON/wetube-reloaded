import express from "express";
import {
  watch,
  edit,
  upload,
  deleteVideo,
} from "../controllers/videoControllers";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
//숫자만 오게 하는 정규식
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
videoRouter.get("/upload", upload);

export default videoRouter;
