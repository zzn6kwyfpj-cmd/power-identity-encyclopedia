// Royal Manuscript evidence index: a restrained archive interface that foregrounds provenance, scope, and limitation over visual spectacle.

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { SOURCE_INDEX_FILTERS, SOURCES_CLAIMS_INDEX } from "@/lib/sourcesClaimsIndex";
import { Link } from "wouter";
import { useMemo, useState } from "react";

const controlStyle = {
  background: "#0f1923",
  border: "1px solid rgba(212,175,55,0.28)",
  color: "#e2e8f0",
  fontFamily: "Cinzel, serif",
  fontSize: 11,
  letterSpacing: "0.07em",
  minHeight: 42,
  padding: "0 12px",
  width: "100%",
} as const;

export default function SourcesClaimsIndexPage() {
  const [query, setQuery] = useState("");
  const [tier, setTier] = useState("all");
  const [topic, setTopic] = useState("all");
  const [region, setRegion] = useState("all");
  const [sourceType, setSourceType] = useState("all");
  const [verification, setVerification] = useState("all");
  const [yearStart, setYearStart] = useState("");
  const [yearEnd, setYearEnd] = useState("");

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return SOURCES_CLAIMS_INDEX.filter((item) => {
      const searchable = `${item.title} ${item.citation} ${item.establishes} ${item.limitation} ${item.region} ${item.topic}`.toLowerCase();
      return (
        (!needle || searchable.includes(needle)) &&
        (tier === "all" || item.tier === tier) &&
        (topic === "all" || item.topic === topic) &&
        (region === "all" || item.region === region) &&
        (sourceType === "all" || item.sourceType === sourceType) &&
        (verification === "all" || item.verification === verification) &&
        (!yearStart || item.sortYear >= Number(yearStart)) &&
        (!yearEnd || item.sortYear <= Number(yearEnd))
      );
    });
  }, [query, tier, topic, region, sourceType, verification, yearStart, yearEnd]);

  const groupedResults = useMemo(() => {
    return results.reduce<Record<string, typeof results>>((groups, item) => {
      groups[item.topic] ??= [];
      groups[item.topic].push(item);
      return groups;
    }, {});
  }, [results]);

  return (
    <div style={{ backgroundColor: "#0a1118", minHeight: "100vh" }}>
      <Navigation />
      <main style={{ paddingTop: 102, paddingBottom: 88 }}>
        <div className="container" style={{ maxWidth: 1180 }}>
          <header style={{ border: "1px solid rgba(212,175,55,0.38)", background: "linear-gradient(135deg, rgba(212,175,55,0.09), rgba(10,17,24,0.25) 45%, rgba(139,26,26,0.08))", padding: "30px", marginBottom: 30 }}>
            <div className="flex flex-col gap-7 md:flex-row md:items-center">
              <div aria-hidden="true" style={{ width: 86, height: 86, borderRadius: "50%", border: "2px solid #d4af37", boxShadow: "0 0 0 5px rgba(212,175,55,0.08), inset 0 0 22px rgba(212,175,55,0.12)", color: "#d4af37", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: "Cinzel, serif", fontSize: 22 }}>✦</span>
                <span style={{ fontFamily: "Cinzel, serif", fontSize: 7, letterSpacing: "0.17em", marginTop: 3 }}>ARCHIVE</span>
              </div>
              <div className="min-w-0 flex-1">
                <div style={{ color: "#d4af37", fontFamily: "Cinzel, serif", fontSize: 10, letterSpacing: "0.34em", marginBottom: 13 }}>CATALOGUE PLATE I · SOURCE & CLAIMS INDEX</div>
                <h1 style={{ fontFamily: "Cinzel, serif", color: "#e7c454", fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.06, margin: 0 }}>Inspect the evidence trail.</h1>
                <div style={{ width: 160, borderTop: "1px solid #d4af37", marginTop: 18, marginBottom: 17 }} />
                <p style={{ color: "#c4cedb", fontFamily: "Cormorant Garamond, serif", fontSize: "1.28rem", lineHeight: 1.65, margin: 0, maxWidth: 730 }}>
                  This initial index makes the evidence structure inspectable: each record states what it establishes, what it does not establish, its source route, and its related chapter. It currently covers the verified legal-record registry and the complete 24-work colonial sourcebook—not the entire bibliography.
                </p>
              </div>
              <aside style={{ borderLeft: "1px solid rgba(212,175,55,0.55)", paddingLeft: 21, minWidth: 220 }}>
                <div style={{ color: "#d4af37", fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.22em" }}>CURRENT INDEX SCOPE</div>
                <div style={{ color: "#f0e3bc", fontFamily: "Cormorant Garamond, serif", fontSize: "1.65rem", marginTop: 8 }}>{SOURCES_CLAIMS_INDEX.length} traceable records</div>
                <div style={{ color: "#94a3b8", fontFamily: "Cormorant Garamond, serif", fontSize: "1rem", lineHeight: 1.45, marginTop: 6 }}>Primary legal instruments, court decisions, public facsimiles, and colonial editions.</div>
              </aside>
            </div>
          </header>

          <section aria-label="Filter the sources and claims index" style={{ background: "#0d1721", border: "1px solid rgba(212,175,55,0.2)", padding: "20px", marginBottom: 26 }}>
            <div className="grid gap-3 md:grid-cols-4">
              <label>
                <span style={{ display: "block", color: "#94a3b8", fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.16em", marginBottom: 8 }}>SEARCH</span>
                <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Title, claim, place, statute…" style={{ ...controlStyle, fontFamily: "Cormorant Garamond, serif", fontSize: 16, letterSpacing: 0 }} />
              </label>
              <label>
                <span style={{ display: "block", color: "#94a3b8", fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.16em", marginBottom: 8 }}>EVIDENCE TIER</span>
                <select value={tier} onChange={(event) => setTier(event.target.value)} style={controlStyle}>
                  <option value="all">All tiers</option>
                  {SOURCE_INDEX_FILTERS.tiers.map((value) => <option key={value} value={value}>{value}</option>)}
                </select>
              </label>
              <label>
                <span style={{ display: "block", color: "#94a3b8", fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.16em", marginBottom: 8 }}>TOPIC</span>
                <select value={topic} onChange={(event) => setTopic(event.target.value)} style={controlStyle}>
                  <option value="all">All topics</option>
                  {SOURCE_INDEX_FILTERS.topics.map((value) => <option key={value} value={value}>{value}</option>)}
                </select>
              </label>
              <label>
                <span style={{ display: "block", color: "#94a3b8", fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.16em", marginBottom: 8 }}>REGION / JURISDICTION</span>
                <select value={region} onChange={(event) => setRegion(event.target.value)} style={controlStyle}>
                  <option value="all">All regions and jurisdictions</option>
                  {SOURCE_INDEX_FILTERS.regions.map((value) => <option key={value} value={value}>{value}</option>)}
                </select>
              </label>
              <label>
                <span style={{ display: "block", color: "#94a3b8", fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.16em", marginBottom: 8 }}>SOURCE TYPE</span>
                <select value={sourceType} onChange={(event) => setSourceType(event.target.value)} style={controlStyle}>
                  <option value="all">All source types</option>
                  {SOURCE_INDEX_FILTERS.sourceTypes.map((value) => <option key={value} value={value}>{value}</option>)}
                </select>
              </label>
              <label>
                <span style={{ display: "block", color: "#94a3b8", fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.16em", marginBottom: 8 }}>VERIFICATION STATUS</span>
                <select value={verification} onChange={(event) => setVerification(event.target.value)} style={controlStyle}>
                  <option value="all">All routes</option>
                  {SOURCE_INDEX_FILTERS.verifications.map((value) => <option key={value} value={value}>{value}</option>)}
                </select>
              </label>
            </div>
            <div className="grid gap-3 md:grid-cols-2" style={{ marginTop: 13 }}>
              <label>
                <span style={{ display: "block", color: "#94a3b8", fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.16em", marginBottom: 8 }}>YEAR FROM</span>
                <input type="number" value={yearStart} onChange={(event) => setYearStart(event.target.value)} placeholder="e.g., 1865" style={{ ...controlStyle, fontFamily: "Cormorant Garamond, serif", fontSize: 16, letterSpacing: 0 }} />
              </label>
              <label>
                <span style={{ display: "block", color: "#94a3b8", fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.16em", marginBottom: 8 }}>YEAR TO</span>
                <input type="number" value={yearEnd} onChange={(event) => setYearEnd(event.target.value)} placeholder="e.g., 1965" style={{ ...controlStyle, fontFamily: "Cormorant Garamond, serif", fontSize: 16, letterSpacing: 0 }} />
              </label>
            </div>
            <div style={{ color: "#94a3b8", fontFamily: "Cinzel, serif", fontSize: 10, letterSpacing: "0.12em", marginTop: 16 }}>{results.length} OF {SOURCES_CLAIMS_INDEX.length} RECORDS SHOWN</div>
          </section>

          <section className="grid gap-10" aria-live="polite">
            {Object.entries(groupedResults).map(([group, items], groupIndex) => (
              <div key={group}>
                <div className="flex items-center gap-4" style={{ marginBottom: 16 }}>
                  <div style={{ width: 42, height: 42, border: "1px solid #d4af37", color: "#d4af37", fontFamily: "Cinzel, serif", fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{String(groupIndex + 1).padStart(2, "0")}</div>
                  <div className="min-w-0 flex-1">
                    <div style={{ color: "#d4af37", fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.23em", marginBottom: 5 }}>ARCHIVE SECTION</div>
                    <div style={{ color: "#e7c454", fontFamily: "Cinzel, serif", fontSize: "1.15rem", letterSpacing: "0.08em" }}>{group.toUpperCase()}</div>
                  </div>
                  <div style={{ color: "#64748b", fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.14em" }}>{items.length} RECORD{items.length === 1 ? "" : "S"}</div>
                </div>
                <div style={{ borderTop: "1px solid rgba(212,175,55,0.38)", marginBottom: 14 }} />
                <div className="grid gap-4">
                  {items.map((item) => (
              <article key={item.id} style={{ background: "#0d1721", border: "1px solid rgba(212,175,55,0.2)", borderLeft: "3px solid #d4af37", padding: "22px" }}>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2" style={{ color: "#94a3b8", fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.14em" }}>
                  <span style={{ color: "#4ade80", border: "1px solid rgba(74,222,128,0.45)", padding: "3px 6px" }}>{item.tier.toUpperCase()}</span><span>•</span><span>{item.yearLabel}</span><span>•</span><span>{item.sourceType.toUpperCase()}</span><span>•</span><span>{item.topic.toUpperCase()}</span>
                </div>
                <h2 style={{ color: "#e7c454", fontFamily: "Cinzel, serif", fontSize: "1.1rem", lineHeight: 1.45, marginTop: 10, marginBottom: 8 }}>{item.title}</h2>
                <p style={{ color: "#94a3b8", fontFamily: "Cormorant Garamond, serif", fontSize: "1rem", margin: 0 }}>{item.region} · {item.verification}</p>
                <div className="grid gap-4 md:grid-cols-2" style={{ marginTop: 17 }}>
                  <div>
                    <div style={{ color: "#4ade80", fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.15em", marginBottom: 7 }}>WHAT THIS RECORD ESTABLISHES</div>
                    <p style={{ color: "#d6dee8", fontFamily: "Cormorant Garamond, serif", fontSize: "1.08rem", lineHeight: 1.55, margin: 0 }}>{item.establishes}</p>
                  </div>
                  <div>
                    <div style={{ color: "#f87171", fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.15em", marginBottom: 7 }}>DOCUMENTED LIMIT</div>
                    <p style={{ color: "#d6dee8", fontFamily: "Cormorant Garamond, serif", fontSize: "1.08rem", lineHeight: 1.55, margin: 0 }}>{item.limitation}</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2" style={{ borderTop: "1px solid rgba(148,163,184,0.14)", marginTop: 18, paddingTop: 14 }}>
                  <span style={{ color: "#64748b", fontFamily: "Cormorant Garamond, serif", fontSize: "0.95rem" }}>{item.citation}</span>
                  {item.sourceUrl && <a href={item.sourceUrl} target="_blank" rel="noreferrer" style={{ color: "#d4af37", fontFamily: "Cinzel, serif", fontSize: 10, letterSpacing: "0.12em", textDecoration: "none" }}>OPEN SOURCE RECORD ↗</a>}
                  <Link href={`/chapter/${item.chapterSlug}`}><span style={{ color: "#94a3b8", fontFamily: "Cinzel, serif", fontSize: 10, letterSpacing: "0.12em", cursor: "pointer" }}>RELATED CHAPTER →</span></Link>
                </div>
              </article>
                  ))}
                </div>
              </div>
            ))}
            {results.length === 0 && <div style={{ border: "1px solid rgba(212,175,55,0.25)", color: "#94a3b8", fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", padding: 28 }}>No current index record matches these filters. Clear one or more filters, or use the site search for chapter prose.</div>}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
