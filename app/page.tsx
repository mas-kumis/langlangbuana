import HeadersLayout from "@/app/layout/HeadersLayout";
import Promo from "./components/Promo";
import Features from "./components/Features";
import Solution from "./components/Solution";
import Gallery from "@/app/layout/Gallery";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="">
      <HeadersLayout />
      <Features />
      <Solution />
      <Gallery />
      <Promo />
      <Footer />
    </div>
  );
}
