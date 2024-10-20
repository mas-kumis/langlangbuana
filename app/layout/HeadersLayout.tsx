import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";

type JumboProps = {
  title: string;
  desc: string;
};
const HeadersLayout = (props: JumboProps) => {
  return (
    <div className="bg-[url('/header.png')] bg-cover">
      <Navbar />
      <Jumbotron title={props.title} desc={props.desc} />
    </div>
  );
};

export default HeadersLayout;
