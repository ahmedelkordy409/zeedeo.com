import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyJoin from "@/components/WhyJoin";
import GrowTogether from "@/components/GrowTogether";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen font-sans"
      style={{
        background: `
          radial-gradient(ellipse 60% 50% at 75% 20%, rgba(139, 46, 255, 0.15) 0%, transparent 50%),
          linear-gradient(180deg, #1a0a1f 0%, #1e0e24 50%, #1a0a1f 100%)
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
