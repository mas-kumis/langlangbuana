import { useState } from "react";
import bw from "../assets/bw.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="bg-slate-900 text-white">
      <div className="flex items-center md:px-[50px] px-[30px] lg:px-[100px] py-[10px] justify-between">
        <Link to={"/"}>
          <div className="flex items-center">
            <img src={bw} alt="" width={50} className="cursor-pointer" />
            <h1 className="font-bold text-3xl hover:text-yellow-400">Blog</h1>
          </div>
        </Link>
        <div>
          <ul className="md:flex space-x-8 hidden  ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "cursor-pointer text-yellow-400 font-bold"
                  : "cursor-pointer hover:text-yellow-400 font-bold"
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "cursor-pointer text-yellow-400 font-bold"
                  : "cursor-pointer hover:text-yellow-400 font-bold"
              }
            >
              <li>About</li>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "cursor-pointer text-yellow-400 font-bold"
                  : "cursor-pointer hover:text-yellow-400 font-bold"
              }
            >
              <li>Contact</li>
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "cursor-pointer text-yellow-400 font-bold"
                  : "cursor-pointer hover:text-yellow-400 font-bold"
              }
            >
              <li>Blog</li>
            </NavLink>
          </ul>
        </div>

        <div className="md:hidden ">
          <div onClick={() => setNavbar(!navbar)}>
            <GiHamburgerMenu size={30} />
          </div>
        </div>
      </div>
      <div className="md:hidden ">
        {navbar && (
          <div className="w-full h-screen  bg-slate-900">
            <ul className="text-white space-y-4">
              <li className="cursor-pointer px-4 hover:text-yellow-400 font-bold">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="cursor-pointer px-4 hover:text-yellow-400 font-bold">
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li className="cursor-pointer px-4 hover:text-yellow-400 font-bold">
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
              <li className="cursor-pointer px-4 hover:text-yellow-400 font-bold">
                <NavLink to={"/blog"}>Blog</NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
