import React from 'react';
import { Menu } from 'lucide-react';

export function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl border-b border-[#3a494b]/10 flex justify-between items-center px-6 md:px-12 py-6">
      <div className="text-xl md:text-2xl font-bold text-[#00f3ff] tracking-widest font-headline uppercase">
        STEALTH_BETA
      </div>
      <div className="hidden md:flex gap-8 font-headline tracking-tighter uppercase text-[#b9cacb] font-medium">
        <a className="hover:text-[#00f3ff] hover:glow-text transition-all duration-300" href="#">TERMINAL</a>
        <a className="hover:text-[#00f3ff] hover:glow-text transition-all duration-300" href="#">PROTOCOL</a>
        <a className="hover:text-[#00f3ff] hover:glow-text transition-all duration-300" href="#">NETWORK</a>
        <a className="hover:text-[#00f3ff] hover:glow-text transition-all duration-300" href="#">WHITEPAPER</a>
      </div>
      <div className="hidden sm:flex gap-4">
        <button className="ghost-border px-6 py-2 rounded-sm font-label text-on-surface hover:bg-surface-container transition-colors">
          LOG_IN
        </button>
        <button className="bg-[#00f3ff] text-[#002022] px-6 py-2 rounded-sm font-label glow-primary hover:bg-[#6ff6ff] transition-colors">
          ACCESS_CORE
        </button>
      </div>
      <button className="sm:hidden text-[#00f3ff]">
        <Menu />
      </button>
    </nav>
  );
}
