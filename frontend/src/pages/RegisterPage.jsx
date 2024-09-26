import Navigation from "../components/Navigation";
import Register from "../components/Register";

const RegisterPage = () => {
  return (
    <div className="flex">
      <Navigation />
      <div className="w-full h-screen grid grid-cols-2">
        <Register />
        <p>Wildan</p>
      </div>
    </div>
  );
};

export default RegisterPage;
