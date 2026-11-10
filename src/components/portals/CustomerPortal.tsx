import React, { useState } from 'react';
import { useSalon } from '../../context/SalonContext';
import { Calendar, Clock, MapPin, User, Gift, QrCode } from 'lucide-react';

export const CustomerPortal: React.FC = () => {
  const { currentUser, appointments, cancelBooking, openBookingModal } = useSalon();
  const [activeTab, setActiveTab] = useState<'appointments' | 'membership' | 'profile'>('appointments');

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto space-y-10">
      
      {/* Portal Header */}
      <div className="bg-white border border-[#C6A667]/30 p-8 rounded-sm shadow-sm flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-[#3B2A28] text-[#C6A667] flex items-center justify-center font-serif text-2xl font-bold border border-[#C6A667]/30">
            {currentUser.name.charAt(0)}
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-[#C6A667] font-semibold">
              Client Privilege Account · North Carolina
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-[#3B2A28]">
              {currentUser.name}
            </h1>
            <div className="text-xs text-[#A98F86] flex items-center gap-2 mt-0.5">
              <span>{currentUser.email}</span>
              <span>·</span>
              <span>{currentUser.phone}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-xs uppercase tracking-wider text-[#A98F86]">Loyalty Points</div>
            <div className="font-serif text-2xl font-bold text-[#C6A667] tabular-nums">
              {currentUser.loyaltyPoints.toLocaleString()} PTS
            </div>
            <div className="text-[11px] text-[#3B2A28] font-semibold">{currentUser.tier}</div>
          </div>

          <button
            onClick={() => openBookingModal()}
            className="px-5 py-2.5 bg-[#8E4B63] hover:bg-[#70374C] text-white text-xs uppercase tracking-wider font-semibold transition-colors rounded-xs shadow-xs"
          >
            New Reservation
          </button>
        </div>
      </div>

      {/* Portal Tabs */}
      <div className="flex gap-2 border-b border-[#C6A667]/20 pb-2">
        <button
          onClick={() => setActiveTab('appointments')}
          className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all ${
            activeTab === 'appointments'
              ? 'border-b-2 border-[#C6A667] text-[#C6A667]'
              : 'text-[#A48D84] hover:text-[#302725]'
          }`}
        >
          My Appointments ({appointments.length})
        </button>
        <button
          onClick={() => setActiveTab('membership')}
          className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all ${
            activeTab === 'membership'
              ? 'border-b-2 border-[#C6A667] text-[#C6A667]'
              : 'text-[#A48D84] hover:text-[#302725]'
          }`}
        >
          Digital Pass &amp; Rewards
        </button>
        <button
          onClick={() => setActiveTab('profile')}
          className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all ${
            activeTab === 'profile'
              ? 'border-b-2 border-[#C6A667] text-[#C6A667]'
              : 'text-[#A48D84] hover:text-[#302725]'
          }`}
        >
          Aesthetic Profile
        </button>
      </div>

      {/* Appointments List View */}
      {activeTab === 'appointments' && (
        <div className="space-y-4">
          {appointments.length === 0 ? (
            <div className="bg-white p-12 text-center border border-[#C6A667]/20 rounded-sm space-y-3">
              <div className="font-serif text-xl text-[#3B2A28]">No upcoming reservations found</div>
              <p className="text-xs text-[#A98F86]">Schedule a beauty ritual at our North Carolina branches.</p>
              <button
                onClick={() => openBookingModal()}
                className="mt-2 px-6 py-2 bg-[#8E4B63] hover:bg-[#70374C] text-white text-xs uppercase tracking-wider font-semibold rounded-xs shadow-xs"
              >
                Reserve Suite
              </button>
            </div>
          ) : (
            appointments.map(apt => (
              <div
                key={apt.id}
                className="bg-white border border-[#C6A667]/30 p-6 rounded-sm shadow-xs flex flex-wrap items-center justify-between gap-6 hover:shadow-md transition-all"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#C6A667]">
                      {apt.referenceCode}
                    </span>
                    <span className={`text-[10px] uppercase font-semibold px-2 py-0.5 rounded-xs ${
                      apt.status === 'confirmed' 
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                        : apt.status === 'completed'
                        ? 'bg-stone-100 text-stone-700'
                        : 'bg-red-50 text-red-700'
                    }`}>
                      {apt.status}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-[#302725]">
                    {apt.serviceName}
                  </h3>

                  <div className="text-xs text-[#A48D84] flex flex-wrap items-center gap-4">
                    <span className="flex items-center gap-1 text-[#302725]">
                      <MapPin className="w-3.5 h-3.5 text-[#C6A667]" />
                      <span>{apt.branchName}</span>
                    </span>
                    <span className="flex items-center gap-1 text-[#302725]">
                      <Calendar className="w-3.5 h-3.5 text-[#C6A667]" />
                      <span>{apt.date} at {apt.timeSlot}</span>
                    </span>
                    <span className="flex items-center gap-1 text-[#302725]">
                      <Clock className="w-3.5 h-3.5 text-[#C6A667]" />
                      <span>{apt.durationMinutes} mins</span>
                    </span>
                    {apt.specialistName && (
                      <span className="flex items-center gap-1 text-[#302725]">
                        <User className="w-3.5 h-3.5 text-[#C6A667]" />
                        <span>{apt.specialistName}</span>
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-right">
                  <div className="text-right">
                    <span className="text-xs uppercase tracking-wider text-[#8E4B63] font-medium bg-[#FFF9F4] px-2.5 py-1 rounded-xs border border-[#C6A667]/30">
                      Confirmed Request
                    </span>
                  </div>

                  {apt.status === 'confirmed' && (
                    <button
                      onClick={() => cancelBooking(apt.id)}
                      className="text-xs text-red-600 hover:text-red-800 p-2 font-medium"
                      title="Cancel reservation"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Membership Pass & Rewards */}
      {activeTab === 'membership' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-[#C6A667]/30 p-6 rounded-sm space-y-4">
            <div className="font-serif text-xl font-semibold text-[#302725] flex items-center gap-2">
              <Gift className="w-5 h-5 text-[#C6A667]" />
              <span>Available Member Privileges</span>
            </div>
            <div className="space-y-3 text-xs text-[#3B2A28]">
              <div className="p-3 bg-[#FFF9F4] border border-[#C6A667]/20 rounded-xs flex items-center justify-between">
                <div>
                  <div className="font-semibold">Complimentary Birthday Scalp Detox</div>
                  <div className="text-[#A98F86]">Valid during your birth month at any North Carolina branch.</div>
                </div>
                <span className="text-[#8E4B63] font-bold">READY</span>
              </div>
              <div className="p-3 bg-[#FFF9F4] border border-[#C6A667]/20 rounded-xs flex items-center justify-between">
                <div>
                  <div className="font-semibold">15% Privilege on Boutique Skincare</div>
                  <div className="text-[#A98F86]">Applies automatically at checkout.</div>
                </div>
                <span className="text-[#8E4B63] font-bold">ACTIVE</span>
              </div>
              <div className="p-3 bg-[#FFF9F4] border border-[#C6A667]/20 rounded-xs flex items-center justify-between">
                <div>
                  <div className="font-semibold">Private Suite Upgrade</div>
                  <div className="text-[#A98F86]">Guaranteed suite reservation for online client reservations.</div>
                </div>
                <span className="text-[#8E4B63] font-bold">INCLUDED</span>
              </div>
            </div>
          </div>

          <div className="bg-[#3B2A28] text-white p-6 rounded-sm border border-[#C6A667]/40 flex flex-col justify-between space-y-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-[#C6A667] font-semibold">The Glamway Digital Key</div>
              <div className="font-serif text-2xl font-bold mt-1">Contactless Check-In QR</div>
              <p className="text-xs text-white/70 mt-1">Present to reception upon arrival for express private suite allocation.</p>
            </div>
            <div className="bg-white p-4 w-36 h-36 mx-auto rounded-xs flex items-center justify-center">
              <QrCode className="w-28 h-28 text-[#3B2A28]" />
            </div>
            <div className="text-center font-mono text-xs text-[#C6A667]">
              MEMBER ID: #GW-NC-8829-GOLD
            </div>
          </div>
        </div>
      )}

      {/* Aesthetic Profile */}
      {activeTab === 'profile' && (
        <div className="bg-white border border-[#C6A667]/30 p-8 rounded-sm space-y-6">
          <div className="font-serif text-xl font-semibold text-[#302725]">
            Custom Aesthetic Diagnostics &amp; History
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#302725]">
            <div className="p-4 bg-[#FAF8F5] border border-[#C6A667]/20 rounded-xs space-y-1">
              <div className="text-[#A48D84] uppercase tracking-wider text-[10px]">Hair Diagnostic</div>
              <div className="font-semibold">Fine-medium texture, subtle natural wave</div>
              <div className="text-[#A48D84]">Lowcountry humidity frizz sensitivity; Level 7 caramel toner</div>
            </div>
            <div className="p-4 bg-[#FAF8F5] border border-[#C6A667]/20 rounded-xs space-y-1">
              <div className="text-[#A48D84] uppercase tracking-wider text-[10px]">Dermal Diagnostic</div>
              <div className="font-semibold">Normal-combination, mild coastal sun exposure</div>
              <div className="text-[#A48D84]">Prefers gentle enzymatic peels over physical scrubs</div>
            </div>
            <div className="p-4 bg-[#FAF8F5] border border-[#C6A667]/20 rounded-xs space-y-1">
              <div className="text-[#A48D84] uppercase tracking-wider text-[10px]">Hospitality Preferences</div>
              <div className="font-semibold">Quiet suite with garden courtyard view</div>
              <div className="text-[#A48D84]">Chilled brut champagne or artisanal peach sweet tea</div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
