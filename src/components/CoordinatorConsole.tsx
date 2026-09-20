import React, { useState } from 'react';
import { DISPATCH_LOGS } from '../data/mockData';
import { ShieldCheck, Lock, Radio, Plus, CheckCircle, RefreshCw, PhoneCall } from 'lucide-react';

interface CoordinatorConsoleProps {
  onOpenIntake: (context?: string) => void;
}

export const CoordinatorConsole: React.FC<CoordinatorConsoleProps> = ({ onOpenIntake }) => {
  const [logs, setLogs] = useState(DISPATCH_LOGS);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 600);
  };

  return (
    <section id="coordinator" className="py-16 md:py-24 bg-[#0f0f10] text-[#fbf9f5] border-t border-[#262524] relative overflow-hidden">
      {/* Subtle backdrop pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#262524_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Console Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b border-[#262524]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping"></span>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#fdcc92]">
                Coordinator Operating Suite • Enterprise Dispatch Console
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-[-0.025em] leading-tight text-[#fbf9f5]">
              Live Clinical Triage &amp; Sovereign Family Dispatch
            </h2>
            <p className="text-xs sm:text-sm text-[#c7c6ca] mt-2 max-w-2xl font-light">
              Encrypted Title II HIPAA operations room manned by licensed clinical directors and NFWA peer advocates.
            </p>
          </div>

          {/* SLA and Privacy Badges */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="bg-[#1c1b1c] border border-[#31312c] rounded-lg px-3.5 py-2 text-right">
              <div className="text-[9px] uppercase tracking-wider text-[#858384] font-semibold">
                Response Rule
              </div>
              <div className="text-xs font-bold text-[#10b981] flex items-center gap-1 justify-end">
                <span>&lt; 2-Hour SLA</span>
              </div>
            </div>

            <div className="bg-[#1c1b1c] border border-[#31312c] rounded-lg px-3.5 py-2 text-right">
              <div className="text-[9px] uppercase tracking-wider text-[#858384] font-semibold">
                Custody Privacy
              </div>
              <div className="text-xs font-bold text-[#fbf9f5]">
                100% Sequestered
              </div>
            </div>
          </div>
        </div>

        {/* Main Console 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Lead Coordinator Profile Card */}
          <div className="lg:col-span-4 bg-[#161617] border border-[#31312c] rounded-xl p-6 flex flex-col justify-between shadow-2xl relative">
            <div>
              {/* Coordinator Photo */}
              <div className="relative rounded-lg overflow-hidden mb-5 bg-[#262524] aspect-[4/5] max-h-[340px]">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                  alt="Lorraen Madre - Lead Benefits Coordinator"
                  className="w-full h-full object-cover object-top grayscale contrast-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f10] via-transparent to-transparent opacity-80" />

                {/* Floating Live Badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded bg-[#0f0f10]/80 backdrop-blur-md border border-[#31312c] text-[10px] font-bold tracking-wider uppercase text-[#10b981]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
                  Station Active
                </div>
              </div>

              {/* Name & Title */}
              <div className="flex items-center justify-between gap-2 mb-1">
                <h3 className="text-2xl font-bold tracking-tight text-[#fbf9f5]">
                  Lorraen Madre
                </h3>
              </div>
              <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#c89b66] mb-5">
                Lead Benefits Coordinator
              </div>

              {/* Metadata Table */}
              <div className="space-y-3 pt-4 border-t border-[#262524] text-xs">
                <div className="flex items-center justify-between py-1 border-b border-[#262524]/60">
                  <span className="text-[#858384]">Affiliation</span>
                  <span className="font-medium text-[#fbf9f5]">NFWA Matriarch &amp; Advocate</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#262524]/60">
                  <span className="text-[#858384]">Clinical Oversight</span>
                  <span className="font-medium text-[#fbf9f5]">Licensed Clinical Directors</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-[#858384]">Direct Channel</span>
                  <span className="font-medium text-[#fdcc92] flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    Encrypted Signal / Phone
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Dispatch Hub */}
          <div className="lg:col-span-8 space-y-6">
            {/* 3 Metrics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#161617] border border-[#31312c] rounded-xl p-4">
                <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#858384] mb-1">
                  Active Queue
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#fbf9f5] mb-1">
                  14 Sprints
                </div>
                <p className="text-[11px] text-[#858384] leading-snug">
                  Trades, IEP appeals, and postpartum circles dispatching today.
                </p>
              </div>

              <div className="bg-[#161617] border border-[#31312c] rounded-xl p-4">
                <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#858384] mb-1">
                  Average First Triage
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#10b981] mb-1">
                  38 Minutes
                </div>
                <p className="text-[11px] text-[#858384] leading-snug">
                  Direct contact to confidential athlete &amp; alumnae private line.
                </p>
              </div>

              <div className="bg-[#161617] border border-[#31312c] rounded-xl p-4">
                <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#858384] mb-1">
                  De-Identified Intelligence
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#fdcc92] mb-1">
                  32 Franchises
                </div>
                <p className="text-[11px] text-[#858384] leading-snug">
                  Quarterly CBA bargaining brief telemetry without name leaks.
                </p>
              </div>
            </div>

            {/* Live Dispatch Feed Box */}
            <div className="bg-[#161617] border border-[#31312c] rounded-xl p-5 sm:p-6">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#262524]">
                <div className="flex items-center gap-2">
                  <Radio className="w-4 h-4 text-[#c89b66] animate-pulse" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#fbf9f5]">
                    Live Dispatch Log • Anonymized Barrier Feed
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleRefresh}
                    className="p-1 text-[#858384] hover:text-[#fbf9f5] transition-colors"
                    title="Refresh feed"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
                  </button>
                  <span className="text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-[#262524] text-[#858384] border border-[#31312c]">
                    Auto-Encrypted
                  </span>
                </div>
              </div>

              {/* Feed items */}
              <div className="space-y-3.5">
                {logs.map((log) => (
                  <div
                    key={log.id}
                    className="bg-[#1f1e20] border border-[#2b2a2d] hover:border-[#3d3c40] rounded-lg p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#fdcc92]">
                          {log.code}
                        </span>
                        <span className="text-[#858384] text-[10px]">•</span>
                        <span className="text-[10px] uppercase font-semibold text-[#858384]">
                          {log.conference}
                        </span>
                      </div>
                      <p className="text-xs text-[#e5e2db] leading-relaxed">
                        {log.summary}
                      </p>
                    </div>

                    <div className="shrink-0 self-start sm:self-center">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded inline-block whitespace-nowrap ${
                          log.statusType === 'resolved'
                            ? 'bg-[#064e3b]/50 text-[#34d399] border border-[#059669]/40'
                            : log.statusType === 'approved'
                            ? 'bg-[#0e7490]/40 text-[#22d3ee] border border-[#0891b2]/40'
                            : 'bg-[#78350f]/50 text-[#fbbf24] border border-[#d97706]/40'
                        }`}
                      >
                        {log.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Privacy Footer & Dispatch CTA */}
              <div className="mt-5 pt-4 border-t border-[#262524] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[11px] text-[#858384]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] shrink-0"></span>
                  <span>Zero clinical records released to coaching staffs, team doctors, or media.</span>
                </div>

                <button
                  onClick={() => onOpenIntake('Emergency Dispatch Console')}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#fbf9f5] hover:bg-[#ffffff] text-[#0f0f10] text-xs font-bold uppercase tracking-[0.08em] rounded-[4px] shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                >
                  <Plus className="w-4 h-4" />
                  <span>Dispatch Dedicated Coordinator Intake</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
