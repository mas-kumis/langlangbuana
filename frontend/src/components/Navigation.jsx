import {
  FaHome,
  FaUser,
  FaShoppingCart,
  FaHeart,
  FaListAlt,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../store/api/usersApiSlice";
import { logout } from "../store/services/authSlice";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);
  const dispatch = useDispatch();
  const [lgooutApiCall] = useLogoutMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/login";

  const logoutHandler = async () => {
    try {
      await lgooutApiCall();
      dispatch(logout());
      navigate(redirect ? redirect : "/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav
      className={`flex flex-col justify-between  bg-rose-800 h-screen py-4 px-2 ${
        openNav ? "w-[50px]" : "w-[200px]"
      }`}
    >
      <div className="flex flex-col space-y-4">
        <button onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
            <GiHamburgerMenu size={30} color="white" />
          ) : (
            <IoMdClose size={30} color="white" />
          )}
        </button>
        <div className="flex space-x-4 items-center p-2">
          <FaHome size={30} color="white" />
          <p className={`text-white  font-bold ${openNav ? "hidden" : ""}`}>
            Home
          </p>
        </div>
        <div className="flex space-x-4 items-center p-2">
          <FaUser size={30} color="white" />
          <p className={`text-white  font-bold ${openNav ? "hidden" : ""}`}>
            Profile
          </p>
        </div>
        <div className="flex space-x-4 items-center p-2">
          <FaShoppingCart size={30} color="white" />
          <p className={`text-white  font-bold ${openNav ? "hidden" : ""}`}>
            Shop
          </p>
        </div>
        <div className="flex space-x-4 items-center p-2">
          <FaHeart size={30} color="white" />
          <p className={`text-white  font-bold ${openNav ? "hidden" : ""}`}>
            Favorite
          </p>
        </div>
      </div>
      <div>
        <div className="flex space-x-4 items-center p-2">
          <FaListAlt size={30} color="white" />
          <p className={`text-white  font-bold ${openNav ? "hidden" : ""}`}>
            Register
          </p>
        </div>
        {userInfo ? (
          <button
            onClick={logoutHandler}
            className="flex space-x-4 items-center p-2"
          >
            <FaListAlt size={30} color="white" />
            <p className={`text-white  font-bold ${openNav ? "hidden" : ""}`}>
              Logout
            </p>
          </button>
        ) : (
          <Link to="/login" className="flex space-x-4 items-center p-2">
            <FaListAlt size={30} color="white" />
            <p className={`text-white  font-bold ${openNav ? "hidden" : ""}`}>
              Login
            </p>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
