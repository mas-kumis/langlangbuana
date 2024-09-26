import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useRegisterMutation } from "../store/api/usersApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../store/services/authSlice";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [register, { isLoading }] = useRegisterMutation();
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) navigate(redirect);
  });
  const submitPassword = async (e) => {
    e.preventDefault();
    try {
      const res = await register({ username, email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      //   navigate(redirect ? redirect : "/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  return (
    <div className="bg-slate-900 flex items-center justify-center">
      <div className="bg-white flex flex-col items-center rounded-xl py-4 px-8">
        <h1 className="my-8">Register</h1>
        <form className="flex flex-col space-y-4" onSubmit={submitPassword}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 rounded-lg bg-slate-200"
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded-lg bg-slate-200"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 rounded-lg bg-slate-200"
          />
          <button
            type="submit"
            className="p-2 rounded-lg bg-slate-200 hover:bg-slate-300"
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
