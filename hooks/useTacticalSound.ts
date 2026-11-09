'use client';

import { useCallback } from 'react';

export function useTacticalSound() {
  const playTone = useCallback((freq: number, type: OscillatorType, duration: number, gainVal: number = 0.05) => {
    if (typeof window === 'undefined') return;
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Audio context restricted or unavailable
    }
  }, []);

  const playClick = useCallback(() => {
    playTone(1200, 'sine', 0.06, 0.03);
  }, [playTone]);

  const playHover = useCallback(() => {
    playTone(850, 'triangle', 0.04, 0.015);
  }, [playTone]);

  const playAlert = useCallback(() => {
    playTone(440, 'sawtooth', 0.25, 0.04);
  }, [playTone]);

  const playStarkChime = useCallback(() => {
    playTone(1800, 'sine', 0.12, 0.03);
  }, [playTone]);

  return { playClick, playHover, playAlert, playStarkChime };
}

