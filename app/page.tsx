import HeadersLayout from "@/app/layout/HeadersLayout";
import Promo from "./components/Promo";
import Features from "./components/Features";
import Solution from "./components/Solution";
export default function Home() {
  return (
    <div>
      <HeadersLayout />
      <Features />
      <Solution />
      <Promo />
    </div>
  );
}
