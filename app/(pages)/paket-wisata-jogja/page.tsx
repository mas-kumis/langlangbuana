import HeadersLayout from "@/app/layout/HeadersLayout";
import React from "react";
import Footer from "@/app/components/Footer";
import Product from "@/app/components/paketwisatajogja/Product";
const page = () => {
  return (
    <div>
      <HeadersLayout />
      <Product />
      <Footer />
    </div>
  );
};

export default page;
