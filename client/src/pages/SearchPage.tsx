import { useState, useMemo } from "react";
import { Link } from "wouter";
import { Search, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import { CHAPTERS } from "@/lib/manuscriptData";
import { CHAPTER_CONTENT } from "@/lib/manuscriptContent";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (query.trim().length < 2) return [];
    const q = query.toLowerCase();
    return CHAPTERS.filter(ch => {
      const content = CHAPTER_CONTENT[ch.slug];
      const fullText = content ? content.fullText.join(" ").toLowerCase() : "";
      const keyFact = ch.keyFact.toLowerCase();
      const summary = ch.summary.toLowerCase();
      const title = ch.title.toLowerCase();
      const subtitle = ch.subtitle.toLowerCase();
      return title.includes(q) || subtitle.includes(q) || summary.includes(q) || keyFact.includes(q) || fullText.includes(q);
    }).map(ch => {
      const content = CHAPTER_CONTENT[ch.slug];
      const fullText = content ? content.fullText.join(" ") : ch.summary;
      const q = query.toLowerCase();
      const idx = fullText.toLowerCase().indexOf(q);
      const snippet = idx >= 0
        ? "..." + fullText.substring(Math.max(0, idx - 80), idx + 160) + "..."
        : ch.summary.substring(0, 200) + "...";
      return { ...ch, snippet };
    });
  }, [query]);

  return (
    <div style={{ backgroundColor: "#0a1118", minHeight: "100vh" }}>
      <Navigation />
      <section style={{ paddingTop: 100, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="text-center" style={{ marginBottom: 48 }}>
            <div style={{ color: "#d4af37", fontSize: 11, letterSpacing: "0.4em", fontFamily: "Cinzel, serif", marginBottom: 12 }}>✦ FULL-TEXT SEARCH ✦</div>
            <h1 style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", marginBottom: 16 }}>Search ARCHIVE</h1>
            <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: "1.1rem", maxWidth: 500, margin: "0 auto" }}>
              Search across all 23 chapters, primary sources, and historical records.
            </p>
          </div>

          {/* Search Input */}
          <div style={{ position: "relative", marginBottom: 40 }}>
            <Search size={20} style={{ position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)", color: "#64748b" }} />
            <input
              type="text"
              placeholder="Search for events, people, laws, dates..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              autoFocus
              style={{
                width: "100%",
                background: "#0f1923",
                border: "2px solid rgba(212,175,55,0.3)",
                color: "#e2e8f0",
                padding: "16px 20px 16px 52px",
                fontFamily: "Cormorant Garamond, serif",
                fontSize: 18,
                outline: "none",
                boxSizing: "border-box",
              }}
            />
            {query && (
              <div style={{ position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)", fontFamily: "Cinzel, serif", color: "#64748b", fontSize: 11, letterSpacing: "0.1em" }}>
                {results.length} RESULT{results.length !== 1 ? "S" : ""}
              </div>
            )}
          </div>

          {/* Results */}
          {query.trim().length >= 2 && (
            <div>
              {results.length === 0 ? (
                <div className="text-center" style={{ padding: "60px 0", color: "#64748b", fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem" }}>
                  No results found for "{query}". Try a different search term.
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {results.map(ch => (
                    <Link key={ch.id} href={`/chapter/${ch.slug}`}>
                      <div style={{
                        background: "#0f1923",
                        borderLeft: "3px solid #d4af37",
                        padding: "20px 24px",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                        onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "#1a2a3a"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "#0f1923"; }}
                      >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                          <span style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 10, letterSpacing: "0.15em" }}>
                            CH. {ch.id.toString().padStart(2, "0")} · {ch.era}
                          </span>
                          <span className={`tier-badge-${ch.tier}`} style={{ fontSize: 9 }}>TIER {ch.tier}</span>
                        </div>
                        <h3 style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 16, marginBottom: 4 }}>{ch.title}</h3>
                        <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#94a3b8", fontSize: 13, fontStyle: "italic", marginBottom: 10 }}>{ch.subtitle}</p>
                        <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: 14, lineHeight: 1.7 }}>
                          {ch.snippet}
                        </p>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 10, color: "#d4af37" }}>
                          <span style={{ fontFamily: "Cinzel, serif", fontSize: 10, letterSpacing: "0.1em" }}>READ CHAPTER</span>
                          <ChevronRight size={12} />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}

          {query.trim().length < 2 && (
            <div>
              <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 11, letterSpacing: "0.2em", marginBottom: 16 }}>SUGGESTED SEARCHES</div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {["Georgia Charter", "Dawes Rolls", "Worcester v. Georgia", "Trail of Tears", "COINTELPRO", "Reconstruction", "Tulsa Massacre", "Epigenetics", "Motown", "Gullah Geechee"].map(term => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    style={{
                      padding: "8px 16px",
                      background: "transparent",
                      border: "1px solid rgba(212,175,55,0.3)",
                      color: "#94a3b8",
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: 14,
                      cursor: "pointer",
                      transition: "all 0.15s",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#d4af37"; (e.currentTarget as HTMLButtonElement).style.color = "#d4af37"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(212,175,55,0.3)"; (e.currentTarget as HTMLButtonElement).style.color = "#94a3b8"; }}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      <footer style={{ background: "#050b10", borderTop: "1px solid rgba(212,175,55,0.2)", padding: "32px 0", textAlign: "center" }}>
        <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#475569", fontSize: 12 }}>© 2026 LaDarious Strickland. All rights reserved.</div>
      </footer>
    </div>
  );
}
