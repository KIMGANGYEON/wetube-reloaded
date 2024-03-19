import express from "express";
import {
  watch,
  getEdit,
  upload,
  deleteVideo,
  postEdit,
} from "../controllers/videoControllers";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
//숫자만 오게 하는 정규식
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);

export default videoRouter;
