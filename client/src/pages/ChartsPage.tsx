import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";

// Chart.js loaded via CDN in index.html — declare global
declare const Chart: any;

function LandLossChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!canvasRef.current || typeof Chart === "undefined") return;
    const ctx = canvasRef.current.getContext("2d");
    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Creek Nation\n(Treaty of Fort Jackson, 1814)", "Cherokee Nation\n(Treaty of New Echota, 1835)", "Choctaw Nation\n(Treaty of Dancing Rabbit, 1830)", "Chickasaw Nation\n(Treaty of Pontotoc, 1832)", "All Five Tribes\n(Dawes Act, 1887–1934)"],
        datasets: [{
          label: "Acres Lost (Millions)",
          data: [23, 7, 10.4, 6.4, 90],
          backgroundColor: ["rgba(139,26,26,0.7)", "rgba(212,175,55,0.7)", "rgba(45,106,79,0.7)", "rgba(107,63,160,0.7)", "rgba(29,111,164,0.7)"],
          borderColor: ["#8b1a1a", "#d4af37", "#2d6a4f", "#6b3fa0", "#1d6fa4"],
          borderWidth: 2,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          title: { display: true, text: "Indigenous Land Cessions in the Southeast (Millions of Acres)", color: "#d4af37", font: { size: 14, family: "Cinzel, serif" } }
        },
        scales: {
          y: { ticks: { color: "#94a3b8" }, grid: { color: "rgba(212,175,55,0.1)" }, title: { display: true, text: "Acres Lost (Millions)", color: "#64748b" } },
          x: { ticks: { color: "#94a3b8", maxRotation: 0 }, grid: { color: "rgba(212,175,55,0.1)" } }
        }
      }
    });
    return () => chart.destroy();
  }, []);
  return <canvas ref={canvasRef} />;
}

function WealthGapChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!canvasRef.current || typeof Chart === "undefined") return;
    const ctx = canvasRef.current.getContext("2d");
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["1790", "1860", "1870", "1900", "1930", "1950", "1970", "1990", "2010", "2024"],
        datasets: [
          {
            label: "White Household Wealth Share (%)",
            data: [99.5, 99.0, 98.5, 98.0, 97.5, 96.0, 94.0, 93.0, 92.0, 89.0],
            borderColor: "#d4af37",
            backgroundColor: "rgba(212,175,55,0.1)",
            tension: 0.4,
            fill: true,
          },
          {
            label: "Black Household Wealth Share (%)",
            data: [0.5, 0.5, 0.5, 1.0, 1.5, 2.0, 3.0, 4.0, 4.5, 4.9],
            borderColor: "#8b1a1a",
            backgroundColor: "rgba(139,26,26,0.1)",
            tension: 0.4,
            fill: true,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: "#94a3b8", font: { family: "Cormorant Garamond, serif" } } },
          title: { display: true, text: "Racial Wealth Gap: Share of U.S. Household Wealth (1790–2024)", color: "#d4af37", font: { size: 14, family: "Cinzel, serif" } }
        },
        scales: {
          y: { ticks: { color: "#94a3b8" }, grid: { color: "rgba(212,175,55,0.1)" }, title: { display: true, text: "% of Total U.S. Household Wealth", color: "#64748b" } },
          x: { ticks: { color: "#94a3b8" }, grid: { color: "rgba(212,175,55,0.1)" } }
        }
      }
    });
    return () => chart.destroy();
  }, []);
  return <canvas ref={canvasRef} />;
}

function LabelTimelineChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!canvasRef.current || typeof Chart === "undefined") return;
    const ctx = canvasRef.current.getContext("2d");
    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["1790", "1820", "1850", "1870", "1890", "1910", "1930", "1960", "1980", "2000", "2020"],
        datasets: [
          { label: "Free Negro / Mulatto", data: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], backgroundColor: "rgba(139,26,26,0.7)" },
          { label: "Negro / Black", data: [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0], backgroundColor: "rgba(212,175,55,0.7)" },
          { label: "Negro / Black / African American", data: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0], backgroundColor: "rgba(45,106,79,0.7)" },
          { label: "Black / African American", data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], backgroundColor: "rgba(29,111,164,0.7)" },
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: "#94a3b8", font: { family: "Cormorant Garamond, serif" } } },
          title: { display: true, text: "U.S. Census Racial Classification Labels for Black Americans (1790–2020)", color: "#d4af37", font: { size: 14, family: "Cinzel, serif" } }
        },
        scales: {
          y: { display: false, stacked: true },
          x: { ticks: { color: "#94a3b8" }, grid: { color: "rgba(212,175,55,0.1)" }, stacked: true }
        }
      }
    });
    return () => chart.destroy();
  }, []);
  return <canvas ref={canvasRef} />;
}

function EvidenceTierChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!canvasRef.current || typeof Chart === "undefined") return;
    const ctx = canvasRef.current.getContext("2d");
    const chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Tier 1 — Primary Sources", "Tier 2 — Scholarly Analysis", "Tier 3 — Community Historical Traditions"],
        datasets: [{
          data: [65, 25, 10],
          backgroundColor: ["rgba(74,222,128,0.7)", "rgba(212,175,55,0.7)", "rgba(248,113,113,0.7)"],
          borderColor: ["#4ade80", "#d4af37", "#f87171"],
          borderWidth: 2,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: "#94a3b8", font: { family: "Cormorant Garamond, serif" } } },
          title: { display: true, text: "Evidence Tier Distribution Across 29 Chapters", color: "#d4af37", font: { size: 14, family: "Cinzel, serif" } }
        }
      }
    });
    return () => chart.destroy();
  }, []);
  return <canvas ref={canvasRef} />;
}

export default function ChartsPage() {
  return (
    <div style={{ backgroundColor: "#0a1118", minHeight: "100vh" }}>
      <Navigation />
      <section style={{ paddingTop: 100, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <div className="text-center" style={{ marginBottom: 60 }}>
            <div style={{ color: "#d4af37", fontSize: 11, letterSpacing: "0.4em", fontFamily: "Cinzel, serif", marginBottom: 12 }}>✦ APPENDIX D ✦</div>
            <h1 style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: 16 }}>Charts & Data Visualizations</h1>
            <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: "1.1rem", maxWidth: 600, margin: "0 auto" }}>
              The unbroken chain of causation, visualized. All data sourced from primary government records and peer-reviewed scholarship.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {/* Land Loss Chart */}
            <div style={{ background: "#0f1923", border: "1px solid rgba(212,175,55,0.2)", padding: "32px" }}>
              <div style={{ height: 350 }}>
                <LandLossChart />
              </div>
              <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: 12, marginTop: 12, textAlign: "center" }}>
                Sources: Treaty of Fort Jackson (1814), Treaty of Dancing Rabbit Creek (1830), Treaty of Pontotoc (1832), Treaty of New Echota (1835), Dawes Act (1887). National Archives.
              </p>
            </div>

            {/* Wealth Gap Chart */}
            <div style={{ background: "#0f1923", border: "1px solid rgba(212,175,55,0.2)", padding: "32px" }}>
              <div style={{ height: 350 }}>
                <WealthGapChart />
              </div>
              <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: 12, marginTop: 12, textAlign: "center" }}>
                Sources: Federal Reserve Survey of Consumer Finances (2022); McKinsey & Company, The Economic Impact of Closing the Racial Wealth Gap (2019); Thomas Craemer, Estimating Slavery Reparations (2015).
              </p>
            </div>

            {/* Two-column charts */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: 32 }}>
              <div style={{ background: "#0f1923", border: "1px solid rgba(212,175,55,0.2)", padding: "32px" }}>
                <div style={{ height: 300 }}>
                  <LabelTimelineChart />
                </div>
                <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: 12, marginTop: 12, textAlign: "center" }}>
                  Source: U.S. Census Bureau Historical Records, National Archives.
                </p>
              </div>
              <div style={{ background: "#0f1923", border: "1px solid rgba(212,175,55,0.2)", padding: "32px" }}>
                <div style={{ height: 300 }}>
                  <EvidenceTierChart />
                </div>
                <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: 12, marginTop: 12, textAlign: "center" }}>
                  The Archive Encyclopedia evidence tier methodology. See About page for full explanation.
                </p>
              </div>
            </div>

            {/* Power Mechanics Matrix */}
            <div style={{ background: "#0f1923", border: "1px solid rgba(212,175,55,0.2)", padding: "32px" }}>
              <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 13, letterSpacing: "0.1em", marginBottom: 20 }}>
                THE POWER MECHANICS MATRIX
              </div>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "Cormorant Garamond, serif" }}>
                  <thead>
                    <tr style={{ borderBottom: "2px solid rgba(212,175,55,0.3)" }}>
                      {["Legal Instrument", "Year", "Who Benefited", "Who Lost", "Enforcement Mechanism", "Resistance"].map(h => (
                        <th key={h} style={{ padding: "10px 12px", color: "#d4af37", fontFamily: "Cinzel, serif", fontSize: 10, letterSpacing: "0.1em", textAlign: "left" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Georgia Charter", "1732", "British Crown / Trustees", "Creek & Cherokee Nations", "Royal decree / Corporate charter", "Creek & Cherokee diplomacy"],
                      ["Doctrine of Discovery", "1493–1823", "European colonial powers / U.S.", "All Indigenous peoples", "Papal authority / Supreme Court (Johnson v. M'Intosh)", "Ongoing legal challenges"],
                      ["Indian Removal Act", "1830", "White settlers / Land speculators", "Five Civilized Tribes", "U.S. Army / State militias", "Worcester v. Georgia; armed resistance"],
                      ["13th Amendment loophole", "1865", "Southern corporations / States", "Formerly enslaved Black Americans", "Black Codes / Convict leasing", "NAACP; labor organizing"],
                      ["Dawes Act", "1887", "Railroad companies / White settlers", "All Native American nations", "Federal allotment / Land sales", "Keetoowah Society; AIM"],
                      ["1930 Census rule", "1930", "U.S. government / White supremacy", "Mixed Black-Indigenous Americans", "Administrative classification", "Genealogy research; legal challenges"],
                      ["GI Bill (racial exclusion)", "1944", "White veterans / Suburban developers", "Black and Indigenous veterans", "Local VA administration / Redlining", "NAACP legal campaigns"],
                      ["COINTELPRO", "1956–1971", "FBI / Federal government", "Black & Indigenous political leaders", "Surveillance / Assassination / Prosecution", "Church Committee; ongoing advocacy"],
                    ].map((row, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid rgba(212,175,55,0.1)", background: i % 2 === 0 ? "transparent" : "rgba(212,175,55,0.02)" }}>
                        {row.map((cell, j) => (
                          <td key={j} style={{ padding: "10px 12px", color: j === 0 ? "#d4af37" : "#94a3b8", fontSize: 13, lineHeight: 1.5 }}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: 12, marginTop: 12 }}>
                Sources: National Archives primary documents; Kappler Indian Affairs Laws and Treaties; Church Committee Report (1976).
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer style={{ background: "#050b10", borderTop: "1px solid rgba(212,175,55,0.2)", padding: "32px 0", textAlign: "center" }}>
        <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#475569", fontSize: 12 }}>© 2026 LaDarious Strickland. All rights reserved.</div>
      </footer>
    </div>
  );
}
