import React from 'react';
import { POLICY_SHIFTS } from '../data/mockData';
import { ShieldCheck, BarChart3, CheckCircle2 } from 'lucide-react';

export const StructuralImpact: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#fcf9f2] border-t border-[#e6e1d8]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Text Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7c5729] block">
              Structural Impact
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#0f0f10] leading-tight tracking-[-0.025em]">
              Anonymous Advocacy &amp; Collective League Intelligence.
            </h2>
            <p className="text-sm sm:text-base text-[#46464a] leading-relaxed">
              When you encounter systemic obstacles—whether it is an out-of-network autism therapy denial or an unjustified relocation penalty—your personal identity remains strictly encrypted.
            </p>
            <p className="text-sm sm:text-base text-[#46464a] leading-relaxed">
              Meanwhile, the de-identified pattern feeds into our quarterly <strong className="font-semibold text-[#0f0f10]">NFWA Collective Bargaining Intelligence Brief</strong>, translating private maternal frustration into league-wide policy transformation.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-[#0f0f10] bg-[#fbf9f5] border border-[#e6e1d8] px-3.5 py-2 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-[#c89b66]" />
                <span>100% Zero-Knowledge Anonymity</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-[#0f0f10] bg-[#fbf9f5] border border-[#e6e1d8] px-3.5 py-2 rounded-lg">
                <BarChart3 className="w-4 h-4 text-[#c89b66]" />
                <span>Union Policy Leverage</span>
              </div>
            </div>
          </div>

          {/* Right Box: Realized Collective Policy Shifts */}
          <div className="lg:col-span-5 bg-[#fbf9f5] border border-[#e6e1d8] rounded-xl p-6 sm:p-7 shadow-xs">
            <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#7c5729] mb-5 pb-3 border-b border-[#e6e1d8]">
              Realized Collective Policy Shifts
            </div>

            <div className="space-y-4">
              {POLICY_SHIFTS.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between pb-3.5 border-b border-[#f1eee7] last:border-b-0 last:pb-0"
                >
                  <span className="text-xs sm:text-[13px] font-medium text-[#1c1c18]">
                    {item.metric}
                  </span>
                  <span className="text-xs font-bold text-[#0f0f10] bg-[#ffffff] px-2.5 py-1 rounded border border-[#e6e1d8] shrink-0 ml-3">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
