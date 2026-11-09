'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Play,
  Film,
  ShieldAlert,
  ArrowUp,
  Flame,
  Radio,
  ExternalLink,
} from 'lucide-react';
import { MCU_VIDEOS } from '@/config/videos';
import { VideoItem } from '@/types/avengers';
import { VideoModal } from '@/components/video/VideoModal';
import { PillBadge } from '@/components/ui/PillBadge';

export function Footer() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="relative mt-24 border-t border-white/10 bg-[#030407] overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-gradient-to-b from-[#00F0FF]/5 via-transparent to-transparent pointer-events-none blur-3xl" />

        {/* Video Vault Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <PillBadge variant="cyan" pulse={true}>
                  RESTRICTED CINEMATIC ARCHIVE
                </PillBadge>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white flex items-center gap-3">
                <Film className="w-7 h-7 text-[#00F0FF]" />
                MCU VIDEO VAULT
              </h2>
              <p className="text-sm text-gray-400 mt-1 max-w-xl">
                High-definition tactical transmissions and pivotal timeline encounters recorded across Earth-616 and the multiverse.
              </p>
            </div>
            <div className="text-xs font-mono text-gray-500">
              STREAMING DIRECT // 5 ENCRYPTED SATELLITE CHANNELS
            </div>
          </div>

          {/* Video Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {MCU_VIDEOS.map((video) => {
              const isDoom = video.era === 'doomsday';
              const accent = isDoom ? '#00FF66' : '#00F0FF';

              return (
                <div
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  className="group relative rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-[#0A0D14]/90 flex flex-col"
                  style={{
                    boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
                  }}
                >
                  {/* YouTube Thumbnail with 16:9 Aspect Ratio */}
                  <div className="relative aspect-[16/9] w-full bg-black overflow-hidden">
                    <Image
                      src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                      alt={video.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-black/30 to-black/30" />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 group-hover:scale-110 shadow-lg"
                        style={{
                          backgroundColor: `${accent}E6`,
                          boxShadow: `0 0 20px ${accent}66`,
                        }}
                      >
                        <Play className="w-5 h-5 text-black fill-black ml-0.5" />
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-black/80 text-white border border-white/10 backdrop-blur-md">
                        {video.duration}
                      </span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span
                        className="text-[9px] font-mono uppercase px-2 py-0.5 rounded-full border backdrop-blur-md font-bold"
                        style={{
                          color: accent,
                          borderColor: `${accent}50`,
                          backgroundColor: 'rgba(0,0,0,0.7)',
                        }}
                      >
                        {video.badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block mb-1">
                        {video.category}
                      </span>
                      <h3 className="text-base font-bold text-white group-hover:text-gray-200 transition-colors line-clamp-1">
                        {video.title}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                        {video.subtitle}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-400">
                      <span className="flex items-center gap-1 group-hover:text-white transition-colors">
                        <Play className="w-3 h-3" style={{ color: accent }} />
                        PLAY BROADCAST
                      </span>
                      <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Lower Footer Branding & Links */}
          <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] animate-pulse" />
                <span className="font-mono text-xs uppercase font-bold tracking-widest text-white">
                  THE DOOMSDAY INITIATIVE
                </span>
                <span className="text-gray-500 font-mono text-xs">// PHASE 6 ARCHIVE</span>
              </div>
              <p className="text-xs text-gray-500 mt-1 font-mono">
                MARVEL STUDIOS CINEMATIC UNIVERSE TACTICAL INTERFACE &copy; {new Date().getFullYear()}
              </p>
            </div>

            {/* Quick Dossier Jumps */}
            <div className="flex flex-wrap justify-center gap-4 text-xs font-mono text-gray-400">
              <Link href="/tony-stark" className="hover:text-[#00F0FF] transition-colors">
                TONY STARK
              </Link>
              <span className="text-gray-700">&bull;</span>
              <Link href="/thor" className="hover:text-[#FFB800] transition-colors">
                THOR
              </Link>
              <span className="text-gray-700">&bull;</span>
              <Link href="/dr-strange" className="hover:text-[#FF7700] transition-colors">
                DR. STRANGE
              </Link>
              <span className="text-gray-700">&bull;</span>
              <Link href="/cap" className="hover:text-[#38BDF8] transition-colors">
                CAPTAIN AMERICA
              </Link>
              <span className="text-gray-700">&bull;</span>
              <Link href="/doomsday" className="hover:text-[#00FF66] transition-colors font-bold">
                DOOMSDAY
              </Link>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-gray-300 hover:text-white transition-all cursor-pointer"
            >
              <span>RETURN TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>

      {/* Embedded Lightbox Video Modal */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </>
  );
}

