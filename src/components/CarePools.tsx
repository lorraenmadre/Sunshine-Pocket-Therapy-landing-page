import React from 'react';
import { CARE_POOLS } from '../data/mockData';
import { CarePool } from '../types';
import { Users, Calendar, ShieldCheck } from 'lucide-react';

interface CarePoolsProps {
  onSelectPool: (pool: CarePool) => void;
}

export const CarePools: React.FC<CarePoolsProps> = ({ onSelectPool }) => {
  return (
    <section id="care-pools" className="py-16 md:py-24 bg-[#fcf9f2] border-t border-[#e6e1d8]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-12 items-end">
          <div className="lg:col-span-7">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7c5729] mb-2 block">
              Sisterhood Cohorts
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] leading-tight font-semibold text-[#0f0f10] tracking-[-0.025em]">
              Care Pools: Maximum 12 Women Per Circle
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#46464a] leading-relaxed">
              True intimacy requires strict capacity. Each Care Pool is capped at exactly 12 women navigating identical milestones, led by a licensed clinical facilitator.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARE_POOLS.map((pool) => {
            const percent = Math.round((pool.enrolled / pool.totalSpots) * 100);
            const isWaitlist = pool.status === 'waitlist';

            return (
              <div
                key={pool.id}
                className="bg-[#ffffff] border border-[#e6e1d8] rounded-xl p-6 flex flex-col justify-between shadow-xs hover:border-[#c89b66] transition-all duration-200"
              >
                <div>
                  {/* Top Bar with Code & Badge */}
                  <div className="flex items-center justify-between gap-1 mb-4 pb-3 border-b border-[#f1eee7]">
                    <span className="text-[10px] font-bold tracking-[0.08em] uppercase text-[#0f0f10]">
                      {pool.code}
                    </span>
                    <span
                      className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                        isWaitlist
                          ? 'bg-[#f1eee7] text-[#77777b] border-[#dcdad3]'
                          : 'bg-[#fdcc92]/40 text-[#7c5729] border-[#c89b66]/40'
                      }`}
                    >
                      {pool.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#0f0f10] mb-3 leading-snug min-h-[48px] tracking-tight">
                    {pool.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#46464a] leading-relaxed mb-6 font-normal">
                    {pool.description}
                  </p>
                </div>

                <div>
                  {/* Progress & Spots Meter */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-[#1c1c18] mb-1.5">
                      <span>{pool.enrolled} of {pool.totalSpots} Enrolled</span>
                      <span>{percent}% Full</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#ebe8e1] rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          isWaitlist ? 'bg-[#77777b]' : 'bg-[#0f0f10]'
                        }`}
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => onSelectPool(pool)}
                    className={`w-full py-2.5 px-3 text-[11px] font-semibold uppercase tracking-[0.08em] rounded-[4px] transition-all cursor-pointer text-center ${
                      isWaitlist
                        ? 'bg-[#f1eee7] hover:bg-[#e5e2db] text-[#46464a] border border-[#dcdad3]'
                        : 'bg-[#0f0f10] hover:bg-[#262524] text-[#fbf9f5]'
                    }`}
                  >
                    {isWaitlist ? 'JOIN WAITLIST' : 'REQUEST TO JOIN GROUP'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
