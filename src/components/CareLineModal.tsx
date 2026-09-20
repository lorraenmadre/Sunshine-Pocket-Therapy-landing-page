import React from 'react';
import { CareLine } from '../types';
import { X, CheckCircle, Clock, Building2, ArrowRight } from 'lucide-react';

interface CareLineModalProps {
  line: CareLine | null;
  onClose: () => void;
  onRequestHelp: (lineTitle: string) => void;
}

export const CareLineModal: React.FC<CareLineModalProps> = ({
  line,
  onClose,
  onRequestHelp
}) => {
  if (!line) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0f0f10]/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div className="bg-[#ffffff] border border-[#e6e1d8] rounded-xl w-full max-w-lg overflow-hidden shadow-2xl relative">
        {/* Accent Bar */}
        <div className="h-1.5 w-full" style={{ backgroundColor: line.accentColor }} />

        {/* Modal Header */}
        <div className="p-6 border-b border-[#e6e1d8] bg-[#fbf9f5] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0f0f10]">
                {line.line}
              </span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded border border-[#e6e1d8] bg-[#ffffff] text-[#7c5729]">
                {line.badge}
              </span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-[#0f0f10]">
              {line.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-[#ebe8e1] text-[#77777b] hover:text-[#0f0f10] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          {/* Overview */}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#77777b] mb-1.5">
              Service Overview
            </div>
            <p className="text-xs sm:text-sm text-[#1c1c18] leading-relaxed">
              {line.detailedSpecs?.overview || line.description}
            </p>
          </div>

          {/* Protocols List */}
          {line.detailedSpecs?.protocols && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#77777b] mb-2">
                Operational Protocols
              </div>
              <div className="space-y-2">
                {line.detailedSpecs.protocols.map((protocol, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#46464a] bg-[#fbf9f5] border border-[#e6e1d8] p-2.5 rounded-md">
                    <CheckCircle className="w-4 h-4 text-[#c89b66] shrink-0 mt-0.5" />
                    <span className="leading-snug">{protocol}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Institutional Partner & Turnaround */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="bg-[#f6f3ec] border border-[#e6e1d8] p-3 rounded-lg">
              <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-[#7c5729] mb-1">
                <Building2 className="w-3.5 h-3.5" />
                Institutional Partner
              </div>
              <div className="text-xs font-semibold text-[#0f0f10]">
                {line.detailedSpecs?.partner || 'Impact Health USA & NFWA'}
              </div>
            </div>

            <div className="bg-[#f6f3ec] border border-[#e6e1d8] p-3 rounded-lg">
              <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-[#7c5729] mb-1">
                <Clock className="w-3.5 h-3.5" />
                Turnaround SLA
              </div>
              <div className="text-xs font-semibold text-[#0f0f10]">
                {line.detailedSpecs?.turnaround || '< 48-Hour Guarantee'}
              </div>
            </div>
          </div>

          {/* Action button */}
          <button
            onClick={() => {
              onClose();
              onRequestHelp(`Inquiry regarding ${line.line}: ${line.title}`);
            }}
            className="w-full py-3 bg-[#0f0f10] hover:bg-[#262524] text-[#fbf9f5] text-xs font-semibold uppercase tracking-[0.08em] rounded-[4px] flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-[0.98] transition-all"
          >
            <span>Activate Support for {line.line}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#fdcc92]" />
          </button>
        </div>
      </div>
    </div>
  );
};
