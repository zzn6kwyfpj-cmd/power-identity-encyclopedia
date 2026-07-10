import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { BookOpen, MapPin } from "lucide-react";
import { MapView } from "@/components/Map";

interface MapLocation {
  id: string;
  name: string;
  lat: number;
  lng: number;
  era: string;
  eraColor: string;
  category: "indigenous" | "removal" | "resistance" | "destruction" | "legacy";
  description: string;
  keyFact: string;
  source: string;
  chapterSlug: string;
}

const LOCATIONS: MapLocation[] = [
  { id: "etowah", name: "Etowah Mounds", lat: 34.1454, lng: -84.7440, era: "Pre-1732", eraColor: "#8b1a1a", category: "indigenous", description: "One of the most significant ancient Mississippian ceremonial sites in North America. At its peak (1000–1550 CE), the Etowah site was a major political and religious center. The largest mound rises 63 feet and covers 3 acres. The people who built these mounds were the ancestors of the Muscogee (Creek) Nation.", keyFact: "The Etowah Mounds were continuously inhabited for over 500 years before the 1732 Georgia Charter described the land as 'waste and desolate.'", source: "National Park Service, Etowah Indian Mounds State Historic Site", chapterSlug: "etowah-mounds" },
  { id: "new-echota", name: "New Echota — Cherokee Capital", lat: 34.5154, lng: -84.9410, era: "1825–1838", eraColor: "#d4af37", category: "removal", description: "New Echota was the capital of the Cherokee Nation from 1825 to 1838. It was here that the fraudulent Treaty of New Echota (1835) was signed by a minority faction without the authorization of Principal Chief John Ross. The treaty ceded all Cherokee lands east of the Mississippi and led directly to the Trail of Tears.", keyFact: "The Treaty of New Echota (1835) was signed here by only 79 Cherokee — less than 1% of the nation. 15,000 Cherokee signed a petition opposing it.", source: "Treaty of New Echota (1835), National Archives; New Echota State Historic Site, Georgia", chapterSlug: "sovereignty" },
  { id: "horseshoe-bend", name: "Battle of Horseshoe Bend", lat: 32.9754, lng: -85.7390, era: "1814", eraColor: "#8b1a1a", category: "removal", description: "On March 27, 1814, Andrew Jackson defeated the Red Sticks faction of the Creek Nation at the Battle of Horseshoe Bend (present-day Alabama). Chief Junaluska and Cherokee warriors fought alongside Jackson. Jackson's victory led directly to the Treaty of Fort Jackson, which seized 23 million acres of Creek land. Jackson would later sign the Indian Removal Act.", keyFact: "Chief Junaluska saved Andrew Jackson's life at Horseshoe Bend. Jackson later signed the Indian Removal Act. Junaluska said: 'If I had known Jackson would drive us from our homes, I would have killed him that day.'", source: "Treaty of Fort Jackson (1814), National Archives", chapterSlug: "sovereignty" },
  { id: "sweet-auburn", name: "Sweet Auburn Avenue — Atlanta", lat: 33.7530, lng: -84.3760, era: "1880–1960", eraColor: "#2d6a4f", category: "resistance", description: "Sweet Auburn Avenue was named 'the richest Negro street in the world' by Fortune magazine in 1956. It was home to the Atlanta Life Insurance Company (Alonzo Herndon), the Atlanta Daily World, Ebenezer Baptist Church (Dr. King's home church), and dozens of Black-owned businesses. The federal highway system deliberately routed I-75/I-85 through the heart of this community.", keyFact: "Martin Luther King Jr. was born at 501 Auburn Avenue and baptized at Ebenezer Baptist Church. Fortune magazine called Sweet Auburn 'the richest Negro street in the world' in 1956.", source: "Atlanta History Center; Fortune Magazine (1956)", chapterSlug: "sleeping-giant" },
  { id: "ebenezer", name: "Ebenezer Baptist Church", lat: 33.7551, lng: -84.3740, era: "1894–Present", eraColor: "#2d6a4f", category: "resistance", description: "Ebenezer Baptist Church on Auburn Avenue has been a center of Black spiritual and political life in Atlanta since 1894. Martin Luther King Sr. served as pastor from 1931 to 1975. Martin Luther King Jr. was baptized here, co-pastored with his father, and his funeral was held here in 1968. The church is a National Historic Site.", keyFact: "Ebenezer Baptist Church is the spiritual home of the King family and the organizational center of Atlanta's Civil Rights Movement. It sits on land that was Creek territory less than 150 years before its founding.", source: "National Park Service, Martin Luther King Jr. National Historical Park", chapterSlug: "sleeping-giant" },
  { id: "vine-city", name: "Vine City — Destroyed by I-75/I-85", lat: 33.7580, lng: -84.4050, era: "1950–1970", eraColor: "#6b3fa0", category: "destruction", description: "Vine City was a thriving Black neighborhood in Atlanta that was deliberately destroyed by the routing of I-75 and I-85 through its center. The highways displaced tens of thousands of Black residents and destroyed hundreds of Black-owned businesses. The same pattern repeated across Atlanta: the construction of Georgia Tech's campus expansion, the Atlanta-Fulton County Stadium, and the MARTA rail system all used eminent domain to acquire Black-owned property.", keyFact: "The routing of I-75/I-85 through Vine City was documented as a deliberate choice by urban planners. It achieved through legal eminent domain what the Tulsa mob achieved with fire.", source: "Bayor, Ronald. Race and the Shaping of Twentieth-Century Atlanta (1996)", chapterSlug: "sleeping-giant" },
  { id: "spelman", name: "Spelman College — HBCU Corridor", lat: 33.7470, lng: -84.4120, era: "1881–Present", eraColor: "#2d6a4f", category: "resistance", description: "Spelman College (1881), Morehouse College (1867), Clark Atlanta University, Morris Brown College, and the Interdenominational Theological Center form the Atlanta University Center — the largest consortium of HBCUs in the world. These institutions were founded specifically to educate the formerly enslaved and their descendants. They sit on land that was Creek and Cherokee territory less than 50 years before their founding.", keyFact: "The Atlanta University Center is the largest HBCU consortium in the world. W.E.B. Du Bois taught at Atlanta University. Martin Luther King Jr. graduated from Morehouse College in 1948.", source: "Atlanta University Center Consortium; Morehouse College Archives", chapterSlug: "great-migration" },
  { id: "mcgirt-oklahoma", name: "Muscogee (Creek) Nation — Oklahoma", lat: 35.6528, lng: -95.9669, era: "2020", eraColor: "#1d6fa4", category: "legacy", description: "In McGirt v. Oklahoma (2020), the U.S. Supreme Court ruled that the Muscogee (Creek) Nation's reservation — established by treaty in the 1830s after the forced removal from Georgia — was never formally disestablished. The ruling recognized that nearly half of Oklahoma remains 'Indian Country.' The Creek Nation's homeland was in Georgia. Their reservation is in Oklahoma. The distance between these two points is the Trail of Tears.", keyFact: "McGirt v. Oklahoma (2020) ruled that the Muscogee (Creek) Nation's reservation was never legally dissolved. The Creek were removed from Georgia to Oklahoma in 1836. Their sovereignty survived.", source: "McGirt v. Oklahoma, 591 U.S. ___ (2020)", chapterSlug: "living-legacy" },
];

const CATEGORY_COLORS: Record<string, string> = {
  indigenous: "#8b1a1a",
  removal: "#d4af37",
  resistance: "#2d6a4f",
  destruction: "#6b3fa0",
  legacy: "#1d6fa4",
};

const CATEGORY_LABELS: Record<string, string> = {
  indigenous: "Indigenous Heritage",
  removal: "Removal & Dispossession",
  resistance: "Resistance & Legacy",
  destruction: "Urban Destruction",
  legacy: "Living Legacy",
};

export default function MapPage() {
  const [selected, setSelected] = useState<MapLocation | null>(null);
  const [filter, setFilter] = useState<string | null>(null);

  const filtered = filter ? LOCATIONS.filter(l => l.category === filter) : LOCATIONS;

  const handleMapReady = (map: google.maps.Map) => {
    filtered.forEach(loc => {
      const marker = new google.maps.Marker({
        position: { lat: loc.lat, lng: loc.lng },
        map,
        title: loc.name,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: CATEGORY_COLORS[loc.category],
          fillOpacity: 0.9,
          strokeColor: "#d4af37",
          strokeWeight: 2,
        },
      });
      marker.addListener("click", () => setSelected(loc));
    });
  };

  return (
    <div style={{ backgroundColor: "#0a1118", minHeight: "100vh" }}>
      <Navigation />
      <section style={{ paddingTop: 100, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 1100 }}>

          {/* Header */}
          <div className="text-center" style={{ marginBottom: 40 }}>
            <div style={{ color: "#d4af37", fontSize: 11, letterSpacing: "0.4em", fontFamily: "Cinzel, serif", marginBottom: 12 }}>✦ APPENDIX F ✦</div>
            <h1 style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: 16 }}>Interactive Historical Map</h1>
            <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: "1.1rem", maxWidth: 700, margin: "0 auto" }}>
              The history documented in this encyclopedia happened in specific places. Click any marker to see the documented history of that location.
            </p>
          </div>

          {/* Category Filter */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24, justifyContent: "center" }}>
            <button onClick={() => setFilter(null)} style={{ padding: "6px 14px", background: !filter ? "#d4af37" : "transparent", color: !filter ? "#0a1118" : "#94a3b8", border: "1px solid rgba(212,175,55,0.3)", fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.1em", cursor: "pointer" }}>ALL</button>
            {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
              <button key={key} onClick={() => setFilter(filter === key ? null : key)} style={{ padding: "6px 14px", background: filter === key ? CATEGORY_COLORS[key] : "transparent", color: filter === key ? "#fff" : "#94a3b8", border: `1px solid ${CATEGORY_COLORS[key]}40`, fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.05em", cursor: "pointer" }}>
                {label}
              </button>
            ))}
          </div>

          {/* Map */}
          <div style={{ height: 480, border: "1px solid rgba(212,175,55,0.2)", marginBottom: 24, position: "relative" }}>
            <MapView
              initialCenter={{ lat: 33.7490, lng: -84.3880 }}
              initialZoom={7}
              onMapReady={handleMapReady}
            />
          </div>

          {/* Selected Location Detail */}
          {selected && (
            <div style={{ background: "#0f1923", border: `1px solid ${CATEGORY_COLORS[selected.category]}30`, borderLeft: `4px solid ${CATEGORY_COLORS[selected.category]}`, padding: "24px", marginBottom: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12, flexWrap: "wrap", gap: 8 }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <MapPin size={14} style={{ color: CATEGORY_COLORS[selected.category] }} />
                    <span style={{ fontFamily: "Cinzel, serif", color: CATEGORY_COLORS[selected.category], fontSize: 9, letterSpacing: "0.1em" }}>{CATEGORY_LABELS[selected.category]}</span>
                    <span style={{ fontFamily: "Cinzel, serif", color: "#475569", fontSize: 9, letterSpacing: "0.1em" }}>{selected.era}</span>
                  </div>
                  <h2 style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", margin: 0 }}>{selected.name}</h2>
                </div>
                <button onClick={() => setSelected(null)} style={{ background: "transparent", border: "none", color: "#64748b", cursor: "pointer", fontSize: 20 }}>×</button>
              </div>

              <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#e2e8f0", fontSize: "1.05rem", lineHeight: 1.85, marginBottom: 16 }}>{selected.description}</p>

              <div style={{ background: `${CATEGORY_COLORS[selected.category]}08`, borderLeft: `3px solid ${CATEGORY_COLORS[selected.category]}`, padding: "12px 16px", marginBottom: 16 }}>
                <div style={{ fontFamily: "Cinzel, serif", color: CATEGORY_COLORS[selected.category], fontSize: 9, letterSpacing: "0.2em", marginBottom: 6 }}>✦ KEY FINDING</div>
                <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#e2e8f0", fontSize: "1rem", lineHeight: 1.8, fontStyle: "italic", margin: 0 }}>{selected.keyFact}</p>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
                <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#475569", fontSize: 11 }}>
                  <span style={{ fontFamily: "Cinzel, serif", fontSize: 8, letterSpacing: "0.1em", color: "#334155" }}>SOURCE: </span>{selected.source}
                </div>
                <Link href={`/chapter/${selected.chapterSlug}`}>
                  <button style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "transparent", border: `1px solid ${CATEGORY_COLORS[selected.category]}40`, color: CATEGORY_COLORS[selected.category], fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.1em", padding: "8px 14px", cursor: "pointer" }}>
                    <BookOpen size={10} />
                    READ FULL CHAPTER
                  </button>
                </Link>
              </div>
            </div>
          )}

          {/* Location List */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
            {filtered.map(loc => (
              <button
                key={loc.id}
                onClick={() => setSelected(selected?.id === loc.id ? null : loc)}
                style={{
                  background: selected?.id === loc.id ? `${CATEGORY_COLORS[loc.category]}15` : "#0f1923",
                  border: `1px solid ${selected?.id === loc.id ? CATEGORY_COLORS[loc.category] : "rgba(212,175,55,0.12)"}`,
                  borderLeft: `3px solid ${CATEGORY_COLORS[loc.category]}`,
                  padding: "14px 16px",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.2s",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                  <MapPin size={10} style={{ color: CATEGORY_COLORS[loc.category], flexShrink: 0 }} />
                  <span style={{ fontFamily: "Cinzel, serif", color: CATEGORY_COLORS[loc.category], fontSize: 8, letterSpacing: "0.1em" }}>{loc.era}</span>
                </div>
                <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 12 }}>{loc.name}</div>
                <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: 11, marginTop: 4, lineHeight: 1.5 }}>
                  {loc.description.substring(0, 80)}...
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
