'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { AudioPlaybackState } from '@/types/avengers';

interface UseVoiceAudioReturn extends AudioPlaybackState {
  play: () => Promise<void>;
  pause: () => void;
  toggle: () => void;
  seek: (percentage: number) => void;
  setVolume: (val: number) => void;
  toggleMute: () => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

export function useVoiceAudio(src: string): UseVoiceAudioReturn {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [volume, setVolumeState] = useState<number>(1);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!src) return;

    const audio = new Audio();
    audio.src = src;
    audio.preload = 'auto';
    audio.volume = isMuted ? 0 : volume;
    audioRef.current = audio;

    const onLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration) && isFinite(audio.duration)) {
        setDuration(audio.duration);
      }
      setError(null);
    };

    const onCanPlay = () => {
      if (audio.duration && !isNaN(audio.duration) && isFinite(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const onTimeUpdate = () => {
      if (audio.duration && !isNaN(audio.duration) && audio.duration > 0) {
        setCurrentTime(audio.currentTime);
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const onPlay = () => {
      setIsPlaying(true);
      setError(null);
    };

    const onPause = () => {
      setIsPlaying(false);
    };

    const onEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
      }
    };

    const onError = (e: Event) => {
      console.warn(`[VoicePlayer] Audio load error for "${src}":`, e);
      setError('Unable to load audio resource');
      setIsPlaying(false);
    };

    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('canplay', onCanPlay);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('error', onError);

    // Explicitly trigger network load
    try {
      audio.load();
    } catch {
      // Ignored
    }

    return () => {
      audio.pause();
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('canplay', onCanPlay);
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('error', onError);
      audio.src = '';
      audioRef.current = null;
    };
  }, [src]);

  const play = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      // If audio already reached the end, reset to beginning
      if (audio.ended || (audio.duration && audio.currentTime >= audio.duration - 0.1)) {
        audio.currentTime = 0;
      }
      audio.volume = isMuted ? 0 : volume;
      await audio.play();
      setIsPlaying(true);
      setError(null);
    } catch (err) {
      console.error(`[VoicePlayer] Play failed for ${src}:`, err);
      setIsPlaying(false);
      setError('Audio playback error');
    }
  }, [src, isMuted, volume]);

  const pause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
  }, []);

  const toggle = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      void play();
    }
  }, [isPlaying, pause, play]);

  const seek = useCallback((percentage: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    const dur = audio.duration || duration || 0;
    if (dur > 0) {
      const targetTime = (percentage / 100) * dur;
      audio.currentTime = targetTime;
      setCurrentTime(targetTime);
      setProgress(percentage);
    }
  }, [duration]);

  const setVolume = useCallback((val: number) => {
    const clamped = Math.max(0, Math.min(1, val));
    setVolumeState(clamped);
    if (audioRef.current) {
      audioRef.current.volume = clamped;
    }
    setIsMuted(clamped === 0);
  }, []);

  const toggleMute = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    audio.muted = nextMuted;
    if (!nextMuted && audio.volume === 0) {
      audio.volume = 1;
      setVolumeState(1);
    }
  }, [isMuted]);

  return {
    isPlaying,
    progress,
    currentTime,
    duration,
    volume,
    isMuted,
    error,
    play,
    pause,
    toggle,
    seek,
    setVolume,
    toggleMute,
    audioRef,
  };
}
