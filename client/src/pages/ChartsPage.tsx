import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BookOpen } from "lucide-react";

// Chart.js loaded via CDN in index.html
declare const Chart: any;

// ─── Treaty Data ──────────────────────────────────────────────────────────────
const TREATY_DATA: Record<number, { nation: string; treaty: string; year: number; acresLost: string; mechanism: string; consequence: string; resistance: string; source: string }> = {
  0: { nation: "Muscogee (Creek) Nation", treaty: "Treaty of Fort Jackson", year: 1814, acresLost: "23 million acres", mechanism: "Forced cession after the Creek War. Jackson demanded land as 'war reparations' — from allies who had fought alongside him.", consequence: "The Creek Nation lost more than half of present-day Alabama. By 1836, the entire nation had been forcibly marched to Indian Territory.", resistance: "William McIntosh, who later signed the fraudulent Treaty of Indian Springs (1825), was executed by Creek warriors for betraying the nation.", source: "Treaty of Fort Jackson (1814), National Archives; Kappler, Indian Affairs: Laws and Treaties, Vol. II" },
  1: { nation: "Cherokee Nation", treaty: "Treaty of New Echota", year: 1835, acresLost: "7 million acres", mechanism: "Signed by a minority faction without authorization from Principal Chief John Ross. Repudiated by 15,000 Cherokee — ~90% of the nation — in a petition to Congress.", consequence: "The Trail of Tears. 16,000 Cherokee forcibly removed. An estimated 4,000–8,000 died of cold, hunger, and disease.", resistance: "Principal Chief John Ross used the U.S. legal system to challenge the treaty. Worcester v. Georgia (1832) had already ruled in the Cherokee's favor.", source: "Treaty of New Echota (1835), National Archives; Worcester v. Georgia, 31 U.S. 515 (1832)" },
  2: { nation: "Choctaw Nation", treaty: "Treaty of Dancing Rabbit Creek", year: 1830, acresLost: "10.4 million acres", mechanism: "First removal treaty under the Indian Removal Act. Choctaw leaders were threatened with loss of federal protection if they refused.", consequence: "~17,000 Choctaw removed 1831–1833. An estimated 2,500–6,000 died during removal. The Choctaw removal was the model for all subsequent removals.", resistance: "Many Choctaw refused to leave and remained in Mississippi. Chief Pushmataha had previously allied with Jackson at the Battle of New Orleans.", source: "Treaty of Dancing Rabbit Creek (1830), National Archives" },
  3: { nation: "Chickasaw Nation", treaty: "Treaty of Pontotoc Creek", year: 1832, acresLost: "6.4 million acres", mechanism: "Chickasaw ceded all lands east of the Mississippi for a promise of equivalent territory west of the river — a promise the U.S. delayed fulfilling for years.", consequence: "The Chickasaw were forced to pay the Choctaw Nation for the right to settle in their territory — a financial burden lasting decades.", resistance: "The Chickasaw negotiated more favorable terms than other tribes, preserving more of their institutional structure through legal and financial sophistication.", source: "Treaty of Pontotoc Creek (1832), National Archives" },
  4: { nation: "All Five Civilized Tribes", treaty: "Dawes Act (General Allotment Act)", year: 1887, acresLost: "90 million acres", mechanism: "Broke up communally held tribal land into individual allotments. 'Surplus' land sold to settlers and railroads at below-market prices.", consequence: "Native Americans lost ~90 million acres — nearly two-thirds of all territory held in 1887. The Dawes Rolls erased the identity of thousands of mixed Black-Indigenous people.", resistance: "Redbird Smith led the Keetoowah Society in refusing to enroll in the Dawes Rolls. The Indian Reorganization Act (1934) ended allotment but did not return the stolen land.", source: "General Allotment Act, 24 Stat. 388 (1887); Meriam Report (1928)" },
};

// ─── Land Loss Chart ──────────────────────────────────────────────────────────
function LandLossChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const chartRef = useRef<any>(null);

  useEffect(() => {
    if (!canvasRef.current || typeof Chart === "undefined") return;
    if (chartRef.current) chartRef.current.destroy();
    const ctx = canvasRef.current.getContext("2d");
    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Creek Nation\n(Fort Jackson, 1814)", "Cherokee Nation\n(New Echota, 1835)", "Choctaw Nation\n(Dancing Rabbit, 1830)", "Chickasaw Nation\n(Pontotoc, 1832)", "All Five Tribes\n(Dawes Act, 1887)"],
        datasets: [{ label: "Acres Lost (Millions)", data: [23, 7, 10.4, 6.4, 90], backgroundColor: ["rgba(139,26,26,0.75)", "rgba(212,175,55,0.75)", "rgba(45,106,79,0.75)", "rgba(107,63,160,0.75)", "rgba(29,111,164,0.75)"], borderColor: ["#8b1a1a", "#d4af37", "#2d6a4f", "#6b3fa0", "#1d6fa4"], borderWidth: 2 }]
      },
      options: {
        responsive: true, maintainAspectRatio: true, aspectRatio: 2.2,
        onClick: (_: any, elements: any[]) => { if (elements.length > 0) { const i = elements[0].index; setSelected(prev => prev === i ? null : i); } },
        plugins: { legend: { display: false }, tooltip: { callbacks: { footer: (items: any[]) => [`Click to see treaty details`] } } },
        scales: {
          y: { ticks: { color: "#94a3b8", font: { family: "Cinzel, serif", size: 10 } }, grid: { color: "rgba(212,175,55,0.08)" }, title: { display: true, text: "Millions of Acres", color: "#64748b", font: { family: "Cinzel, serif", size: 10 } } },
          x: { ticks: { color: "#94a3b8", font: { family: "Cinzel, serif", size: 9 }, maxRotation: 0 }, grid: { color: "rgba(212,175,55,0.08)" } }
        }
      }
    });
    return () => chartRef.current?.destroy();
  }, []);

  const treaty = selected !== null ? TREATY_DATA[selected] : null;
  const barColors = ["#8b1a1a", "#d4af37", "#2d6a4f", "#6b3fa0", "#1d6fa4"];

  return (
    <div>
      <div style={{ height: 320 }}><canvas ref={canvasRef} /></div>
      <p style={{ fontFamily: "Cinzel, serif", color: "#475569", fontSize: 9, letterSpacing: "0.1em", textAlign: "center", marginTop: 8 }}>CLICK ANY BAR TO SEE THE TREATY DETAILS</p>
      {treaty && (
        <div style={{ marginTop: 20, background: "#0a1118", border: `1px solid ${barColors[selected!]}50`, borderLeft: `4px solid ${barColors[selected!]}`, padding: "20px 24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
            <div>
              <div style={{ fontFamily: "Cinzel, serif", color: barColors[selected!], fontSize: 11, letterSpacing: "0.05em", marginBottom: 2 }}>{treaty.nation}</div>
              <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 15 }}>{treaty.treaty} ({treaty.year})</div>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <span style={{ fontFamily: "Cinzel, serif", color: "#f87171", fontSize: 12 }}>{treaty.acresLost} lost</span>
              <button onClick={() => setSelected(null)} style={{ background: "transparent", border: "none", color: "#64748b", cursor: "pointer", fontSize: 18 }}>×</button>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {[{ label: "MECHANISM", text: treaty.mechanism, color: "#f87171" }, { label: "CONSEQUENCE", text: treaty.consequence, color: "#94a3b8" }, { label: "RESISTANCE", text: treaty.resistance, color: "#4ade80" }].map(({ label, text, color }) => (
              <div key={label}>
                <div style={{ fontFamily: "Cinzel, serif", color, fontSize: 9, letterSpacing: "0.2em", marginBottom: 6 }}>{label}</div>
                <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#94a3b8", fontSize: 13, lineHeight: 1.7, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>
          <div style={{ fontFamily: "Cinzel, serif", color: "#475569", fontSize: 9, letterSpacing: "0.1em", marginTop: 12 }}>SOURCE: {treaty.source}</div>
        </div>
      )}
    </div>
  );
}

// ─── Incarceration Chart ──────────────────────────────────────────────────────
const INCARCERATION_EVENTS: Record<string, { title: string; description: string; source: string }> = {
  "1970": { title: "Nixon Declares War on Drugs", description: "Nixon's domestic policy chief John Ehrlichman later admitted: 'Did we know we were lying about the drugs? Of course we did.' The War on Drugs was designed to target Black communities and the antiwar left.", source: "Baum, Dan. 'Legalize It All.' Harper's Magazine (April 2016)" },
  "1975": { title: "Church Committee Report", description: "The Senate's Church Committee (1976) exposed COINTELPRO — the FBI's program to 'neutralize' Black political leaders. The report documented surveillance, infiltration, and assassination plots against civil rights organizations.", source: "Church Committee Report, U.S. Senate (1976)" },
  "1980": { title: "Reagan Escalates War on Drugs", description: "The Reagan administration dramatically increased federal drug enforcement budgets and mandatory minimum sentences. The number of people incarcerated for drug offenses increased from 40,900 in 1980 to 452,900 by 1990.", source: "Bureau of Justice Statistics, Prisoners in 1990" },
  "1986": { title: "100:1 Crack/Powder Sentencing Disparity", description: "The Anti-Drug Abuse Act of 1986 established a 100:1 sentencing disparity between crack and powder cocaine. 5 grams of crack triggered a 5-year mandatory minimum; 500 grams of powder cocaine was required for the same sentence. In FY2010, 78.7% of crack defendants were Black.", source: "Anti-Drug Abuse Act, 21 U.S.C. § 841 (1986); U.S. Sentencing Commission Report (2015)" },
  "1994": { title: "Crime Bill — Three Strikes, Mandatory Minimums", description: "The Violent Crime Control and Law Enforcement Act of 1994 established three-strikes mandatory life imprisonment and provided $12.5 billion to states adopting truth-in-sentencing laws. 89% of defendants selected for federal capital prosecution were Black or Hispanic.", source: "Violent Crime Control Act, 18 U.S.C. § 3559(c) (1994)" },
  "2000": { title: "Private Prison Industry Expands", description: "CoreCivic (then CCA) and GEO Group expanded dramatically. Their SEC filings explicitly listed 'leniency in conviction or parole standards' as a financial risk — documenting that their profitability depends on high incarceration rates.", source: "CoreCivic SEC Filing (2000); GEO Group Annual Report (2000)" },
  "2010": { title: "Fair Sentencing Act — Disparity Reduced to 18:1", description: "The Fair Sentencing Act of 2010 reduced the crack/powder cocaine sentencing disparity from 100:1 to 18:1. The disparity was not eliminated — it was reduced. The First Step Act (2018) made the change retroactive.", source: "Fair Sentencing Act, Pub. L. 111-220 (2010)" },
  "2024": { title: "CoreCivic Generates $2.4B Revenue", description: "CoreCivic's 2024 SEC filing documents $2.4 billion in annual revenue. The filing explicitly states that 'leniency in conviction or parole standards' would reduce their revenue — proving that the private prison industry's financial interests are structurally aligned with mass incarceration.", source: "CoreCivic Annual Report and SEC Filing (2024)" },
};

function IncarcerationChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const chartRef = useRef<any>(null);

  const years = ["1970", "1975", "1980", "1986", "1990", "1994", "2000", "2008", "2010", "2018", "2024"];
  const rates = [600, 750, 1100, 1500, 2100, 2600, 3200, 3100, 2900, 2400, 2100];

  useEffect(() => {
    if (!canvasRef.current || typeof Chart === "undefined") return;
    if (chartRef.current) chartRef.current.destroy();
    const ctx = canvasRef.current.getContext("2d");
    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: years,
        datasets: [{
          label: "Black Incarceration Rate (per 100,000)",
          data: rates,
          borderColor: "#8b1a1a",
          backgroundColor: "rgba(139,26,26,0.1)",
          borderWidth: 2.5,
          pointBackgroundColor: years.map(y => INCARCERATION_EVENTS[y] ? "#d4af37" : "#8b1a1a"),
          pointRadius: years.map(y => INCARCERATION_EVENTS[y] ? 8 : 4),
          pointHoverRadius: 10,
          fill: true,
          tension: 0.3,
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: true, aspectRatio: 2.2,
        onClick: (_: any, elements: any[]) => {
          if (elements.length > 0) {
            const year = years[elements[0].index];
            setSelected(prev => prev === year ? null : year);
          }
        },
        plugins: {
          legend: { labels: { color: "#94a3b8", font: { family: "Cormorant Garamond, serif", size: 12 } } },
          tooltip: { callbacks: { footer: (items: any[]) => { const y = items[0]?.label; return INCARCERATION_EVENTS[y] ? [`★ Click to see: ${INCARCERATION_EVENTS[y].title}`] : []; } } }
        },
        scales: {
          y: { ticks: { color: "#94a3b8", font: { family: "Cinzel, serif", size: 10 } }, grid: { color: "rgba(212,175,55,0.08)" }, title: { display: true, text: "Rate per 100,000 Black Americans", color: "#64748b", font: { family: "Cinzel, serif", size: 10 } } },
          x: { ticks: { color: "#94a3b8", font: { family: "Cinzel, serif", size: 10 } }, grid: { color: "rgba(212,175,55,0.08)" } }
        }
      }
    });
    return () => chartRef.current?.destroy();
  }, []);

  const event = selected ? INCARCERATION_EVENTS[selected] : null;

  return (
    <div>
      <div style={{ height: 320 }}><canvas ref={canvasRef} /></div>
      <p style={{ fontFamily: "Cinzel, serif", color: "#475569", fontSize: 9, letterSpacing: "0.1em", textAlign: "center", marginTop: 8 }}>GOLD DOTS = KEY LEGISLATION. CLICK TO SEE THE LAW THAT DROVE THAT YEAR'S RATE.</p>
      {event && (
        <div style={{ marginTop: 20, background: "#0a1118", border: "1px solid rgba(139,26,26,0.4)", borderLeft: "4px solid #8b1a1a", padding: "20px 24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
            <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 14 }}>{selected} — {event.title}</div>
            <button onClick={() => setSelected(null)} style={{ background: "transparent", border: "none", color: "#64748b", cursor: "pointer", fontSize: 18 }}>×</button>
          </div>
          <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#e2e8f0", fontSize: 14, lineHeight: 1.8, marginBottom: 12 }}>{event.description}</p>
          <div style={{ fontFamily: "Cinzel, serif", color: "#475569", fontSize: 9, letterSpacing: "0.1em" }}>SOURCE: {event.source}</div>
        </div>
      )}
    </div>
  );
}

// ─── Wealth Gap Chart ─────────────────────────────────────────────────────────
function WealthGapChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<any>(null);
  useEffect(() => {
    if (!canvasRef.current || typeof Chart === "undefined") return;
    if (chartRef.current) chartRef.current.destroy();
    const ctx = canvasRef.current.getContext("2d");
    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["1863", "1900", "1930", "1944\n(GI Bill)", "1968\n(Fair Housing)", "1980", "2008\n(Crisis)", "2019", "2024"],
        datasets: [
          { label: "White Median Household Wealth (Indexed)", data: [100, 180, 280, 350, 580, 720, 850, 1000, 1080], borderColor: "#d4af37", backgroundColor: "rgba(212,175,55,0.08)", borderWidth: 2, tension: 0.3, fill: true },
          { label: "Black Median Household Wealth (Indexed)", data: [1, 8, 12, 15, 45, 58, 55, 74, 78], borderColor: "#8b1a1a", backgroundColor: "rgba(139,26,26,0.15)", borderWidth: 2, tension: 0.3, fill: true },
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: true, aspectRatio: 2.2,
        plugins: { legend: { labels: { color: "#94a3b8", font: { family: "Cormorant Garamond, serif", size: 12 } } } },
        scales: {
          y: { ticks: { color: "#94a3b8", font: { family: "Cinzel, serif", size: 10 } }, grid: { color: "rgba(212,175,55,0.08)" }, title: { display: true, text: "Indexed to 1863 = 100", color: "#64748b", font: { family: "Cinzel, serif", size: 10 } } },
          x: { ticks: { color: "#94a3b8", font: { family: "Cinzel, serif", size: 9 }, maxRotation: 0 }, grid: { color: "rgba(212,175,55,0.08)" } }
        }
      }
    });
    return () => chartRef.current?.destroy();
  }, []);
  return <div style={{ height: 320 }}><canvas ref={canvasRef} /></div>;
}

// ─── Power Mechanics Matrix ───────────────────────────────────────────────────
function PowerMatrix() {
  const rows = [
    { instrument: "Papal Bulls (1452–1455)", beneficiary: "European monarchies", victim: "Indigenous peoples globally", enforcement: "Theological authority + military force", resistance: "Taíno armed resistance; Las Casas documentation" },
    { instrument: "Georgia Charter (1732)", beneficiary: "British Trustees, white settlers", victim: "Creek and Cherokee Nations", enforcement: "Colonial militia + British Army", resistance: "Creek and Cherokee diplomatic and military resistance" },
    { instrument: "Indian Removal Act (1830)", beneficiary: "White land speculators, Georgia settlers", victim: "Five Civilized Tribes", enforcement: "U.S. Army; Georgia militia", resistance: "Worcester v. Georgia; John Ross's legal campaign" },
    { instrument: "13th Amendment loophole (1865)", beneficiary: "Southern planters, railroad companies", victim: "Formerly enslaved Black men", enforcement: "Black Codes; convict leasing contracts", resistance: "Freedmen's Bureau; Black political organizing" },
    { instrument: "Dawes Act (1887)", beneficiary: "Railroad companies, white settlers", victim: "All Indigenous nations", enforcement: "Federal agents; Dawes Commission", resistance: "Redbird Smith; Keetoowah Society refusal to enroll" },
    { instrument: "HOLC Redlining (1935)", beneficiary: "White homeowners, suburban developers", victim: "Black and Brown urban communities", enforcement: "Federal mortgage insurance denial", resistance: "NAACP legal challenges; fair housing activism" },
    { instrument: "War on Drugs (1971–)", beneficiary: "Private prison industry ($4.38B/year)", victim: "Black and Latino communities", enforcement: "Police; mandatory minimums; 100:1 disparity", resistance: "ACLU litigation; Fair Sentencing Act (2010)" },
    { instrument: "Shelby County v. Holder (2013)", beneficiary: "State legislatures seeking voter suppression", victim: "Black voters in Southern states", enforcement: "Voter ID laws passed within hours of ruling", resistance: "Voting rights litigation; grassroots organizing" },
  ];

  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 700 }}>
        <thead>
          <tr style={{ borderBottom: "2px solid rgba(212,175,55,0.3)" }}>
            {["Legal Instrument", "Who Benefited", "Who Lost", "Enforcement", "Resistance"].map(h => (
              <th key={h} style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 9, letterSpacing: "0.1em", padding: "12px 14px", textAlign: "left" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: "1px solid rgba(212,175,55,0.07)", background: i % 2 === 0 ? "transparent" : "rgba(212,175,55,0.02)" }}>
              <td style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 10, padding: "14px", verticalAlign: "top", lineHeight: 1.5 }}>{row.instrument}</td>
              <td style={{ fontFamily: "Cormorant Garamond, serif", color: "#4ade80", fontSize: 13, padding: "14px", verticalAlign: "top", lineHeight: 1.6 }}>{row.beneficiary}</td>
              <td style={{ fontFamily: "Cormorant Garamond, serif", color: "#f87171", fontSize: 13, padding: "14px", verticalAlign: "top", lineHeight: 1.6 }}>{row.victim}</td>
              <td style={{ fontFamily: "Cormorant Garamond, serif", color: "#94a3b8", fontSize: 13, padding: "14px", verticalAlign: "top", lineHeight: 1.6 }}>{row.enforcement}</td>
              <td style={{ fontFamily: "Cormorant Garamond, serif", color: "#d4af37", fontSize: 13, padding: "14px", verticalAlign: "top", lineHeight: 1.6 }}>{row.resistance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ChartsPage() {
  const sections = [
    { id: "land-loss", num: 1, title: "Indigenous Land Loss in the American Southeast", subtitle: "Millions of Acres Ceded by Treaty — 1814 to 1934", description: "Each bar represents a single legal instrument used to transfer land from Indigenous nations to the U.S. government and white settlers. The Dawes Act bar (90 million acres) dwarfs all others — it was the single largest land transfer in American history. Click any bar to see the specific treaty, the mechanism of dispossession, and the resistance that met it.", tier: "TIER 1", tierColor: "#4ade80", source: "National Archives Treaty Records; Kappler's Indian Affairs: Laws and Treaties", chapterSlug: "dawes-act", chapterTitle: "The 1887 Dawes Act", chart: <LandLossChart /> },
    { id: "incarceration", num: 2, title: "Black Incarceration Rate vs. Federal Legislation", subtitle: "Rate per 100,000 Black Americans — 1970 to 2024", description: "This chart proves that incarceration rates are not a product of crime rates — they are a product of legislative choices. The 1986 Anti-Drug Abuse Act's 100:1 crack/powder sentencing disparity is the single most visible inflection point. Gold dots mark years with major legislation. Click any gold dot to see the specific law.", tier: "TIER 1", tierColor: "#4ade80", source: "Bureau of Justice Statistics; U.S. Sentencing Commission; CoreCivic SEC Filing (2024)", chapterSlug: "prison-industrial-complex", chapterTitle: "The Economics of Incarceration", chart: <IncarcerationChart /> },
    { id: "wealth-gap", num: 3, title: "The Racial Wealth Gap — 1863 to 2024", subtitle: "Indexed Median Household Wealth: White vs. Black Americans (1863 = 100)", description: "The gap between the two lines is the documented cost of systemic exclusion. The GI Bill (1944) dramatically widened the gap by providing home loans and college tuition to white veterans while excluding Black veterans. The 2008 financial crisis wiped out 53% of Black household wealth. The gap today is larger than when the Fair Housing Act was passed in 1968.", tier: "TIER 1", tierColor: "#4ade80", source: "Federal Reserve Survey of Consumer Finances; Urban Institute; McKinsey & Company", chapterSlug: "wealth-extraction", chapterTitle: "The Racial Wealth Gap Was Engineered", chart: <WealthGapChart /> },
    { id: "matrix", num: 4, title: "The Power Mechanics Matrix", subtitle: "Eight Legal Instruments — Who Benefited, Who Lost, What Resistance Occurred", description: "This matrix maps the eight major legal instruments of systemic power documented in this encyclopedia. Green = beneficiary. Red = victim. The pattern across 572 years is identical: a small group uses legal instruments to extract land and labor from a larger group, and the larger group resists. This is not coincidence. It is a system.", tier: "TIER 1", tierColor: "#4ade80", source: "National Archives; Cornell Law School; Bureau of Justice Statistics", chapterSlug: "georgia-charter", chapterTitle: "The 1732 Georgia Charter", chart: <PowerMatrix /> },
  ];

  return (
    <div style={{ backgroundColor: "#0a1118", minHeight: "100vh" }}>
      <Navigation />
      <section style={{ paddingTop: 100, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="text-center" style={{ marginBottom: 60 }}>
            <div style={{ color: "#d4af37", fontSize: 11, letterSpacing: "0.4em", fontFamily: "Cinzel, serif", marginBottom: 12 }}>✦ APPENDIX C ✦</div>
            <h1 style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: 16 }}>Charts & Data Visualizations</h1>
            <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: "1.1rem", maxWidth: 600, margin: "0 auto" }}>
              The unbroken chain of causation — told through data. All figures sourced from primary government records and peer-reviewed scholarship.
            </p>
          </div>

          {/* Jump links */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 60, justifyContent: "center" }}>
            {sections.map(s => (
              <a key={s.id} href={`#${s.id}`} style={{ fontFamily: "Cinzel, serif", color: "#64748b", fontSize: 9, letterSpacing: "0.1em", border: "1px solid rgba(212,175,55,0.2)", padding: "8px 14px", textDecoration: "none" }}>
                {s.num}. {s.title.split(" ").slice(0, 3).join(" ")}...
              </a>
            ))}
          </div>

          {sections.map(section => (
            <div key={section.id} id={section.id} style={{ marginBottom: 80 }}>
              <div style={{ marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                  <span style={{ fontFamily: "Cinzel, serif", color: section.tierColor, fontSize: 9, letterSpacing: "0.1em", border: `1px solid ${section.tierColor}40`, padding: "2px 8px" }}>{section.tier} — PRIMARY SOURCE</span>
                  <span style={{ fontFamily: "Cinzel, serif", color: "#475569", fontSize: 9, letterSpacing: "0.1em" }}>CHART {section.num} OF {sections.length}</span>
                </div>
                <h2 style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", marginBottom: 4 }}>{section.title}</h2>
                <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: "0.95rem", fontStyle: "italic", marginBottom: 12 }}>{section.subtitle}</p>
                <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#94a3b8", fontSize: "1rem", lineHeight: 1.8 }}>{section.description}</p>
              </div>

              <div style={{ background: "#0f1923", border: "1px solid rgba(212,175,55,0.12)", padding: "24px" }}>
                {section.chart}
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12, flexWrap: "wrap", gap: 8 }}>
                <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#475569", fontSize: 11 }}>
                  <span style={{ fontFamily: "Cinzel, serif", fontSize: 8, letterSpacing: "0.1em", color: "#334155" }}>SOURCE: </span>{section.source}
                </div>
                <Link href={`/chapter/${section.chapterSlug}`}>
                  <button style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "transparent", border: "1px solid rgba(212,175,55,0.2)", color: "#d4af37", fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.1em", padding: "8px 14px", cursor: "pointer" }}>
                    <BookOpen size={10} />
                    READ: {section.chapterTitle?.toUpperCase()}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
