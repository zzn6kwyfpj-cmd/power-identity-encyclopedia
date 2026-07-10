import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AudioPlayer } from "@/components/AudioPlayer";

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "#0a1118", minHeight: "100vh" }}>
      <Navigation />
      <section style={{ paddingTop: 100, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 800 }}>

          {/* Page Header */}
          <div className="text-center" style={{ marginBottom: 56 }}>
            <div style={{ color: "#d4af37", fontSize: 11, letterSpacing: "0.4em", fontFamily: "Cinzel, serif", marginBottom: 12 }}>✦ ABOUT THIS WORK ✦</div>
            <h1 style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: 16 }}>About The Archive Encyclopedia</h1>
            <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: "1.1rem", maxWidth: 560, margin: "0 auto" }}>
              American Records of Contested History, Identity, and Verified Evidence
            </p>
          </div>

          {/* Synopsis */}
          <div style={{ background: "linear-gradient(135deg, #0f1923 0%, #111d2b 100%)", border: "1px solid rgba(212,175,55,0.3)", padding: "40px 48px", marginBottom: 40 }}>
            <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 11, letterSpacing: "0.4em", marginBottom: 20, textAlign: "center" }}>✦ SYNOPSIS ✦</div>
            <h2 style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", marginBottom: 28, textAlign: "center", lineHeight: 1.5 }}>
              Power, Identity, and Contested Origins:<br />
              <span style={{ color: "#e2e8f0", fontSize: "0.85em", fontStyle: "normal" }}>A History of America's Suppressed Truths</span>
            </h2>
            <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#e2e8f0", fontSize: "1.1rem", lineHeight: 2, maxWidth: 680, margin: "0 auto" }}>
              <p style={{ marginBottom: 20 }}>
                The Archive Encyclopedia is a comprehensive, evidence-based educational resource documenting the unbroken chain of power, dispossession, and resistance that connects the Papal Bulls of 1452 to the present day. It covers 54 chapters across 572 years of American history — from the legal fictions of European colonialism, through the forced removal of Indigenous nations, the architecture of chattel slavery, the systematic erasure of Black and Native identity, and the ongoing struggle for sovereignty, recognition, and economic justice.
              </p>
              <p style={{ marginBottom: 20 }}>
                The purpose of this work is to document what happened, to whom, by whose authority, and with what consequences — using primary sources, court records, census data, peer-reviewed scholarship, and the documented words of the people who lived through it. This encyclopedia does not tell you what to think. It presents the evidence and allows the record to speak for itself.
              </p>
              <p style={{ marginBottom: 20 }}>
                The events documented here are not matters of opinion; they are matters of record. The connections between them are not conspiracy; they are chronology. The racial wealth gap, the mass incarceration crisis, the ongoing dispossession of Indigenous land — these are the documented mathematical results of specific legal instruments, specific enforcement decisions, and specific economic policies that can be traced, named, and cited.
              </p>
              <p>
                This encyclopedia was built for the student who cannot find their family in the official record. For the researcher who suspects the story they were taught is incomplete. For the community organizer who needs the documented evidence to make the argument. For anyone who wants to understand how the America we live in today was built, and by whom.
              </p>
            </div>
            <div style={{ display: "flex", gap: 32, justifyContent: "center", marginTop: 36, flexWrap: "wrap" }}>
              {[
                { number: "54", label: "Chapters" },
                { number: "572", label: "Years Documented" },
                { number: "90+", label: "Primary Sources" },
                { number: "45", label: "Figures of Resistance" },
              ].map(({ number, label }) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700 }}>{number}</div>
                  <div style={{ fontFamily: "Cinzel, serif", color: "#64748b", fontSize: 9, letterSpacing: "0.2em", marginTop: 4 }}>{label.toUpperCase()}</div>
                </div>
              ))}
            </div>
          </div>

          {/* How to Use This Encyclopedia */}
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: "1.4rem", marginBottom: 20, letterSpacing: "0.05em" }}>How to Use This Encyclopedia</h2>
            <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#94a3b8", fontSize: "1.05rem", lineHeight: 1.9 }}>
              <p style={{ marginBottom: 16 }}>
                Each chapter is self-contained and can be read independently. The chapters are organized chronologically across five historical eras, from 1452 to 2024. Use the <strong style={{ color: "#e2e8f0" }}>Timeline</strong> to navigate by date, the <strong style={{ color: "#e2e8f0" }}>Search</strong> to find specific events, people, or legislation, and the <strong style={{ color: "#e2e8f0" }}>Figures</strong> gallery to explore the individuals documented throughout.
              </p>
              <p style={{ marginBottom: 16 }}>
                The <strong style={{ color: "#e2e8f0" }}>Georgia</strong> page provides a deep dive into the state that serves as the central geographic lens of this encyclopedia — connecting the Etowah Mounds, the 1732 Georgia Charter, the Indian Removal Act, and the modern city of Atlanta into a single documented narrative. The <strong style={{ color: "#e2e8f0" }}>Genealogy</strong> page provides step-by-step guidance for readers who want to research their own family history using the Freedmen's Bureau records, the Dawes Rolls, and other primary source archives.
              </p>
              <p>
                Every claim in this encyclopedia is labeled by evidence tier. Look for the colored badge on each chapter and each chart to understand the evidentiary basis for what you are reading.
              </p>
            </div>
          </div>

          {/* Evidence Tier System */}
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: "1.4rem", marginBottom: 20, letterSpacing: "0.05em" }}>Evidence Tier System</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { tier: 1, color: "#4ade80", label: "Tier 1 — Primary Source", desc: "National Archives documents, Supreme Court rulings, peer-reviewed archaeological and genetic studies, federal census records, congressional testimony, and other verifiable primary sources. These are the foundation of every argument in this encyclopedia." },
                { tier: 2, color: "#d4af37", label: "Tier 2 — Scholarly Analysis", desc: "Peer-reviewed academic works, Pulitzer Prize-winning journalism, and rigorous historical synthesis that draws on primary sources. These sources interpret and contextualize the primary record." },
                { tier: 3, color: "#f87171", label: "Tier 3 — Community Historical Tradition", desc: "Alternative reclamation narratives and community oral traditions. Included for their cultural and psychological significance and clearly labeled to distinguish them from primary source evidence. The distinction matters. Truth requires precision." },
              ].map(({ tier, color, label, desc }) => (
                <div key={tier} style={{ background: "#0f1923", padding: "20px 24px", borderLeft: `4px solid ${color}` }}>
                  <div style={{ fontFamily: "Cinzel, serif", color, fontSize: 10, letterSpacing: "0.15em", marginBottom: 8 }}>{label}</div>
                  <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#94a3b8", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Enlightened Perspective */}
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: "1.4rem", marginBottom: 20, letterSpacing: "0.05em" }}>Afterword: The Systemic Question</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                {
                  label: "The Central Finding",
                  text: "The evidence assembled in this encyclopedia demonstrates that the racial wealth gap, the mass incarceration crisis, and the ongoing dispossession of Indigenous land are not the products of cultural failure or individual circumstance. They are the documented mathematical results of specific legal instruments — the 13th Amendment's 'except as punishment for crime' clause, the HOLC redlining maps, the 1930 Census enumerator instructions, the Dawes Act allotment system — that can be traced, named, and cited."
                },
                {
                  label: "The Unanswered Question",
                  text: "The evidence assembled in this encyclopedia raises a question that each reader must answer for themselves: whether the consistency, precision, and durability of this system across five centuries represents the accumulated effect of individual self-interest, or something more deliberately organized. The primary sources do not answer that question. They simply make it impossible to avoid asking."
                },
                {
                  label: "The Scholarly Disclaimer",
                  text: "This encyclopedia is an educational synthesis, not a peer-reviewed academic paper. It is grounded in peer-reviewed evidence and primary source documentation, but it represents the editorial judgment of its author in selecting, organizing, and contextualizing that evidence. Readers are encouraged to follow the citations, access the primary sources directly, and form their own conclusions."
                },
              ].map(({ label, text }) => (
                <div key={label} style={{ background: "#0f1923", borderLeft: "4px solid #8b1a1a", padding: "20px 24px" }}>
                  <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 10, letterSpacing: "0.15em", marginBottom: 10 }}>{label}</div>
                  <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#e2e8f0", fontSize: "1rem", lineHeight: 1.8, margin: 0 }}>{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Audio Section */}
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: "1.4rem", marginBottom: 8, letterSpacing: "0.05em" }}>Audio Introduction</h2>
            <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#475569", fontSize: "1rem", lineHeight: 1.7, marginBottom: 20 }}>
              A spoken introduction and thematic background track will be available here.
            </p>
            <AudioPlayer
              title="Spoken Introduction"
              subtitle="An introduction to The Archive Encyclopedia"
              type="spoken"
              placeholder={true}
            />
            <AudioPlayer
              title="Thematic Background Track"
              subtitle="Music to accompany your reading"
              type="music"
              placeholder={true}
            />
          </div>

          {/* Copyright */}
          <div style={{ background: "#0f1923", border: "1px solid rgba(212,175,55,0.15)", padding: "24px", textAlign: "center" }}>
            <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 11, letterSpacing: "0.2em", marginBottom: 12 }}>COPYRIGHT & FAIR USE</div>
            <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: "0.95rem", lineHeight: 1.7 }}>
              © 2026 LaDarious Strickland. All rights reserved. This work is protected under copyright law (U.S. Copyright Office Registration, July 2026). Scholarly sources are cited under the Fair Use doctrine (17 U.S.C. § 107) for educational and research purposes. All primary source documents cited are in the public domain.
            </p>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
}
