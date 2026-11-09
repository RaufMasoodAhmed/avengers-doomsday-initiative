'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Zap,
  Shield,
  Radio,
  ArrowLeft,
  ChevronRight,
  Flame,
  Globe2,
  Sparkles,
  Compass,
} from 'lucide-react';
import { CHARACTERS } from '@/config/characters';
import { VoicePlayer } from '@/components/audio/VoicePlayer';
import { PillBadge } from '@/components/ui/PillBadge';

export default function ThorPage() {
  const data = CHARACTERS.find((c) => c.id === 'thor')!;

  return (
    <div className="relative min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Asgardian Lightning Aura */}
      <div className="absolute inset-0 hud-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[700px] h-[450px] bg-[#FFB800]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[500px] h-[300px] bg-[#00F0FF]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Breadcrumbs */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
        <div className="flex items-center space-x-2 text-xs font-mono text-gray-400">
          <Link
            href="/"
            className="hover:text-[#FFB800] flex items-center gap-1 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>GLOBAL ARCHIVE</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-gray-600" />
          <span className="text-[#FFB800] font-semibold">ASGARDIAN ARCHIVE // ODINSON</span>
        </div>

        <PillBadge variant="gold" pulse={true}>
          BIFROST DIMENSIONAL CONDUIT ONLINE
        </PillBadge>
      </div>

      {/* Hero Showcase Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        {/* Left: 16:9 Landscape Artwork & Audio */}
        <div className="lg:col-span-7 space-y-6">
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden glass-panel border border-[#FFB800]/30 shadow-[0_0_50px_rgba(255,184,0,0.2)] group">
            <Image
              src="/images/avengers-doomsday/thor.jpeg"
              alt="Thor Odinson God of Thunder"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D14] via-transparent to-black/30 pointer-events-none" />

            {/* Asgardian HUD Badges */}
            <div className="absolute top-4 left-4 font-mono text-[10px] text-[#FFB800] tracking-widest bg-black/60 px-3 py-1 rounded-full border border-[#FFB800]/30 backdrop-blur-md">
              REALM BRIDGE // NIDAVELLIR URU
            </div>
            <div className="absolute bottom-4 left-4 font-mono text-xs text-white">
              <span className="text-[#FFB800] font-bold">STORMBREAKER</span> // KINETIC APEX
            </div>
            <div className="absolute bottom-4 right-4 font-mono text-[11px] text-[#00F0FF] bg-black/70 px-2.5 py-1 rounded-md border border-[#00F0FF]/30">
              LIGHTNING CONDUIT READY
            </div>
          </div>

          {/* Voice Player */}
          <VoicePlayer
            src={data.audioSrc}
            title={data.voiceTitle}
            speaker={data.quote.speaker}
            quoteSnippet={data.quote.quote}
            era="golden"
            accentColor="#FFB800"
          />
        </div>

        {/* Right: Asgardian Telemetry & Sovereign Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-8 rounded-3xl border border-[#FFB800]/30 relative overflow-hidden bg-[#120E05]/60 shadow-[0_0_35px_rgba(255,184,0,0.12)]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-[#FFB800] uppercase tracking-widest font-bold">
                {data.badge}
              </span>
              <span className="text-xs font-mono text-gray-400">
                THREAT LEVEL // OMEGA GOD
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              THOR ODINSON
            </h1>
            <p className="text-lg font-mono text-[#FFB800] mt-1 font-semibold">
              {data.alias}
            </p>
            <p className="text-sm text-gray-400 mt-2 font-mono">
              {data.role}
            </p>

            <p className="text-sm text-gray-300 mt-5 leading-relaxed font-sans border-t border-white/10 pt-4">
              {data.description}
            </p>

            {/* Telemetry Parameters */}
            <div className="mt-6 pt-5 border-t border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#FFB800] mb-3 flex items-center gap-2">
                <Compass className="w-3.5 h-3.5" />
                ASGARDIAN REALM TELEMETRY
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

      {/* Divine Powers & Lore */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Thunder & Storm Metrics */}
        <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#FFB800]" />
              DIVINE POWER POTENTIAL
            </h3>
            <span className="text-xs font-mono text-[#FFB800]">REALM METRICS</span>
          </div>

          <div className="space-y-4">
            {data.stats.map((st, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-gray-300">{st.label}</span>
                  <span className="text-[#FFB800] font-bold">{st.value}</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#FFB800] via-[#00F0FF] to-[#FFB800] rounded-full transition-all duration-1000"
                    style={{ width: `${st.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-[#FFB800]/10 border border-[#FFB800]/20 flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-[#FFB800] flex-shrink-0" />
            <p className="text-xs text-gray-200 font-sans">
              Stormbreaker allows unassisted trans-dimensional transit across Yggdrasil branches without requiring Heimdall’s observatory.
            </p>
          </div>
        </div>

        {/* Battle Feats */}
        <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Globe2 className="w-5 h-5 text-[#00F0FF]" />
              YGGDRASIL CONFLICT CHRONICLES
            </h3>
            <span className="text-xs font-mono text-[#00F0FF]">SAGA DATA</span>
          </div>

          <ul className="space-y-3.5">
            {data.lore.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-xs sm:text-sm text-gray-300 font-sans p-3 rounded-xl bg-white/[0.02] border border-white/5"
              >
                <span className="w-5 h-5 rounded-full bg-[#FFB800]/20 text-[#FFB800] flex items-center justify-center font-mono text-xs flex-shrink-0 mt-0.5">
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

