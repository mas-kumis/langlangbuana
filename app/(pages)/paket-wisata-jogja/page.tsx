import HeadersLayout from "@/app/layout/HeadersLayout";
import React from "react";
import Footer from "@/app/components/Footer";
import Product from "@/app/components/paketwisatajogja/Product";
import AboutProduct from "@/app/components/paketwisatajogja/AboutProduct";
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
