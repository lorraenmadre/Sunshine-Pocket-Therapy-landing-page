import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export const SisterhoodImperative: React.FC = () => {
  return (
    <section id="sisterhood" className="py-16 md:py-20 border-t border-[#e6e1d8] bg-[#fcf9f2]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block with 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-12 items-end">
          <div className="lg:col-span-7">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7c5729] mb-2 block">
              The Sisterhood Imperative
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] leading-tight font-semibold text-[#0f0f10] tracking-[-0.025em]">
              Support for the Transitions that make us.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#46464a] leading-relaxed">
              NFL life is defined by rapid movements, new locker rooms, and evolving chapters. We celebrate that power by replacing disjointed hotlines with proactive, institutional care engineered for matriarchs and children.
            </p>
          </div>
        </div>

        {/* 2-Column Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Card: The Uncoordinated Reality */}
          <div className="bg-[#fbf9f5] border border-[#e6e1d8] rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              {/* Badges */}
              <div className="flex items-center justify-between gap-2 mb-6">
                <span className="px-2.5 py-1 rounded bg-[#ebe8e1] text-[#46464a] text-[10px] font-bold uppercase tracking-[0.1em]">
                  The Uncoordinated Reality
                </span>
                <span className="px-2.5 py-1 rounded border border-[#dcdad3] text-[#77777b] text-[10px] font-semibold uppercase tracking-[0.08em]">
                  Friction Points
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold tracking-tight text-[#0f0f10] mb-6">
                Scattered Systems &amp; Repeated Stories
              </h3>

              {/* Bullet list */}
              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ba1a1a] mt-2 shrink-0"></span>
                  <p className="text-[#46464a] leading-relaxed">
                    <strong className="font-semibold text-[#1c1c18]">Sudden 48-Hour Roster Shifts:</strong> Mid-season relocations requiring emergency school withdrawal, temporary housing, and severed medical relationships.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ba1a1a] mt-2 shrink-0"></span>
                  <p className="text-[#46464a] leading-relaxed">
                    <strong className="font-semibold text-[#1c1c18]">Pediatric Therapy Waitlist Resets:</strong> Starting over on 9-month wait lists for neurodivergent and speech therapy with every city change.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ba1a1a] mt-2 shrink-0"></span>
                  <p className="text-[#46464a] leading-relaxed">
                    <strong className="font-semibold text-[#1c1c18]">The Administrative Overhead:</strong> Navigating confusing Cigna TPA pre-authorizations, sudden lease penalty riders, and out-of-pocket bills alone.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ba1a1a] mt-2 shrink-0"></span>
                  <p className="text-[#46464a] leading-relaxed">
                    <strong className="font-semibold text-[#1c1c18]">Retelling Family Vulnerabilities:</strong> Reliving clinical histories to multiple providers across multiple cities without centralized records custody.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Outcome Tag */}
            <div className="mt-8 pt-5 border-t border-[#e6e1d8] flex items-center gap-2 text-xs font-semibold text-[#ba1a1a]">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span className="uppercase tracking-[0.06em] text-[11px]">
                Outcome: Caregiver fatigue and postponed developmental care
              </span>
            </div>
          </div>

          {/* Right Card: The NFWA Pocket Standard */}
          <div className="bg-[#ffffff] border-2 border-[#c89b66]/60 rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-[0px_8px_32px_rgba(200,155,102,0.08)] relative">
            {/* Top gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#c89b66] rounded-t-xl" />

            <div>
              {/* Badges */}
              <div className="flex items-center justify-between gap-2 mb-6">
                <span className="px-2.5 py-1 rounded bg-[#0f0f10] text-[#fbf9f5] text-[10px] font-bold uppercase tracking-[0.1em]">
                  The NFWA Pocket Standard
                </span>
                <span className="px-2.5 py-1 rounded bg-[#fdcc92]/40 text-[#7c5729] text-[10px] font-semibold uppercase tracking-[0.08em] border border-[#c89b66]/30">
                  Proactive Care
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold tracking-tight text-[#0f0f10] mb-6">
                One Sovereign Intake, Continuous Life Support
              </h3>

              {/* Bullet list */}
              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c89b66] mt-2 shrink-0"></span>
                  <p className="text-[#1c1c18] leading-relaxed">
                    <strong className="font-semibold text-[#0f0f10]">Single Sovereign Intake:</strong> Your encrypted profile travels securely with you across any franchise move. No repetitive clinical disclosures.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c89b66] mt-2 shrink-0"></span>
                  <p className="text-[#1c1c18] leading-relaxed">
                    <strong className="font-semibold text-[#0f0f10]">Dedicated Human Coordinator:</strong> Lorraen Madre and experienced sisterhood advocates coordinate Cigna approvals, housing riders, and schools.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c89b66] mt-2 shrink-0"></span>
                  <p className="text-[#1c1c18] leading-relaxed">
                    <strong className="font-semibold text-[#0f0f10]">Cigna In-Network Small Group Therapy:</strong> Complete coverage for 8 of 8 structured clinical sessions supported by Impact Health USA.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c89b66] mt-2 shrink-0"></span>
                  <p className="text-[#1c1c18] leading-relaxed">
                    <strong className="font-semibold text-[#0f0f10]">Care Pools (Cohort Circles):</strong> Intimate circles of maximum 12 women walking the identical life stage—trades, postpartum, and post-career.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Outcome Tag */}
            <div className="mt-8 pt-5 border-t border-[#e6e1d8] flex items-center justify-between text-xs font-semibold text-[#0f0f10]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c89b66] shrink-0" />
                <span className="uppercase tracking-[0.06em] text-[11px]">
                  Direct Liaison Response: &lt; 2 Hours
                </span>
              </div>
              <span className="text-[10px] tracking-wider uppercase px-2 py-0.5 bg-[#f6f3ec] rounded border border-[#dcdad3] font-bold text-[#7c5729]">
                100% Retained Rights
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
