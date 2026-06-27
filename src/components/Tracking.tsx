import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MapPin, Calendar, Anchor, ShieldCheck, Box, HelpCircle, ArrowRight, CornerDownRight } from 'lucide-react';
import { TRACKING_DATABASE } from '../data';
import { TrackingDetails, TrackingMilestone } from '../types';

export default function Tracking() {
  const [trackingId, setTrackingId] = useState('');
  const [activeTracking, setActiveTracking] = useState<TrackingDetails | null>(null);
  const [searchError, setSearchError] = useState(false);

  // Pre-loaded quick demo IDs
  const demoIds = [
    { id: 'WIN-8940-IND', label: 'Rotterdam (In Transit)' },
    { id: 'WIN-6369-DBI', label: 'Dubai (Customs)' },
    { id: 'WIN-1022-NYC', label: 'New York (Delivered)' }
  ];

  const handleTrack = (idToSearch: string) => {
    const cleanId = idToSearch.trim().toUpperCase();
    if (!cleanId) return;

    if (TRACKING_DATABASE[cleanId]) {
      setActiveTracking(TRACKING_DATABASE[cleanId]);
      setSearchError(false);
    } else {
      // Create a dynamic simulated cargo journey for custom search IDs!
      // This makes the app fully interactive and responsive
      const simulatedData: TrackingDetails = {
        id: cleanId,
        status: 'In Transit',
        origin: 'Port of Chennai, India (INMAA)',
        destination: 'Port of Singapore (SGSIN)',
        vesselName: 'WININDIA ENTERPRISE',
        voyageNumber: 'WN-SIM-' + Math.floor(Math.random() * 900 + 100),
        eta: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        cargoType: '40ft Dry Van Container (General Consolidated Freight)',
        weight: '19,420 kg',
        carrier: 'WININDIA SHIPPING',
        milestones: [
          {
            title: 'Container Loaded',
            location: 'Port of Chennai Terminal 1',
            date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            time: '08:00',
            status: 'completed',
            description: 'Cargo packed, inspected, sealed, and hoisted aboard WININDIA ENTERPRISE.'
          },
          {
            title: 'Departed Port',
            location: 'Port of Chennai Marine Exit',
            date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            time: '14:20',
            status: 'completed',
            description: 'Vessel port clearances cleared, captain initiated eastbound ocean transit.'
          },
          {
            title: 'Ocean Transit',
            location: 'Bay of Bengal Corridor',
            date: new Date().toISOString().split('T')[0],
            time: 'Current',
            status: 'current',
            description: 'Simulated container tracking: Vessel heading 110° East, speeds average 19.5 knots.'
          },
          {
            title: 'Arrived at Destination',
            location: 'Port of Singapore (SGSIN)',
            date: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            time: 'Estimated',
            status: 'upcoming',
            description: 'Offloading, customs release, and regional carrier routing.'
          }
        ]
      };
      setActiveTracking(simulatedData);
      setSearchError(false);
    }
  };

  const handleQuickDemoClick = (id: string) => {
    setTrackingId(id);
    handleTrack(id);
  };

  const handleClear = () => {
    setTrackingId('');
    setActiveTracking(null);
    setSearchError(false);
  };

  return (
    <section id="tracking" className="py-24 bg-[#050f24] relative overflow-hidden">
      {/* Decorative ambient background wave */}
      <div className="absolute -right-40 top-1/4 w-[500px] h-[500px] rounded-full bg-ocean/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-6 h-[1px] bg-gold" />
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-gold font-bold">CARGO LOCATION PLATFORM</span>
            <span className="w-6 h-[1px] bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight"
          >
            Shipment Tracking
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-sm text-white/60 max-w-xl mt-4"
          >
            Instantly check the status of your container or shipping consignment. Type your Bill of Lading / container code below.
          </motion.p>
        </div>

        {/* Form and Timeline Stepper Container */}
        <div className="max-w-4xl mx-auto">
          
          {/* Tracking Search Console Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-navy/95 to-navy border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.5)] mb-8"
          >
            <div className="flex flex-col gap-4">
              <label htmlFor="tracking-input" className="font-display font-semibold text-xs text-white uppercase tracking-wider">
                Enter Tracking ID / Container Number:
              </label>
              
              {/* Custom High Contrast Input Bar */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Box className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
                  <input
                    id="tracking-input"
                    type="text"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    placeholder="e.g. WIN-8940-IND, MSC-2026-X, etc."
                    className="w-full bg-[#050f24] border border-white/15 focus:border-gold rounded-xl py-4 pl-12 pr-4 text-white text-sm font-mono tracking-widest placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-gold transition-all"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleTrack(trackingId);
                    }}
                  />
                </div>
                <button
                  onClick={() => handleTrack(trackingId)}
                  className="bg-gold text-navy hover:bg-white border border-gold hover:border-white rounded-xl px-8 py-4 font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(200,169,107,0.3)] hover:shadow-lg active:scale-95 cursor-pointer"
                  id="btn-track-cargo"
                >
                  <Search className="w-4 h-4" />
                  <span>Track Shipment</span>
                </button>
              </div>

              {/* Demo Pre-loads helper */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <span className="font-sans text-[11px] text-white/40 uppercase tracking-wider flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5" />
                  Try live demo codes:
                </span>
                <div className="flex flex-wrap gap-2">
                  {demoIds.map((demo) => (
                    <button
                      key={demo.id}
                      onClick={() => handleQuickDemoClick(demo.id)}
                      className="font-mono text-[10px] text-white bg-white/5 hover:bg-gold/10 hover:text-gold hover:border-gold/30 border border-white/10 px-2.5 py-1 rounded-md transition-all duration-300 cursor-pointer"
                    >
                      {demo.id}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Active Live Result Dashboard */}
          <AnimatePresence mode="wait">
            {activeTracking && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-b from-navy/95 to-[#050f24] rounded-2xl border border-gold/25 shadow-[0_20px_40px_rgba(0,0,0,0.6)] overflow-hidden"
              >
                
                {/* Result Header Panel */}
                <div className="bg-navy border-b border-white/10 p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs text-white/50 uppercase tracking-widest">Cargo Consignment</span>
                      <span className="font-mono font-bold text-sm text-gold bg-gold/10 border border-gold/30 px-2.5 py-0.5 rounded">
                        {activeTracking.id}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Anchor className="w-4 h-4 text-gold shrink-0" />
                      <span>{activeTracking.vesselName}</span>
                      <span className="font-sans font-medium text-xs text-white/40 font-mono">Voyage {activeTracking.voyageNumber}</span>
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 md:text-right gap-6">
                    <div>
                      <span className="font-mono text-[9px] text-white/40 uppercase block mb-1">Status</span>
                      <span className="font-sans font-bold text-xs uppercase text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full">
                        {activeTracking.status}
                      </span>
                    </div>
                    <div>
                      <span className="font-mono text-[9px] text-white/40 uppercase block mb-1">ETA Destination</span>
                      <span className="font-sans font-bold text-xs text-white flex items-center md:justify-end gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-gold" />
                        {activeTracking.eta}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Logistics details specifications panel */}
                <div className="grid sm:grid-cols-3 gap-4 p-6 sm:px-8 border-b border-white/5 bg-[#040b1b]">
                  <div className="space-y-1 border-b sm:border-b-0 sm:border-r border-white/5 pb-3 sm:pb-0">
                    <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest block">Inland Origin</span>
                    <span className="font-sans font-bold text-xs text-white leading-normal block">
                      {activeTracking.origin}
                    </span>
                  </div>
                  <div className="space-y-1 border-b sm:border-b-0 sm:border-r border-white/5 pb-3 sm:pb-0 sm:pl-4">
                    <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest block">Cargo Discharge Port</span>
                    <span className="font-sans font-bold text-xs text-white leading-normal block">
                      {activeTracking.destination}
                    </span>
                  </div>
                  <div className="space-y-1 sm:pl-4">
                    <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest block">Cargo Specifications</span>
                    <span className="font-sans font-bold text-xs text-white leading-normal block">
                      {activeTracking.cargoType} ({activeTracking.weight})
                    </span>
                  </div>
                </div>

                {/* Milestone Stepper (Vertical Timeline) */}
                <div className="p-6 sm:p-8">
                  <h4 className="font-mono text-[10px] text-gold uppercase tracking-wider mb-6 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Consignment Milestone Logs</span>
                  </h4>

                  <div className="relative pl-6 sm:pl-8 border-l border-white/10 ml-3 space-y-8 py-2">
                    {activeTracking.milestones.map((milestone, index) => {
                      const isCompleted = milestone.status === 'completed';
                      const isCurrent = milestone.status === 'current';

                      return (
                        <div key={index} className="relative">
                          
                          {/* Anchor Node Dot */}
                          <div
                            className={`absolute -left-[31px] sm:-left-[39px] top-1.5 flex items-center justify-center rounded-full transition-all duration-300 ${
                              isCompleted
                                ? 'w-4 h-4 bg-emerald-500 text-white shadow-[0_0_8px_rgba(16,185,129,0.4)]'
                                : isCurrent
                                ? 'w-5 h-5 bg-gold border-2 border-white -translate-x-0.5 shadow-[0_0_12px_#C8A96B] animate-[pulse_2s_infinite]'
                                : 'w-4 h-4 bg-navy border border-white/20'
                            }`}
                          >
                            {isCompleted && (
                              <svg className="w-2.5 h-2.5 text-navy stroke-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                            {isCurrent && <div className="w-2.5 h-2.5 bg-navy rounded-full" />}
                          </div>

                          {/* Detail card */}
                          <div
                            className={`p-4 rounded-xl border transition-all duration-300 ${
                              isCurrent
                                ? 'bg-gold/5 border-gold/40 shadow-[0_4px_15px_rgba(200,169,107,0.1)]'
                                : 'bg-navy/40 border-white/5 hover:border-white/10'
                            }`}
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                              <h5 className={`font-display font-bold text-sm uppercase tracking-wide ${isCurrent ? 'text-gold' : 'text-white'}`}>
                                {milestone.title}
                              </h5>
                              <div className="flex items-center gap-2 font-mono text-[10px] text-white/50">
                                <MapPin className="w-3 h-3 text-gold shrink-0" />
                                <span>{milestone.location}</span>
                                <span className="text-white/25">|</span>
                                <span>{milestone.date} {milestone.time}</span>
                              </div>
                            </div>
                            <p className="font-sans text-xs text-white/70 leading-relaxed pl-1">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Action panel footer */}
                <div className="p-4 sm:p-6 bg-navy/80 border-t border-white/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <span className="font-sans text-[11px] text-white/40 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Secure cargo routing protected by WININDIA standards.
                  </span>
                  <div className="flex gap-3">
                    <button
                      onClick={handleClear}
                      className="font-sans font-semibold text-xs uppercase tracking-wider text-white hover:text-gold border border-white/10 hover:border-gold px-4 py-2.5 rounded transition-all"
                    >
                      Clear Log
                    </button>
                    <a
                      href="#contact"
                      className="font-sans font-bold text-xs uppercase tracking-wider text-navy bg-gold hover:bg-white px-5 py-2.5 rounded shadow-md transition-all duration-300"
                    >
                      Consult Operational Team
                    </a>
                  </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
