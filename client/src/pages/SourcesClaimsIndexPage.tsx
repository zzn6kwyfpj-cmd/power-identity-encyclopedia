// Royal Archive design: ceremonial exhibit title wall, recurring institutional seals and gold rulework, featured evidence openings before supporting records, and archival pauses within long catalogues. Green only signals evidence verification; crimson signals contested or harmful-history material.

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { SOURCE_INDEX_FILTERS, SOURCES_CLAIMS_INDEX } from "@/lib/sourcesClaimsIndex";
import { Link } from "wouter";
import { useMemo, useState } from "react";

// Royal Archive design: the source index is a sequence of ceremonial rooms and catalogue bays, with a lead record spanning the gallery and supporting records read in paired bays on desktop.

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

const EXHIBIT_NOTES: Record<string, string> = {
  "Census & Classification": "Administrative records that shape what can—and cannot—be seen in a family or population history.",
  "Community Research & Theory": "Credited community scholarship preserved with attribution, evidence tier, and an explicit boundary between lead and established finding.",
  "Racial Violence & Due Process": "Records of coercion, legal response, and the limits of historical accounting.",
  "Treaty & Sovereignty": "Documents of nation-to-nation obligation, jurisdiction, and the federal record of change.",
};

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
        <div className="container" style={{ maxWidth: 1280 }}>
          <header style={{ border: "1px solid rgba(212,175,55,0.58)", background: "radial-gradient(circle at 82% 18%, rgba(212,175,55,0.16), transparent 28%), linear-gradient(135deg, rgba(212,175,55,0.13), rgba(10,17,24,0.25) 45%, rgba(139,26,26,0.13))", padding: "clamp(34px, 5vw, 62px)", marginBottom: 18, position: "relative", overflow: "hidden" }}>
            <div aria-hidden="true" style={{ position: "absolute", top: 14, left: 18, right: 18, display: "flex", alignItems: "center", gap: 10, color: "#d4af37", opacity: 0.64 }}><span style={{ flex: 1, borderTop: "1px solid currentColor" }} /><span style={{ fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.32em" }}>EVIDENCE EXHIBITION</span><span style={{ flex: 1, borderTop: "1px solid currentColor" }} /></div>
            <div className="flex flex-col gap-7 md:flex-row md:items-center">
              <div aria-hidden="true" style={{ width: 86, height: 86, borderRadius: "50%", border: "2px solid #d4af37", boxShadow: "0 0 0 5px rgba(212,175,55,0.08), inset 0 0 22px rgba(212,175,55,0.12)", color: "#d4af37", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: "Cinzel, serif", fontSize: 22 }}>✦</span>
                <span style={{ fontFamily: "Cinzel, serif", fontSize: 7, letterSpacing: "0.17em", marginTop: 3 }}>ARCHIVE</span>
              </div>
              <div className="min-w-0 flex-1">
                <div style={{ color: "#d4af37", fontFamily: "Cinzel, serif", fontSize: 10, letterSpacing: "0.34em", marginBottom: 13 }}>CATALOGUE PLATE I · SOURCE & CLAIMS INDEX</div>
                <h1 style={{ fontFamily: "Cinzel, serif", color: "#e7c454", fontSize: "clamp(2.35rem, 5vw, 4.45rem)", letterSpacing: "0.015em", lineHeight: 1.02, margin: 0 }}>Inspect the evidence trail.</h1>
                <div style={{ width: 160, borderTop: "1px solid #d4af37", marginTop: 18, marginBottom: 17 }} />
                <p style={{ color: "#c4cedb", fontFamily: "Cormorant Garamond, serif", fontSize: "1.28rem", lineHeight: 1.65, margin: 0, maxWidth: 730 }}>
                  Enter a reading room rather than a database: every plate distinguishes the documentary record, its verification route, and the boundary of what the record can support. The index grows by evidence release; it is not a claim that every source in the wider bibliography has yet been normalized.
                </p>
              </div>
              <aside style={{ borderLeft: "1px solid rgba(212,175,55,0.55)", paddingLeft: 21, minWidth: 220 }}>
                <div style={{ color: "#d4af37", fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.22em" }}>CURRENT INDEX SCOPE</div>
                <div style={{ color: "#f0e3bc", fontFamily: "Cormorant Garamond, serif", fontSize: "1.65rem", marginTop: 8 }}>{SOURCES_CLAIMS_INDEX.length} catalogue records</div>
                <div style={{ color: "#94a3b8", fontFamily: "Cormorant Garamond, serif", fontSize: "1rem", lineHeight: 1.45, marginTop: 6 }}>Source routes, court decisions, public facsimiles, and author-attributed community research.</div>
              </aside>
            </div>
          </header>

          <section aria-label="Catalogue scope" className="grid gap-px md:grid-cols-3" style={{ border: "1px solid rgba(212,175,55,0.28)", background: "rgba(212,175,55,0.22)", marginBottom: 30 }}>
            {[
              ["READING ROOM", "Catalogue records are grouped as exhibits, not a claim that the wider archive is complete."],
              ["VERIFICATION ROUTE", "Each entry visibly distinguishes its original route, evidence tier, and source type."],
              ["DOCUMENTED LIMIT", "A record is never used to say more than its text, provenance, and scope permit."],
            ].map(([label, copy], index) => <div key={label} style={{ background: index === 1 ? "#101c27" : "#0d1721", padding: "18px 20px" }}>
              <div style={{ color: "#d4af37", fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.2em", marginBottom: 8 }}>{String(index + 1).padStart(2, "0")} · {label}</div>
              <p style={{ color: "#b7c2cf", fontFamily: "Cormorant Garamond, serif", fontSize: "1.02rem", lineHeight: 1.45, margin: 0 }}>{copy}</p>
            </div>)}
          </section>

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
                <div key={group} style={{ position: "relative", paddingTop: groupIndex === 0 ? 0 : 22 }}>
                <div className="flex items-center gap-4" style={{ marginBottom: 22, borderTop: "1px solid rgba(212,175,55,0.60)", borderBottom: "1px solid rgba(212,175,55,0.30)", background: "linear-gradient(90deg, rgba(212,175,55,0.16), rgba(13,23,33,0.92) 62%)", padding: "20px 22px" }}>
                  <div aria-hidden="true" style={{ width: 50, height: 50, border: "1px solid #d4af37", borderRadius: "50%", color: "#d4af37", fontFamily: "Cinzel, serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 0 0 4px rgba(212,175,55,0.08)" }}><span style={{ fontSize: 15 }}>✦</span><span style={{ fontSize: 7, letterSpacing: "0.12em", marginTop: 2 }}>{String(groupIndex + 1).padStart(2, "0")}</span></div>
                  <div className="min-w-0 flex-1">
                    <div style={{ color: "#d4af37", fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.23em", marginBottom: 5 }}>ARCHIVE ROOM · FEATURED EVIDENCE OPENS THE SEQUENCE</div>
                    <div style={{ color: "#e7c454", fontFamily: "Cinzel, serif", fontSize: "1.15rem", letterSpacing: "0.08em" }}>{group.toUpperCase()}</div>
                    <div style={{ color: "#94a3b8", fontFamily: "Cormorant Garamond, serif", fontSize: "1rem", fontStyle: "italic", marginTop: 5 }}>{EXHIBIT_NOTES[group] ?? "A curated sequence of source routes, claims, and documented limits."}</div>
                  </div>
                  <div style={{ color: "#64748b", fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.14em" }}>{items.length} RECORD{items.length === 1 ? "" : "S"}</div>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  {items.map((item, index) => {
                    const tierTone = item.tier.startsWith("Tier 1") ? "#4ade80" : item.tier.startsWith("Tier 3") ? "#c2414b" : "#d4af37";
                    const harmfulTone = item.topic === "Racial Violence & Due Process" ? "#8b1a1a" : "#d4af37";
                    const isLeadRecord = index === 0;
                    return <div key={item.id} style={isLeadRecord ? { gridColumn: "1 / -1" } : undefined}>
                      <article style={{ background: isLeadRecord ? "linear-gradient(115deg, rgba(212,175,55,0.14), #14212c 42%, #0d1721 78%)" : "linear-gradient(150deg, #101b27, #0d1721 72%)", border: `1px solid ${isLeadRecord ? "rgba(212,175,55,0.62)" : "rgba(212,175,55,0.24)"}`, borderLeft: `${isLeadRecord ? 6 : 5}px solid ${harmfulTone}`, padding: isLeadRecord ? "34px" : "26px", position: "relative", boxShadow: isLeadRecord ? "0 22px 34px rgba(0,0,0,0.18)" : "none", minHeight: isLeadRecord ? undefined : 320 }}>
                        {isLeadRecord && <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#d4af37", marginBottom: 18 }}><span style={{ flex: 1, borderTop: "1px solid rgba(212,175,55,0.60)" }} /><span style={{ fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.19em" }}>✦ FEATURED EVIDENCE RECORD ✦</span><span style={{ flex: 1, borderTop: "1px solid rgba(212,175,55,0.60)" }} /></div>}
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-2" style={{ color: "#94a3b8", fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.14em" }}>
                          <span style={{ color: tierTone, border: `1px solid ${tierTone}80`, padding: "3px 6px" }}>{item.tier.toUpperCase()}</span><span>•</span><span>{item.yearLabel}</span><span>•</span><span>{item.sourceType.toUpperCase()}</span>
                        </div>
                        <div style={{ color: isLeadRecord ? "#d4af37" : "#64748b", fontFamily: "Cinzel, serif", fontSize: 8, letterSpacing: "0.2em", marginTop: 13 }}>{isLeadRecord ? "CURATORIAL LEAD · " : "CATALOGUE RECORD · "}{item.topic.toUpperCase()}</div>
                        <h2 style={{ color: "#e7c454", fontFamily: "Cinzel, serif", fontSize: isLeadRecord ? "1.78rem" : "1.25rem", lineHeight: 1.3, marginTop: 8, marginBottom: 10 }}>{item.title}</h2>
                        <p style={{ color: "#aebbc9", fontFamily: "Cormorant Garamond, serif", fontSize: "1.08rem", lineHeight: 1.35, margin: 0 }}>{item.region} · {item.verification}</p>
                        <div className="grid gap-4 md:grid-cols-2" style={{ marginTop: 17 }}>
                          <div>
                            <div style={{ color: tierTone, fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.15em", marginBottom: 7 }}>WHAT THIS RECORD ESTABLISHES</div>
                            <p style={{ color: "#d6dee8", fontFamily: "Cormorant Garamond, serif", fontSize: "1.14rem", lineHeight: 1.6, margin: 0 }}>{item.establishes}</p>
                          </div>
                          <div>
                            <div style={{ color: "#f87171", fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.15em", marginBottom: 7 }}>DOCUMENTED LIMIT</div>
                            <p style={{ color: "#d6dee8", fontFamily: "Cormorant Garamond, serif", fontSize: "1.14rem", lineHeight: 1.6, margin: 0 }}>{item.limitation}</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-2" style={{ borderTop: "1px solid rgba(148,163,184,0.14)", marginTop: 18, paddingTop: 14 }}>
                          <span style={{ color: "#64748b", fontFamily: "Cormorant Garamond, serif", fontSize: "0.95rem" }}>{item.citation}</span>
                          {item.sourceUrl && <a href={item.sourceUrl} target="_blank" rel="noreferrer" style={{ color: "#d4af37", fontFamily: "Cinzel, serif", fontSize: 10, letterSpacing: "0.12em", textDecoration: "none" }}>OPEN SOURCE RECORD ↗</a>}
                          <Link href={`/chapter/${item.chapterSlug}`}><span style={{ color: "#94a3b8", fontFamily: "Cinzel, serif", fontSize: 10, letterSpacing: "0.12em", cursor: "pointer" }}>RELATED CHAPTER →</span></Link>
                        </div>
                      </article>
                      {isLeadRecord && items.length > 1 && <div aria-hidden="true" style={{ gridColumn: "1 / -1", display: "flex", alignItems: "center", gap: 10, margin: "28px 0 4px", color: "#d4af37" }}><span style={{ flex: 1, borderTop: "1px solid rgba(212,175,55,0.46)" }} /><span style={{ fontFamily: "Cinzel, serif", fontSize: 8, letterSpacing: "0.2em" }}>✦ SUPPORTING RECORDS · CATALOGUE BAYS ✦</span><span style={{ flex: 1, borderTop: "1px solid rgba(212,175,55,0.46)" }} /></div>}
                      {(index + 1) % 3 === 0 && index + 1 < items.length && <div aria-hidden="true" style={{ gridColumn: "1 / -1", display: "flex", alignItems: "center", gap: 10, margin: "28px 0 8px", color: "#d4af37", opacity: 0.72 }}><span style={{ flex: 1, borderTop: "1px solid currentColor" }} /><span style={{ fontFamily: "Cinzel, serif", fontSize: 8, letterSpacing: "0.2em" }}>✦ ARCHIVAL PAUSE · CATALOGUE BAY {String(Math.floor((index + 1) / 3) + 1).padStart(2, "0")} ✦</span><span style={{ flex: 1, borderTop: "1px solid currentColor" }} /></div>}
                    </div>;
                  })}
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
