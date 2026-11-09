'use client';

import React from 'react';
import { Play, Pause, Volume2, VolumeX, Radio, Sparkles } from 'lucide-react';
import { useVoiceAudio } from '@/hooks/useVoiceAudio';
import { EraMode } from '@/types/avengers';

interface VoicePlayerProps {
  src: string;
  title: string;
  speaker: string;
  quoteSnippet?: string;
  era?: EraMode;
  accentColor?: string;
  className?: string;
}

export function VoicePlayer({
  src,
  title,
  speaker,
  quoteSnippet,
  era = 'golden',
  accentColor,
  className = '',
}: VoicePlayerProps) {
  const {
    isPlaying,
    progress,
    currentTime,
    duration,
    isMuted,
    toggle,
    seek,
    toggleMute,
  } = useVoiceAudio(src);

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const isDoom = era === 'doomsday';
  const primaryColor = accentColor || (isDoom ? '#00FF66' : '#00F0FF');
  const barCount = 15;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-500 border ${isDoom
        ? 'glass-panel-green bg-[#06140E]/80 border-[#00FF66]/30'
        : 'glass-panel-cyan bg-[#08101A]/80 border-[#00F0FF]/30'
        } ${className}`}
    >
      {/* Decorative HUD Corner Accents */}
      <div
        className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 pointer-events-none transition-colors"
        style={{ borderColor: primaryColor }}
      />
      <div
        className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 pointer-events-none transition-colors"
        style={{ borderColor: primaryColor }}
      />
      <div
        className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 pointer-events-none transition-colors"
        style={{ borderColor: primaryColor }}
      />
      <div
        className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 pointer-events-none transition-colors"
        style={{ borderColor: primaryColor }}
      />

      {/* Header Info */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2.5">
          <div
            className={`w-2.5 h-2.5 rounded-full ${isPlaying ? 'animate-ping' : 'opacity-60'
              }`}
            style={{ backgroundColor: primaryColor }}
          />
          <span className="text-xs font-mono uppercase tracking-widest text-gray-400">
            {isDoom ? 'LATVERIAN TELEMETRY LINK' : 'STARK TACTICAL AUDIO LINK'}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span
            className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/10 uppercase tracking-wider"
            style={{
              color: primaryColor,
              backgroundColor: `${primaryColor}15`,
            }}
          >
            {isPlaying ? 'TRANSMITTING' : 'STANDBY'}
          </span>
          <button
            onClick={toggleMute}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10"
            title={isMuted ? 'Unmute' : 'Mute'}
            type="button"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-red-400" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Title & Speaker */}
      <div className="mb-4">
        <h4 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
          <Radio className="w-4 h-4" style={{ color: primaryColor }} />
          {title}
        </h4>
        <p className="text-xs text-gray-400 font-mono mt-0.5">
          SOURCE FREQUENCY // <span className="text-gray-200">{speaker}</span>
        </p>
      </div>

      {/* Quote Snippet if present */}
      {quoteSnippet && (
        <div className="mb-5 p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-gray-300 italic font-sans flex items-start gap-2">
          <Sparkles className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: primaryColor }} />
          <span>&ldquo;{quoteSnippet}&rdquo;</span>
        </div>
      )}

      {/* 15-Bar Animated Dynamic Waveform Visualizer */}
      <div className="mb-5 bg-black/50 rounded-xl p-3 border border-white/5">
        <div className="flex items-end justify-between h-14 gap-1 px-1">
          {Array.from({ length: barCount }).map((_, index) => {
            const seed = (index * 7 + 13) % 10;
            const minHeight = 15;
            const dynamicScale = isPlaying ? 30 + seed * 7 : minHeight;
            const animDuration = 0.5 + ((index % 5) * 0.15);

            return (
              <div
                key={index}
                className="flex-1 rounded-t-sm transition-all duration-150"
                style={{
                  height: `${isPlaying ? dynamicScale : minHeight}%`,
                  backgroundColor: isPlaying
                    ? primaryColor
                    : 'rgba(255, 255, 255, 0.15)',
                  boxShadow: isPlaying
                    ? `0 0 10px ${primaryColor}`
                    : 'none',
                  animation: isPlaying
                    ? `eqBar ${animDuration}s ease-in-out infinite alternate`
                    : 'none',
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Interactive Seek Bar */}
      <div className="space-y-1.5 mb-5">
        <div
          className="relative h-2 bg-white/10 rounded-full cursor-pointer overflow-hidden group"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const pct = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
            seek(pct);
          }}
        >
          <div
            className="absolute top-0 left-0 h-full rounded-full transition-all duration-100"
            style={{
              width: `${progress}%`,
              backgroundColor: primaryColor,
              boxShadow: `0 0 12px ${primaryColor}`,
            }}
          />
        </div>
        <div className="flex justify-between text-[11px] font-mono text-gray-400">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Main Control Button */}
      <div className="flex items-center justify-between pt-1">
        <div className="text-[11px] font-mono text-gray-500">
          AUDIO STREAM // 48kHz FLAC MATRIX
        </div>

        <button
          onClick={toggle}
          type="button"
          className="relative flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg group cursor-pointer"
          style={{
            backgroundColor: primaryColor,
            boxShadow: `0 0 24px ${primaryColor}66`,
          }}
        >
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4 fill-black" />
              <span>PAUSE LINK</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-black ml-0.5" />
              <span>INITIALIZE AUDIO</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}