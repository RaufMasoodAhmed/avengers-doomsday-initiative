'use client';

import React, { useEffect, useState } from 'react';
import { Shield, Flame, Sparkles } from 'lucide-react';
import { EraMode } from '@/types/avengers';

interface EraSwitchProps {
  currentEra?: EraMode;
  onEraChange?: (era: EraMode) => void;
  className?: string;
}

export function EraSwitch({ currentEra, onEraChange, className = '' }: EraSwitchProps) {
  const [era, setEra] = useState<EraMode>(currentEra || 'golden');

  useEffect(() => {
    if (currentEra) {
      setEra(currentEra);
    }
  }, [currentEra]);

  const toggleEra = (newEra: EraMode) => {
    setEra(newEra);
    document.documentElement.setAttribute('data-era', newEra);
    if (onEraChange) {
      onEraChange(newEra);
    }
  };

  return (
    <div
      className={`inline-flex items-center p-1 rounded-full glass-pill border border-white/10 bg-black/50 ${className}`}
    >
      <button
        type="button"
        onClick={() => toggleEra('golden')}
        className={`relative flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
          era === 'golden'
            ? 'bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/40 shadow-[0_0_15px_rgba(0,240,255,0.3)]'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        <Shield className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">GOLDEN ERA</span>
        <span className="sm:hidden">GOLDEN</span>
      </button>

      <button
        type="button"
        onClick={() => toggleEra('doomsday')}
        className={`relative flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
          era === 'doomsday'
            ? 'bg-[#00FF66]/20 text-[#00FF66] border border-[#00FF66]/40 shadow-[0_0_15px_rgba(0,255,102,0.35)]'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        <Flame className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">DOOMSDAY SHIFT</span>
        <span className="sm:hidden">DOOMSDAY</span>
      </button>
    </div>
  );
}

