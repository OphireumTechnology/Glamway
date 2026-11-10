import React from 'react';
import { useSalon } from '../../context/SalonContext';
import { MEMBERSHIP_TIERS } from '../../data/salonData';
import { Crown, Check, QrCode } from 'lucide-react';

export const MembershipSection: React.FC = () => {
  const { currentUser, openBookingModal } = useSalon();

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto space-y-16">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="text-xs uppercase tracking-[0.25em] text-[#C6A667] font-medium">
          Privilege Circle
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#302725] tracking-tight">
          Aurélia Haute Beauté Membership
        </h2>
        <p className="text-sm sm:text-base text-[#A48D84] font-light">
          An elevated loyalty journey rewarding your dedication to holistic self-care with bespoke privileges, private suite reservations, and birthday gifts across our South Carolina network.
        </p>
      </div>

      {/* Digital VIP Member Card Showcase */}
      <div className="bg-[#302725] text-white rounded-sm p-8 sm:p-12 border border-[#C6A667]/40 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left: Member Status */}
        <div className="lg:col-span-7 space-y-5">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C6A667]">
            <Crown className="w-4 h-4" />
            <span>Active Guest Privilege Status</span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl font-light tracking-tight">
            Welcome, <span className="font-medium text-[#C6A667]">{currentUser.name}</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#FAF8F5]/80 font-light leading-relaxed max-w-xl">
            You are currently enjoying <span className="text-[#C6A667] font-semibold">{currentUser.tier}</span> status across our Charleston, Greenville, Columbia, Mount Pleasant, and Hilton Head Island sanctuaries.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2 font-mono text-xs">
            <div>
              <div className="text-[#A48D84] uppercase tracking-wider text-[10px]">Points Balance</div>
              <div className="text-xl font-bold text-[#C6A667] tabular-nums mt-0.5">
                {currentUser.loyaltyPoints.toLocaleString()} PTS
              </div>
            </div>
            <div className="w-px h-8 bg-[#C6A667]/30" />
            <div>
              <div className="text-[#A48D84] uppercase tracking-wider text-[10px]">Member Tier</div>
              <div className="text-sm font-semibold text-white mt-0.5">
                {currentUser.tier}
              </div>
            </div>
            <div className="w-px h-8 bg-[#C6A667]/30" />
            <div>
              <div className="text-[#A48D84] uppercase tracking-wider text-[10px]">Home Sanctuary</div>
              <div className="text-sm text-white mt-0.5">
                Charleston Historic Sanctuary
              </div>
            </div>
          </div>
        </div>

        {/* Right: Metallic Gold Virtual Member Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-sm aspect-[1.586/1] bg-gradient-to-br from-[#DFCA9B] via-[#C6A667] to-[#8C6D32] p-6 rounded-lg shadow-2xl text-[#302725] flex flex-col justify-between border border-[#FAF8F5]/40 relative overflow-hidden">
            
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-white/20 rounded-full blur-xl pointer-events-none" />

            <div className="flex items-center justify-between">
              <span className="font-serif text-xl tracking-[0.2em] uppercase font-semibold">
                AURÉLIA
              </span>
              <span className="text-[10px] tracking-widest uppercase font-mono px-2 py-0.5 bg-black/10 rounded-xs">
                {currentUser.tier}
              </span>
            </div>

            <div className="flex items-center justify-between pt-4">
              <div className="font-mono text-xs tracking-wider space-y-0.5">
                <div className="text-[9px] uppercase tracking-widest text-[#302725]/70">CARDHOLDER</div>
                <div className="font-semibold text-sm">{currentUser.name}</div>
                <div className="text-[10px] opacity-75">MEMBER ID: #AUR-SC-8829</div>
              </div>
              <div className="w-12 h-12 bg-white/80 p-1 rounded-xs flex items-center justify-center">
                <QrCode className="w-10 h-10 text-[#302725]" />
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Tier Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {MEMBERSHIP_TIERS.map(tier => {
          const isUserCurrent = tier.name === currentUser.tier;
          return (
            <div
              key={tier.id}
              className={`p-6 bg-white border rounded-sm flex flex-col justify-between space-y-6 transition-all ${
                isUserCurrent 
                  ? 'border-[#C6A667] shadow-xl ring-2 ring-[#C6A667]/40 bg-[#FAF8F5]/30' 
                  : 'border-[#C6A667]/25 hover:border-[#C6A667]'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-lg font-semibold text-[#302725]">{tier.name}</span>
                  {isUserCurrent && (
                    <span className="text-[10px] uppercase font-bold text-[#C6A667] bg-[#FAF8F5] border border-[#C6A667]/40 px-2 py-0.5 rounded-xs">
                      Current Tier
                    </span>
                  )}
                </div>

                <div className="text-xs text-[#A48D84]">
                  {tier.minimumSpendUSD === 0 
                    ? 'Complimentary upon first booking' 
                    : `Annual Spend: $${tier.minimumSpendUSD.toLocaleString()} USD`}
                </div>

                <div className="pt-2 border-t border-[#302725]/10 space-y-2">
                  {tier.perks.map((perk, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#302725]/90">
                      <Check className="w-3.5 h-3.5 text-[#C6A667] shrink-0 mt-0.5" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => openBookingModal()}
                className={`w-full py-2.5 text-xs uppercase tracking-wider font-medium transition-colors ${
                  isUserCurrent
                    ? 'bg-[#C6A667] text-white hover:bg-[#302725]'
                    : 'bg-[#302725] text-white hover:bg-[#C6A667]'
                }`}
              >
                {isUserCurrent ? 'Book With Perks' : 'Earn This Tier'}
              </button>
            </div>
          );
        })}
      </div>

    </section>
  );
};
