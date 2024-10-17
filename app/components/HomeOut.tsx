import React from "react";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Lava tour merapi, Suraloka Zoo, Kaliurang Park, Obelix Village",
    price: " Rp. 400.000 / Mobil",
  },
  {
    id: 2,
    title: "Gembira Loka Zoo, Kids Fun, Heha Sky View, Tebing Breksi",
    price: " Rp. 500.000 / Mobil",
  },
  {
    id: 3,
    title: "VW Borobudur, Lava Tour Merapi, Kaliurang Park, Suraloka Zoo",
    price: " Rp. 380.000 / Mobil",
  },
  {
    id: 4,
    title: "Tlogo Putri Kaliurang, ATV Oxygen, Ledok Sambi, Obelix Village",
    price: " Rp. 270.000 / Mobil",
  },
  {
    id: 5,
    title: "Lava tour merapi, Suraloka Zoo, Kaliurang Park, Obelix Village",
    price: " Rp. 400.000 / Mobil",
  },
  {
    id: 6,
    title: "Gembira Loka Zoo, Kids Fun, Heha Sky View, Tebing Breksi",
    price: " Rp. 500.000 / Mobil",
  },
  {
    id: 7,
    title: "VW Borobudur, Lava Tour Merapi, Kaliurang Park, Suraloka Zoo",
    price: " Rp. 380.000 / Mobil",
  },
  {
    id: 8,
    title: "Tlogo Putri Kaliurang, ATV Oxygen, Ledok Sambi, Obelix Village",
    price: " Rp. 270.000 / Mobil",
  },
];

const HomeOut = () => {
  return (
    <div className="my-[50px]">
      <div className="bg-blue-950  py-[50px] px-[30px] md:px-[50px] lg:px-[100px]">
        <h4 className="font-bold text-white text-3xl md:text-4xl lg:text-5xl text-center">
          Dari Jogja/Magelang ke Seluruh Dunia <br/> Temukan Keajaiban Bersama
          LalangBuana
        </h4>
      </div>
      <div className=" mx-[30px] md:mx-[50px] lg:mx-[100px]">
        <div className="my-[20px] md:my-[50px]  grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {data.map((_, i) => (
            <div
              key={i}
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
                <h5 className="font-bold text-xl">{_?.title}</h5>
                <div>
                  <p className="line-through text-xs">
                    Paket Rp. 600.000 / Mobil
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="font-bold">{_?.price}</p>
                    <p className="bg-yellow-400 px-2 py-1 rounded-md font-bold">
                      LIMITED
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-yellow-400  px-4 py-2 rounded-xl font-bold">
          {" "}
          Show More...
        </button>
      </div>
    </div>
  );
};

export default HomeOut;
