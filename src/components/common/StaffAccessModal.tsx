import React, { useState } from 'react';
import { useSalon } from '../../context/SalonContext';
import { ShieldCheck, Building2, LineChart, Lock, X, ArrowRight } from 'lucide-react';

interface StaffAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StaffAccessModal: React.FC<StaffAccessModalProps> = ({ isOpen, onClose }) => {
  const { setUserRole, setCurrentView, branches, setSelectedBranchId } = useSalon();
  const [selectedTarget, setSelectedTarget] = useState<'branch' | 'corporate'>('branch');
  const [targetBranchId, setTargetBranchId] = useState<string>(branches[0]?.id || 'branch-nc-1');
  const [pinCode, setPinCode] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleAccess = (e: React.FormEvent) => {
    e.preventDefault();
    setError('Staff access is unavailable until secure server-side authentication is configured.');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FFF9F4] w-full max-w-md border border-[#C6A667]/40 rounded-sm shadow-2xl overflow-hidden text-[#3B2A28]">
        
        {/* Top Header */}
        <div className="bg-[#3B2A28] text-white p-5 flex items-center justify-between border-b border-[#C6A667]/30">
          <div className="flex items-center gap-2.5">
            <Lock className="w-4 h-4 text-[#C6A667]" />
            <div className="font-serif text-base font-semibold tracking-wide">
              Staff &amp; Executive Portal
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-1"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleAccess} className="p-6 space-y-5">
          <p className="text-xs text-[#A98F86] leading-relaxed">
            Restricted access for North Carolina salon branch managers, front-desk artisans, and corporate operations directors.
          </p>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xs">
              {error}
            </div>
          )}

          {/* Portal Selection */}
          <div className="space-y-2.5">
            <label className="block text-[11px] uppercase tracking-wider text-[#A98F86] font-semibold">
              Select Department
            </label>

            <div className="grid grid-cols-2 gap-2.5 text-xs">
              <button
                type="button"
                onClick={() => setSelectedTarget('branch')}
                className={`p-3 text-left border rounded-xs transition-all ${
                  selectedTarget === 'branch'
                    ? 'border-[#8E4B63] bg-white shadow-xs font-semibold text-[#8E4B63]'
                    : 'border-[#C6A667]/25 bg-white/60 text-[#3B2A28]/80'
                }`}
              >
                <Building2 className="w-4 h-4 mb-1 text-[#C6A667]" />
                <div>Branch Reception</div>
                <div className="text-[10px] text-[#A98F86] font-normal">Desk &amp; Walk-ins</div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedTarget('corporate')}
                className={`p-3 text-left border rounded-xs transition-all ${
                  selectedTarget === 'corporate'
                    ? 'border-[#8E4B63] bg-white shadow-xs font-semibold text-[#8E4B63]'
                    : 'border-[#C6A667]/25 bg-white/60 text-[#3B2A28]/80'
                }`}
              >
                <LineChart className="w-4 h-4 mb-1 text-[#C6A667]" />
                <div>Corporate HQ</div>
                <div className="text-[10px] text-[#A98F86] font-normal">Analytics &amp; Revenue</div>
              </button>
            </div>
          </div>

          {/* Branch selector if branch target */}
          {selectedTarget === 'branch' && (
            <div className="space-y-1">
              <label className="block text-[11px] text-[#A98F86] font-medium">
                North Carolina Location
              </label>
              <select
                value={targetBranchId}
                onChange={(e) => setTargetBranchId(e.target.value)}
                className="w-full text-xs p-2.5 bg-white border border-[#C6A667]/40 rounded-xs text-[#3B2A28] focus:outline-none focus:border-[#8E4B63]"
              >
                {branches.map(b => (
                  <option key={b.id} value={b.id}>{b.name}</option>
                ))}
              </select>
            </div>
          )}

          {/* Staff ID / PIN Code */}
          <div className="space-y-1">
            <label className="block text-[11px] text-[#A98F86] font-medium">
              Staff Passcode or Operator PIN
            </label>
            <input
              type="password"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
              placeholder="Staff access temporarily unavailable"
              className="w-full text-xs p-2.5 bg-white border border-[#C6A667]/40 rounded-xs text-[#3B2A28] focus:outline-none focus:border-[#8E4B63]"
            />
            <div className="text-[10px] text-[#A98F86]">
              Secure staff sign-in is not yet available.
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2.5 bg-[#8E4B63] hover:bg-[#70374C] text-white text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Authenticate &amp; Enter Console</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="pt-1 text-center">
            <span className="text-[10px] text-[#A98F86] flex items-center justify-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#C6A667]" />
              <span>Staff access requires verified authentication and authorization</span>
            </span>
          </div>
        </form>

      </div>
    </div>
  );
};
