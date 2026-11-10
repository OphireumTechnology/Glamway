import React from 'react';
import { useSalon } from '../../context/SalonContext';
import { ShieldCheck, User, Building2, LineChart } from 'lucide-react';
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

  const handleRoleChange = (role: UserRole) => {
    setUserRole(role);
    if (role === 'guest') {
      setCurrentView('home');
    } else if (role === 'client') {
      setCurrentView('customer-portal');
    } else if (role === 'branch_manager') {
      setCurrentView('branch-console');
    } else if (role === 'corporate_admin') {
      setCurrentView('corporate-dashboard');
    }
  };

  return (
    <div className="bg-[#302725] text-[#FAF8F5] text-xs py-2 px-6 border-b border-[#C6A667]/20">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        
        {/* Left: Role Switcher & Active Portal status */}
        <div className="flex items-center gap-2 overflow-x-auto py-0.5">
          <span className="text-[#A48D84] uppercase tracking-wider text-[11px] font-medium mr-1 whitespace-nowrap">
            Portal View:
          </span>
          <div className="flex items-center gap-1 bg-[#231C1A] p-1 rounded-sm border border-[#C6A667]/20">
            <button
              onClick={() => handleRoleChange('guest')}
              className={`px-3 py-1 rounded-sm transition-all whitespace-nowrap ${
                userRole === 'guest' && currentView !== 'customer-portal'
                  ? 'bg-[#C6A667] text-[#302725] font-semibold' 
                  : 'text-[#FAF8F5]/70 hover:text-white'
              }`}
            >
              Public Sanctuary
            </button>
            <button
              onClick={() => handleRoleChange('client')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-sm transition-all whitespace-nowrap ${
                currentView === 'customer-portal'
                  ? 'bg-[#C6A667] text-[#302725] font-semibold' 
                  : 'text-[#FAF8F5]/70 hover:text-white'
              }`}
            >
              <User className="w-3 h-3" />
              <span>Guest Account</span>
            </button>
            <button
              onClick={() => handleRoleChange('branch_manager')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-sm transition-all whitespace-nowrap ${
                currentView === 'branch-console'
                  ? 'bg-[#C6A667] text-[#302725] font-semibold' 
                  : 'text-[#FAF8F5]/70 hover:text-white'
              }`}
            >
              <Building2 className="w-3 h-3" />
              <span>Branch Console</span>
            </button>
            <button
              onClick={() => handleRoleChange('corporate_admin')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-sm transition-all whitespace-nowrap ${
                currentView === 'corporate-dashboard'
                  ? 'bg-[#C6A667] text-[#302725] font-semibold' 
                  : 'text-[#FAF8F5]/70 hover:text-white'
              }`}
            >
              <LineChart className="w-3 h-3" />
              <span>Corporate HQ &amp; AI</span>
            </button>
          </div>
        </div>

        {/* Right: Branch Selector Context */}
        <div className="flex items-center gap-3">
          <label htmlFor="branch-filter" className="text-[#A48D84] text-[11px] uppercase tracking-wider hidden sm:inline whitespace-nowrap">
            Selected Location:
          </label>
          <select
            id="branch-filter"
            value={selectedBranchId}
            onChange={(e) => setSelectedBranchId(e.target.value)}
            className="bg-[#231C1A] text-[#FAF8F5] text-xs px-2.5 py-1 border border-[#C6A667]/30 rounded-sm focus:outline-none focus:border-[#C6A667]"
          >
            <option value="all">All South Carolina Locations (5)</option>
            {branches.map(b => (
              <option key={b.id} value={b.id}>{b.name} ({b.city}, SC)</option>
            ))}
          </select>

          <span className="text-[#C6A667] text-[11px] font-mono flex items-center gap-1 hidden md:flex">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>USD ($) · Eastern Time (America/New_York)</span>
          </span>
        </div>

      </div>
    </div>
  );
};
