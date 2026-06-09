import Hero from "@/components/home/Hero";
import StatsBanner from "@/components/home/StatsBanner";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <StatsBanner />
    </div>
  );
}
