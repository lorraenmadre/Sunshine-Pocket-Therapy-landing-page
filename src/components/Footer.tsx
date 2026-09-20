import React from 'react';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
  onOpenConsent?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms, onOpenConsent }) => {
  return (
    <footer className="bg-[#fcf9f2] border-t border-[#e6e1d8] pt-16 pb-12 text-[#1c1c18]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#e6e1d8]">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-[#0f0f10]">
                Sunshine Pocket Therapy<span className="text-xs align-top">™</span>
              </span>
              <span className="text-[#c89b66] font-medium text-lg">|</span>
              <span className="text-xl font-extrabold tracking-tight text-[#0f0f10]">
                NFWA
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c89b66]"></span>
            </div>
            <p className="text-xs sm:text-[13px] text-[#46464a] leading-relaxed max-w-sm">
              Dedicated clinical discretion, acute mental performance, and trusted concierges for professional football matriarchs, partners, and alumnae across the association. Supported by Impact Health USA.
            </p>
          </div>

          {/* Links Column 1: SISTERHOOD & TRUST */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0f0f10]">
              Sisterhood &amp; Trust
            </div>
            <ul className="space-y-2 text-xs text-[#5a5854]">
              <li>
                <a href="#sisterhood" className="hover:text-[#0f0f10] transition-colors">
                  Sisterhood Charter &amp; Trust
                </a>
              </li>
              <li>
                <a href="#directory" className="hover:text-[#0f0f10] transition-colors">
                  Player Alumnae Network
                </a>
              </li>
              <li>
                <a href="#care-pools" className="hover:text-[#0f0f10] transition-colors">
                  Care Pools (Max 12)
                </a>
              </li>
              <li>
                <a href="#coordinator" className="hover:text-[#0f0f10] transition-colors">
                  Executive Council Oversight
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: CLINICAL SAFEGUARDS */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0f0f10]">
              Clinical Safeguards
            </div>
            <ul className="space-y-2 text-xs text-[#5a5854]">
              <li>
                <a href="#safeguards" className="hover:text-[#0f0f10] transition-colors">
                  HIPAA Safe Harbor Protocol
                </a>
              </li>
              <li>
                <a href="#six-lines" className="hover:text-[#0f0f10] transition-colors">
                  Cigna In-Network (8/8 Sessions)
                </a>
              </li>
              <li>
                <a href="#six-lines" className="hover:text-[#0f0f10] transition-colors">
                  WealthCounsel Legal Drafting
                </a>
              </li>
              <li>
                <a href="#safeguards" className="hover:text-[#0f0f10] transition-colors">
                  Google Cloud Zero-Knowledge
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3: ASSOCIATION & IMPACT */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0f0f10]">
              Association &amp; Impact
            </div>
            <ul className="space-y-2 text-xs text-[#5a5854]">
              <li>
                <a href="#directory" className="hover:text-[#0f0f10] transition-colors">
                  NFWA Leadership Roster
                </a>
              </li>
              <li>
                <a href="#six-lines" className="hover:text-[#0f0f10] transition-colors">
                  Impact Health USA Alliance
                </a>
              </li>
              <li>
                <a href="#coordinator" className="hover:text-[#0f0f10] transition-colors">
                  Bespoke Concierge Grants
                </a>
              </li>
              <li>
                <a href="#coordinator" className="hover:text-[#0f0f10] transition-colors">
                  Coordinator Operating Suite
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Clinical & Legal Notice */}
        <div className="py-6 border-b border-[#e6e1d8] text-[11px] text-[#77777b] leading-relaxed">
          <strong className="text-[#46464a] font-semibold">Clinical &amp; Legal Notice:</strong> Pocket Therapy services provided via Sunshine Pocket Therapy are independent specialized performance psychology and mental health initiatives commissioned by the NFWA in partnership with Impact Health USA and WealthCounsel. Services comply with Title II HIPAA Security Standards. Records are strictly sequestered from franchise coaching staff, athletic trainers, and front offices.
        </div>

        {/* Bottom Bar: Copyright & Protocols */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.08em] text-[#77777b]">
          <div>
            © 2025 NATIONAL FOOTBALL WOMEN'S ASSOCIATION. ALL SOVEREIGN RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={onOpenPrivacy} className="hover:text-[#0f0f10] transition-colors cursor-pointer">
              Privacy Protocol
            </button>
            <button onClick={onOpenConsent} className="hover:text-[#0f0f10] transition-colors cursor-pointer">
              Athlete Consent
            </button>
            <button onClick={onOpenTerms} className="hover:text-[#0f0f10] transition-colors cursor-pointer">
              Terms of Care
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
