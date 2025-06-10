"use client";
import React, { useEffect, useState } from "react";

export default function CommercialOperations() {
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
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Commercial Operations</h1>
        <p className="italic text-blue-200 mb-8">Trading excellence and operational efficiency across the value chain</p>
        <p className="mb-8 text-lg text-blue-100">Success in energy markets demands operational excellence at every level — from sophisticated trading strategies to seamless supply chain execution. Our Commercial Operations pillar delivers the expertise and networks that optimize performance across the entire commodity value chain.</p>
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-2">1. Energy Trading & Risk Management</h2>
          <p className="mb-2">We provide comprehensive trading advisory and execution support across the commodity spectrum, with particular expertise in crude oil, refined products, and marine fuels. Our approach combines market intelligence with sophisticated risk management frameworks.</p>
          <ul className="list-disc list-inside text-blue-100 mb-4">
            <li>Trading strategy development and market positioning</li>
            <li>Physical and financial commodity structuring</li>
            <li>Hedging and risk management advisory</li>
            <li>Counterparty assessment and credit structuring</li>
            <li>Price risk mitigation and portfolio optimization</li>
            <li>Market intelligence and timing advisory</li>
          </ul>
          <p className="mb-6"><b>Who We Serve:</b> Oil producers, trading houses, refiners, and energy companies seeking to optimize their commodity exposure and trading operations.</p>
          <h2 className="text-2xl font-bold mb-2 mt-8">2. Integrated Supply Chain & Logistics</h2>
          <p className="mb-2">We streamline procurement operations and manage complex energy logistics, leveraging our extensive network of suppliers, service providers, and logistics partners to deliver cost-effective solutions with uncompromising quality standards.</p>
          <ul className="list-disc list-inside text-blue-100 mb-4">
            <li>Strategic procurement planning and vendor management</li>
            <li>Equipment sourcing for exploration, production, and refining operations</li>
            <li>Marine fuel supply and pumping arrangements</li>
            <li>Logistics integration (bunkering, chartering, storage contracts)</li>
            <li>Supply partner onboarding and KYC protocols</li>
            <li>Volume movement oversight and commercial controls</li>
          </ul>
          <p className="mb-6"><b>Who We Serve:</b> Energy companies, contractors, producers, and trading entities requiring efficient procurement solutions and supply chain management across oil & marine fuels operations.</p>
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
