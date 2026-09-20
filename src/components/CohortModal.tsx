import React, { useState } from 'react';
import { CarePool, MemberProfile } from '../types';
import { X, Users, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface CohortModalProps {
  pool: CarePool | null;
  memberLead?: MemberProfile | null;
  onClose: () => void;
}

export const CohortModal: React.FC<CohortModalProps> = ({
  pool,
  memberLead,
  onClose
}) => {
  const [name, setName] = useState('');
  const [chapter, setChapter] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!pool && !memberLead) return null;

  const title = pool?.title || memberLead?.leadTitle || 'Care Circle';
  const code = pool?.code || memberLead?.groupTag || 'Cohort';
  const isWaitlist = pool?.status === 'waitlist' || memberLead?.statusType === 'waitlist';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0f0f10]/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div className="bg-[#ffffff] border border-[#e6e1d8] rounded-xl w-full max-w-lg overflow-hidden shadow-2xl relative">
        {/* Header */}
        <div className="p-6 border-b border-[#e6e1d8] bg-[#fbf9f5] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7c5729]">
                {code}
              </span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#f6f3ec] border border-[#e6e1d8] text-[#0f0f10]">
                {isWaitlist ? 'Waitlist Roster' : 'Limited to 12 Women'}
              </span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-[#0f0f10]">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-[#ebe8e1] text-[#77777b] hover:text-[#0f0f10] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-12 h-12 bg-[#f0fdf4] text-[#16a34a] border border-[#bbf7d0] rounded-full mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-2xl font-bold tracking-tight text-[#0f0f10]">
              {isWaitlist ? 'Placed on Cohort Waitlist' : 'Admission Request Received'}
            </h4>
            <p className="text-xs text-[#46464a] leading-relaxed max-w-sm mx-auto">
              {isWaitlist
                ? 'You have been registered for the next circle opening. The clinical facilitator will contact you directly.'
                : 'A clinical intake coordinator will verify your Cigna in-network eligibility and reserve your seat within 2 hours.'}
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 bg-[#0f0f10] text-[#fbf9f5] text-xs font-semibold uppercase tracking-wider rounded-[4px]"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
            {/* Cohort Details Box */}
            <div className="bg-[#fbf9f5] border border-[#e6e1d8] p-4 rounded-lg space-y-2 text-xs">
              {pool?.facilitator && (
                <div className="flex items-center gap-2 text-[#46464a]">
                  <Users className="w-4 h-4 text-[#7c5729] shrink-0" />
                  <span><strong>Facilitator:</strong> {pool.facilitator}</span>
                </div>
              )}
              {pool?.schedule && (
                <div className="flex items-center gap-2 text-[#46464a]">
                  <Calendar className="w-4 h-4 text-[#7c5729] shrink-0" />
                  <span><strong>Meeting Rhythm:</strong> {pool.schedule}</span>
                </div>
              )}
              <div className="flex items-center gap-2 text-[#46464a]">
                <ShieldCheck className="w-4 h-4 text-[#7c5729] shrink-0" />
                <span><strong>Billing:</strong> 100% Covered In-Network under Cigna Behavioral Health (8/8 Sessions)</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#0f0f10] mb-1">
                  Full Name / Member Identifier
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Maya Vance"
                  className="w-full bg-[#fbf9f5] border border-[#e6e1d8] rounded-[4px] px-3 py-2 text-xs text-[#1c1c18] focus:border-[#0f0f10] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#0f0f10] mb-1">
                  Franchise Chapter &amp; Role
                </label>
                <input
                  type="text"
                  required
                  value={chapter}
                  onChange={(e) => setChapter(e.target.value)}
                  placeholder="e.g. Denver Chapter • Active NFL Spouse"
                  className="w-full bg-[#fbf9f5] border border-[#e6e1d8] rounded-[4px] px-3 py-2 text-xs text-[#1c1c18] focus:border-[#0f0f10] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#0f0f10] mb-1">
                  Any specific scheduling or clinical considerations?
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Prefer morning Pacific huddles, infant attending..."
                  className="w-full bg-[#fbf9f5] border border-[#e6e1d8] rounded-[4px] p-2.5 text-xs text-[#1c1c18] focus:border-[#0f0f10] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#0f0f10] hover:bg-[#262524] text-[#fbf9f5] text-xs font-semibold uppercase tracking-[0.08em] rounded-[4px] transition-all cursor-pointer"
              >
                {isWaitlist ? 'Register for Waitlist Roster' : 'Submit Cohort Reservation'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
