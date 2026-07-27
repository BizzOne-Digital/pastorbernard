"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

export default function PricingPage() {
  const [loaded, setLoaded] = useState(false);
  const cards = useInView();
  const faq = useInView();

  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  const faqs = [
    { q: "Do you ship outside Canada and USA?", a: "Currently we ship within Canada and the USA. Contact us if you are in another country and we'll do our best to accommodate." },
    { q: "How long does hardcopy shipping take?", a: "Shipping times vary by location, but most orders within Canada and the USA are delivered within 5–10 business days." },
    { q: "How do I receive the ebook after payment?", a: "After payment is confirmed, the digital ebook will be sent to your email address. You can read it on any device." },
    { q: "Can I order multiple copies?", a: "Absolutely! Bulk orders are available for churches, ministries, or groups. Contact us directly for bulk pricing." },
    { q: "Is there a return policy?", a: "Due to the nature of digital products, ebooks are non-refundable. For hardcopy books, contact us within 7 days of receipt if there is a problem." },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden pt-36 pb-20" style={{ background: "#FAFAF7" }}>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: "rgba(201,168,76,0.08)", filter: "blur(60px)" }}/>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none" style={{ background: "rgba(27,67,50,0.05)", filter: "blur(50px)" }}/>
        <div className={`container-wide text-center relative z-10 transition-all duration-800 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p style={{ color: "#C9A84C", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.15em" }} className="uppercase mb-4">Simple Pricing</p>
          <h1 className="font-display font-bold mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#1B4332" }}>Invest in Your Faith</h1>
          <p style={{ color: "#6B7280", fontSize: "1.1rem", maxWidth: "38rem", margin: "0 auto", lineHeight: 1.7 }}>
            Choose the format that works best for you — both options contain the same transformative content.
          </p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section ref={cards.ref} className="pb-24" style={{ background: "#FAFAF7" }}>
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ maxWidth: "900px", margin: "0 auto" }}>
            {/* Hardcopy */}
            <div className={`bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-700 ${cards.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ border: "2px solid rgba(27,67,50,0.08)" }}>
              <div className="relative overflow-hidden" style={{ height: "190px" }}>
                <img src="/book1.png" alt="Physical book" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(27,67,50,0.55)" }}>
                  <svg viewBox="0 0 64 64" fill="none" stroke="white" strokeWidth="2" className="w-12 h-12">
                    <path strokeLinecap="round" d="M14 10h36a3 3 0 013 3v38a3 3 0 01-3 3H14a3 3 0 01-3-3V13a3 3 0 013-3z"/>
                    <path strokeLinecap="round" d="M20 22h24M20 30h24M20 38h14"/>
                  </svg>
                </div>
              </div>
              <div className="p-8">
                <p style={{ color: "#1B4332", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.14em" }} className="uppercase mb-2">Physical Edition</p>
                <h3 className="font-display font-bold mb-1" style={{ fontSize: "1.6rem", color: "#1B4332" }}>Medication for Healing</h3>
                <p className="mb-5 text-sm" style={{ color: "#6B7280" }}>Hardcopy Book</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-display font-bold" style={{ fontSize: "3.5rem", color: "#1B4332", lineHeight: 1 }}>$20</span>
                  <span className="mb-2 text-sm" style={{ color: "#6B7280" }}>CAD</span>
                </div>
                <p className="font-semibold mb-6 text-sm" style={{ color: "#C9A84C" }}>Shipping included to Canada & USA</p>
                <ul className="space-y-2.5 mb-7">
                  {["Full printed book delivered to your door", "Shipped to Canada & USA (included)", "Perfect for gifting to loved ones", "Physical reading experience", "Same transformative content as ebook"].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: "#2D2D2D" }}>
                      <svg viewBox="0 0 20 20" fill="none" stroke="#1B4332" strokeWidth="2" className="w-4 h-4 flex-shrink-0 mt-0.5">
                        <circle cx="10" cy="10" r="8"/><path strokeLinecap="round" strokeLinejoin="round" d="M7 10l2 2 4-4"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="w-full block rounded-full text-sm font-bold text-center py-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5" style={{ background: "#1B4332", color: "white" }}>
                  Order Hardcopy — $20 CAD
                </Link>
              </div>
            </div>

            {/* Ebook */}
            <div className={`rounded-3xl overflow-hidden shadow-xl relative transition-all duration-700 delay-150 ${cards.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ background: "#1B4332" }}>
              <div className="absolute top-5 right-5 z-10">
                <span className="text-xs font-bold px-4 py-1.5 rounded-full" style={{ background: "#C9A84C", color: "#1B4332" }}>Most Popular</span>
              </div>
              <div className="relative overflow-hidden" style={{ height: "190px" }}>
                <img src="/book2.png" alt="Digital ebook" className="w-full h-full object-cover" style={{ opacity: 0.35 }}/>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 64 64" fill="none" stroke="white" strokeWidth="2" className="w-12 h-12">
                    <rect x="10" y="8" width="44" height="48" rx="4"/>
                    <path strokeLinecap="round" d="M20 22h24M20 30h24M20 38h16"/>
                    <circle cx="46" cy="46" r="10" fill="#C9A84C" stroke="none"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M43 46l2.5 2.5 4.5-4.5" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
              <div className="p-8">
                <p style={{ color: "#C9A84C", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.14em" }} className="uppercase mb-2">Digital Edition</p>
                <h3 className="font-display font-bold mb-1 text-white" style={{ fontSize: "1.6rem" }}>Medication for Healing</h3>
                <p className="mb-5 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>Digital Ebook</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-display font-bold" style={{ fontSize: "3.5rem", color: "#C9A84C", lineHeight: 1 }}>$3</span>
                  <span className="mb-2 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>CAD</span>
                </div>
                <p className="mb-6 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>Instant access — download immediately</p>
                <ul className="space-y-2.5 mb-7">
                  {["Instant download after payment", "Read on phone, tablet, or PC", "No shipping — immediate access", "Most affordable option", "Same content as hardcopy"].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.82)" }}>
                      <svg viewBox="0 0 20 20" fill="none" stroke="#C9A84C" strokeWidth="2" className="w-4 h-4 flex-shrink-0 mt-0.5">
                        <circle cx="10" cy="10" r="8"/><path strokeLinecap="round" strokeLinejoin="round" d="M7 10l2 2 4-4"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="w-full block rounded-full text-sm font-bold text-center py-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5" style={{ background: "#C9A84C", color: "#1B4332" }}>
                  Get Ebook — $3 CAD
                </Link>
              </div>
            </div>
          </div>

          {/* How to Order */}
          <div className="mt-10 rounded-3xl p-7 flex items-start gap-4" style={{ background: "#F5F0E8", border: "1px solid rgba(27,67,50,0.08)", maxWidth: "900px", margin: "2.5rem auto 0" }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#1B4332" strokeWidth="2" className="w-6 h-6 flex-shrink-0 mt-0.5">
              <circle cx="12" cy="12" r="10"/><path strokeLinecap="round" d="M12 8v4l3 3"/>
            </svg>
            <div>
              <h4 className="font-display font-bold mb-2" style={{ color: "#1B4332", fontSize: "1.1rem" }}>How to Order</h4>
              <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                Contact Pastor Bernard via email at{" "}
                <a href="mailto:bernardajayiministries@gmail.com" style={{ color: "#1B4332", fontWeight: 600, textDecoration: "none" }}>bernardajayiministries@gmail.com</a>
                {" "}or call{" "}
                <a href="tel:+15145499983" style={{ color: "#1B4332", fontWeight: 600, textDecoration: "none" }}>+1 (514) 549-9983</a>.
                {" "}Mention the format you want and your delivery address if applicable. Payment details will be shared directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faq.ref} className="py-20" style={{ background: "#F5F0E8" }}>
        <div className="container-wide" style={{ maxWidth: "780px" }}>
          <div className={`text-center mb-12 transition-all duration-700 ${faq.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <h2 className="font-display font-bold mb-3" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#1B4332" }}>Frequently Asked</h2>
            <p style={{ color: "#6B7280" }}>Quick answers to common questions</p>
          </div>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div key={i} className={`bg-white rounded-2xl p-6 shadow-sm transition-all duration-500 ${faq.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: `${i * 80}ms`, border: "1px solid rgba(27,67,50,0.05)" }}>
                <h4 className="font-display font-semibold mb-2.5 flex items-center gap-3" style={{ color: "#1B4332", fontSize: "1.05rem" }}>
                  <svg viewBox="0 0 20 20" fill="#C9A84C" className="w-5 h-5 flex-shrink-0">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-7a1 1 0 112 0v3a1 1 0 11-2 0v-3zm1-4a1 1 0 100 2 1 1 0 000-2z"/>
                  </svg>
                  {item.q}
                </h4>
                <p className="text-sm leading-relaxed pl-8" style={{ color: "#6B7280" }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
