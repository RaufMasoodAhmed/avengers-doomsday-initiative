'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Shield,
  Flame,
  Radio,
  Menu,
  X,
  Compass,
  Cpu,
  Zap,
  Globe2,
} from 'lucide-react';
import { EraSwitch } from '@/components/ui/EraSwitch';
import { PillBadge } from '@/components/ui/PillBadge';
import { EraMode } from '@/types/avengers';

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [era, setEra] = useState<EraMode>('golden');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Automatically match era based on path
    if (pathname.includes('/doomsday')) {
      setEra('doomsday');
      document.documentElement.setAttribute('data-era', 'doomsday');
    } else {
      setEra('golden');
      document.documentElement.setAttribute('data-era', 'golden');
    }
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'OVERVIEW', href: '/', icon: Globe2 },
    { name: 'TONY STARK', href: '/tony-stark', icon: Cpu, badge: 'STARK' },
    { name: 'THOR', href: '/thor', icon: Zap, badge: 'ASGARD' },
    { name: 'DR. STRANGE', href: '/dr-strange', icon: Compass, badge: 'SANCTUM' },
    { name: 'CAPTAIN AMERICA', href: '/cap', icon: Shield, badge: 'STRAT-OPS' },
    { name: 'DOOMSDAY', href: '/doomsday', icon: Flame, badge: 'OMEGA', highlight: true },
  ];

  const isDoom = era === 'doomsday';
  const primaryColor = isDoom ? '#00FF66' : '#00F0FF';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#030407]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105"
              style={{
                borderColor: `${primaryColor}40`,
                backgroundColor: `${primaryColor}15`,
                boxShadow: `0 0 20px ${primaryColor}30`,
              }}
            >
              {isDoom ? (
                <Flame className="w-5 h-5 text-[#00FF66]" />
              ) : (
                <Shield className="w-5 h-5 text-[#00F0FF]" />
              )}
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-black tracking-widest uppercase font-mono text-white flex items-center gap-1.5">
                DOOMSDAY <span style={{ color: primaryColor }}>INITIATIVE</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-gray-400">
                EARTH-616 // TACTICAL ARCHIVE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 p-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider font-semibold uppercase transition-all duration-300 flex items-center gap-1.5 ${
                    isActive
                      ? isDoom
                        ? 'bg-[#00FF66]/20 text-[#00FF66] border border-[#00FF66]/40 shadow-[0_0_15px_rgba(0,255,102,0.3)]'
                        : 'bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/40 shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                      : link.highlight
                      ? 'text-[#00FF66] hover:bg-[#00FF66]/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <link.icon className="w-3.5 h-3.5" />
                  <span>{link.name}</span>
                  {link.badge && (
                    <span
                      className={`text-[9px] px-1.5 py-0.2 rounded font-mono ${
                        link.highlight
                          ? 'bg-[#00FF66]/20 text-[#00FF66]'
                          : 'bg-white/10 text-gray-300'
                      }`}
                    >
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Utility Controls */}
          <div className="hidden sm:flex items-center space-x-3">
            <EraSwitch currentEra={era} onEraChange={(newEra) => setEra(newEra)} />
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-gray-300 hover:text-white bg-white/5 border border-white/10 cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 mx-4 p-5 rounded-2xl glass-panel border border-white/15 bg-[#070A10]/95 backdrop-blur-2xl shadow-2xl">
          <div className="mb-4 pb-3 border-b border-white/10 flex justify-between items-center">
            <span className="text-xs font-mono text-gray-400">SELECT DOSSIER SECTOR</span>
            <EraSwitch currentEra={era} onEraChange={(newEra) => setEra(newEra)} />
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all ${
                    isActive
                      ? isDoom
                        ? 'bg-[#00FF66]/20 text-[#00FF66] border border-[#00FF66]/30'
                        : 'bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/30'
                      : 'text-gray-300 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <link.icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </div>
                  {link.badge && (
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-gray-300">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

