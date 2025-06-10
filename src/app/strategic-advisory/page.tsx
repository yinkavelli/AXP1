"use client";
import React, { useEffect, useState } from "react";

export default function StrategicAdvisory() {
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white px-4 py-20 flex flex-col items-center">
      <section className="max-w-3xl w-full animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Strategic Advisory</h1>
        <p className="italic text-blue-200 mb-8">Financial structuring and strategic partnerships that unlock value</p>
        <p className="mb-8 text-lg text-blue-100">The foundation of every successful energy venture lies in its financial architecture and strategic positioning. Our Strategic Advisory pillar provides the sophisticated structuring and partnership expertise that transforms opportunities into executable realities.</p>
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-2">1. Structured Finance Solutions</h2>
          <p className="mb-2">We design and execute financing structures that unlock liquidity from future cashflows — especially in crude-linked and export-backed transactions. Our focus is on monetizing receivables while embedding discipline and risk protection into every deal.</p>
          <ul className="list-disc list-inside text-blue-100 mb-4">
            <li>Structuring of prepayment and receivables-based finance</li>
            <li>Invoice discounting and trade receivables monetization</li>
            <li>Cashflow modeling aligned with lifting entitlements and payment terms</li>
            <li>Coordination with lenders, offtakers, and legal counsel</li>
            <li>Implementation of payment instructions, waterfall mechanisms, and control accounts</li>
            <li>Cross-border compliance and FX repatriation planning</li>
          </ul>
          <p className="mb-6"><b>Who We Serve:</b> Independent oil producers, JV operators, and traders seeking liquidity solutions tied to production volumes.</p>
          <h2 className="text-2xl font-bold mb-2 mt-8">2. Capital Structuring & Co-Investment Platforms</h2>
          <p className="mb-2">We create investment platforms that enable strategic participation in energy assets and infrastructure. From SAFE instruments to co-investment syndicates, we structure capital to match project realities and investor expectations.</p>
          <ul className="list-disc list-inside text-blue-100 mb-4">
            <li>Design and syndication of co-investment vehicles and early-stage participation structures</li>
            <li>SAFE frameworks and hybrid capital design</li>
            <li>Governance planning and investor entry/exit mechanics</li>
            <li>Strategic capital alignment with operational milestones and risk</li>
          </ul>
          <p className="mb-6"><b>Who We Serve:</b> Project sponsors, institutional investors, and entrepreneurial asset holders seeking structured capital engagement.</p>
          <h2 className="text-2xl font-bold mb-2 mt-8">3. Strategic Origination & Partnership Advisory</h2>
          <p className="mb-2">We originate and shape strategic opportunities that align stakeholders across the energy value chain — and open doors to new commercial pathways. With deep expertise in cross-border investment dynamics, we serve as the strategic bridge for international capital seeking opportunities in emerging energy markets, particularly in West Africa.</p>
          <ul className="list-disc list-inside text-blue-100 mb-4">
            <li>Origination of offtake, logistics, and finance opportunities</li>
            <li>Partnership structuring and JV alignment</li>
            <li>Cross-border investment advisory and market entry strategy</li>
            <li>Nigerian energy sector partnership facilitation and stakeholder engagement</li>
            <li>Due diligence and deal feasibility vetting with local market intelligence</li>
            <li>Strategic introductions to banks, traders, infrastructure operators, and local partners</li>
            <li>Regulatory navigation and in-country operational setup guidance</li>
          </ul>
          <p className="mb-6"><b>Who We Serve:</b> Founders, sponsors, and capital allocators seeking alignment, clarity, and actionable pathways in energy and commodities. International investors and energy companies seeking strategic entry into West African markets, particularly Nigeria.</p>
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
