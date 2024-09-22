import AllBlog from "../components/AllBlog";
import Copyright from "../components/Copyright";
import FeatureBlog from "../components/FeatureBlog";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <FeatureBlog />
      <AllBlog />
      <Footer />
      <Copyright />
    </div>
  );
};

export default HomePage;
