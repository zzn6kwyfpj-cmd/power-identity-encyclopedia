import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, BookOpen, Users, Clock, BookMarked, Info, Search } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home", icon: BookOpen },
    { href: "/search", label: "Search", icon: Search },
    { href: "/timeline", label: "Timeline", icon: Clock },
    { href: "/figures", label: "Figures", icon: Users },
    { href: "/resources", label: "Resources", icon: BookMarked },
    { href: "/bibliography", label: "Sources", icon: BookMarked },
    { href: "/about", label: "About", icon: Info },
  ];

  return (
    <nav style={{ backgroundColor: "#050b10", borderBottom: "1px solid rgba(212,175,55,0.3)" }}
      className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <div style={{ 
                width: 36, height: 36, 
                background: "#0a1118",
                border: "2px solid #d4af37",
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
                boxShadow: "0 0 12px rgba(212,175,55,0.3), inset 0 0 8px rgba(212,175,55,0.1)"
              }}>
                <span style={{ color: "#d4af37", fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: 14, letterSpacing: "0.05em" }}>✦</span>
              </div>
              <div className="hidden sm:block">
                <div style={{ lineHeight: 1 }}>
                  <div style={{ fontFamily: "Cinzel, serif", color: "#94a3b8", fontSize: 9, letterSpacing: "0.4em", lineHeight: 1 }}>THE</div>
                  <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 15, letterSpacing: "0.2em", lineHeight: 1.1 }}>ARCHIVE</div>
                  <div style={{ fontFamily: "Cinzel, serif", color: "#8b1a1a", fontSize: 7, letterSpacing: "0.25em", lineHeight: 1 }}>ENCYCLOPEDIA</div>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href}>
                <span style={{
                  fontFamily: "Cinzel, serif",
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  padding: "6px 14px",
                  color: location === href ? "#d4af37" : "#94a3b8",
                  borderBottom: location === href ? "2px solid #d4af37" : "2px solid transparent",
                  transition: "all 0.2s",
                  cursor: "pointer",
                  display: "inline-block",
                }}>
                  {label}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            style={{ color: "#d4af37" }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{ backgroundColor: "#050b10", borderTop: "1px solid rgba(212,175,55,0.2)" }}
          className="md:hidden">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href}>
              <div
                onClick={() => setIsOpen(false)}
                style={{
                  padding: "12px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  color: location === href ? "#d4af37" : "#94a3b8",
                  fontFamily: "Cinzel, serif",
                  fontSize: 12,
                  letterSpacing: "0.1em",
                  borderLeft: location === href ? "3px solid #d4af37" : "3px solid transparent",
                  cursor: "pointer",
                }}
              >
                <Icon size={16} />
                {label}
              </div>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
