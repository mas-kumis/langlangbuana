import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../store/counter/authSlice";
import { useLoginMutation } from "../store/services/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();
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
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success("Login Successful");
      navigate(redirect);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className="bg-white border border-space-2 flex flex-col items-center justify-center py-8 px-8 rounded-xl space-y-4 shadow shadow-space-2 ">
      <h1 className="font-bold">Login</h1>
      <form className="flex flex-col gap-8 w-80" onSubmit={submitHandler}>
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
        <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          {isLoading ? "Loading..." : "Login"}
        </button>
      </form>
      <p className="text-sm text-center">
        Dont Have an Account?
        <span className="text-blue-700 font-semibold">
          <br />
          <Link to={"/register"}>Register</Link>
        </span>
      </p>
    </div>
  );
};

export default Login;
