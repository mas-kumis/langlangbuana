import React from "react";
import { FaInstagram, FaFacebookSquare, FaTiktok } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full py-[20px] px-[100px] bg-white  border-t-4">
      <div className="grid grid-cols-4 gap-8">
        <div className="flex flex-col space-y-2">
          <h4 className="text-blue-950 text-2xl font-bold">LangLangBuana</h4>
          <p className="text-sm text-justify">
            Penyedia layanan perjalanan yang berkomitmen untuk memberikan
            pengalaman wisata yang tak terlupakan. Kami menawarkan paket trip
            yang dirancang khusus untuk memenuhi kebutuhan pelanggan, mulai dari
            petualangan alam hingga liburan santai. Dengan tim profesional yang
            berpengalaman, kami siap membantu Anda menjelajahi keindahan
            destinasi lokal dan internasional dengan pelayanan terbaik.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h4 className="text-blue-950 text-2xl font-bold">QuickLink</h4>
          <ul className="text-sm space-y-1">
            <li>Paket City Tour Jogja</li>
            <li>Wisata 1 Hari Jogja</li>
            <li>Wisata 2 Hari Jogja</li>
            <li>Wisata 3 Hari Jogja</li>
            <li>HoneyMoon</li>
            <li>Family Gathering</li>
            <li>Custom Tour</li>
            <li>Rental Mobil</li>
          </ul>
        </div>
        <div className="flex flex-col space-y-2">
          <h4 className="text-blue-950 text-2xl font-bold">Hubungi Kami</h4>
          <div className="flex flex-col space-y-4">
            <div className="flex">
              <FaLocationDot className="mt-1" size={30} />
              <div className="ml-4 text-sm">
                <p>Larinta Tour Jogja</p>
                <p>
                  Jl. Ambarbinangun no. 241 brajan tempuran tamatirto, kasihan
                  bantul
                </p>
              </div>
            </div>
            <div className="flex">
              <IoCall className="" size={30} />
              <p className="text-sm ml-2">+123 456 7880</p>
            </div>
            <div className="flex">
              <MdEmail className="" size={30} />
              <p className="text-sm ml-2">businessemail@lalang.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <h4 className="text-blue-950 text-2xl font-bold">Dukungan</h4>
          <ul className="text-sm space-y-1">
            <li>Profile</li>
            <li>Syarat & Ketentuan</li>
            <li>Kebijakan & Privasi</li>
          </ul>
          <div>
            <p className="font-bold text-lg text-blue-950">Our Social Media</p>
            <div className="flex text-blue-950 space-x-4 items-center">
              <FaInstagram size={30} />
              <FaFacebookSquare size={30} />
              <FaTiktok size={25} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4 py-4">
        <p className="text-sm">
          Copyright © 2024 LalangLangBuana All rights reserved. Developed with
          ❤️ by Mas Kumis Dev
        </p>
      </div>
    </div>
  );
};

export default Footer;
