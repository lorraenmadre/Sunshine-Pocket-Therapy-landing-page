import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SisterhoodImperative } from './components/SisterhoodImperative';
import { SixLinesOfCare } from './components/SixLinesOfCare';
import { CarePools } from './components/CarePools';
import { MemberDirectory } from './components/MemberDirectory';
import { CoordinatorConsole } from './components/CoordinatorConsole';
import { InstitutionalDefense } from './components/InstitutionalDefense';
import { PricingTiers } from './components/PricingTiers';
import { StructuralImpact } from './components/StructuralImpact';
import { Footer } from './components/Footer';

import { IntakeModal } from './components/IntakeModal';
import { CareLineModal } from './components/CareLineModal';
import { CohortModal } from './components/CohortModal';
import { SignInModal } from './components/SignInModal';
import { ProtocolModal } from './components/ProtocolModal';

import { CareLine, CarePool, MemberProfile, CoverageTier } from './types';
import { ShieldCheck, UserCheck } from 'lucide-react';

export function App() {
  const [intakeOpen, setIntakeOpen] = useState(false);
  const [presetRequest, setPresetRequest] = useState<string>('');
  const [selectedLine, setSelectedLine] = useState<CareLine | null>(null);
  const [selectedPool, setSelectedPool] = useState<CarePool | null>(null);
  const [selectedMember, setSelectedMember] = useState<MemberProfile | null>(null);
  const [signInOpen, setSignInOpen] = useState(false);
  const [activeUser, setActiveUser] = useState<string | null>(null);
  const [protocolType, setProtocolType] = useState<'privacy' | 'consent' | 'terms' | null>(null);

  const handleOpenIntake = (preset?: string) => {
    setPresetRequest(preset || '');
    setIntakeOpen(true);
  };

  const handleSelectTier = (tier: CoverageTier) => {
    handleOpenIntake(`Inquiry regarding tier: ${tier.name} (${tier.price} ${tier.period})`);
  };

  const handleSelectMember = (member: MemberProfile) => {
    setSelectedMember(member);
  };

  return (
    <div className="min-h-screen bg-[#fcf9f2] text-[#1c1c18] flex flex-col font-sans selection:bg-[#fdcc92] selection:text-[#0f0f10]">
      {/* Active Member Status Notification Banner if logged in */}
      {activeUser && (
        <div className="bg-[#0f0f10] text-[#fbf9f5] px-4 py-2 border-b border-[#262524] text-xs flex items-center justify-between">
          <div className="max-w-[1360px] mx-auto w-full flex items-center justify-between">
            <div className="flex items-center gap-2">
              <UserCheck className="w-3.5 h-3.5 text-[#10b981]" />
              <span>
                Authenticated Sovereign Session: <strong className="text-[#fdcc92]">{activeUser}</strong>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase font-bold text-[#10b981] bg-[#161617] px-2 py-0.5 rounded border border-[#31312c]">
                Vault Encrypted
              </span>
              <button
                onClick={() => setActiveUser(null)}
                className="text-[#858384] hover:text-[#fbf9f5] text-[10px] uppercase underline cursor-pointer"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <Navbar
        onOpenIntake={handleOpenIntake}
        onOpenSignIn={() => setSignInOpen(true)}
      />

      {/* Hero Section with Live Request Bar & Trust Badges */}
      <main className="flex-1">
        <HeroSection onOpenIntake={handleOpenIntake} />

        {/* The Sisterhood Imperative (Uncoordinated Reality vs. NFWA Standard) */}
        <SisterhoodImperative />

        {/* Care Pools: Maximum 12 Women Per Circle */}
        <CarePools
          onSelectPool={(pool) => setSelectedPool(pool)}
        />

        {/* The Six Lines of Care Grid */}
        <SixLinesOfCare
          onSelectLine={(line) => setSelectedLine(line)}
        />

        {/* Active Member Directory & Cohort Preview */}
        <MemberDirectory
          onSelectMember={handleSelectMember}
        />

        {/* Coordinator Operating Suite • Enterprise Dispatch Console (Dark Obsidian Hub) */}
        <CoordinatorConsole
          onOpenIntake={handleOpenIntake}
        />

        {/* Institutional Defense: Security, Jurisprudence & Institutional Safeguards */}
        <InstitutionalDefense />

        {/* Tiered Coverage & Sovereign Retainers */}
        <PricingTiers
          onSelectTier={handleSelectTier}
        />

        {/* Structural Impact: Anonymous Advocacy & Collective League Intelligence */}
        <StructuralImpact />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setProtocolType('privacy')}
        onOpenConsent={() => setProtocolType('consent')}
        onOpenTerms={() => setProtocolType('terms')}
      />

      {/* Modals & Dialogs */}
      <IntakeModal
        isOpen={intakeOpen}
        onClose={() => setIntakeOpen(false)}
        presetRequest={presetRequest}
      />

      <CareLineModal
        line={selectedLine}
        onClose={() => setSelectedLine(null)}
        onRequestHelp={(context) => handleOpenIntake(context)}
      />

      <CohortModal
        pool={selectedPool}
        memberLead={selectedMember}
        onClose={() => {
          setSelectedPool(null);
          setSelectedMember(null);
        }}
      />

      <SignInModal
        isOpen={signInOpen}
        onClose={() => setSignInOpen(false)}
        onSuccess={(email) => setActiveUser(email)}
      />

      <ProtocolModal
        type={protocolType}
        onClose={() => setProtocolType(null)}
      />
    </div>
  );
}
export default App;
