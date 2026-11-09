'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Flame,
  Zap,
  Radio,
  ArrowLeft,
  ChevronRight,
  ShieldAlert,
  Crown,
  Crosshair,
  AlertTriangle,
  Skull,
  Activity,
  Layers,
  Quote,
} from 'lucide-react';
import { CHARACTERS } from '@/config/characters';
import { VoicePlayer } from '@/components/audio/VoicePlayer';
import { PillBadge } from '@/components/ui/PillBadge';
import { IncursionRadar } from '@/components/ui/IncursionRadar';

export default function DoomsdayPage() {
  const data = CHARACTERS.find((c) => c.id === 'doomsday')!;

  return (
    <div className="relative min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* High-Impact Green Cosmic Energy Theme Background Grids & Mesh */}
      <div className="absolute inset-0 hud-grid-green opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-[#00FF66]/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[600px] h-[350px] bg-[#059669]/20 blur-[140px] rounded-full pointer-events-none" />

      {/* Breadcrumb Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
        <div className="flex items-center space-x-2 text-xs font-mono text-gray-400">
          <Link
            href="/"
            className="hover:text-[#00FF66] flex items-center gap-1 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>GLOBAL ARCHIVE</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-gray-600" />
          <span className="text-[#00FF66] font-semibold">
            LATVERIAN SUPREMACY // VICTOR VON DOOM
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <PillBadge variant="green" pulse={true}>
            MULTIVERSAL INCURSION ALERT: CATACLYSMIC
          </PillBadge>
        </div>
      </div>

      {/* Massive Header Hero Banner */}
      <div className="relative z-10 mb-10">
        <div className="flex items-center gap-2 mb-3">
          <Crown className="w-6 h-6 text-[#00FF66]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#00FF66] font-bold">
            LATVERIAN IMPERIAL ARCHIVE // OMEGA PLUS LEVEL THREAT
          </span>
        </div>
        <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tight uppercase leading-none">
          VICTOR VON <span className="text-[#00FF66] text-glow-green">DOOM</span>
        </h1>
        <p className="text-base sm:text-xl font-mono text-gray-300 mt-3 max-w-3xl">
          The sovereign ruler of Latveria steps across colliding realities. Master of science and dark sorcery, he emerges not merely as a conqueror—but as the singular architect of survival.
        </p>
      </div>

      {/* Imperial Latverian Proclamation Banner */}
      <div className="relative z-10 mb-12 p-8 sm:p-10 rounded-3xl glass-panel-green border-2 border-[#00FF66]/50 shadow-[0_0_50px_rgba(0,255,102,0.25)] bg-[#040E08]/90 overflow-hidden">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <Quote className="w-5 h-5 text-[#00FF66]" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00FF66]">
              IMPERIAL PROCLAMATION // MULTIVERSAL DECREE
            </span>
          </div>
          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#00FF66]/15 border border-[#00FF66]/30 text-[#00FF66]">
            BROADCAST 001
          </span>
        </div>
        <blockquote className="text-xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-snug">
          &ldquo;I am Victor von Doom. You were foolish enough to fight among yourselves while the multiverse cracked beneath your feet. There is only one hope now... <span className="text-[#00FF66] text-glow-green">DOOM!</span>&rdquo;
        </blockquote>
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <span className="text-emerald-400">
            TRANSMITTED ACROSS ALL CONVERGING TIMELINES
          </span>
          <span className="text-gray-400">
            RECORDED AT CASTLE DOOM // EARTH-616 INTERCEPT
          </span>
        </div>
      </div>

      {/* Hero Showcase Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        {/* Left: 16:9 Landscape Artwork & High-Priority Audio */}
        <div className="lg:col-span-7 space-y-6">
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden glass-panel-green border border-[#00FF66]/40 shadow-[0_0_60px_rgba(0,255,102,0.3)] group">
            <Image
              src="/images/avengers-doomsday/doom.jpeg"
              alt="Victor von Doom Doctor Doom Multiverse Incursion"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06140E] via-transparent to-black/40 pointer-events-none" />

            {/* Incursion Scanline & Corner Reticles */}
            <div className="absolute top-4 left-4 font-mono text-[10px] text-[#00FF66] tracking-widest bg-black/80 px-3 py-1 rounded-full border border-[#00FF66]/40 backdrop-blur-md">
              SINGULARITY // EARTH-616 INVASION
            </div>
            <div className="absolute bottom-4 left-4 font-mono text-xs text-white">
              <span className="text-[#00FF66] font-bold">LATVERIAN DOMINION</span> // ABSOLUTE
            </div>
            <div className="absolute bottom-4 right-4 font-mono text-[11px] text-black bg-[#00FF66] font-bold px-3 py-1 rounded-md shadow-[0_0_15px_rgba(0,255,102,0.6)]">
              THREAT: OMEGA PLUS
            </div>
          </div>

          {/* High Priority Voice Player for Doom's Speech */}
          <VoicePlayer
            src={data.audioSrc}
            title={data.voiceTitle}
            speaker={data.quote.speaker}
            quoteSnippet={data.quote.quote}
            era="doomsday"
            accentColor="#00FF66"
          />
        </div>

        {/* Right: Imperial Telemetry & Sovereign Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel-green p-8 rounded-3xl border border-[#00FF66]/40 relative overflow-hidden bg-[#06140E]/85 shadow-[0_0_40px_rgba(0,255,102,0.2)]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-[#00FF66] uppercase tracking-widest font-bold">
                {data.badge}
              </span>
              <span className="text-xs font-mono text-emerald-400">
                ROYAL DECREE // 001
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              THE MONARCH ASCENDS
            </h2>
            <p className="text-lg font-mono text-[#00FF66] mt-1 font-semibold">
              {data.alias}
            </p>
            <p className="text-sm text-gray-400 mt-2 font-mono">
              {data.role}
            </p>

            <p className="text-sm text-gray-300 mt-5 leading-relaxed font-sans border-t border-white/10 pt-4">
              {data.description}
            </p>

            {/* Sovereign Telemetry */}
            <div className="mt-6 pt-5 border-t border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#00FF66] mb-3 flex items-center gap-2">
                <Crosshair className="w-3.5 h-3.5" />
                LATVERIAN SUPREME TELEMETRY
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                {Object.entries(data.telemetry).map(([key, val]) => (
                  <div
                    key={key}
                    className="p-3 rounded-xl bg-black/40 border border-white/5 flex flex-col justify-between"
                  >
                    <span className="text-emerald-400/80 text-[10px] uppercase truncate">
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

      {/* Multiverse Incursion Radar Section */}
      <div className="relative z-10 mb-12">
        <IncursionRadar />
      </div>

      {/* Multiversal Incursion Analytics & Doombot Swarm */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Cataclysm Gauges */}
        <div className="glass-panel-green p-8 rounded-3xl border border-[#00FF66]/30 space-y-6 bg-[#040C08]/80">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#00FF66]" />
              MULTIVERSAL INCURSION GAUGES
            </h3>
            <span className="text-xs font-mono text-[#00FF66]">CRITICAL PEAK</span>
          </div>

          <div className="space-y-4">
            {data.stats.map((st, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-gray-300">{st.label}</span>
                  <span className="text-[#00FF66] font-bold">{st.value}</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#059669] to-[#00FF66] rounded-full transition-all duration-1000 shadow-[0_0_12px_rgba(0,255,102,0.8)]"
                    style={{ width: `${st.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-[#00FF66]/10 border border-[#00FF66]/20 flex items-center gap-3">
            <Skull className="w-6 h-6 text-[#00FF66] flex-shrink-0" />
            <p className="text-xs text-gray-200 font-sans">
              Calculations predict a total collapse of reality boundaries unless all temporal anchors are consolidated beneath a single imperial consciousness.
            </p>
          </div>
        </div>

        {/* Doom's Arcane & Scientific Ascendancy */}
        <div className="glass-panel-green p-8 rounded-3xl border border-[#00FF66]/30 space-y-6 bg-[#040C08]/80">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Flame className="w-5 h-5 text-[#00FF66]" />
              LATVERIAN ASCENDANCY CHRONICLES
            </h3>
            <span className="text-xs font-mono text-[#00FF66]">CONFIDENTIAL</span>
          </div>

          <ul className="space-y-3.5">
            {data.lore.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-xs sm:text-sm text-gray-300 font-sans p-3 rounded-xl bg-black/40 border border-white/5"
              >
                <span className="w-5 h-5 rounded-full bg-[#00FF66]/20 text-[#00FF66] flex items-center justify-center font-mono text-xs flex-shrink-0 mt-0.5">
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
