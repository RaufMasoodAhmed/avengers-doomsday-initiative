'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, Shield, Flame, Cpu, Zap, Compass, Film, ArrowRight } from 'lucide-react';
import { CHARACTERS } from '@/config/characters';
import { MCU_VIDEOS } from '@/config/videos';

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredCharacters = CHARACTERS.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase()) ||
    c.alias.toLowerCase().includes(query.toLowerCase()) ||
    c.role.toLowerCase().includes(query.toLowerCase())
  );

  const filteredVideos = MCU_VIDEOS.filter((v) =>
    v.title.toLowerCase().includes(query.toLowerCase()) ||
    v.category.toLowerCase().includes(query.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-full max-w-2xl rounded-2xl glass-panel border border-white/20 bg-[#070A10]/95 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search characters, telemetry dossiers, or videos... (ESC to close)"
            className="w-full bg-transparent text-sm font-mono text-white placeholder-gray-500 focus:outline-none"
            autoFocus
          />
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-lg text-gray-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-4">
          {/* Character Dossiers */}
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 block mb-2">
              CHARACTER DOSSIERS
            </span>
            <div className="space-y-1.5">
              {filteredCharacters.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    router.push(c.slug);
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl text-left hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: c.accentColor }}
                    />
                    <div>
                      <span className="text-xs font-bold text-white block">
                        {c.name}
                      </span>
                      <span className="text-[10px] font-mono text-gray-400">
                        {c.alias} &bull; {c.status}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-colors" />
                </button>
              ))}
            </div>
          </div>

          {/* Videos */}
          {filteredVideos.length > 0 && (
            <div className="pt-2 border-t border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 block mb-2">
                MCU VIDEO VAULT
              </span>
              <div className="space-y-1.5">
                {filteredVideos.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => {
                      router.push('/#vault');
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl text-left hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <Film className="w-3.5 h-3.5 text-[#00F0FF]" />
                      <div>
                        <span className="text-xs font-bold text-white block">
                          {v.title}
                        </span>
                        <span className="text-[10px] font-mono text-gray-400">
                          {v.category} &bull; {v.duration}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer shortcuts hint */}
        <div className="px-4 py-2.5 bg-black/50 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-500">
          <span>NAVIGATION PROTOCOL ACTIVE</span>
          <span>PRESS ESC TO DISMISS</span>
        </div>
      </div>
    </div>
  );
}

