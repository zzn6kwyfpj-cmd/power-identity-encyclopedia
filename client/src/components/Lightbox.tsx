import { useEffect, useState } from "react";
import { X, ZoomIn } from "lucide-react";

interface LightboxProps {
  src: string;
  alt: string;
  caption?: string;
}

export function LightboxImage({ src, alt, caption }: LightboxProps) {
  const [open, setOpen] = useState(false);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    // Prevent body scroll when open
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Clickable image wrapper */}
      <div
        onClick={() => setOpen(true)}
        style={{ position: "relative", cursor: "zoom-in", display: "block" }}
        title="Click to expand"
      >
        {/* Zoom hint overlay */}
        <div style={{
          position: "absolute",
          bottom: 10,
          right: 10,
          background: "rgba(10,17,24,0.75)",
          border: "1px solid rgba(212,175,55,0.4)",
          color: "#d4af37",
          padding: "4px 10px",
          display: "flex",
          alignItems: "center",
          gap: 5,
          fontFamily: "Cinzel, serif",
          fontSize: 9,
          letterSpacing: "0.1em",
          zIndex: 1,
          pointerEvents: "none",
        }}>
          <ZoomIn size={10} />
          EXPAND
        </div>
        <img
          src={src}
          alt={alt}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>

      {/* Lightbox overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(5,11,16,0.97)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            cursor: "zoom-out",
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              background: "rgba(212,175,55,0.1)",
              border: "1px solid rgba(212,175,55,0.3)",
              color: "#d4af37",
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10000,
            }}
          >
            <X size={18} />
          </button>

          {/* Full-size image */}
          <img
            src={src}
            alt={alt}
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: "95vw",
              maxHeight: "85vh",
              objectFit: "contain",
              border: "1px solid rgba(212,175,55,0.2)",
              boxShadow: "0 0 80px rgba(212,175,55,0.1)",
              cursor: "default",
            }}
          />

          {/* Caption */}
          {caption && (
            <div style={{
              marginTop: 16,
              fontFamily: "Cormorant Garamond, serif",
              color: "#64748b",
              fontSize: "0.95rem",
              fontStyle: "italic",
              textAlign: "center",
              maxWidth: 700,
            }}>
              {caption}
            </div>
          )}

          {/* Instruction */}
          <div style={{
            position: "absolute",
            bottom: 20,
            fontFamily: "Cinzel, serif",
            color: "#334155",
            fontSize: 9,
            letterSpacing: "0.2em",
          }}>
            PRESS ESC OR CLICK ANYWHERE TO CLOSE
          </div>
        </div>
      )}
    </>
  );
}
