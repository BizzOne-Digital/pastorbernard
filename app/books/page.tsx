"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

export default function BooksPage() {
  const [loaded, setLoaded] = useState(false);
  const sec1 = useInView();
  const sec2 = useInView();
  const sec3 = useInView();

  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <div>
      {/* HERO */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: "50vh" }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1600&q=85" alt="Books" className="w-full h-full object-cover"/>
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(27,67,50,0.95) 0%, rgba(27,67,50,0.60) 60%, rgba(27,67,50,0.25) 100%)" }}/>
        </div>
        <div className={`container-wide relative z-10 pb-16 pt-36 transition-all duration-800 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p style={{ color: "#C9A84C", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.15em" }} className="uppercase mb-4">Faith Resources</p>
          <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>Books & Resources</h1>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.15rem", maxWidth: "36rem", lineHeight: 1.7 }}>
            Word-based resources designed to ignite and sustain your faith walk with God.
          </p>
        </div>
      </section>

      {/* FEATURED BOOK */}
      <section ref={sec1.ref} className="py-24" style={{ background: "#FAFAF7" }}>
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`relative transition-all duration-800 ${sec1.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "1/1" }}>
              <img src="/bookpage.png" alt="Medication for Healing" className="w-full h-full object-cover"/>
              <div className="absolute inset-0 flex items-end p-7" style={{ background: "linear-gradient(to top, rgba(27,67,50,0.65) 0%, transparent 50%)" }}>
                <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: "#C9A84C", color: "#1B4332" }}>Available Now</span>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-800 delay-200 ${sec1.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <p style={{ color: "#C9A84C", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.15em" }} className="uppercase mb-3">Featured Book</p>
            <h2 className="font-display font-bold leading-tight mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1B4332" }}>
              Medication<br/>for Healing
            </h2>
            <p style={{ color: "#6B7280", lineHeight: 1.8 }} className="mb-6">
              This powerful resource by Pastor Bernard Ajayi unveils the healing power embedded in the Word of God. Drawing from Scripture, this book serves as a spiritual prescription — delivering faith, strength, and renewal to your spirit, soul, and body.
            </p>
            <ul className="space-y-3 mb-8">
              {["Scripture-based healing principles", "Practical daily declarations", "Testimonies of transformation", "Applicable to every believer"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "#2D2D2D" }}>
                  <svg viewBox="0 0 20 20" fill="none" stroke="#1B4332" strokeWidth="2" className="w-5 h-5 flex-shrink-0">
                    <circle cx="10" cy="10" r="8"/><path strokeLinecap="round" strokeLinejoin="round" d="M7 10l2 2 4-4"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link href="/pricing" className="inline-flex items-center gap-2 rounded-full font-bold text-sm px-8 py-4 transition-all duration-300 hover:shadow-lg" style={{ background: "#1B4332", color: "white" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                Order Now
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full font-semibold text-sm px-8 py-4 transition-all duration-300" style={{ border: "2px solid #1B4332", color: "#1B4332" }}>
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FORMAT OPTIONS */}
      <section ref={sec2.ref} className="py-20" style={{ background: "#F5F0E8" }}>
        <div className="container-wide">
          <div className={`text-center mb-12 transition-all duration-700 ${sec2.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <h2 className="font-display font-bold mb-3" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#1B4332" }}>Choose Your Format</h2>
            <p style={{ color: "#6B7280" }}>Read in the way that suits you best</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                format: "Hardcopy Book", price: "$20 CAD", detail: "Includes standard shipping across Canada & USA",
                img: "/book1.png",
                perks: ["Physical book delivered to your door", "Canada & USA shipping included", "Great as a gift"],
                iconStroke: "#1B4332",
              },
              {
                format: "Digital Ebook", price: "$3 CAD", detail: "Instant download — read on any device",
                img: "/book2.png",
                perks: ["Instant access after payment", "Read on any device", "Most affordable option"],
                iconStroke: "#C9A84C",
              },
            ].map((item, i) => (
              <div key={i} className={`bg-white rounded-3xl overflow-hidden shadow-md card-hover transition-all duration-700 ${sec2.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="overflow-hidden" style={{ height: "200px" }}>
                  <img src={item.img} alt={item.format} className="w-full h-full object-cover"/>
                </div>
                <div className="p-8">
                  <h3 className="font-display font-bold mb-1" style={{ fontSize: "1.4rem", color: "#1B4332" }}>{item.format}</h3>
                  <p className="font-display font-bold mb-1" style={{ fontSize: "2rem", color: "#C9A84C" }}>{item.price}</p>
                  <p className="text-xs mb-5" style={{ color: "#6B7280" }}>{item.detail}</p>
                  <ul className="space-y-2 mb-6">
                    {item.perks.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm" style={{ color: "#2D2D2D" }}>
                        <svg viewBox="0 0 16 16" fill="#C9A84C" className="w-4 h-4 flex-shrink-0">
                          <path d="M8 1l1.5 4.5H14l-3.6 2.6 1.4 4.4L8 10 4.2 12.5l1.4-4.4L2 5.5h4.5z"/>
                        </svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link href="/pricing" className="w-full block rounded-full text-sm font-bold text-center py-3 transition-colors duration-300" style={{ background: "#1B4332", color: "white" }}>
                    Order This Format
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAITH BOOSTER CARDS */}
      <section ref={sec3.ref} className="py-20" style={{ background: "#1B4332" }}>
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-800 ${sec3.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p style={{ color: "#C9A84C", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.15em" }} className="uppercase mb-4">Coming Soon</p>
            <h2 className="font-display font-bold text-white mb-6 leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Faith Booster<br/>Cards
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }} className="mb-8">
              Powerful Scripture-based declaration cards designed to help you stay rooted in God's promises every single day. Perfect for personal devotion, family worship, and gifting.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full font-bold text-sm px-8 py-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5" style={{ background: "#C9A84C", color: "#1B4332" }}>
              Get Notified
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                <path strokeLinecap="round" d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </Link>
          </div>
          <div className={`relative transition-all duration-800 delay-200 ${sec3.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=700&q=80" alt="Faith cards inspiration" className="w-full h-full object-cover" style={{ opacity: 0.75 }}/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
