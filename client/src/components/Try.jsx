import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Try = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      {userInfo ? (
        <button
          onClick={() => {
            dispatch(logout());
            navigate("/login");
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Try;
