"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [hovered, setHovered] = useState<string | null>(null);

  const marketStats = [
    { label: 'Nigerian Energy Access', value: 60, subtitle: 'Population lacking reliable power', color: '#60a5fa' },
    { label: 'Annual Economic Loss', value: 75, subtitle: '₦10T+ lost to poor power', color: '#818cf8' },
    { label: 'Affected Population', value: 85, subtitle: '85M people in energy poverty', color: '#6366f1' },
    { label: 'Grid Power', value: 40, subtitle: '4000MW average generation', color: '#4f46e5' }
  ];

  const createChartData = (value: number, color: string) => ({
    datasets: [{
      data: [value, 100 - value],
      backgroundColor: [color, '#1f2937'],
      borderWidth: 0,
      cutout: '75%'
    }]
  });

  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-white text-gray-900">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/Hero_image.png')] bg-center bg-cover bg-no-repeat opacity-100"></div>
        </div>
        
        {/* Content Layer */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center pt-32">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              UNLOCK{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                POTENTIAL
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto">
              Strategic finance meets operational excellence. Axinity Partners provides
              the precision, networks, and execution that transform energy sector
              challenges into opportunities for sustainable growth.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="#services"
                onClick={(e) => scrollToSection(e, 'services')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transition-all duration-300 text-lg rounded-md"
              >
                Explore Our Services
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="px-8 py-4 bg-transparent border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 text-lg rounded-md"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Market Statistics Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Nigeria&apos;s Energy Market
        </h2>
        <p className="text-lg text-blue-200 mb-12 max-w-3xl mx-auto text-center">
          Africa&apos;s largest economy stands at the cusp of an energy revolution,
          presenting unprecedented opportunities for strategic investors and partners.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {marketStats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center hover-scale animate-fade-in-scale"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Doughnut 
                  data={createChartData(stat.value, stat.color)}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: { display: false },
                      tooltip: { enabled: false }
                    }
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white stat-value">{stat.value}%</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{stat.label}</h3>
              <p className="text-sm text-blue-200">{stat.subtitle}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-blue-200 max-w-3xl mx-auto mb-8">
            With landmark regulatory reforms and massive discoveries driving renewed international 
            investment, Nigeria&apos;s energy sector presents a unique opportunity for sophisticated 
            investors and ambitious local producers.
          </p>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section id="services" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Left Content */}
          <div className="md:col-span-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">
              CORE CAPABILITIES
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"></div>
            <p className="text-lg text-blue-100 mb-8">
              At Axinity Partners, we deliver integrated solutions across structured finance
              and commercial operations, transforming energy sector challenges into
              sustainable growth opportunities.
            </p>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 text-lg"
            >
              PARTNER WITH US
            </a>
          </div>

          {/* Right Cards */}
          <div className="md:col-span-8 grid md:grid-cols-2 gap-8">
            {/* Strategic Advisory Card */}
            <a href="/strategic-advisory" className="group block cursor-pointer transform hover:scale-[1.02] transition-all duration-300">
              <div 
                className="relative h-[300px] mb-6 overflow-hidden"
                style={{ 
                  backgroundImage: "url('/advisory.PNG')", 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center' 
                }}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/80 transition-all duration-500"></div>
                {/* Hover Content */}
                <div className="absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center">
                  <h4 className="text-lg font-semibold mb-4">Core Services:</h4>
                  <ul className="list-disc list-inside mb-4 text-blue-100 space-y-2">
                    <li>Structured Finance Solutions</li>
                    <li>Capital Structuring & Co-Investment</li>
                    <li>Strategic Origination & Partnership Advisory</li>
                  </ul>
                  <p className="text-sm text-blue-100 mb-4">
                    Value Proposition: We architect the financial foundations that enable growth — from sophisticated
                    financing structures to strategic partnerships that open new markets and opportunities.
                  </p>
                  <span className="text-blue-400 inline-flex items-center mt-2">
                    Learn More 
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Strategic Advisory</h3>
              <p className="text-blue-100">
                Financial structuring and strategic partnerships that unlock value in emerging markets
              </p>
            </a>

            {/* Commercial Operations Card */}
            <a href="/commercial-operations" className="group block cursor-pointer transform hover:scale-[1.02] transition-all duration-300">
              <div 
                className="relative h-[300px] mb-6 overflow-hidden"
                style={{ 
                  backgroundImage: "url('/operations.PNG')", 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center' 
                }}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/80 transition-all duration-500"></div>
                {/* Hover Content */}
                <div className="absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center">
                  <h4 className="text-lg font-semibold mb-4">Core Services:</h4>
                  <ul className="list-disc list-inside mb-4 text-blue-100 space-y-2">
                    <li>Energy Trading & Risk Management</li>
                    <li>Integrated Supply Chain & Logistics</li>
                    <li>Operations & Process Optimization</li>
                  </ul>
                  <p className="text-sm text-blue-100 mb-4">
                    Value Proposition: We deliver operational excellence where it matters most — optimizing trading positions,
                    managing complex supply chains, and ensuring seamless execution across global markets.
                  </p>
                  <span className="text-blue-400 inline-flex items-center mt-2">
                    Learn More 
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Commercial Operations</h3>
              <p className="text-blue-100">
                Trading excellence and operational efficiency across the energy value chain
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Built for Results, Not Headcount
        </h2>
        <p className="text-lg text-blue-100 mb-8">
          Axinity Partners operates at the intersection of structured finance,
          energy logistics, and commercial execution. We support industry leaders
          through precision-assembled teams and strategic networks that deliver
          outcomes when they matter most.
        </p>
        <p className="text-blue-100 mb-8">
          In the energy sector's most demanding corridors, success depends not on
          the size of your team, but on the caliber of expertise you can deploy.
          That's why we've built a platform designed for agility, precision, and
          results.
        </p>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <ul className="space-y-2">
            <li>
              <b>Founder-led oversight</b> ensures accountability and strategic
              focus
            </li>
            <li>
              <b>Network-powered delivery</b> provides scale without compromise
            </li>
          </ul>
          <ul className="space-y-2">
            <li>
              <b>Sector-specific expertise</b> across finance, trading, and
              operations
            </li>
            <li>
              <b>Cross-border capabilities</b> with deep emerging market knowledge
            </li>
          </ul>
        </div>
        <a
          href="/about"
          className="inline-block mt-8 text-blue-400 hover:underline"
        >
          Learn Our Story
        </a>
      </section>

      {/* Network Teaser Section */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Our Strategic Network
        </h2>
        <p className="text-lg text-blue-100 mb-10 text-center max-w-2xl mx-auto">
          The strength of Axinity Partners lies in the quality of our
          collaborators. We work through a selective, high-trust network of
          professionals with deep sector expertise — assembled for each mandate
          based on its specific needs.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white/5 rounded-xl p-6 shadow-lg flex flex-col items-center">
            <span className="text-3xl mb-2">🏦</span>
            <h4 className="font-semibold mb-1">Finance Structurers</h4>
            <p className="text-blue-100 text-center text-sm">
              Former investment bankers and structured finance experts
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 shadow-lg flex flex-col items-center">
            <span className="text-3xl mb-2">📈</span>
            <h4 className="font-semibold mb-1">Trading Specialists</h4>
            <p className="text-blue-100 text-center text-sm">
              Commodity and marine fuel traders with market-making experience
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 shadow-lg flex flex-col items-center">
            <span className="text-3xl mb-2">🔗</span>
            <h4 className="font-semibold mb-1">Supply Chain Experts</h4>
            <p className="text-blue-100 text-center text-sm">
              Procurement specialists and logistics managers
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 shadow-lg flex flex-col items-center">
            <span className="text-3xl mb-2">⚖️</span>
            <h4 className="font-semibold mb-1">Legal & Compliance</h4>
            <p className="text-blue-100 text-center text-sm">
              Advisors across trade and cross-border jurisdictions
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 shadow-lg flex flex-col items-center">
            <span className="text-3xl mb-2">🏭</span>
            <h4 className="font-semibold mb-1">Operations Experts</h4>
            <p className="text-blue-100 text-center text-sm">
              Oilfield operations and terminal logistics specialists
            </p>
          </div>
        </div>
        <p className="text-blue-100 text-center mb-6">
          We do not outsource — we assemble. Every engagement benefits from
          Axinity's strategic oversight and is supported only where needed, by
          those with the exact experience required to deliver results.
        </p>
        <p className="text-blue-100 text-center mb-6">
          This model allows us to operate with the responsiveness of a boutique,
          and the reach of a much larger firm — without compromise.
        </p>
        <div className="flex justify-center">
          <a
            href="/network"
            className="text-blue-400 hover:underline"
          >
            Explore Our Network Approach
          </a>
        </div>
      </section>

      {/* Why Axinity Section */}
      <section className="py-20 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Where Precision Meets Performance
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 rounded-xl p-8 shadow-lg animate-fade-in-up">
            <h3 className="text-xl font-semibold mb-2">Expertise That Matters</h3>
            <p className="text-blue-100">
              Two decades of market evolution have taught us one truth: in energy
              finance and logistics, expertise travels in small circles. Axinity
              Partners operates within those circles — where the right structure,
              the right timing, and the right execution separate success from
              everything else.
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-8 shadow-lg animate-fade-in-up delay-200">
            <h3 className="text-xl font-semibold mb-2">Networks That Deliver</h3>
            <p className="text-blue-100">
              Complex energy transactions require more than individual expertise —
              they demand orchestrated collaboration. Our strategic network model
              ensures you have access to exactly the right professionals, at
              exactly the right moment, without the overhead of maintaining
              full-time specialized teams.
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-8 shadow-lg animate-fade-in-up delay-400">
            <h3 className="text-xl font-semibold mb-2">Results That Count</h3>
            <p className="text-blue-100">
              We measure success not by meetings held or reports generated, but by
              value created and objectives achieved. Every mandate is structured
              with clear outcomes in mind, supported by the networks and expertise
              necessary to deliver them.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Navigate Complexity?
        </h2>
        <p className="text-lg text-blue-100 mb-8">
          Connect with our team to discuss your energy sector challenges and
          opportunities. Whether you're structuring a complex financing
          arrangement, optimizing trading operations, or exploring new market
          opportunities, we're here to provide the precision and expertise your
          objectives demand.
        </p>
        <div className="mb-6">
          <p className="mb-2">
            <b>Email:</b>{" "}
            <a
              href="mailto:info@axinitypartners.com"
              className="text-blue-400 hover:underline"
            >
              info@axinitypartners.com
            </a>
          </p>
          <p className="mb-2">
            <b>Location:</b> Dubai, U.A.E
          </p>
          <p className="mb-2">
            <b>Phone:</b>{" "}
            <a
              href="tel:+971506581369"
              className="text-blue-400 hover:underline"
            >
              + (971)-50 6581369
            </a>
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          {/* Download Our Capabilities Overview button removed as requested */}
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
