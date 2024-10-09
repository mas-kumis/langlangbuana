import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
const HeadersLayout = () => {
  return (
    <div className="bg-red-800 bg-[url('/header.jpg')] bg-cover">
      <Navbar />
      <Jumbotron />
      WIldan
    </div>
  );
};

export default HeadersLayout;
