import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, Mail, Phone, MapPin, Calculator, Anchor, ArrowRight } from 'lucide-react';
import { QuoteFormData } from '../types';

interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteRequestModal({ isOpen, onClose }: QuoteRequestModalProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    origin: '',
    destination: '',
    containerSize: '40gp',
    cargoType: 'general',
    cargoWeight: '',
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    companyName: '',
    specialInstructions: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [generatedQuoteId, setGeneratedQuoteId] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate elite corporate pricing calculation api
    setTimeout(() => {
      const prefix = formData.cargoType === 'reefer' ? 'WN-REF-' : 'WN-FCL-';
      const quoteId = prefix + Math.floor(100000 + Math.random() * 900000);
      setGeneratedQuoteId(quoteId);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      origin: '',
      destination: '',
      containerSize: '40gp',
      cargoType: 'general',
      cargoWeight: '',
      clientName: '',
      clientEmail: '',
      clientPhone: '',
      companyName: '',
      specialInstructions: '',
    });
    setIsSuccess(false);
    setGeneratedQuoteId('');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-navy/80 backdrop-blur-md"
        />

        {/* Modal content box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-gradient-to-b from-[#071739] to-navy border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] z-10 text-white flex flex-col p-6 sm:p-8 select-text"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/5 border border-white/10 hover:border-gold/50 text-white hover:text-gold transition-all duration-300 z-20"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-6 pb-4 border-b border-white/10 pr-10">
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-gold font-bold">CARGO LOGISTICS RATE CALCULATOR</span>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl text-white mt-1">
              Request Quote
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Form Section (8 Cols) */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="quote-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left"
                  >
                    {/* Progress tag / instruction banner */}
                    <div className="p-3.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
                      <p className="font-sans text-xs text-white/70">
                        Submit shipping parameters to lock premium container rates instantly.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Port of Origin */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-sans text-xs text-white/60 font-semibold uppercase tracking-wider">
                          Port of Origin *
                        </label>
                        <input
                          type="text"
                          name="origin"
                          required
                          value={formData.origin}
                          onChange={handleInputChange}
                          placeholder="e.g. Port of Chennai, India"
                          className="w-full bg-[#050f24] border border-white/15 focus:border-gold rounded-lg px-4 py-3 text-white text-xs placeholder-white/30 focus:outline-none transition-all"
                        />
                      </div>

                      {/* Port of Destination */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-sans text-xs text-white/60 font-semibold uppercase tracking-wider">
                          Port of Destination *
                        </label>
                        <input
                          type="text"
                          name="destination"
                          required
                          value={formData.destination}
                          onChange={handleInputChange}
                          placeholder="e.g. Port of Rotterdam, Netherlands"
                          className="w-full bg-[#050f24] border border-white/15 focus:border-gold rounded-lg px-4 py-3 text-white text-xs placeholder-white/30 focus:outline-none transition-all"
                        />
                      </div>

                      {/* Container size */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-sans text-xs text-white/60 font-semibold uppercase tracking-wider">
                          Container Configuration *
                        </label>
                        <select
                          name="containerSize"
                          value={formData.containerSize}
                          onChange={handleInputChange}
                          className="w-full bg-[#050f24] border border-white/15 focus:border-gold rounded-lg px-4 py-3 text-white text-xs focus:outline-none transition-all"
                        >
                          <option value="20gp">20ft General Purpose (GP)</option>
                          <option value="40gp">40ft General Purpose (GP)</option>
                          <option value="40hc">40ft High Cube (HC)</option>
                          <option value="20rf">20ft Reefer (Refrigerated)</option>
                          <option value="40rf">40ft Reefer (Refrigerated)</option>
                        </select>
                      </div>

                      {/* Cargo Type */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-sans text-xs text-white/60 font-semibold uppercase tracking-wider">
                          Cargo Classification *
                        </label>
                        <select
                          name="cargoType"
                          value={formData.cargoType}
                          onChange={handleInputChange}
                          className="w-full bg-[#050f24] border border-white/15 focus:border-gold rounded-lg px-4 py-3 text-white text-xs focus:outline-none transition-all"
                        >
                          <option value="general">General Cargo (Industrial, Retail)</option>
                          <option value="perishable">Perishables (Cold Chain/Reefer)</option>
                          <option value="hazmat">Hazardous / Chemicals (Hazmat Class)</option>
                          <option value="automotive">Automotive / Machinery</option>
                          <option value="heavy">Over-Dimensional / Heavy Cargo</option>
                        </select>
                      </div>

                      {/* Gross weight */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-sans text-xs text-white/60 font-semibold uppercase tracking-wider">
                          Gross Weight (in kg) *
                        </label>
                        <input
                          type="number"
                          name="cargoWeight"
                          required
                          value={formData.cargoWeight}
                          onChange={handleInputChange}
                          placeholder="e.g. 18500"
                          className="w-full bg-[#050f24] border border-white/15 focus:border-gold rounded-lg px-4 py-3 text-white text-xs placeholder-white/30 focus:outline-none transition-all"
                        />
                      </div>

                      {/* Company Name */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-sans text-xs text-white/60 font-semibold uppercase tracking-wider">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          required
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="Corporate Entity Name"
                          className="w-full bg-[#050f24] border border-white/15 focus:border-gold rounded-lg px-4 py-3 text-white text-xs placeholder-white/30 focus:outline-none transition-all"
                        />
                      </div>

                      {/* Client Name */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-sans text-xs text-white/60 font-semibold uppercase tracking-wider">
                          Contact Person *
                        </label>
                        <input
                          type="text"
                          name="clientName"
                          required
                          value={formData.clientName}
                          onChange={handleInputChange}
                          placeholder="Full Name"
                          className="w-full bg-[#050f24] border border-white/15 focus:border-gold rounded-lg px-4 py-3 text-white text-xs placeholder-white/30 focus:outline-none transition-all"
                        />
                      </div>

                      {/* Client email */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-sans text-xs text-white/60 font-semibold uppercase tracking-wider">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          name="clientEmail"
                          required
                          value={formData.clientEmail}
                          onChange={handleInputChange}
                          placeholder="name@company.com"
                          className="w-full bg-[#050f24] border border-white/15 focus:border-gold rounded-lg px-4 py-3 text-white text-xs placeholder-white/30 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Special Instructions */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans text-xs text-white/60 font-semibold uppercase tracking-wider">
                        Special Cargo Operations / Requests
                      </label>
                      <textarea
                        name="specialInstructions"
                        rows={3}
                        value={formData.specialInstructions}
                        onChange={handleInputChange}
                        placeholder="List specific temperature ranges, customs clearance assistance requests, tail lift or special multi-modal trucking legs..."
                        className="w-full bg-[#050f24] border border-white/15 focus:border-gold rounded-lg px-4 py-3 text-white text-xs placeholder-white/30 focus:outline-none transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gold hover:bg-white text-navy font-sans font-bold text-xs uppercase tracking-wider py-4 rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(200,169,107,0.4)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-navy border-t-transparent rounded-full animate-spin" />
                          <span>Generating Instant Marine Tariff Quote...</span>
                        </>
                      ) : (
                        <>
                          <Calculator className="w-4 h-4" />
                          <span>Calculate Shipping Tariff & Apply</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-6 rounded-xl bg-navy/60 border border-gold/30 space-y-6 text-left"
                  >
                    <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400">
                      <ShieldCheck className="w-6 h-6" />
                    </div>

                    <div>
                      <h4 className="font-display font-bold text-xl text-white">Tariff Allocation Reserved</h4>
                      <p className="font-sans text-xs text-white/60 mt-1">
                        Thank you. Your maritime transport request has been logged. An expert WININDIA cargo auditor is on standby and will contact you directly.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-navy border border-white/10 space-y-3 font-sans text-xs">
                      <div className="flex justify-between pb-2 border-b border-white/5">
                        <span className="text-white/40">Reference Tariff ID</span>
                        <span className="text-gold font-bold font-mono">{generatedQuoteId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/40">Route Vector</span>
                        <span className="text-white font-medium">{formData.origin} ➔ {formData.destination}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/40">Container Profile</span>
                        <span className="text-white font-medium uppercase">{formData.containerSize} ({formData.cargoType})</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/40">Assigned Hub</span>
                        <span className="text-white font-medium">Port of Chennai, India</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={handleReset}
                        className="bg-white/5 border border-white/10 hover:border-gold/40 hover:bg-gold/10 text-white hover:text-gold font-sans font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-lg transition-all"
                      >
                        Calculate Another Route
                      </button>
                      <button
                        onClick={onClose}
                        className="bg-gold text-navy font-sans font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-white transition-all"
                      >
                        Done
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sidebar Contact Info (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-5 sm:p-6 rounded-xl bg-navy/60 border border-white/5 text-left space-y-5">
                <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider pb-2 border-b border-white/5 flex items-center gap-2">
                  <Anchor className="w-3.5 h-3.5 text-gold" /> Headquarters Info
                </h4>

                <div className="space-y-4 font-sans text-xs">
                  <div className="flex gap-3 items-start">
                    <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span className="text-white/60 leading-relaxed">
                      38/22, Saravana Nagar 1st Street,<br />
                      Tiruvottiyur, Tiruvallur,<br />
                      Tamil Nadu – 600019, India
                    </span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <div className="space-y-1 text-white/70">
                      <a href="tel:+918940028773" className="hover:text-gold block transition-colors">
                        +91 89400 28773
                      </a>
                      <a href="tel:+916369447959" className="hover:text-gold block transition-colors">
                        +91 63694 47959
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <a href="mailto:info@winindiashipping.com" className="text-white/60 hover:text-gold block font-semibold underline transition-colors">
                      info@winindiashipping.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-gradient-to-br from-navy/80 to-gold/5 border border-gold/15 text-left">
                <h5 className="font-sans font-bold text-xs text-gold uppercase tracking-wider">Fast-Track Response</h5>
                <p className="font-sans text-xs text-white/50 leading-relaxed mt-2">
                  All requests processed within 15 minutes by designated carrier coordinators. Dedicated vessels ready for custom route allocations.
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
