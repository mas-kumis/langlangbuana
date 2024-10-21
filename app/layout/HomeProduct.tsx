import React from "react";
// import Card from "../components/Card";
import HeadlineSection from "../components/HeadlineSection";

// const data = [
//   {
//     id: 1,
//     title: "Lava tour merapi, Suraloka Zoo, Kaliurang Park, Obelix Village",
//     price: " Rp. 400.000 / Mobil",
//   },
//   {
//     id: 2,
//     title: "Gembira Loka Zoo, Kids Fun, Heha Sky View, Tebing Breksi",
//     price: " Rp. 500.000 / Mobil",
//   },
//   {
//     id: 3,
//     title: "VW Borobudur, Lava Tour Merapi, Kaliurang Park, Suraloka Zoo",
//     price: " Rp. 380.000 / Mobil",
//   },
//   {
//     id: 4,
//     title: "Tlogo Putri Kaliurang, ATV Oxygen, Ledok Sambi, Obelix Village",
//     price: " Rp. 270.000 / Mobil",
//   },
//   {
//     id: 5,
//     title: "Lava tour merapi, Suraloka Zoo, Kaliurang Park, Obelix Village",
//     price: " Rp. 400.000 / Mobil",
//   },
//   {
//     id: 6,
//     title: "Gembira Loka Zoo, Kids Fun, Heha Sky View, Tebing Breksi",
//     price: " Rp. 500.000 / Mobil",
//   },
//   {
//     id: 7,
//     title: "VW Borobudur, Lava Tour Merapi, Kaliurang Park, Suraloka Zoo",
//     price: " Rp. 380.000 / Mobil",
//   },
//   {
//     id: 8,
//     title: "Tlogo Putri Kaliurang, ATV Oxygen, Ledok Sambi, Obelix Village",
//     price: " Rp. 270.000 / Mobil",
//   },
// ];

type ProductProps = {
  title: string;
  desc: string;
};

const HomeProduct = ({
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
      <div className="flex justify-center items-center">
        <button className="bg-yellow-400  px-4 py-2 rounded-xl font-bold">
          Show More...
        </button>
      </div>
    </div>
  );
};

export default HomeProduct;
