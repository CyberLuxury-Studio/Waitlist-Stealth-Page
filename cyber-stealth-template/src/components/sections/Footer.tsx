import React from 'react';
import { Terminal, Server } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0e0e10] dark:bg-[#0e0e10] full-width bottom-0 border-t-4 border-[#00f3ff]/10 w-full py-12 px-6 flex flex-col md:flex-row justify-between items-start gap-8 max-w-[1440px] mx-auto mt-auto">
      <div className="flex flex-col gap-4">
        <div className="text-lg font-bold text-[#00f3ff] font-headline uppercase">
          TERMINAL_CONSTRUCT
        </div>
        <div className="font-body text-label-md tracking-[0.1em] uppercase text-[#b9cacb] text-xs">
          © {new Date().getFullYear()} TERMINAL_CONSTRUCT. ALL_RIGHTS_RESERVED. [v.2.0.4]
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-8">
        <nav className="flex flex-col gap-2">
          <a className="font-body text-label-md tracking-[0.1em] uppercase text-[#b9cacb] hover:text-[#bd00ff] hover:translate-x-1 transition-all text-xs" href="#">SECURITY_POLICY</a>
          <a className="font-body text-label-md tracking-[0.1em] uppercase text-[#b9cacb] hover:text-[#bd00ff] hover:translate-x-1 transition-all text-xs" href="#">ENCRYPTION_STANDARDS</a>
          <a className="font-body text-label-md tracking-[0.1em] uppercase text-[#b9cacb] hover:text-[#bd00ff] hover:translate-x-1 transition-all text-xs" href="#">TERMS_OF_SERVICE</a>
          <a className="font-body text-label-md tracking-[0.1em] uppercase text-[#b9cacb] hover:text-[#bd00ff] hover:translate-x-1 transition-all text-xs" href="#">DATA_PURGE</a>
        </nav>
        <div className="flex gap-4">
          <Terminal className="text-[#b9cacb] hover:text-[#00f3ff] cursor-pointer transition-colors w-6 h-6" />
          <Server className="text-[#b9cacb] hover:text-[#00f3ff] cursor-pointer transition-colors w-6 h-6" />
        </div>
      </div>
    </footer>
  );
}
