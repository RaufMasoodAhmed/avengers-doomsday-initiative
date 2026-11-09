'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Shield, Zap, Sparkles } from 'lucide-react';
import { CharacterDossier } from '@/types/avengers';

interface CharacterCardProps {
  character: CharacterDossier;
}

export function CharacterCard({ character }: CharacterCardProps) {
  const isDoom = character.era === 'doomsday';
  const primaryGlow = isDoom ? 'rgba(0, 255, 102, 0.4)' : 'rgba(0, 240, 255, 0.35)';
  const borderHoverClass = isDoom
    ? 'hover:border-[#00FF66]/50 hover:shadow-[0_0_35px_rgba(0,255,102,0.25)]'
    : 'hover:border-[#00F0FF]/50 hover:shadow-[0_0_35px_rgba(0,240,255,0.2)]';

  return (
    <div
      className={`group relative rounded-3xl overflow-hidden glass-panel border border-white/10 transition-all duration-500 hover:-translate-y-1.5 flex flex-col ${borderHoverClass}`}
    >
      {/* 16:9 Widescreen Image Container with Object-Cover */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-black/60">
        <Image
          src={character.image}
          alt={character.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          priority={character.id === 'tony-stark' || character.id === 'doomsday'}
        />

        {/* Ambient Dark Gradient Overlays for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D14] via-transparent to-black/30 pointer-events-none" />

        {/* Floating Top Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span
            className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border backdrop-blur-md font-semibold"
            style={{
              color: character.accentColor,
              borderColor: `${character.accentColor}40`,
              backgroundColor: 'rgba(3, 4, 7, 0.75)',
            }}
          >
            {character.badge}
          </span>
        </div>

        {/* Threat / Clearance Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-full bg-black/70 text-gray-300 border border-white/10 backdrop-blur-md">
            {character.status}
          </span>
        </div>

        {/* Hover Action Indicator */}
        <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 text-black font-bold"
            style={{ backgroundColor: character.accentColor }}
          >
            <ArrowUpRight className="w-5 h-5 text-black" />
          </div>
        </div>
      </div>

      {/* Card Content Panel */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-[#0B0D14]/90 relative">
        {/* Decorative Sci-Fi Accent Line */}
        <div
          className="absolute top-0 left-6 right-6 h-[1px] opacity-25 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${character.accentColor}, transparent)`,
          }}
        />

        <div>
          {/* Alias & Name */}
          <div className="flex items-center gap-2 mb-1.5">
            <span
              className="text-xs font-mono font-bold uppercase tracking-widest"
              style={{ color: character.accentColor }}
            >
              {character.alias}
            </span>
          </div>
          <h3 className="text-2xl font-black tracking-tight text-white group-hover:text-gray-100 transition-colors">
            {character.name}
          </h3>

          <p className="text-xs text-gray-400 font-mono mt-1 mb-4 line-clamp-1">
            {character.role}
          </p>

          <p className="text-sm text-gray-300 leading-relaxed font-sans line-clamp-2 mb-6">
            {character.description}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 gap-3 mb-6 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
            {character.stats.slice(0, 2).map((st, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-[10px] font-mono text-gray-400 uppercase truncate">
                  {st.label}
                </span>
                <span className="text-xs font-bold text-gray-100 mt-0.5 truncate">
                  {st.value}
                </span>
                <div className="w-full bg-white/10 h-1 rounded-full mt-1.5 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${st.percentage}%`,
                      backgroundColor: character.accentColor,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Action Footer */}
        <div className="pt-2 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
            {isDoom ? (
              <Zap className="w-3.5 h-3.5 text-[#00FF66]" />
            ) : (
              <Shield className="w-3.5 h-3.5 text-[#00F0FF]" />
            )}
            <span className="truncate">{character.signatureItem}</span>
          </div>

          <Link
            href={character.slug}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase px-4 py-2 rounded-xl border border-white/10 hover:border-white/30 text-white transition-all duration-300 bg-white/5 hover:bg-white/10"
          >
            <span>OPEN DOSSIER</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

