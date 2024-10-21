import React from "react";

type Headline = {
  title: string;
  desc: string;
};
const HeadlineSection = (props: Headline) => {
  return (
    <div>
      <div className="bg-blue-950  py-[50px] px-[30px] md:px-[50px] lg:px-[100px]">
        <h4 className="font-bold text-white text-3xl md:text-4xl lg:text-5xl text-center">
          {props.title} <br /> {props.desc}
        </h4>
      </div>
    </div>
  );
};
export default HeadlineSection;
