import React from 'react';
import { useSalon } from '../../context/SalonContext';
import { MEMBERSHIP_TIERS } from '../../data/salonData';
import { GlamwayCrownIcon } from '../common/GlamwayLogo';
import { Crown, Check, QrCode } from 'lucide-react';

export const MembershipSection: React.FC = () => {
  const { currentUser, openBookingModal } = useSalon();

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto space-y-16">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="text-xs uppercase tracking-[0.25em] text-[#C6A667] font-semibold">
          Privilege Circle · FOR WOMEN
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#3B2A28] tracking-tight">
          The Glamway Beauty Salon Membership
        </h2>
        <p className="text-sm sm:text-base text-[#A98F86] font-light">
          An elevated loyalty journey rewarding your dedication to beauty and holistic self-care with bespoke privileges, private suite reservations, and birthday gifts across our North Carolina network.
        </p>
      </div>

      {/* Digital VIP Member Card Showcase */}
      <div className="bg-[#3B2A28] text-white rounded-sm p-8 sm:p-12 border border-[#C6A667]/40 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left: Member Status */}
        <div className="lg:col-span-7 space-y-5">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C6A667] font-semibold">
            <Crown className="w-4 h-4 text-[#C6A667]" />
            <span>Active Guest Privilege Status</span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl font-light tracking-tight">
            Welcome, <span className="font-medium text-[#C6A667]">{currentUser.name}</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#FFF9F4]/80 font-light leading-relaxed max-w-xl">
            You are currently enjoying <span className="text-[#C6A667] font-semibold">{currentUser.tier}</span> status across our North Carolina destination sanctuaries.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2 font-mono text-xs">
            <div>
              <div className="text-[#A98F86] uppercase tracking-wider text-[10px]">Points Balance</div>
              <div className="text-xl font-bold text-[#C6A667] tabular-nums mt-0.5">
                {currentUser.loyaltyPoints.toLocaleString()} PTS
              </div>
            </div>
            <div className="w-px h-8 bg-[#C6A667]/30" />
            <div>
              <div className="text-[#A98F86] uppercase tracking-wider text-[10px]">Member Tier</div>
              <div className="text-sm font-semibold text-white mt-0.5">
                {currentUser.tier}
              </div>
            </div>
            <div className="w-px h-8 bg-[#C6A667]/30" />
            <div>
              <div className="text-[#A98F86] uppercase tracking-wider text-[10px]">Home Branch</div>
              <div className="text-sm text-white mt-0.5">
                Branch 1 — The Glamway Flagship (NC)
              </div>
            </div>
          </div>
        </div>

        {/* Right: Metallic Gold Virtual Member Card with Official Logo */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-sm aspect-[1.586/1] bg-gradient-to-br from-[#E6D0A7] via-[#C6A667] to-[#8C6D32] p-6 rounded-lg shadow-2xl text-[#3B2A28] flex flex-col justify-between border border-[#FFF9F4]/50 relative overflow-hidden">
            
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-white/25 rounded-full blur-xl pointer-events-none" />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <GlamwayCrownIcon size={28} />
                <span className="font-serif text-lg tracking-[0.15em] uppercase font-bold text-[#3B2A28]">
                  THE GLAMWAY
                </span>
              </div>
              <span className="text-[10px] tracking-widest uppercase font-mono px-2 py-0.5 bg-black/10 rounded-xs font-semibold">
                {currentUser.tier}
              </span>
            </div>

            <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8E4B63]">
              BEAUTY SALON · CHARLOTTE, NC
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="font-mono text-xs tracking-wider space-y-0.5">
                <div className="text-[9px] uppercase tracking-widest text-[#3B2A28]/70 font-semibold">CARDHOLDER</div>
                <div className="font-bold text-sm text-[#3B2A28]">{currentUser.name}</div>
                <div className="text-[10px] opacity-80">MEMBER ID: #GW-NC-8829-VIP</div>
              </div>
              <div className="w-12 h-12 bg-white/90 p-1 rounded-xs flex items-center justify-center shadow-xs">
                <QrCode className="w-10 h-10 text-[#3B2A28]" />
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
                  ? 'border-[#C6A667] shadow-xl ring-2 ring-[#C6A667]/40 bg-[#FFF9F4]/40' 
                  : 'border-[#C6A667]/25 hover:border-[#C6A667]'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-lg font-semibold text-[#3B2A28]">{tier.name}</span>
                  {isUserCurrent && (
                    <span className="text-[10px] uppercase font-bold text-[#8E4B63] bg-[#F5D6DE]/40 border border-[#8E4B63]/30 px-2 py-0.5 rounded-xs">
                      Current Tier
                    </span>
                  )}
                </div>

                <div className="text-xs text-[#A98F86]">
                  {tier.minimumSpendUSD === 0 
                    ? 'Complimentary upon first booking' 
                    : `Annual Spend: $${tier.minimumSpendUSD.toLocaleString()} USD`}
                </div>

                <div className="pt-2 border-t border-[#3B2A28]/10 space-y-2">
                  {tier.perks.map((perk, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#3B2A28]/90">
                      <Check className="w-3.5 h-3.5 text-[#C6A667] shrink-0 mt-0.5" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => openBookingModal()}
                className={`w-full py-2.5 text-xs uppercase tracking-wider font-semibold transition-colors rounded-xs ${
                  isUserCurrent
                    ? 'bg-[#8E4B63] text-white hover:bg-[#70374C]'
                    : 'bg-[#3B2A28] text-white hover:bg-[#8E4B63]'
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
