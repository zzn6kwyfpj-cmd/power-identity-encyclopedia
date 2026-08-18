import { useState, useMemo } from "react";
import { Link } from "wouter";
import { Search, ChevronRight, X, Filter } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CHAPTERS } from "@/lib/manuscriptData";
import { CHAPTER_CONTENT } from "@/lib/manuscriptContent";
import { EXTRA_CHAPTER_CONTENT } from "@/lib/manuscriptContentExtra";
import { MODERN_CHAPTER_CONTENT } from "@/lib/manuscriptContentModern";
import { VIETNAM_CHAPTER_CONTENT } from "@/lib/manuscriptContentVietnam";
import { GAP_FILL_CONTENT } from "@/lib/manuscriptContentGapFill";
import { DEPTH_CONTENT } from "@/lib/manuscriptContentDepth";
import { FULL_CHAPTER_CONTENT } from "@/lib/manuscriptContentFull";
import { FINAL_3_CONTENT } from "@/lib/manuscriptContentFinal3";
import { TREATIES_CONTENT } from "@/lib/manuscriptContentTreaties";
import { BLACK_NATIVE_CONTENT } from "@/lib/manuscriptContentBlackNative";
import { PAPAL_BULLS_CONTENT } from "@/lib/manuscriptContentPapalBulls";
import { GAPS_CONTENT } from "@/lib/manuscriptContentGaps";
import { ARCHIVAL_INTAKE_CONTENT } from "@/lib/manuscriptContentArchivalIntake";
import { COLONIAL_SOURCEBOOK_CONTENT } from "@/lib/manuscriptContentColonialSourcebook";

// Merge all content sources
function getContent(slug: string) {
  return CHAPTER_CONTENT[slug] || EXTRA_CHAPTER_CONTENT[slug] || MODERN_CHAPTER_CONTENT[slug] ||
    VIETNAM_CHAPTER_CONTENT[slug] || GAP_FILL_CONTENT[slug] || DEPTH_CONTENT[slug] || FULL_CHAPTER_CONTENT[slug] ||
    FINAL_3_CONTENT[slug] || TREATIES_CONTENT[slug] || BLACK_NATIVE_CONTENT[slug] || PAPAL_BULLS_CONTENT[slug] ||
    GAPS_CONTENT[slug] || ARCHIVAL_INTAKE_CONTENT[slug] || COLONIAL_SOURCEBOOK_CONTENT[slug];
}

const TOPIC_FILTERS = [
  { id: "land", label: "Land & Dispossession", keywords: ["land", "treaty", "removal", "acres", "lottery", "allotment", "dawes", "charter"] },
  { id: "identity", label: "Identity & Erasure", keywords: ["identity", "census", "negro", "black", "label", "freedmen", "dawes rolls", "classification"] },
  { id: "legal", label: "Legal & Courts", keywords: ["act", "law", "court", "ruling", "bill", "amendment", "constitution", "statute", "treaty"] },
  { id: "resistance", label: "Resistance & Activism", keywords: ["resistance", "protest", "movement", "rebellion", "uprising", "march", "boycott", "organize"] },
  { id: "economics", label: "Economics & Wealth", keywords: ["wealth", "labor", "wage", "economic", "capitalism", "slavery", "profit", "property", "homeownership"] },
  { id: "georgia", label: "Georgia", keywords: ["georgia", "atlanta", "cartersville", "etowah", "cherokee county", "savannah", "augusta", "sweet auburn"] },
  { id: "indigenous", label: "Indigenous Nations", keywords: ["cherokee", "creek", "muscogee", "choctaw", "chickasaw", "seminole", "indigenous", "native", "tribal"] },
  { id: "music", label: "Music & Culture", keywords: ["music", "blues", "jazz", "soul", "motown", "harlem", "entertainment", "minstrel", "georgia sound"] },
  { id: "modern", label: "Modern Era (1970–2024)", keywords: ["cointelpro", "war on drugs", "incarceration", "prison", "crack", "redlining", "subprime", "mcgirt"] },
];

const ERA_FILTERS = [
  { id: "all", label: "All Eras" },
  { id: "Era I", label: "Era I: 850 CE–1732" },
  { id: "Era II", label: "Era II: 1800–1877" },
  { id: "Era III", label: "Era III: 1877–1930" },
  { id: "Era IV", label: "Era IV: 1930–1970" },
  { id: "Era V", label: "Era V: 1970–2024" },
];

const TIER_FILTERS = [
  { id: 0, label: "All Tiers" },
  { id: 1, label: "Tier 1 — Primary Sources" },
  { id: 2, label: "Tier 2 — Scholarly Analysis" },
  { id: 3, label: "Tier 3 — Community Traditions" },
];

const SUGGESTED_SEARCHES = [
  "Georgia Charter", "Dawes Rolls", "Worcester v. Georgia", "Trail of Tears",
  "COINTELPRO", "Reconstruction", "Tulsa Massacre", "Tuskegee", "Motown",
  "Gullah Geechee", "Middle Passage", "Kerner Commission", "Bracero Program",
  "Qualified Immunity", "McGirt v. Oklahoma", "Richard B. Moore", "Washitaw",
];

function highlightText(text: string, query: string): string {
  if (!query || query.length < 2) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<mark style="background:rgba(212,175,55,0.3);color:#d4af37;padding:0 2px">$1</mark>');
}

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedEra, setSelectedEra] = useState("all");
  const [selectedTier, setSelectedTier] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    const hasQuery = q.length >= 2;
    const hasFilters = selectedTopic || selectedEra !== "all" || selectedTier !== 0;

    if (!hasQuery && !hasFilters) return [];

    return CHAPTERS.filter(ch => {
      // Era filter
      if (selectedEra !== "all" && ch.era !== selectedEra) return false;
      // Tier filter
      if (selectedTier !== 0 && ch.tier !== selectedTier) return false;
      // Topic filter
      if (selectedTopic) {
        const topic = TOPIC_FILTERS.find(t => t.id === selectedTopic);
        if (topic) {
          const content = getContent(ch.slug);
          const allText = [
            ch.title, ch.subtitle, ch.summary, ch.keyFact,
            ...(content?.fullText || [])
          ].join(" ").toLowerCase();
          const topicMatch = topic.keywords.some(kw => allText.includes(kw));
          if (!topicMatch) return false;
        }
      }
      // Text search
      if (hasQuery) {
        const content = getContent(ch.slug);
        const allText = [
          ch.title, ch.subtitle, ch.summary, ch.keyFact,
          ch.primarySource,
          ...(content?.fullText || []),
          ...(content?.keyDocuments || []),
        ].join(" ").toLowerCase();
        if (!allText.includes(q)) return false;
      }
      return true;
    }).map(ch => {
      const content = getContent(ch.slug);
      const fullText = content ? content.fullText.join(" ") : ch.summary;
      const idx = q ? fullText.toLowerCase().indexOf(q) : -1;
      const snippet = idx >= 0
        ? "..." + fullText.substring(Math.max(0, idx - 100), idx + 200) + "..."
        : ch.summary.substring(0, 240) + "...";
      return { ...ch, snippet, highlightedSnippet: highlightText(snippet, query) };
    });
  }, [query, selectedTopic, selectedEra, selectedTier]);

  const activeFilterCount = (selectedTopic ? 1 : 0) + (selectedEra !== "all" ? 1 : 0) + (selectedTier !== 0 ? 1 : 0);
  const hasSearch = query.trim().length >= 2 || activeFilterCount > 0;

  return (
    <div style={{ backgroundColor: "#0a1118", minHeight: "100vh" }}>
      <Navigation />
      <section style={{ paddingTop: 100, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 900 }}>

          {/* Header */}
          <div className="text-center" style={{ marginBottom: 40 }}>
            <div style={{ color: "#d4af37", fontSize: 11, letterSpacing: "0.4em", fontFamily: "Cinzel, serif", marginBottom: 12 }}>✦ FULL-TEXT SEARCH ✦</div>
            <h1 style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", marginBottom: 12 }}>Search The Archive</h1>
            <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: "1.1rem", maxWidth: 600, margin: "0 auto" }}>
              Search across all 67 chapters, primary source citations, key facts, and historical records.
            </p>
          </div>

          {/* Search Input */}
          <div style={{ position: "relative", marginBottom: 16 }}>
            <Search size={20} style={{ position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)", color: "#64748b", pointerEvents: "none" }} />
            <input
              type="text"
              placeholder="Search for events, people, laws, dates, places..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              autoFocus
              style={{
                width: "100%", background: "#0f1923",
                border: "2px solid rgba(212,175,55,0.4)", color: "#e2e8f0",
                padding: "16px 52px 16px 52px", fontFamily: "Cormorant Garamond, serif",
                fontSize: 18, outline: "none", boxSizing: "border-box",
              }}
            />
            {query && (
              <button onClick={() => setQuery("")} style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", background: "transparent", border: "none", color: "#64748b", cursor: "pointer", padding: 4 }}>
                <X size={16} />
              </button>
            )}
          </div>

          {/* Filter Toggle */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <button
              onClick={() => setShowFilters(!showFilters)}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", border: `1px solid ${activeFilterCount > 0 ? "#d4af37" : "rgba(212,175,55,0.3)"}`, color: activeFilterCount > 0 ? "#d4af37" : "#94a3b8", fontFamily: "Cinzel, serif", fontSize: 10, letterSpacing: "0.1em", padding: "8px 16px", cursor: "pointer" }}
            >
              <Filter size={12} />
              FILTERS {activeFilterCount > 0 ? `(${activeFilterCount} ACTIVE)` : ""}
            </button>
            {hasSearch && (
              <div style={{ fontFamily: "Cinzel, serif", color: "#64748b", fontSize: 10, letterSpacing: "0.1em" }}>
                {results.length} CHAPTER{results.length !== 1 ? "S" : ""} FOUND
              </div>
            )}
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div style={{ background: "#0f1923", border: "1px solid rgba(212,175,55,0.2)", padding: "20px 24px", marginBottom: 24 }}>
              {/* Topic Filters */}
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontFamily: "Cinzel, serif", color: "#64748b", fontSize: 9, letterSpacing: "0.2em", marginBottom: 10 }}>FILTER BY TOPIC</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {TOPIC_FILTERS.map(t => (
                    <button key={t.id} onClick={() => setSelectedTopic(selectedTopic === t.id ? null : t.id)}
                      style={{ padding: "6px 12px", background: selectedTopic === t.id ? "#d4af37" : "transparent", color: selectedTopic === t.id ? "#0a1118" : "#94a3b8", border: `1px solid ${selectedTopic === t.id ? "#d4af37" : "rgba(212,175,55,0.3)"}`, fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.05em", cursor: "pointer" }}>
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Era Filters */}
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontFamily: "Cinzel, serif", color: "#64748b", fontSize: 9, letterSpacing: "0.2em", marginBottom: 10 }}>FILTER BY ERA</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {ERA_FILTERS.map(e => (
                    <button key={e.id} onClick={() => setSelectedEra(e.id)}
                      style={{ padding: "6px 12px", background: selectedEra === e.id ? "#8b1a1a" : "transparent", color: selectedEra === e.id ? "#fff" : "#94a3b8", border: `1px solid ${selectedEra === e.id ? "#8b1a1a" : "rgba(139,26,26,0.3)"}`, fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.05em", cursor: "pointer" }}>
                      {e.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tier Filters */}
              <div style={{ marginBottom: 8 }}>
                <div style={{ fontFamily: "Cinzel, serif", color: "#64748b", fontSize: 9, letterSpacing: "0.2em", marginBottom: 10 }}>FILTER BY EVIDENCE TIER</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {TIER_FILTERS.map(t => {
                    const tierColor = t.id === 1 ? "#4ade80" : t.id === 2 ? "#d4af37" : t.id === 3 ? "#f87171" : "#94a3b8";
                    return (
                      <button key={t.id} onClick={() => setSelectedTier(t.id)}
                        style={{ padding: "6px 12px", background: selectedTier === t.id ? tierColor : "transparent", color: selectedTier === t.id ? "#0a1118" : "#94a3b8", border: `1px solid ${selectedTier === t.id ? tierColor : `${tierColor}40`}`, fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.05em", cursor: "pointer" }}>
                        {t.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {activeFilterCount > 0 && (
                <button onClick={() => { setSelectedTopic(null); setSelectedEra("all"); setSelectedTier(0); }}
                  style={{ marginTop: 12, background: "transparent", border: "none", color: "#64748b", fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.1em", cursor: "pointer", textDecoration: "underline" }}>
                  CLEAR ALL FILTERS
                </button>
              )}
            </div>
          )}

          {/* Results */}
          {hasSearch ? (
            <div>
              {results.length === 0 ? (
                <div className="text-center" style={{ padding: "60px 0", color: "#64748b", fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem" }}>
                  No chapters found matching your search. Try different keywords or adjust your filters.
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {results.map(ch => {
                    const tierColor = ch.tier === 1 ? "#4ade80" : ch.tier === 2 ? "#d4af37" : "#f87171";
                    return (
                      <Link key={ch.id} href={`/chapter/${ch.slug}`}>
                        <div style={{ background: "#0f1923", borderLeft: `3px solid ${tierColor}`, padding: "18px 22px", cursor: "pointer", transition: "background 0.15s" }}
                          onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "#111d2b"; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "#0f1923"; }}
                        >
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6, flexWrap: "wrap", gap: 6 }}>
                            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                              <span style={{ fontFamily: "Cinzel, serif", color: "#475569", fontSize: 9, letterSpacing: "0.15em" }}>CH. {ch.id.toString().padStart(2, "0")}</span>
                              <span style={{ fontFamily: "Cinzel, serif", color: "#475569", fontSize: 9, letterSpacing: "0.1em" }}>{ch.era}</span>
                            </div>
                            <span style={{ fontFamily: "Cinzel, serif", color: tierColor, fontSize: 8, letterSpacing: "0.1em", border: `1px solid ${tierColor}40`, padding: "2px 6px" }}>TIER {ch.tier}</span>
                          </div>
                          <h3 style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 15, marginBottom: 3 }}>{ch.title}</h3>
                          <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: 12, fontStyle: "italic", marginBottom: 8 }}>{ch.subtitle}</p>
                          <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: 13, lineHeight: 1.7 }}
                            dangerouslySetInnerHTML={{ __html: ch.highlightedSnippet }}
                          />
                          <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 10, color: "#d4af37" }}>
                            <span style={{ fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.1em" }}>READ CHAPTER</span>
                            <ChevronRight size={11} />
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            <div>
              {/* Suggested Searches */}
              <div style={{ marginBottom: 32 }}>
                <div style={{ fontFamily: "Cinzel, serif", color: "#64748b", fontSize: 9, letterSpacing: "0.2em", marginBottom: 12 }}>SUGGESTED SEARCHES</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {SUGGESTED_SEARCHES.map(term => (
                    <button key={term} onClick={() => setQuery(term)}
                      style={{ padding: "7px 14px", background: "transparent", border: "1px solid rgba(212,175,55,0.25)", color: "#94a3b8", fontFamily: "Cormorant Garamond, serif", fontSize: 13, cursor: "pointer", transition: "all 0.15s" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#d4af37"; (e.currentTarget as HTMLButtonElement).style.color = "#d4af37"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(212,175,55,0.25)"; (e.currentTarget as HTMLButtonElement).style.color = "#94a3b8"; }}
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              {/* Browse by Topic */}
              <div>
                <div style={{ fontFamily: "Cinzel, serif", color: "#64748b", fontSize: 9, letterSpacing: "0.2em", marginBottom: 12 }}>BROWSE BY TOPIC</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10 }}>
                  {TOPIC_FILTERS.map(t => {
                    const count = CHAPTERS.filter(ch => {
                      const content = getContent(ch.slug);
                      const allText = [ch.title, ch.subtitle, ch.summary, ...(content?.fullText || [])].join(" ").toLowerCase();
                      return t.keywords.some(kw => allText.includes(kw));
                    }).length;
                    return (
                      <button key={t.id} onClick={() => { setSelectedTopic(t.id); setShowFilters(true); }}
                        style={{ background: "#0f1923", border: "1px solid rgba(212,175,55,0.15)", padding: "14px 16px", cursor: "pointer", textAlign: "left", transition: "border-color 0.15s" }}
                        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(212,175,55,0.4)"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(212,175,55,0.15)"; }}
                      >
                        <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 11, marginBottom: 4 }}>{t.label}</div>
                        <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#475569", fontSize: 12 }}>{count} chapters</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
