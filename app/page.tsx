import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyJoin from "@/components/WhyJoin";
import GrowTogether from "@/components/GrowTogether";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a0a1a] font-sans">
      <Header />
      <Hero />
      <WhyJoin />
      <GrowTogether />
      <Footer />
    </div>
  );
}
