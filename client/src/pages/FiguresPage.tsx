import { useState, useMemo } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LightboxImage } from "@/components/Lightbox";
import { FIGURES } from "@/lib/manuscriptData";
import { Search } from "lucide-react";

// Era classification by approximate years
function getEra(years: string): string {
  const startYear = parseInt(years.replace("c.", "").split("–")[0].split("–")[0]);
  if (startYear < 1800) return "Era I: Pre-Columbian & Imperial Origins (850 CE–1732)";
  if (startYear < 1877) return "Era II: Slavery & Removal (1800–1877)";
  if (startYear < 1930) return "Era III: Jim Crow & Allotment (1877–1930)";
  if (startYear < 1970) return "Era IV: Civil Rights & Resistance (1930–1970)";
  return "Era V: Modern Era (1970–Present)";
}

const ERA_COLORS: Record<string, string> = {
  "Era I: Pre-Columbian & Imperial Origins (850 CE–1732)": "#d4af37",
  "Era II: Slavery & Removal (1800–1877)": "#8b1a1a",
  "Era III: Jim Crow & Allotment (1877–1930)": "#d4af37",
  "Era IV: Civil Rights & Resistance (1930–1970)": "#8b1a1a",
  "Era V: Modern Era (1970–Present)": "#d4af37",
};

export default function FiguresPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEra, setSelectedEra] = useState<string | null>(null);

  const eras = Object.keys(ERA_COLORS);

  const enrichedFigures = useMemo(() => {
    return FIGURES.map(f => ({ ...f, era: getEra(f.years) }));
  }, []);

  const filteredFigures = useMemo(() => {
    return enrichedFigures.filter(f => {
      const matchesSearch = !searchQuery ||
        f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.heritage.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.connection.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesEra = !selectedEra || f.era === selectedEra;
      return matchesSearch && matchesEra;
    });
  }, [enrichedFigures, searchQuery, selectedEra]);

  const groupedFigures = eras.map(era => ({
    era,
    figures: filteredFigures.filter(figure => figure.era === era),
  })).filter(group => group.figures.length > 0);

  return (
    <div style={{ backgroundColor: "#0a1118", minHeight: "100vh" }}>
      <Navigation />
      <section style={{ paddingTop: 100, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 1200 }}>

          {/* Header */}
          <div className="text-center" style={{ marginBottom: 48 }}>
            <div style={{ color: "#d4af37", fontSize: 11, letterSpacing: "0.4em", fontFamily: "Cinzel, serif", marginBottom: 12 }}>✦ APPENDIX A ✦</div>
            <h1 style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: 16 }}>Figures of Resistance and Legacy</h1>
            <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: "1.1rem", maxWidth: 700, margin: "0 auto 12px" }}>
              A curated catalog of people who resisted, documented, and reshaped the record. Each archive plate preserves a life, a contribution, and its connection to the evidence assembled here.
            </p>
            <p style={{ fontFamily: "Cinzel, serif", color: "#475569", fontSize: 10, letterSpacing: "0.2em" }}>
              {filteredFigures.length} OF {FIGURES.length} FIGURES SHOWN
            </p>
          </div>

          {/* Search and Filter */}
          <div style={{ background: "#0f1923", border: "1px solid rgba(212,175,55,0.2)", padding: "20px 24px", marginBottom: 40 }}>
            {/* Search */}
            <div style={{ position: "relative", marginBottom: 16 }}>
              <Search size={14} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#64748b" }} />
              <input
                type="text"
                placeholder="Search by name, role, heritage, or contribution..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  background: "#0a1118",
                  border: "1px solid rgba(212,175,55,0.2)",
                  color: "#e2e8f0",
                  padding: "10px 14px 10px 40px",
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: 15,
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>
            {/* Era Filter */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <button
                onClick={() => setSelectedEra(null)}
                style={{
                  padding: "6px 14px",
                  background: !selectedEra ? "#d4af37" : "transparent",
                  color: !selectedEra ? "#0a1118" : "#94a3b8",
                  border: "1px solid rgba(212,175,55,0.3)",
                  fontFamily: "Cinzel, serif",
                  fontSize: 9,
                  letterSpacing: "0.1em",
                  cursor: "pointer",
                }}
              >
                ALL ERAS
              </button>
              {eras.map(era => (
                <button
                  key={era}
                  onClick={() => setSelectedEra(selectedEra === era ? null : era)}
                  style={{
                    padding: "6px 14px",
                    background: selectedEra === era ? ERA_COLORS[era] : "transparent",
                    color: selectedEra === era ? "#fff" : "#94a3b8",
                    border: `1px solid ${ERA_COLORS[era]}40`,
                    fontFamily: "Cinzel, serif",
                    fontSize: 9,
                    letterSpacing: "0.05em",
                    cursor: "pointer",
                  }}
                >
                  {era.split(":")[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Curated Archive Plates */}
          {filteredFigures.length === 0 ? (
            <div className="text-center" style={{ padding: "60px 0", color: "#64748b", fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem" }}>
              No archive entries match this search. Try another name, role, heritage, or era.
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
              {groupedFigures.map(({ era, figures }) => {
                const eraColor = ERA_COLORS[era] || "#d4af37";
                return (
                  <section key={era} aria-label={era}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 20, borderBottom: `1px solid ${eraColor}55`, paddingBottom: 14, marginBottom: 22, flexWrap: "wrap" }}>
                      <div>
                        <div style={{ fontFamily: "Cinzel, serif", color: eraColor, fontSize: 9, letterSpacing: "0.28em", marginBottom: 8 }}>ARCHIVE PLATE · {era.split(":")[0].toUpperCase()}</div>
                        <h2 style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: "clamp(1.1rem, 2vw, 1.45rem)", letterSpacing: "0.04em", margin: 0 }}>{era.split(":")[1].trim()}</h2>
                      </div>
                      <div style={{ fontFamily: "Cinzel, serif", color: "#64748b", fontSize: 9, letterSpacing: "0.16em" }}>{figures.length} CATALOG ENTR{figures.length === 1 ? "Y" : "IES"}</div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
                      {figures.map(figure => (
                        <div key={figure.name} style={{ background: "#0f1923", border: "1px solid rgba(212,175,55,0.15)", borderTop: `3px solid ${eraColor}` }}>
                          {figure.image ? (
                            <div style={{ height: 200, overflow: "hidden" }}>
                              <LightboxImage src={figure.image} alt={figure.name} caption={`${figure.name} (${figure.years}) — ${figure.role}. ${figure.connection}`} />
                            </div>
                          ) : (
                            <div style={{ height: 120, background: "linear-gradient(135deg, #050b10 0%, #0f1923 50%, #050b10 100%)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                              <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "repeating-linear-gradient(0deg, #d4af37, #d4af37 1px, transparent 1px, transparent 20px), repeating-linear-gradient(90deg, #d4af37, #d4af37 1px, transparent 1px, transparent 20px)" }} />
                              <div style={{ textAlign: "center", zIndex: 1 }}>
                                <div style={{ fontFamily: "Cinzel, serif", color: eraColor, fontSize: 24, opacity: 0.5 }}>✦</div>
                                <div style={{ fontFamily: "Cinzel, serif", color: "#475569", fontSize: 8, letterSpacing: "0.3em", marginTop: 4 }}>ARCHIVE ENTRY</div>
                              </div>
                            </div>
                          )}
                          <div style={{ padding: "18px 20px" }}>
                            <div style={{ fontFamily: "Cinzel, serif", color: eraColor, fontSize: 8, letterSpacing: "0.15em", marginBottom: 8 }}>{figure.era.split(":")[0]}</div>
                            <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 14, marginBottom: 2 }}>{figure.name}</div>
                            <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#94a3b8", fontSize: 13, marginBottom: 2 }}>{figure.years}</div>
                            <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#94a3b8", fontSize: 12, marginBottom: 12, fontStyle: "italic" }}>{figure.heritage}</div>
                            <div style={{ fontFamily: "Cinzel, serif", color: "#94a3b8", fontSize: 10, letterSpacing: "0.05em", marginBottom: 12 }}>{figure.role}</div>
                            {figure.quote && (
                              <div style={{ borderLeft: `3px solid ${eraColor}60`, paddingLeft: 12, marginBottom: 12 }}>
                                <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#cbd5e1", fontSize: 14, fontStyle: "italic", lineHeight: 1.6, margin: 0 }}>“{figure.quote}”</p>
                              </div>
                            )}
                            <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#94a3b8", fontSize: 13, lineHeight: 1.75, margin: 0 }}>{figure.connection}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
