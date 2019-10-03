import express from "express";
import routes from "../routes";
import { videoDetail, getEditVideo, deleteVideo, postUpload, getUpload, postEditVideo } from "../controller/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// Video Detail 
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

// Video Delete
videoRouter.get(routes.deleteVideo(), deleteVideo);


export default videoRouter;