import ListUser from "../components/ListUser";
import Navigation from "../components/Navigation";

const HomePage = () => {
  return (
    <div className="flex">
      <Navigation />
      <ListUser />
    </div>
  );
};

export default HomePage;
