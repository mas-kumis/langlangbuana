import { FaEdit, FaTrash } from "react-icons/fa";
import { useFetchBlogQuery } from "../store/services/blog";

const ListBlog = () => {
  const { data: blogs } = useFetchBlogQuery();

  if (!blogs) {
    return <div>Loading...</div>;
  }

  const handleEdit = (id) => {
    console.log(id);
  };

  const handleDelete = (id) => {
    console.log(id);
  };
  return (
    <div className="container mx-auto p-4">
      <table className="table-fixed border w-full ">
        <thead>
          <tr className="bg-gray-100  ">
            <th className="px-4 py-2">No</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Featured</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody className="">
          {blogs.map((blog, index) => (
            <tr key={blog._id}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{blog.title}</td>
              <td className="border px-4 py-2">
                {blog.featured ? "Yes" : "No"}
              </td>
              <td className="border px-4 py-2">
                <button
                  className="mr-2 text-yellow-500 hover:text-yellow-700"
                  onClick={() => handleEdit(blog._id)}
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(blog._id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListBlog;
