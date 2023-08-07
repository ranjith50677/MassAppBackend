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
  Profile,
  updateProfile,
  followingUser,
  unfollowingUser,
  getFollowers,
  getFollowing,
} from "../controllers/userController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

//Profile routes//
router.get("/profile", auth, Profile);
router.put("/updateprofile", auth, updateProfile);

//User routes//
router.post("/reg", reg);
router.post("/login", login);
router.get("/alluser", getAllUsers);
router.get("/:id", getUserById);
router.put("/update/:id", updateUserById);
router.delete("/delete/:id", deleteUserById);

//Owner routes//
router.post("/ownerreg", OwnerReg);
router.get("/owner", getOwner);

//Follow routes//
router.put("/follow/:id", auth, followingUser);
router.put("/unfollow/:id", auth, unfollowingUser);
router.get("/followers/:id", auth, getFollowers);
router.get("/following/:id", auth, getFollowing);

export default router;
