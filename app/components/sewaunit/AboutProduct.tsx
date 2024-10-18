import React from "react";

const AboutProduct = () => {
  return (
    <div className="my-[30px] px-[30px] md:px-[50px] xl:px-[100px]">
      <h4 className="text-blue-950 text-3xl md:text-4xl lg:text-5xl font-bold">
        Sewa Unit Kendaraan
      </h4>
      <h5 className="text-blue-950 text-lg md:text-xl lg:text-2xl font-semibold mx-2">
        LalangBuana Travel
      </h5>
      <div className="mx-4 my-4 text-slate-800">
        <ul className="list-disc">
          <li>
            Paket wisata sudah termasuk: mobil, driver, BBM dan bersifat Private
            trip/familly trip.
          </li>
          <li>
            Free penjemputan/pengantaran Terminal, Stasiun KA & Hotel area
            Yogyakarta.
          </li>
          <li>
            Bebas menentukan destinasi wisata diluar paket ( Custom ), asalkan
            masih satu arah dengan tempat wisata lain maksimal 4 destinasi.{" "}
          </li>
          <li>Harga dapat berubah sewaktu-waktu apabila High Season.</li>
          <li>
            Belum termasuk: tiket masuk wisata, parkir, makan driver. dan hotel.
          </li>
          <li>
            Harga tidak berlaku saat Long Weekend, Idul Fitri, Natal dan Tahun
            Baru
          </li>
          <li>
            Untuk high season akan dikenakan charge sebesar 10% dari harga
            normal (libur sekolah, long weekend, libur umum).
          </li>
          <li>
            Untuk peak season akan dikenakan charge sebesar 30% dari harga
            normal (libur natal, tahun baru, lebaran).
          </li>
          <li>Untuk booking silahkan klik tombol book now diatas</li>
          <li>
            Kami memerlukan DP 30% dari total harga untuk menjamin pemesanan
            setelah proses booking.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutProduct;
