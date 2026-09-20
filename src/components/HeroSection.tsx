import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, HeartHandshake, Clock, Lock, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenIntake: (presetRequest?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenIntake }) => {
  const [requestInput, setRequestInput] = useState('');

  const quickPrompts = [
    'Trade relocation & 48-hr school withdrawal',
    'Pediatric autism & speech IEP restart',
    'Cigna TPA surprise bill appeal',
    'WealthCounsel emergency lease exit'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (requestInput.trim()) {
      onOpenIntake(requestInput);
    } else {
      onOpenIntake();
    }
  };

  const handleChipClick = (prompt: string) => {
    setRequestInput(prompt);
    onOpenIntake(prompt);
  };

  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Subtle Warm Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#fdcc92]/20 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Official Partnership Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f6f3ec] border border-[#dcdad3] mb-8 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#c89b66] animate-pulse"></span>
          <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#7c5729]">
            Official Partnership • NFWA × Sunshine Pocket Therapy
          </span>
        </div>

        {/* Main Display Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-[58px] leading-[1.15] font-semibold tracking-[-0.03em] text-[#0f0f10] max-w-4xl mx-auto mb-6">
          True health in your hands like <br className="hidden sm:inline" />
          <span className="font-light text-[#0f0f10]">sunshine in your pocket</span>
        </h1>

        {/* Subtitle Description */}
        <p className="text-base sm:text-lg text-[#46464a] max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Every active and retired NFL matriarch, partner, and family deserves continuous care,
          trauma-informed transition planning, and dedicated human coordination—with zero
          repetitive intake.
        </p>

        {/* Central Sovereign Intake Form */}
        <div className="max-w-2xl mx-auto bg-[#ffffff] border border-[#e6e1d8] rounded-xl p-4 sm:p-5 shadow-[0px_8px_32px_rgba(15,15,16,0.04)] text-left mb-6 transition-all hover:border-[#c89b66]/50">
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#f1eee7]">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#0f0f10]">
                LOG A HOUSEHOLD TRANSITION OR CARE REQUEST
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#7c5729] bg-[#fbf9f5] px-2 py-0.5 rounded border border-[#e6e1d8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c89b66]"></span>
              2-Hour Response Rule
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
            <input
              type="text"
              value={requestInput}
              onChange={(e) => setRequestInput(e.target.value)}
              placeholder="Describe what you or your family are navigating (e.g. trade to...)"
              className="flex-1 bg-transparent px-3.5 py-3 text-sm text-[#1c1c18] placeholder-[#77777b] border-none focus:outline-none focus:ring-0"
            />
            <button
              type="submit"
              className="px-5 py-3 bg-[#0f0f10] hover:bg-[#262524] text-[#fbf9f5] text-xs font-semibold uppercase tracking-[0.08em] rounded-[4px] flex items-center justify-center gap-2 transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
            >
              <span>CONNECT DIRECT</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#fdcc92]" />
            </button>
          </form>

          {/* Quick Pre-fill Tags */}
          <div className="mt-3 pt-3 border-t border-[#f6f3ec] flex flex-wrap items-center gap-1.5 text-[11px] text-[#5a5854]">
            <span className="text-[10px] uppercase tracking-wider font-semibold text-[#77777b] mr-1 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#c89b66]" /> Fast Prompts:
            </span>
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => handleChipClick(prompt)}
                className="px-2 py-1 bg-[#fcf9f2] hover:bg-[#f1eee7] text-[#46464a] text-[11px] rounded border border-[#e6e1d8] transition-colors cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Trust Badges Horizontal Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto pt-4">
          <div className="bg-[#fbf9f5] border border-[#e6e1d8] rounded-lg p-3.5 flex items-center gap-3 text-left">
            <div className="w-8 h-8 rounded bg-[#f6f3ec] border border-[#e6e1d8] flex items-center justify-center shrink-0 text-[#7c5729]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#0f0f10]">
                HIPAA Safe Harbor
              </div>
              <div className="text-[11px] text-[#5a5854]">
                Zero-knowledge custody
              </div>
            </div>
          </div>

          <div className="bg-[#fbf9f5] border border-[#e6e1d8] rounded-lg p-3.5 flex items-center gap-3 text-left">
            <div className="w-8 h-8 rounded bg-[#f6f3ec] border border-[#e6e1d8] flex items-center justify-center shrink-0 text-[#7c5729]">
              <HeartHandshake className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#0f0f10]">
                Cigna In-Network
              </div>
              <div className="text-[11px] text-[#5a5854]">
                8 of 8 therapy covered
              </div>
            </div>
          </div>

          <div className="bg-[#fbf9f5] border border-[#e6e1d8] rounded-lg p-3.5 flex items-center gap-3 text-left">
            <div className="w-8 h-8 rounded bg-[#f6f3ec] border border-[#e6e1d8] flex items-center justify-center shrink-0 text-[#7c5729]">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#0f0f10]">
                Dedicated Concierge
              </div>
              <div className="text-[11px] text-[#5a5854]">
                &lt; 2-hour response rule
              </div>
            </div>
          </div>

          <div className="bg-[#fbf9f5] border border-[#e6e1d8] rounded-lg p-3.5 flex items-center gap-3 text-left">
            <div className="w-8 h-8 rounded bg-[#f6f3ec] border border-[#e6e1d8] flex items-center justify-center shrink-0 text-[#7c5729]">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#0f0f10]">
                Sequestered Records
              </div>
              <div className="text-[11px] text-[#5a5854]">
                100% private from teams
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
