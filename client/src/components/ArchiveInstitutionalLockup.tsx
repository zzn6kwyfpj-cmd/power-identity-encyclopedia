// Royal Archive design: shared institutional title wall for major catalogue routes; monumental Cinzel establishes the archive before evidence text begins.

type ArchiveInstitutionalLockupProps = {
  exhibitionLabel: string;
  cataloguePlate: string;
  title: string;
  subtitle: string;
  recordLabel: string;
  recordValue: string;
  recordDescription: string;
};

export default function ArchiveInstitutionalLockup({
  exhibitionLabel,
  cataloguePlate,
  title,
  subtitle,
  recordLabel,
  recordValue,
  recordDescription,
}: ArchiveInstitutionalLockupProps) {
  return (
    <header
      style={{
        border: "1px solid rgba(212,175,55,0.62)",
        background: "radial-gradient(circle at 83% 18%, rgba(212,175,55,0.17), transparent 27%), linear-gradient(135deg, rgba(212,175,55,0.12), rgba(10,17,24,0.42) 44%, rgba(139,26,26,0.12))",
        padding: "clamp(42px, 6vw, 76px)",
        marginBottom: 20,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div aria-hidden="true" style={{ position: "absolute", top: 14, left: 18, right: 18, display: "flex", alignItems: "center", gap: 11, color: "#d4af37", opacity: 0.68 }}>
        <span style={{ flex: 1, borderTop: "1px solid currentColor" }} />
        <span style={{ fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.32em" }}>{exhibitionLabel}</span>
        <span style={{ flex: 1, borderTop: "1px solid currentColor" }} />
      </div>
      <div aria-hidden="true" style={{ position: "absolute", right: "4%", bottom: -28, color: "rgba(212,175,55,0.055)", fontFamily: "Cinzel, serif", fontSize: "clamp(6rem, 14vw, 13rem)", letterSpacing: "-0.07em", lineHeight: 1 }}>ARCHIVE</div>
      <div className="flex flex-col gap-8 md:flex-row md:items-center" style={{ position: "relative" }}>
        <div aria-label="The Archive Encyclopedia institutional seal" style={{ width: 108, height: 108, border: "2px solid #d4af37", borderRadius: "50%", boxShadow: "0 0 0 7px rgba(212,175,55,0.07), inset 0 0 28px rgba(212,175,55,0.13)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#d4af37", flexShrink: 0 }}>
          <span style={{ fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.18em" }}>THE</span>
          <span style={{ fontFamily: "Cinzel, serif", fontSize: 31, lineHeight: 1.05 }}>✦</span>
          <span style={{ fontFamily: "Cinzel, serif", fontSize: 8, letterSpacing: "0.2em" }}>ARCHIVE</span>
        </div>
        <div className="min-w-0 flex-1">
          <div style={{ color: "#d4af37", fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.24em", marginBottom: 9 }}>THE ARCHIVE ENCYCLOPEDIA · PUBLIC EVIDENCE EDITION</div>
          <div style={{ color: "#d4af37", fontFamily: "Cinzel, serif", fontSize: 10, letterSpacing: "0.34em", marginBottom: 14 }}>{cataloguePlate}</div>
          <h1 style={{ fontFamily: "Cinzel, serif", color: "#f0e3bc", fontSize: "clamp(2.9rem, 6vw, 5.35rem)", letterSpacing: "0.01em", lineHeight: 0.98, margin: 0, maxWidth: 850 }}>{title}</h1>
          <div style={{ width: 210, borderTop: "1px solid #d4af37", marginTop: 22, marginBottom: 15 }} />
          <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#c4cedb", fontSize: "clamp(1.22rem, 2vw, 1.42rem)", maxWidth: 780, lineHeight: 1.58, margin: 0 }}>{subtitle}</p>
          <div style={{ color: "#94a3b8", fontFamily: "Cinzel, serif", fontSize: 8, letterSpacing: "0.16em", marginTop: 18 }}>ANONYMOUSLY STEWARDED · SOURCE-CRITICAL · OPEN TO INSPECTION</div>
        </div>
        <aside style={{ borderLeft: "1px solid rgba(212,175,55,0.55)", paddingLeft: 22, minWidth: 210, position: "relative" }}>
          <div style={{ color: "#d4af37", fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.2em" }}>{recordLabel}</div>
          <div style={{ color: "#f0e3bc", fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", marginTop: 8 }}>{recordValue}</div>
          <div style={{ color: "#94a3b8", fontFamily: "Cormorant Garamond, serif", fontSize: "1rem", lineHeight: 1.45, marginTop: 7 }}>{recordDescription}</div>
        </aside>
      </div>
    </header>
  );
}
