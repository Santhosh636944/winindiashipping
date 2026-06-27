import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Compass, ArrowRight, Anchor, Info } from 'lucide-react';
import { PORTS, ROUTES } from '../data';
import { NetworkPort } from '../types';

export default function GlobalNetwork() {
  const [selectedPort, setSelectedPort] = useState<NetworkPort>(PORTS.chennai);
  const [hoveredPort, setHoveredPort] = useState<NetworkPort | null>(null);

  // Map coordinates to SVG pixels based on a 1000x500 viewBox
  const mapX = (percent: number) => (percent / 100) * 1000;
  const mapY = (percent: number) => (percent / 100) * 500;

  // Find routes connected to selected port
  const activeRoutes = ROUTES.filter(
    (route) => route.from.id === selectedPort.id || route.to.id === selectedPort.id
  );

  return (
    <section id="network" className="py-14 sm:py-20 md:py-24 bg-navy relative overflow-hidden">
      {/* Background soft glow and grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-to-tr from-ocean/5 via-transparent to-gold/5 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-6 h-[1px] bg-gold" />
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-gold font-bold">TRANSIT HIGHWAYS</span>
            <span className="w-6 h-[1px] bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight"
          >
            Our Global Maritime Network
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-sm text-white/60 max-w-xl mt-4"
          >
            Interactive marine routing system. Select any port node to filter active WININDIA shipping lanes and monitor real-time vessel vectors.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Interactive World Map (Col 8) */}
          <div className="lg:col-span-8 bg-gradient-to-b from-navy/95 to-[#050f24] rounded-2xl border border-white/10 p-4 sm:p-6 shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between">
            
            {/* Top Info Header */}
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                ACTIVE SEA LANES & MARINE CORRIDORS
              </span>
              <div className="flex items-center gap-2 font-sans text-xs text-gold">
                <span className="w-2.5 h-2.5 rounded-full bg-gold animate-ping" />
                <span className="font-semibold">Interactive</span>
              </div>
            </div>

            {/* Map Canvas Containment */}
            <div className="relative w-full overflow-x-auto select-none py-2" id="world-map-container">
              <div className="min-w-[700px] relative aspect-[1000/500]">
                
                {/* World Map Background Silhouettes (Constructed via clean SVG Paths representing continents conceptually) */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-10 text-white/40"
                  viewBox="0 0 1000 500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Faint Latitude/Longitude Grid Lines */}
                  <line x1="0" y1="125" x2="1000" y2="125" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
                  <line x1="0" y1="250" x2="1000" y2="250" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
                  <line x1="0" y1="375" x2="1000" y2="375" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
                  <line x1="200" y1="0" x2="200" y2="500" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
                  <line x1="400" y1="0" x2="400" y2="500" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
                  <line x1="600" y1="0" x2="600" y2="500" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
                  <line x1="800" y1="0" x2="800" y2="500" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />

                  {/* Conceptual Continent Shapes */}
                  {/* North America */}
                  <path d="M 50 100 L 150 80 L 250 110 L 280 180 L 200 240 L 180 200 L 120 220 Z" fill="currentColor" />
                  {/* South America */}
                  <path d="M 200 250 L 260 270 L 290 320 L 270 420 L 220 450 L 200 350 Z" fill="currentColor" />
                  {/* Eurasia */}
                  <path d="M 380 100 L 480 80 L 580 90 L 780 70 L 880 100 L 920 180 L 880 260 L 750 280 L 680 250 L 550 280 L 450 250 L 380 180 Z" fill="currentColor" />
                  {/* Africa */}
                  <path d="M 450 250 L 520 220 L 600 260 L 620 310 L 580 400 L 520 420 L 480 340 Z" fill="currentColor" />
                  {/* Australia */}
                  <path d="M 800 340 L 880 330 L 910 380 L 840 410 L 780 380 Z" fill="currentColor" />
                  {/* Greenland */}
                  <path d="M 280 40 L 350 35 L 320 70 Z" fill="currentColor" />
                </svg>

                {/* SVG Route Paths & Cargo Flow Animations */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-10"
                  viewBox="0 0 1000 500"
                >
                  {ROUTES.map((route) => {
                    const x1 = mapX(route.from.x);
                    const y1 = mapY(route.from.y);
                    const x2 = mapX(route.to.x);
                    const y2 = mapY(route.to.y);

                    // Bezier Curve calculations for elegant shipping arcs
                    const cx = (x1 + x2) / 2;
                    const cy = (y1 + y2) / 2 - 40; // Curve slightly upwards

                    const pathString = `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
                    const isSelectedRoute = route.from.id === selectedPort.id || route.to.id === selectedPort.id;

                    return (
                      <g key={route.id}>
                        {/* Underlay / Glow Lane */}
                        <path
                          d={pathString}
                          fill="none"
                          stroke={isSelectedRoute ? '#C8A96B' : '#0A4D8C'}
                          strokeWidth={isSelectedRoute ? '2.5' : '1'}
                          className="transition-all duration-500"
                          opacity={isSelectedRoute ? 0.4 : 0.15}
                        />

                        {/* Animated Cargo Flow Dot */}
                        {route.active && (
                          <motion.path
                            d={pathString}
                            fill="none"
                            stroke={isSelectedRoute ? '#C8A96B' : '#0A4D8C'}
                            strokeWidth={isSelectedRoute ? '3.5' : '1.5'}
                            strokeDasharray="6,250"
                            initial={{ strokeDashoffset: 256 }}
                            animate={{ strokeDashoffset: 0 }}
                            transition={{
                              repeat: Infinity,
                              duration: isSelectedRoute ? 8 : 12,
                              ease: 'linear',
                            }}
                            opacity={isSelectedRoute ? 0.9 : 0.4}
                          />
                        )}
                      </g>
                    );
                  })}
                </svg>

                {/* Port Nodes Placement */}
                {Object.values(PORTS).map((port) => {
                  const x = mapX(port.x);
                  const y = mapY(port.y);
                  const isSelected = selectedPort.id === port.id;
                  const isHovered = hoveredPort?.id === port.id;

                  return (
                    <div
                      key={port.id}
                      style={{ left: `${port.x}%`, top: `${port.y}%` }}
                      onMouseEnter={() => setHoveredPort(port)}
                      onMouseLeave={() => setHoveredPort(null)}
                      onClick={() => setSelectedPort(port)}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
                      id={`port-node-${port.id}`}
                    >
                      {/* Pulsing Active Ripple */}
                      <div
                        className={`absolute -inset-4 rounded-full border transition-all duration-500 ${
                          isSelected
                            ? 'border-gold/30 bg-gold/5 scale-110 animate-ping'
                            : 'border-ocean/20 bg-ocean/5 group-hover:scale-105'
                        }`}
                      />

                      {/* Port Circle Anchor */}
                      <div
                        className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)] ${
                          isSelected
                            ? 'bg-gold border-white scale-125 shadow-[0_0_12px_#C8A96B]'
                            : 'bg-ocean border-gold/60 group-hover:bg-gold'
                        }`}
                      />

                      {/* Tooltip Label */}
                      <div
                        className={`absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap py-1 px-2.5 rounded bg-navy/95 border text-[10px] font-sans font-bold uppercase transition-all duration-300 ${
                          isSelected
                            ? 'border-gold text-gold opacity-100'
                            : isHovered
                            ? 'border-white/30 text-white opacity-100 scale-102'
                            : 'border-transparent text-white/50 opacity-80'
                        }`}
                      >
                        {port.city}
                      </div>
                    </div>
                  );
                })}

              </div>
            </div>

            {/* Bottom Controls / Help Text */}
            <div className="flex items-center gap-2 mt-4 bg-white/5 p-3 rounded-lg border border-white/5 text-[11px] text-white/50">
              <Info className="w-3.5 h-3.5 text-gold shrink-0" />
              <span>Map coordinates are stylized representation of international sea terminals. Click nodes to switch port hub details.</span>
            </div>
          </div>

          {/* Connected Hub Details Panel (Col 4) */}
          <div className="lg:col-span-4 bg-gradient-to-b from-[#050f24] to-navy rounded-2xl border border-white/10 p-6 sm:p-8 shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between">
            
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-white/10 mb-6">
                <div className="p-2 bg-gold/10 text-gold rounded-lg border border-gold/30">
                  <Anchor className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                    {selectedPort.name}
                  </h3>
                  <span className="font-sans text-[10px] text-white/40 uppercase tracking-widest leading-none">
                    {selectedPort.city}, {selectedPort.country}
                  </span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                  <span className="font-mono text-[9px] text-white/40 uppercase block mb-1">Status</span>
                  <span className="font-sans font-bold text-xs text-emerald-400">OPERATIONAL</span>
                </div>
                <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                  <span className="font-mono text-[9px] text-white/40 uppercase block mb-1">Hub Classification</span>
                  <span className="font-sans font-bold text-xs text-gold uppercase">
                    {selectedPort.isHub ? 'PRIMARY HUB' : 'TRANSIT GATEWAY'}
                  </span>
                </div>
              </div>

              {/* Active Shipping lanes header */}
              <h4 className="font-mono text-[10px] text-gold uppercase tracking-wider mb-3">
                Active Connecting Lanes
              </h4>

              {/* Lanes detail list */}
              <div className="space-y-3">
                <AnimatePresence mode="popLayout">
                  {activeRoutes.map((route) => {
                    const dest = route.from.id === selectedPort.id ? route.to : route.from;
                    return (
                      <motion.div
                        key={route.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.3 }}
                        className="p-3.5 rounded-lg bg-navy/60 border border-white/5 flex items-center justify-between hover:border-gold/30 transition-all duration-300"
                      >
                        <div className="flex flex-col">
                          <span className="font-sans font-bold text-xs text-white">
                            {dest.city} Corridor
                          </span>
                          <span className="font-sans text-[10px] text-white/40">
                            {dest.name} ({dest.country})
                          </span>
                        </div>
                        <div className="text-right flex flex-col">
                          <span className="font-mono text-[11px] text-gold font-semibold">
                            {dest.id === 'rotterdam' ? '24 Days' : dest.id === 'singapore' ? '8 Days' : dest.id === 'dubai' ? '12 Days' : '15 Days'}
                          </span>
                          <span className="font-sans text-[9px] text-white/30 uppercase tracking-wider">Est. Transit</span>
                        </div>
                      </motion.div>
                    );
                  })}
                  {activeRoutes.length === 0 && (
                    <div className="text-center py-8 border border-dashed border-white/10 rounded-lg text-white/40 font-sans text-xs">
                      No active direct routes from this node.
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Call to action in panel */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-between font-sans font-bold text-xs uppercase tracking-wider text-navy bg-gold hover:bg-white px-5 py-4 rounded-xl shadow-lg transition-all duration-300 cursor-pointer"
              >
                <span>Book Vessel Space</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
