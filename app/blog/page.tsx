import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogSection from "@/components/BlogSection";

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-[#1a0a1a] font-sans">
            <Header />
            <main className="pt-[72px]">
                <BlogSection />
            </main>
            <Footer />
        </div>
    );
}
