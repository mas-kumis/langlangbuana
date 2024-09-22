import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../store/counter/authSlice";
import { useRegisterMutation } from "../store/services/auth";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [register, { isLoading }] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const search = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") ? sp.get("redirect") : "/dashboard";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await register({ username, email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success("Register Successful");
      navigate(redirect);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className="bg-white  flex flex-col items-center justify-center py-8 px-10 rounded-xl space-y-4 shadow shadow-space-2 ">
      <h1 className="font-bold">Register</h1>
      <form className="flex flex-col gap-8 w-80" onSubmit={submitHandler}>
        <label className="flex flex-col">
          Name
          <input
            className="border border-space-2 p-2"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            name="username"
          />
        </label>
        <label className="flex flex-col">
          Email
          <input
            className="border border-space-2 p-2"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
          />
        </label>
        <label className="flex flex-col">
          Password
          <input
            className="border border-space-2 p-2"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name="password"
          />
        </label>
        <button
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          type="submit"
        >
          {isLoading ? "Loading..." : "Register"}
        </button>
      </form>
      <p className="text-sm text-center">
        Already Login?
        <span className="text-blue-800 font-semibold">
          <br />
          <Link to={"/login"}>Login</Link>
        </span>
      </p>
    </div>
  );
};

export default Register;
