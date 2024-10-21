import React from "react";

type List = {
  title: string;
  list: string[];
};
const AboutProduct = (props: List) => {
  return (
    <div className="my-[30px] px-[30px] md:px-[50px] xl:px-[100px]">
      <h4 className="text-blue-950 text-3xl md:text-4xl lg:text-5xl font-bold">
        {props.title}
      </h4>
      <h5 className="text-blue-950 text-lg md:text-xl lg:text-2xl font-semibold mx-2">
        LalangBuana Travel
      </h5>
      <div className="mx-4 my-4 text-slate-800">
        <ul className="list-disc">
          {props.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutProduct;
