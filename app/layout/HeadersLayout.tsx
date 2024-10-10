import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
const HeadersLayout = () => {
  return (
    <div className="bg-[url('/header.png')] bg-cover">
      <Navbar />
      <Jumbotron />
    </div>
  );
};

export default HeadersLayout;
