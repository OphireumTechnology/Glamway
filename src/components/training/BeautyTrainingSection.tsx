import React, { useState } from 'react';
import { useSalon } from '../../context/SalonContext';
import { TRAINING_COURSES, FOUNDER_INFO } from '../../data/salonData';
import { Clock, Check, GraduationCap, Calendar, Send, Sparkles, CheckCircle2 } from 'lucide-react';

export const BeautyTrainingSection: React.FC = () => {
  const { showToast } = useSalon();
  const [selectedCourseId, setSelectedCourseId] = useState<string>(TRAINING_COURSES[0].id);
  const [enrollmentSubmitted, setEnrollmentSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experienceLevel: 'beginner',
    desiredDate: '',
    notes: ''
  });

  const selectedCourse = TRAINING_COURSES.find(c => c.id === selectedCourseId) || TRAINING_COURSES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnrollmentSubmitted(true);
    showToast(`Enrollment request submitted for ${selectedCourse.title}. We will contact you with session schedules.`);
    setTimeout(() => {
      setEnrollmentSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        experienceLevel: 'beginner',
        desiredDate: '',
        notes: ''
      });
    }, 4000);
  };

  return (
    <div className="bg-[#FFF9F4] text-[#3B2A28] py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C6A667] font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#C6A667]" />
          <span>GLAMWAY BEAUTY EDUCATION · CHARLOTTE, NC</span>
          <Sparkles className="w-3.5 h-3.5 text-[#C6A667]" />
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl text-[#3B2A28] tracking-tight">
          Professional Lash Education &amp; Training
        </h1>

        <p className="text-base sm:text-lg text-[#3B2A28]/80 font-light leading-relaxed max-w-2xl mx-auto">
          Founded by licensed esthetician Summer Davis. In-depth, practical hands-on lash courses designed to teach safe application technique, lash mapping, sanitation, and business foundations.
        </p>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
        {TRAINING_COURSES.map(course => (
          <div
            key={course.id}
            className={`bg-white border rounded-xs p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-sm ${
              selectedCourseId === course.id
                ? 'border-[#8E4B63] ring-2 ring-[#8E4B63]/20 shadow-lg'
                : 'border-[#C6A667]/30 hover:border-[#8E4B63]'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C6A667] font-bold">
                  {course.targetAudience}
                </span>
                <span className="text-xs bg-[#FFF9F4] text-[#8E4B63] px-2.5 py-1 rounded-xs border border-[#C6A667]/30 flex items-center gap-1 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-[#C6A667]" />
                  <span>{course.durationHours} Hours</span>
                </span>
              </div>

              <h3 className="font-serif text-2xl text-[#3B2A28] font-bold">
                {course.title}
              </h3>

              <div className="text-xs uppercase tracking-wider text-[#8E4B63] font-semibold">
                Hands-On Certification · Charlotte, NC
              </div>

              <p className="text-xs sm:text-sm text-[#3B2A28]/80 leading-relaxed font-light">
                {course.description}
              </p>

              {/* Curriculum List */}
              <div className="pt-3 border-t border-[#3B2A28]/10 space-y-2">
                <div className="text-[11px] uppercase tracking-wider text-[#A98F86] font-semibold">
                  Course Modules &amp; Hands-On Focus:
                </div>
                <div className="space-y-1.5">
                  {course.curriculum.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#3B2A28]/85">
                      <Check className="w-3.5 h-3.5 text-[#C6A667] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#C6A667]/20 mt-6">
              <button
                onClick={() => setSelectedCourseId(course.id)}
                className={`w-full py-3 text-xs uppercase tracking-[0.18em] font-semibold transition-all rounded-xs border ${
                  selectedCourseId === course.id
                    ? 'bg-[#8E4B63] text-white border-[#8E4B63]'
                    : 'bg-[#FFF9F4] text-[#3B2A28] border-[#C6A667]/40 hover:bg-[#8E4B63] hover:text-white'
                }`}
              >
                {selectedCourseId === course.id ? 'Selected for Enrollment' : 'Select This Course'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Founder & Instructor Credential Spotlight */}
      <div className="bg-white border border-[#C6A667]/35 rounded-xs p-6 sm:p-10 mb-16 max-w-5xl mx-auto shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-4">
          <div className="aspect-[4/5] rounded-xs overflow-hidden bg-[#D9B6A9]/20 border border-[#C6A667]/30">
            <img
              src={FOUNDER_INFO.image}
              alt="Summer Davis - Founder &amp; CEO, The Glamway Beauty Salon"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="md:col-span-8 space-y-4">
          <div className="text-xs uppercase tracking-[0.2em] text-[#C6A667] font-semibold">
            LEAD INSTRUCTOR &amp; FOUNDER
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#3B2A28]">
            {FOUNDER_INFO.name}
          </h3>
          <div className="text-xs text-[#8E4B63] font-semibold uppercase tracking-wider">
            {FOUNDER_INFO.title} · {FOUNDER_INFO.credential} · {FOUNDER_INFO.location}
          </div>
          <p className="text-xs sm:text-sm text-[#3B2A28]/85 leading-relaxed font-light">
            {FOUNDER_INFO.bio}
          </p>
          <div className="pt-2 text-xs text-[#A98F86]">
            Training takes place at our Charlotte locations with small group or private 1-on-1 instruction.
          </div>
        </div>
      </div>

      {/* Course Enrollment & Inquiry Form */}
      <div className="max-w-3xl mx-auto bg-white border border-[#C6A667]/35 rounded-xs p-6 sm:p-10 shadow-md">
        <div className="mb-6 space-y-1">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C6A667] font-semibold">
            <GraduationCap className="w-4 h-4 text-[#C6A667]" />
            <span>Course Registration</span>
          </div>
          <h2 className="font-serif text-2xl text-[#3B2A28]">
            Enroll in {selectedCourse.title}
          </h2>
          <p className="text-xs text-[#A98F86]">
            Duration: {selectedCourse.durationHours} Hours. Complete the form below to receive scheduled training dates and enrollment details.
          </p>
        </div>

        {enrollmentSubmitted ? (
          <div className="p-8 text-center space-y-4 bg-[#FFF9F4] border border-[#C6A667]/40 rounded-xs animate-in zoom-in-95 duration-200">
            <div className="w-12 h-12 rounded-full bg-[#8E4B63] text-white flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6 text-[#C6A667]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#3B2A28]">
              Enrollment Request Received
            </h3>
            <p className="text-xs text-[#3B2A28]/80 max-w-sm mx-auto leading-relaxed">
              Thank you for choosing The Glamway Beauty Education. Our training coordinator will contact you directly with upcoming session dates in Charlotte, NC.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#3B2A28] font-semibold mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Your full name"
                  className="w-full px-3.5 py-2.5 bg-[#FFF9F4] border border-[#C6A667]/30 text-xs text-[#3B2A28] rounded-xs focus:outline-none focus:border-[#8E4B63]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#3B2A28] font-semibold mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(704) 555-0123"
                  className="w-full px-3.5 py-2.5 bg-[#FFF9F4] border border-[#C6A667]/30 text-xs text-[#3B2A28] rounded-xs focus:outline-none focus:border-[#8E4B63]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#3B2A28] font-semibold mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full px-3.5 py-2.5 bg-[#FFF9F4] border border-[#C6A667]/30 text-xs text-[#3B2A28] rounded-xs focus:outline-none focus:border-[#8E4B63]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#3B2A28] font-semibold mb-1">
                  Selected Course
                </label>
                <select
                  value={selectedCourseId}
                  onChange={(e) => setSelectedCourseId(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#FFF9F4] border border-[#C6A667]/30 text-xs text-[#3B2A28] rounded-xs focus:outline-none focus:border-[#8E4B63]"
                >
                  {TRAINING_COURSES.map(c => (
                    <option key={c.id} value={c.id}>
                      {c.title} ({c.durationHours} Hours)
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#3B2A28] font-semibold mb-1">
                Lash Experience Level
              </label>
              <select
                value={formData.experienceLevel}
                onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#FFF9F4] border border-[#C6A667]/30 text-xs text-[#3B2A28] rounded-xs focus:outline-none focus:border-[#8E4B63]"
              >
                <option value="beginner">Beginner (No prior lash experience)</option>
                <option value="student">Cosmetology or Esthetics Student</option>
                <option value="licensed">Licensed Esthetician / Cosmetologist</option>
                <option value="practicing">Practicing Lash Artist (Seeking Volume Certification)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#3B2A28] font-semibold mb-1">
                Questions or Preferred Training Dates
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Let us know your ideal timing or questions about course materials..."
                className="w-full px-3.5 py-2.5 bg-[#FFF9F4] border border-[#C6A667]/30 text-xs text-[#3B2A28] rounded-xs focus:outline-none focus:border-[#8E4B63] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#8E4B63] hover:bg-[#70374C] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-colors rounded-xs shadow-md border border-[#C6A667]/40 flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5 text-[#C6A667]" />
              <span>Submit Course Enrollment Request</span>
            </button>
          </form>
        )}
      </div>

    </div>
  );
};
