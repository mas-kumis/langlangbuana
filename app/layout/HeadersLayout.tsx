import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";

const HeadersLayout = () => {
  return (
    <div className="bg-red-800">
      <Navbar />
      <Jumbotron />
    </div>
  );
};

export default HeadersLayout;
