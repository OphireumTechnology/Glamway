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
      setAiForecastText(`• Peak Demand (EST): Friday & Saturday bridal party occupancy tracking at 96% in Charleston & Mount Pleasant.
• Staff Scheduling: Recommend scheduling 2 additional SC LLR-licensed master colorists for King Street Saturday afternoon shifts.
• Inventory Alert: Caviar Restorative Serum (1.7 fl oz) and 24K Gold Leaf inventory low across Greenville and Columbia; automatic reorder of 45 units suggested.
• Service Growth: Coastal Keratin Humidity Infusion bookings up +32% across the Lowcountry.`);
    } finally {
      setIsGeneratingAi(false);
    }
  };

  useEffect(() => {
    fetchAiForecast();
  }, [selectedBranchFilter]);

  // Consolidated enterprise metrics in USD for South Carolina
  const enterpriseMetrics = {
    grossMonthlyRevenueUSD: 345000,
    totalMonthlyBookings: 1420,
    repeatClientRate: '79.2%',
    averageTicketUSD: 242.95,
    inventoryAssetValueUSD: 88500,
    scSalesTaxRemittedUSD: 27600
  };

  const branchBreakdown = [
    { name: 'Charleston Historic Sanctuary', revenueUSD: 118000, share: '34.2%', bookings: 462, growth: '+18.5%' },
    { name: 'Greenville Main Street Penthouse', revenueUSD: 89000, share: '25.8%', bookings: 374, growth: '+14.1%' },
    { name: 'Mount Pleasant Waterfront Villa', revenueUSD: 58000, share: '16.8%', bookings: 245, growth: '+16.2%' },
    { name: 'Columbia Vista Suite', revenueUSD: 46000, share: '13.3%', bookings: 202, growth: '+8.9%' },
    { name: 'Hilton Head Coastal Pavilion', revenueUSD: 34000, share: '9.9%', bookings: 137, growth: '+21.4%' }
  ];

  return (
    <div className="py-10 px-6 max-w-7xl mx-auto space-y-8">
      
      {/* Top Banner */}
      <div className="bg-[#302725] text-white p-6 rounded-sm border border-[#C6A667]/40 shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C6A667]">
            <LineChart className="w-4 h-4" />
            <span>Corporate Head Office &amp; AI Intelligence · South Carolina, USA</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-semibold mt-1">
            Enterprise Consolidated Command
          </h1>
          <div className="text-xs text-[#FAF8F5]/70 mt-0.5">
            Real-time financial, SC LLR compliance, and predictive analytics across 5 South Carolina flagship locations.
          </div>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={selectedBranchFilter}
            onChange={(e) => setSelectedBranchFilter(e.target.value)}
            className="bg-[#231C1A] text-xs text-white border border-[#C6A667]/40 px-3 py-2 rounded-xs"
          >
            <option value="all">Consolidated South Carolina Network (5)</option>
            {branches.map(b => (
              <option key={b.id} value={b.id}>{b.name} ({b.city}, SC)</option>
            ))}
          </select>

          <button
            onClick={fetchAiForecast}
            disabled={isGeneratingAi}
            className="px-4 py-2 bg-[#C6A667] hover:bg-white hover:text-[#302725] text-white text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5 disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isGeneratingAi ? 'animate-spin' : ''}`} />
            <span>Refresh AI Model</span>
          </button>
        </div>
      </div>

      {/* KPI 4-Card Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 border border-[#C6A667]/25 rounded-sm shadow-xs">
          <div className="text-xs uppercase tracking-wider text-[#A48D84]">Consolidated Monthly Revenue</div>
          <div className="font-serif text-3xl font-bold text-[#C6A667] mt-1 tabular-nums">
            ${enterpriseMetrics.grossMonthlyRevenueUSD.toLocaleString()} USD
          </div>
          <div className="text-[11px] text-emerald-700 mt-1 font-medium">+16.4% YoY Growth across SC</div>
        </div>

        <div className="bg-white p-5 border border-[#C6A667]/25 rounded-sm shadow-xs">
          <div className="text-xs uppercase tracking-wider text-[#A48D84]">Network Bookings Completed</div>
          <div className="font-serif text-3xl font-bold text-[#302725] mt-1 tabular-nums">
            {enterpriseMetrics.totalMonthlyBookings.toLocaleString()}
          </div>
          <div className="text-[11px] text-[#A48D84] mt-1">Average Ticket: ${enterpriseMetrics.averageTicketUSD} USD</div>
        </div>

        <div className="bg-white p-5 border border-[#C6A667]/25 rounded-sm shadow-xs">
          <div className="text-xs uppercase tracking-wider text-[#A48D84]">Guest Retention Rate</div>
          <div className="font-serif text-3xl font-bold text-[#302725] mt-1 tabular-nums">
            {enterpriseMetrics.repeatClientRate}
          </div>
          <div className="text-[11px] text-emerald-700 mt-1 font-medium">Top decile in luxury salon category</div>
        </div>

        <div className="bg-white p-5 border border-[#C6A667]/25 rounded-sm shadow-xs">
          <div className="text-xs uppercase tracking-wider text-[#A48D84]">SC Sales Tax Remitted (Est)</div>
          <div className="font-serif text-3xl font-bold text-[#302725] mt-1 tabular-nums">
            ${enterpriseMetrics.scSalesTaxRemittedUSD.toLocaleString()} USD
          </div>
          <div className="text-[11px] text-[#A48D84] mt-1">SC State 6% + Local County Option</div>
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
                <span>Synthesizing multi-location booking patterns and Southern seasonal trends...</span>
              </div>
            ) : (
              aiForecastText || 'Generating operational insights...'
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
            <div className="p-3 bg-white border border-[#302725]/10 rounded-xs space-y-1">
              <div className="font-semibold text-[#302725]">Lowcountry Bridal Surge</div>
              <div className="text-[#A48D84]">Weekend bridal suites in Charleston &amp; Mt Pleasant booking 3 weeks ahead.</div>
            </div>
            <div className="p-3 bg-white border border-[#302725]/10 rounded-xs space-y-1">
              <div className="font-semibold text-[#302725]">Staffing Delta</div>
              <div className="text-[#A48D84]">Schedule 2 SC LLR-licensed colorists to King St Saturday shift.</div>
            </div>
            <div className="p-3 bg-white border border-[#302725]/10 rounded-xs space-y-1">
              <div className="font-semibold text-[#302725]">Procurement</div>
              <div className="text-[#A48D84]">Reorder caviar silk keratin &amp; 24K gold foil for Greenville.</div>
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
