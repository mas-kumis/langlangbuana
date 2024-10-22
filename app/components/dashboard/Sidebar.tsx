import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-[300px] px-4 py-8 bg-blue-950 h-screen text-white shadow-lg flex flex-col justify-between">
      <div>
        <h4 className="text-3xl font-bold italic">Dashboard</h4>
        <ul className="space-y-2 my-4 font-semibold  ">
          <Link href="/dashboard">
            <li className="hover:bg-blue-900 py-2 rounded-lg px-2">Promo</li>
          </Link>
          <Link href="/dashboard/wisata-jogja">
            <li className="hover:bg-blue-900 py-2 rounded-lg px-2">
              Wisata Jogja
            </li>
          </Link>
          <Link href="/dashboard/wisata-nasional">
            <li className="hover:bg-blue-900 py-2 rounded-lg px-2">
              Wisata Nasional
            </li>
          </Link>
          <Link href="/dashboard/sewa-unit">
            {" "}
            <li className="hover:bg-blue-900 py-2 rounded-lg px-2">
              Sewa Unit
            </li>
          </Link>
          <Link href="/dashboard/blog">
            {" "}
            <li className="hover:bg-blue-900 py-2 rounded-lg px-2">Blog</li>
          </Link>
          <Link href="/dashboard/subscriber">
            <li className="hover:bg-blue-900 py-2 rounded-lg px-2">
              Subscriber Email
            </li>
          </Link>
          <Link href="/dashboard/customer">
            <li className="hover:bg-blue-900 py-2 rounded-lg px-2">
              Data Customer
            </li>
          </Link>

          <Link href="/">
            <li className="hover:bg-blue-900 py-2 rounded-lg px-2">
              Lihat Website
            </li>
          </Link>
        </ul>
      </div>
      <div className="hover:bg-blue-900 py-2 rounded-lg px-2 font-semibold mx-2">
        Logout
      </div>
    </div>
  );
};
export default Sidebar;
