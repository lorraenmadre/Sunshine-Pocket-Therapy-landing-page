import React, { useState } from 'react';
import { Menu, X, User, ShieldCheck, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenIntake: (context?: string) => void;
  onOpenSignIn: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenIntake, onOpenSignIn }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fcf9f2]/95 backdrop-blur-md border-b border-[#e6e1d8] transition-colors">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Tagline */}
          <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#0f0f10]">
                Sunshine Pocket Therapy<span className="text-xs align-top">™</span>
              </span>
              <span className="text-[#c89b66] font-medium text-lg">|</span>
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0f0f10]">
                NFWA
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c89b66]"></span>
            </div>
            <span className="text-[10px] tracking-[0.14em] font-semibold uppercase text-[#5a5854] mt-0.5">
              Member Pocket • Sovereign Family Health
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
            <button
              onClick={() => scrollTo('sisterhood')}
              className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#46464a] hover:text-[#0f0f10] transition-colors py-1 cursor-pointer"
            >
              About Sisterhood
            </button>
            <button
              onClick={() => scrollTo('care-pools')}
              className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#46464a] hover:text-[#0f0f10] transition-colors py-1 cursor-pointer"
            >
              Care Pools (Max 12)
            </button>
            <button
              onClick={() => scrollTo('six-lines')}
              className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#46464a] hover:text-[#0f0f10] transition-colors py-1 cursor-pointer"
            >
              Six Lines of Care
            </button>
            <button
              onClick={() => scrollTo('directory')}
              className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#46464a] hover:text-[#0f0f10] transition-colors py-1 cursor-pointer"
            >
              Groups Directory
            </button>
            <button
              onClick={() => scrollTo('coordinator')}
              className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#46464a] hover:text-[#0f0f10] transition-colors py-1 cursor-pointer"
            >
              Coordinator Suite
            </button>
            <button
              onClick={() => scrollTo('safeguards')}
              className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#46464a] hover:text-[#0f0f10] transition-colors py-1 cursor-pointer"
            >
              Safeguards
            </button>
            <button
              onClick={onOpenSignIn}
              className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#46464a] hover:text-[#0f0f10] transition-colors py-1 cursor-pointer flex items-center gap-1.5"
            >
              Member Sign In
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenIntake('General Consultation')}
              className="px-4 py-2.5 bg-[#0f0f10] text-[#fbf9f5] hover:bg-[#262524] text-[11px] font-semibold uppercase tracking-[0.08em] rounded-[4px] shadow-sm transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#fdcc92]" />
              Ask Your Coordinator
            </button>
            <button
              onClick={onOpenSignIn}
              className="w-10 h-10 rounded-full border border-[#e6e1d8] bg-[#fbf9f5] flex items-center justify-center text-[#0f0f10] hover:bg-[#f1eee7] transition-colors cursor-pointer"
              title="Member Account"
            >
              <User className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => onOpenIntake()}
              className="px-3 py-1.5 bg-[#0f0f10] text-[#fbf9f5] text-[10px] font-semibold uppercase tracking-wider rounded-[4px]"
            >
              Coordinator
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0f0f10] rounded-md hover:bg-[#f1eee7]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#fbf9f5] border-b border-[#e6e1d8] px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2 pt-2">
            <button
              onClick={() => scrollTo('sisterhood')}
              className="text-left text-xs font-semibold uppercase tracking-wider text-[#1c1c18] py-2 border-b border-[#e6e1d8]/50"
            >
              About Sisterhood
            </button>
            <button
              onClick={() => scrollTo('care-pools')}
              className="text-left text-xs font-semibold uppercase tracking-wider text-[#1c1c18] py-2 border-b border-[#e6e1d8]/50"
            >
              Care Pools (Max 12)
            </button>
            <button
              onClick={() => scrollTo('six-lines')}
              className="text-left text-xs font-semibold uppercase tracking-wider text-[#1c1c18] py-2 border-b border-[#e6e1d8]/50"
            >
              Six Lines of Care
            </button>
            <button
              onClick={() => scrollTo('directory')}
              className="text-left text-xs font-semibold uppercase tracking-wider text-[#1c1c18] py-2 border-b border-[#e6e1d8]/50"
            >
              Groups Directory
            </button>
            <button
              onClick={() => scrollTo('coordinator')}
              className="text-left text-xs font-semibold uppercase tracking-wider text-[#1c1c18] py-2 border-b border-[#e6e1d8]/50"
            >
              Coordinator Suite
            </button>
            <button
              onClick={() => scrollTo('safeguards')}
              className="text-left text-xs font-semibold uppercase tracking-wider text-[#1c1c18] py-2 border-b border-[#e6e1d8]/50"
            >
              Safeguards
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSignIn();
              }}
              className="text-left text-xs font-semibold uppercase tracking-wider text-[#c89b66] py-2 flex items-center justify-between"
            >
              <span>Member Sign In</span>
              <ShieldCheck className="w-4 h-4 text-[#c89b66]" />
            </button>
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenIntake();
              }}
              className="w-full py-3 bg-[#0f0f10] text-[#fbf9f5] text-xs font-semibold uppercase tracking-wider rounded-[4px] text-center"
            >
              Ask Your Coordinator
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
