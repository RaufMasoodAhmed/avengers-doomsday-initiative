'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Shield,
  Flame,
  Radio,
  Sparkles,
  ArrowDown,
  ArrowRight,
  Zap,
  Globe2,
  Terminal,
  Activity,
  PlayCircle,
} from 'lucide-react';
import { CHARACTERS } from '@/config/characters';
import { PillBadge } from '@/components/ui/PillBadge';
import { CharacterCard } from '@/components/ui/CharacterCard';
import { EraSwitch } from '@/components/ui/EraSwitch';
import { EraMode } from '@/types/avengers';

export default function HomePage() {
  const [selectedEra, setSelectedEra] = useState<EraMode>('golden');

  const filteredCharacters = CHARACTERS.filter((c) => {
    if (selectedEra === 'golden') return c.era === 'golden';
    return true; // in doomsday mode, show all with Doom as focal point
  });

  const doomCharacter = CHARACTERS.find((c) => c.id === 'doomsday')!;
  const goldenCharacters = CHARACTERS.filter((c) => c.era === 'golden');

  const isDoom = selectedEra === 'doomsday';
  const primaryColor = isDoom ? '#00FF66' : '#00F0FF';

  return (
    <div className="relative min-h-screen">
      {/* Dynamic Ambient Background Gradients based on Era */}
      <div
        className={`fixed inset-0 pointer-events-none transition-opacity duration-1000 ${
          isDoom ? 'bg-mesh-doomsday opacity-90' : 'bg-mesh-golden opacity-80'
        }`}
      />
      <div className="fixed inset-0 hud-grid opacity-25 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative z-10 min-h-[92vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="relative w-full max-w-7xl mx-auto rounded-3xl overflow-hidden glass-panel border border-white/15 shadow-2xl">
          {/* Full-bleed Hero Backdrop Image */}
          <div className="absolute inset-0 w-full h-full bg-black">
            <Image
              src="/images/avengers-doomsday/avengers-doomsday.jpeg"
              alt="Avengers Doomsday Hero Backdrop"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-45 sm:opacity-55 scale-105 animate-pulse duration-[8000ms]"
            />
            {/* Multi-layered Obsidian Gradients for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030407] via-[#030407]/75 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#030407]/90 via-[#030407]/40 to-[#030407]/90" />
            <div className="absolute inset-0 hud-grid-cyan opacity-20" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 px-6 sm:px-12 lg:px-16 py-20 sm:py-28 flex flex-col items-center text-center max-w-5xl mx-auto">
            {/* Zeecore-style glowing pill badge */}
            <div className="mb-6 animate-bounce duration-[3000ms]">
              <PillBadge
                variant={isDoom ? 'green' : 'cyan'}
                pulse={true}
                className="px-4 py-2 text-xs font-bold"
              >
                MULTIVERSAL ERA TRANSITION ACTIVE
              </PillBadge>
            </div>

            {/* Massive Bold Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight uppercase leading-[0.95] max-w-4xl">
              THE DOOMSDAY{' '}
              <span
                className={`transition-all duration-700 ${
                  isDoom
                    ? 'text-[#00FF66] text-glow-green'
                    : 'text-[#00F0FF] text-glow-cyan'
                }`}
              >
                INITIATIVE
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-gray-300 mt-6 max-w-2xl font-sans leading-relaxed">
              Witness the monumental collision of two Marvel Cinematic eras—from the clean Stark Industries glassmorphic HUD of Earth’s mightiest heroes to the sovereign green cosmic sorcery of{' '}
              <span className="text-[#00FF66] font-semibold">Victor von Doom</span>.
            </p>

            {/* Era Switcher Control */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                TIMELINE REGIME //
              </span>
              <EraSwitch
                currentEra={selectedEra}
                onEraChange={(era) => setSelectedEra(era)}
              />
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#dossiers"
                className="flex items-center gap-2 px-8 py-4 rounded-2xl font-mono text-xs font-black uppercase tracking-wider text-black transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-xl"
                style={{
                  backgroundColor: primaryColor,
                  boxShadow: `0 0 30px ${primaryColor}66`,
                }}
              >
                <span>EXPLORE CHARACTER DOSSIERS</span>
                <ArrowDown className="w-4 h-4 text-black" />
              </a>

              <Link
                href="/doomsday"
                className="flex items-center gap-2 px-8 py-4 rounded-2xl font-mono text-xs font-bold uppercase tracking-wider text-white border border-[#00FF66]/40 hover:border-[#00FF66] hover:bg-[#00FF66]/10 transition-all duration-300 backdrop-blur-md"
              >
                <Flame className="w-4 h-4 text-[#00FF66]" />
                <span>INCURSION CENTERPIECE</span>
              </Link>
            </div>

            {/* Hero Live Telemetry Ticker */}
            <div className="mt-16 w-full pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left font-mono text-xs">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-gray-500 text-[10px] block">TIMELINE ANCHOR</span>
                <span className="text-white font-bold">EARTH-616</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-gray-500 text-[10px] block">REALITY STABILITY</span>
                <span className={isDoom ? 'text-red-400 font-bold' : 'text-[#00F0FF] font-bold'}>
                  {isDoom ? '14.2% CRITICAL' : '99.8% SECURED'}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-gray-500 text-[10px] block">PRIMARY PROTOCOL</span>
                <span className="text-gray-200 font-bold">AVENGERS / DOOM</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-gray-500 text-[10px] block">AUDIO TELEMETRY</span>
                <span className="text-[#00FF66] font-bold">5 CHANNELS FLAC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual-Era Intelligence Banner */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Era 1: Golden Era */}
          <div className="glass-panel-cyan p-8 rounded-3xl relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <PillBadge variant="cyan" pulse={false}>
                PHASE 1 - 3 CLIMAX
              </PillBadge>
              <span className="text-xs font-mono text-[#00F0FF]">EARTH-616</span>
            </div>
            <h2 className="text-2xl font-black text-white">THE GOLDEN ERA</h2>
            <p className="text-sm text-gray-300 mt-2 font-sans leading-relaxed">
              Clean Stark Industries glassmorphic HUD engineered with Arc Cyan (#00F0FF) and Titanium Gold (#FFB800). Featuring tactical audio telemetry from Tony Stark & J.A.R.V.I.S., Thor, Doctor Strange, and Steve Rogers.
            </p>
            <div className="mt-6 flex items-center gap-3 text-xs font-mono text-[#00F0FF]">
              <span>4 STRATEGIC ALLIES</span>
              <span>&bull;</span>
              <span>EARTH DEFENSE READY</span>
            </div>
          </div>

          {/* Era 2: Doomsday Shift */}
          <div className="glass-panel-green p-8 rounded-3xl relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <PillBadge variant="green" pulse={true}>
                PHASE 6 MULTIVERSE INVASION
              </PillBadge>
              <span className="text-xs font-mono text-[#00FF66]">LATVERIA APEX</span>
            </div>
            <h2 className="text-2xl font-black text-white">THE DOOMSDAY SHIFT</h2>
            <p className="text-sm text-gray-300 mt-2 font-sans leading-relaxed">
              High-impact green cosmic energy theme (#00FF66 Latverian Sorcery & Dark Obsidian) centering around Victor von Doom as the ultimate multiversal threat, reshaping fractured timelines beneath his iron fist.
            </p>
            <div className="mt-6 flex items-center gap-3 text-xs font-mono text-[#00FF66]">
              <span>OMEGA PLUS THREAT</span>
              <span>&bull;</span>
              <span>COLLIDING UNIVERSES</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dossiers Grid Section */}
      <section id="dossiers" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <PillBadge variant={isDoom ? 'green' : 'cyan'}>
                TACTICAL INTELLIGENCE ARCHIVE
              </PillBadge>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              CHARACTER <span style={{ color: primaryColor }}>DOSSIERS</span>
            </h2>
            <p className="text-sm text-gray-400 mt-2 max-w-xl">
              Declassified files with 16:9 widescreen landscape imagery, audio voice transcripts, live telemetry readouts, and combat statistics.
            </p>
          </div>

          <div className="text-xs font-mono text-gray-500">
            TOTAL DOSSIERS // 5 ENCRYPTED PROFILES
          </div>
        </div>

        {/* 2-Column Responsive Dossier Grid with 16:9 Landscape Aspect Ratio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </section>

      {/* Flagship Centerpiece Callout for Doom if in Golden Era view */}
      {selectedEra === 'golden' && (
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="relative rounded-3xl overflow-hidden glass-panel-green border border-[#00FF66]/40 p-8 sm:p-12 bg-gradient-to-r from-[#06140E] to-[#0A0D14]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <PillBadge variant="green" pulse={true}>
                  INCURSION WARNING DECLASSIFIED
                </PillBadge>
                <h3 className="text-3xl sm:text-4xl font-black text-white uppercase">
                  THE MULTIVERSE IS CRACKING. BOW BEFORE <span className="text-[#00FF66]">DOOM</span>.
                </h3>
                <p className="text-sm sm:text-base text-gray-300 max-w-2xl">
                  Step into the Latverian Sovereign Hub to hear Victor von Doom’s supreme decree and inspect the collapsing timeline calculations.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Link
                  href="/doomsday"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#00FF66] text-black font-bold font-mono text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-[0_0_25px_rgba(0,255,102,0.5)] cursor-pointer"
                >
                  <span>ENTER DOOMSDAY SECTOR</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

