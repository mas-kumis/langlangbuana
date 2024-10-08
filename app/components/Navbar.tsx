"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <nav
        className={`flex justify-between items-center fixed bg-white w-[89%] m-auto lg:p-12  shadow-xl left-1/2 translate-x-[-50%] p-6 h-20 z-20  ${
          scroll ? " top-0 w-full rounded-none" : "fixed top-5 rounded-xl"
        }`}
      >
        <h1 className="font-bold text-2xl uppercase italic text-gray-800">
          LalangBuan
        </h1>
        <ul
          className={`    ${open ? "" : "hidden"} ${
            scroll && open
              ? "top-12 w-full right-0 rounded-b-none p-6"
              : "rounded-b-xl lg:p-0 p-6  right-5 "
          } lg:flex gap-4 lg:gap-8 text-sm lg:text-medium space-y-4 lg:space-y-0 [&>li]:cursor-pointer absolute lg:static text-center top-20  bg-white`}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Paket Wisata Jogja</Link>
          </li>
          <li>
            <Link href="/">Paket Wisata Nasional</Link>
          </li>
          <li>
            <Link href="/">Sewa Unit</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">Tentang Kami</Link>
          </li>
        </ul>
        <div className="lg:hidden ">
          <button className="text-black" onClick={handleOpen}>
            {open ? <GrClose size={25} /> : <FiMenu size={25} />}
          </button>
        </div>
      </nav>
      {open ? (
        <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
      ) : null}
    </>
  );
};

export default Navbar;
