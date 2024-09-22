import Blog from "../models/blogModel.js";

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate("author", "-password");
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBlogbyId = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate(
      "author",
      "-password"
    );
    blog.views++;
    await blog.save();
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const featureBlog = async (req, res) => {
  try {
    const blogs = await Blog.find({ featured: true }).populate(
      "author",
      "-password"
    );
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBlog = async (req, res) => {
  const { title, description, content, category, image, featured } = req.body;
  // const user = req.user._id;
  const blog = new Blog({
    title,
    content,
    image,
    featured,
    description,
    category,
  });
  try {
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateBlog = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: "Data to update can not be empty" });
  }
  const blog = await Blog.findById(req.params.id);
  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).populate("author", "-password");
    res.json({ message: "Blog updated successfully", data: updatedBlog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const likeBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    if (blog.likes.includes(req.user._id)) {
      blog.likes = blog.likes.filter((like) => like !== req.user._id);
      await blog.save();
      return res.status(200).json({
        message: "Blog unliked successfully",
        data: blog,
      });
    } else {
      blog.likes.push(req.user._id);
      await blog.save();
      return res.status(200).json({
        message: "Blog liked successfully",
        data: blog,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json({ message: "Blog deleted successfully", data: blog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getAllBlogs,
  getBlogbyId,
  createBlog,
  featureBlog,
  updateBlog,
  likeBlog,
  deleteBlog,
};
