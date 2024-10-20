"use client";
import { useState } from "react";
import toast from "react-hot-toast";

type JumboProps = {
  title: string;
  desc: string;
};
const Jumbotron = (props: JumboProps) => {
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    toast.success(`Terima Kasih ${email} Telah Menggunakan Layanan Kami`);
    setEmail("");
  };
  return (
    <div className="">
      <div className="h-screen flex items-center justify-center lg:px-[150px] flex-col px-[20px] md:px-[80px]  text-center">
        <h1 className="text-3xl md:text-5xl uppercase font-bold italic lg:text-6xl text-white">
          {/* Jelajahi Pesona Jogja
           */}
          {props.title}
          <br />
          <span className="text-2xl font-medium textt-white">
            Paket Wisata Seru, Semua Dalam Satu Klik!
          </span>
        </h1>
        <p className="font-bold text-white">{props.desc}</p>
        <div className="bg-white rounded-xl w-[400px] flex items-center justify-between my-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" px-4 py-2 border-2 rounded-l-xl w-full focus:outline-none"
          />
          <button
            onClick={handleSubmit}
            className="bg-yellow-400 w-[100px] px-4 py-2 rounded-r-xl font-bold"
          >
            {" "}
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
