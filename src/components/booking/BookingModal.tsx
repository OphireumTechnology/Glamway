import React, { useState, useEffect } from 'react';
import { useSalon } from '../../context/SalonContext';
import { BEAUTY_SPECIALISTS, GLAMWAY_ICON } from '../../data/salonData';
import { 
  X, Check, Calendar as CalendarIcon, Clock, User, 
  MapPin, Sparkles, CreditCard, ShieldCheck, ChevronRight, ChevronLeft, DollarSign
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const BookingModal: React.FC = () => {
  const { 
    activeAppointmentModal, 
    closeBookingModal, 
    branches, 
    services, 
    preselectedServiceId, 
    preselectedBranchId,
    createBooking,
    currentUser
  } = useSalon();

  // Booking Wizard Step: 1 to 8
  const [step, setStep] = useState<number>(1);

  // Selections
  const [selectedBranchId, setSelectedBranchId] = useState<string>(preselectedBranchId || branches[0].id);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(preselectedServiceId || services[0].id);
  const [selectedSpecialistId, setSelectedSpecialistId] = useState<string>('any');
  const [appointmentDate, setAppointmentDate] = useState<string>('2026-11-14');
  const [appointmentTime, setAppointmentTime] = useState<string>('11:00 AM EST');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [tipPercentage, setTipPercentage] = useState<number>(20);
  const [paymentOption, setPaymentOption] = useState<'apple_pay' | 'card' | 'google_pay' | 'salon_counter'>('apple_pay');
  
  // Client details
  const [clientName, setClientName] = useState<string>(currentUser.name);
  const [clientPhone, setClientPhone] = useState<string>(currentUser.phone);
  const [clientEmail, setClientEmail] = useState<string>(currentUser.email);
  const [specialRequests, setSpecialRequests] = useState<string>('');

  // Confirmation state
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [confirmedBooking, setConfirmedBooking] = useState<any>(null);

  useEffect(() => {
    if (preselectedBranchId) setSelectedBranchId(preselectedBranchId);
    if (preselectedServiceId) setSelectedServiceId(preselectedServiceId);
    if (activeAppointmentModal) {
      setStep(1);
      setErrorMessage(null);
      setConfirmedBooking(null);
    }
  }, [activeAppointmentModal, preselectedBranchId, preselectedServiceId]);

  if (!activeAppointmentModal) return null;

  const currentBranch = branches.find(b => b.id === selectedBranchId) || branches[0];
  const currentService = services.find(s => s.id === selectedServiceId) || services[0];
  const branchSpecialists = BEAUTY_SPECIALISTS.filter(s => s.branchId === selectedBranchId);

  // Available Time Slots in America/New_York (Eastern Time)
  const timeSlots = [
    '10:00 AM EST', '11:00 AM EST', '12:30 PM EST', '02:00 PM EST', 
    '03:30 PM EST', '05:00 PM EST', '06:00 PM EST'
  ];

  // Calculate pricing in USD
  const basePrice = currentService?.priceUSD ?? 0;
  const addOnsTotal = selectedAddOns.length * 35; // Average add-on price
  const subtotalUSD = basePrice + addOnsTotal;
  const ncEstimatedTaxUSD = Math.round(subtotalUSD * 0.0725 * 100) / 100; // NC state + local county sales tax ~7.25%
  const calculatedTipUSD = Math.round((subtotalUSD * (tipPercentage / 100)) * 100) / 100;
  const totalPriceUSD = Math.round((subtotalUSD + ncEstimatedTaxUSD + calculatedTipUSD) * 100) / 100;
  const depositRequiredUSD = Math.round(subtotalUSD * 0.3); // 30% deposit to secure suite

  const handleToggleAddOn = (addon: string) => {
    setSelectedAddOns(prev => 
      prev.includes(addon) ? prev.filter(a => a !== addon) : [...prev, addon]
    );
  };

  const handleConfirmReservation = async () => {
    setIsSubmitting(true);
    setErrorMessage(null);

    const specialistObj = branchSpecialists.find(s => s.id === selectedSpecialistId);
    const specialistName = selectedSpecialistId === 'any' ? 'First Available Specialist' : specialistObj?.name;

    const bookingPayload = {
      branchId: selectedBranchId,
      branchName: currentBranch.name,
      serviceId: selectedServiceId,
      serviceName: currentService.name,
      servicePriceUSD: basePrice,
      specialistId: selectedSpecialistId === 'any' ? undefined : selectedSpecialistId,
      specialistName,
      date: appointmentDate,
      timeSlot: appointmentTime,
      durationMinutes: currentService.durationMinutes,
      addOns: selectedAddOns,
      totalPriceUSD,
      depositPaidUSD: paymentOption === 'salon_counter' ? 0 : depositRequiredUSD,
      taxAmountUSD: ncEstimatedTaxUSD,
      gratuityUSD: calculatedTipUSD,
      paymentMethod: paymentOption,
      clientName,
      clientPhone,
      clientEmail,
      specialRequests: specialRequests.trim() || undefined
    };

    const result = await createBooking(bookingPayload);
    setIsSubmitting(false);

    if (result.success && result.appointment) {
      setConfirmedBooking(result.appointment);
      setStep(8);
      confetti({
        particleCount: 85,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#C6A667', '#F5D6DE', '#8E4B63', '#FFF9F4', '#3B2A28']
      });
    } else {
      setErrorMessage(result.error || 'Unable to secure reservation. Please select an adjacent time slot.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FFF9F4] w-full max-w-3xl border border-[#C6A667]/40 rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Top Bar */}
        <div className="bg-[#3B2A28] text-white px-6 py-4 flex items-center justify-between border-b border-[#C6A667]/30">
          <div className="flex items-center gap-3">
            <img 
              src={GLAMWAY_ICON} 
              alt="The Glamway Crown" 
              className="w-8 h-8 object-contain"
            />
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#C6A667] font-semibold">
                The Glamway Reservation Protocol · Step {step} of 8
              </div>
              <div className="font-serif text-lg font-medium">
                {step === 1 && 'Step 1: Select North Carolina Branch'}
                {step === 2 && 'Step 2: Select Beauty Ritual'}
                {step === 3 && 'Step 3: Select Dedicated Specialist'}
                {step === 4 && 'Step 4: Date & Eastern Time Slot'}
                {step === 5 && 'Step 5: Signature Ritual Enhancements'}
                {step === 6 && 'Step 6: Guest Profile & Suite Hospitality'}
                {step === 7 && 'Step 7: Deposit, Gratuity & Apple Pay / Card'}
                {step === 8 && 'Reservation Confirmed & Secured'}
              </div>
            </div>
          </div>
          <button
            onClick={closeBookingModal}
            className="text-white/70 hover:text-white p-1 transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stepper Progress Bar */}
        <div className="w-full bg-[#E8DFD8] h-1">
          <div 
            className="bg-[#C6A667] h-full transition-all duration-300"
            style={{ width: `${(step / 8) * 100}%` }}
          />
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          
          {errorMessage && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-xs rounded-sm">
              {errorMessage}
            </div>
          )}

          {/* STEP 1: SELECT BRANCH */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="text-xs text-[#A98F86]">
                Select your preferred North Carolina branch.
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {branches.map(branch => (
                  <button
                    key={branch.id}
                    onClick={() => setSelectedBranchId(branch.id)}
                    className={`p-4 text-left border rounded-sm transition-all ${
                      selectedBranchId === branch.id
                        ? 'border-[#C6A667] bg-white shadow-md ring-2 ring-[#C6A667]/50'
                        : 'border-[#C6A667]/20 bg-white/60 hover:border-[#C6A667]/50'
                    }`}
                  >
                    <div className="text-[10px] uppercase tracking-wider text-[#C6A667] font-semibold">
                      {branch.city}, NC
                    </div>
                    <div className="font-serif text-base font-semibold text-[#3B2A28] mt-0.5">
                      {branch.name}
                    </div>
                    <div className="text-xs text-[#A98F86] mt-1 line-clamp-1">
                      {branch.address}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: SELECT SERVICE */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="text-xs text-[#A98F86]">
                Select the signature treatment or VIP retreat for your visit.
              </div>
              <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-2">
                {services.map(service => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedServiceId(service.id)}
                    className={`w-full p-4 text-left border rounded-sm flex items-center justify-between gap-4 transition-all ${
                      selectedServiceId === service.id
                        ? 'border-[#C6A667] bg-white shadow-md ring-1 ring-[#C6A667]'
                        : 'border-[#C6A667]/20 bg-white/60 hover:border-[#C6A667]/50'
                    }`}
                  >
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-[#C6A667] font-medium">
                        {service.categoryLabel}
                      </div>
                      <div className="font-serif text-base font-semibold text-[#3B2A28]">
                        {service.name}
                      </div>
                      <div className="text-xs text-[#A98F86]">
                        Duration: {service.durationMinutes} mins
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-serif text-lg font-semibold text-[#3B2A28]">
                        ${service.priceUSD}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: CHOOSE SPECIALIST */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="text-xs text-[#A98F86]">
                Choose your dedicated NC Board of Cosmetic Art Sciences licensed specialist or select first available master stylist.
              </div>
              <div className="space-y-3">
                <button
                  onClick={() => setSelectedSpecialistId('any')}
                  className={`w-full p-4 text-left border rounded-sm flex items-center gap-3 transition-all ${
                    selectedSpecialistId === 'any'
                      ? 'border-[#C6A667] bg-white shadow-md ring-1 ring-[#C6A667]'
                      : 'border-[#C6A667]/20 bg-white/60'
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-[#FFF9F4] border border-[#C6A667]/40 flex items-center justify-center text-[#C6A667]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[#3B2A28]">First Available Master Artisan</div>
                    <div className="text-xs text-[#A98F86]">Maximum scheduling flexibility with NC Board-certified senior specialists.</div>
                  </div>
                </button>

                {branchSpecialists.map(specialist => (
                  <button
                    key={specialist.id}
                    onClick={() => setSelectedSpecialistId(specialist.id)}
                    className={`w-full p-4 text-left border rounded-sm flex items-center gap-3 transition-all ${
                      selectedSpecialistId === specialist.id
                        ? 'border-[#C6A667] bg-white shadow-md ring-1 ring-[#C6A667]'
                        : 'border-[#C6A667]/20 bg-white/60'
                    }`}
                  >
                    <img 
                      src={specialist.avatar} 
                      alt={specialist.name} 
                      className="w-10 h-10 rounded-full object-cover border border-[#C6A667]/30"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="font-semibold text-sm text-[#302725]">{specialist.name}</div>
                      <div className="text-xs text-[#C6A667]">{specialist.role} · Lic #{specialist.licenseId}</div>
                      <div className="text-xs text-[#A48D84]">{specialist.experienceYears} years experience · ★ {specialist.rating}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: DATE & TIME */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A48D84] font-semibold mb-2">
                  Select Appointment Date
                </label>
                <input
                  type="date"
                  value={appointmentDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                  className="w-full sm:w-64 p-3 bg-white border border-[#C6A667]/40 rounded-sm text-sm text-[#302725] focus:outline-none focus:border-[#302725]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A48D84] font-semibold mb-2">
                  Available Reserved Time Slots (Eastern Time · America/New_York)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {timeSlots.map(slot => (
                    <button
                      key={slot}
                      onClick={() => setAppointmentTime(slot)}
                      className={`p-3 text-center text-xs font-mono rounded-sm border transition-all ${
                        appointmentTime === slot
                          ? 'bg-[#302725] text-white border-[#302725] shadow-sm'
                          : 'bg-white text-[#302725] border-[#C6A667]/30 hover:border-[#C6A667]'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: ADD-ONS */}
          {step === 5 && (
            <div className="space-y-4">
              <div className="text-xs text-[#A48D84]">
                Enhance your experience with scalp micro-exfoliation, bond repair, or LED collagen therapy.
              </div>
              <div className="space-y-2.5">
                {(currentService.popularAddOns || [
                  'Olaplex Bond Multiplier Infusion (+$45)',
                  'Scalp Detox & Micro-Exfoliation (+$35)',
                  'Warm Paraffin Hand Cocoon (+$25)'
                ]).map(addon => {
                  const isChecked = selectedAddOns.includes(addon);
                  return (
                    <button
                      key={addon}
                      onClick={() => handleToggleAddOn(addon)}
                      className={`w-full p-4 text-left border rounded-sm flex items-center justify-between transition-all ${
                        isChecked
                          ? 'border-[#C6A667] bg-[#FAF8F5] shadow-xs'
                          : 'border-[#C6A667]/20 bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-xs border flex items-center justify-center ${
                          isChecked ? 'bg-[#C6A667] border-[#C6A667] text-white' : 'border-[#A48D84]'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-sm text-[#302725] font-medium">{addon}</span>
                      </div>
                      <span className="text-xs text-[#C6A667] font-semibold">Optional</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 6: CLIENT INFORMATION */}
          {step === 6 && (
            <div className="space-y-4">
              <div className="text-xs text-[#A48D84]">
                Please review your guest contact details for calendar invitations and SMS notifications.
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A48D84] mb-1">Full Name</label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full p-2.5 bg-white border border-[#C6A667]/40 rounded-sm text-sm text-[#302725]"
                    placeholder="e.g. Caroline Pinckney"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A48D84] mb-1">Mobile Phone (U.S.)</label>
                  <input
                    type="text"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full p-2.5 bg-white border border-[#C6A667]/40 rounded-sm text-sm text-[#302725]"
                    placeholder="+1 (843) 000-0000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A48D84] mb-1">Email Address</label>
                <input
                  type="email"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full p-2.5 bg-white border border-[#C6A667]/40 rounded-sm text-sm text-[#302725]"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A48D84] mb-1">Private Suite Hospitality Preferences</label>
                <textarea
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  rows={2}
                  className="w-full p-2.5 bg-white border border-[#C6A667]/40 rounded-sm text-sm text-[#302725]"
                  placeholder="e.g. Chilled champagne, botanical sweet tea, quiet suite, sensitive scalp..."
                />
              </div>
            </div>
          )}

          {/* STEP 7: PAYMENT, GRATUITY & SUMMARY */}
          {step === 7 && (
            <div className="space-y-6">
              
              {/* Order Breakdown Box */}
              <div className="bg-white p-5 border border-[#C6A667]/30 rounded-sm space-y-3">
                <div className="font-serif text-base text-[#302725] font-semibold border-b border-[#302725]/10 pb-2">
                  Reservation Summary
                </div>
                <div className="text-xs space-y-1.5 text-[#302725]">
                  <div className="flex justify-between">
                    <span className="text-[#A98F86]">Location:</span>
                    <span className="font-medium text-[#3B2A28]">{currentBranch.name} ({currentBranch.city}, NC)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A98F86]">Service:</span>
                    <span className="font-medium text-[#3B2A28]">{currentService.name} (${basePrice})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A98F86]">Schedule:</span>
                    <span className="font-medium text-[#3B2A28]">{appointmentDate} at {appointmentTime}</span>
                  </div>
                  {selectedAddOns.length > 0 && (
                    <div className="flex justify-between">
                      <span className="text-[#A98F86]">Add-ons ({selectedAddOns.length}):</span>
                      <span className="font-medium text-[#3B2A28]">+${addOnsTotal}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-[#A98F86]">
                    <span>NC Sales &amp; Local Tax (est. 7.25%):</span>
                    <span>${ncEstimatedTaxUSD.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#A98F86]">
                    <span>Artisan Gratuity ({tipPercentage}%):</span>
                    <span>${calculatedTipUSD.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-[#3B2A28]/10 font-serif text-base font-bold text-[#3B2A28]">
                    <span>Total Service Value:</span>
                    <span>${totalPriceUSD.toFixed(2)} USD</span>
                  </div>
                  <div className="flex justify-between text-xs text-[#C6A667] font-semibold">
                    <span>30% Deposit to Secure Suite:</span>
                    <span>${depositRequiredUSD} USD</span>
                  </div>
                </div>
              </div>

              {/* Tip Selection Strip */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A48D84] font-semibold mb-2">
                  Select Artisan Gratuity
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[18, 20, 25, 0].map(tip => (
                    <button
                      key={tip}
                      onClick={() => setTipPercentage(tip)}
                      className={`py-2 text-xs font-semibold rounded-sm border ${
                        tipPercentage === tip
                          ? 'bg-[#302725] text-white border-[#302725]'
                          : 'bg-white text-[#302725] border-[#C6A667]/30'
                      }`}
                    >
                      {tip === 0 ? 'Custom/Later' : `${tip}%`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-wider text-[#A48D84] font-semibold">
                  Select Deposit Payment Method
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <button
                    onClick={() => setPaymentOption('apple_pay')}
                    className={`p-3 text-center border rounded-sm transition-all ${
                      paymentOption === 'apple_pay'
                        ? 'border-black bg-stone-100 ring-1 ring-black'
                        : 'border-[#C6A667]/30 bg-white'
                    }`}
                  >
                    <div className="font-bold text-xs text-black"> Apple Pay</div>
                    <div className="text-[10px] text-[#A48D84]">One-touch checkout</div>
                  </button>

                  <button
                    onClick={() => setPaymentOption('card')}
                    className={`p-3 text-center border rounded-sm transition-all ${
                      paymentOption === 'card'
                        ? 'border-[#302725] bg-stone-100 ring-1 ring-[#302725]'
                        : 'border-[#C6A667]/30 bg-white'
                    }`}
                  >
                    <div className="font-bold text-xs text-[#302725]">Credit / Debit</div>
                    <div className="text-[10px] text-[#A48D84]">Visa · MC · Amex</div>
                  </button>

                  <button
                    onClick={() => setPaymentOption('google_pay')}
                    className={`p-3 text-center border rounded-sm transition-all ${
                      paymentOption === 'google_pay'
                        ? 'border-blue-600 bg-blue-50/50 ring-1 ring-blue-600'
                        : 'border-[#C6A667]/30 bg-white'
                    }`}
                  >
                    <div className="font-bold text-xs text-blue-600">G Pay</div>
                    <div className="text-[10px] text-[#A48D84]">Google Wallet</div>
                  </button>

                  <button
                    onClick={() => setPaymentOption('salon_counter')}
                    className={`p-3 text-center border rounded-sm transition-all ${
                      paymentOption === 'salon_counter'
                        ? 'border-[#C6A667] bg-[#FAF8F5] ring-1 ring-[#C6A667]'
                        : 'border-[#C6A667]/30 bg-white'
                    }`}
                  >
                    <div className="font-bold text-xs text-[#C6A667]">In-Salon</div>
                    <div className="text-[10px] text-[#A48D84]">Pay upon arrival</div>
                  </button>
                </div>
              </div>

              <div className="text-[11px] text-[#A48D84] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C6A667]" />
                <span>Complimentary cancellation or rescheduling permitted up to 24 hours prior. Tokenized Stripe encryption.</span>
              </div>

            </div>
          )}

          {/* STEP 8: CONFIRMATION CELEBRATION */}
          {step === 8 && confirmedBooking && (
            <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 bg-[#C6A667] text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C6A667] font-semibold">
                  Reservation Secured
                </span>
                <h3 className="font-serif text-3xl text-[#302725] font-semibold">
                  We look forward to welcoming you.
                </h3>
                <p className="text-xs text-[#A48D84] max-w-md mx-auto">
                  A calendar invitation, digital suite pass, and directions have been dispatched to {confirmedBooking.clientEmail}.
                </p>
              </div>

              {/* Digital Pass / Reference Card */}
              <div className="max-w-md mx-auto bg-white border border-[#C6A667]/40 p-6 rounded-sm text-left shadow-md space-y-3 font-mono text-xs">
                <div className="flex justify-between border-b border-[#302725]/10 pb-2">
                  <span className="text-[#A48D84]">REFERENCE CODE:</span>
                  <span className="font-bold text-[#C6A667] text-sm">{confirmedBooking.referenceCode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A48D84]">LOCATION:</span>
                  <span className="text-[#302725]">{confirmedBooking.branchName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A48D84]">SERVICE:</span>
                  <span className="text-[#302725]">{confirmedBooking.serviceName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A48D84]">SCHEDULE:</span>
                  <span className="text-[#302725]">{confirmedBooking.date} · {confirmedBooking.timeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A48D84]">GUEST:</span>
                  <span className="text-[#302725]">{confirmedBooking.clientName}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#302725]/10 text-sm font-bold">
                  <span>TOTAL PAID/AUTHORIZED:</span>
                  <span>${confirmedBooking.totalPriceUSD.toFixed(2)} USD</span>
                </div>
              </div>

              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={closeBookingModal}
                  className="px-6 py-2.5 bg-[#302725] text-white text-xs uppercase tracking-wider font-medium hover:bg-[#C6A667] transition-colors"
                >
                  Return to Salon Platform
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Actions Footer */}
        {step < 8 && (
          <div className="bg-[#FAF8F5] border-t border-[#C6A667]/20 px-6 py-4 flex items-center justify-between">
            {step > 1 ? (
              <button
                onClick={() => setStep(s => s - 1)}
                className="px-4 py-2 border border-[#C6A667]/40 text-[#302725] hover:bg-white text-xs uppercase tracking-wider font-medium flex items-center gap-1.5 transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : <div />}

            {step < 7 ? (
              <button
                onClick={() => setStep(s => s + 1)}
                className="px-6 py-2.5 bg-[#8E4B63] hover:bg-[#70374C] text-white text-xs uppercase tracking-[0.15em] font-semibold flex items-center gap-1.5 transition-colors shadow-xs rounded-xs"
              >
                <span>Continue</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={handleConfirmReservation}
                disabled={isSubmitting}
                className="px-8 py-3 bg-[#8E4B63] hover:bg-[#70374C] text-white text-xs uppercase tracking-[0.2em] font-bold flex items-center gap-2 transition-all shadow-md disabled:opacity-50 rounded-xs border border-[#C6A667]/40"
              >
                {isSubmitting ? (
                  <span>Securing Private Suite...</span>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4 text-[#C6A667]" />
                    <span>Authorize &amp; Secure Reservation</span>
                  </>
                )}
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
