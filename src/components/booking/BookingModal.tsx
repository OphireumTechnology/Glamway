import React, { useState, useEffect } from 'react';
import { useSalon } from '../../context/SalonContext';
import { BEAUTY_SPECIALISTS, GLAMWAY_ICON } from '../../data/salonData';
import { 
  X, Check, Clock, User, 
  MapPin, Sparkles, ChevronRight, ChevronLeft, ShieldCheck, AlertCircle
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

  // Booking Wizard Step: 1 to 6 (Review), 7 is Confirmed Result
  const [step, setStep] = useState<number>(1);

  // Selections
  const [selectedBranchId, setSelectedBranchId] = useState<string>(preselectedBranchId || branches[0].id);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(preselectedServiceId || services[0].id);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [selectedSpecialistId, setSelectedSpecialistId] = useState<string>('any');
  const [appointmentDate, setAppointmentDate] = useState<string>('');
  const [appointmentTime, setAppointmentTime] = useState<string>('');
  
  // Client details
  const [clientName, setClientName] = useState<string>(currentUser.name);
  const [clientPhone, setClientPhone] = useState<string>(currentUser.phone);
  const [clientEmail, setClientEmail] = useState<string>(currentUser.email);
  const [specialRequests, setSpecialRequests] = useState<string>('');

  // Submission state
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
  const branchSpecialists = BEAUTY_SPECIALISTS;

  // Illustrative time options only. No availability service is connected; never present these as confirmed slots.
  const timeSlots = [
    '10:00 AM ET', '11:00 AM ET', '12:30 PM ET', '02:00 PM ET', 
    '03:30 PM ET', '05:00 PM ET', '06:00 PM ET'
  ];

  const handleConfirmReservation = async () => {
    // Fail closed: GitHub Pages has no authenticated availability/booking backend.
    setErrorMessage('Online booking is temporarily unavailable. Please contact the salon directly to confirm an appointment.');
    return;
    setIsSubmitting(true);
    setErrorMessage(null);

    const specialistObj = branchSpecialists.find(s => s.id === selectedSpecialistId);
    const specialistName = selectedSpecialistId === 'any' ? 'First Available Specialist' : specialistObj?.name;

    const bookingPayload = {
      branchId: selectedBranchId,
      branchName: currentBranch.name,
      serviceId: selectedServiceId,
      serviceName: currentService.name,
      servicePriceUSD: 0,
      specialistId: selectedSpecialistId === 'any' ? undefined : selectedSpecialistId,
      specialistName,
      date: appointmentDate,
      timeSlot: appointmentTime,
      durationMinutes: currentService.durationMinutes,
      addOns: [],
      totalPriceUSD: 0,
      depositPaidUSD: 0,
      taxAmountUSD: 0,
      paymentMethod: 'salon_counter' as const,
      clientName,
      clientPhone,
      clientEmail,
      specialRequests: specialRequests.trim() || undefined
    };

    const result = await createBooking(bookingPayload);
    setIsSubmitting(false);

    if (result.success && result.appointment) {
      setConfirmedBooking(result.appointment);
      setStep(7);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#C6A667', '#F5D6DE', '#8E4B63', '#FFF9F4', '#3B2A28']
      });
    } else {
      setErrorMessage(result.error || 'Online booking is temporarily unavailable. No appointment has been confirmed. Please contact the salon directly.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FFF9F4] w-full max-w-2xl border border-[#C6A667]/40 rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
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
                The Glamway Appointment Scheduler · Step {step <= 6 ? step : 6} of 6
              </div>
              <div className="font-serif text-lg font-medium">
                {step === 1 && '1. Select Location'}
                {step === 2 && '2. Select Service'}
                {step === 3 && '3. Select Specialist'}
                {step === 4 && '4. Select Date & Time'}
                {step === 5 && '5. Client Information'}
                {step === 6 && '6. Review Appointment Request'}
                {step === 7 && 'Appointment Request Received'}
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
            style={{ width: `${(Math.min(step, 6) / 6) * 100}%` }}
          />
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          
          {errorMessage && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-xs rounded-sm flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* STEP 1: SELECT LOCATION */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="text-xs text-[#A98F86]">
                Select your preferred Charlotte, North Carolina location.
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {branches.map(branch => (
                  <button
                    key={branch.id}
                    onClick={() => setSelectedBranchId(branch.id)}
                    className={`p-4 text-left border rounded-sm transition-all ${
                      selectedBranchId === branch.id
                        ? 'border-[#8E4B63] bg-white shadow-md ring-2 ring-[#8E4B63]/30'
                        : 'border-[#C6A667]/20 bg-white/60 hover:border-[#8E4B63]/40'
                    }`}
                  >
                    <div className="text-[10px] uppercase tracking-wider text-[#C6A667] font-semibold">
                      {branch.district}
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

          {/* STEP 2: SELECT SERVICE (NO PRICES) */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="text-xs text-[#A98F86]">
                  Select the beauty service you would like to schedule.
                </div>
                <div className="text-[11px] text-[#C6A667] font-medium uppercase tracking-wider">
                  No Public Prices
                </div>
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                {[
                  { id: 'all', label: 'All Services' },
                  { id: 'lashes', label: 'Lashes' },
                  { id: 'additional-lashes', label: 'Additional Lashes' },
                  { id: 'waxing', label: 'Waxing' },
                  { id: 'house-calls', label: 'House Calls' },
                  { id: 'hair', label: 'Hair' },
                  { id: 'nails', label: 'Nails' },
                  { id: 'facial', label: 'Facials' },
                ].map(cat => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setCategoryFilter(cat.id)}
                    className={`px-2.5 py-1 text-[11px] uppercase tracking-wider rounded-full transition-all shrink-0 border ${
                      categoryFilter === cat.id
                        ? 'bg-[#8E4B63] text-white border-[#8E4B63]'
                        : 'bg-white text-[#3B2A28] border-[#C6A667]/30 hover:border-[#8E4B63]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
                {services
                  .filter(s => categoryFilter === 'all' || s.category === categoryFilter)
                  .map(service => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedServiceId(service.id)}
                      className={`w-full p-4 text-left border rounded-sm flex items-center justify-between gap-4 transition-all ${
                        selectedServiceId === service.id
                          ? 'border-[#8E4B63] bg-white shadow-md ring-2 ring-[#8E4B63]/30'
                          : 'border-[#C6A667]/20 bg-white/60 hover:border-[#8E4B63]/40'
                      }`}
                    >
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-[#C6A667] font-semibold">
                          {service.categoryLabel}
                        </div>
                        <div className="font-serif text-base font-semibold text-[#3B2A28]">
                          {service.name}
                        </div>
                        <div className="text-xs text-[#A98F86] mt-0.5 line-clamp-1">
                          {service.tagline}
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-xs bg-[#FFF9F4] text-[#8E4B63] px-2.5 py-1 rounded-xs border border-[#C6A667]/30 flex items-center gap-1 font-mono">
                          <Clock className="w-3 h-3 text-[#C6A667]" />
                          <span>{service.durationMinutes} mins</span>
                        </span>
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
                Select your preferred beauty specialist or choose first available.
              </div>
              <div className="space-y-3">
                <button
                  onClick={() => setSelectedSpecialistId('any')}
                  className={`w-full p-4 text-left border rounded-sm flex items-center gap-3 transition-all ${
                    selectedSpecialistId === 'any'
                      ? 'border-[#8E4B63] bg-white shadow-md ring-2 ring-[#8E4B63]/30'
                      : 'border-[#C6A667]/20 bg-white/60'
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-[#FFF9F4] border border-[#C6A667]/40 flex items-center justify-center text-[#8E4B63]">
                    <Sparkles className="w-5 h-5 text-[#C6A667]" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[#3B2A28]">First Available Specialist</div>
                    <div className="text-xs text-[#A98F86]">Optimal scheduling flexibility for your requested date and time.</div>
                  </div>
                </button>

                {branchSpecialists.map(specialist => (
                  <button
                    key={specialist.id}
                    onClick={() => setSelectedSpecialistId(specialist.id)}
                    className={`w-full p-4 text-left border rounded-sm flex items-center gap-3 transition-all ${
                      selectedSpecialistId === specialist.id
                        ? 'border-[#8E4B63] bg-white shadow-md ring-2 ring-[#8E4B63]/30'
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
                      <div className="font-semibold text-sm text-[#3B2A28]">{specialist.name}</div>
                      <div className="text-xs text-[#8E4B63] font-medium">{specialist.role}</div>
                      <div className="text-xs text-[#A98F86]">{specialist.specialties.join(' · ')}</div>
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
                <label className="block text-xs uppercase tracking-wider text-[#3B2A28] font-semibold mb-2">
                  Select Appointment Date
                </label>
                <input
                  type="date"
                  value={appointmentDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                  className="w-full sm:w-64 p-3 bg-white border border-[#C6A667]/40 rounded-sm text-sm text-[#3B2A28] focus:outline-none focus:border-[#8E4B63]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#3B2A28] font-semibold mb-2">
                  Available Time Slots (Eastern Time)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {timeSlots.map(slot => (
                    <button
                      key={slot}
                      onClick={() => setAppointmentTime(slot)}
                      className={`p-3 text-center text-xs font-mono rounded-sm border transition-all ${
                        appointmentTime === slot
                          ? 'bg-[#8E4B63] text-white border-[#8E4B63] shadow-sm'
                          : 'bg-white text-[#3B2A28] border-[#C6A667]/30 hover:border-[#8E4B63]'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: ENTER CUSTOMER INFORMATION */}
          {step === 5 && (
            <div className="space-y-4">
              <div className="text-xs text-[#A98F86]">
                Please enter your contact details for appointment coordination.
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#3B2A28] font-semibold mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full p-2.5 bg-white border border-[#C6A667]/40 rounded-sm text-sm text-[#3B2A28] focus:outline-none focus:border-[#8E4B63]"
                    placeholder="e.g. Eleanor Vance"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#3B2A28] font-semibold mb-1">
                    Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full p-2.5 bg-white border border-[#C6A667]/40 rounded-sm text-sm text-[#3B2A28] focus:outline-none focus:border-[#8E4B63]"
                    placeholder="(704) 555-0192"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#3B2A28] font-semibold mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full p-2.5 bg-white border border-[#C6A667]/40 rounded-sm text-sm text-[#3B2A28] focus:outline-none focus:border-[#8E4B63]"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#3B2A28] font-semibold mb-1">
                  Special Preferences or Notes (Optional)
                </label>
                <textarea
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  rows={2}
                  className="w-full p-2.5 bg-white border border-[#C6A667]/40 rounded-sm text-sm text-[#3B2A28] focus:outline-none focus:border-[#8E4B63] resize-none"
                  placeholder="e.g. Lash map preference, sensitive skin notes..."
                />
              </div>
            </div>
          )}

          {/* STEP 6: REVIEW APPOINTMENT REQUEST (NO PRICING) */}
          {step === 6 && (
            <div className="space-y-5">
              <div className="bg-white p-5 border border-[#C6A667]/30 rounded-sm space-y-3 shadow-xs">
                <div className="font-serif text-lg text-[#3B2A28] font-semibold border-b border-[#3B2A28]/10 pb-2">
                  Review Appointment Request
                </div>

                <div className="text-xs space-y-2 text-[#3B2A28]">
                  <div className="flex justify-between py-1 border-b border-[#3B2A28]/5">
                    <span className="text-[#A98F86]">Location:</span>
                    <span className="font-semibold text-[#3B2A28]">{currentBranch.name}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#3B2A28]/5">
                    <span className="text-[#A98F86]">Address:</span>
                    <span className="text-[#3B2A28]">{currentBranch.address}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#3B2A28]/5">
                    <span className="text-[#A98F86]">Service:</span>
                    <span className="font-semibold text-[#8E4B63]">{currentService.name}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#3B2A28]/5">
                    <span className="text-[#A98F86]">Duration:</span>
                    <span className="text-[#3B2A28]">{currentService.durationMinutes} minutes</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#3B2A28]/5">
                    <span className="text-[#A98F86]">Specialist:</span>
                    <span className="text-[#3B2A28]">
                      {selectedSpecialistId === 'any' ? 'First Available Specialist' : branchSpecialists.find(s => s.id === selectedSpecialistId)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#3B2A28]/5">
                    <span className="text-[#A98F86]">Scheduled Date &amp; Time:</span>
                    <span className="font-semibold text-[#3B2A28]">{appointmentDate} at {appointmentTime}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#3B2A28]/5">
                    <span className="text-[#A98F86]">Guest Name:</span>
                    <span className="text-[#3B2A28]">{clientName || 'Not specified'}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#3B2A28]/5">
                    <span className="text-[#A98F86]">Contact Phone:</span>
                    <span className="text-[#3B2A28]">{clientPhone || 'Not specified'}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#A98F86]">Contact Email:</span>
                    <span className="text-[#3B2A28]">{clientEmail || 'Not specified'}</span>
                  </div>
                </div>
              </div>

              {/* Appointment Confirmation Notice */}
              <div className="p-3.5 bg-[#FFF9F4] border border-[#C6A667]/30 rounded-xs text-xs text-[#3B2A28]/85 space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-[#8E4B63]">
                  <ShieldCheck className="w-4 h-4 text-[#C6A667]" />
                  <span>Appointment Reservation</span>
                </div>
                <p className="text-[11px] text-[#A98F86] leading-relaxed">
                  Appointments are reserved online in advance for private suites at our Charlotte locations or via scheduled house calls.
                </p>
              </div>
            </div>
          )}

          {/* STEP 7: APPOINTMENT CONFIRMATION */}
          {step === 7 && confirmedBooking && (
            <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 bg-[#8E4B63] text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C6A667] font-semibold">
                  Appointment Request Received
                </span>
                <h3 className="font-serif text-3xl text-[#3B2A28] font-semibold">
                  We look forward to welcoming you.
                </h3>
                <p className="text-xs text-[#A98F86] max-w-md mx-auto">
                  Your appointment request has been registered in our system. A confirmation has been prepared for {confirmedBooking.clientEmail}.
                </p>
              </div>

              {/* Confirmation Details Card */}
              <div className="bg-white p-5 border border-[#C6A667]/40 rounded-sm text-left max-w-md mx-auto text-xs space-y-2.5">
                <div className="flex justify-between border-b border-[#3B2A28]/10 pb-2">
                  <span className="text-[#A98F86]">Reference Code:</span>
                  <span className="font-mono font-bold text-[#8E4B63]">{confirmedBooking.referenceCode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A98F86]">Location:</span>
                  <span className="font-semibold text-[#3B2A28]">{confirmedBooking.branchName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A98F86]">Service:</span>
                  <span className="font-semibold text-[#3B2A28]">{confirmedBooking.serviceName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A98F86]">Scheduled Time:</span>
                  <span className="text-[#3B2A28]">{confirmedBooking.date} at {confirmedBooking.timeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A98F86]">Guest:</span>
                  <span className="text-[#3B2A28]">{confirmedBooking.clientName}</span>
                </div>
              </div>

              <button
                onClick={closeBookingModal}
                className="px-8 py-3 bg-[#8E4B63] hover:bg-[#70374C] text-white text-xs uppercase tracking-[0.2em] font-semibold rounded-xs shadow-md transition-colors"
              >
                Close &amp; Return to Website
              </button>
            </div>
          )}

        </div>

        {/* Modal Bottom Action Controls (Steps 1 to 6) */}
        {step <= 6 && (
          <div className="bg-white px-6 py-4 border-t border-[#C6A667]/30 flex items-center justify-between">
            {step > 1 ? (
              <button
                onClick={() => setStep(prev => prev - 1)}
                className="px-4 py-2 border border-[#C6A667]/30 hover:border-[#3B2A28] text-xs font-semibold text-[#3B2A28] rounded-xs flex items-center gap-1.5 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            {step < 6 ? (
              <button
                onClick={() => setStep(prev => prev + 1)}
                className="px-6 py-2.5 bg-[#8E4B63] hover:bg-[#70374C] text-white text-xs uppercase tracking-[0.18em] font-semibold rounded-xs flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <span>Continue</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleConfirmReservation}
                disabled={isSubmitting}
                className="px-7 py-3 bg-[#8E4B63] hover:bg-[#70374C] text-white text-xs uppercase tracking-[0.2em] font-semibold rounded-xs flex items-center gap-2 shadow-md transition-all border border-[#C6A667]/40 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Submitting Request...</span>
                ) : (
                  <>
                    <Check className="w-4 h-4 text-[#C6A667]" />
                    <span>Submit Booking Request</span>
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
