import HeadersLayout from "@/app/layout/HeadersLayout";
import Promo from "./components/Promo";
import Features from "./components/Features";
import Solution from "./components/Solution";
// import Gallery from "@/app/layout/Gallery";
import Footer from "./components/Footer";
import Service from "./components/Service";
import HomeJogja from "./components/HomeJogja";
import HomeOut from "./components/HomeOut";
export default function Home() {
  return (
    <div className="">
      <HeadersLayout />
      <Features />
      <Solution />
      <Service />
      <Promo />
      <HomeJogja />
      <HomeOut />
      <Footer />
    </div>
  );
}
