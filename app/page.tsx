import HeadersLayout from "@/app/layout/HeadersLayout";
import Features from "./components/Features";
import Solution from "./components/Solution";
import Footer from "./components/Footer";
import Service from "./components/Service";
import HomeProduct from "./layout/HomeProduct";
import AllProduct from "./layout/AllProduct";
import Card from "./components/Card";

const data = [
  {
    id: 1,
    title: "Lava tour merapi, Suraloka Zoo, Kaliurang Park, Obelix Village",
    price: " Rp. 400.000 / Mobil",
  },
  {
    id: 2,
    title: "Gembira Loka Zoo, Kids Fun, Heha Sky View, Tebing Breksi",
    price: " Rp. 500.000 / Mobil",
  },
  {
    id: 3,
    title: "VW Borobudur, Lava Tour Merapi, Kaliurang Park, Suraloka Zoo",
    price: " Rp. 380.000 / Mobil",
  },
  {
    id: 4,
    title: "Tlogo Putri Kaliurang, ATV Oxygen, Ledok Sambi, Obelix Village",
    price: " Rp. 270.000 / Mobil",
  },
  {
    id: 5,
    title: "Lava tour merapi, Suraloka Zoo, Kaliurang Park, Obelix Village",
    price: " Rp. 400.000 / Mobil",
  },
  {
    id: 6,
    title: "Gembira Loka Zoo, Kids Fun, Heha Sky View, Tebing Breksi",
    price: " Rp. 500.000 / Mobil",
  },
  {
    id: 7,
    title: "VW Borobudur, Lava Tour Merapi, Kaliurang Park, Suraloka Zoo",
    price: " Rp. 380.000 / Mobil",
  },
  {
    id: 8,
    title: "Tlogo Putri Kaliurang, ATV Oxygen, Ledok Sambi, Obelix Village",
    price: " Rp. 270.000 / Mobil",
  },
];

interface Promo {
  title: string;
  price: string;
}

interface Jogja {
  title: string;
  price: string;
}

async function getPromo() {
  const res = await fetch("http://localhost:3000/api/promo", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

async function getJogja() {
  const res = await fetch("http://localhost:3000/api/jogja", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

export default async function Home() {
  const promo: Promo[] = await getPromo().catch((error) => {
    console.error(error);
    return []; // Return an empty array on error
  });

  const jogja: Jogja[] = await getJogja().catch((error) => {
    console.error(error);
    return []; // Return an empty array on error
  });
  return (
    <div className="">
      <HeadersLayout
        title="Jelajahi Pesona Jogja"
        desc="Paket wisata seru, semua dalam satu klik!"
      />
      <Features />
      <Solution />
      <Service />
      {/* Promo */}
      <AllProduct
        title="Liburan Tak Pernah Semurah Ini"
        desc="Dapatkan Diskon Open Trip Sekarang!"
      >
        {promo.length > 0 ? (
          promo.map((item, i) => (
            <Card key={i} title={item.title} price={item.price} index={i} />
          ))
        ) : (
          <p>No promos Availbale.</p>
        )}
      </AllProduct>
      {/* Jogja */}
      <HomeProduct
        title="Jelajahi Pesona Jogja"
        desc="Liburan ke Jogja bersama LalangBuana"
      >
        {jogja.length > 0 ? (
          jogja.map((item, i) => (
            <Card key={i} title={item.title} price={item.price} index={i} />
          ))
        ) : (
          <p>No promos available.</p>
        )}
      </HomeProduct>
      <HomeProduct
        title="Dari Jogja/Magelang ke Seluruh Dunia"
        desc="Temukan Keajaiban bersama LalangBuana"
      >
        {data.map((item, i) => (
          <Card key={i} title={item.title} price={item.price} index={i} />
        ))}
      </HomeProduct>
      <Footer />
    </div>
  );
}
