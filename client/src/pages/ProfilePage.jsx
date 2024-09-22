import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
const ProfilePage = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div>
      <Navbar />
      <h1>Profile Page</h1>
      <p>{userInfo.data.username}</p>
    </div>
  );
};

export default ProfilePage;
