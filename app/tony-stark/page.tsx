'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Cpu,
  Zap,
  Activity,
  Shield,
  Radio,
  ArrowLeft,
  ChevronRight,
  Terminal,
  Layers,
  Sparkles,
} from 'lucide-react';
import { CHARACTERS } from '@/config/characters';
import { VoicePlayer } from '@/components/audio/VoicePlayer';
import { PillBadge } from '@/components/ui/PillBadge';

export default function TonyStarkPage() {
  const data = CHARACTERS.find((c) => c.id === 'tony-stark')!;

  return (
    <div className="relative min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Stark Arc HUD Grids */}
      <div className="absolute inset-0 hud-grid-cyan opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00F0FF]/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Navigation Breadcrumbs & Status */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
        <div className="flex items-center space-x-2 text-xs font-mono text-gray-400">
          <Link
            href="/"
            className="hover:text-[#00F0FF] flex items-center gap-1 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>GLOBAL ARCHIVE</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-gray-600" />
          <span className="text-[#00F0FF] font-semibold">STARK INDUSTRIES // MARK LXXXV</span>
        </div>

        <div className="flex items-center space-x-3">
          <PillBadge variant="cyan" pulse={true}>
            J.A.R.V.I.S. QUANTUM TELEMETRY ACTIVE
          </PillBadge>
        </div>
      </div>

      {/* Hero Showcase Header */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        {/* Left Column: 16:9 Landscape Artwork & Hologram Frame */}
        <div className="lg:col-span-7 space-y-6">
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden glass-panel border border-[#00F0FF]/30 shadow-[0_0_50px_rgba(0,240,255,0.2)] group">
            <Image
              src="/images/avengers-doomsday/ironman.jpeg"
              alt="Tony Stark Iron Man Mark LXXXV"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08101A] via-transparent to-black/30 pointer-events-none" />

            {/* Tactical Reticle Overlays */}
            <div className="absolute top-4 left-4 font-mono text-[10px] text-[#00F0FF] tracking-widest bg-black/60 px-3 py-1 rounded-full border border-[#00F0FF]/30 backdrop-blur-md">
              TARGET LOCK // EARTH-616
            </div>
            <div className="absolute bottom-4 left-4 font-mono text-xs text-white">
              <span className="text-[#00F0FF] font-bold">NANITE MATRIX</span> // 100% OPERATIONAL
            </div>
            <div className="absolute bottom-4 right-4 font-mono text-[11px] text-gray-300 bg-black/70 px-2.5 py-1 rounded-md border border-white/10">
              GAUNTLET LOADED
            </div>
          </div>

          {/* Voice Player Unit */}
          <VoicePlayer
            src={data.audioSrc}
            title={data.voiceTitle}
            speaker={data.quote.speaker}
            quoteSnippet={data.quote.quote}
            era="golden"
            accentColor="#00F0FF"
          />
        </div>

        {/* Right Column: Hero Metrics & Tactical Bio */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel-cyan p-8 rounded-3xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-widest font-bold">
                {data.badge}
              </span>
              <span className="text-xs font-mono text-gray-400">
                CLEARANCE // LEVEL 10
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              TONY STARK
            </h1>
            <p className="text-lg font-mono text-[#00F0FF] mt-1 font-semibold">
              {data.alias}
            </p>
            <p className="text-sm text-gray-400 mt-2 font-mono">
              {data.role}
            </p>

            <p className="text-sm text-gray-300 mt-5 leading-relaxed font-sans border-t border-white/10 pt-4">
              {data.description}
            </p>

            {/* Telemetry Matrix Grid */}
            <div className="mt-6 pt-5 border-t border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#00F0FF] mb-3 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5" />
                TACTICAL HUD TELEMETRY
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                {Object.entries(data.telemetry).map(([key, val]) => (
                  <div
                    key={key}
                    className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col justify-between"
                  >
                    <span className="text-gray-400 text-[10px] uppercase truncate">
                      {key}
                    </span>
                    <span className="text-white font-bold mt-0.5 truncate">
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Stats & Lore Deep Dive */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Core Armor Diagnostics */}
        <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-[#00F0FF]" />
              MARK LXXXV SYSTEMS DIAGNOSTICS
            </h3>
            <span className="text-xs font-mono text-[#00F0FF]">LIVE GAUGES</span>
          </div>

          <div className="space-y-4">
            {data.stats.map((st, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-gray-300">{st.label}</span>
                  <span className="text-[#00F0FF] font-bold">{st.value}</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#00F0FF] to-[#FFB800] rounded-full transition-all duration-1000"
                    style={{ width: `${st.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-[#00F0FF]/10 border border-[#00F0FF]/20 flex items-center gap-3">
            <Zap className="w-6 h-6 text-[#00F0FF] flex-shrink-0" />
            <p className="text-xs text-gray-200 font-sans">
              New Element Arc Reactor core produces zero particulate degradation. Capable of powering 3 metropolitan city blocks indefinitely.
            </p>
          </div>
        </div>

        {/* Combat History & Key Chronology */}
        <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#FFB800]" />
              HEROIC CHRONOLOGY & FEATS
            </h3>
            <span className="text-xs font-mono text-[#FFB800]">DECLASSIFIED</span>
          </div>

          <ul className="space-y-3.5">
            {data.lore.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-xs sm:text-sm text-gray-300 font-sans p-3 rounded-xl bg-white/[0.02] border border-white/5"
              >
                <span className="w-5 h-5 rounded-full bg-[#00F0FF]/15 text-[#00F0FF] flex items-center justify-center font-mono text-xs flex-shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
