import React from 'react';
import { useSalon } from '../../context/SalonContext';
import { ShieldCheck, ArrowLeft, Building2, LineChart } from 'lucide-react';
import { UserRole } from '../../types';

export const PlatformNavigation: React.FC = () => {
  const { 
    currentView, 
    setCurrentView, 
    userRole, 
    setUserRole, 
    selectedBranchId, 
    setSelectedBranchId, 
    branches 
  } = useSalon();

  // ONLY render when actively inside staff portals
  const isStaffView = currentView === 'branch-console' || currentView === 'corporate-dashboard';

  if (!isStaffView) {
    return null;
  }

  const handleRoleChange = (role: UserRole) => {
    setUserRole(role);
    if (role === 'branch_manager') {
      setCurrentView('branch-console');
    } else if (role === 'corporate_admin') {
      setCurrentView('corporate-dashboard');
    }
  };

  const handleExitToPublic = () => {
    setUserRole('client');
    setCurrentView('home');
  };

  return (
    <div className="bg-[#3B2A28] text-[#FFF9F4] text-xs py-2 px-4 sm:px-6 border-b border-[#C6A667]/30 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        
        {/* Left: Staff Session Badge & Mode Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleExitToPublic}
            className="flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-white/20 text-[#FFF9F4] rounded-xs transition-colors border border-white/10"
            title="Return to Public Luxury Website"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#C6A667]" />
            <span className="font-medium text-[11px] uppercase tracking-wider">Public Website</span>
          </button>

          <span className="text-[#C6A667] hidden sm:inline font-mono text-[11px]">|</span>

          <div className="flex items-center gap-1.5 bg-[#2E201E] p-0.5 rounded-xs border border-[#C6A667]/25">
            <button
              onClick={() => handleRoleChange('branch_manager')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-xs transition-all whitespace-nowrap text-[11px] ${
                currentView === 'branch-console'
                  ? 'bg-[#8E4B63] text-white font-semibold shadow-xs' 
                  : 'text-[#FFF9F4]/70 hover:text-white'
              }`}
            >
              <Building2 className="w-3 h-3" />
              <span>Branch Console</span>
            </button>
            <button
              onClick={() => handleRoleChange('corporate_admin')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-xs transition-all whitespace-nowrap text-[11px] ${
                currentView === 'corporate-dashboard'
                  ? 'bg-[#8E4B63] text-white font-semibold shadow-xs' 
                  : 'text-[#FFF9F4]/70 hover:text-white'
              }`}
            >
              <LineChart className="w-3 h-3" />
              <span>Corporate HQ &amp; AI</span>
            </button>
          </div>
        </div>

        {/* Right: Branch Selector & State info */}
        <div className="flex items-center gap-3">
          <label htmlFor="branch-filter" className="text-[#A98F86] text-[11px] uppercase tracking-wider hidden md:inline whitespace-nowrap">
            Active Scope:
          </label>
          <select
            id="branch-filter"
            value={selectedBranchId}
            onChange={(e) => setSelectedBranchId(e.target.value)}
            className="bg-[#2E201E] text-[#FFF9F4] text-xs px-2.5 py-1 border border-[#C6A667]/30 rounded-xs focus:outline-none focus:border-[#C6A667]"
          >
            <option value="all">All North Carolina Branches (2)</option>
            {branches.map(b => (
              <option key={b.id} value={b.id}>{b.name}</option>
            ))}
          </select>

          <span className="text-[#C6A667] text-[11px] font-mono flex items-center gap-1 hidden lg:flex">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Staff Mode (NC Board Licensed)</span>
          </span>
        </div>

      </div>
    </div>
  );
};
