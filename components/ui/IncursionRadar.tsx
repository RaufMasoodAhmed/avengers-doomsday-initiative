'use client';

import React, { useState } from 'react';
import { AlertTriangle, Radio, Shield, Globe2, Compass, Zap } from 'lucide-react';
import { PillBadge } from '@/components/ui/PillBadge';

interface RealityAnchor {
  id: string;
  name: string;
  coordinates: string;
  incursionRisk: number;
  status: 'STABLE' | 'COLLIDING' | 'CRITICAL' | 'ANNEXED';
  sector: string;
}

const ANCHORS: RealityAnchor[] = [
  {
    id: '616',
    name: 'Earth-616 (Sacred Anchor)',
    coordinates: 'T-001.44 // NYC PRIME',
    incursionRisk: 38,
    status: 'STABLE',
    sector: 'AVENGERS COMPOUND',
  },
  {
    id: 'latveria',
    name: 'Kingdom of Latveria (Doom Castle)',
    coordinates: 'L-999.01 // CASTLE DOOM',
    incursionRisk: 89,
    status: 'CRITICAL',
    sector: 'LATVERIAN SOVEREIGN GRID',
  },
  {
    id: '838',
    name: 'Earth-838 (Illuminati Remnant)',
    coordinates: 'T-838.12 // TITAN VOID',
    incursionRisk: 96,
    status: 'COLLIDING',
    sector: 'ILLUMINATI CHAMBER',
  },
  {
    id: 'kamar-taj',
    name: 'Kamar-Taj Eldritch Node',
    coordinates: 'KT-044.2 // NEPAL HIGHLANDS',
    incursionRisk: 45,
    status: 'STABLE',
    sector: 'MYSTIC SANCTUM',
  },
  {
    id: 'battleworld',
    name: 'Battleworld Convergence Point',
    coordinates: 'BW-000.00 // SINGULARITY',
    incursionRisk: 100,
    status: 'ANNEXED',
    sector: 'DOOM PROTOCOL OMEGA',
  },
];

export function IncursionRadar() {
  const [selectedAnchor, setSelectedAnchor] = useState<RealityAnchor>(ANCHORS[1]);

  return (
    <div className="relative rounded-3xl overflow-hidden glass-panel-green border border-[#00FF66]/30 p-6 sm:p-8 bg-[#040E0A]/90">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <PillBadge variant="green" pulse={true}>
              LIVE INCURSION TELEMETRY
            </PillBadge>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight flex items-center gap-2">
            <Radio className="w-5 h-5 text-[#00FF66]" />
            MULTIVERSAL CONVERGENCE RADAR
          </h3>
        </div>
        <div className="text-xs font-mono text-emerald-400">
          RADAR SWEEP // 360&deg; OMNI-BEAM
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Radar Visualizer Animation */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-[#00FF66]/40 flex items-center justify-center bg-black/40 shadow-[0_0_50px_rgba(0,255,102,0.15)] overflow-hidden">
            {/* Concentric Radar Rings */}
            <div className="absolute inset-4 rounded-full border border-[#00FF66]/20" />
            <div className="absolute inset-12 rounded-full border border-[#00FF66]/20" />
            <div className="absolute inset-20 rounded-full border border-dashed border-[#00FF66]/30" />

            {/* Crosshairs */}
            <div className="absolute inset-x-0 top-1/2 h-[1px] bg-[#00FF66]/25" />
            <div className="absolute inset-y-0 left-1/2 w-[1px] bg-[#00FF66]/25" />

            {/* Sweep Needle */}
            <div className="absolute inset-0 origin-center animate-[spin_4s_linear_infinite] pointer-events-none">
              <div className="w-1/2 h-full bg-gradient-to-l from-[#00FF66]/25 to-transparent origin-right" />
            </div>

            {/* Blips */}
            <div className="absolute top-1/4 left-1/3 w-3 h-3 rounded-full bg-[#00F0FF] animate-ping" />
            <div className="absolute top-1/4 left-1/3 w-2.5 h-2.5 rounded-full bg-[#00F0FF]" />

            <div className="absolute bottom-1/3 right-1/4 w-3.5 h-3.5 rounded-full bg-[#00FF66] animate-ping" />
            <div className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-[#00FF66]" />

            <div className="absolute top-1/2 right-1/3 w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />

            {/* Center Axis */}
            <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_10px_white] z-10" />
          </div>

          <div className="mt-4 text-[11px] font-mono text-gray-400 text-center">
            RADAR COORD: {selectedAnchor.coordinates}
          </div>
        </div>

        {/* Anchor Selector & Detailed Stats */}
        <div className="lg:col-span-6 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block font-bold">
            SELECT TIMELINE ANCHOR //
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {ANCHORS.map((anchor) => {
              const isSelected = selectedAnchor.id === anchor.id;
              return (
                <button
                  key={anchor.id}
                  onClick={() => setSelectedAnchor(anchor)}
                  type="button"
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#00FF66]/20 border-[#00FF66] text-white shadow-[0_0_15px_rgba(0,255,102,0.3)]'
                      : 'bg-black/30 border-white/10 text-gray-300 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="truncate">{anchor.name.split('(')[0]}</span>
                    <span
                      className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${
                        anchor.status === 'CRITICAL' || anchor.status === 'COLLIDING'
                          ? 'bg-red-500/20 text-red-400'
                          : 'bg-[#00FF66]/20 text-[#00FF66]'
                      }`}
                    >
                      {anchor.status}
                    </span>
                  </div>
                  <div className="text-[10px] font-mono text-gray-400 mt-1">
                    Risk: {anchor.incursionRisk}%
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Anchor Diagnostics */}
          <div className="p-4 rounded-2xl bg-black/50 border border-[#00FF66]/20 space-y-3 mt-4">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-gray-400">TARGET TIMELINE:</span>
              <span className="text-white font-bold">{selectedAnchor.name}</span>
            </div>
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-gray-400">SECTOR ASSIGNMENT:</span>
              <span className="text-emerald-400">{selectedAnchor.sector}</span>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-gray-400">INCURSION PROBABILITY:</span>
                <span className="text-[#00FF66] font-bold">
                  {selectedAnchor.incursionRisk}%
                </span>
              </div>
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 via-[#00FF66] to-red-500 transition-all duration-500"
                  style={{ width: `${selectedAnchor.incursionRisk}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

