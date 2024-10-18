import HeadersLayout from "@/app/layout/HeadersLayout";
import React from "react";
import Footer from "@/app/components/Footer";
import Product from "@/app/components/paketwisatanasional/Product";
import AboutProduct from "@/app/components/paketwisatanasional/AboutProduct";
const page = () => {
  return (
    <div>
      <HeadersLayout />
      <AboutProduct />
      <Product />
      <Footer />
    </div>
  );
};

export default page;
