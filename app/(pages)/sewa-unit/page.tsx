import HeadersLayout from "@/app/layout/HeadersLayout";
import React from "react";
import Footer from "@/app/components/Footer";
import AboutProduct from "@/app/components/sewaunit/AboutProduct";
import Product from "@/app/components/sewaunit/Product";

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
