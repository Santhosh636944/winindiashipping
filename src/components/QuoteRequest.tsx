import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Clock, Building } from 'lucide-react';
import { QuoteFormData } from '../types';

export default function QuoteRequest() {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    service: 'ocean-freight',
    origin: '',
    destination: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [generatedQuoteId, setGeneratedQuoteId] = useState('');

  const servicesList = [
    { value: 'ocean-freight', label: 'Ocean Freight Forwarding' },
    { value: 'air-freight', label: 'Air Freight Services' },
    { value: 'container-services', label: 'Container & Equipment Leasing' },
    { value: 'warehousing', label: 'Warehousing & Cold Storage' },
    { value: 'customs-clearance', label: 'Customs Clearance & Brokerage' }
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please fill out all required contact fields (Full Name, Email, and Phone).');
      return;
    }

    setIsSubmitting(true);

    // Simulate server action
    setTimeout(() => {
      const quoteId = 'WIN-QA-' + Math.floor(Math.random() * 9000 + 1000);
      setGeneratedQuoteId(quoteId);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form data but keep success state
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        service: 'ocean-freight',
        origin: '',
        destination: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 md:py-24 bg-navy relative overflow-hidden">
      {/* Decorative vertical coordinates overlay */}
      <div className="absolute top-0 right-10 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Contact Details Column (Left) - 5 Cols */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-6 h-[1px] bg-gold" />
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-gold font-bold">HQ OFFICE & INQUIRIES</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight mb-8"
            >
              Get in Touch with Our Maritime Experts
            </motion.h2>

            {/* Corporate Location Details Card */}
            <div className="w-full space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-navy/95 to-ocean/25 border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.4)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-gold/5 blur-xl pointer-events-none" />
                
                <h3 className="font-display font-bold text-base text-white mb-6 uppercase tracking-wider flex items-center gap-2.5">
                  <Building className="w-5 h-5 text-gold" />
                  <span>WININDIA Shipping and Logistics</span>
                </h3>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex gap-4 items-start">
                    <div className="p-2 bg-gold/10 text-gold rounded-lg border border-gold/20 shrink-0 mt-0.5">
                      <MapPin className="w-4.5 h-4.5" />
                    </div>
                    <div className="flex flex-col font-sans">
                      <span className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Corporate Headquarters</span>
                      <p className="text-xs text-white/80 leading-relaxed font-medium">
                        38/22, Saravana Nagar 1st street,<br />
                        Thiruvottiyur, Chennai - 600019, ,<br />
                        Tamil Nadu, India
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4 items-start">
                    <div className="p-2 bg-gold/10 text-gold rounded-lg border border-gold/20 shrink-0 mt-0.5">
                      <Phone className="w-4.5 h-4.5" />
                    </div>
                    <div className="flex flex-col font-sans">
                      <span className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Direct Operations</span>
                      <div className="space-y-1 mt-1">
                        <a href="tel:+918940028773" className="text-xs text-white hover:text-gold font-bold block transition-colors">
                          +91 89400 28773
                        </a>
                        <a href="tel:+916369447959" className="text-xs text-white hover:text-gold font-bold block transition-colors">
                          +91 63694 47959
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4 items-start">
                    <div className="p-2 bg-gold/10 text-gold rounded-lg border border-gold/20 shrink-0 mt-0.5">
                      <Mail className="w-4.5 h-4.5" />
                    </div>
                    <div className="flex flex-col font-sans">
                      <span className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Electronic Mailbox</span>
                      <a href="mailto:info@winindiashipping.com" className="text-xs text-gold hover:text-white font-bold block mt-1 underline transition-colors">
                        info@winindiashipping.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Micro Indicators */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex gap-3">
                  <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-xs text-white uppercase tracking-wider">OFFICE HOURS</span>
                    <span className="font-sans text-xs text-white/50 mt-1 leading-normal">Mon-Sat: 09:00 - 18:30 (IST)</span>
                  </div>
                </div>
                
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex gap-3">
                  <ShieldCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-xs text-white uppercase tracking-wider">RESPONSE POLICY</span>
                    <span className="font-sans text-xs text-white/50 mt-1 leading-normal">Guaranteed email audit reply within 15 mins.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column (Right) - 7 Cols */}
          <div className="lg:col-span-7 w-full">
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-6 sm:p-10 rounded-2xl bg-gradient-to-b from-navy/95 to-[#050f24] border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.6)]"
            >
              
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="quote-form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    id="freight-quote-form"
                  >
                    <div className="pb-4 border-b border-white/5">
                      <h3 className="font-display font-bold text-lg text-white mb-1 uppercase tracking-wide">
                        Request Quote
                      </h3>
                      <p className="font-sans text-xs text-white/50">
                        Submit shipping parameters to lock premium container rates instantly.
                      </p>
                    </div>

                    {/* Full Name & Company Name */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="flex flex-col items-start gap-2">
                        <label htmlFor="fullName" className="font-mono text-[10px] text-white/60 uppercase tracking-wider font-semibold">
                          Full Name *
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Captain Ronald"
                          className="w-full bg-[#050f24] border border-white/15 focus:border-gold rounded-lg px-4 py-3 text-white text-xs placeholder-white/30 focus:outline-none transition-all"
                        />
                      </div>

                      <div className="flex flex-col items-start gap-2">
                        <label htmlFor="companyName" className="font-mono text-[10px] text-white/60 uppercase tracking-wider font-semibold">
                          Company Name
                        </label>
                        <input
                          id="companyName"
                          name="companyName"
                          type="text"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="Global Trade Corp"
                          className="w-full bg-[#050f24] border border-white/15 focus:border-gold rounded-lg px-4 py-3 text-white text-xs placeholder-white/30 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="flex flex-col items-start gap-2">
                        <label htmlFor="email" className="font-mono text-[10px] text-white/60 uppercase tracking-wider font-semibold">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="ronald@globaltrade.com"
                          className="w-full bg-[#050f24] border border-white/15 focus:border-gold rounded-lg px-4 py-3 text-white text-xs placeholder-white/30 focus:outline-none transition-all"
                        />
                      </div>

                      <div className="flex flex-col items-start gap-2">
                        <label htmlFor="phone" className="font-mono text-[10px] text-white/60 uppercase tracking-wider font-semibold">
                          Phone / Mobile *
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full bg-[#050f24] border border-white/15 focus:border-gold rounded-lg px-4 py-3 text-white text-xs placeholder-white/30 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Service required */}
                    <div className="flex flex-col items-start gap-2">
                      <label htmlFor="service" className="font-mono text-[10px] text-white/60 uppercase tracking-wider font-semibold">
                        Service Required
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full bg-[#050f24] border border-white/15 focus:border-gold rounded-lg px-4 py-3 text-white text-xs focus:outline-none transition-all appearance-none cursor-pointer"
                      >
                        {servicesList.map((srv) => (
                          <option key={srv.value} value={srv.value} className="bg-navy text-white py-2">
                            {srv.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Origin & Destination */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="flex flex-col items-start gap-2">
                        <label htmlFor="origin" className="font-mono text-[10px] text-white/60 uppercase tracking-wider font-semibold">
                          Origin City / Port *
                        </label>
                        <input
                          id="origin"
                          name="origin"
                          type="text"
                          required
                          value={formData.origin}
                          onChange={handleInputChange}
                          placeholder="e.g. Port of Chennai, India"
                          className="w-full bg-[#050f24] border border-white/15 focus:border-gold rounded-lg px-4 py-3 text-white text-xs placeholder-white/30 focus:outline-none transition-all"
                        />
                      </div>

                      <div className="flex flex-col items-start gap-2">
                        <label htmlFor="destination" className="font-mono text-[10px] text-white/60 uppercase tracking-wider font-semibold">
                          Destination City / Port *
                        </label>
                        <input
                          id="destination"
                          name="destination"
                          type="text"
                          required
                          value={formData.destination}
                          onChange={handleInputChange}
                          placeholder="e.g. Port of Rotterdam, NL"
                          className="w-full bg-[#050f24] border border-white/15 focus:border-gold rounded-lg px-4 py-3 text-white text-xs placeholder-white/30 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col items-start gap-2">
                      <label htmlFor="message" className="font-mono text-[10px] text-white/60 uppercase tracking-wider font-semibold">
                        Cargo Details & Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Detail weight, volume, hazmat specs, refrigerated requirements, or standard dry van queries..."
                        className="w-full bg-[#050f24] border border-white/15 focus:border-gold rounded-lg px-4 py-3 text-white text-xs placeholder-white/30 focus:outline-none transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gold text-navy hover:bg-white border border-gold hover:border-white py-4 rounded-xl font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_8px_25px_rgba(200,169,107,0.35)] hover:shadow-xl active:scale-98 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      id="btn-submit-quote"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4.5 h-4.5 rounded-full border-2 border-navy border-t-transparent animate-spin" />
                          <span>Auditing Rates...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Request & Lock Rates</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    className="flex flex-col items-center text-center py-12 px-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 animate-bounce">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h3 className="font-display font-bold text-2xl text-white mb-2 uppercase tracking-wide">
                      Inquiry Logged Securely
                    </h3>
                    <p className="font-sans text-xs text-white/60 max-w-sm mb-8 leading-relaxed">
                      Thank you. Your maritime transport request has been logged. An expert WININDIA cargo auditor is on standby and will contact you directly.
                    </p>

                    {/* Simulated Voucher Details */}
                    <div className="w-full max-w-sm bg-[#050f24] rounded-xl border border-gold/30 p-5 font-mono text-left space-y-3.5 mb-8">
                      <div className="flex justify-between pb-2 border-b border-white/5">
                        <span className="text-[10px] text-white/40 uppercase">Voucher Code</span>
                        <span className="text-xs text-gold font-bold">{generatedQuoteId}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-white/40">Tariff Class</span>
                        <span className="text-white font-medium">Class AAA Secured</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-white/40">Locked Period</span>
                        <span className="text-white font-medium">72 Hours (Guaranteed)</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-white/40">Assigned Hub</span>
                        <span className="text-white font-medium">Port of Chennai, India</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="font-sans font-bold text-xs uppercase tracking-wider text-white hover:text-gold border border-white/10 hover:border-gold px-6 py-3 rounded-lg transition-all"
                    >
                      Log Another Request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
