import express from "express";
import {
  getAllBlogs,
  getBlogbyId,
  featureBlog,
  createBlog,
  updateBlog,
  likeBlog,
  deleteBlog,
} from "../controllers/blogContoller.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", getAllBlogs);
router.get("/featured", featureBlog);
router.get("/:id", getBlogbyId);
router.post("/post", createBlog);

router.put("/:id", verifyToken, updateBlog);
router.put("/like/:id", verifyToken, likeBlog);
router.delete("/:id", verifyToken, deleteBlog);

export default router;
