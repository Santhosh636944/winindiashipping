import { useState } from 'react';
import { motion } from 'motion/react';
import { Ship, Globe, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onQuoteClick: () => void;
}

export default function Hero({ onQuoteClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy pt-20"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 bg-[#040c1d]">
        <img
          src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1920&q=80"
          alt="Premium Cinematic Maritime Cargo Vessel"
          className="w-full h-full object-cover object-center opacity-30 animate-pan-slow"
          referrerPolicy="no-referrer"
          id="hero-bg-image"
        />
        {/* Triple-layer robust dark overlay for perfect typography visibility */}
        <div className="absolute inset-0 bg-[#071739]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071739] via-[#071739]/95 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071739] via-transparent to-[#071739]/60" />
      </div>

      {/* Floating Ocean Route Lines (Vector SVG) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M -100 200 Q 300 150 700 450 T 1500 250"
          fill="none"
          stroke="#C8A96B"
          strokeWidth="1.5"
          strokeDasharray="8,8"
          initial={{ strokeDashoffset: 100 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
        />
        <motion.path
          d="M 100 800 Q 500 550 900 700 T 1900 600"
          fill="none"
          stroke="#0A4D8C"
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -100 }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        />
        {/* Shipping Route Intersection Coordinates */}
        <circle cx="300" cy="150" r="3" fill="#C8A96B" className="animate-ping" />
        <circle cx="700" cy="450" r="4" fill="#0A4D8C" />
        <circle cx="900" cy="700" r="3" fill="#C8A96B" className="animate-ping" />
      </svg>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text and Actions (Left Col) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-ocean/30 backdrop-blur-sm border border-gold/30 px-3.5 py-1.5 rounded-full text-gold text-xs uppercase tracking-[0.2em] font-semibold mb-6"
            >
              <Ship className="w-3.5 h-3.5 text-gold" />
              <span>Elite Global Maritime Carriers</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-white tracking-tight leading-[1.1] mb-6"
            >
              WININDIA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gold to-white">
                SHIPPING & LOGISTICS
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-sans text-base sm:text-lg md:text-xl text-white/75 leading-relaxed max-w-xl mb-10 pl-1 border-l-2 border-gold/40"
            >
              Beyond Borders, Beyond Expectations. Connecting major oceans, simplifying customs clearance, and securing complex supply chains with world-class maritime logistics.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={onQuoteClick}
                className="group flex items-center gap-2 font-sans font-bold text-sm uppercase tracking-wider text-navy bg-gold hover:bg-white border border-gold hover:border-white px-7 py-4 rounded-lg shadow-[0_8px_25px_rgba(200,169,107,0.4)] hover:shadow-[0_8px_25px_rgba(255,255,255,0.2)] transition-all duration-300"
                id="hero-cta-quote"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Micro Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="grid grid-cols-3 gap-6 sm:gap-10 mt-12 sm:mt-16 pt-8 border-t border-white/10 w-full max-w-md"
            >
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold text-gold">150+</span>
                <span className="font-sans text-[11px] text-white/50 uppercase tracking-wider mt-1">Ports Connected</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold text-white">98.6%</span>
                <span className="font-sans text-[11px] text-white/50 uppercase tracking-wider mt-1">On-Time rate</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold text-white">24/7</span>
                <span className="font-sans text-[11px] text-white/50 uppercase tracking-wider mt-1">Global Support</span>
              </div>
            </motion.div>
          </div>

          {/* Luxury Telemetry Widget (Right Col) */}
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative p-6 rounded-2xl bg-gradient-to-br from-navy/95 to-ocean/30 border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md overflow-hidden group hover:border-gold/40 transition-all duration-500"
            >
              {/* Decorative light reflection */}
              <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-gold/10 blur-3xl group-hover:bg-gold/15 transition-all duration-500" />

              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">LIVE FLEET TELEMETRY</span>
                </div>
                <Globe className="w-4 h-4 text-gold" />
              </div>

              {/* Vessel Track info */}
              <div className="space-y-4">
                <div className="p-3.5 rounded-lg bg-navy/60 border border-white/5">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-sans font-bold text-xs text-white">WN SOVEREIGN</span>
                    <span className="font-mono text-[10px] text-gold uppercase tracking-wider">In Transit</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-1.5">
                    <div className="bg-gold h-full rounded-full w-[45%] animate-pulse" />
                  </div>
                  <div className="flex justify-between text-[10px] text-white/50 mt-1.5 font-mono">
                    <span>Chennai (INMAA)</span>
                    <span>Rotterdam (NLRTM)</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-navy/60 border border-white/5">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-sans font-bold text-xs text-white">WN MONARCH</span>
                    <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider">Customs Cleared</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-1.5">
                    <div className="bg-emerald-400 h-full rounded-full w-full" />
                  </div>
                  <div className="flex justify-between text-[10px] text-white/50 mt-1.5 font-mono">
                    <span>Chennai (INMAA)</span>
                    <span>Jebel Ali (AEJEA)</span>
                  </div>
                </div>
              </div>

              {/* Core attributes */}
              <div className="grid grid-cols-2 gap-4 mt-5 pt-5 border-t border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded bg-gold/10 border border-gold/20">
                    <Clock className="w-4 h-4 text-gold" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] text-white/40 uppercase leading-none">Response Time</span>
                    <span className="font-sans font-bold text-xs text-white mt-1">&lt; 15 Mins</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded bg-ocean/30 border border-ocean/40">
                    <ShieldCheck className="w-4 h-4 text-sky-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] text-white/40 uppercase leading-none">Security Rating</span>
                    <span className="font-sans font-bold text-xs text-white mt-1">Class AAA</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating particles background effect */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy to-transparent pointer-events-none z-10" />
    </section>
  );
}
