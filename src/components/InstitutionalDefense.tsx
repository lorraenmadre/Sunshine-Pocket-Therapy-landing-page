import React from 'react';
import { Shield, Smartphone, FileText, ArrowRight } from 'lucide-react';

interface InstitutionalDefenseProps {
  onLearnMore?: (topic: string) => void;
}

export const InstitutionalDefense: React.FC<InstitutionalDefenseProps> = ({ onLearnMore }) => {
  return (
    <section id="safeguards" className="py-16 md:py-24 bg-[#fcf9f2] border-t border-[#e6e1d8]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7c5729] mb-2 block">
            Institutional Defense
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] leading-tight font-semibold text-[#0f0f10] tracking-[-0.025em] mb-4">
            Security, Jurisprudence &amp; Institutional Safeguards
          </h2>
          <p className="text-sm sm:text-base text-[#46464a] leading-relaxed">
            Engineered with legal sequestration and zero-knowledge Google privacy cloud architecture.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Pillar 1 */}
          <div className="bg-[#fbf9f5] border border-[#e6e1d8] rounded-xl p-7 flex flex-col justify-between shadow-xs hover:border-[#c89b66] transition-all">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#f6f3ec] border border-[#e6e1d8] flex items-center justify-center text-[#7c5729] mb-5">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-[#0f0f10] mb-3">
                Title II HIPAA Safe Harbor
              </h3>
              <p className="text-xs sm:text-[13px] text-[#46464a] leading-relaxed mb-6">
                All therapy notes, clinical diagnoses, and psychological assessments comply with federal medical privacy rules. Franchise athletic trainers and team personnel have zero legal access.
              </p>
            </div>
            <div className="pt-4 border-t border-[#e6e1d8]">
              <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#0f0f10] flex items-center gap-1.5 hover:text-[#7c5729] transition-colors cursor-pointer">
                Federal Sequestration Standard
                <ArrowRight className="w-3 h-3 text-[#c89b66]" />
              </span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#fbf9f5] border border-[#e6e1d8] rounded-xl p-7 flex flex-col justify-between shadow-xs hover:border-[#c89b66] transition-all">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#f6f3ec] border border-[#e6e1d8] flex items-center justify-center text-[#7c5729] mb-5">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-[#0f0f10] mb-3">
                256-Bit AES Google Cloud Vault
              </h3>
              <p className="text-xs sm:text-[13px] text-[#46464a] leading-relaxed mb-6">
                Integrated directly with Google Workspace for Zero-Knowledge authorizations, multi-factor SSO, and self-destructing calendar appointments for complete digital sovereignty.
              </p>
            </div>
            <div className="pt-4 border-t border-[#e6e1d8]">
              <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#0f0f10] flex items-center gap-1.5 hover:text-[#7c5729] transition-colors cursor-pointer">
                Zero-Footprint Storage
                <ArrowRight className="w-3 h-3 text-[#c89b66]" />
              </span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#fbf9f5] border border-[#e6e1d8] rounded-xl p-7 flex flex-col justify-between shadow-xs hover:border-[#c89b66] transition-all">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#f6f3ec] border border-[#e6e1d8] flex items-center justify-center text-[#7c5729] mb-5">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-[#0f0f10] mb-3">
                WealthCounsel Legal Safeguards
              </h3>
              <p className="text-xs sm:text-[13px] text-[#46464a] leading-relaxed mb-6">
                Pre-negotiated drafting guarantees providing 4 bespoke trusts, estate plans, and emergency minor custody riders per season without out-of-pocket attorney retainer fees.
              </p>
            </div>
            <div className="pt-4 border-t border-[#e6e1d8]">
              <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#0f0f10] flex items-center gap-1.5 hover:text-[#7c5729] transition-colors cursor-pointer">
                Institutional Contract Rights
                <ArrowRight className="w-3 h-3 text-[#c89b66]" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
