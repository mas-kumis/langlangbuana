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
    <nav
      className={`w-[89%] fixed left-1/2 shadow-xl bg-white  translate-x-[-50%] ${
        scroll ? " top-0 w-full rounded-none  " : " top-5 rounded-xl"
      }`}
    >
      <div className="flex justify-between items-center py-4 px-8">
        <div className="uppercase font-bold italic text-2xl">LalangBuana</div>
        <ul className="xl:flex gap-4 hidden">
          <li className="py-2 px-4 hover:bg-yellow-400 font-bold rounded-xl">
            <Link href="/">Home</Link>
          </li>
          <li className="py-2 px-4 hover:bg-yellow-400 font-bold rounded-xl">
            <Link href="/">Paket Wisata Jogja</Link>
          </li>
          <li className="py-2 px-4 hover:bg-yellow-400 font-bold rounded-xl">
            <Link href="/">Paket Wisata Nasional</Link>
          </li>
          <li className="py-2 px-4 hover:bg-yellow-400 font-bold rounded-xl">
            <Link href="/">Sewa Unit</Link>
          </li>
          <li className="py-2 px-4 hover:bg-yellow-400 font-bold rounded-xl">
            <Link href="/">Blog</Link>
          </li>
          <li className="py-2 px-4 hover:bg-yellow-400 font-bold rounded-xl">
            <Link href="/">Profile</Link>
          </li>
        </ul>
        <div className="xl:hidden">
          {open ? (
            <GrClose onClick={handleOpen} />
          ) : (
            <FiMenu onClick={handleOpen} />
          )}
        </div>
      </div>
      <ul
        className={`${
          open ? "block" : "hidden"
        }  p-3 space-y-2 text-center w-full `}
      >
        <li className="py-2 px-4 hover:bg-yellow-400 font-bold rounded-xl">
          <Link href="/">Home</Link>
        </li>
        <li className="py-2 px-4 hover:bg-yellow-400 font-bold rounded-xl">
          <Link href="/">Paket Wisata Jogja</Link>
        </li>
        <li className="py-2 px-4 hover:bg-yellow-400 font-bold rounded-xl">
          <Link href="/">Paket Wisata Nasional</Link>
        </li>
        <li className="py-2 px-4 hover:bg-yellow-400 font-bold rounded-xl">
          <Link href="/">Sewa Unit</Link>
        </li>
        <li className="py-2 px-4 hover:bg-yellow-400 font-bold rounded-xl">
          <Link href="/">Blog</Link>
        </li>
        <li className="py-2 px-4 hover:bg-yellow-400 font-bold rounded-xl">
          <Link href="/">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
