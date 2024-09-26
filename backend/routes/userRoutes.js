import express from "express";
import {
  getUsers,
  createUser,
  loginUser,
  logoutUser,
  getProfileUser,
  updateProfileUser,
  deleteUser,
  getUsersbyId,
  updateUserbyId,
} from "../controllers/userController.js";
import {
  adminMiddleware,
  authMiddleware,
  checkCookies,
} from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getUsers);
router.post("/", createUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/profile", authMiddleware, getProfileUser);
router.put("/profile", authMiddleware, updateProfileUser);
router.delete("/:id", authMiddleware, adminMiddleware, deleteUser);
router.get("/:id", authMiddleware, adminMiddleware, getUsersbyId);
router.put("/:id", authMiddleware, adminMiddleware, updateUserbyId);
router.post("/cookies", checkCookies);

export default router;
