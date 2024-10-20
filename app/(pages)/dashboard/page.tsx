import React from "react";
import Sidebar from "@/app/components/dashboard/Sidebar";
import Promo from "@/app/components/dashboard/Promo";
const page = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="grid grid-cols-2 mx-[50px] my-[50px] w-full">
        <Promo />
        <p>Wildan</p>
      </div>
    </div>
  );
};

export default page;
