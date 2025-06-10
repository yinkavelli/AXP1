"use client";
import React from "react";

export default function Market() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Market Hero Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          The Nigeria Energy Opportunity
        </h1>
        <p className="text-xl text-blue-100 max-w-4xl mx-auto">
          Nigeria is rewriting Africa's energy story. After years of underinvestment, bold regulatory reforms and massive discoveries are creating a once-in-a-decade opportunity for sophisticated investors and ambitious local producers.
        </p>
      </section>

      {/* Statistics Grid Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/*
            { value: "$2.5T", description: "Estimated investment required in Nigeria's energy sector by 2040" },
            { value: "203M", description: "Population driving massive energy demand growth" },
            { value: "40GW", description: "Planned generation capacity by 2030" },
            { value: "60%", description: "Population currently lacking reliable power access" }
          */}
          <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm">
            <div className="text-3xl font-light text-blue-400 mb-2">$2.5T</div>
            <div className="text-sm uppercase tracking-wider mb-4">Global Trade Finance Gap</div>
            <p className="text-sm text-blue-100">Massive capital shortage creating premium returns for those who can structure and execute sophisticated financing solutions</p>
          </div>
          
          <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm">
            <div className="text-3xl font-light text-blue-400 mb-2">$13.5B</div>
            <div className="text-sm uppercase tracking-wider mb-4">Nigeria O&G Investment 2024</div>
            <p className="text-sm text-blue-100">Nigeria captured 75% of Africa's oil & gas investment in 2024 — international majors are rushing back to Lagos</p>
          </div>
          
          <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm">
            <div className="text-3xl font-light text-blue-400 mb-2">$2.06T</div>
            <div className="text-sm uppercase tracking-wider mb-4">Energy Transition Market</div>
            <p className="text-sm text-blue-100">Global energy transition creating new asset classes and financing structures for early movers</p>
          </div>
          
          <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm">
            <div className="text-3xl font-light text-blue-400 mb-2">$633B</div>
            <div className="text-sm uppercase tracking-wider mb-4">Trapped Working Capital</div>
            <p className="text-sm text-blue-100">Operational inefficiencies in energy supply chains represent massive value unlock opportunities</p>
          </div>
        </div>
      </section>

      {/* Transformation Story Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">The Transformation</h2>
        <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm space-y-6">
          <p className="text-blue-100">In February 2024, Nigeria's President issued three landmark directives that changed everything. Within 10 months, Shell committed $5 billion to Bonga North — the first major deepwater project in over a decade. TotalEnergies followed with $566 million for Ubeta Gas. Suddenly, IOCs that had written off West Africa were competing for Nigerian assets.</p>
          
          <p className="text-lg font-semibold text-blue-400">This isn't coincidence. It's strategic repositioning.</p>
          
          <p className="text-blue-100">While Venezuela struggles with sanctions and global energy transition accelerates, Nigeria offers what international energy capital craves: stable production, world-class geology, and a government that understands what investors need. Local producers who missed the previous boom now have a second chance — but only if they can navigate the sophisticated financing and partnership structures that today's market demands.</p>
          
          <p className="text-blue-100"><span className="text-lg font-semibold text-blue-400">The window is narrow.</span> As global energy transition accelerates, the next 5-7 years represent the final major wave of oil & gas investment. Nigeria is positioning to capture the lion's share of this capital — $30+ billion in deepwater investments alone by 2029.</p>
        </div>
      </section>

      {/* Market Insights Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-4">The Capital Rush</h3>
            <p className="text-blue-100">Africa's oil & gas sector growing at <span className="text-blue-400 font-semibold">5.5%+ CAGR</span> with 471 new projects through 2028. Smart money is moving fast — those who structure deals now capture the premium returns.</p>
          </div>
          
          <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-4">First Mover Advantage</h3>
            <p className="text-blue-100"><span className="text-blue-400 font-semibold">$6.47T</span> energy transition market by 2032 creates entirely new financing categories. Early partnerships with local champions will define who wins the next decade.</p>
          </div>
          
          <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-4">The Lagos Gateway</h3>
            <p className="text-blue-100">Nigeria's <span className="text-blue-400 font-semibold">1.5M bpd</span> production + <span className="text-blue-400 font-semibold">$30B</span> deepwater pipeline = the most compelling energy investment story in Africa. But access requires local expertise and strategic positioning.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-12 rounded-2xl border border-blue-400/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Position for the Wave</h2>
          <p className="text-xl text-blue-100 mb-4">The convergence of Nigerian energy reforms, massive capital flows, and energy transition financing is creating generational wealth opportunities. Success requires precision timing, sophisticated structures, and local market intelligence.</p>
          <p className="text-xl font-semibold text-blue-400">The question isn't whether this opportunity exists. It's whether you'll be positioned to capture it.</p>
        </div>
      </section>
    </main>
  );
}
