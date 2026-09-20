import React from 'react';
import { COVERAGE_TIERS } from '../data/mockData';
import { CoverageTier } from '../types';
import { Check, Sparkles } from 'lucide-react';

interface PricingTiersProps {
  onSelectTier: (tier: CoverageTier) => void;
}

export const PricingTiers: React.FC<PricingTiersProps> = ({ onSelectTier }) => {
  return (
    <section className="py-16 md:py-24 bg-[#fcf9f2] border-t border-[#e6e1d8]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7c5729] mb-2 block">
            Institutional &amp; Private Tiers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] leading-tight font-semibold text-[#0f0f10] tracking-[-0.025em] mb-4">
            Tiered Coverage &amp; Sovereign Retainers
          </h2>
          <p className="text-sm sm:text-base text-[#46464a] leading-relaxed">
            Transparent association benefit tiers engineered for every stage of professional athletic tenure and post-career sovereignty.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {COVERAGE_TIERS.map((tier) => {
            const isFeatured = tier.isPopular;

            return (
              <div
                key={tier.id}
                className={`rounded-xl p-6 flex flex-col justify-between transition-all relative ${
                  isFeatured
                    ? 'bg-[#ffffff] border-2 border-[#0f0f10] shadow-[0px_8px_32px_rgba(15,15,16,0.08)]'
                    : 'bg-[#fbf9f5] border border-[#e6e1d8] hover:border-[#c89b66]'
                }`}
              >
                {/* Free Badge if featured */}
                {tier.highlightBadge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0f0f10] text-[#fdcc92] text-[9px] font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full whitespace-nowrap shadow-sm">
                    {tier.highlightBadge}
                  </div>
                )}

                <div>
                  {/* Category Name */}
                  <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#77777b] mb-4">
                    {tier.name}
                  </div>

                  {/* Price Block */}
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="text-3xl font-extrabold tracking-tight text-[#0f0f10]">
                      {tier.price}
                    </span>
                    <span className="text-xs text-[#5a5854] font-medium">
                      {tier.period}
                    </span>
                  </div>

                  {/* Subtitle / Rule */}
                  <div className="text-xs font-semibold text-[#7c5729] mb-4">
                    {tier.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#46464a] leading-relaxed mb-6 font-normal min-h-[56px]">
                    {tier.description}
                  </p>

                  {/* Bullet features */}
                  <div className="space-y-3 pt-4 border-t border-[#f1eee7] mb-8 text-xs text-[#1c1c18]">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 text-[#0f0f10] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <button
                  onClick={() => onSelectTier(tier)}
                  className={`w-full py-3 px-3 text-[11px] font-semibold uppercase tracking-[0.08em] rounded-[4px] transition-all cursor-pointer text-center active:scale-[0.98] ${
                    isFeatured
                      ? 'bg-[#0f0f10] hover:bg-[#262524] text-[#fbf9f5]'
                      : 'bg-[#ffffff] hover:bg-[#f1eee7] text-[#0f0f10] border border-[#dcdad3]'
                  }`}
                >
                  {tier.ctaText}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
