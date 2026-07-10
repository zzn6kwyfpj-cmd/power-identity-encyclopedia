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

// ─── Census Label Chart ──────────────────────────────────────────────────────
function CensusLabelChart() {
  const data = [
    { year: "1790", label: "Free White / All Other Free Persons / Slaves", note: "No category for Black Americans as people — only as property or 'other'" },
    { year: "1820", label: "Free Colored Persons", note: "First time free Black people received a distinct category" },
    { year: "1850", label: "Black / Mulatto", note: "'Mulatto' introduced to track mixed-race ancestry" },
    { year: "1870", label: "Black / Mulatto / Quadroon / Octoroon", note: "Fraction-based categories to track degrees of 'Black blood'" },
    { year: "1900", label: "Black", note: "Fraction categories removed; 'one drop rule' applied" },
    { year: "1930", label: "Negro (default for any Black-Indigenous mix)", note: "CRITICAL: Enumerators instructed to classify mixed Indian-Negro as Negro unless Indian blood 'predominates'" },
    { year: "1960", label: "Negro", note: "No change — same label used for 30 years" },
    { year: "1970", label: "Negro or Black", note: "First time 'Black' offered as an alternative" },
    { year: "1980", label: "Black or Negro", note: "Order reversed — 'Black' placed first" },
    { year: "2000", label: "Black, African Am., or Negro", note: "'African American' added for the first time" },
    { year: "2020", label: "Black or African American", note: "'Negro' finally removed after 90 years" },
  ];

  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 600 }}>
        <thead>
          <tr style={{ borderBottom: "2px solid rgba(212,175,55,0.3)" }}>
            {["Census Year", "Official Label", "What Changed and Why"].map(h => (
              <th key={h} style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 9, letterSpacing: "0.1em", padding: "12px 14px", textAlign: "left" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} style={{ borderBottom: "1px solid rgba(212,175,55,0.07)", background: row.year === "1930" ? "rgba(139,26,26,0.1)" : i % 2 === 0 ? "transparent" : "rgba(212,175,55,0.02)" }}>
              <td style={{ fontFamily: "Cinzel, serif", color: row.year === "1930" ? "#f87171" : "#d4af37", fontSize: 13, padding: "12px 14px", verticalAlign: "top", fontWeight: row.year === "1930" ? 700 : 400 }}>{row.year}</td>
              <td style={{ fontFamily: "Cormorant Garamond, serif", color: "#e2e8f0", fontSize: 13, padding: "12px 14px", verticalAlign: "top", lineHeight: 1.6 }}>{row.label}</td>
              <td style={{ fontFamily: "Cormorant Garamond, serif", color: row.year === "1930" ? "#fca5a5" : "#94a3b8", fontSize: 13, padding: "12px 14px", verticalAlign: "top", lineHeight: 1.6 }}>{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: 16, background: "rgba(139,26,26,0.08)", border: "1px solid rgba(248,113,113,0.3)", borderLeft: "4px solid #f87171", padding: "14px 18px" }}>
        <div style={{ fontFamily: "Cinzel, serif", color: "#f87171", fontSize: 9, letterSpacing: "0.2em", marginBottom: 6 }}>✦ THE 1930 INSTRUCTION — VERBATIM</div>
        <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#e2e8f0", fontSize: 14, lineHeight: 1.8, fontStyle: "italic", margin: 0 }}>
          "A person of mixed Indian and Negro blood should be returned a Negro, unless the Indian blood predominates and the status as an Indian is generally accepted in the community."
        </p>
        <div style={{ fontFamily: "Cinzel, serif", color: "#475569", fontSize: 9, letterSpacing: "0.1em", marginTop: 8 }}>SOURCE: U.S. Census Bureau, 1930 Enumerator Instructions, National Archives Record Group 29</div>
      </div>
    </div>
  );
}

// ─── GI Bill Chart ────────────────────────────────────────────────────────────
function GIBillChart() {
  const states = [
    { state: "Mississippi", total: 3229, black: 2, pct: 0.06 },
    { state: "Georgia", total: 8000, black: 40, pct: 0.5 },
    { state: "Alabama", total: 6000, black: 30, pct: 0.5 },
    { state: "Louisiana", total: 7000, black: 35, pct: 0.5 },
    { state: "South Carolina", total: 4000, black: 20, pct: 0.5 },
    { state: "New York", total: 45000, black: 4500, pct: 10 },
    { state: "Illinois", total: 38000, black: 3800, pct: 10 },
    { state: "California", total: 42000, black: 4200, pct: 10 },
  ];

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12, marginBottom: 20 }}>
        {states.map((s, i) => {
          const isSouth = i < 5;
          const barPct = Math.min(s.pct / 12 * 100, 100);
          return (
            <div key={s.state} style={{ background: "#0a1118", border: `1px solid ${isSouth ? "rgba(248,113,113,0.3)" : "rgba(74,222,128,0.3)"}`, padding: "14px 16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <div style={{ fontFamily: "Cinzel, serif", color: isSouth ? "#f87171" : "#4ade80", fontSize: 11 }}>{s.state}</div>
                <div style={{ fontFamily: "Cinzel, serif", color: "#64748b", fontSize: 9 }}>{isSouth ? "SOUTH" : "NORTH/WEST"}</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#94a3b8", fontSize: 12 }}>Total VA loans: <strong style={{ color: "#e2e8f0" }}>{s.total.toLocaleString()}</strong></div>
                <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#94a3b8", fontSize: 12 }}>To Black veterans: <strong style={{ color: isSouth ? "#f87171" : "#4ade80" }}>{s.black.toLocaleString()}</strong></div>
              </div>
              <div style={{ background: "rgba(212,175,55,0.08)", height: 8, borderRadius: 2 }}>
                <div style={{ width: `${barPct}%`, height: "100%", background: isSouth ? "#8b1a1a" : "#2d6a4f", borderRadius: 2, minWidth: 2 }} />
              </div>
              <div style={{ fontFamily: "Cinzel, serif", color: isSouth ? "#f87171" : "#4ade80", fontSize: 9, letterSpacing: "0.1em", marginTop: 4 }}>{s.pct.toFixed(1)}% went to Black veterans</div>
            </div>
          );
        })}
      </div>
      <div style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(248,113,113,0.2)", borderLeft: "4px solid #8b1a1a", padding: "14px 18px" }}>
        <div style={{ fontFamily: "Cinzel, serif", color: "#f87171", fontSize: 9, letterSpacing: "0.2em", marginBottom: 6 }}>✦ KEY FINDING</div>
        <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#e2e8f0", fontSize: 14, lineHeight: 1.8, margin: 0 }}>
          In Mississippi in 1947, 3,229 VA home loans were issued. Only 2 went to Black veterans — 0.06%. The GI Bill created the American middle class and deliberately excluded Black Americans from it. The compounding wealth effect of this exclusion over 80 years is the documented foundation of the racial wealth gap.
        </p>
      </div>
    </div>
  );
}

// ─── Homeownership Chart ──────────────────────────────────────────────────────
function HomeownershipChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<any>(null);
  useEffect(() => {
    if (!canvasRef.current || typeof Chart === "undefined") return;
    if (chartRef.current) chartRef.current.destroy();
    const ctx = canvasRef.current.getContext("2d");
    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["1900", "1920", "1940", "1950", "1960", "1968\n(Fair Housing)", "1980", "1990", "2000", "2008", "2020", "2024"],
        datasets: [
          { label: "White Homeownership Rate (%)", data: [46, 49, 46, 57, 64, 65, 68, 69, 74, 75, 74, 73], borderColor: "#d4af37", backgroundColor: "rgba(212,175,55,0.08)", borderWidth: 2, tension: 0.3, fill: true },
          { label: "Black Homeownership Rate (%)", data: [20, 23, 23, 35, 38, 41, 44, 43, 47, 47, 44, 44], borderColor: "#8b1a1a", backgroundColor: "rgba(139,26,26,0.12)", borderWidth: 2, tension: 0.3, fill: true },
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: true, aspectRatio: 2.2,
        plugins: { legend: { labels: { color: "#94a3b8", font: { family: "Cormorant Garamond, serif", size: 12 } } } },
        scales: {
          y: { min: 0, max: 80, ticks: { color: "#94a3b8", font: { family: "Cinzel, serif", size: 10 }, callback: (v: any) => `${v}%` }, grid: { color: "rgba(212,175,55,0.08)" }, title: { display: true, text: "% of Households That Own Their Home", color: "#64748b", font: { family: "Cinzel, serif", size: 10 } } },
          x: { ticks: { color: "#94a3b8", font: { family: "Cinzel, serif", size: 9 }, maxRotation: 0 }, grid: { color: "rgba(212,175,55,0.08)" } }
        }
      }
    });
    return () => chartRef.current?.destroy();
  }, []);
  return (
    <div>
      <div style={{ height: 320 }}><canvas ref={canvasRef} /></div>
      <div style={{ marginTop: 16, background: "rgba(139,26,26,0.06)", border: "1px solid rgba(248,113,113,0.2)", borderLeft: "4px solid #8b1a1a", padding: "14px 18px" }}>
        <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#e2e8f0", fontSize: 14, lineHeight: 1.8, margin: 0 }}>
          The Black homeownership rate in 2024 (44%) is <strong>lower than it was in 2000 (47%)</strong> — and the gap between Black and white homeownership is <strong>larger today than when the Fair Housing Act was passed in 1968</strong>. Anti-discrimination law without economic restitution cannot close a gap created by 80 years of deliberate exclusion.
        </p>
        <div style={{ fontFamily: "Cinzel, serif", color: "#475569", fontSize: 9, letterSpacing: "0.1em", marginTop: 8 }}>SOURCE: U.S. Census Bureau; Urban Institute Housing Finance Policy Center (2024)</div>
      </div>
    </div>
  );
}

// ─── Broken Promises: Treaty Acreage Chart ───────────────────────────────────
function BrokenPromisesChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<any>(null);
  const [selected, setSelected] = useState<number | null>(null);

  const treaties = [
    { year: 1785, nation: "Cherokee", treaty: "Treaty of Hopewell", acres: 0.5, note: "First U.S.-Cherokee treaty. The U.S. promised permanent boundaries. Violated within years.", source: "Kappler's Indian Affairs Laws and Treaties" },
    { year: 1790, nation: "Creek (Muscogee)", treaty: "Treaty of New York", acres: 1.5, note: "First treaty under the U.S. Constitution. Creek cede Oconee River lands. U.S. fails to police borders immediately.", source: "U.S. Statutes at Large, 7 Stat. 35" },
    { year: 1802, nation: "Creek (Muscogee)", treaty: "Treaty of Fort Wilkinson", acres: 2.5, note: "Creek cede Georgia lands along the Oconee, Ocmulgee, and Altamaha rivers. First in a series of forced Georgia cessions.", source: "Kappler's Indian Affairs Laws and Treaties" },
    { year: 1805, nation: "Cherokee", treaty: "Treaty of Washington", acres: 1.2, note: "Cherokee cede Tennessee and Georgia lands for roads. U.S. fails to protect remaining lands from encroachment.", source: "Kappler's Indian Affairs Laws and Treaties" },
    { year: 1814, nation: "Creek (Muscogee)", treaty: "Treaty of Fort Jackson", acres: 23, note: "Jackson forces Creek to cede 23 million acres — including land from Creek allies who fought alongside him. The largest single forced cession in Georgia history.", source: "Kappler's Indian Affairs Laws and Treaties" },
    { year: 1821, nation: "Creek (Muscogee)", treaty: "Treaty of Indian Springs (1st)", acres: 4.3, note: "4.3 million acres ceded east of the Flint River. Later deemed fraudulent — Chief McIntosh received personal payments for his role.", source: "Kappler's Indian Affairs Laws and Treaties" },
    { year: 1825, nation: "Creek (Muscogee)", treaty: "Treaty of Indian Springs (2nd)", acres: 5.2, note: "McIntosh signs away ALL remaining Creek lands in Georgia without tribal authorization. He is executed by Creek warriors. The U.S. Senate ratifies it anyway.", source: "Kappler's Indian Affairs Laws and Treaties" },
    { year: 1826, nation: "Creek (Muscogee)", treaty: "Treaty of Washington", acres: 3.8, note: "Creek forced to cede all remaining Georgia lands east of the Chattahoochee. By 1838, the entire Creek Nation has been removed from Georgia.", source: "Kappler's Indian Affairs Laws and Treaties" },
    { year: 1830, nation: "Choctaw", treaty: "Treaty of Dancing Rabbit Creek", acres: 10.4, note: "First removal treaty under the Indian Removal Act. 11 million acres of Mississippi homeland ceded. ~2,500–6,000 Choctaw die during removal.", source: "Kappler's Indian Affairs Laws and Treaties, 7 Stat. 333" },
    { year: 1832, nation: "Chickasaw", treaty: "Treaty of Pontotoc Creek", acres: 6.4, note: "Chickasaw cede 6 million acres of Mississippi lands for a promise of equivalent territory west of the Mississippi — a promise delayed for years.", source: "Kappler's Indian Affairs Laws and Treaties" },
    { year: 1835, nation: "Cherokee", treaty: "Treaty of New Echota", acres: 7, note: "Minority faction signs away 7 million acres without authorization. 16,000 Cherokee sign a petition rejecting it. The U.S. Senate ratifies it by a single vote. The Trail of Tears follows.", source: "Kappler's Indian Affairs Laws and Treaties" },
    { year: 1868, nation: "Lakota (Sioux)", treaty: "Fort Laramie Treaty", acres: 0, note: "The Black Hills guaranteed 'as long as the grass shall grow.' Gold discovered in 1874. U.S. violates the treaty and seizes the land. The Black Hills have never been returned.", source: "National Archives, Treaty of Fort Laramie (1868)" },
    { year: 1887, nation: "All Indigenous Nations", treaty: "Dawes Act (Allotment)", acres: 90, note: "The Dawes Act breaks up communally held tribal land. Between 1887 and 1934, Indigenous peoples lose 90 million acres — nearly two-thirds of all tribal land.", source: "General Allotment Act, 24 Stat. 388 (1887)" },
  ];

  useEffect(() => {
    if (!canvasRef.current || typeof Chart === "undefined") return;
    if (chartRef.current) chartRef.current.destroy();
    const ctx = canvasRef.current.getContext("2d");
    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: treaties.map(t => `${t.year}`),
        datasets: [{
          label: "Millions of Acres Ceded",
          data: treaties.map(t => t.acres),
          backgroundColor: treaties.map((_, i) => i === selected ? "rgba(212,175,55,0.9)" : "rgba(139,26,26,0.65)"),
          borderColor: treaties.map((_, i) => i === selected ? "#d4af37" : "#8b1a1a"),
          borderWidth: 2,
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: true, aspectRatio: 2,
        onClick: (_: any, elements: any[]) => {
          if (elements.length > 0) { const i = elements[0].index; setSelected(prev => prev === i ? null : i); }
        },
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: {
            title: (items: any[]) => treaties[items[0].dataIndex].treaty,
            label: (item: any) => ` ${treaties[item.dataIndex].acres > 0 ? treaties[item.dataIndex].acres + " million acres" : "Land seized (no acreage recorded)"}`,
            footer: () => ["Click bar for full treaty details"],
          }}
        },
        scales: {
          y: { ticks: { color: "#94a3b8", font: { family: "Cinzel, serif", size: 10 }, callback: (v: any) => v === 0 ? "0" : `${v}M` }, grid: { color: "rgba(212,175,55,0.08)" }, title: { display: true, text: "Millions of Acres Ceded", color: "#64748b", font: { family: "Cinzel, serif", size: 10 } } },
          x: { ticks: { color: "#94a3b8", font: { family: "Cinzel, serif", size: 9 } }, grid: { color: "rgba(212,175,55,0.08)" }, title: { display: true, text: "Year of Treaty", color: "#64748b", font: { family: "Cinzel, serif", size: 10 } } }
        }
      }
    });
    return () => chartRef.current?.destroy();
  }, [selected]);

  const t = selected !== null ? treaties[selected] : null;
  const totalAcres = treaties.reduce((sum, tr) => sum + tr.acres, 0);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = totalAcres;
    const duration = 2000;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = end / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setDisplayCount(end); clearInterval(timer); }
      else { setDisplayCount(Math.floor(start * 10) / 10); }
    }, stepTime);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Dynamic Cumulative Counter */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 24 }}>
        <div style={{ background: "rgba(139,26,26,0.1)", border: "1px solid rgba(248,113,113,0.3)", borderLeft: "4px solid #8b1a1a", padding: "16px 20px", textAlign: "center" }}>
          <div style={{ fontFamily: "Cinzel, serif", color: "#f87171", fontSize: 9, letterSpacing: "0.2em", marginBottom: 8 }}>TOTAL ACRES LOST</div>
          <div style={{ fontFamily: "Cinzel, serif", color: "#f87171", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 900, lineHeight: 1 }}>
            {displayCount.toFixed(1)}M
          </div>
          <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: 11, marginTop: 6 }}>million acres across {treaties.length} treaties</div>
        </div>
        <div style={{ background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.2)", borderLeft: "4px solid #d4af37", padding: "16px 20px", textAlign: "center" }}>
          <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 9, letterSpacing: "0.2em", marginBottom: 8 }}>TREATIES DOCUMENTED</div>
          <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 900, lineHeight: 1 }}>374</div>
          <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: 11, marginTop: 6 }}>total U.S.-Indigenous treaties signed</div>
        </div>
        <div style={{ background: "rgba(139,26,26,0.05)", border: "1px solid rgba(248,113,113,0.15)", borderLeft: "4px solid #8b1a1a", padding: "16px 20px", textAlign: "center" }}>
          <div style={{ fontFamily: "Cinzel, serif", color: "#f87171", fontSize: 9, letterSpacing: "0.2em", marginBottom: 8 }}>TREATIES HONORED</div>
          <div style={{ fontFamily: "Cinzel, serif", color: "#f87171", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 900, lineHeight: 1 }}>0</div>
          <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: 11, marginTop: 6 }}>every single one was broken</div>
        </div>
      </div>
      <div style={{ height: 340 }}><canvas ref={canvasRef} /></div>
      <p style={{ fontFamily: "Cinzel, serif", color: "#475569", fontSize: 9, letterSpacing: "0.1em", textAlign: "center", marginTop: 8 }}>CLICK ANY BAR TO SEE THE FULL TREATY DETAILS</p>
      {t && (
        <div style={{ marginTop: 20, background: "#0a1118", border: "1px solid rgba(139,26,26,0.5)", borderLeft: "4px solid #8b1a1a", padding: "20px 24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
            <div>
              <div style={{ fontFamily: "Cinzel, serif", color: "#f87171", fontSize: 10, letterSpacing: "0.1em", marginBottom: 4 }}>{t.nation} · {t.year}</div>
              <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 16, marginBottom: 4 }}>{t.treaty}</div>
              {t.acres > 0 && <div style={{ fontFamily: "Cinzel, serif", color: "#f87171", fontSize: 13 }}>{t.acres} million acres ceded</div>}
            </div>
            <button onClick={() => setSelected(null)} style={{ background: "transparent", border: "1px solid rgba(212,175,55,0.3)", color: "#64748b", fontFamily: "Cinzel, serif", fontSize: 9, padding: "6px 12px", cursor: "pointer", letterSpacing: "0.1em" }}>✕ CLOSE</button>
          </div>
          <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#e2e8f0", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: 12 }}>{t.note}</p>
          <div style={{ fontFamily: "Cinzel, serif", color: "#475569", fontSize: 9, letterSpacing: "0.1em" }}>SOURCE: {t.source}</div>
        </div>
      )}
      <div style={{ marginTop: 20, background: "rgba(139,26,26,0.06)", border: "1px solid rgba(248,113,113,0.2)", borderLeft: "4px solid #8b1a1a", padding: "14px 18px" }}>
        <div style={{ fontFamily: "Cinzel, serif", color: "#f87171", fontSize: 9, letterSpacing: "0.2em", marginBottom: 6 }}>✦ THE PATTERN</div>
        <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#e2e8f0", fontSize: 14, lineHeight: 1.8, margin: 0 }}>
          Between 1785 and 1887, the United States signed 374 treaties with Indigenous nations. Every single one was broken. The 1871 Indian Appropriations Act ended treaty-making entirely — not because the U.S. had honored its obligations, but because Congress decided it no longer needed to negotiate. The total acreage shown above represents only the documented cessions in the Southeast and Plains. The full national total exceeds 1.5 billion acres.
        </p>
        <div style={{ fontFamily: "Cinzel, serif", color: "#475569", fontSize: 9, letterSpacing: "0.1em", marginTop: 8 }}>SOURCE: Kappler's Indian Affairs: Laws and Treaties (1904); National Archives Treaty Records</div>
      </div>
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
    { id: "census-labels", num: 5, title: "How the U.S. Census Classified Black Americans", subtitle: "Official Racial Category Labels Used by the Federal Government — 1790 to 2020", description: "The U.S. Census did not simply count people — it classified them. The labels used to categorize Black Americans changed 11 times between 1790 and 2020, each change reflecting a political decision about who counted and who did not. The 1930 instruction that 'a person of mixed Indian and Negro blood should be returned a Negro' is the most consequential single sentence in this entire history. This chart shows how the federal government's own language evolved — and what each change meant for the people it described.", tier: "TIER 1", tierColor: "#4ade80", source: "U.S. Census Bureau Enumerator Instructions (1790–2020), National Archives Record Group 29", chapterSlug: "identity-erasure", chapterTitle: "The Paper Genocide", chart: <CensusLabelChart /> },
    { id: "gi-bill", num: 6, title: "The GI Bill's Racial Exclusion — VA Loans by State (1947)", subtitle: "How the Most Transformative Wealth-Building Program in American History Was Administered Through Racial Discrimination", description: "The GI Bill (1944) created the American middle class. It provided veterans with college tuition, low-interest home loans, and unemployment benefits. But it was administered through local VA offices, local banks, and local universities — all of which practiced racial discrimination. This chart shows the documented disparity in VA loan distribution in 1947, the year the program was at its peak. Mississippi is the most extreme example: 3,229 VA loans issued; only 2 went to Black veterans.", tier: "TIER 1", tierColor: "#4ade80", source: "Katznelson, Ira. When Affirmative Action Was White (2005); VA loan records, National Archives", chapterSlug: "wealth-extraction", chapterTitle: "The Racial Wealth Gap Was Engineered", chart: <GIBillChart /> },
    { id: "broken-promises", num: 7, title: "Broken Promises: Acreage Ceded by Treaty — 1785 to 1887", subtitle: "Every Bar is a Sovereign Agreement Made and Broken", description: "Each bar represents a specific treaty between the U.S. government and an Indigenous nation. The height of the bar shows the millions of acres ceded. The selected bar turns gold when clicked, revealing the specific treaty name, the promise made, and exactly how it was broken. The Dawes Act bar (90 million acres) dwarfs everything else — it was the single largest land transfer in American history, achieved not through a treaty but through unilateral legislation after the 1871 Indian Appropriations Act ended treaty-making entirely.", tier: "TIER 1", tierColor: "#4ade80", source: "Kappler's Indian Affairs: Laws and Treaties (1904); National Archives Treaty Records", chapterSlug: "treaties-broken-promises", chapterTitle: "The Treaties: Sovereign Agreements Made and Broken", chart: <BrokenPromisesChart /> },
    { id: "homeownership", num: 8, title: "The Black Homeownership Gap — 1900 to 2024", subtitle: "Percentage of Households That Own Their Home: White vs. Black Americans", description: "Homeownership is the primary mechanism by which American families build intergenerational wealth. The Black homeownership rate has never exceeded 50% in recorded history. The gap between Black and white homeownership today is larger than it was in 1968 when the Fair Housing Act was passed — proving that anti-discrimination law without economic restitution cannot close a gap created by 80 years of deliberate exclusion.", tier: "TIER 1", tierColor: "#4ade80", source: "U.S. Census Bureau; Urban Institute; National Association of Realtors", chapterSlug: "redlining-housing-discrimination", chapterTitle: "Redlining and the Housing Wealth Gap", chart: <HomeownershipChart /> },
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
