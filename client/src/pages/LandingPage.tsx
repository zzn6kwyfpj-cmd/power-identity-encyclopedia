import { useState, useEffect } from "react";
import { useLocation } from "wouter";

export default function LandingPage() {
  const [, navigate] = useLocation();
  const [visible, setVisible] = useState(false);
  const [entering, setEntering] = useState(false);

  useEffect(() => {
    // Fade in after mount
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  function handleEnter() {
    setEntering(true);
    setTimeout(() => navigate("/home"), 800);
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: `linear-gradient(to bottom, rgba(5,11,16,0.85) 0%, rgba(5,11,16,0.92) 50%, rgba(5,11,16,0.98) 100%), url('/manus-storage/cover_image_b45504ee.png') center/cover no-repeat`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        opacity: entering ? 0 : visible ? 1 : 0,
        transition: entering ? "opacity 0.8s ease-in" : "opacity 1.2s ease-out",
        padding: "40px 24px",
        textAlign: "center",
        overflowY: "auto",
      }}
    >
      {/* Seal / Ornament */}
      <div style={{
        width: 64,
        height: 64,
        border: "2px solid rgba(212,175,55,0.5)",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 32,
        boxShadow: "0 0 40px rgba(212,175,55,0.15)",
      }}>
        <span style={{ color: "#d4af37", fontFamily: "Cinzel, serif", fontSize: 22 }}>✦</span>
      </div>

      {/* Title Stack */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ fontFamily: "Cinzel, serif", color: "#94a3b8", fontSize: "clamp(10px, 1.5vw, 13px)", letterSpacing: "0.5em", marginBottom: 8 }}>THE</div>
        <div style={{
          fontFamily: "Cinzel, serif",
          color: "#d4af37",
          fontSize: "clamp(3rem, 10vw, 7rem)",
          fontWeight: 900,
          letterSpacing: "0.08em",
          lineHeight: 0.95,
          marginBottom: 8,
          textShadow: "0 0 80px rgba(212,175,55,0.2)",
        }}>
          ARCHIVE
        </div>
        <div style={{ fontFamily: "Cinzel, serif", color: "#8b1a1a", fontSize: "clamp(9px, 1.2vw, 12px)", letterSpacing: "0.5em" }}>
          E N C Y C L O P E D I A
        </div>
      </div>

      {/* Divider */}
      <div style={{ width: 60, height: 1, background: "rgba(212,175,55,0.4)", marginBottom: 32 }} />

      {/* Brief Description */}
      <div style={{ maxWidth: 560, marginBottom: 48 }}>
        <p style={{
          fontFamily: "Cormorant Garamond, serif",
          color: "#94a3b8",
          fontSize: "clamp(1rem, 2vw, 1.2rem)",
          lineHeight: 1.9,
          marginBottom: 20,
          fontStyle: "italic",
        }}>
          American Records of Contested History, Identity, and Verified Evidence
        </p>
        <p style={{
          fontFamily: "Cormorant Garamond, serif",
          color: "#64748b",
          fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
          lineHeight: 1.9,
        }}>
          A comprehensive, evidence-based educational resource documenting the history of Black Native Americans and the systematic erasure of their identity, land, and sovereignty. From the pre-Columbian civilizations of 850 CE to the Cherokee Freedmen citizenship case of 2017. 60 chapters. 125+ primary source citations. An unbroken chain of causation from 850 CE to 2024.
        </p>
      </div>

      {/* Enter Button */}
      <button
        onClick={handleEnter}
        style={{
          background: "transparent",
          border: "1px solid rgba(212,175,55,0.6)",
          color: "#d4af37",
          fontFamily: "Cinzel, serif",
          fontSize: "clamp(10px, 1.5vw, 13px)",
          letterSpacing: "0.4em",
          padding: "16px 48px",
          cursor: "pointer",
          transition: "all 0.3s ease",
          marginBottom: 24,
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.background = "rgba(212,175,55,0.1)";
          (e.currentTarget as HTMLButtonElement).style.borderColor = "#d4af37";
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 30px rgba(212,175,55,0.15)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.background = "transparent";
          (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(212,175,55,0.6)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
        }}
      >
        ENTER THE ARCHIVE
      </button>

      {/* Metadata line */}
      <div style={{
        fontFamily: "Cinzel, serif",
        color: "#334155",
        fontSize: 9,
        letterSpacing: "0.25em",
      }}>
        © 2026 LADARIOUS STRICKLAND &nbsp;·&nbsp; THEARCHIVEENCYCLOPEDIA.ORG
      </div>
    </div>
  );
}
