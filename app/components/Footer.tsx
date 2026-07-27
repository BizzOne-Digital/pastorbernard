"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#1B4332", color: "white" }}>
      <style>{`
        .footer-link:hover { color: #C9A84C !important; }
        .footer-social:hover { border-color: #C9A84C !important; background: rgba(201,168,76,0.1) !important; }
      `}</style>
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo.png" alt="Pastor Bernard Ajayi Ministries" className="w-10 h-10 rounded-full object-cover" style={{ border: "1px solid rgba(201,168,76,0.35)" }} />
              <div>
                <p className="font-display font-bold" style={{ color: "white", fontSize: "1.05rem" }}>Pastor Bernard Ajayi</p>
                <p style={{ color: "#C9A84C", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.18em" }}>MINISTRIES</p>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.875rem", lineHeight: 1.7 }}>
              Boosting faith through God's Word — reaching Christians across Canada and USA through books, teachings, and faith booster resources.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="https://facebook.com/PastorBernardAjayi" target="_blank" rel="noopener noreferrer"
                className="footer-social w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="https://instagram.com/pastor_bernard_ajayi" target="_blank" rel="noopener noreferrer"
                className="footer-social w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-5" style={{ color: "white", fontSize: "1.1rem" }}>Quick Links</h4>
            <ul className="space-y-3">
              {[{ href: "/", l: "Home" }, { href: "/books", l: "Books & Resources" }, { href: "/pricing", l: "Pricing" }, { href: "/about", l: "About Pastor Bernard" }, { href: "/contact", l: "Contact Us" }].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="footer-link flex items-center gap-2 transition-colors duration-300" style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.875rem", textDecoration: "none" }}>
                    <svg viewBox="0 0 16 16" fill="none" stroke="#C9A84C" strokeWidth="2" className="w-3 h-3 flex-shrink-0">
                      <path strokeLinecap="round" d="M5 3l6 5-6 5"/>
                    </svg>
                    {item.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-5" style={{ color: "white", fontSize: "1.1rem" }}>Contact</h4>
            <ul className="space-y-4">
              {[
                { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", val: "bernardajayiministries@gmail.com" },
                { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", val: "+1 (514) 549-9983" },
                { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", val: "Ottawa, Ontario, Canada" },
              ].map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" className="w-5 h-5 flex-shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d={c.icon}/>
                  </svg>
                  <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.875rem" }}>{c.val}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem" }}>© {new Date().getFullYear()} Bernard Ajayi Ministries. All rights reserved.</p>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem" }}>Spreading the Word across Canada & USA</p>
        </div>
      </div>
    </footer>
  );
}
