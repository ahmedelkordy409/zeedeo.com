import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyJoin from "@/components/WhyJoin";
import GrowTogether from "@/components/GrowTogether";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen font-sans relative overflow-x-hidden"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 20% 10%, rgba(139, 46, 140, 0.4) 0%, transparent 50%),
          radial-gradient(ellipse 60% 50% at 80% 30%, rgba(100, 30, 150, 0.35) 0%, transparent 50%),
          radial-gradient(ellipse 70% 60% at 10% 60%, rgba(160, 40, 130, 0.3) 0%, transparent 50%),
          radial-gradient(ellipse 50% 40% at 90% 80%, rgba(130, 30, 140, 0.25) 0%, transparent 50%),
          radial-gradient(ellipse 60% 50% at 50% 50%, rgba(80, 20, 120, 0.3) 0%, transparent 60%),
          linear-gradient(180deg, #0d0612 0%, #150a1e 30%, #1a0c24 50%, #180a20 70%, #0d0612 100%)
        `
      }}
    >
      <Header />
      <Hero />
      <WhyJoin />
      <GrowTogether />
      <Footer />
    </div>
  );
}
