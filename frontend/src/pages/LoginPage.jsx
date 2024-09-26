import Login from "../components/Login";
import Navigation from "../components/Navigation";

const LoginPage = () => {
  return (
    <div className="flex">
      <Navigation />
      <div className="w-full h-screen grid grid-cols-2">
        <Login />
        <p>Wildan</p>
      </div>
    </div>
  );
};

export default LoginPage;
