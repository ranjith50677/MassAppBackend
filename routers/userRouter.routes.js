import express from "express";
import {
  reg,
  OwnerReg,
  login,
  getUserById,
  updateUserById,
  deleteUserById,
  getAllUsers,
  getOwner,
  profile,
  updateProfile,
  followingUser,
  unfollowingUser,
  getFollowers,
  getFollowing,
} from "../controllers/userController.js";

const router = express.Router();

//User routes//
router.post("/reg", reg);
router.post("/login", login);
router.get("/all", getAllUsers);
router.get("/:id", getUserById);
router.put("/update/:id", updateUserById);
router.delete("/delete/:id", deleteUserById);

//Owner routes//
router.post("/ownerreg", OwnerReg);
router.get("/owner", getOwner);

//Profile routes//
router.get("/profile", profile);
router.put("/updateprofile", updateProfile);

//Follow routes//
router.put("/follow/:id", followingUser);
router.put("/unfollow/:id", unfollowingUser);
router.get("/followers/:id", getFollowers);
router.get("/following/:id", getFollowing);

export default router;
