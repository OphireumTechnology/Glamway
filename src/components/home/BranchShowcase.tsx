import React, { useState } from 'react';
import { useSalon } from '../../context/SalonContext';
import { MapPin, Phone, Mail, Clock, Building2, Calendar, ChevronRight, Search, ShieldCheck } from 'lucide-react';

export const BranchShowcase: React.FC = () => {
  const { branches, openBookingModal, setSelectedBranchId, setCurrentView, setUserRole } = useSalon();
  const [activeBranchId, setActiveBranchId] = useState<string>(branches[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredBranches = branches.filter(b => 
    b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.zipCode.includes(searchQuery)
  );

  const activeBranch = branches.find(b => b.id === activeBranchId) || branches[0];

  const handleManageBranch = (branchId: string) => {
    setSelectedBranchId(branchId);
    setUserRole('branch_manager');
    setCurrentView('branch-console');
  };

  return (
    <section className="py-20 bg-[#FFF9F4] border-t border-[#C6A667]/25">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C6A667] font-semibold">
            North Carolina Network · FOR WOMEN
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#3B2A28] tracking-tight">
            Our Destination Sanctuaries
          </h2>
          <p className="text-sm sm:text-base text-[#A98F86] font-light">
            Designed as serene, luxurious architectural escapes in North Carolina for women, featuring private styling suites, bespoke care, and gracious hospitality.
          </p>
        </div>

        {/* Search Input */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <Search className="w-4 h-4 text-[#C6A667] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search branches..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#C6A667]/40 rounded-sm text-xs text-[#3B2A28] focus:outline-none focus:border-[#8E4B63] shadow-xs"
            />
          </div>
        </div>

        {/* Branch Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-3xl mx-auto">
          {filteredBranches.map(branch => (
            <button
              key={branch.id}
              onClick={() => setActiveBranchId(branch.id)}
              className={`p-5 text-left transition-all duration-300 rounded-sm border ${
                activeBranchId === branch.id
                  ? 'bg-white border-[#C6A667] shadow-md ring-2 ring-[#C6A667]/40'
                  : 'bg-white/70 border-[#C6A667]/20 hover:bg-white hover:border-[#C6A667]/40'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="text-[10px] uppercase tracking-wider text-[#C6A667] font-semibold">
                  {branch.city}, NC
                </div>
                <span className="text-[10px] text-[#8E4B63] bg-[#F5D6DE]/40 px-2 py-0.5 rounded-xs font-semibold">
                  Active Sanctuary
                </span>
              </div>
              <div className="font-serif text-base sm:text-lg font-semibold text-[#3B2A28] mt-1">
                {branch.name}
              </div>
              <div className="text-xs text-[#A98F86] mt-1 flex items-center gap-1">
                <span>{branch.treatmentRooms} Private Styling Suites · {branch.staffCount} Licensed Artisans</span>
              </div>
            </button>
          ))}
        </div>

        {/* Active Branch Feature Display (2-column layout) */}
        <div className="bg-white border border-[#C6A667]/30 rounded-sm overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Branch Architectural Media (5 cols) */}
          <div className="lg:col-span-5 relative min-h-[360px] bg-[#3B2A28]">
            <img
              src={activeBranch.image}
              alt={activeBranch.name}
              className="w-full h-full object-cover opacity-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#C6A667] font-semibold">
                {activeBranch.city}, North Carolina
              </span>
              <h3 className="font-serif text-2xl font-bold leading-tight">
                {activeBranch.name}
              </h3>
              <p className="text-xs text-white/80">
                {activeBranch.address}
              </p>
              <div className="flex items-center gap-1.5 text-[10px] text-[#DFCA9B] pt-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>NC Board of Cosmetic Art Sciences #{activeBranch.licenseNumber}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Branch Specifications, Amenities, Contacts & Booking (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              
              {/* Header Info */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#3B2A28]/10 pb-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#A98F86]">Location Profile</div>
                  <div className="font-serif text-xl text-[#3B2A28] font-semibold">{activeBranch.name}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#8E4B63] bg-[#F5D6DE]/30 border border-[#8E4B63]/20 px-3 py-1 font-mono font-semibold">
                    {activeBranch.staffCount} Licensed Artisans
                  </span>
                </div>
              </div>

              {/* Hours & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#3B2A28]">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#C6A667] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#3B2A28]">Operating Hours (Eastern Time)</div>
                    <div className="text-[#A98F86]">{activeBranch.operatingHours}</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#C6A667] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#3B2A28]">Concierge Line</div>
                    <div className="text-[#A98F86]">{activeBranch.phone}</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#C6A667] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#3B2A28]">Direct Inquiries</div>
                    <div className="text-[#A98F86]">{activeBranch.email}</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C6A667] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#3B2A28]">Branch Location</div>
                    <div className="text-[#A98F86]">{activeBranch.address}</div>
                  </div>
                </div>
              </div>

              {/* Curated Amenities */}
              <div className="space-y-2 pt-2">
                <div className="text-xs uppercase tracking-wider text-[#A98F86] font-semibold">
                  Branch Amenities &amp; Private Hospitality
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeBranch.amenities.map((amenity, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-[#FFF9F4] text-[#3B2A28] px-3 py-1.5 border border-[#C6A667]/25 rounded-xs"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Actions with Mauve Plum button */}
            <div className="pt-6 border-t border-[#C6A667]/20 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => openBookingModal(undefined, activeBranch.id)}
                className="px-6 py-3 bg-[#8E4B63] hover:bg-[#70374C] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-colors flex items-center gap-2 shadow-sm rounded-xs border border-[#C6A667]/30"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve at {activeBranch.name.split('—')[0]}</span>
              </button>

              <button
                onClick={() => handleManageBranch(activeBranch.id)}
                className="text-xs font-semibold text-[#8E4B63] hover:text-[#3B2A28] flex items-center gap-1 transition-colors"
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>Branch Operations &amp; Reception Desk</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
