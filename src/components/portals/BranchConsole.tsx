import React, { useState } from 'react';
import { useSalon } from '../../context/SalonContext';
import { BEAUTY_SPECIALISTS } from '../../data/salonData';
import { Building2, Users, Calendar, Clock, ShieldCheck, Plus } from 'lucide-react';

export const BranchConsole: React.FC = () => {
  const { selectedBranchId, branches, appointments, openBookingModal } = useSalon();
  
  const currentBranch = branches.find(b => b.id === selectedBranchId) || branches[0];
  const branchAppointments = appointments.filter(a => a.branchId === currentBranch.id);
  const branchSpecialists = BEAUTY_SPECIALISTS.filter(s => s.branchId === currentBranch.id);

  // Walk-in queue state in Eastern Time
  const [walkIns, setWalkIns] = useState([
    { id: 'w-1', name: 'Harper Beaufort', requestedService: 'Precision Signature Cut & Blowout', waitTime: '15 mins', status: 'waiting' },
    { id: 'w-2', name: 'Savannah Pinckney', requestedService: '24K Champagne Gold Couture Manicure', waitTime: 'Ready', status: 'allocated' }
  ]);

  const [newWalkInName, setNewWalkInName] = useState('');
  const [newWalkInService, setNewWalkInService] = useState('Precision Signature Cut & Blowout');

  const handleAddWalkIn = () => {
    if (!newWalkInName.trim()) return;
    setWalkIns(prev => [
      ...prev,
      {
        id: `w-${Date.now()}`,
        name: newWalkInName,
        requestedService: newWalkInService,
        waitTime: '20 mins',
        status: 'waiting'
      }
    ]);
    setNewWalkInName('');
  };

  // Branch statistics calculation in USD
  const totalDailyRevenueUSD = branchAppointments.reduce((acc, a) => acc + a.totalPriceUSD, 0) + 1420;
  const occupiedRooms = Math.min(branchAppointments.length + 2, currentBranch.treatmentRooms);
  const roomOccupancyRate = Math.round((occupiedRooms / currentBranch.treatmentRooms) * 100);

  return (
    <div className="py-10 px-6 max-w-7xl mx-auto space-y-8">
      
      {/* Console Top Header */}
      <div className="bg-[#3B2A28] text-white p-6 rounded-sm border border-[#C6A667]/40 shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C6A667] font-semibold">
            <Building2 className="w-4 h-4" />
            <span>Branch Operations &amp; Reception Console · North Carolina</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-semibold mt-1">
            {currentBranch.name}
          </h1>
          <div className="text-xs text-[#FFF9F4]/70 mt-0.5 flex flex-wrap items-center gap-3">
            <span>{currentBranch.address}</span>
            <span>·</span>
            <span>{currentBranch.phone}</span>
            <span>·</span>
            <span className="text-[#C6A667] flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>NC Board of Cosmetic Art Sciences License #{currentBranch.licenseNumber} (Active &amp; Compliant)</span>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => openBookingModal(undefined, currentBranch.id)}
            className="px-4 py-2 bg-[#8E4B63] hover:bg-[#70374C] text-white text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5 rounded-xs border border-[#C6A667]/30 shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>New Reception Booking</span>
          </button>
        </div>
      </div>

      {/* KPI Cards Strip in USD */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 border border-[#C6A667]/25 rounded-sm shadow-xs">
          <div className="text-xs uppercase tracking-wider text-[#A98F86]">Today's Appointments (EST)</div>
          <div className="font-serif text-3xl font-bold text-[#3B2A28] mt-1 tabular-nums">
            {branchAppointments.length + 8}
          </div>
          <div className="text-[11px] text-emerald-700 mt-1">98% on-time arrival rate</div>
        </div>

        <div className="bg-white p-5 border border-[#C6A667]/25 rounded-sm shadow-xs">
          <div className="text-xs uppercase tracking-wider text-[#A98F86]">Private Suite Utilization</div>
          <div className="font-serif text-3xl font-bold text-[#3B2A28] mt-1 tabular-nums">
            {roomOccupancyRate}%
          </div>
          <div className="text-[11px] text-[#A98F86] mt-1">{occupiedRooms} of {currentBranch.treatmentRooms} suites in active service</div>
        </div>

        <div className="bg-white p-5 border border-[#C6A667]/25 rounded-sm shadow-xs">
          <div className="text-xs uppercase tracking-wider text-[#A98F86]">Today's Branch Revenue</div>
          <div className="font-serif text-3xl font-bold text-[#C6A667] mt-1 tabular-nums">
            ${totalDailyRevenueUSD.toLocaleString()} USD
          </div>
          <div className="text-[11px] text-emerald-700 mt-1">+14.2% vs yesterday target</div>
        </div>

        <div className="bg-white p-5 border border-[#C6A667]/25 rounded-sm shadow-xs">
          <div className="text-xs uppercase tracking-wider text-[#A98F86]">NC Board Artisans on Duty</div>
          <div className="font-serif text-3xl font-bold text-[#3B2A28] mt-1 tabular-nums">
            {currentBranch.staffCount} Licensed
          </div>
          <div className="text-[11px] text-[#A98F86] mt-1">All sanitation logs verified</div>
        </div>
      </div>

      {/* 2-Column Split: Today's Schedule & Walk-in Reception Queue */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Real-time Schedule Calendar (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-[#C6A667]/30 rounded-sm p-6 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-[#302725]/10 pb-3">
            <h2 className="font-serif text-lg font-semibold text-[#302725] flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#C6A667]" />
              <span>Today's Confirmed Bookings (Eastern Time)</span>
            </h2>
            <span className="text-xs font-mono text-[#A48D84]">
              Filter: All Artisans
            </span>
          </div>

          <div className="space-y-3">
            {branchAppointments.map(apt => (
              <div
                key={apt.id}
                className="p-4 bg-[#FAF8F5] border border-[#C6A667]/20 rounded-xs flex flex-wrap items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-mono font-bold text-[#C6A667]">{apt.referenceCode}</span>
                    <span className="text-[#A48D84]">·</span>
                    <span className="font-bold text-[#302725]">{apt.timeSlot}</span>
                    <span className="text-[#A48D84]">({apt.durationMinutes} mins)</span>
                  </div>
                  <div className="font-serif text-base font-semibold text-[#302725] mt-0.5">
                    {apt.clientName}
                  </div>
                  <div className="text-xs text-[#A48D84]">
                    {apt.serviceName} · Artisan: {apt.specialistName || 'Assigned'}
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-serif text-sm font-semibold text-[#302725]">
                    ${apt.totalPriceUSD.toFixed(2)} USD
                  </div>
                  <span className="text-[10px] uppercase font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-xs">
                    {apt.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Walk-in Queue & Rapid Allocation (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white border border-[#C6A667]/30 rounded-sm p-6 space-y-4 shadow-sm">
            <h2 className="font-serif text-lg font-semibold text-[#302725] flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#C6A667]" />
                <span>Walk-In Guest Reception</span>
              </span>
              <span className="text-xs text-[#C6A667] font-mono">{walkIns.length} in queue</span>
            </h2>

            {/* Quick Walk-in Registration form */}
            <div className="p-3 bg-[#FAF8F5] border border-[#C6A667]/20 rounded-xs space-y-2">
              <input
                type="text"
                placeholder="Guest Full Name..."
                value={newWalkInName}
                onChange={(e) => setNewWalkInName(e.target.value)}
                className="w-full text-xs p-2 bg-white border border-[#C6A667]/30 rounded-xs"
              />
              <select
                value={newWalkInService}
                onChange={(e) => setNewWalkInService(e.target.value)}
                className="w-full text-xs p-2 bg-white border border-[#C6A667]/30 rounded-xs text-[#3B2A28]"
              >
                <option value="Precision Signature Cut & Blowout">Precision Cut & Blowout ($95)</option>
                <option value="24K Champagne Gold Couture Manicure">24K Champagne Gold Couture Manicure ($85)</option>
                <option value="Botanical Radiance Hydra-Infusion">Hydra-Infusion Facial ($175)</option>
              </select>
              <button
                onClick={handleAddWalkIn}
                className="w-full py-2 bg-[#8E4B63] hover:bg-[#70374C] text-white text-xs uppercase tracking-wider font-semibold transition-colors rounded-xs shadow-xs"
              >
                Register Walk-in Guest
              </button>
            </div>

            {/* Current Queue */}
            <div className="space-y-2 pt-2">
              {walkIns.map(w => (
                <div
                  key={w.id}
                  className="p-3 bg-white border border-[#302725]/10 rounded-xs flex items-center justify-between text-xs"
                >
                  <div>
                    <div className="font-semibold text-[#302725]">{w.name}</div>
                    <div className="text-[11px] text-[#A48D84]">{w.requestedService}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#C6A667] font-semibold">{w.waitTime}</div>
                    <span className="text-[10px] uppercase text-[#A48D84]">{w.status}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Active Treatment Suite Status */}
          <div className="bg-white border border-[#C6A667]/30 rounded-sm p-6 space-y-3 shadow-sm">
            <h3 className="font-serif text-base font-semibold text-[#302725]">
              Private Suite Allocation ({currentBranch.treatmentRooms} Total)
            </h3>
            <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono">
              {[...Array(currentBranch.treatmentRooms)].map((_, i) => {
                const isOccupied = i < occupiedRooms;
                return (
                  <div
                    key={i}
                    className={`p-2 rounded-xs border ${
                      isOccupied 
                        ? 'bg-amber-50 border-amber-300 text-amber-900' 
                        : 'bg-emerald-50 border-emerald-300 text-emerald-900'
                    }`}
                  >
                    <div className="font-bold">Suite {i + 1}</div>
                    <div className="text-[9px] uppercase">{isOccupied ? 'Occupied' : 'Vacant'}</div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
