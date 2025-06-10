"use client";
import React, { useEffect, useState } from "react";

export default function Contact() {
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white px-4 py-20 flex flex-col items-center">
      <section className="max-w-2xl w-full text-center animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8">Ready to Navigate Complexity?</h1>
        <p className="text-lg text-blue-100 mb-8">Connect with our team to discuss your energy sector challenges and opportunities. Whether you're structuring a complex financing arrangement, optimizing trading operations, or exploring new market opportunities, we're here to provide the precision and expertise your objectives demand.</p>
        <div className="mb-8 text-left mx-auto max-w-md bg-white/5 rounded-xl p-8 shadow-lg">
          <p className="mb-2"><b>Email:</b> <a href="mailto:info@axinitypartners.com" className="text-blue-400 hover:underline">info@axinitypartners.com</a></p>
          <p className="mb-2"><b>Location:</b> Dubai, U.A.E</p>
          <p className="mb-2"><b>Phone:</b> <a href="tel:+971506581369" className="text-blue-400 hover:underline">+ (971)-50 6581369</a></p>
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
