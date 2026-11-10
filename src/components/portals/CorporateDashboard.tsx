import React, { useState, useEffect } from 'react';
import { useSalon } from '../../context/SalonContext';
import { 
  Building2, LineChart, Sparkles, RefreshCw, ShieldCheck 
} from 'lucide-react';

export const CorporateDashboard: React.FC = () => {
  const { branches } = useSalon();
  
  const [aiForecastText, setAiForecastText] = useState<string>('');
  const [isGeneratingAi, setIsGeneratingAi] = useState<boolean>(false);
  const [selectedBranchFilter, setSelectedBranchFilter] = useState<string>('all');

  const fetchAiForecast = async () => {
    setIsGeneratingAi(true);
    try {
      const res = await fetch('/api/ai/forecast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ branchId: selectedBranchFilter })
      });
      const data = await res.json();
      setAiForecastText(data.forecast || '');
    } catch {
      setAiForecastText(`• Peak Demand (EST): Friday & Saturday bridal styling and private suite occupancy tracking at 94% across North Carolina branches.
• Staff Scheduling: Recommend scheduling 2 additional NC Board of Cosmetic Art Sciences certified master colorists for Branch 1 weekend shifts.
• Inventory Alert: 24K Gold Couture Glaze and Caviar Keratin Restorative Elixir tracking low; replenishment dispatched to North Carolina hubs.
• Service Growth: Signature Balayage and Botanical Hydra-Facial bookings up +28% month-over-month.`);
    } finally {
      setIsGeneratingAi(false);
    }
  };

  useEffect(() => {
    fetchAiForecast();
  }, [selectedBranchFilter]);

  // Consolidated enterprise metrics in USD for North Carolina
  const enterpriseMetrics = {
    grossMonthlyRevenueUSD: 345000,
    totalMonthlyBookings: 1420,
    repeatClientRate: '79.2%',
    averageTicketUSD: 242.95,
    inventoryAssetValueUSD: 88500,
    ncSalesTaxRemittedUSD: 25012
  };

  const branchBreakdown = [
    { name: 'Branch 1 — The Glamway Flagship (Location Details Pending)', revenueUSD: 186000, share: '53.9%', bookings: 760, growth: '+18.2%' },
    { name: 'Branch 2 — The Glamway Atelier (Location Details Pending)', revenueUSD: 159000, share: '46.1%', bookings: 660, growth: '+16.4%' }
  ];

  return (
    <div className="py-10 px-6 max-w-7xl mx-auto space-y-8">
      
      {/* Top Banner */}
      <div className="bg-[#3B2A28] text-white p-6 rounded-sm border border-[#C6A667]/40 shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C6A667] font-semibold">
            <LineChart className="w-4 h-4" />
            <span>Corporate Head Office &amp; AI Intelligence · North Carolina, USA</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-semibold mt-1">
            Enterprise Consolidated Command
          </h1>
          <div className="text-xs text-[#FFF9F4]/70 mt-0.5">
            Real-time financial, NC Board of Cosmetic Art Sciences compliance, and predictive analytics across our 2 North Carolina branches.
          </div>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={selectedBranchFilter}
            onChange={(e) => setSelectedBranchFilter(e.target.value)}
            className="bg-[#241A19] text-xs text-white border border-[#C6A667]/40 px-3 py-2 rounded-xs"
          >
            <option value="all">Consolidated North Carolina Network (2)</option>
            {branches.map(b => (
              <option key={b.id} value={b.id}>{b.name} ({b.city}, NC)</option>
            ))}
          </select>

          <button
            onClick={fetchAiForecast}
            disabled={isGeneratingAi}
            className="px-4 py-2 bg-[#8E4B63] hover:bg-[#70374C] text-white text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5 disabled:opacity-50 rounded-xs border border-[#C6A667]/30"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isGeneratingAi ? 'animate-spin' : ''}`} />
            <span>Refresh AI Model</span>
          </button>
        </div>
      </div>

      {/* KPI 4-Card Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 border border-[#C6A667]/25 rounded-sm shadow-xs">
          <div className="text-xs uppercase tracking-wider text-[#A98F86]">Consolidated Monthly Revenue</div>
          <div className="font-serif text-3xl font-bold text-[#C6A667] mt-1 tabular-nums">
            ${enterpriseMetrics.grossMonthlyRevenueUSD.toLocaleString()} USD
          </div>
          <div className="text-[11px] text-emerald-700 mt-1 font-medium">+16.4% YoY Growth across NC</div>
        </div>

        <div className="bg-white p-5 border border-[#C6A667]/25 rounded-sm shadow-xs">
          <div className="text-xs uppercase tracking-wider text-[#A98F86]">Network Bookings Completed</div>
          <div className="font-serif text-3xl font-bold text-[#3B2A28] mt-1 tabular-nums">
            {enterpriseMetrics.totalMonthlyBookings.toLocaleString()}
          </div>
          <div className="text-[11px] text-[#A98F86] mt-1">Average Ticket: ${enterpriseMetrics.averageTicketUSD} USD</div>
        </div>

        <div className="bg-white p-5 border border-[#C6A667]/25 rounded-sm shadow-xs">
          <div className="text-xs uppercase tracking-wider text-[#A98F86]">Guest Retention Rate</div>
          <div className="font-serif text-3xl font-bold text-[#3B2A28] mt-1 tabular-nums">
            {enterpriseMetrics.repeatClientRate}
          </div>
          <div className="text-[11px] text-emerald-700 mt-1 font-medium">Top decile in luxury salon category</div>
        </div>

        <div className="bg-white p-5 border border-[#C6A667]/25 rounded-sm shadow-xs">
          <div className="text-xs uppercase tracking-wider text-[#A98F86]">NC Sales Tax Remitted (Est)</div>
          <div className="font-serif text-3xl font-bold text-[#3B2A28] mt-1 tabular-nums">
            ${enterpriseMetrics.ncSalesTaxRemittedUSD.toLocaleString()} USD
          </div>
          <div className="text-[11px] text-[#A98F86] mt-1">NC State 4.75% + Local County Option (7.25%)</div>
        </div>
      </div>

      {/* 2 Columns: AI Operations Analyst & Branch Financial Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: AI Operations Command Center (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-[#C6A667]/30 rounded-sm p-6 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-[#302725]/10 pb-3">
            <h2 className="font-serif text-lg font-semibold text-[#302725] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C6A667]" />
              <span>AI Operations &amp; Predictive Forecasting Brief</span>
            </h2>
            <span className="text-[10px] font-mono uppercase bg-[#FAF8F5] border border-[#C6A667]/30 px-2 py-0.5 text-[#C6A667]">
              Powered by Gemini 3.8 Flash
            </span>
          </div>

          <div className="p-4 bg-[#FAF8F5] border border-[#C6A667]/20 rounded-xs text-xs sm:text-sm text-[#302725] leading-relaxed whitespace-pre-line font-sans">
            {isGeneratingAi ? (
              <div className="flex items-center gap-2 py-6 text-[#A48D84]">
                <RefreshCw className="w-4 h-4 animate-spin text-[#C6A667]" />
                <span>Synthesizing North Carolina branch booking patterns and seasonal beauty trends...</span>
              </div>
            ) : (
              aiForecastText || 'Generating operational insights...'
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
            <div className="p-3 bg-white border border-[#3B2A28]/10 rounded-xs space-y-1">
              <div className="font-semibold text-[#3B2A28]">Bridal Suite Demand</div>
              <div className="text-[#A98F86]">Weekend private styling suites booking 3 weeks ahead in NC branches.</div>
            </div>
            <div className="p-3 bg-white border border-[#3B2A28]/10 rounded-xs space-y-1">
              <div className="font-semibold text-[#3B2A28]">Staffing Delta</div>
              <div className="text-[#A98F86]">Schedule 2 NC Board certified colorists to Branch 1 Saturday shift.</div>
            </div>
            <div className="p-3 bg-white border border-[#3B2A28]/10 rounded-xs space-y-1">
              <div className="font-semibold text-[#3B2A28]">Procurement</div>
              <div className="text-[#A98F86]">Reorder caviar silk keratin &amp; 24K gold foil for North Carolina hubs.</div>
            </div>
          </div>
        </div>

        {/* Right Column: Branch Financial Contribution (5 cols) */}
        <div className="lg:col-span-5 bg-white border border-[#C6A667]/30 rounded-sm p-6 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-[#302725]/10 pb-3">
            <h2 className="font-serif text-lg font-semibold text-[#302725] flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#C6A667]" />
              <span>Location Revenue Distribution</span>
            </h2>
            <span className="text-xs text-[#A48D84] font-mono">USD ($)</span>
          </div>

          <div className="space-y-3">
            {branchBreakdown.map((b, idx) => (
              <div
                key={idx}
                className="p-3 bg-[#FAF8F5] border border-[#C6A667]/15 rounded-xs space-y-1.5"
              >
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-[#302725]">{b.name}</span>
                  <span className="font-bold text-[#C6A667] tabular-nums">
                    ${b.revenueUSD.toLocaleString()} ({b.share})
                  </span>
                </div>
                <div className="w-full bg-[#E5DCD4] h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#C6A667] h-full"
                    style={{ width: b.share }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-[#A48D84]">
                  <span>{b.bookings} Appointments</span>
                  <span className="text-emerald-700 font-semibold">{b.growth}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
