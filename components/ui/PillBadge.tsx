import React from 'react';

interface PillBadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'green' | 'gold' | 'purple' | 'default';
  pulse?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export function PillBadge({
  children,
  variant = 'cyan',
  pulse = true,
  className = '',
  icon,
}: PillBadgeProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'cyan':
        return {
          border: 'border-[#00F0FF]/30',
          bg: 'bg-[#00F0FF]/10',
          text: 'text-[#00F0FF]',
          glow: 'shadow-[0_0_15px_rgba(0,240,255,0.25)]',
          dot: 'bg-[#00F0FF]',
        };
      case 'green':
        return {
          border: 'border-[#00FF66]/35',
          bg: 'bg-[#00FF66]/10',
          text: 'text-[#00FF66]',
          glow: 'shadow-[0_0_15px_rgba(0,255,102,0.25)]',
          dot: 'bg-[#00FF66]',
        };
      case 'gold':
        return {
          border: 'border-[#FFB800]/30',
          bg: 'bg-[#FFB800]/10',
          text: 'text-[#FFB800]',
          glow: 'shadow-[0_0_15px_rgba(255,184,0,0.25)]',
          dot: 'bg-[#FFB800]',
        };
      case 'purple':
        return {
          border: 'border-purple-400/30',
          bg: 'bg-purple-500/10',
          text: 'text-purple-300',
          glow: 'shadow-[0_0_15px_rgba(168,85,247,0.25)]',
          dot: 'bg-purple-400',
        };
      default:
        return {
          border: 'border-white/15',
          bg: 'bg-white/5',
          text: 'text-gray-300',
          glow: '',
          dot: 'bg-gray-400',
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono tracking-wider uppercase backdrop-blur-md transition-all duration-300 ${styles.border} ${styles.bg} ${styles.text} ${styles.glow} ${className}`}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${styles.dot}`}
          />
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${styles.dot}`}
          />
        </span>
      )}
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </div>
  );
}

