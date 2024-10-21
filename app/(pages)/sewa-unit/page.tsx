import HeadersLayout from "@/app/layout/HeadersLayout";
import React from "react";
import Footer from "@/app/components/Footer";
import AboutProduct from "@/app/components/AboutProduct";
import AllProduct from "@/app/layout/AllProduct";
import Card from "@/app/components/Card";
const About = [
  "Paket wisata sudah termasuk: mobil, driver, BBM dan bersifat Private trip/familly trip.",
  "Free penjemputan/pengantaran Terminal, Stasiun KA & Hotel area Yogyakarta.",
  "Bebas menentukan destinasi wisata diluar paket ( Custom ), asalkan masih satu arah dengan tempat wisata lain maksimal 4 destinasi",
  "Harga dapat berubah sewaktu-waktu apabila High Season.",
  "Belum termasuk: tiket masuk wisata, parkir, makan driver. dan hotel.",
  "Harga tidak berlaku saat Long Weekend, Idul Fitri, Natal dan Tahun Baru",
  "Untuk high season akan dikenakan charge sebesar 10% dari harga normal (libur sekolah, long weekend, libur umum).",
  "Untuk peak season akan dikenakan charge sebesar 30% dari harga normal (libur natal, tahun baru, lebaran).",
  "Untuk booking silahkan klik tombol book now diatas",
  "Kami memerlukan DP 30% dari total harga untuk menjamin pemesanan setelah proses booking.",
];
const page = () => {
  return (
    <div>
      <HeadersLayout title="Sewa Unit" desc="LalangBuana Travel" />
      <AboutProduct title="Sewa Unit" list={About} />
      <AllProduct
        title="Dari Jogja ke Seluruh Dunia"
        desc="Liburan Berkelana bersama LalangBuana"
      >
        {data.map((item, i) => (
          <Card key={i} title={item.title} price={item.price} index={i} />
        ))}
      </AllProduct>
      <Footer />
    </div>
  );
};

export default page;
