'use client';

import React, { useEffect } from 'react';
import { X, ExternalLink, PlayCircle } from 'lucide-react';
import { VideoItem } from '@/types/avengers';

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export function VideoModal({ video, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (video) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [video, onClose]);

  if (!video) return null;

  const isDoom = video.era === 'doomsday';
  const primaryColor = isDoom ? '#00FF66' : '#00F0FF';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl rounded-3xl overflow-hidden bg-[#0A0D14] border border-white/15 shadow-2xl transition-all"
        style={{
          boxShadow: `0 0 50px -10px ${primaryColor}40`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0E131F]/90">
          <div className="flex items-center space-x-3">
            <span
              className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full border"
              style={{
                color: primaryColor,
                borderColor: `${primaryColor}40`,
                backgroundColor: `${primaryColor}15`,
              }}
            >
              {video.badge}
            </span>
            <span className="text-xs font-mono text-gray-400">
              DURATION // {video.duration}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              title="Open on YouTube"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title="Close modal"
              type="button"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 16:9 YouTube Video Embed */}
        <div className="relative w-full aspect-[16/9] bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>

        {/* Modal Details Footer */}
        <div className="p-6 bg-[#0A0D14]/95 border-t border-white/10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <PlayCircle className="w-5 h-5" style={{ color: primaryColor }} />
                {video.title}
              </h3>
              <p className="text-sm text-gray-400 mt-1">{video.subtitle}</p>
            </div>
            <div className="hidden sm:block text-right">
              <span className="text-xs font-mono text-gray-400 block">
                CLASSIFICATION
              </span>
              <span className="text-xs font-semibold text-gray-200">
                {video.category}
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-300 mt-4 leading-relaxed font-sans bg-white/5 p-4 rounded-xl border border-white/5">
            {video.description}
          </p>
        </div>
      </div>
    </div>
  );
}

