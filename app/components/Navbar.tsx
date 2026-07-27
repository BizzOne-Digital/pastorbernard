"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/books", label: "Books" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const hasDarkHero = ["/", "/books", "/about"].includes(pathname);
  const solid = scrolled || !hasDarkHero;

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "all 0.4s ease",
      background: solid ? "rgba(255,255,255,0.97)" : "transparent",
      backdropFilter: solid ? "blur(12px)" : "none",
      boxShadow: solid ? "0 1px 20px rgba(27,67,50,0.08)" : "none",
      borderBottom: solid ? "1px solid rgba(27,67,50,0.06)" : "none",
    }}>
      <div className="container-wide py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" style={{ textDecoration: "none" }}>
          <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105" style={{ background: "#1B4332" }}>
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
              <path d="M14 20h12M20 14v12" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="20" cy="20" r="3" fill="#C9A84C" opacity="0.5"/>
            </svg>
          </div>
          <div>
            <p className="font-display font-bold leading-tight" style={{ color: solid ? "#1B4332" : "white", fontSize: "1.05rem" }}>Pastor Bernard</p>
            <p style={{ color: "#C9A84C", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.18em" }}>AJAYI MINISTRIES</p>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}
              className={`nav-link text-sm font-medium transition-colors duration-300 ${pathname === link.href ? "active" : ""}`}
              style={{ color: pathname === link.href ? "#C9A84C" : (solid ? "#2D2D2D" : "rgba(255,255,255,0.9)"), textDecoration: "none" }}>
              {link.label}
            </Link>
          ))}
          <Link href="/books"
            className="rounded-full text-sm font-bold px-5 py-2.5 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            style={{ background: "#1B4332", color: "white", textDecoration: "none" }}>
            Shop Books
          </Link>
        </div>

        {/* Hamburger */}
        <button className="md:hidden p-2 rounded-lg transition-colors" style={{ color: solid ? "#2D2D2D" : "white" }} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
            {menuOpen
              ? <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6"/>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div style={{
        maxHeight: menuOpen ? "400px" : "0",
        overflow: "hidden",
        transition: "max-height 0.35s ease",
        background: "white",
        borderTop: menuOpen ? "1px solid #F5F0E8" : "none",
      }}>
        <div className="container-wide py-4 flex flex-col gap-1">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              className="py-3 text-sm font-medium border-b"
              style={{ color: pathname === link.href ? "#1B4332" : "#2D2D2D", borderColor: "rgba(27,67,50,0.07)", textDecoration: "none" }}>
              {link.label}
            </Link>
          ))}
          <Link href="/books" onClick={() => setMenuOpen(false)}
            className="mt-3 py-3 rounded-full text-sm font-bold text-center transition-colors duration-300"
            style={{ background: "#1B4332", color: "white", textDecoration: "none" }}>
            Shop Books
          </Link>
        </div>
      </div>
    </nav>
  );
}
