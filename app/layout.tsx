import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { CommandPalette } from '@/components/ui/CommandPalette';

export const metadata: Metadata = {
  title: 'THE DOOMSDAY INITIATIVE | Marvel Cinematic Universe Interactive Platform',
  description:
    'High-fidelity interactive MCU platform transitioning between the Golden Era Stark Industries HUD and the Latverian Doomsday Shift of Victor von Doom.',
  keywords: [
    'Avengers',
    'Doomsday',
    'Iron Man',
    'Thor',
    'Doctor Strange',
    'Captain America',
    'Victor von Doom',
    'Marvel Cinematic Universe',
  ],
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-era="golden">
      <head>
        {/* Satoshi Font Link */}
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap"
        />
      </head>
      <body className="bg-[#030407] text-[#F3F4F6] min-h-screen selection:bg-[#00F0FF] selection:text-black antialiased">
        <SmoothScroll>
          <div className="relative min-h-screen flex flex-col justify-between">
            <Navbar />
            <main className="flex-grow pt-24">{children}</main>
            <Footer />
            <CommandPalette />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}