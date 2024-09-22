import express from "express";
import {
  createUsers,
  getUsers,
  loginUsers,
  logoutUsers,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";
const router = express.Router();

router.get("/", getUsers);
router.post("/", createUsers);
router.post("/login", loginUsers);
router.post("/logout", logoutUsers);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

export default router;
