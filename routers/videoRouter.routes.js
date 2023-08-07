import express from "express";
import {
  createVideo,
  getAllVideos,
  getVideoById,
  getVideoByUser,
  updateVideoById,
  deleteVideoById,
  likeVideo,
  unLikeVideo,
  dislikeVideo,
  commentVideo,
  getVideoByUserId,
  deleteComment,
  updateComment,
  getVideoBySearchCategory,
  getVideoBySearchUser,
  getVideoBySearchTitleCategory,
  getVideoBySearchTitleUser,
  getVideoBySearchCategoryUser,
  getVideoBySearchTitleCategoryUser,
} from "../controllers/videoController.js";
const router = express.Router();
import auth from "../middleware/auth.js";

//Video routes//

router.post("/create", auth, createVideo);
router.get("/all", getAllVideos);
router.get("/:id", getVideoById);
router.put("/update/:id", updateVideoById);
router.delete("/delete/:id", deleteVideoById);
router.get("/user/byid/:id", getVideoByUserId);
router.get("/getvideo/user", auth, getVideoByUser);

//Like routes//

router.put("/like/:id", auth, likeVideo);
router.put("/unlike/:id", auth, unLikeVideo);
router.put("/dislike/:id", auth, dislikeVideo);

//Comment routes//

router.put("/comment/:id", auth, commentVideo);
router.put("/deletecomment/:id", auth, deleteComment);
router.put("/updatecomment/:id/:commentId", auth, updateComment);

//Search routes//

router.get("/search/category", getVideoBySearchCategory);
router.get("/search/user", getVideoBySearchUser);
router.get("/search/title/category", getVideoBySearchTitleCategory);
router.get("/search/title/user", getVideoBySearchTitleUser);
router.get("/search/category/user", getVideoBySearchCategoryUser);
router.get("/search/title/category/user", getVideoBySearchTitleCategoryUser);

export default router;
