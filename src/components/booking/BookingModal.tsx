import React from 'react';
import { CalendarDays, Clock, Mail, MapPin, Phone, X } from 'lucide-react';
import { useSalon } from '../../context/SalonContext';
import { GLAMWAY_LOGO } from '../../data/salonData';

/**
 * Public appointment information panel.
 * No availability or confirmed bookings are offered until an authenticated,
 * persistent booking API and authoritative slot source have been deployed.
 */
export const BookingModal: React.FC = () => {
  const {
    activeAppointmentModal, closeBookingModal, branches, services,
    preselectedServiceId, preselectedBranchId
  } = useSalon();

  if (!activeAppointmentModal) return null;

  const service = services.find(item => item.id === preselectedServiceId);
  const branch = branches.find(item => item.id === preselectedBranchId);
  const phone = branch?.phone || branches[0]?.phone;
  const email = branch?.email || branches[0]?.email;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 sm:p-6" role="presentation">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="glamway-appointment-title"
        aria-describedby="glamway-appointment-description"
        className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-lg border border-[#C6A667]/40 bg-[#FFF9F4] p-6 sm:p-8 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4">
          <img src={GLAMWAY_LOGO} alt="The Glamway Beauty Salon" className="h-20 w-auto max-w-[190px] object-contain" />
          <button type="button" onClick={closeBookingModal} aria-label="Close appointment information" className="rounded-md p-2 text-[#3B2A28] hover:bg-[#F5D6DE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8E4B63]">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-5 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#8E4B63]">
            <CalendarDays className="h-4 w-4" /> Appointments
          </div>
          <h2 id="glamway-appointment-title" className="font-serif text-3xl text-[#3B2A28]">Plan your Glamway visit</h2>
          <p id="glamway-appointment-description" className="text-sm leading-relaxed text-[#3B2A28]/85">
            Online booking is temporarily unavailable. Please contact the salon to ask about appointment availability and confirmation. No reservation has been made.
          </p>
        </div>
        {service && (
          <div className="mt-6 rounded-md border border-[#C6A667]/30 bg-white p-4">
            <div className="font-serif text-lg text-[#3B2A28]">{service.name}</div>
            <div className="mt-1 flex items-center gap-2 text-sm text-[#8E4B63]"><Clock className="h-4 w-4" /> {service.durationMinutes} minutes</div>
          </div>
        )}
        {branch && <div className="mt-4 flex items-start gap-2 text-sm text-[#3B2A28]"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C6A667]" /><span>{branch.name} — {branch.address}</span></div>}
        <div className="mt-7 flex flex-col gap-3">
          {phone && <a href={`tel:${phone.replace(/[^+\d]/g, '')}`} className="flex items-center justify-center gap-2 rounded-md bg-[#8E4B63] px-5 py-3 font-semibold text-white hover:bg-[#70374C]"><Phone className="h-4 w-4" /> Call the salon</a>}
          {email && <a href={`mailto:${email}`} className="flex items-center justify-center gap-2 rounded-md border border-[#C6A667] bg-white px-5 py-3 font-semibold text-[#3B2A28] hover:bg-[#F5D6DE]/40"><Mail className="h-4 w-4" /> Email the salon</a>}
        </div>
        <p className="mt-5 text-xs leading-relaxed text-[#7C6862]">Appointment availability and confirmation must be provided directly by the salon. No service prices are displayed.</p>
      </section>
    </div>
  );
};
