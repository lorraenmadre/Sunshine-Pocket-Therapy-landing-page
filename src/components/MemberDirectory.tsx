import React, { useState } from 'react';
import { MEMBER_PROFILES } from '../data/mockData';
import { MemberProfile } from '../types';
import { Filter, MapPin, Check, X } from 'lucide-react';

interface MemberDirectoryProps {
  onSelectMember: (member: MemberProfile) => void;
}

export const MemberDirectory: React.FC<MemberDirectoryProps> = ({ onSelectMember }) => {
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);

  const cities = ['All', 'Denver', 'Tampa', 'Atlanta', 'Dallas'];

  const filteredMembers = selectedCity === 'All'
    ? MEMBER_PROFILES
    : MEMBER_PROFILES.filter(m => m.chapter.toLowerCase().includes(selectedCity.toLowerCase()));

  return (
    <section id="directory" className="py-16 md:py-24 bg-[#fcf9f2] border-t border-[#e6e1d8]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7c5729] mb-2 block">
              Sisterhood Index
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] leading-tight font-semibold text-[#0f0f10] tracking-[-0.025em]">
              Active Member Directory &amp; Cohort Preview
            </h2>
            <p className="text-sm text-[#46464a] mt-2">
              Verified NFL partners, spouses, and alumnae enrolled in active peer circles.
            </p>
          </div>

          {/* Right Filter Control */}
          <div className="flex items-center gap-3 relative shrink-0">
            <span className="text-xs text-[#77777b] font-medium hidden sm:inline">
              Showing {filteredMembers.length} Cohort Leads
            </span>

            <div className="relative">
              <button
                onClick={() => setFilterMenuOpen(!filterMenuOpen)}
                className="px-3.5 py-2 bg-[#ffffff] hover:bg-[#f6f3ec] border border-[#dcdad3] rounded-[4px] text-xs font-semibold uppercase tracking-[0.08em] text-[#0f0f10] flex items-center gap-2 cursor-pointer transition-colors"
              >
                <Filter className="w-3.5 h-3.5 text-[#7c5729]" />
                <span>Filter by City{selectedCity !== 'All' ? `: ${selectedCity}` : ''}</span>
              </button>

              {/* City Dropdown Menu */}
              {filterMenuOpen && (
                <div className="absolute right-0 top-full mt-1.5 w-48 bg-[#ffffff] border border-[#e6e1d8] rounded-lg shadow-lg z-30 p-1.5">
                  <div className="text-[10px] uppercase font-bold text-[#77777b] px-2.5 py-1.5 border-b border-[#f1eee7]">
                    Select Chapter City
                  </div>
                  {cities.map((city) => (
                    <button
                      key={city}
                      onClick={() => {
                        setSelectedCity(city);
                        setFilterMenuOpen(false);
                      }}
                      className="w-full text-left px-2.5 py-2 text-xs rounded hover:bg-[#f6f3ec] flex items-center justify-between transition-colors cursor-pointer text-[#1c1c18]"
                    >
                      <span className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#77777b]" />
                        {city === 'All' ? 'All Cities' : `${city} Chapter`}
                      </span>
                      {selectedCity === city && (
                        <Check className="w-3.5 h-3.5 text-[#7c5729]" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 4 Member Profile Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              onClick={() => onSelectMember(member)}
              className="bg-[#fbf9f5] border border-[#e6e1d8] hover:border-[#c89b66] rounded-xl p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-[0px_8px_24px_rgba(15,15,16,0.06)] group cursor-pointer text-center"
            >
              <div>
                {/* Photo Placeholder/Avatar */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-xl overflow-hidden bg-[#e5e2db] border border-[#dcdad3] relative flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale contrast-105 group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if image network fails
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <span className="absolute text-xs text-[#77777b] uppercase font-semibold tracking-wider pointer-events-none -z-0">
                    img
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold tracking-tight text-[#0f0f10] mb-1 group-hover:text-[#7c5729] transition-colors">
                  {member.name}
                </h3>

                {/* Chapter & Role */}
                <div className="text-[11px] font-semibold text-[#7c5729] uppercase tracking-wider mb-3">
                  {member.chapter}
                </div>

                {/* Bio / Lead Description */}
                <p className="text-xs text-[#46464a] leading-relaxed mb-6 font-normal min-h-[44px]">
                  <strong className="text-[#1c1c18] font-medium">{member.leadTitle}</strong> {member.bio}
                </p>
              </div>

              {/* Card Footer: Group Tag & Status */}
              <div className="pt-4 border-t border-[#e6e1d8] flex items-center justify-between text-[11px]">
                <span className="font-bold uppercase tracking-wider text-[#0f0f10]">
                  {member.groupTag}
                </span>
                <span
                  className={`font-semibold ${
                    member.statusType === 'waitlist'
                      ? 'text-[#77777b]'
                      : 'text-[#059669]'
                  }`}
                >
                  {member.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
