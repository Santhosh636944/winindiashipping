import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import GlobalNetwork from './components/GlobalNetwork';
import Footer from './components/Footer';
import QuoteRequestModal from './components/QuoteRequestModal';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="bg-navy min-h-screen text-white select-text selection:bg-gold/30 selection:text-white">
      {/* Premium Glassmorphic Navbar */}
      <Navbar
        onQuoteClick={() => setIsQuoteOpen(true)}
      />

      {/* Main Corporate Sections */}
      <main>
        {/* Full-screen Cinematic Hero */}
        <Hero
          onQuoteClick={() => setIsQuoteOpen(true)}
        />

        {/* Corporate Profile (About) */}
        <About />

        {/* Dynamic Service Specifications */}
        <Services />

        {/* Premium Trust Bento (Why Choose Us) */}
        <WhyChooseUs />

        {/* High-tech Interactive World Route Map */}
        <GlobalNetwork />
      </main>

      {/* ISO Certified Corporate Footer */}
      <Footer
        onQuoteClick={() => setIsQuoteOpen(true)}
      />

      {/* Interactive Floating Quote Rate Calculator Modal */}
      <QuoteRequestModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </div>
  );
}
