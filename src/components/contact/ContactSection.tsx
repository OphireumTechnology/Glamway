import React, { useState } from 'react';
import { useSalon } from '../../context/SalonContext';
import { SALON_BRANCHES } from '../../data/salonData';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { openBookingModal, showToast } = useSalon();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    branch: 'branch-clt-uptown',
    interest: 'lashes',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Your inquiry has been sent to The Glamway team in Charlotte, NC.');
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        branch: 'branch-clt-uptown',
        interest: 'lashes',
        message: ''
      });
    }, 4000);
  };

  return (
    <div className="bg-[#FFF9F4] text-[#3B2A28] py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C6A667] font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#C6A667]" />
          <span>CONTACT THE GLAMWAY · CHARLOTTE, NC</span>
          <Sparkles className="w-3.5 h-3.5 text-[#C6A667]" />
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl text-[#3B2A28] tracking-tight">
          Get in Touch With Us
        </h1>

        <p className="text-base sm:text-lg text-[#3B2A28]/80 font-light leading-relaxed max-w-2xl mx-auto">
          Contact our Charlotte locations for appointment assistance, beauty service consultations, and course enrollment.
        </p>
      </div>

      {/* Grid: 2 Branch Cards (Left) and Contact Form (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Charlotte Locations (6 cols) */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-2">
            <h2 className="font-serif text-2xl text-[#3B2A28]">
              Charlotte, North Carolina Locations
            </h2>
            <p className="text-xs text-[#A98F86]">
              All visits and appointments must be booked in advance online.
            </p>
          </div>

          <div className="space-y-6">
            {SALON_BRANCHES.map(branch => (
              <div 
                key={branch.id}
                className="bg-white border border-[#C6A667]/30 rounded-xs p-6 shadow-xs hover:border-[#8E4B63] transition-all space-y-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#8E4B63] font-bold">
                      {branch.district}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#3B2A28] mt-0.5">
                      {branch.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => openBookingModal(undefined, branch.id)}
                    className="px-3.5 py-1.5 bg-[#8E4B63] hover:bg-[#70374C] text-white text-[11px] font-semibold uppercase tracking-wider rounded-xs transition-colors shadow-xs shrink-0"
                  >
                    Book Online
                  </button>
                </div>

                <div className="space-y-2.5 text-xs text-[#3B2A28]/85 pt-2 border-t border-[#3B2A28]/5">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-[#C6A667] shrink-0" />
                    <span>{branch.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#C6A667] shrink-0" />
                    <span>{branch.phone}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#C6A667] shrink-0" />
                    <span>{branch.email}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#C6A667] shrink-0" />
                    <span>{branch.operatingHours}</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {branch.amenities.map((amenity, idx) => (
                    <span key={idx} className="text-[10px] uppercase tracking-wider bg-[#FFF9F4] text-[#8E4B63] px-2 py-0.5 rounded-xs border border-[#C6A667]/25">
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Appointment Notice */}
          <div className="p-5 bg-white border border-[#C6A667]/25 rounded-xs space-y-2">
            <div className="text-xs font-semibold text-[#8E4B63] uppercase tracking-wider">
              Cancellation &amp; Rescheduling Policy
            </div>
            <p className="text-xs text-[#3B2A28]/80 leading-relaxed font-light">
              We require at least 24 hours of advance notice for any appointment cancellations or adjustments. Please contact us at (704) 756-2253 or theglamwayllc@icloud.com if you need assistance.
            </p>
          </div>
        </div>

        {/* Right Column: Inquiry Form (6 cols) */}
        <div className="lg:col-span-6 bg-white border border-[#C6A667]/35 rounded-xs p-6 sm:p-8 shadow-md">
          <div className="mb-6 space-y-1">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#C6A667] font-semibold">
              Direct Contact
            </span>
            <h2 className="font-serif text-2xl text-[#3B2A28]">
              Send an Inquiry
            </h2>
            <p className="text-xs text-[#A98F86]">
              Have questions about services, bookings, or beauty training? Send us a message.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 text-center space-y-4 bg-[#FFF9F4] border border-[#C6A667]/40 rounded-xs animate-in zoom-in-95 duration-200">
              <div className="w-12 h-12 rounded-full bg-[#8E4B63] text-white flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6 text-[#C6A667]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#3B2A28]">
                Message Received
              </h3>
              <p className="text-xs text-[#3B2A28]/80 max-w-sm mx-auto leading-relaxed">
                Thank you for contacting The Glamway. Our team will get back to you promptly at {formData.email || 'your email'} or via phone.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#3B2A28] font-semibold mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full name"
                    className="w-full px-3.5 py-2.5 bg-[#FFF9F4] border border-[#C6A667]/30 text-xs text-[#3B2A28] rounded-xs focus:outline-none focus:border-[#8E4B63]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#3B2A28] font-semibold mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(704) 555-0192"
                    className="w-full px-3.5 py-2.5 bg-[#FFF9F4] border border-[#C6A667]/30 text-xs text-[#3B2A28] rounded-xs focus:outline-none focus:border-[#8E4B63]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#3B2A28] font-semibold mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full px-3.5 py-2.5 bg-[#FFF9F4] border border-[#C6A667]/30 text-xs text-[#3B2A28] rounded-xs focus:outline-none focus:border-[#8E4B63]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#3B2A28] font-semibold mb-1">
                    Preferred Location
                  </label>
                  <select
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FFF9F4] border border-[#C6A667]/30 text-xs text-[#3B2A28] rounded-xs focus:outline-none focus:border-[#8E4B63]"
                  >
                    <option value="branch-clt-uptown">The Glamway — Uptown Charlotte</option>
                    <option value="branch-clt-graham">The Glamway — Graham</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#3B2A28] font-semibold mb-1">
                    Topic of Inquiry
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FFF9F4] border border-[#C6A667]/30 text-xs text-[#3B2A28] rounded-xs focus:outline-none focus:border-[#8E4B63]"
                  >
                    <option value="lashes">Lash Extensions Appointment</option>
                    <option value="hair">Hair Styling / Install</option>
                    <option value="nails">Nail Services</option>
                    <option value="facial">Esthetician Facials</option>
                    <option value="training">Lash Tech Training Courses</option>
                    <option value="general">General Inquiries</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#3B2A28] font-semibold mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what service, date, or course you are interested in..."
                  className="w-full px-3.5 py-2.5 bg-[#FFF9F4] border border-[#C6A667]/30 text-xs text-[#3B2A28] rounded-xs focus:outline-none focus:border-[#8E4B63] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#8E4B63] hover:bg-[#70374C] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-colors rounded-xs shadow-md border border-[#C6A667]/40 flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5 text-[#C6A667]" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}

        </div>

      </div>

    </div>
  );
};
