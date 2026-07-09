import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FIGURES } from "@/lib/manuscriptData";

export default function FiguresPage() {
  return (
    <div style={{ backgroundColor: "#0a1118", minHeight: "100vh" }}>
      <Navigation />
      <section style={{ paddingTop: 100, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <div className="text-center" style={{ marginBottom: 60 }}>
            <div style={{ color: "#d4af37", fontSize: 11, letterSpacing: "0.4em", fontFamily: "Cinzel, serif", marginBottom: 12 }}>✦ APPENDIX A ✦</div>
            <h1 style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: 16 }}>Figures of Resistance and Legacy</h1>
            <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: "1.1rem", maxWidth: 600, margin: "0 auto" }}>
              These individuals did not just survive the system documented in this encyclopedia. They resisted it, documented it, and built the intellectual architecture that makes liberation possible.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
            {FIGURES.map(figure => (
              <div key={figure.name} style={{ background: "#0f1923", border: "1px solid rgba(212,175,55,0.2)" }}>
                {figure.image && (
                  <img src={figure.image} alt={figure.name} style={{ width: "100%", height: 220, objectFit: "cover", borderBottom: "2px solid rgba(212,175,55,0.3)" }} />
                )}
                {!figure.image && (
                  <div style={{ 
                    width: "100%", height: 120, 
                    background: "linear-gradient(135deg, #050b10 0%, #0f1923 50%, #050b10 100%)", 
                    display: "flex", alignItems: "center", justifyContent: "center", 
                    borderBottom: "2px solid rgba(212,175,55,0.3)",
                    position: "relative",
                    overflow: "hidden",
                  }}>
                    {/* Archival manuscript texture */}
                    <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "repeating-linear-gradient(0deg, #d4af37, #d4af37 1px, transparent 1px, transparent 20px), repeating-linear-gradient(90deg, #d4af37, #d4af37 1px, transparent 1px, transparent 20px)" }} />
                    <div style={{ textAlign: "center", zIndex: 1 }}>
                      <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 28, opacity: 0.6, letterSpacing: "0.3em" }}>✦</div>
                      <div style={{ fontFamily: "Cinzel, serif", color: "#64748b", fontSize: 9, letterSpacing: "0.3em", marginTop: 4 }}>HISTORICAL FIGURE</div>
                    </div>
                  </div>
                )}
                <div style={{ padding: "20px 24px" }}>
                  <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 15, marginBottom: 4 }}>{figure.name}</div>
                  <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: 13, marginBottom: 4 }}>{figure.years}</div>
                  <div style={{ fontFamily: "Cinzel, serif", color: "#94a3b8", fontSize: 11, letterSpacing: "0.05em", marginBottom: 12 }}>{figure.role}</div>
                  <div style={{ borderLeft: "3px solid #8b1a1a", paddingLeft: 12, marginBottom: 12 }}>
                    <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#94a3b8", fontSize: 13, fontStyle: "italic", lineHeight: 1.6 }}>
                      "{figure.quote}"
                    </p>
                  </div>
                  <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: 13, lineHeight: 1.6 }}>
                    {figure.connection}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
