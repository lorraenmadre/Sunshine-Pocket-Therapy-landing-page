import React from 'react';
import { CARE_LINES } from '../data/mockData';
import { CareLine } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface SixLinesOfCareProps {
  onSelectLine: (line: CareLine) => void;
}

export const SixLinesOfCare: React.FC<SixLinesOfCareProps> = ({ onSelectLine }) => {
  return (
    <section id="six-lines" className="py-16 md:py-24 bg-[#fcf9f2] border-t border-[#e6e1d8]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7c5729] mb-2 block">
            Institutional Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] leading-tight font-semibold text-[#0f0f10] tracking-[-0.025em] mb-4">
            The Six Lines of Care
          </h2>
          <p className="text-sm sm:text-base text-[#46464a] leading-relaxed">
            Engineered specifically to counter the systemic volatility of professional football. Supported by Impact Health USA, Cigna Insurance, and WealthCounsel.
          </p>
        </div>

        {/* 6 Cards Grid (3 cols on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARE_LINES.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectLine(item)}
              className="bg-[#fbf9f5] border border-[#e6e1d8] hover:border-[#c89b66] rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:shadow-[0px_8px_24px_rgba(15,15,16,0.06)] group cursor-pointer relative overflow-hidden"
            >
              {/* Colored Top Accent Bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ backgroundColor: item.accentColor }}
              />

              <div>
                {/* Header row: LINE Number & Badge */}
                <div className="flex items-center justify-between gap-2 mb-4 pt-1">
                  <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#0f0f10]">
                    {item.line}
                  </span>
                  <span
                    className="text-[10px] font-semibold px-2 py-0.5 rounded border border-[#e6e1d8] bg-[#ffffff] text-[#46464a] tracking-wider"
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold tracking-tight text-[#0f0f10] mb-3 group-hover:text-[#7c5729] transition-colors flex items-center justify-between">
                  <span>{item.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#77777b] group-hover:text-[#7c5729] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-1 opacity-0 group-hover:opacity-100" />
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-[#46464a] leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bullet points */}
              <div className="pt-4 border-t border-[#e6e1d8] space-y-2 text-[11px] text-[#5a5854]">
                {item.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: item.accentColor }}
                    />
                    <span className="text-[#1c1c18] font-medium">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
