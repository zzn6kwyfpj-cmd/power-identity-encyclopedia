// Editorial scope: explain the archive’s continental and diaspora-facing research frame, evidence tiers, anonymous stewardship, and regional-case-study method.
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
              A Source-Critical Encyclopedia of Black Native History, Law, and Memory
            </p>
          </div>

          {/* Synopsis */}
          <div style={{ background: "linear-gradient(135deg, #0f1923 0%, #111d2b 100%)", border: "1px solid rgba(212,175,55,0.3)", padding: "40px 48px", marginBottom: 40 }}>
            <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 11, letterSpacing: "0.4em", marginBottom: 20, textAlign: "center" }}>✦ SYNOPSIS ✦</div>
            <h2 style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", marginBottom: 28, textAlign: "center", lineHeight: 1.5 }}>
              Power, Identity, and Contested Records:<br />
              <span style={{ color: "#e2e8f0", fontSize: "0.85em", fontStyle: "normal" }}>A Public Research Archive Across North America and Connected Diasporas</span>
            </h2>
            <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#e2e8f0", fontSize: "1.1rem", lineHeight: 2, maxWidth: 680, margin: "0 auto" }}>
              <p style={{ marginBottom: 20 }}>
                The Archive Encyclopedia is a collaboratively stewarded public educational resource examining Black Native histories across North America and connected diasporic records. Its 67 chapters provide a source-tiered path through Indigenous deep history, colonial law, forced movement, land policy, family research, community traditions, and contemporary questions of sovereignty, recognition, and economic justice.
              </p>
              <p style={{ marginBottom: 20 }}>
                The purpose of this work is to identify what a record documents, whose authority produced it, how it circulated, and where its limits begin. The archive uses primary records, court files, census materials, nation-authored histories, peer-reviewed scholarship, and carefully attributed community accounts. It does not settle any individual’s ancestry, Nation citizenship, or identity from a category alone.
              </p>
              <p style={{ marginBottom: 20 }}>
                Historical materials do not all carry the same evidentiary force. Some document law, classification, land administration, court decisions, and particular events; others preserve scholarly interpretation or community knowledge. The archive maps continuities where citations support them, distinguishes argument from record, and identifies questions that still require person-specific, community-specific, or jurisdiction-specific research.
              </p>
              <p>
                This encyclopedia is for the student who cannot locate a family in the official record; the researcher testing a historical claim; the community member preserving an attributed tradition; and anyone seeking a clearer account of how laws, land, categories, and institutions shaped Black Native life across regions and generations.
              </p>
            </div>
            <div style={{ display: "flex", gap: 32, justifyContent: "center", marginTop: 36, flexWrap: "wrap" }}>
              {[
                { number: "67", label: "Chapters" },
                { number: "850 CE", label: "to 2024" },
                { number: "125+", label: "Primary Sources" },
                { number: "49+", label: "Figures & Research Profiles" },
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
                Each chapter is self-contained and can be read independently. The chapters are organized chronologically across five historical eras, from 850 CE to 2024. Use the <strong style={{ color: "#e2e8f0" }}>Timeline</strong> to navigate by date, the <strong style={{ color: "#e2e8f0" }}>Search</strong> to find specific events, people, or legislation, and the <strong style={{ color: "#e2e8f0" }}>Figures</strong> gallery to explore the individuals documented throughout.
              </p>
              <p style={{ marginBottom: 16 }}>
                The <strong style={{ color: "#e2e8f0" }}>Georgia Case Study</strong> follows one regional sequence linking the Etowah Mounds, the 1732 Georgia Charter, land policy, removal, and Atlanta. It is a bounded case study, not the archive’s central geographic lens or a stand-in for the continent. The <strong style={{ color: "#e2e8f0" }}>Genealogy</strong> guide offers research pathways through Freedmen’s Bureau, Dawes, census, and other primary-record collections.
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
                { tier: 1, color: "#4ade80", label: "Tier 1 — Primary Record", desc: "Archival documents, court rulings, nation-authored records, federal census materials, legislative texts, and other traceable primary sources. Each is published with a stated scope and limitation." },
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
                  text: "The archive documents legal instruments and administrative practices that shaped land, labor, classification, mobility, and access to rights. It treats no record as self-explanatory: readers can inspect each source, its jurisdiction, the mechanism it describes, and the limits of the conclusion that follows."
                },
                {
                  label: "The Continuing Research Question",
                  text: "When official categories, family memory, and community history do not align, what can person-specific and community-specific records establish? The archive does not treat a racial label as proof of Indigenous ancestry, Nation citizenship, or a universal historical identity; it directs readers toward the records needed to test particular claims."
                },
                {
                  label: "The Scholarly Disclaimer",
                  text: "This encyclopedia is an educational synthesis, not a peer-reviewed academic paper. It is grounded in peer-reviewed evidence and primary source documentation, but it also reflects editorial decisions made during its collaborative assembly. Readers are encouraged to follow the citations, access the primary sources directly, and form their own conclusions."
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

          {/* Public-domain dedication and source rights */}
          <div style={{ background: "#0f1923", border: "1px solid rgba(212,175,55,0.15)", padding: "24px", textAlign: "center", marginBottom: 16 }}>
            <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 11, letterSpacing: "0.2em", marginBottom: 12 }}>DEDICATION</div>
            <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>
              In loving memory of Luka Strickland (Native American), Carolyn Strickland, and Pauline Pasley.
            </p>
          </div>
          <div style={{ background: "#0f1923", border: "1px solid rgba(212,175,55,0.15)", padding: "24px", textAlign: "center" }}>
            <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 11, letterSpacing: "0.2em", marginBottom: 12 }}>PUBLIC-DOMAIN DEDICATION & SOURCE USE</div>
            <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: "0.95rem", lineHeight: 1.7 }}>
              This encyclopedia is collaboratively stewarded and makes no individual authorship claim. Its original editorial organization, explanatory text, and research pathways are dedicated to the public domain to the fullest extent permitted by law, so they may be shared, adapted, and reused. Citations are retained so readers can inspect the record. Public-domain sources, fair-use quotations, and materials with separate rights remain governed by the status and conditions of their original sources.
            </p>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
}
