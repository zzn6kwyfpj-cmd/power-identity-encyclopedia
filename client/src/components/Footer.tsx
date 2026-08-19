// Editorial scope: shared footer reinforces anonymous stewardship and the archive’s Black Native, continental, and diaspora-facing research frame.
export default function Footer() {
  return (
    <footer style={{ background: "#050b10", borderTop: "1px solid rgba(212,175,55,0.2)", padding: "40px 0", textAlign: "center" }}>
      <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 16, letterSpacing: "0.3em", marginBottom: 4 }}>
        ARCHIVE
      </div>
      <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: 11, letterSpacing: "0.1em", marginBottom: 10 }}>
        A Source-Critical Encyclopedia of Black Native History, Law, and Memory
      </div>
      <div style={{ width: 40, height: 1, background: "rgba(212,175,55,0.3)", margin: "0 auto 10px" }} />
      <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: 11, lineHeight: 1.6, maxWidth: 620, margin: "0 auto" }}>
        Collaboratively stewarded · No individual author attribution is claimed. Original editorial work is dedicated to the public domain to the fullest extent permitted by law. Cited materials may carry separate source rights.
      </div>
    </footer>
  );
}
