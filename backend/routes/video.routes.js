import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getVideos,uploadVideo } from "../controllers/video.controller.js";
const router = express.Router()

router.post("/upload",protectRoute,uploadVideo)
router.get("/",getVideos)

export default router


