import React from 'react';
import { X, ShieldCheck, FileCheck, Lock } from 'lucide-react';

interface ProtocolModalProps {
  type: 'privacy' | 'consent' | 'terms' | null;
  onClose: () => void;
}

export const ProtocolModal: React.FC<ProtocolModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const content = {
    privacy: {
      title: 'NFWA Sovereign Privacy Protocol & HIPAA Safe Harbor',
      icon: <Lock className="w-5 h-5 text-[#7c5729]" />,
      body: [
        '1. Federal Sequestration Standard: Sunshine Pocket Therapy operates under strict Title II HIPAA privacy regulations. All medical, psychiatric, psychological, and clinical notes are legally isolated from franchise employers.',
        '2. Zero Club Visibility: No diagnostic codes, attendance logs, or clinical insights are shared with NFL franchises, club athletic trainers, team physicians, coaching staffs, or sports agents.',
        '3. Google Cloud Zero-Knowledge Architecture: Data is encrypted at rest with 256-bit AES keys managed exclusively by the NFWA executive sovereign custody protocol, preventing unauthorized external querying.'
      ]
    },
    consent: {
      title: 'Athlete & Partner Sovereign Consent Agreement',
      icon: <FileCheck className="w-5 h-5 text-[#7c5729]" />,
      body: [
        '1. Sisterhood Participation Rights: Enrollees in Care Pools participate in peer circles under mutual non-disclosure covenants governed by NFWA bylaws.',
        '2. In-Network Cigna Coverage: 8 of 8 group therapy sessions are billed directly to Cigna Behavioral Health under zero out-of-pocket balance billing agreements.',
        '3. Sovereign Ownership: Members retain 100% intellectual custody over their personal medical files and may export or purge records upon transition out of the league.'
      ]
    },
    terms: {
      title: 'Terms of Care & Institutional SLA Guarantee',
      icon: <ShieldCheck className="w-5 h-5 text-[#7c5729]" />,
      body: [
        '1. 2-Hour SLA Response: Urgent family transitions, mid-season trade notices, and acute IEP interruptions receive triage coordinator contact within 120 minutes of transmission.',
        '2. WealthCounsel Contract Drafts: Enrolled members in good standing receive up to 4 pre-negotiated legal defense instruments per calendar year, including lease terminations and educational trusts.',
        '3. Fair Representation: De-identified telemetry is aggregated solely to advocate for enhanced family benefits in collective league bargaining without disclosing individual roster identities.'
      ]
    }
  }[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0f0f10]/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div className="bg-[#ffffff] border border-[#e6e1d8] rounded-xl w-full max-w-lg overflow-hidden shadow-2xl relative">
        <div className="p-6 border-b border-[#e6e1d8] bg-[#fbf9f5] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#f6f3ec] border border-[#e6e1d8] flex items-center justify-center shrink-0">
              {content.icon}
            </div>
            <h3 className="text-xl font-bold tracking-tight text-[#0f0f10]">
              {content.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-[#ebe8e1] text-[#77777b] hover:text-[#0f0f10] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          {content.body.map((item, idx) => (
            <p key={idx} className="text-xs sm:text-[13px] text-[#46464a] leading-relaxed bg-[#fbf9f5] p-3.5 rounded-lg border border-[#e6e1d8]">
              {item}
            </p>
          ))}
          <button
            onClick={onClose}
            className="w-full mt-4 py-2.5 bg-[#0f0f10] text-[#fbf9f5] text-xs font-semibold uppercase tracking-wider rounded-[4px]"
          >
            Acknowledged &amp; Confirmed
          </button>
        </div>
      </div>
    </div>
  );
};
