import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "#0a1118", minHeight: "100vh" }}>
      <Navigation />
      <section style={{ paddingTop: 100, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="text-center" style={{ marginBottom: 60 }}>
            <div style={{ color: "#d4af37", fontSize: 11, letterSpacing: "0.4em", fontFamily: "Cinzel, serif", marginBottom: 12 }}>✦ ABOUT THIS WORK ✦</div>
            <h1 style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: 16 }}>About This Encyclopedia</h1>
          </div>

          {/* Primary Dedication */}
          <div style={{ background: "#0f1923", border: "1px solid rgba(212,175,55,0.2)", padding: "32px 40px", marginBottom: 24, textAlign: "center" }}>
            <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 11, letterSpacing: "0.3em", marginBottom: 16 }}>DEDICATION</div>
            <p style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic", color: "#e2e8f0", fontSize: "1.2rem", lineHeight: 1.8, marginBottom: 16 }}>
              "For Luka Strickland — my grandmother, a Native American. Your blood, your land, and your truth are on every page of this manuscript. This is for you, and for every generation that comes after."
            </p>
            <p style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 12, letterSpacing: "0.1em" }}>— LaDarious Strickland, July 2026</p>
          </div>

          {/* Second Dedication — To Those Who Came Before */}
          <div style={{ background: "#0f1923", border: "1px solid rgba(139,26,26,0.4)", borderLeft: "4px solid #8b1a1a", padding: "32px 40px", marginBottom: 40 }}>
            <div style={{ fontFamily: "Cinzel, serif", color: "#f87171", fontSize: 11, letterSpacing: "0.3em", marginBottom: 20, textAlign: "center" }}>AND TO THOSE WHO CAME BEFORE US</div>
            <p style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic", color: "#94a3b8", fontSize: "1rem", lineHeight: 2, marginBottom: 0 }}>
              And to those who came before me attempting to tell this story:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
              {[
                { name: "Ida B. Wells", desc: "who turned the light of truth on terror." },
                { name: "Angela Y. Walton-Raji", desc: "who preserved the tools to find ourselves." },
                { name: "Dr. Claud Anderson", desc: "who built the blueprint for what was taken." },
                { name: "Verdiacee Washitaw-Turner Goston El-Bey", desc: "who asserted sovereignty when they said there was none left." },
                { name: "Redbird Smith", desc: "who refused to let the spirit die." },
              ].map(({ name, desc }) => (
                <p key={name} style={{ fontFamily: "Cormorant Garamond, serif", color: "#94a3b8", fontSize: "1rem", lineHeight: 1.8, margin: 0 }}>
                  To <strong style={{ color: "#e2e8f0" }}>{name}</strong>, {desc}
                </p>
              ))}
              <p style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic", color: "#64748b", fontSize: "0.95rem", lineHeight: 1.8, marginTop: 8 }}>
                And to every unnamed ancestor who carried this history in their body when no document would carry it for them.
              </p>
            </div>
          </div>

          {/* About the Work */}
          <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#e2e8f0", fontSize: "1.1rem", lineHeight: 1.9, marginBottom: 40 }}>
            <p style={{ marginBottom: 20 }}>
              This encyclopedia was created for a very specific reason: the true history of America is rarely told in full, and the history of my own bloodline has been systematically obscured. I wrote this for my grandmother, Luka Strickland, a Native American whose life and lineage represent the suppressed truths that this document brings to light.
            </p>
            <p style={{ marginBottom: 20 }}>
              This manuscript does not tell you what to think. It presents documented history — primary sources, court rulings, census records, and peer-reviewed scholarship — and allows the evidence to speak for itself. The events documented here are not matters of opinion; they are matters of record. The connections between them are not conspiracy; they are chronology.
            </p>
            <p>
              I offer this as an educational resource for anyone who wants to understand how the America we live in today was built, and by whom. The rest — what you do with this knowledge — belongs to you.
            </p>
          </div>

          {/* Evidence Tiers */}
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: "1.5rem", marginBottom: 24 }}>Evidence Tier System</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { tier: 1, color: "#4ade80", label: "Tier 1 — Primary Source", desc: "National Archives documents, court rulings, peer-reviewed archaeological and genetic studies, census records, and other verifiable primary sources." },
                { tier: 2, color: "#d4af37", label: "Tier 2 — Scholarly Analysis", desc: "Peer-reviewed academic works, Pulitzer Prize-winning journalism, and rigorous historical synthesis that draws on primary sources." },
                { tier: 3, color: "#f87171", label: "Tier 3 — Community Historical Tradition", desc: "Alternative reclamation narratives and community oral traditions. Included for their cultural and psychological significance, clearly labeled to distinguish them from primary source evidence." },
              ].map(({ tier, color, label, desc }) => (
                <div key={tier} style={{ background: "#0f1923", padding: "20px 24px", borderLeft: `4px solid ${color}` }}>
                  <div style={{ fontFamily: "Cinzel, serif", color, fontSize: 11, letterSpacing: "0.15em", marginBottom: 8 }}>{label}</div>
                  <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#94a3b8", fontSize: "1rem", lineHeight: 1.7 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Enlightened Perspective */}
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: "1.5rem", marginBottom: 24 }}>Afterword: The Enlightened Perspective</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                {
                  label: "The Single Most Important Truth",
                  text: "The system of oppression documented here was not a failure of American ideals — it was the precise, mathematical execution of its economic design. The poverty of Black and Indigenous communities is not a symptom of their inadequacy; it is the required fuel for the engine of American capitalism. The system is not broken; it is operating exactly as engineered."
                },
                {
                  label: "The Single Most Important Action",
                  text: "The most critical action a reader can take is to reject the psychological conditioning of the 'ward of the state' mentality. Action begins with internal decolonization — recognizing that the labels, the statistics, and the entertainment industry are all mechanisms designed to suppress sovereign consciousness. Reclaiming one's genealogy, practicing group economics, and building autonomous institutions are not just political acts; they are spiritual imperatives."
                },
                {
                  label: "The Unasked Question",
                  text: "The question that no academic institution has yet been willing to formally ask is this: If the legal and economic architecture of the United States was built entirely upon the non-consensual extraction of land and labor, at what point does the accumulated debt exceed the total value of the nation itself? And if that point has already been passed, what is the mathematical formula for a truly just society?"
                },
                {
                  label: "The Systemic Question",
                  text: "The evidence assembled in this encyclopedia raises a question that each reader must answer for themselves: whether the consistency, precision, and durability of this system across five centuries represents the accumulated effect of individual self-interest, or something more deliberately organized. The primary sources do not answer that question. They simply make it impossible to avoid asking."
                },
              ].map(({ label, text }) => (
                <div key={label} style={{ background: "#0f1923", borderLeft: "4px solid #8b1a1a", padding: "20px 24px" }}>
                  <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 11, letterSpacing: "0.15em", marginBottom: 10 }}>{label}</div>
                  <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#e2e8f0", fontSize: "1.05rem", lineHeight: 1.8, margin: 0 }}>{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div style={{ background: "#0f1923", border: "1px solid rgba(212,175,55,0.15)", padding: "24px", textAlign: "center" }}>
            <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 11, letterSpacing: "0.2em", marginBottom: 12 }}>COPYRIGHT & FAIR USE</div>
            <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: "0.95rem", lineHeight: 1.7 }}>
              © 2026 LaDarious Strickland. All rights reserved. This work is protected under copyright law. Scholarly sources are cited under the Fair Use doctrine (17 U.S.C. § 107) for educational and research purposes. All primary source documents are in the public domain.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
