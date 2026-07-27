"use client";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [loaded, setLoaded] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", type: "hardcopy" });
  const [sent, setSent] = useState(false);

  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const subject = `Book Order Inquiry — ${form.type === "hardcopy" ? "Hardcopy ($20 CAD)" : form.type === "ebook" ? "Ebook ($3 CAD)" : form.type === "both" ? "Both Formats" : "General Inquiry"}`;
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone || "N/A"}%0AInterested In: ${form.type}%0A%0AMessage:%0A${form.message}`;
    window.location.href = `mailto:bernardajayiministries@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSent(true);
  };

  const inputStyle = {
    width: "100%",
    border: "1.5px solid rgba(27,67,50,0.15)",
    borderRadius: "12px",
    padding: "12px 16px",
    fontSize: "0.875rem",
    outline: "none",
    background: "#FAFAF7",
    color: "#2D2D2D",
    transition: "border-color 0.2s ease",
    fontFamily: "inherit",
  };

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden pt-36 pb-16" style={{ background: "#F5F0E8" }}>
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none" style={{ background: "rgba(201,168,76,0.1)", filter: "blur(60px)" }}/>
        <div className={`container-wide text-center relative z-10 transition-all duration-800 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p style={{ color: "#C9A84C", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.15em" }} className="uppercase mb-4">Get in Touch</p>
          <h1 className="font-display font-bold mb-5" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#1B4332" }}>Contact Us</h1>
          <p style={{ color: "#6B7280", fontSize: "1.1rem", maxWidth: "34rem", margin: "0 auto", lineHeight: 1.7 }}>
            Place an order, ask a question, or simply connect. We're here and happy to help.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="py-16" style={{ background: "#FAFAF7" }}>
        <div className="container-wide grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Info panel */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="rounded-3xl p-8 flex-1" style={{ background: "#1B4332" }}>
              <h3 className="font-display font-bold mb-8 text-white" style={{ fontSize: "1.4rem" }}>Ministry Details</h3>
              <ul className="space-y-6">
                {[
                  { label: "Email", val: "bernardajayiministries@gmail.com", href: "mailto:bernardajayiministries@gmail.com", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                  { label: "Phone", val: "+1 (514) 549-9983", href: "tel:+15145499983", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
                  { label: "Location", val: "Ottawa, Ontario, Canada", href: null, icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" },
                ].map((c, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)" }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d={c.icon}/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs mb-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>{c.label}</p>
                      {c.href
                        ? <a href={c.href} className="text-sm transition-colors duration-300" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none" }}>{c.val}</a>
                        : <p className="text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>{c.val}</p>
                      }
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-7" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <p className="text-xs uppercase tracking-wider mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>Follow on Social</p>
                <div className="flex gap-3">
                  <a href="https://instagram.com/pastor_bernard_ajayi" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full text-sm px-4 py-2 transition-all duration-300"
                    style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)", textDecoration: "none" }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                      <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                    </svg>
                    Instagram
                  </a>
                  <a href="https://facebook.com/PastorBernardAjayi" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full text-sm px-4 py-2 transition-all duration-300"
                    style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)", textDecoration: "none" }}>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                    </svg>
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="rounded-3xl overflow-hidden shadow-md" style={{ height: "180px" }}>
              <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80" alt="Ottawa, Canada" className="w-full h-full object-cover"/>
              <div className="relative flex items-end p-5" style={{ marginTop: "-180px", height: "180px", background: "linear-gradient(to top, rgba(27,67,50,0.80) 0%, transparent 60%)" }}>
                <div>
                  <p className="font-display font-bold text-white">Ottawa, Ontario</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>Canada</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl p-8 md:p-10 shadow-md" style={{ background: "white", border: "1px solid rgba(27,67,50,0.06)" }}>
              <h3 className="font-display font-bold mb-1" style={{ color: "#1B4332", fontSize: "1.5rem" }}>Send a Message</h3>
              <p className="text-sm mb-8" style={{ color: "#6B7280" }}>Fill out the form below and we'll get back to you promptly.</p>

              {sent ? (
                <div className="text-center py-14">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(27,67,50,0.08)" }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#1B4332" strokeWidth="2" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h4 className="font-display font-bold mb-2" style={{ color: "#1B4332", fontSize: "1.2rem" }}>Message Ready!</h4>
                  <p className="text-sm" style={{ color: "#6B7280" }}>Your email client should have opened. Send the message and we'll be in touch soon.</p>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: "#2D2D2D" }}>Full Name</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" style={inputStyle}
                        onFocus={e => { e.target.style.borderColor="#1B4332"; }} onBlur={e => { e.target.style.borderColor="rgba(27,67,50,0.15)"; }}/>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: "#2D2D2D" }}>Email Address</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" style={inputStyle}
                        onFocus={e => { e.target.style.borderColor="#1B4332"; }} onBlur={e => { e.target.style.borderColor="rgba(27,67,50,0.15)"; }}/>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: "#2D2D2D" }}>Phone (Optional)</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 000 000 0000" style={inputStyle}
                        onFocus={e => { e.target.style.borderColor="#1B4332"; }} onBlur={e => { e.target.style.borderColor="rgba(27,67,50,0.15)"; }}/>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: "#2D2D2D" }}>I'm Interested In</label>
                      <select name="type" value={form.type} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
                        <option value="hardcopy">Hardcopy Book ($20 CAD)</option>
                        <option value="ebook">Digital Ebook ($3 CAD)</option>
                        <option value="both">Both Formats</option>
                        <option value="other">General Inquiry</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: "#2D2D2D" }}>Your Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={5}
                      placeholder="Tell us your name, what you're ordering, and your delivery address (for hardcopy)..."
                      style={{ ...inputStyle, resize: "none" }}
                      onFocus={e => { e.target.style.borderColor="#1B4332"; }} onBlur={e => { e.target.style.borderColor="rgba(27,67,50,0.15)"; }}/>
                  </div>
                  <button onClick={handleSubmit}
                    className="w-full rounded-full font-bold text-sm py-4 flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    style={{ background: "#1B4332", color: "white", cursor: "pointer", border: "none", fontFamily: "inherit" }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    Send Message
                  </button>
                  <p className="text-center text-xs" style={{ color: "#6B7280" }}>
                    Or email directly:{" "}
                    <a href="mailto:bernardajayiministries@gmail.com" style={{ color: "#1B4332", fontWeight: 600, textDecoration: "none" }}>bernardajayiministries@gmail.com</a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
