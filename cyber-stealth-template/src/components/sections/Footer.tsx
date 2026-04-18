import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[#0e0e0e] w-full border-t border-[#3a494b]/10 flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-12 mx-auto relative z-10">
      <div className="text-[#00f3ff] font-headline font-black mb-6 md:mb-0">STEALTH_BETA</div>
      <div className="flex flex-wrap gap-4 md:gap-8 justify-center font-body text-[10px] tracking-[0.2em] uppercase text-[#b9cacb]/50">
        <a className="hover:text-[#ff003c] transition-colors duration-500 hover:tracking-widest" href="#">PRIVACY_PROTOCOL</a>
        <a className="hover:text-[#ff003c] transition-colors duration-500 hover:tracking-widest" href="#">TERMS_OF_SERVICE</a>
        <a className="hover:text-[#ff003c] transition-colors duration-500 hover:tracking-widest" href="#">SYSTEM_STATUS</a>
        <a className="hover:text-[#ff003c] transition-colors duration-500 hover:tracking-widest" href="#">ENCRYPTION_DOCS</a>
      </div>
      <div className="font-body text-[10px] tracking-[0.2em] uppercase text-[#b9cacb]/50 mt-6 md:mt-0">
        © {new Date().getFullYear()} BINARY VOGUE SYSTEMS. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
