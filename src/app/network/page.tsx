"use client";
import React, { useEffect, useState } from "react";

export default function Network() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white px-4 py-20 flex flex-col items-center">
      <section className="max-w-4xl w-full animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-center">Our Strategic Network</h1>
        <p className="text-lg text-blue-100 mb-8 text-center">The strength of Axinity Partners lies in the quality of our collaborators. We work through a selective, high-trust network of professionals with deep sector expertise — assembled for each mandate based on its specific needs.</p>
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white/5 rounded-xl p-6 shadow-lg flex flex-col items-center">
            <span className="text-3xl mb-2">🏦</span>
            <h4 className="font-semibold mb-1">Finance Structurers</h4>
            <p className="text-blue-100 text-center text-sm">Former investment bankers and structured finance experts</p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 shadow-lg flex flex-col items-center">
            <span className="text-3xl mb-2">📈</span>
            <h4 className="font-semibold mb-1">Trading Specialists</h4>
            <p className="text-blue-100 text-center text-sm">Commodity and marine fuel traders with market-making experience</p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 shadow-lg flex flex-col items-center">
            <span className="text-3xl mb-2">🔗</span>
            <h4 className="font-semibold mb-1">Supply Chain Experts</h4>
            <p className="text-blue-100 text-center text-sm">Procurement specialists and logistics managers</p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 shadow-lg flex flex-col items-center">
            <span className="text-3xl mb-2">⚖️</span>
            <h4 className="font-semibold mb-1">Legal & Compliance</h4>
            <p className="text-blue-100 text-center text-sm">Advisors across trade and cross-border jurisdictions</p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 shadow-lg flex flex-col items-center">
            <span className="text-3xl mb-2">🏭</span>
            <h4 className="font-semibold mb-1">Operations Experts</h4>
            <p className="text-blue-100 text-center text-sm">Oilfield operations and terminal logistics specialists</p>
          </div>
        </div>
        <p className="text-blue-100 text-center mb-6">We do not outsource — we assemble. Every engagement benefits from Axinity's strategic oversight and is supported only where needed, by those with the exact experience required to deliver results.</p>
        <p className="text-blue-100 text-center mb-6">This model allows us to operate with the responsiveness of a boutique, and the reach of a much larger firm — without compromise.</p>
        <div className="flex justify-center">
          <a href="/contact" className="text-blue-400 hover:underline">Contact Us to Learn More</a>
        </div>
      </section>
      {/* Floating Scroll Up Button */}
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
