import React from "react";
import Image from "next/image";

type CardProps = {
  title: string;
  price: string;
  index: number;
};
const Card = (props: CardProps) => {
  return (
    <div
      key={props.index}
      className="w-full h-[400px] shadow-2xl flex flex-col rounded-xl"
    >
      <div className="w-[93%] h-[200px] m-2 rounded-t-xl mx-auto  ">
        <Image
          src="/pinus.jpg"
          alt="image"
          className="rounded-t-xl w-full h-full object-cover"
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col justify-between h-full my-4 mx-4  text-left">
        <h5 className="font-bold text-xl">{props.title}</h5>
        <div>
          <p className="line-through text-xs">Paket Rp. 600.000 / Mobil</p>
          <div className="flex justify-between items-center">
            <p className="font-bold">{props.price}</p>
            <p className="bg-yellow-400 px-2 py-1 rounded-md font-bold">
              LIMITED
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
