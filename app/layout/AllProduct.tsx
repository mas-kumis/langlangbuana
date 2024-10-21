import React from "react";
import HeadlineSection from "../components/HeadlineSection";

type ProductProps = {
  title: string;
  desc: string;
};

const AllProduct = ({
  children,
  ...props
}: React.PropsWithChildren<ProductProps>) => {
  return (
    <div className="my-[50px]">
      <HeadlineSection title={props.title} desc={props.desc} />
      <div className=" mx-[30px] md:mx-[50px] lg:mx-[100px]">
        <div className="my-[20px] md:my-[50px]  grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
