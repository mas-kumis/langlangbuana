import React from "react";

const data = [
  {
    id: 1,
    title: "Trip Jogja",
    desc: " Rasakan petualangan tak terlupakan di Jogja! Bergabunglah dalam trip kami untuk menjelajahi budaya, kuliner, dan keindahan alam dengan pemandu lokal yang berpengalaman. Ciptakan kenangan indah di kota istimewa ini!",
  },
  {
    id: 2,
    title: "Trip Bali",
    desc: "Buat kamu yang ada di Jogja mau trip ke Bali? Kami menyediakan paket perjalanan yang menarik untuk kamu! Bergabunglah dengan kami dan nikmati pengalaman liburan yang tak terlupakan di Bali. Ciptakan kenangan indah di pulau indah ini!",
  },
  {
    id: 3,
    title: "Sewa Unit Kendaraan Jogja",
    desc: "Bingung Cari Kendaraan Ketika sampai Jogja? Sewa unit kami, dan nikmati pengalaman liburan yang tak terlupakan di Jogja. Ciptakan kenangan indah di kota istimewa ini!",
  },
  {
    id: 4,
    title: "Liburan Bersama",
    desc: "Bergabunglah bersama kami di Jogja dan nikmati pengalaman liburan yang tak terlupakan di Jogja. Ciptakan kenangan indah di kota istimewa ini!",
  },
];

const Service = () => {
  return (
    <div className="my-[20px] px-[30px] md:px-[50px] xl:px-[100px]">
      <div className="flex flex-col ">
        <h1 className="text-blue-950 text-center text-3xl md:text-4xl lg:text-5xl font-bold">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.map((_, i) => (
            <div key={i} className="w-full shadow-2xl flex flex-col rounded-xl">
              <div className="flex flex-col h-full my-8 space-y-4 mx-8  text-left">
                <h5 className="font-bold text-xl text-center bg-blue-950  text-white py-1 rounded-md">
                  {_?.title}
                </h5>
                <div>
                  <div className=" ">
                    <p className="">{_?.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Service;
