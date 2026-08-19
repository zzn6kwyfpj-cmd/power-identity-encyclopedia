import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { ArrowLeft, Home, ScrollText } from "lucide-react";
import { useLocation } from "wouter";

// Royal Archive design: unavailable routes are rendered as a formal catalogue notice with midnight ink, antique-gold rulework, a ceremonial seal, and the same scholarly voice as the archive.

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div style={{ background: "#0a1118", minHeight: "100vh" }}>
      <Navigation />
      <main className="container" style={{ maxWidth: 980, paddingTop: 156, paddingBottom: 94 }}>
        <section style={{ position: "relative", borderTop: "1px solid rgba(212,175,55,0.68)", borderBottom: "1px solid rgba(212,175,55,0.42)", padding: "clamp(42px, 8vw, 94px) clamp(26px, 7vw, 86px)", background: "radial-gradient(circle at 84% 16%, rgba(212,175,55,0.14), transparent 27%), linear-gradient(130deg, rgba(212,175,55,0.10), #0d1721 47%, rgba(139,26,26,0.14))", textAlign: "center" }}>
          <div aria-hidden="true" style={{ display: "flex", alignItems: "center", gap: 10, color: "#d4af37", marginBottom: 30 }}><span style={{ flex: 1, borderTop: "1px solid currentColor" }} /><span style={{ fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.28em" }}>CATALOGUE NOTICE · ROUTE UNAVAILABLE</span><span style={{ flex: 1, borderTop: "1px solid currentColor" }} /></div>
          <div aria-hidden="true" style={{ width: 88, height: 88, margin: "0 auto 24px", border: "2px solid #d4af37", borderRadius: "50%", boxShadow: "0 0 0 6px rgba(212,175,55,0.08), inset 0 0 26px rgba(212,175,55,0.12)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#d4af37" }}><ScrollText size={26} /><span style={{ fontFamily: "Cinzel, serif", fontSize: 8, letterSpacing: "0.15em", marginTop: 4 }}>404</span></div>
          <div style={{ color: "#d4af37", fontFamily: "Cinzel, serif", fontSize: 10, letterSpacing: "0.25em", marginBottom: 12 }}>REGISTRY REFERENCE · 404</div>
          <h1 style={{ color: "#f0e3bc", fontFamily: "Cinzel, serif", fontSize: "clamp(2.1rem, 5vw, 4.2rem)", lineHeight: 1.05, margin: 0 }}>This catalogue entry is unavailable.</h1>
          <p style={{ maxWidth: 625, margin: "24px auto 0", color: "#c4cedb", fontFamily: "Cormorant Garamond, serif", fontSize: "1.3rem", lineHeight: 1.65 }}>The requested route does not correspond to a current public exhibit. Return to the archive’s reading room to continue with a documented source, chapter, or chronological record.</p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14, marginTop: 34 }}>
            <button onClick={handleGoHome} style={{ display: "inline-flex", alignItems: "center", gap: 9, border: "1px solid #d4af37", background: "#d4af37", color: "#0a1118", fontFamily: "Cinzel, serif", fontSize: 10, letterSpacing: "0.12em", padding: "13px 18px", cursor: "pointer" }}><Home size={14} /> RETURN TO READING ROOM</button>
            <button onClick={() => window.history.back()} style={{ display: "inline-flex", alignItems: "center", gap: 9, border: "1px solid rgba(212,175,55,0.42)", background: "transparent", color: "#d4af37", fontFamily: "Cinzel, serif", fontSize: 10, letterSpacing: "0.12em", padding: "13px 18px", cursor: "pointer" }}><ArrowLeft size={14} /> RETURN TO PRIOR RECORD</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
