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

export default function AboutPage() {
  const [loaded, setLoaded] = useState(false);
  const sec1 = useInView();
  const sec2 = useInView();
  const sec3 = useInView();

  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <div>
      {/* HERO */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: "60vh" }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1600&q=85" alt="Sunrise over mountains" className="w-full h-full object-cover object-center"/>
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(27,67,50,0.95) 0%, rgba(27,67,50,0.60) 55%, rgba(27,67,50,0.20) 100%)" }}/>
        </div>
        <div className={`container-wide relative z-10 pb-16 pt-40 transition-all duration-800 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p style={{ color: "#C9A84C", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.15em" }} className="uppercase mb-4">About</p>
          <h1 className="font-display font-bold text-white mb-3" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>Pastor Bernard Ajayi</h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.15rem" }}>Author · Teacher · Minister of the Word</p>
        </div>
      </section>

      {/* STORY */}
      <section ref={sec1.ref} className="py-24" style={{ background: "#FAFAF7" }}>
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`relative transition-all duration-800 ${sec1.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "4/5" }}>
              <img src="/about.png" alt="Bible and light" className="w-full h-full object-cover"/>
            </div>
          </div>
          <div className={`transition-all duration-800 delay-200 ${sec1.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <p style={{ color: "#C9A84C", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.15em" }} className="uppercase mb-4">His Story</p>
            <h2 className="font-display font-bold leading-tight mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#1B4332" }}>
              A Man Moved by<br/>the Word of God
            </h2>
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: "#6B7280" }}>
              <p>Pastor Bernard Ajayi is a passionate servant of God whose ministry is rooted in the absolute authority and power of Scripture. Based in Ottawa, Ontario, Canada, he reaches believers across Canada and the United States through his books, teachings, and faith resources.</p>
              <p>His journey in ministry has been shaped by a deep conviction — that the Word of God is not merely historical text, but living medicine for the spirit, soul, and body of every believer. This conviction gave birth to his book, <em style={{ color: "#1B4332", fontWeight: 600 }}>"Medication for Healing."</em></p>
              <p>Through practical teaching grounded in Scripture, Pastor Bernard helps ordinary Christians experience extraordinary transformation in their everyday lives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section ref={sec2.ref} className="py-20" style={{ background: "#F5F0E8" }}>
        <div className="container-wide">
          <div className={`text-center mb-14 transition-all duration-700 ${sec2.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <h2 className="font-display font-bold mb-3" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#1B4332" }}>What Drives This Ministry</h2>
            <p style={{ color: "#6B7280", maxWidth: "36rem", margin: "0 auto" }}>Three pillars that shape every resource, message, and interaction.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "The Word First", body: "Every resource, message, and teaching is anchored in the truth of God's Word — Scripture is the final authority.", icon: "#1B4332" },
              { title: "Faith Without Limits", body: "Pastor Bernard teaches that faith in God's Word can break every limitation — sickness, lack, fear, and doubt.", icon: "#C9A84C" },
              { title: "Accessible to All", body: "Resources are priced to ensure that anyone who wants to grow in faith can access life-changing truth without financial barriers.", icon: "#1B4332" },
            ].map((v, i) => (
              <div key={i} className={`bg-white rounded-3xl p-8 shadow-sm card-hover transition-all duration-700 ${sec2.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${i * 120}ms` }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: "#F5F0E8" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke={v.icon} strokeWidth="1.8" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                </div>
                <h3 className="font-display font-bold mb-3" style={{ color: "#1B4332", fontSize: "1.2rem" }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REACH */}
      <section ref={sec3.ref} className="py-24" style={{ background: "#1B4332" }}>
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-800 ${sec3.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p style={{ color: "#C9A84C", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.15em" }} className="uppercase mb-4">Ministry Reach</p>
            <h2 className="font-display font-bold text-white mb-6 leading-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              Serving Christians<br/>Across North America
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }} className="mb-8">
              Based in Ottawa, Ontario, this ministry extends far beyond Canada's borders — touching lives across the United States through books, digital resources, and online teachings.
            </p>
            <div className="grid grid-cols-2 gap-5">
              {[{ flag: "🍁", country: "Canada", detail: "Ottawa · Ontario" }, { flag: "🇺🇸", country: "United States", detail: "Nationwide reach" }].map((loc) => (
                <div key={loc.country} className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <p className="text-3xl mb-2">{loc.flag}</p>
                  <p className="font-display font-bold text-white">{loc.country}</p>
                  <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>{loc.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-800 delay-200 ${sec3.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "16/10" }}>
              <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80" alt="City at night" className="w-full h-full object-cover" style={{ opacity: 0.8 }}/>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ background: "#FAFAF7" }}>
        <div className="container-wide" style={{ maxWidth: "640px" }}>
          <h2 className="font-display font-bold mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#1B4332" }}>Connect With the Ministry</h2>
          <p style={{ color: "#6B7280", lineHeight: 1.8 }} className="mb-8">Whether you have a question, want to order a book, or simply want to reach out — Pastor Bernard would love to hear from you.</p>
          <Link href="/contact" className="inline-block rounded-full font-bold text-sm px-10 py-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5" style={{ background: "#1B4332", color: "white" }}>
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
