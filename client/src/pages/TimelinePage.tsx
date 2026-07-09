import Navigation from "@/components/Navigation";
import { TIMELINE_EVENTS, ERAS } from "@/lib/manuscriptData";

export default function TimelinePage() {
  const eraColors = ["#8b1a1a", "#d4af37", "#2d6a4f", "#6b3fa0", "#1d6fa4"];

  return (
    <div style={{ backgroundColor: "#0a1118", minHeight: "100vh" }}>
      <Navigation />
      <section style={{ paddingTop: 100, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="text-center" style={{ marginBottom: 60 }}>
            <div style={{ color: "#d4af37", fontSize: 11, letterSpacing: "0.4em", fontFamily: "Cinzel, serif", marginBottom: 12 }}>✦ APPENDIX B ✦</div>
            <h1 style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: 16 }}>Master Chronological Timeline</h1>
            <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: "1.1rem", maxWidth: 600, margin: "0 auto" }}>
              1452 to 2024 — an unbroken chain of causation. Every event connects to the next.
            </p>
          </div>

          {/* Era Legend */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginBottom: 48 }}>
            {ERAS.map((era, i) => (
              <div key={era.id} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 12, height: 12, background: eraColors[i], borderRadius: 2 }} />
                <span style={{ fontFamily: "Cinzel, serif", color: "#94a3b8", fontSize: 10, letterSpacing: "0.05em" }}>
                  Era {["I","II","III","IV","V"][i]}
                </span>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div style={{ position: "relative", paddingLeft: 40 }}>
            {/* Vertical line */}
            <div style={{ position: "absolute", left: 16, top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom, #8b1a1a, #d4af37, #2d6a4f, #6b3fa0, #1d6fa4)" }} />

            {TIMELINE_EVENTS.map((event, i) => {
              // Check if era changes
              const prevEra = i > 0 ? TIMELINE_EVENTS[i-1].era : null;
              const eraChanged = prevEra !== null && prevEra !== event.era;
              
              return (
                <div key={i}>
                  {eraChanged && (
                    <div style={{ position: "relative", marginBottom: 20, paddingLeft: 24, paddingTop: 12 }}>
                      <div style={{ 
                        position: "absolute", left: -44, top: 16,
                        width: 28, height: 28, borderRadius: "50%",
                        background: eraColors[event.era - 1],
                        border: "3px solid #0a1118",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        zIndex: 2,
                      }}>
                        <span style={{ color: "#fff", fontSize: 9, fontFamily: "Cinzel, serif", fontWeight: 700 }}>
                          {["I","II","III","IV","V"][event.era - 1]}
                        </span>
                      </div>
                      <div style={{ 
                        background: `${eraColors[event.era - 1]}15`,
                        border: `1px solid ${eraColors[event.era - 1]}40`,
                        borderLeft: `4px solid ${eraColors[event.era - 1]}`,
                        padding: "10px 16px",
                        marginBottom: 8,
                      }}>
                        <span style={{ fontFamily: "Cinzel, serif", color: eraColors[event.era - 1], fontSize: 10, letterSpacing: "0.2em" }}>
                          ✦ ERA {["I","II","III","IV","V"][event.era - 1]}: {ERAS[event.era - 1].name.split(":")[1]?.trim()}
                        </span>
                      </div>
                    </div>
                  )}
                  <div style={{ position: "relative", marginBottom: 24, paddingLeft: 24 }}>
                    {/* Dot */}
                    <div style={{
                      position: "absolute",
                      left: -32,
                      top: 6,
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: eraColors[event.era - 1],
                      border: "2px solid #0a1118",
                      zIndex: 1,
                    }} />

                    <div style={{ 
                      background: "#0f1923",
                      border: "1px solid rgba(212,175,55,0.1)",
                      borderLeft: `2px solid ${eraColors[event.era - 1]}60`,
                      padding: "12px 16px",
                      display: "flex", gap: 16, alignItems: "flex-start"
                    }}>
                      <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 14, fontWeight: 700, minWidth: 48, flexShrink: 0 }}>
                        {event.year}
                      </div>
                      <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#e2e8f0", fontSize: "1rem", lineHeight: 1.6 }}>
                        {event.event}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <footer style={{ background: "#050b10", borderTop: "1px solid rgba(212,175,55,0.2)", padding: "32px 0", textAlign: "center" }}>
        <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#475569", fontSize: 12 }}>© 2026 LaDarious Strickland. All rights reserved.</div>
      </footer>
    </div>
  );
}
