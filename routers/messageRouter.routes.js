import express from "express";
import auth from "../middleware/auth.js";

import {
  createMessage,
  updateMessage,
  deleteMessage,
  getMessage,
} from "../controllers/messageController.js";

const router = express.Router();

router.put("/createmessage/:id", auth, createMessage);
router.put("/updatemessage/:id", auth, updateMessage); 
router.delete("/deletemessage/:id", auth, deleteMessage);
router.get("/getmessage/:id", auth, getMessage);

export default router;
