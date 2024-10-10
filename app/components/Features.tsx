import React from "react";

const data = [
  {
    id: 1,
    persentase: "63%",
    title: "Kesulitan Merencanakan Rencana Perjalanan:",
    article: "Banyak orang bingung memilih destinasi dan mengatur akomodasi.",
  },
  {
    id: 2,
    persentase: "58%",
    title: "Khawatir Tentang Transportasi:",
    article: "Mencari transportasi di Jogja bisa merepotkan",
  },
  {
    id: 3,
    title: "Khawatir Tentang Keamanan Selama Berlibur",
    persentase: "65%",
    article:
      " Kekhawatiran soal keamanan saat menjelajah tempat baru sering mengganggu kenyamanan",
  },
  {
    id: 4,
    title: "Takut biaya liburan melebihi anggaran",
    persentase: "50%",
    article: "Takut biaya liburan melebihi anggaran.",
  },
];
const Features = () => {
  return (
    <div className="my-[50px] mx-[30px] md:mx-[50px] lg:mx-[100px]">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="items-center flex flex-col space-y-4 mr-12 my-8">
          <h4 className="font-bold text-blue-950 text-3xl md:text-5xl lg:text-5xl ">
            Apakah Anda Termasuk Salah Satu dari 70% Orang yang Mengalami
            Masalah Ini?{" "}
          </h4>
          <p className="mr-8">
            Menurut data terbaru, sekitar 70% orang mengalami kesulitan saat
            merencanakan perjalanan mereka, mulai dari memilih destinasi yang
            tepat hingga mengatur akomodasi dan transportasi, sehingga proses
            yang seharusnya menyenangkan ini sering kali berubah menjadi sumber
            stres yang mengganggu antusiasme mereka untuk berlibur.
          </p>
        </div>
        <div className="  grid xl:grid-cols-2 gap-4">
          {data.map((_, i) => (
            <div key={i} className=" py-8 flex flex-col rounded-xl">
              <div className="mx-4 text-4xl font-black italic text-yellow-400">
                {_?.persentase}
              </div>
              <div className="flex flex-col mx-4 text-left">
                <h5 className="font-bold text-lg my-1 leading-5">{_?.title}</h5>
                <p className="text-sm">{_?.article} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
