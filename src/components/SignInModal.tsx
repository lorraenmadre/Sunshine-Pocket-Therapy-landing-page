import React, { useState } from 'react';
import { X, Lock, ShieldCheck, CheckCircle } from 'lucide-react';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (memberEmail: string) => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({
  isOpen,
  onClose,
  onSuccess
}) => {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [signedIn, setSignedIn] = useState(false);

  if (!isOpen) return null;

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setSignedIn(true);
    setTimeout(() => {
      onSuccess(email || 'matriarch@nfwa-pocket.org');
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0f0f10]/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div className="bg-[#ffffff] border border-[#e6e1d8] rounded-xl w-full max-w-md overflow-hidden shadow-2xl relative">
        <div className="p-6 border-b border-[#e6e1d8] bg-[#fbf9f5] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Lock className="w-3.5 h-3.5 text-[#7c5729]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7c5729]">
                Google Cloud Zero-Knowledge SSO
              </span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-[#0f0f10]">
              Member Pocket Sign In
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-[#ebe8e1] text-[#77777b] hover:text-[#0f0f10] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {signedIn ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-12 h-12 bg-[#f0fdf4] text-[#16a34a] border border-[#bbf7d0] rounded-full mx-auto flex items-center justify-center">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold tracking-tight text-[#0f0f10]">
              Vault Authentication Verified
            </h4>
            <p className="text-xs text-[#5a5854]">
              Sequestering active session. Loading family care file...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSignIn} className="p-6 space-y-4">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#0f0f10] mb-1">
                Authorized NFWA Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="matriarch@nfwa.org"
                className="w-full bg-[#fbf9f5] border border-[#e6e1d8] rounded-[4px] px-3 py-2 text-xs text-[#1c1c18] focus:border-[#0f0f10] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-[0.08em] text-[#0f0f10] mb-1">
                Member Passcode or Security Key
              </label>
              <input
                type="password"
                required
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-[#fbf9f5] border border-[#e6e1d8] rounded-[4px] px-3 py-2 text-xs text-[#1c1c18] focus:border-[#0f0f10] focus:outline-none"
              />
            </div>

            <div className="p-3 bg-[#f6f3ec] border border-[#e6e1d8] rounded-md flex items-center gap-2.5 text-[11px] text-[#5a5854]">
              <ShieldCheck className="w-4 h-4 text-[#7c5729] shrink-0" />
              <span>
                Zero logs are ever transmitted to NFL club athletic staff or front offices.
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#0f0f10] hover:bg-[#262524] text-[#fbf9f5] text-xs font-semibold uppercase tracking-[0.08em] rounded-[4px] transition-all cursor-pointer"
            >
              Sign In to Sovereign Vault
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
