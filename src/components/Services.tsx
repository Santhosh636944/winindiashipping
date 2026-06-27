import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Ship, Plane, Box, Warehouse, FileCheck, ArrowRight, Check, X } from 'lucide-react';
import { SERVICES } from '../data';
import { ServiceItem } from '../types';

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom premium easeOutExpo ease curve
      },
    },
  };

  // Map icon name to Lucide components
  const getIcon = (name: string) => {
    switch (name) {
      case 'Ship':
        return <Ship className="w-6 h-6 text-gold" />;
      case 'Plane':
        return <Plane className="w-6 h-6 text-gold" />;
      case 'Container':
        return <Box className="w-6 h-6 text-gold" />;
      case 'Warehouse':
        return <Warehouse className="w-6 h-6 text-gold" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-gold" />;
      default:
        return <Ship className="w-6 h-6 text-gold" />;
    }
  };

  return (
    <section id="services" className="py-14 sm:py-20 md:py-24 bg-navy relative overflow-hidden">
      {/* Decorative vector grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Decorative ocean gradient ball */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-ocean/10 blur-3xl pointer-events-none" />

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
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-gold font-bold">CORE CAPABILITIES</span>
            <span className="w-6 h-[1px] bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight"
          >
            Elite Maritime & Cargo Operations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-sm text-white/60 max-w-xl mt-4"
          >
            Leveraging our world-class shipping connections, advanced warehousing systems, and custom port clearance expertise to deliver secure transport logs globally.
          </motion.p>
        </div>

        {/* Services Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-navy/95 to-navy border border-white/10 hover:border-gold/30 shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_40px_rgba(7,23,57,0.8)] overflow-hidden transition-all duration-500 flex flex-col justify-between"
              id={`service-card-${service.id}`}
            >
              {/* Background image hover reveal */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Decorative side accent lines */}
              <div className="absolute top-0 right-0 w-16 h-[1px] bg-gradient-to-r from-transparent to-gold/30" />
              <div className="absolute bottom-0 left-0 w-16 h-[1px] bg-gradient-to-r from-gold/30 to-transparent" />

              <div>
                {/* Icon & Label */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 shadow-[0_4px_15px_rgba(200,169,107,0.15)] group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                    {getIcon(service.iconName)}
                  </div>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Short description */}
                <p className="font-sans text-xs text-white/70 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features list bullet previews */}
                <ul className="space-y-2.5 mb-8">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                      <span className="font-sans text-[11px] text-white/50">{feat}</span>
                    </li>
                  ))}
                  {service.features.length > 3 && (
                    <li className="font-mono text-[10px] text-gold/60 italic pl-6">
                      + {service.features.length - 3} more specifications
                    </li>
                  )}
                </ul>
              </div>

              {/* Button Action */}
              <button
                onClick={() => setSelectedService(service)}
                className="mt-auto w-full inline-flex items-center justify-center gap-2 font-sans font-bold text-[11px] uppercase tracking-wider text-white border border-white/10 hover:border-gold hover:text-gold bg-white/5 hover:bg-gold/10 py-3 rounded-lg transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <span>Technical Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Dynamic Detail Overlay Modal (Fully Accessible and Non-Disruptive) */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-navy/95 backdrop-blur-md"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="relative bg-[#071739] border border-gold/30 rounded-2xl max-w-2xl w-full overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] z-10"
              >
                {/* Header Banner */}
                <div className="relative h-48 sm:h-56 bg-navy">
                  <img
                    src={selectedService.imageUrl}
                    alt={selectedService.title}
                    className="w-full h-full object-cover opacity-60"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071739] via-[#071739]/50 to-transparent" />
                  
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedService(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-navy/80 hover:bg-gold text-white hover:text-navy border border-white/10 hover:border-gold transition-all duration-300"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="absolute bottom-4 left-6">
                    <div className="inline-flex items-center gap-3 bg-gold/10 border border-gold/30 px-3.5 py-1.5 rounded-lg text-gold text-xs uppercase tracking-wider font-semibold mb-2">
                      {getIcon(selectedService.iconName)}
                      <span>SPECIFICATION DATASHEET</span>
                    </div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                  <div>
                    <h4 className="font-mono text-[10px] text-gold uppercase tracking-wider mb-2">Operational Overview</h4>
                    <p className="font-sans text-xs text-white/80 leading-relaxed">
                      {selectedService.longDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-[10px] text-gold uppercase tracking-wider mb-3">Service Scope & Standards</h4>
                    <ul className="grid gap-3">
                      {selectedService.features.map((feat, idx) => (
                        <li key={idx} className="flex gap-3 items-start p-3 rounded-lg bg-navy/40 border border-white/5">
                          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-gold/10 text-gold text-[10px] font-bold shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="font-sans text-xs text-white/70">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer action */}
                <div className="p-4 sm:p-6 bg-navy/80 border-t border-white/10 flex justify-end gap-3">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="font-sans font-semibold text-xs uppercase tracking-wider text-white hover:text-gold px-4 py-2.5 rounded transition-colors"
                  >
                    Close Specifications
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setSelectedService(null)}
                    className="font-sans font-bold text-xs uppercase tracking-wider text-navy bg-gold hover:bg-white px-5 py-2.5 rounded shadow-lg transition-all duration-300"
                  >
                    Consult Logistics Agent
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
