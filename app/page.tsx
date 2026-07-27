"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function HomePage() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const mission = useInView();
  const books = useInView();
  const stats = useInView();
  const testimonial = useInView();
  const cta = useInView();

  useEffect(() => { const t = setTimeout(() => setHeroLoaded(true), 100); return () => clearTimeout(t); }, []);

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <picture>
            <source media="(max-width: 767px)" srcSet="/mobile-hero.png" />
            <img src="/hero.png" alt="Open Bible" className="w-full h-full object-cover object-center" />
          </picture>
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(27,67,50,0.94) 0%, rgba(27,67,50,0.80) 55%, rgba(27,67,50,0.35) 100%)" }} />
        </div>

        <div className="container-wide relative z-10 py-36 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className={`transition-all duration-1000 ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="inline-flex items-center gap-2 border border-yellow-400/40 bg-yellow-400/10 rounded-full px-4 py-1.5 mb-8">
              <svg viewBox="0 0 16 16" fill="#C9A84C" className="w-3.5 h-3.5 flex-shrink-0">
                <path d="M8 1l1.5 4.5H14l-3.6 2.6 1.4 4.4L8 10 4.2 12.5l1.4-4.4L2 5.5h4.5z"/>
              </svg>
              <span style={{ color: "#C9A84C", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em" }}>FAITH • TEACHING • TRANSFORMATION</span>
            </div>

            <h1 className="font-display text-white font-bold leading-tight mb-6" style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.2rem)" }}>
              Boosting Faith<br />
              <span style={{ color: "#C9A84C" }}>Through God's</span><br />
              Word
            </h1>

            <p className="text-white/80 leading-relaxed mb-10 max-w-lg" style={{ fontSize: "1.1rem" }}>
              Making people see the power in the Word of God through our teaching, books, and faith booster cards — serving Christians across Canada and USA.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/books"
                className="inline-flex items-center gap-2 rounded-full font-bold text-sm px-8 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: "#C9A84C", color: "#1B4332" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
                Get the Book
              </Link>
              <Link href="/about"
                className="inline-flex items-center gap-2 rounded-full font-semibold text-sm px-8 py-4 transition-all duration-300 hover:border-yellow-400 hover:text-yellow-400"
                style={{ border: "2px solid rgba(255,255,255,0.5)", color: "white" }}>
                Learn More
              </Link>
            </div>
          </div>

          {/* Right — Scripture card */}
          <div className={`hidden lg:flex justify-end transition-all duration-1000 delay-300 ${heroLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-2xl max-w-sm w-full" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", backdropFilter: "blur(12px)" }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ background: "rgba(201,168,76,0.2)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <blockquote className="font-display text-white text-lg font-medium italic leading-relaxed mb-4">
                "The Word of God is living and active, sharper than any double-edged sword"
              </blockquote>
              <p style={{ color: "#C9A84C", fontWeight: 600, fontSize: "0.9rem" }}>Hebrews 4:12</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: "rgba(255,255,255,0.5)" }}>
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.2em" }}>SCROLL</span>
          <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)" }} />
        </div>
      </section>

      {/* ── STRIP ── */}
      <section style={{ background: "#F5F0E8", borderBottom: "1px solid rgba(27,67,50,0.08)" }}>
        <div className="container-wide py-5 flex flex-wrap justify-center gap-8 md:gap-14">
          {[
            { d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", label: "Books & Ebooks" },
            { d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", label: "Faith Booster Cards" },
            { d: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4", label: "Canada & USA Delivery" },
            { d: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064", label: "Global Ministry" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2.5" style={{ color: "#1B4332" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" className="w-5 h-5 flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d={item.d} />
              </svg>
              <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── MISSION / ABOUT ── */}
      <section ref={mission.ref} className="py-24" style={{ background: "#FAFAF7" }}>
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className={`relative transition-all duration-700 ${mission.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "4/5" }}>
              <img src="/home.png" alt="Mountain sunrise — God's creation" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl p-4 max-w-44">
              <div className="flex items-center gap-2 mb-1">
                <svg viewBox="0 0 20 20" fill="#C9A84C" className="w-4 h-4 flex-shrink-0">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span style={{ color: "#1B4332", fontWeight: 700, fontSize: "0.8rem" }}>Trusted Ministry</span>
              </div>
              <p style={{ color: "#6B7280", fontSize: "0.7rem" }}>Reaching thousands across North America</p>
            </div>
          </div>

          {/* Text */}
          <div className={`transition-all duration-700 delay-200 ${mission.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <p style={{ color: "#C9A84C", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.15em" }} className="uppercase mb-3">Our Mission</p>
            <h2 className="font-display font-bold leading-tight mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1B4332" }}>
              The Power of God's Word<br />
              <span style={{ color: "#C9A84C" }}>Changes Everything</span>
            </h2>
            <p style={{ color: "#6B7280", lineHeight: 1.8 }} className="mb-5">
              Pastor Bernard Ajayi believes in the life-transforming power of Scripture. Through carefully crafted books, teachings, and faith booster resources, he helps believers across Canada and the USA walk in the fullness of God's promises.
            </p>
            <p style={{ color: "#6B7280", lineHeight: 1.8 }} className="mb-8">
              His book <em style={{ color: "#1B4332", fontWeight: 600 }}>"Medication for Healing"</em> has been a source of restoration and renewal for many — available in both hardcopy and digital formats.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {["Faith-Based Teaching", "Healing & Restoration", "Word of God", "North America Reach"].map((tag) => (
                <span key={tag} className="text-xs font-medium px-4 py-2 rounded-full" style={{ background: "#F5F0E8", border: "1px solid rgba(27,67,50,0.15)", color: "#1B4332" }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOOKS ── */}
      <section ref={books.ref} className="py-24" style={{ background: "#F5F0E8" }}>
        <div className="container-wide">
          <div className={`text-center mb-14 transition-all duration-700 ${books.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <p style={{ color: "#C9A84C", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.15em" }} className="uppercase mb-3">Resources</p>
            <h2 className="font-display font-bold" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1B4332" }}>Books That Transform Lives</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Medication for Healing", sub: "Hardcopy Edition", price: "$20 CAD", note: "Shipping included to Canada & USA", img: "/book1.png", badge: "Physical Book", badgeBg: "#1B4332", badgeColor: "white" },
              { title: "Medication for Healing", sub: "Digital Ebook", price: "$3 CAD", note: "Instant download — read anywhere", img: "/book2.png", badge: "Ebook", badgeBg: "#C9A84C", badgeColor: "#1B4332" },
            ].map((book, i) => (
              <div key={i} className={`bg-white rounded-3xl overflow-hidden shadow-md card-hover transition-all duration-700 ${books.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="relative overflow-hidden" style={{ height: "260px" }}>
                  <img src={book.img} alt={book.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                  <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: book.badgeBg, color: book.badgeColor }}>{book.badge}</span>
                </div>
                <div className="p-7">
                  <h3 className="font-display font-bold mb-1" style={{ fontSize: "1.5rem", color: "#1B4332" }}>{book.title}</h3>
                  <p className="mb-4 text-sm" style={{ color: "#6B7280" }}>{book.sub}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-display font-bold" style={{ fontSize: "2rem", color: "#C9A84C" }}>{book.price}</p>
                      <p className="text-xs mt-1" style={{ color: "#6B7280" }}>{book.note}</p>
                    </div>
                    <Link href="/pricing" className="inline-flex items-center gap-2 rounded-full font-semibold text-sm px-6 py-3 transition-all duration-300 hover:shadow-lg" style={{ background: "#1B4332", color: "white" }}>
                      Order Now
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                        <path strokeLinecap="round" d="M3 8h10M9 4l4 4-4 4"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section ref={stats.ref} className="py-20" style={{ background: "#1B4332" }}>
        <div className="container-wide grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "1000+", label: "Lives Impacted" },
            { number: "2", label: "Book Formats" },
            { number: "2", label: "Countries Reached" },
            { number: "100%", label: "Word-Based Teaching" },
          ].map((s, i) => (
            <div key={i} className={`transition-all duration-700 ${stats.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <p className="font-display font-bold mb-2" style={{ fontSize: "3rem", color: "#C9A84C" }}>{s.number}</p>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.85rem" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section ref={testimonial.ref} className="py-24" style={{ background: "#FAFAF7" }}>
        <div className={`container-wide max-w-3xl text-center transition-all duration-800 ${testimonial.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <svg viewBox="0 0 48 48" className="w-10 h-10 mx-auto mb-8">
            <path d="M14 18c0-4.4 3.6-8 8-8v4c-2.2 0-4 1.8-4 4h4v10H10V18h4zM30 18c0-4.4 3.6-8 8-8v4c-2.2 0-4 1.8-4 4h4v10H26V18h4z" fill="#C9A84C"/>
          </svg>
          <blockquote className="font-display font-semibold italic leading-relaxed mb-6" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", color: "#1B4332" }}>
            "This book gave me a fresh understanding of healing through God's Word. Every page spoke directly to my situation."
          </blockquote>
          <p style={{ color: "#C9A84C", fontWeight: 600, fontSize: "0.9rem" }}>Reader — Toronto, Canada</p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section ref={cta.ref} className="py-20" style={{ background: "#F5F0E8" }}>
        <div className={`container-wide max-w-2xl text-center transition-all duration-800 ${cta.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display font-bold mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1B4332" }}>
            Ready to Strengthen<br />Your Faith?
          </h2>
          <p style={{ color: "#6B7280", lineHeight: 1.8 }} className="mb-10">
            Get your copy of "Medication for Healing" today — available as a hardcopy or instant digital download.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/pricing" className="rounded-full font-bold text-sm px-10 py-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5" style={{ background: "#1B4332", color: "white" }}>View Pricing</Link>
            <Link href="/contact" className="rounded-full font-semibold text-sm px-10 py-4 transition-all duration-300 hover:bg-green-forest hover:text-white" style={{ border: "2px solid #1B4332", color: "#1B4332" }}>Contact Pastor Bernard</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
