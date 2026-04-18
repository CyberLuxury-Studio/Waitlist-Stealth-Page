import React from 'react';
import { Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-[#131315] dark:bg-[#131315] docked full-width top-0 z-50 border-b-0 flat no-shadows flex justify-between items-center w-full px-6 py-4 max-w-[1440px] mx-auto sticky">
      <div className="text-xl font-bold tracking-[0.2em] text-[#00f3ff] font-headline uppercase">
        TERMINAL_CONSTRUCT
      </div>
      <nav className="hidden md:flex gap-8 items-center">
        <a className="font-headline uppercase tracking-tighter text-[#b9cacb] hover:text-[#00f3ff] hover:skew-x-[-2deg] transition-all text-sm" href="#">PROTOCOL</a>
        <a className="font-headline uppercase tracking-tighter text-[#b9cacb] hover:text-[#00f3ff] hover:skew-x-[-2deg] transition-all text-sm" href="#">MODULES</a>
        <a className="font-headline uppercase tracking-tighter text-[#00f3ff] border-b-2 border-[#00f3ff] pb-1 hover:skew-x-[-2deg] transition-all text-sm" href="#">UPLINK</a>
        <a className="font-headline uppercase tracking-tighter text-[#b9cacb] hover:text-[#00f3ff] hover:skew-x-[-2deg] transition-all text-sm" href="#">ARCHIVE</a>
      </nav>
      <button className="hidden md:block bg-primary-container text-on-primary-fixed px-6 py-2 font-headline uppercase tracking-widest text-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform shadow-[4px_4px_0px_0px_#ff003c]">
        INITIALIZE_CORE
      </button>
      <button className="md:hidden text-primary">
        <Menu />
      </button>
    </header>
  );
}
