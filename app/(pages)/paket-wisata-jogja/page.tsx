import HeadersLayout from "@/app/layout/HeadersLayout";
import React from "react";
import Footer from "@/app/components/Footer";
import Product from "@/app/components/paketwisatajogja/Product";
import AboutProduct from "@/app/components/paketwisatajogja/AboutProduct";
const page = () => {
  return (
    <div>
      <HeadersLayout
        title="Temukan Pesona Jogja"
        desc="Kota Budaya dengan Ratusan Wisata Alam yang Menyenangkan"
      />
      <AboutProduct />
      <Product />
      <Footer />
    </div>
  );
};

export default page;
