import { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { useCreateBlogMutation } from "../store/services/blog";
import toast from "react-hot-toast";

const CreateBlogForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [featured, setFeatured] = useState(false);

  const [createBlog, { isLoading }] = useCreateBlogMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createBlog({
        title,
        content,
        category,
        image,
        featured,
      }).unwrap();
      console.log(res);
      toast.success("Blog created successfully");
    } catch (err) {
      console.log(err);
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 md:p-8 lg:p-12 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-3xl font-bold">Create a Blog</h2>
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="font-semibold">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="border-2 p-2 rounded-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="content" className="font-semibold">
          Content
        </label>
        <textarea
          id="content"
          className="border-2 p-2 rounded-lg"
          rows={5}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="category" className="font-semibold">
          Category
        </label>
        <input
          type="text"
          id="category"
          className="border-2 p-2 rounded-lg"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="image" className="font-semibold">
          Image URL
        </label>
        <input
          type="text"
          id="image"
          className="border-2 p-2 rounded-lg"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="featured"
          className="border-2 rounded-lg"
          checked={featured}
          onChange={(e) => setFeatured(e.target.checked)}
        />
        <label htmlFor="featured" className="font-semibold">
          Featured
        </label>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2"
      >
        <FaPencilAlt />
        {isLoading ? "Creating..." : "Create"}
      </button>
    </form>
  );
};

export default CreateBlogForm;
