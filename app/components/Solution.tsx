import React from "react";
import Image from "next/image";

const Solution = () => {
  return (
    <div className="w-full grid gap-8 lg:grid-cols-2 bg-blue-950 px-[30px] md:px-[50px] lg:px-[100px] py-[50px]">
      <div className="w-full h-full rounded-xl">
        <Image
          src="/weare.jpeg"
          alt="image"
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-xl shadow-xl  border-white border-8"
        />
      </div>
      <div className="text-white">
        <h5 className="font-bold text-3xl">
          Langlangbuana menjawab semua kegundahan Anda..
        </h5>
        <ul className="flex flex-col my-4 space-y-4">
          <li>
            Kami menyediakan layanan perencanaan perjalanan yang komprehensif,
            sehingga Anda dapat menikmati pengalaman liburan tanpa harus repot
            memikirkan detailnya.
          </li>
          <li>
            {" "}
            layanan transportasi yang kami tawarkan, Anda dapat bepergian dengan
            nyaman dan aman ke berbagai destinasi di Jogja tanpa khawatir akan
            kesulitan transportasi.
          </li>
          <li>
            Tim kami terdiri dari pemandu wisata berpengalaman yang akan
            memastikan keamanan dan kenyamanan Anda selama perjalanan, sehingga
            Anda dapat menikmati liburan dengan tenang.
          </li>
          <li>
            Jangan biarkan kebingungan menghalangi liburan Anda. Kami hadir
            untuk membantu merencanakan perjalanan yang menyenangkan dan tak
            terlupakan dengan mudah
          </li>
          <li>Nikmati Potongan Harga Yang Kami Tawarkan</li>
        </ul>
      </div>
    </div>
  );
};

export default Solution;
