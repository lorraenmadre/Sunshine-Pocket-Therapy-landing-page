import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Lock, Send, CheckCircle2, Clock, Sparkles } from 'lucide-react';

interface IntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetRequest?: string;
}

export const IntakeModal: React.FC<IntakeModalProps> = ({
  isOpen,
  onClose,
  presetRequest = ''
}) => {
  const [category, setCategory] = useState('Mid-Season Franchise Relocation');
  const [details, setDetails] = useState('');
  const [contactMethod, setContactMethod] = useState('Encrypted Signal');
  const [contactValue, setContactValue] = useState('');
  const [urgency, setUrgency] = useState('Immediate (< 2 Hours)');
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);

  useEffect(() => {
    if (presetRequest) {
      setDetails(presetRequest);
    }
  }, [presetRequest]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomTicket = `SPT-${Math.floor(100 + Math.random() * 900)}-${category.slice(0, 3).toUpperCase()}`;
    setSubmittedCode(randomTicket);
  };

  const handleReset = () => {
    setSubmittedCode(null);
    setDetails('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0f0f10]/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div className="bg-[#ffffff] border border-[#e6e1d8] rounded-xl w-full max-w-lg overflow-hidden shadow-2xl relative">
        {/* Header with Title & Security Badge */}
        <div className="p-6 border-b border-[#e6e1d8] bg-[#fbf9f5] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7c5729]">
                Title II HIPAA Encrypted Intake
              </span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-[#0f0f10]">
              Sovereign Care &amp; Transition Request
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-[#ebe8e1] text-[#77777b] hover:text-[#0f0f10] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submittedCode ? (
          /* Confirmation Screen */
          <div className="p-8 text-center space-y-5">
            <div className="w-14 h-14 bg-[#f0fdf4] text-[#16a34a] border border-[#bbf7d0] rounded-full mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#7c5729]">
                Triage Request Sequestered &amp; Dispatched
              </span>
              <h4 className="text-2xl font-bold tracking-tight text-[#0f0f10] mt-1">
                Liaison Assigned to Station
              </h4>
              <p className="text-xs text-[#46464a] mt-2 max-w-sm mx-auto leading-relaxed">
                Your intake has been transmitted directly to Lorraen Madre and our licensed clinical directors under zero-knowledge encryption.
              </p>
            </div>

            <div className="bg-[#fbf9f5] border border-[#e6e1d8] rounded-lg p-4 text-left max-w-sm mx-auto space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-[#77777b]">Reference Ticket:</span>
                <span className="font-mono font-bold text-[#0f0f10]">{submittedCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#77777b]">Guaranteed SLA:</span>
                <span className="font-semibold text-[#16a34a]">&lt; 2-Hour Response</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#77777b]">Franchise Visibility:</span>
                <span className="font-semibold text-[#0f0f10]">0.0% (Sequestered)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#77777b]">Direct Channel:</span>
                <span className="font-semibold text-[#0f0f10]">{contactMethod}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 bg-[#0f0f10] hover:bg-[#262524] text-[#fbf9f5] text-xs font-semibold uppercase tracking-[0.08em] rounded-[4px] transition-all cursor-pointer"
            >
              Return to Member Pocket
            </button>
          </div>
        ) : (
          /* Intake Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            {/* Category selection */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#0f0f10] mb-1.5">
                Transition or Care Focus
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-[#fbf9f5] border border-[#e6e1d8] rounded-[4px] px-3 py-2.5 text-xs text-[#1c1c18] focus:border-[#0f0f10] focus:outline-none"
              >
                <option value="Mid-Season Franchise Relocation">Mid-Season Franchise Relocation (48-Hr Shift)</option>
                <option value="Pediatric Autism & Speech IEP">Pediatric Autism, Speech &amp; Neurodivergent IEP</option>
                <option value="Cigna TPA Claims & Out-of-Pocket">Cigna TPA Out-of-Pocket &amp; Surprise Bill Appeal</option>
                <option value="WealthCounsel Lease & Trust Defense">WealthCounsel Lease Termination &amp; Family Trust</option>
                <option value="Post-Career Transition & Identity">Post-Career Transition &amp; Alumnae Identity</option>
                <option value="Maternal & Postpartum Support">Maternal &amp; Postpartum Clinical Support</option>
              </select>
            </div>

            {/* Request narrative */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#0f0f10]">
                  What are you or your family navigating?
                </label>
                <span className="text-[10px] text-[#77777b]">Encrypted</span>
              </div>
              <textarea
                required
                rows={3}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Share any pressing specifics (city, school deadlines, current clinic, lease details)..."
                className="w-full bg-[#fbf9f5] border border-[#e6e1d8] rounded-[4px] p-3 text-xs text-[#1c1c18] placeholder-[#77777b] focus:border-[#0f0f10] focus:outline-none leading-relaxed"
              />
            </div>

            {/* Secure Contact Channel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#0f0f10] mb-1.5">
                  Preferred Contact
                </label>
                <select
                  value={contactMethod}
                  onChange={(e) => setContactMethod(e.target.value)}
                  className="w-full bg-[#fbf9f5] border border-[#e6e1d8] rounded-[4px] px-3 py-2 text-xs text-[#1c1c18] focus:border-[#0f0f10] focus:outline-none"
                >
                  <option value="Encrypted Signal">Encrypted Signal</option>
                  <option value="Direct Private Phone">Direct Private Phone</option>
                  <option value="Confidential Email">Confidential Email</option>
                  <option value="Google Vault Secure Chat">Google Vault Secure Chat</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#0f0f10] mb-1.5">
                  Your Number or Handle
                </label>
                <input
                  type="text"
                  required
                  value={contactValue}
                  onChange={(e) => setContactValue(e.target.value)}
                  placeholder="e.g. +1 (303) 555-0192"
                  className="w-full bg-[#fbf9f5] border border-[#e6e1d8] rounded-[4px] px-3 py-2 text-xs text-[#1c1c18] placeholder-[#77777b] focus:border-[#0f0f10] focus:outline-none"
                />
              </div>
            </div>

            {/* SLA Urgency Tier */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#0f0f10] mb-1.5">
                Urgency Level
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setUrgency('Immediate (< 2 Hours)')}
                  className={`p-2 rounded border text-left flex items-center justify-between cursor-pointer ${
                    urgency.includes('2 Hours')
                      ? 'border-[#0f0f10] bg-[#f1eee7] font-semibold text-[#0f0f10]'
                      : 'border-[#e6e1d8] bg-[#fbf9f5] text-[#46464a]'
                  }`}
                >
                  <span>Immediate (&lt; 2-Hour SLA)</span>
                  <Clock className="w-3.5 h-3.5 text-[#10b981]" />
                </button>
                <button
                  type="button"
                  onClick={() => setUrgency('Within 24 Hours')}
                  className={`p-2 rounded border text-left flex items-center justify-between cursor-pointer ${
                    urgency.includes('24 Hours')
                      ? 'border-[#0f0f10] bg-[#f1eee7] font-semibold text-[#0f0f10]'
                      : 'border-[#e6e1d8] bg-[#fbf9f5] text-[#46464a]'
                  }`}
                >
                  <span>Routine (Within 24 Hours)</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#77777b]" />
                </button>
              </div>
            </div>

            {/* Privacy pledge */}
            <div className="p-3 bg-[#f6f3ec] border border-[#e6e1d8] rounded-md flex items-start gap-2.5 text-[11px] text-[#5a5854]">
              <Lock className="w-4 h-4 text-[#7c5729] shrink-0 mt-0.5" />
              <span>
                Zero Franchise Access Guarantee: Records are protected under Title II HIPAA Safe Harbor. Team doctors, coaching staff, and sports agents have zero legal visibility.
              </span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-[#0f0f10] hover:bg-[#262524] text-[#fbf9f5] text-xs font-semibold uppercase tracking-[0.08em] rounded-[4px] flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-[0.98] transition-all"
            >
              <Send className="w-3.5 h-3.5 text-[#fdcc92]" />
              <span>Transmit Sovereign Intake</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
