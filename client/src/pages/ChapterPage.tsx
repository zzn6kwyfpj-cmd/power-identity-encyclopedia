import { useState } from "react";
import { Link, useParams } from "wouter";
import { ChevronLeft, ChevronRight, Share2, Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LightboxImage } from "@/components/Lightbox";
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

type SourceCard = {
  year: string;
  title: string;
  locator: string;
  establishes: string;
  limitation: string;
  source: string;
};

export default function ChapterPage() {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };
  const chapter = CHAPTERS.find(c => c.slug === slug);
  const currentIndex = CHAPTERS.findIndex(c => c.slug === slug);
  const prevChapter = currentIndex > 0 ? CHAPTERS[currentIndex - 1] : null;
  const nextChapter = currentIndex < CHAPTERS.length - 1 ? CHAPTERS[currentIndex + 1] : null;

  if (!chapter) {
    return (
      <div style={{ backgroundColor: "#0a1118", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Navigation />
        <div className="text-center" style={{ paddingTop: 80 }}>
          <h1 style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: "2rem" }}>Chapter Not Found</h1>
          <Link href="/"><button style={{ marginTop: 24, padding: "12px 24px", background: "#d4af37", color: "#0a1118", fontFamily: "Cinzel, serif", fontSize: 12, border: "none", cursor: "pointer" }}>Return Home</button></Link>
        </div>
      </div>
    );
  }

  const tierColors: Record<number, string> = { 1: "#4ade80", 2: "#d4af37", 3: "#f87171" };
  const tierLabels: Record<number, string> = {
    1: "TIER 1 — Primary Source",
    2: "TIER 2 — Scholarly Analysis",
    3: "TIER 3 — Community Historical Tradition"
  };
  const activeContent = CHAPTER_CONTENT[chapter.slug] || EXTRA_CHAPTER_CONTENT[chapter.slug] || MODERN_CHAPTER_CONTENT[chapter.slug] || VIETNAM_CHAPTER_CONTENT[chapter.slug] || GAP_FILL_CONTENT[chapter.slug] || DEPTH_CONTENT[chapter.slug] || FULL_CHAPTER_CONTENT[chapter.slug] || FINAL_3_CONTENT[chapter.slug] || TREATIES_CONTENT[chapter.slug] || BLACK_NATIVE_CONTENT[chapter.slug] || PAPAL_BULLS_CONTENT[chapter.slug] || GAPS_CONTENT[chapter.slug] || ARCHIVAL_INTAKE_CONTENT[chapter.slug] || COLONIAL_SOURCEBOOK_CONTENT[chapter.slug];
  const sourceCards: SourceCard[] = activeContent && "sourceCards" in activeContent && Array.isArray(activeContent.sourceCards)
    ? activeContent.sourceCards as SourceCard[]
    : [];

  return (
    <div style={{ backgroundColor: "#0a1118", minHeight: "100vh" }}>
      <Navigation />

      {/* Chapter Hero */}
      <section style={{
        paddingTop: 80,
        background: chapter.image
          ? `linear-gradient(to bottom, rgba(5,11,16,0.6) 0%, rgba(10,17,24,0.85) 50%, #0a1118 100%), url('${chapter.image}') center/cover no-repeat`
          : `linear-gradient(135deg, #050b10 0%, #0f1923 50%, #050b10 100%)`,
        minHeight: 320,
        display: "flex",
        alignItems: "flex-end",
        paddingBottom: 48,
        position: "relative",
      }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <Link href="/">
              <span style={{ fontFamily: "Cinzel, serif", color: "#64748b", fontSize: 11, letterSpacing: "0.1em", cursor: "pointer" }}>HOME</span>
            </Link>
            <ChevronRight size={12} style={{ color: "#64748b" }} />
            <span style={{ fontFamily: "Cinzel, serif", color: chapter.eraColor, fontSize: 11, letterSpacing: "0.1em" }}>
              CH. {chapter.id.toString().padStart(2, "0")} · {chapter.era}
            </span>
          </div>
          <div style={{ display: "inline-block", padding: "4px 12px", background: `${tierColors[chapter.tier]}20`, border: `1px solid ${tierColors[chapter.tier]}40`, color: tierColors[chapter.tier], fontFamily: "Cinzel, serif", fontSize: 10, letterSpacing: "0.1em", marginBottom: 16 }}>
            {tierLabels[chapter.tier]}
          </div>
          <h1 style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: 12 }}>
            {chapter.title}
          </h1>
          <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#94a3b8", fontSize: "1.2rem", fontStyle: "italic", marginBottom: 20 }}>
            {chapter.subtitle}
          </p>
          <button
            onClick={handleShare}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: copied ? "rgba(74,222,128,0.1)" : "rgba(212,175,55,0.08)",
              border: `1px solid ${copied ? "rgba(74,222,128,0.4)" : "rgba(212,175,55,0.3)"}`,
              color: copied ? "#4ade80" : "#d4af37",
              fontFamily: "Cinzel, serif",
              fontSize: 10,
              letterSpacing: "0.15em",
              padding: "10px 20px",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {copied ? <Check size={12} /> : <Share2 size={12} />}
            {copied ? "LINK COPIED TO CLIPBOARD" : "SHARE THIS CHAPTER"}
          </button>
        </div>
      </section>

      {/* Chapter Content */}
      <section style={{ padding: "60px 0 80px" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 280px", gap: 48, gridTemplateAreas: '"main sidebar"' }} className="chapter-layout">
            {/* Main Content */}
            <div>
              {/* Key Fact Box */}
              <div style={{
                background: "rgba(212,175,55,0.05)",
                border: "1px solid rgba(212,175,55,0.2)",
                borderLeft: "4px solid #d4af37",
                padding: "20px 24px",
                marginBottom: 40,
              }}>
                <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 10, letterSpacing: "0.2em", marginBottom: 8 }}>✦ KEY FINDING</div>
                <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#e2e8f0", fontSize: "1.1rem", lineHeight: 1.8, fontStyle: "italic" }}>
                  {chapter.keyFact}
                </p>
              </div>

              {/* Featured Illustration with Lightbox */}
              {chapter.image && (
                <div style={{ marginBottom: 40 }}>
                  <div style={{ height: 280, overflow: "hidden", position: "relative" }}>
                    <LightboxImage
                      src={chapter.image}
                      alt={`${chapter.title} — ${chapter.subtitle}`}
                      caption={`${chapter.title}: ${chapter.subtitle}. ${chapter.primarySource}`}
                    />
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, borderTop: "1px solid rgba(212,175,55,0.16)", paddingTop: 8, marginTop: 8 }}>
                    <span style={{ color: "#d4af37", fontFamily: "Cinzel, serif", fontSize: 11, letterSpacing: "0.22em" }}>✦ ARCHIVAL CONTEXT PLATE ✦</span>
                    <span style={{ fontFamily: "Cinzel, serif", color: "#475569", fontSize: 9, letterSpacing: "0.1em", textAlign: "right" }}>CLICK TO EXPAND</span>
                  </div>
                </div>
              )}

              {/* Full Chapter Content */}
              {(() => {
                const content = activeContent;
                if (content && content.fullText.length > 0) {
                  return (
                    <div>
                      {content.fullText.map((paragraph, i) => (
                        <p key={i} className={i === 0 ? "drop-cap" : ""} style={{ 
                          fontFamily: "Cormorant Garamond, serif", 
                          color: "#e2e8f0", 
                          fontSize: "1.15rem", 
                          lineHeight: 1.9, 
                          marginBottom: 24 
                        }}>
                          {paragraph}
                        </p>
                      ))}
                      {content.pullQuote && (
                        <div style={{
                          borderLeft: "4px solid #8b1a1a",
                          padding: "16px 20px",
                          background: "rgba(139,26,26,0.08)",
                          margin: "32px 0",
                        }}>
                          <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#e2e8f0", fontSize: "1.15rem", fontStyle: "italic", lineHeight: 1.8, marginBottom: 8 }}>
                            "{content.pullQuote.text}"
                          </p>
                          <p style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 11, letterSpacing: "0.1em" }}>
                            — {content.pullQuote.attribution}
                          </p>
                        </div>
                      )}
                      {content.didYouKnow && (
                        <div style={{
                          background: "rgba(212,175,55,0.05)",
                          border: "1px solid rgba(212,175,55,0.2)",
                          padding: "16px 20px",
                          margin: "24px 0",
                        }}>
                          <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 10, letterSpacing: "0.2em", marginBottom: 8 }}>✦ DID YOU KNOW?</div>
                          <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#94a3b8", fontSize: "1rem", lineHeight: 1.7 }}>
                            {content.didYouKnow}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <div className="drop-cap" style={{ fontFamily: "Cormorant Garamond, serif", color: "#e2e8f0", fontSize: "1.15rem", lineHeight: 1.9, marginBottom: 32 }}>
                    {chapter.summary}
                  </div>
                );
              })()}

              {/* Primary Source */}
              {chapter.primarySource && (
                <div style={{
                  borderLeft: "4px solid #8b1a1a",
                  padding: "16px 20px",
                  background: "rgba(139,26,26,0.08)",
                  marginBottom: 32,
                }}>
                  <div style={{ fontFamily: "Cinzel, serif", color: "#f87171", fontSize: 10, letterSpacing: "0.2em", marginBottom: 8 }}>PRIMARY SOURCE</div>
                  <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#94a3b8", fontSize: "1rem", fontStyle: "italic" }}>
                    {chapter.primarySource}
                  </p>
                </div>
              )}

              {/* Key Documents Section */}
              {(() => {
                const content = activeContent;
                if (content?.keyDocuments && content.keyDocuments.length > 0) {
                  return (
                    <div style={{ marginTop: 40, marginBottom: 32 }}>
                      <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 11, letterSpacing: "0.2em", marginBottom: 16 }}>✦ KEY DOCUMENTS</div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        {content.keyDocuments.map((doc, i) => (
                          <div key={i} style={{ background: "#0f1923", padding: "12px 16px", borderLeft: "2px solid rgba(212,175,55,0.3)" }}>
                            <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#94a3b8", fontSize: 14, margin: 0 }}>{doc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }
                return null;
              })()}

              {sourceCards.length > 0 && (
                <div style={{ marginTop: 40, marginBottom: 32 }}>
                  <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 11, letterSpacing: "0.2em", marginBottom: 16 }}>✦ EVIDENCE SOURCE CARDS</div>
                  <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#94a3b8", fontSize: "1rem", lineHeight: 1.7, marginBottom: 16 }}>
                    Each card separates what the record establishes from what it cannot establish on its own.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {sourceCards.map((card) => (
                      <div key={`${card.year}-${card.title}`} style={{ background: "#0f1923", borderTop: "1px solid rgba(212,175,55,0.35)", padding: "18px 20px" }}>
                        <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap", marginBottom: 8 }}>
                          <span style={{ color: "#d4af37", fontFamily: "Cinzel, serif", fontSize: 10, letterSpacing: "0.16em" }}>{card.year}</span>
                          <span style={{ color: "#e2e8f0", fontFamily: "Cinzel, serif", fontSize: 12, letterSpacing: "0.07em" }}>{card.title}</span>
                        </div>
                        <p style={{ color: "#64748b", fontFamily: "Cormorant Garamond, serif", fontSize: 14, fontStyle: "italic", margin: "0 0 12px" }}>{card.locator}</p>
                        <p style={{ color: "#cbd5e1", fontFamily: "Cormorant Garamond, serif", fontSize: 15, lineHeight: 1.65, margin: "0 0 10px" }}><strong style={{ color: "#4ade80", fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.1em" }}>ESTABLISHES</strong><br />{card.establishes}</p>
                        <p style={{ color: "#fca5a5", fontFamily: "Cormorant Garamond, serif", fontSize: 15, lineHeight: 1.65, margin: "0 0 10px" }}><strong style={{ color: "#f87171", fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.1em" }}>LIMIT</strong><br />{card.limitation}</p>
                        <p style={{ color: "#64748b", fontFamily: "Cormorant Garamond, serif", fontSize: 13, margin: 0 }}>{card.source}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Cite This Article */}
              <div style={{ background: "rgba(212,175,55,0.03)", border: "1px solid rgba(212,175,55,0.1)", padding: "16px 20px", marginTop: 24, marginBottom: 32 }}>
                <div style={{ fontFamily: "Cinzel, serif", color: "#64748b", fontSize: 10, letterSpacing: "0.2em", marginBottom: 8 }}>CITE THIS CHAPTER</div>
                <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#475569", fontSize: 12, lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>
                  "{chapter.title}." <em>The Archive Encyclopedia: American Records of Contested History, Identity, and Verified Evidence</em>. Collaboratively stewarded reference work, 2026. {window.location.href}
                </p>
              </div>

              {/* Read Full Manuscript CTA */}
              <div style={{
                background: "#0f1923",
                border: "1px solid rgba(212,175,55,0.2)",
                padding: "24px",
                textAlign: "center",
                marginTop: 48,
              }}>
                <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 13, letterSpacing: "0.1em", marginBottom: 8 }}>
                  Read the Complete Manuscript
                </div>
                <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: 14, marginBottom: 16 }}>
                  The full Royal Manuscript contains in-depth analysis, primary source excerpts, and the complete chronological chain.
                </p>
                <a href="/Power_Identity_Royal_Manuscript.html" target="_blank" rel="noopener noreferrer">
                  <button style={{
                    background: "linear-gradient(135deg, #d4af37, #b8960c)",
                    color: "#0a1118",
                    fontFamily: "Cinzel, serif",
                    fontSize: 11,
                    letterSpacing: "0.15em",
                    padding: "12px 28px",
                    border: "none",
                    cursor: "pointer",
                  }}>
                    OPEN FULL ENCYCLOPEDIA
                  </button>
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Chapter Image */}
              {chapter.image && (
                <div style={{ marginBottom: 24 }}>
                  <img
                    src={chapter.image}
                    alt={chapter.title}
                    style={{ width: "100%", border: "2px solid rgba(212,175,55,0.3)", objectFit: "cover", height: 200 }}
                  />
                </div>
              )}

              {/* Chapter Info */}
              <div style={{ background: "#0f1923", border: "1px solid rgba(212,175,55,0.15)", padding: "20px", marginBottom: 20 }}>
                <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 10, letterSpacing: "0.2em", marginBottom: 16 }}>CHAPTER INFO</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <div>
                    <div style={{ fontFamily: "Cinzel, serif", color: "#64748b", fontSize: 9, letterSpacing: "0.15em", marginBottom: 2 }}>ERA</div>
                    <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#e2e8f0", fontSize: 14 }}>{chapter.era}</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: "Cinzel, serif", color: "#64748b", fontSize: 9, letterSpacing: "0.15em", marginBottom: 2 }}>EVIDENCE TIER</div>
                    <div style={{ color: tierColors[chapter.tier], fontFamily: "Cinzel, serif", fontSize: 11 }}>Tier {chapter.tier}</div>
                  </div>
                </div>
              </div>

              {/* All Chapters Mini List */}
              <div style={{ background: "#0f1923", border: "1px solid rgba(212,175,55,0.15)", padding: "20px" }}>
                <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 10, letterSpacing: "0.2em", marginBottom: 16 }}>ALL CHAPTERS</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4, maxHeight: 300, overflowY: "auto" }}>
                  {CHAPTERS.map(ch => (
                    <Link key={ch.id} href={`/chapter/${ch.slug}`}>
                      <div style={{
                        padding: "6px 8px",
                        borderLeft: `2px solid ${ch.slug === slug ? ch.eraColor : "transparent"}`,
                        background: ch.slug === slug ? "rgba(212,175,55,0.05)" : "transparent",
                        cursor: "pointer",
                        transition: "all 0.15s",
                      }}
                        onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(212,175,55,0.05)"; }}
                        onMouseLeave={e => { if (ch.slug !== slug) (e.currentTarget as HTMLDivElement).style.background = "transparent"; }}
                      >
                        <span style={{ fontFamily: "Cinzel, serif", color: ch.slug === slug ? "#d4af37" : "#64748b", fontSize: 10, letterSpacing: "0.05em" }}>
                          {ch.id.toString().padStart(2, "0")}. {ch.title}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Chapter Navigation */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 60, paddingTop: 32, borderTop: "1px solid rgba(212,175,55,0.15)" }}>
            {prevChapter ? (
              <Link href={`/chapter/${prevChapter.slug}`}>
                <div style={{ cursor: "pointer", maxWidth: 280 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#64748b", fontFamily: "Cinzel, serif", fontSize: 10, letterSpacing: "0.1em", marginBottom: 4 }}>
                    <ChevronLeft size={12} />
                    PREVIOUS
                  </div>
                  <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 13 }}>{prevChapter.title}</div>
                </div>
              </Link>
            ) : <div />}

            {nextChapter ? (
              <Link href={`/chapter/${nextChapter.slug}`}>
                <div style={{ cursor: "pointer", textAlign: "right", maxWidth: 280 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 8, color: "#64748b", fontFamily: "Cinzel, serif", fontSize: 10, letterSpacing: "0.1em", marginBottom: 4 }}>
                    NEXT
                    <ChevronRight size={12} />
                  </div>
                  <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 13 }}>{nextChapter.title}</div>
                </div>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
