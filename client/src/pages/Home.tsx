import { useState } from "react";
import { Link } from "wouter";
import { Search, ChevronRight, BookOpen, Clock, Users, BookMarked, Database } from "lucide-react";
import Navigation from "@/components/Navigation";
import { CHAPTERS, ERAS } from "@/lib/manuscriptData";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEra, setSelectedEra] = useState<number | null>(null);

  const filteredChapters = CHAPTERS.filter(ch => {
    const matchesSearch = searchQuery === "" ||
      ch.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ch.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ch.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesEra = selectedEra === null || ch.era === `Era ${["I","II","III","IV","V"][selectedEra - 1]}`;
    return matchesSearch && matchesEra;
  });

  return (
    <div style={{ backgroundColor: "#0a1118", minHeight: "100vh" }}>
      <Navigation />

      {/* Hero Section */}
      <section style={{
        minHeight: "100vh",
        background: `linear-gradient(to bottom, rgba(5,11,16,0.7) 0%, rgba(10,17,24,0.9) 60%, #0a1118 100%), url('/manus-storage/cover_image_b45504ee.png') center/cover no-repeat`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 80,
        paddingBottom: 60,
      }}>
        <div className="container text-center" style={{ maxWidth: 900 }}>
          {/* THE ARCHIVE ENCYCLOPEDIA Brand */}
          <div style={{ color: "#d4af37", fontSize: 11, letterSpacing: "0.4em", fontFamily: "Cinzel, serif", marginBottom: 12 }}>
            ✦ AMERICAN RECORDS OF CONTESTED HISTORY ✦
          </div>

          {/* THE */}
          <div style={{
            fontFamily: "Cinzel, serif",
            fontSize: "clamp(1rem, 2.5vw, 1.6rem)",
            fontWeight: 400,
            color: "#94a3b8",
            letterSpacing: "0.6em",
            marginBottom: 0,
            lineHeight: 1,
          }}>
            THE
          </div>

          {/* ARCHIVE */}
          <h1 style={{
            fontFamily: "Cinzel, serif",
            fontSize: "clamp(3.5rem, 9vw, 8rem)",
            fontWeight: 900,
            color: "#d4af37",
            lineHeight: 0.9,
            letterSpacing: "0.25em",
            marginBottom: 4,
            textShadow: "0 0 40px rgba(212,175,55,0.3)",
          }}>
            ARCHIVE
          </h1>

          {/* ENCYCLOPEDIA — spread to match ARCHIVE width */}
          <div style={{
            fontFamily: "Cinzel, serif",
            fontSize: "clamp(0.65rem, 1.2vw, 1rem)",
            fontWeight: 400,
            color: "#8b1a1a",
            letterSpacing: "clamp(0.4em, 2.5vw, 1.2em)",
            marginBottom: 4,
            lineHeight: 1,
            textTransform: "uppercase",
          }}>
            ENCYCLOPEDIA
          </div>

          {/* ARCHIVE acronym subtitle */}
          <div style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(0.6rem, 1vw, 0.8rem)",
            color: "#475569",
            letterSpacing: "0.15em",
            marginBottom: 20,
            lineHeight: 1.4,
          }}>
            American Records of Contested History, Identity, and Verified Evidence
          </div>

          <h2 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(1rem, 2.2vw, 1.5rem)",
            fontWeight: 400,
            color: "#94a3b8",
            lineHeight: 1.4,
            letterSpacing: "0.05em",
            marginBottom: 8,
            fontStyle: "italic",
          }}>
            Power, Identity, and Contested Origins
          </h2>

          <div style={{ width: 80, height: 2, background: "linear-gradient(to right, transparent, #d4af37, transparent)", margin: "0 auto 24px" }} />

          <p style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
            color: "#94a3b8",
            lineHeight: 1.8,
            maxWidth: 700,
            margin: "0 auto 16px",
            fontStyle: "italic",
          }}>
            A History of America's Suppressed Truths
          </p>

          <p style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "1rem",
            color: "#64748b",
            marginBottom: 48,
            letterSpacing: "0.05em",
          }}>
            Dedicated to Luka Strickland, a Native American
          </p>

          {/* Stats */}
          <div style={{ display: "flex", justifyContent: "center", gap: "clamp(24px, 5vw, 60px)", flexWrap: "wrap", marginBottom: 48 }}>
            {[
              { value: "29", label: "Chapters" },
              { value: "572", label: "Years Documented" },
              { value: "90+", label: "Primary Sources" },
              { value: "1452", label: "to 2024" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div style={{ fontFamily: "Cinzel, serif", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: "#d4af37", fontWeight: 700 }}>{value}</div>
                <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 13, color: "#64748b", letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/chapter/etowah-mounds">
              <button style={{
                background: "linear-gradient(135deg, #d4af37, #b8960c)",
                color: "#0a1118",
                fontFamily: "Cinzel, serif",
                fontSize: 12,
                letterSpacing: "0.15em",
                padding: "14px 32px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s",
              }}>
                BEGIN READING
              </button>
            </Link>
            <Link href="/timeline">
              <button style={{
                background: "transparent",
                color: "#d4af37",
                fontFamily: "Cinzel, serif",
                fontSize: 12,
                letterSpacing: "0.15em",
                padding: "14px 32px",
                border: "1px solid #d4af37",
                cursor: "pointer",
                transition: "all 0.2s",
              }}>
                VIEW TIMELINE
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Dedication Banner */}
      <section style={{
        background: "linear-gradient(to right, #050b10, #0f1923, #050b10)",
        borderTop: "1px solid rgba(212,175,55,0.2)",
        borderBottom: "1px solid rgba(212,175,55,0.2)",
        padding: "20px 0",
        textAlign: "center",
      }}>
        <p style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic", color: "#94a3b8", fontSize: "1.1rem" }}>
          "This manuscript does not tell you what to think. It presents documented history and allows the evidence to speak for itself."
        </p>
        <p style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 11, letterSpacing: "0.2em", marginTop: 8 }}>
          — LaDarious Strickland
        </p>
      </section>

      {/* Quick Nav Cards */}
      <section style={{ padding: "60px 0", backgroundColor: "#0a1118" }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {[
              { href: "/timeline", icon: Clock, title: "Master Timeline", desc: "572 years of documented history" },
              { href: "/figures", icon: Users, title: "Figures of Resistance", desc: "8 portraits of resistance and legacy" },
              { href: "/charts", icon: BookMarked, title: "Charts & Data", desc: "7 interactive data visualizations" },
              { href: "/resources", icon: BookMarked, title: "Research Tools", desc: "Genealogy, archives, and advocacy" },
            ].map(({ href, icon: Icon, title, desc }) => (
              <Link key={href} href={href}>
                <div style={{
                  background: "#0f1923",
                  border: "1px solid rgba(212,175,55,0.2)",
                  padding: "24px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  borderLeft: "3px solid #d4af37",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "#1a2a3a"; (e.currentTarget as HTMLDivElement).style.borderLeftColor = "#e8c84a"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "#0f1923"; (e.currentTarget as HTMLDivElement).style.borderLeftColor = "#d4af37"; }}
                >
                  <Icon size={24} style={{ color: "#d4af37", marginBottom: 12 }} />
                  <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 13, letterSpacing: "0.05em", marginBottom: 6 }}>{title}</div>
                  <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: 13 }}>{desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter Browser */}
      <section style={{ padding: "60px 0 80px", backgroundColor: "#050b10" }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          {/* Section Header */}
          <div className="text-center" style={{ marginBottom: 48 }}>
            <div style={{ color: "#d4af37", fontSize: 11, letterSpacing: "0.4em", fontFamily: "Cinzel, serif", marginBottom: 12 }}>
              ✦ BROWSE THE ENCYCLOPEDIA ✦
            </div>
            <h2 style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", marginBottom: 16 }}>
              All 23 Chapters
            </h2>
            <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: "1.1rem", maxWidth: 600, margin: "0 auto" }}>
              From the Papal Bulls of 1452 to the Emmett Till Antilynching Act of 2022 — an unbroken chain of causation.
            </p>
          </div>

          {/* Search and Filter */}
          <div style={{ display: "flex", gap: 16, marginBottom: 32, flexWrap: "wrap" }}>
            <div style={{ position: "relative", flex: 1, minWidth: 200 }}>
              <Search size={16} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#64748b" }} />
              <input
                type="text"
                placeholder="Search chapters..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  background: "#0f1923",
                  border: "1px solid rgba(212,175,55,0.2)",
                  color: "#e2e8f0",
                  padding: "10px 14px 10px 40px",
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: 15,
                  outline: "none",
                }}
              />
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <button
                onClick={() => setSelectedEra(null)}
                style={{
                  padding: "8px 16px",
                  background: selectedEra === null ? "#d4af37" : "transparent",
                  color: selectedEra === null ? "#0a1118" : "#94a3b8",
                  border: "1px solid rgba(212,175,55,0.3)",
                  fontFamily: "Cinzel, serif",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  cursor: "pointer",
                }}
              >
                ALL
              </button>
              {ERAS.map((era, i) => (
                <button
                  key={era.id}
                  onClick={() => setSelectedEra(selectedEra === era.id ? null : era.id)}
                  style={{
                    padding: "8px 16px",
                    background: selectedEra === era.id ? era.color : "transparent",
                    color: selectedEra === era.id ? "#fff" : "#94a3b8",
                    border: `1px solid ${era.color}40`,
                    fontFamily: "Cinzel, serif",
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    cursor: "pointer",
                  }}
                >
                  ERA {["I","II","III","IV","V"][i]}
                </button>
              ))}
            </div>
          </div>

          {/* Chapter Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
            {filteredChapters.map(chapter => (
              <Link key={chapter.id} href={`/chapter/${chapter.slug}`}>
                <div
                  style={{
                    background: "#0f1923",
                    borderLeft: `3px solid ${chapter.eraColor}`,
                    padding: "20px 24px",
                    cursor: "pointer",
                    transition: "all 0.2s cubic-bezier(0.23, 1, 0.32, 1)",
                    height: "100%",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "#1a2a3a"; (e.currentTarget as HTMLDivElement).style.transform = "translateX(4px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "#0f1923"; (e.currentTarget as HTMLDivElement).style.transform = "translateX(0)"; }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <span style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 10, letterSpacing: "0.15em" }}>
                    CH. {chapter.id.toString().padStart(2, "0")}
                  </span>
                    <span className={`tier-badge-${chapter.tier}`} style={{ fontSize: 9 }}>
                      TIER {chapter.tier}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 15, marginBottom: 4, letterSpacing: "0.03em" }}>
                    {chapter.title}
                  </h3>
                  <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#94a3b8", fontSize: 13, fontStyle: "italic", marginBottom: 10 }}>
                    {chapter.subtitle}
                  </p>
                  <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#94a3b8", fontSize: 14, lineHeight: 1.7 }}>
                    {chapter.summary.substring(0, 120)}...
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 12, color: "#d4af37", fontSize: 12 }}>
                    <span style={{ fontFamily: "Cinzel, serif", fontSize: 10, letterSpacing: "0.1em" }}>READ CHAPTER</span>
                    <ChevronRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredChapters.length === 0 && (
            <div className="text-center" style={{ padding: "60px 0", color: "#64748b", fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem" }}>
              No chapters found matching your search.
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#050b10", borderTop: "1px solid rgba(212,175,55,0.2)", padding: "40px 0", textAlign: "center" }}>
          <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 16, letterSpacing: "0.3em", marginBottom: 4 }}>
          ARCHIVE
        </div>
        <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: 11, letterSpacing: "0.1em", marginBottom: 8 }}>
          American Records of Contested History, Identity, and Verified Evidence
        </div>
        <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: 13, marginBottom: 4 }}>
          By LaDarious Strickland · Dedicated to Luka Strickland, a Native American
        </div>
        <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#475569", fontSize: 12 }}>
          © 2026 LaDarious Strickland. All rights reserved. Fair Use: 17 U.S.C. § 107
        </div>
      </footer>
    </div>
  );
}
