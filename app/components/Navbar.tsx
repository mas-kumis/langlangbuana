"use client";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-4 left-0 right-0 px-[30px] md:px-[50px] lg:px-[100px] my-4">
      <nav className="w-full flex justify-between">
        <div>
          <FaPaperPlane size={30} className="text-white" />
        </div>
        <ul className="hidden md:flex space-x-4 lg:space-x-8 text-white hover:text-slate-100 cursor-pointer ">
          <li>Home</li>
          <li>Profile</li>
          <li>Paket Wisata Jogja</li>
          <li>Paket Wisata Nasional</li>
          <li>Sewa Unit</li>
          <li>Blog</li>
        </ul>
        <div className="text-white md:hidden">
          <button onClick={() => setOpen(!open)}>
            <GiHamburgerMenu size={30} />
          </button>
        </div>
      </nav>
      <div>
        <ul className={`md:hidden ${open ? "block" : "hidden"}`}>
          <li>Home</li>
          <li>Profile</li>
          <li>Paket Wisata Jogja</li>
          <li>Paket Wisata Nasional</li>
          <li>Sewa Unit</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
