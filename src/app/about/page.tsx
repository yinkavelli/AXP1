"use client";
import React, { useEffect, useState } from "react";

export default function About() {
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white px-4 py-20 flex flex-col items-center">
      <section className="max-w-3xl w-full text-center animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8">Precision in Motion</h1>
        <div className="mb-8 text-lg text-blue-100">
          <p className="mb-6">Axinity Partners was born from a clear insight: in the oil & gas sector — and especially in its financing and logistics corridors — what moves deals forward is not volume, but precision.</p>
          <p className="mb-6">Having spent years across trade finance, structured energy transactions, and cross-border execution, I came to realize that the most effective outcomes are rarely driven by large firms with layered teams. They're delivered by sharp thinkers who know what's at stake, know who to call, and know how to close.</p>
          <p className="mb-6">Axinity Partners is built on that principle.</p>
          <p className="mb-6">We operate with discipline, discretion, and a deep network of sector-specific collaborators. Each mandate is strategically managed and supported by handpicked professionals who bring the exact expertise needed — and nothing else. This keeps us lean, focused, and aligned with our clients at every step.</p>
          <p className="mb-6">Whether structuring a prepayment facility, executing complex commodity trades, managing procurement operations, or orchestrating marine fuel logistics, we bring a rare blend of financial intelligence and operational pragmatism. That's what earns us trust — and repeat mandates — from those who operate in high-stakes environments.</p>
          <p className="mb-6">If you value clarity over noise, and outcomes over overhead, I look forward to working with you.</p>
          <p className="italic">— [Your Name]<br/>Founder, Axinity Partners</p>
        </div>
        <h2 className="text-3xl font-bold mb-4 mt-12">We are not structured for headcount — we are structured for results.</h2>
        <p className="text-blue-100 mb-8">Axinity is built around a lean, execution-focused model that prioritizes substance over scale. Every project benefits from senior-level oversight and is reinforced by a network of high-trust professionals with sector-specific expertise.</p>
        <div className="grid md:grid-cols-2 gap-8 text-left mb-8">
          <ul className="space-y-2">
            <li><b>Strategic Leadership:</b> Every mandate receives senior-level attention and strategic oversight throughout execution.</li>
            <li><b>Precision-Assembled Teams:</b> No excess, no generalists. Only the talent a transaction demands.</li>
          </ul>
          <ul className="space-y-2">
            <li><b>Network-Powered Delivery:</b> Our reach is wide, but our control is exact.</li>
            <li><b>Built for Outcome:</b> Strategy, structure, and delivery — all under one mandate.</li>
          </ul>
        </div>
      </section>
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 focus:outline-none animate-fade-in-up"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </main>
  );
}
