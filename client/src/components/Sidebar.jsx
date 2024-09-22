import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { useLogoutMutation } from "../store/services/auth";
import { logout } from "../store/counter/authSlice";
import toast from "react-hot-toast";
const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const [logoutApiCall] = useLogoutMutation();
  const search = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") ? sp.get("redirect") : "/";
  const handleLogout = async (e) => {
    try {
      e.preventDefault();
      await logoutApiCall().unwrap();
      dispatch(logout());
      toast.success("Logout Successful");
      navigate(redirect);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="w-[200px] bg-slate-900 h-screen p-4 transition-all duration-300">
        <div className="flex flex-col items-center justify-between">
          <h1 className="text-white text-2xl font-bold">Dashboard</h1>
          <p className="text-white text-xs">{userInfo.data.username}</p>
        </div>
        <div className="mt-4">
          <ul>
            <li className="py-2">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "cursor-pointer text-yellow-400 font-bold"
                    : "cursor-pointer text-white hover:text-yellow-400 font-bold"
                }
              >
                Your Blog
              </NavLink>
            </li>
            <li className="py-2">
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive
                    ? "cursor-pointer text-yellow-400 font-bold"
                    : "cursor-pointer text-white hover:text-yellow-400 font-bold"
                }
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className=" bg-slate-900 pb-4 text-white hover:text-slate-400 cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
