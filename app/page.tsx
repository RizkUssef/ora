import Heritage from "@/components/home/Heritage";
import Hero from "@/components/home/Hero";
import Packages from "@/components/home/Packages";
import Spaces from "@/components/home/Spaces";
import StatsBanner from "@/components/home/StatsBanner";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <StatsBanner />
      <Heritage />
      <Spaces />
      <Packages />
      <Footer />
    </div>
  );
}
