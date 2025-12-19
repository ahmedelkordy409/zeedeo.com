import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JoinBetaForm from "@/components/join-beta/JoinBetaForm";

export default function JoinBetaPage() {
    return (
        <div className="min-h-screen bg-[#1a0a1a] font-sans">
            <Header />
            <main
                className="pt-[72px]"
                style={{
                    background: "linear-gradient(135deg, #1a0a1a 0%, #1e0e20 30%, #1a0a1a 50%, #2d1230 80%, #1a0a1a 100%)"
                }}
            >
                <div className="mx-auto max-w-[1200px]">
                    <JoinBetaForm />
                </div>
            </main>
            <Footer />
        </div>
    );
}
