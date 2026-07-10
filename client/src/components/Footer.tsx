export default function Footer() {
  return (
    <footer style={{ background: "#050b10", borderTop: "1px solid rgba(212,175,55,0.2)", padding: "40px 0", textAlign: "center" }}>
      <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 16, letterSpacing: "0.3em", marginBottom: 4 }}>
        ARCHIVE
      </div>
      <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: 11, letterSpacing: "0.1em", marginBottom: 10 }}>
        American Records of Contested History, Identity, and Verified Evidence
      </div>
      <div style={{ width: 40, height: 1, background: "rgba(212,175,55,0.3)", margin: "0 auto 10px" }} />
      <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#334155", fontSize: 11 }}>
        © 2026 LaDarious Strickland. All rights reserved. Fair Use: 17 U.S.C. § 107
      </div>
    </footer>
  );
}
