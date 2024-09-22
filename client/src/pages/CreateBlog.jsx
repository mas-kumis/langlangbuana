import Sidebar from "../components/Sidebar";
import CreateBlogForm from "../components/CreateBlogForm";
import ListBlog from "../components/ListBlog";
const CreateBlog = () => {
  return (
    <div className="flex">
      <Sidebar />
      <CreateBlogForm />
      <ListBlog />
    </div>
  );
};

export default CreateBlog;
