"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Fingerprint, ScanEye, LockKeyhole } from "lucide-react";
import { ScrollReveal } from "../animations/ScrollReveal";

export function SecurityVerificationSection() {
  const [scanState, setScanState] = useState(0); // 0: Idle, 1: Scanning, 2: Verified
  
  useEffect(() => {
    if (scanState === 1) {
      const timer = setTimeout(() => {
        setScanState(2);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [scanState]);

  return (
    <section className="py-32 px-6 max-w-5xl mx-auto border-t border-white/5 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <ScrollReveal>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/30 border border-red-500/20 text-red-500 text-xs font-mono uppercase tracking-widest mb-6">
            <ShieldAlert className="w-3 h-3" /> Restricted Access Protocol
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4 font-mono uppercase tracking-tighter text-white">
            Identity Verification Required
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-sans">
            Our beta program is strictly limited. Initiate biometrics to check if your cryptographic hash is on the whitelist.
          </p>
        </div>
      </ScrollReveal>

      <div className="flex justify-center">
        <div className="w-full max-w-md bg-black border border-white/10 p-8 rounded-2xl relative overflow-hidden group">
          {/* Animated scanning laser */}
          {scanState === 1 && (
            <motion.div 
              initial={{ top: "0%" }}
              animate={{ top: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[2px] bg-red-500 shadow-[0_0_20px_#ef4444] z-20"
            />
          )}

          <div className="flex flex-col items-center justify-center text-center z-10 relative">
            <div 
              className={`w-32 h-32 mb-8 flex items-center justify-center rounded-full border-2 transition-all duration-500 ${
                scanState === 0 ? 'border-white/10 text-gray-500 hover:border-red-500/50 hover:text-red-400 cursor-pointer' : 
                scanState === 1 ? 'border-red-500 text-red-500 shadow-[0_0_30px_rgba(239,68,68,0.2)]' : 
                'border-emerald-500 text-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.2)]'
              }`}
              onClick={() => scanState === 0 && setScanState(1)}
            >
              {scanState === 0 && <Fingerprint className="w-16 h-16" />}
              {scanState === 1 && <ScanEye className="w-16 h-16 animate-pulse" />}
              {scanState === 2 && <LockKeyhole className="w-16 h-16" />}
            </div>
            
            <h3 className={`font-mono text-xl font-bold uppercase tracking-wider mb-2 ${
              scanState === 2 ? 'text-emerald-500' : 'text-white'
            }`}>
              {scanState === 0 ? 'Awaiting Input' : 
               scanState === 1 ? 'Analyzing Signature...' : 
               'Access Granted'}
            </h3>
            
            <p className="text-xs font-mono text-gray-600 uppercase tracking-widest h-8">
              {scanState === 0 ? 'Click fingerprint to initiate' : 
               scanState === 1 ? 'Matching against decentralized ledger' : 
               'Proceed to terminal below'}
            </p>

            {scanState === 2 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 w-full p-4 bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 text-sm font-mono rounded"
              >
                Hash Match: 0x8fB9...3c2A
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
