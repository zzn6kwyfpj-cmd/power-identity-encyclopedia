import { useState, useMemo } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ArchiveInstitutionalLockup from "@/components/ArchiveInstitutionalLockup";
import { TIMELINE_EVENTS, ERAS } from "@/lib/manuscriptData";
import { TIMELINE_DETAILS } from "@/lib/timelineDetails";
import { LEGAL_RECORDS } from "@/lib/legalRecordMetadata";
import { Search, Share2, Filter, ChevronDown, ChevronUp, BookOpen, X } from "lucide-react";

// Royal Archive design: ceremonial title walls, institutional seals, contextual era plates, featured room-opening records, and generous archival pauses prevent a continuous card wall. Green remains evidence-specific; crimson remains conflict-specific.

// Categorize each event for filtering
const EVENT_CATEGORIES: Record<string, string> = {
  "Papal Bull": "legislation",
  "Doctrine of Discovery": "blacknative",
  "Georgia Charter": "legislation",
  "Declaration of Independence": "legislation",
  "Haitian Revolution": "resistance",
  "Louisiana Purchase": "legislation",
  "syllabary": "resistance",
  "Cherokee Phoenix": "resistance",
  "Indian Removal Act": "legislation",
  "Worcester v. Georgia": "legislation",
  "Trail of Tears": "violence",
  "Southern Baptist": "legislation",
  "13th Amendment": "legislation",
  "Black Codes": "legislation",
  "Sherman": "legislation",
  "Reconstruction ends": "legislation",
  "Chinese Exclusion": "legislation",
  "Dawes Act": "legislation",
  "Plessy": "legislation",
  "Spanish-American": "violence",
  "Wilmington Massacre": "violence",
  "NAACP": "resistance",
  "Tulsa Race Massacre": "violence",
  "Dyer Anti-Lynching": "legislation",
  "Census instructions": "legislation",
  "Indian Reorganization": "legislation",
  "HOLC redlining": "legislation",
  "GI Bill": "legislation",
  "Bracero": "legislation",
  "Brown v. Board": "legislation",
  "Emmett Till": "violence",
  "Medgar Evers": "violence",
  "Voting Rights": "legislation",
  "King v. Smith": "legislation",
  "Kerner Commission": "legislation",
  "Project 100,000": "violence",
  "COINTELPRO": "violence",
  "Fred Hampton": "violence",
  "Church Committee": "resistance",
  "NAGPRA": "resistance",
  "AIDS": "violence",
  "Kerry Committee": "resistance",
  "CIA Inspector General": "resistance",
  "Shelby County": "legislation",
  "McGirt": "resistance",
  "Emmett Till Antilynching": "legislation",
  "Wells Fargo": "economic",
  "CoreCivic": "economic",
  "subprime": "economic",
  "War on Drugs": "legislation",
  "Anti-Drug Abuse Act": "legislation",
  "Crime Bill": "legislation",
  "First enslaved": "violence",
  "Sequoyah": "resistance",
  "Treaty of Hopewell": "treaty",
  "Treaty of Holston": "treaty",
  "Treaty of New York": "treaty",
  "Treaty of Greenville": "treaty",
  "Treaty of Fort Wilkinson": "treaty",
  "Treaty of Washington": "treaty",
  "Treaty of Fort Jackson": "treaty",
  "Treaty of Indian Springs": "treaty",
  "Treaty of Dancing Rabbit": "treaty",
  "Treaty of Pontotoc": "treaty",
  "Treaty of Payne's Landing": "treaty",
  "Treaty of New Echota": "treaty",
  "Fort Laramie Treaty": "treaty",
  "Medicine Lodge Treaty": "treaty",
  "Indian Appropriations Act": "treaty",
  "TREATY ERA ENDS": "treaty",
  "Cahokia": "precolumbian",
  "Etowah Mounds": "precolumbian",
  "Haudenosaunee": "precolumbian",
  "Tenochtitlan": "precolumbian",
  "Ancestral Puebloans": "precolumbian",
  "Aztec": "precolumbian",
  "pre-Columbian": "precolumbian",
  "Columbian Exchange": "precolumbian",
  // Black Native American history
  "Yamasee War": "blacknative",
  "Black Seminole": "blacknative",
  "Second Seminole War": "blacknative",
  "Cherokee Freedmen": "blacknative",
  "Dawes Rolls": "blacknative",
  "Freedmen citizenship": "blacknative",
  "1866 Treaty with the Cherokee": "blacknative",
  "Black Native": "blacknative",
  "Freedmen descendants": "blacknative",
  "Tuscarora War": "blacknative",
  "accounted as negroe": "blacknative",
  "South Carolina colonial legislature": "blacknative",
  "Kate Indian": "blacknative",
  "Robin an Indian": "blacknative",
  "Negro blood": "blacknative",
  "Name Negro": "blacknative",
  "Richard B. Moore": "blacknative",
  "Dum Diversas": "blacknative",
  "Romanus Pontifex": "blacknative",
  "Inter Caetera": "blacknative",
  "perpetual slavery": "blacknative",
  "Pequot War": "blacknative",
  "child's status follow": "blacknative",
  "Carolina petition": "blacknative",
  "John Lawson": "blacknative",
  "shared penal regime": "blacknative",
  "multi-category slave code": "blacknative",
  "Treaty of San Lorenzo": "treaty",
  "United States v. Turner": "blacknative",
  "Return of the Ancient Ones": "blacknative",
  "Elaine": "violence",
};

function getCategory(event: string): string {
  for (const [keyword, category] of Object.entries(EVENT_CATEGORIES)) {
    if (event.toLowerCase().includes(keyword.toLowerCase())) return category;
  }
  return "legislation";
}

function splitTimelineEvent(event: string): [string, string] {
  const separator = event.indexOf(" — ");
  return separator === -1 ? [event, ""] : [event.slice(0, separator), event.slice(separator + 3)];
}

const CATEGORY_COLORS: Record<string, string> = {
  legislation: "#d4af37",
  violence: "#8b1a1a",
  resistance: "#d4af37",
  economic: "#d4af37",
  treaty: "#d4af37",
  precolumbian: "#d4af37",
  blacknative: "#d4af37",
};

const CATEGORY_LABELS: Record<string, string> = {
  legislation: "Legislation & Policy",
  violence: "Violence & Terror",
  resistance: "Resistance & Reclamation",
  economic: "Economic Extraction",
  treaty: "Treaties (Made & Broken)",
  precolumbian: "Pre-Columbian Civilizations",
  blacknative: "Black Native American History",
};

export default function TimelinePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEra, setSelectedEra] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const eraColors = ["#d4af37", "#d4af37", "#d4af37", "#d4af37", "#d4af37"];
  const eraBanners = [
    "/manus-storage/era_banner_0_precolumbian_a7aa2715.png",
    "/manus-storage/era_banner_1_1ad8b855.png",
    "/manus-storage/era_banner_2_76655c44.png",
    "/manus-storage/era_banner_3_83f1354b.png",
    "/manus-storage/era_banner_4_c8b87503.png",
    "/manus-storage/era_banner_5_f842cd88.png",
  ];

  // Sort events chronologically and add categories
  const enrichedEvents = useMemo(() => {
    return [...TIMELINE_EVENTS]
      .sort((a, b) => a.year - b.year)
      .map((e, i) => ({ ...e, category: getCategory(e.event), originalIndex: i }));
  }, []);

  const filteredEvents = useMemo(() => {
    return enrichedEvents.filter(e => {
      const matchesSearch = searchQuery === "" || e.event.toLowerCase().includes(searchQuery.toLowerCase()) || e.year.toString().includes(searchQuery);
      const matchesEra = selectedEra === null || e.era === selectedEra;
      const matchesCategory = selectedCategory === null || e.category === selectedCategory;
      return matchesSearch && matchesEra && matchesCategory;
    });
  }, [enrichedEvents, searchQuery, selectedEra, selectedCategory]);

  const handleShare = (event: typeof enrichedEvents[0], index: number) => {
    const text = `${event.year}: ${event.event} — The Archive Encyclopedia`;
    const url = `${window.location.origin}/timeline#event-${event.year}-${index}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${text}\n${url}`).then(() => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
      });
    }
  };

  const activeFiltersCount = (selectedEra !== null ? 1 : 0) + (selectedCategory !== null ? 1 : 0) + (searchQuery ? 1 : 0);

  return (
    <div style={{ backgroundColor: "#0a1118", minHeight: "100vh" }}>
      <Navigation />
      <section style={{ paddingTop: 100, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 1180 }}>

          <ArchiveInstitutionalLockup
            exhibitionLabel="CHRONOLOGICAL EXHIBITION"
            cataloguePlate="APPENDIX B · RECORDS IN SEQUENCE"
            title="Master Chronological Timeline"
            subtitle="850 CE to 2024: a documented sequence of law, resistance, classification, and consequence. Open a record to examine its source and its limit."
            recordLabel="DISPLAYED RECORDS"
            recordValue={`${filteredEvents.length} / ${enrichedEvents.length}`}
            recordDescription="Filter the catalogue without flattening the chronology."
          />

          <section aria-label="Chronology scope" className="grid gap-px md:grid-cols-3" style={{ border: "1px solid rgba(212,175,55,0.28)", background: "rgba(212,175,55,0.22)", marginBottom: 32 }}>
            {[
              ["SCOPE THRESHOLD", "850 CE begins detailed navigation; it is not the beginning of Indigenous history."],
              ["RECORD METHOD", "Open a record for its source, mechanism, enforcement path, and documented limit."],
              ["CURATORIAL RULE", "Chronology orders records in time without converting law or category into personal proof."],
            ].map(([label, copy], index) => <div key={label} style={{ background: index === 1 ? "#101c27" : "#0d1721", padding: "18px 20px" }}>
              <div style={{ color: "#d4af37", fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.2em", marginBottom: 8 }}>{String(index + 1).padStart(2, "0")} · {label}</div>
              <p style={{ color: "#b7c2cf", fontFamily: "Cormorant Garamond, serif", fontSize: "1.02rem", lineHeight: 1.45, margin: 0 }}>{copy}</p>
            </div>)}
          </section>

          {/* Search and Filter Bar */}
          <div style={{ background: "#0f1923", border: "1px solid rgba(212,175,55,0.2)", padding: "20px 24px", marginBottom: 32 }}>
            {/* Search */}
            <div style={{ position: "relative", marginBottom: 16 }}>
              <Search size={16} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#64748b" }} />
              <input
                type="text"
                placeholder="Search events, people, legislation, dates..."
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

            {/* Filter Toggle */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <button
                onClick={() => setShowFilters(!showFilters)}
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  background: "transparent",
                  border: "1px solid rgba(212,175,55,0.3)",
                  color: activeFiltersCount > 0 ? "#d4af37" : "#64748b",
                  fontFamily: "Cinzel, serif",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  padding: "8px 16px",
                  cursor: "pointer",
                }}
              >
                <Filter size={12} />
                FILTERS {activeFiltersCount > 0 ? `(${activeFiltersCount} active)` : ""}
                {showFilters ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
              </button>
              {activeFiltersCount > 0 && (
                <button
                  onClick={() => { setSelectedEra(null); setSelectedCategory(null); setSearchQuery(""); }}
                  style={{ background: "transparent", border: "none", color: "#f87171", fontFamily: "Cinzel, serif", fontSize: 10, letterSpacing: "0.1em", cursor: "pointer" }}
                >
                  CLEAR ALL
                </button>
              )}
            </div>

            {/* Filter Options */}
            {showFilters && (
              <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 16 }}>
                {/* Era Filter */}
                <div>
                  <div style={{ fontFamily: "Cinzel, serif", color: "#64748b", fontSize: 9, letterSpacing: "0.2em", marginBottom: 8 }}>FILTER BY ERA</div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <button onClick={() => setSelectedEra(null)} style={{ padding: "6px 14px", background: selectedEra === null ? "#d4af37" : "transparent", color: selectedEra === null ? "#0a1118" : "#94a3b8", border: "1px solid rgba(212,175,55,0.3)", fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.1em", cursor: "pointer" }}>ALL</button>
                    {ERAS.map((era, i) => (
                      <button key={era.id} onClick={() => setSelectedEra(selectedEra === era.id ? null : era.id)} style={{ padding: "6px 14px", background: selectedEra === era.id ? eraColors[i] : "transparent", color: selectedEra === era.id ? "#fff" : "#94a3b8", border: `1px solid ${eraColors[i]}40`, fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.1em", cursor: "pointer" }}>
                        ERA {["I","II","III","IV","V"][i]}
                      </button>
                    ))}
                  </div>
                </div>
                {/* Category Filter */}
                <div>
                  <div style={{ fontFamily: "Cinzel, serif", color: "#64748b", fontSize: 9, letterSpacing: "0.2em", marginBottom: 8 }}>FILTER BY CATEGORY</div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <button onClick={() => setSelectedCategory(null)} style={{ padding: "6px 14px", background: selectedCategory === null ? "#d4af37" : "transparent", color: selectedCategory === null ? "#0a1118" : "#94a3b8", border: "1px solid rgba(212,175,55,0.3)", fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.1em", cursor: "pointer" }}>ALL</button>
                    {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
                      <button key={key} onClick={() => setSelectedCategory(selectedCategory === key ? null : key)} style={{ padding: "6px 14px", background: selectedCategory === key ? CATEGORY_COLORS[key] : "transparent", color: selectedCategory === key ? "#fff" : "#94a3b8", border: `1px solid ${CATEGORY_COLORS[key]}40`, fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.1em", cursor: "pointer" }}>
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Era Legend */}
          <div style={{ borderTop: "1px solid rgba(212,175,55,0.22)", borderBottom: "1px solid rgba(212,175,55,0.22)", padding: "14px 0", marginBottom: 32 }}>
            <div style={{ color: "#d4af37", fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.22em", textAlign: "center", marginBottom: 10 }}>CATALOGUE KEY · EVIDENCE AND HISTORICAL CONTEXT</div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
              <div key={key} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 10, height: 10, background: CATEGORY_COLORS[key], borderRadius: 2 }} />
                <span style={{ fontFamily: "Cinzel, serif", color: "#64748b", fontSize: 9, letterSpacing: "0.05em" }}>{label}</span>
              </div>
            ))}
            </div>
          </div>

          {/* Timeline */}
          {filteredEvents.length === 0 ? (
            <div className="text-center" style={{ padding: "60px 0", color: "#64748b", fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem" }}>
              No events found matching your filters. Try clearing some filters.
            </div>
          ) : (
            <div style={{ position: "relative", paddingLeft: 48 }}>
              {/* Vertical line */}
              <div style={{ position: "absolute", left: 20, top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom, rgba(212,175,55,0.45), #d4af37, rgba(212,175,55,0.35))" }} />

              {filteredEvents.map((event, i) => {
                // Show era banner when era changes
                const prevEra = i > 0 ? filteredEvents[i - 1].era : null;
                const showEraBanner = !selectedEra && !selectedCategory && !searchQuery && prevEra !== event.era;
                const catColor = CATEGORY_COLORS[event.category];
                const isExpanded = expandedEvent === i;
                const isCopied = copiedIndex === i;
                const [recordTitle, recordAbstract] = splitTimelineEvent(event.event);
                const isEraLead = showEraBanner || i % 6 === 0;

                return (
                  <>
                  {showEraBanner && (
                    <div style={{ marginLeft: -48, marginBottom: 42, marginTop: i > 0 ? 84 : 0, position: "relative", overflow: "hidden", minHeight: 420, borderTop: `1px solid ${eraColors[event.era - 1]}80`, borderBottom: `1px solid ${eraColors[event.era - 1]}80`, boxShadow: `0 26px 54px ${eraColors[event.era - 1]}16` }}>
                      <div aria-hidden="true" style={{ position: "absolute", right: 34, top: -8, color: "rgba(212,175,55,0.15)", fontFamily: "Cinzel, serif", fontSize: "clamp(7rem, 17vw, 14rem)", lineHeight: 1, zIndex: 1 }}>{String(event.era).padStart(2, "0")}</div>
                      <img
                        src={eraBanners[event.era - 1]}
                        alt={`Era ${event.era}`}
                        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.7 }}
                      />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(10,17,24,0.98), rgba(10,17,24,0.52), rgba(10,17,24,0.95))", display: "flex", alignItems: "center", padding: "0 clamp(30px, 5vw, 70px)" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                          <div style={{ width: 58, height: 58, flexShrink: 0, border: `1px solid ${eraColors[event.era - 1]}`, borderRadius: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: `0 0 0 5px ${eraColors[event.era - 1]}12, 0 0 28px ${eraColors[event.era - 1]}35` }}>
                            <span style={{ color: eraColors[event.era - 1], fontFamily: "Cinzel, serif", fontSize: 18 }}>✦</span>
                            <span style={{ color: eraColors[event.era - 1], fontFamily: "Cinzel, serif", fontSize: 6, letterSpacing: "0.12em", marginTop: 3 }}>ROOM {event.era}</span>
                          </div>
                          <div>
                            <div style={{ fontFamily: "Cinzel, serif", color: eraColors[event.era - 1], fontSize: 10, letterSpacing: "0.3em", marginBottom: 8 }}>CURATED GALLERY · ERA {["I","II","III","IV","V"][event.era - 1]}</div>
                            <div style={{ fontFamily: "Cinzel, serif", color: "#f0e3bc", fontSize: "clamp(2rem, 4.25vw, 3.85rem)", lineHeight: 1.1, marginBottom: 14, maxWidth: 780 }}>{ERAS[event.era - 1]?.name}</div>
                            <div style={{ color: "#c4cedb", fontFamily: "Cormorant Garamond, serif", fontSize: "1.28rem", lineHeight: 1.5, fontStyle: "italic", maxWidth: 670 }}>A curated room of archival records: first a lead exhibit, then supporting catalogue entries, then a pause before the next sequence.</div>
                          </div>
                        </div>
                        <div aria-hidden="true" style={{ position: "absolute", right: 25, bottom: 16, color: "#c4cedb", fontFamily: "Cinzel, serif", fontSize: 7, letterSpacing: "0.16em", opacity: 0.78 }}>CONTEXT PLATE · PERIOD TRANSITION · NOT EVIDENCE</div>
                      </div>
                    </div>
                  )}
                  <div key={i} id={`event-${event.year}-${i}`} style={{ position: "relative", marginBottom: 24 }}>
                    {/* Timeline dot */}
                    <div style={{
                      position: "absolute",
                      left: -36,
                      top: 14,
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: catColor,
                      border: "2px solid #0a1118",
                      zIndex: 1,
                    }} />

                    {/* Event card */}
                    <div style={{
                      background: isEraLead ? `linear-gradient(110deg, ${catColor}16 0%, #14212c 37%, #0d1721 100%)` : "linear-gradient(100deg, #0f1923 0%, #101b27 100%)",
                      border: `1px solid ${isEraLead ? `${catColor}85` : `${catColor}30`}`,
                      borderLeft: `${isEraLead ? 5 : 3}px solid ${catColor}`,
                      padding: isEraLead ? "30px 32px" : "18px 22px",
                      boxShadow: isEraLead ? `0 20px 32px ${catColor}13` : "none",
                      transition: "all 0.2s",
                    }}>
                      {isEraLead && <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#d4af37", marginBottom: 18 }}><span style={{ flex: 1, borderTop: "1px solid rgba(212,175,55,0.56)" }} /><span style={{ fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.19em" }}>✦ FEATURED RECORD · ROOM OPENING ✦</span><span style={{ flex: 1, borderTop: "1px solid rgba(212,175,55,0.56)" }} /></div>}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                            <span style={{ fontFamily: "Cinzel, serif", color: "#e7c454", fontSize: 22, fontWeight: 700, lineHeight: 1, flexShrink: 0 }}>
                              {event.year}
                            </span>
                            <span style={{ color: isEraLead ? "#d4af37" : "#475569", fontFamily: "Cinzel, serif", fontSize: 8, letterSpacing: "0.14em" }}>{isEraLead ? "FEATURED EVIDENCE RECORD" : "ARCHIVE ENTRY"}</span>
                            <span style={{ fontFamily: "Cinzel, serif", color: catColor, fontSize: 8, letterSpacing: "0.1em", border: `1px solid ${catColor}40`, padding: "1px 6px", flexShrink: 0 }}>
                              {CATEGORY_LABELS[event.category]}
                            </span>
                            <span style={{ fontFamily: "Cinzel, serif", color: eraColors[event.era - 1], fontSize: 8, letterSpacing: "0.1em" }}>
                              ERA {["I","II","III","IV","V"][event.era - 1]}
                            </span>
                          </div>
                          <h2 style={{ color: "#f0e3bc", fontFamily: "Cinzel, serif", fontSize: isEraLead ? "1.68rem" : "1.22rem", lineHeight: 1.3, margin: "0 0 10px" }}>{recordTitle}</h2>
                          {recordAbstract && <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#c4cedb", fontSize: isEraLead ? "1.24rem" : "1.1rem", lineHeight: 1.68, margin: 0, maxWidth: isEraLead ? 940 : undefined }}>{recordAbstract}</p>}
                        </div>

                        {/* Action buttons */}
                        <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                          <button
                            onClick={() => handleShare(event, i)}
                            title="Share this event"
                            style={{
                              background: "transparent",
                              border: `1px solid ${isCopied ? "#4ade80" : "rgba(212,175,55,0.2)"}`,
                              color: isCopied ? "#4ade80" : "#64748b",
                              padding: "6px 8px",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              gap: 4,
                              fontFamily: "Cinzel, serif",
                              fontSize: 9,
                              letterSpacing: "0.05em",
                              transition: "all 0.2s",
                            }}
                          >
                            <Share2 size={10} />
                            {isCopied ? "COPIED" : "SHARE"}
                          </button>
                          <button
                            onClick={() => setExpandedEvent(isExpanded ? null : i)}
                            style={{
                              background: "transparent",
                              border: "1px solid rgba(212,175,55,0.2)",
                              color: "#64748b",
                              padding: "6px 8px",
                              cursor: "pointer",
                              fontFamily: "Cinzel, serif",
                              fontSize: 9,
                              letterSpacing: "0.05em",
                            }}
                          >
                            {isExpanded ? "LESS" : "MORE"}
                          </button>
                        </div>
                      </div>

                      {/* Expanded details — rich panel */}
                      {isExpanded && (() => {
                        const detailKey = event.detailKey || event.year.toString();
                        const detail = TIMELINE_DETAILS[detailKey];
                        const legalRecord = LEGAL_RECORDS[detailKey];
                        return (
                          <div style={{ marginTop: 12, paddingTop: 16, borderTop: `1px solid ${catColor}20` }}>
                            {/* Visual aid if available */}
                            {detail?.image && (
                              <div style={{ height: 180, overflow: "hidden", marginBottom: 16, position: "relative" }}>
                                <img src={detail.image} alt={event.event} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.85 }} />
                                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,17,24,0.8) 0%, transparent 60%)" }} />
                              </div>
                            )}

                            {/* Full description */}
                            {detail?.description ? (
                              <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#e2e8f0", fontSize: "1rem", lineHeight: 1.85, marginBottom: 16 }}>
                                {detail.description}
                              </p>
                            ) : (
                              <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#94a3b8", fontSize: "1rem", lineHeight: 1.85, marginBottom: 16 }}>
                                {event.event}
                              </p>
                            )}

                            {/* Key Fact */}
                            {detail?.keyFact && (
                              <div style={{ background: `${catColor}08`, borderLeft: `3px solid ${catColor}`, padding: "12px 16px", marginBottom: 16 }}>
                                <div style={{ fontFamily: "Cinzel, serif", color: catColor, fontSize: 9, letterSpacing: "0.2em", marginBottom: 6 }}>✦ KEY FINDING</div>
                                <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#e2e8f0", fontSize: "0.95rem", lineHeight: 1.7, fontStyle: "italic", margin: 0 }}>
                                  {detail.keyFact}
                                </p>
                              </div>
                            )}

                            {legalRecord && (
                              <div style={{ background: "rgba(212,175,55,0.045)", border: "1px solid rgba(212,175,55,0.20)", padding: "14px 16px", marginBottom: 16 }}>
                                <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 9, letterSpacing: "0.18em", marginBottom: 10 }}>✦ LEGAL RECORD CONTEXT</div>
                                <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: "10px 18px" }} className="legal-record-grid">
                                  <div><div style={{ fontFamily: "Cinzel, serif", color: "#64748b", fontSize: 8, letterSpacing: "0.12em", marginBottom: 3 }}>RECORD TYPE</div><div style={{ color: "#e2e8f0", fontFamily: "Cormorant Garamond, serif", fontSize: 14 }}>{legalRecord.recordType}</div></div>
                                  <div><div style={{ fontFamily: "Cinzel, serif", color: "#64748b", fontSize: 8, letterSpacing: "0.12em", marginBottom: 3 }}>JURISDICTION</div><div style={{ color: "#e2e8f0", fontFamily: "Cormorant Garamond, serif", fontSize: 14 }}>{legalRecord.jurisdiction}</div></div>
                                  <div style={{ gridColumn: "1 / -1" }}><div style={{ fontFamily: "Cinzel, serif", color: "#64748b", fontSize: 8, letterSpacing: "0.12em", marginBottom: 3 }}>CITATION</div><div style={{ color: "#cbd5e1", fontFamily: "Cormorant Garamond, serif", fontSize: 14 }}>{legalRecord.citation}</div></div>
                                  <div><div style={{ fontFamily: "Cinzel, serif", color: "#4ade80", fontSize: 8, letterSpacing: "0.12em", marginBottom: 3 }}>MECHANISM</div><div style={{ color: "#cbd5e1", fontFamily: "Cormorant Garamond, serif", fontSize: 14, lineHeight: 1.5 }}>{legalRecord.mechanism}</div></div>
                                  <div><div style={{ fontFamily: "Cinzel, serif", color: "#94a3b8", fontSize: 8, letterSpacing: "0.12em", marginBottom: 3 }}>ENFORCEMENT PATH</div><div style={{ color: "#cbd5e1", fontFamily: "Cormorant Garamond, serif", fontSize: 14, lineHeight: 1.5 }}>{legalRecord.enforcementPath}</div></div>
                                </div>
                                <div style={{ borderLeft: "2px solid #f87171", paddingLeft: 10, marginTop: 12 }}><div style={{ fontFamily: "Cinzel, serif", color: "#f87171", fontSize: 8, letterSpacing: "0.12em", marginBottom: 3 }}>DOCUMENTED LIMIT</div><div style={{ color: "#fca5a5", fontFamily: "Cormorant Garamond, serif", fontSize: 14, lineHeight: 1.5 }}>{legalRecord.documentedLimit}</div></div>
                                <a href={legalRecord.sourceUrl} target="_blank" rel="noreferrer" style={{ display: "inline-block", color: "#d4af37", fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.12em", marginTop: 12, textDecoration: "none", borderBottom: "1px solid rgba(212,175,55,0.45)" }}>OPEN LEGAL RECORD ↗</a>
                              </div>
                            )}

                            {/* Primary Source */}
                            {detail?.primarySource && (
                              <div style={{ marginBottom: 16 }}>
                                <div style={{ fontFamily: "Cinzel, serif", color: "#64748b", fontSize: 9, letterSpacing: "0.15em", marginBottom: 4 }}>PRIMARY SOURCE</div>
                                <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#475569", fontSize: 12, lineHeight: 1.6 }}>{detail.primarySource}</div>
                              </div>
                            )}

                            {/* Read Full Chapter CTA */}
                            {detail?.chapterSlug && (
                              <Link href={`/chapter/${detail.chapterSlug}`}>
                                <button style={{
                                  display: "inline-flex", alignItems: "center", gap: 8,
                                  background: `${catColor}15`,
                                  border: `1px solid ${catColor}40`,
                                  color: catColor,
                                  fontFamily: "Cinzel, serif",
                                  fontSize: 10, letterSpacing: "0.1em",
                                  padding: "10px 18px",
                                  cursor: "pointer",
                                }}>
                                  <BookOpen size={11} />
                                  READ FULL CHAPTER: {detail.chapterTitle?.toUpperCase()}
                                </button>
                              </Link>
                            )}
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                  {(i + 1) % 6 === 0 && i + 1 < filteredEvents.length && <div aria-hidden="true" style={{ margin: "52px 0 66px -48px", padding: "28px 28px", display: "flex", alignItems: "center", gap: 14, color: "#d4af37", borderTop: "1px solid rgba(212,175,55,0.52)", borderBottom: "1px solid rgba(212,175,55,0.30)", background: "linear-gradient(90deg, rgba(212,175,55,0.14), rgba(13,23,33,0.16) 52%, transparent 86%)" }}><span style={{ flex: 1, borderTop: "1px solid currentColor" }} /><span style={{ fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.2em", textAlign: "center" }}>✦ ARCHIVAL PAUSE · SUPPORTING BAYS COMPLETE · NEXT RECORD SEQUENCE ✦</span><span style={{ flex: 1, borderTop: "1px solid currentColor" }} /></div>}
                  </>
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
