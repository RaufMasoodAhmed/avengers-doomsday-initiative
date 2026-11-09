'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Compass,
  Sparkles,
  ArrowLeft,
  ChevronRight,
  Eye,
  Layers,
  Clock,
  Infinity as InfinityIcon,
  BookOpen,
} from 'lucide-react';
import { CHARACTERS } from '@/config/characters';
import { VoicePlayer } from '@/components/audio/VoicePlayer';
import { PillBadge } from '@/components/ui/PillBadge';

export default function DrStrangePage() {
  const data = CHARACTERS.find((c) => c.id === 'dr-strange')!;

  return (
    <div className="relative min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Tao Mandala Ambient Glow */}
      <div className="absolute inset-0 hud-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-[#FF7700]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[450px] h-[350px] bg-[#FFB800]/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Breadcrumb Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
        <div className="flex items-center space-x-2 text-xs font-mono text-gray-400">
          <Link
            href="/"
            className="hover:text-[#FF7700] flex items-center gap-1 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>GLOBAL ARCHIVE</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-gray-600" />
          <span className="text-[#FF7700] font-semibold">
            SANCTUM SANCTORUM // STEPHEN STRANGE
          </span>
        </div>

        <PillBadge variant="gold" pulse={true}>
          MIRROR DIMENSION CONTAINMENT ENGAGED
        </PillBadge>
      </div>

      {/* Hero Showcase Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        {/* Left: 16:9 Landscape Artwork & Audio */}
        <div className="lg:col-span-7 space-y-6">
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden glass-panel border border-[#FF7700]/30 shadow-[0_0_50px_rgba(255,119,0,0.25)] group">
            <Image
              src="/images/avengers-doomsday/drstrange.jpeg"
              alt="Doctor Stephen Strange Master of the Mystic Arts"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D14] via-transparent to-black/30 pointer-events-none" />

            {/* Glowing Tao Mandala Ring Overlay Animation */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity duration-700">
              <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border-2 border-dashed border-[#FF7700] animate-[spin_25s_linear_infinite]" />
              <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full border border-dotted border-[#FFB800] animate-[spin_15s_linear_infinite_reverse] absolute" />
            </div>

            {/* HUD Callouts */}
            <div className="absolute top-4 left-4 font-mono text-[10px] text-[#FF7700] tracking-widest bg-black/70 px-3 py-1 rounded-full border border-[#FF7700]/40 backdrop-blur-md">
              SEAL OF VISHANTI // ACTIVE
            </div>
            <div className="absolute bottom-4 left-4 font-mono text-xs text-white">
              <span className="text-[#FF7700] font-bold">14,000,605 FUTURES</span> // ONE TIMELINE
            </div>
            <div className="absolute bottom-4 right-4 font-mono text-[11px] text-[#FFB800] bg-black/70 px-2.5 py-1 rounded-md border border-[#FFB800]/30">
              SLING RING ALIGNED
            </div>
          </div>

          {/* Voice Player */}
          <VoicePlayer
            src={data.audioSrc}
            title={data.voiceTitle}
            speaker={data.quote.speaker}
            quoteSnippet={data.quote.quote}
            era="golden"
            accentColor="#FF7700"
          />
        </div>

        {/* Right: Mystic Telemetry & Bio */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-8 rounded-3xl border border-[#FF7700]/30 relative overflow-hidden bg-[#160D04]/60 shadow-[0_0_35px_rgba(255,119,0,0.15)]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-[#FF7700] uppercase tracking-widest font-bold">
                {data.badge}
              </span>
              <span className="text-xs font-mono text-gray-400">
                THREAT // OMEGA MYSTIC
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              DOCTOR STRANGE
            </h1>
            <p className="text-lg font-mono text-[#FF7700] mt-1 font-semibold">
              {data.alias}
            </p>
            <p className="text-sm text-gray-400 mt-2 font-mono">
              {data.role}
            </p>

            <p className="text-sm text-gray-300 mt-5 leading-relaxed font-sans border-t border-white/10 pt-4">
              {data.description}
            </p>

            {/* Mystic Telemetry */}
            <div className="mt-6 pt-5 border-t border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#FF7700] mb-3 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5" />
                SANCTUM SANCTORUM METRICS
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

      {/* Reality Stability & Chronicles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Mystic Spells Mastery */}
        <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#FF7700]" />
              ELDRITCH SORCERY PROFICIENCY
            </h3>
            <span className="text-xs font-mono text-[#FF7700]">KAMAR-TAJ GAUGES</span>
          </div>

          <div className="space-y-4">
            {data.stats.map((st, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-gray-300">{st.label}</span>
                  <span className="text-[#FF7700] font-bold">{st.value}</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#FF7700] via-[#FFB800] to-[#FF7700] rounded-full transition-all duration-1000"
                    style={{ width: `${st.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-[#FF7700]/10 border border-[#FF7700]/20 flex items-center gap-3">
            <Clock className="w-6 h-6 text-[#FF7700] flex-shrink-0" />
            <p className="text-xs text-gray-200 font-sans">
              The Mirror Dimension isolates combatants within non-collateral Euclidean distortions, allowing unrestricted reality combat.
            </p>
          </div>
        </div>

        {/* Sorcery Feats */}
        <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <InfinityIcon className="w-5 h-5 text-[#FFB800]" />
              MULTIVERSAL CONTAINMENT FEATS
            </h3>
            <span className="text-xs font-mono text-[#FFB800]">ARCHIVE LOGS</span>
          </div>

          <ul className="space-y-3.5">
            {data.lore.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-xs sm:text-sm text-gray-300 font-sans p-3 rounded-xl bg-white/[0.02] border border-white/5"
              >
                <span className="w-5 h-5 rounded-full bg-[#FF7700]/20 text-[#FF7700] flex items-center justify-center font-mono text-xs flex-shrink-0 mt-0.5">
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

