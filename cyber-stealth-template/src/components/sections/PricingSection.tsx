"use client";

import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUpVariant } from '@/lib/motion';

export function PricingSection() {
  return (
    <section className="py-32 px-6 md:px-12 relative border-t border-[#3a494b]/10 bg-[#050505]">
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-16"
        >
          <span className="font-body text-xs text-[#00f3ff] uppercase tracking-[0.2em] mb-4 block">[ACCESS_TIERS]</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-tighter text-[#e5e2e1]">
            SELECT YOUR NODE
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          {/* Tier 1 */}
          <motion.div variants={fadeUpVariant} className="bg-[#131313] ghost-border p-8 rounded-lg h-full flex flex-col hover:-translate-y-2 transition-transform duration-300">
            <h3 className="font-headline text-lg font-bold uppercase tracking-wider text-[#b9cacb] mb-2">Hacker</h3>
            <div className="text-3xl font-headline font-bold text-[#e5e2e1] mb-6">FREE <span className="text-sm font-body text-[#849495] font-normal">/ NODE</span></div>
            <ul className="space-y-4 mb-8 font-body text-sm text-[#b9cacb] flex-grow">
              <li className="flex items-start gap-3"><Check className="text-[#849495] w-4 h-4 mt-0.5" /> Basic Routing</li>
              <li className="flex items-start gap-3"><Check className="text-[#849495] w-4 h-4 mt-0.5" /> Standard Encryption</li>
              <li className="flex items-start gap-3"><Check className="text-[#849495] w-4 h-4 mt-0.5" /> 1GB Data Cache</li>
            </ul>
            <button className="w-full bg-transparent border border-[#3a494b]/50 text-[#00f3ff] hover:border-[#00f3ff] transition-colors py-3 rounded-sm font-headline uppercase tracking-widest text-sm mt-auto">
              INITIALIZE
            </button>
          </motion.div>

          {/* Tier 2 (Highlighted) */}
          <motion.div variants={fadeUpVariant} className="gradient-border-cyber p-1 relative shadow-[0_0_40px_rgba(0,243,255,0.1)] z-10 transform md:scale-105 h-full flex flex-col hover:-translate-y-2 transition-transform duration-300 rounded-lg">
            <div className="bg-[#201f1f] p-8 relative z-10 h-full flex flex-col rounded-lg">
              <h3 className="font-headline text-xl font-bold uppercase tracking-wider text-[#00f3ff] mb-2">Cyber</h3>
              <div className="text-4xl font-headline font-bold text-[#e5e2e1] mb-6">$49 <span className="text-sm font-body text-[#849495] font-normal">/ CYCLE</span></div>
              <ul className="space-y-4 mb-8 font-body text-sm text-[#b9cacb] flex-grow">
                <li className="flex items-start gap-3"><Check className="text-[#00f3ff] w-4 h-4 mt-0.5" /> Advanced Neural Routing</li>
                <li className="flex items-start gap-3"><Check className="text-[#00f3ff] w-4 h-4 mt-0.5" /> Quantum Encryption</li>
                <li className="flex items-start gap-3"><Check className="text-[#00f3ff] w-4 h-4 mt-0.5" /> 100GB Data Cache</li>
                <li className="flex items-start gap-3"><Check className="text-[#00f3ff] w-4 h-4 mt-0.5" /> Priority Support Link</li>
              </ul>
              <button className="w-full bg-[#00f3ff] text-[#002022] py-3 rounded-sm font-headline uppercase tracking-widest text-sm glow-primary hover:bg-[#6ff6ff] transition-colors mt-auto font-bold">
                DEPLOY_NODE
              </button>
            </div>
          </motion.div>

          {/* Tier 3 */}
          <motion.div variants={fadeUpVariant} className="bg-[#131313] ghost-border p-8 rounded-lg h-full flex flex-col hover:-translate-y-2 transition-transform duration-300">
            <h3 className="font-headline text-lg font-bold uppercase tracking-wider text-[#b9cacb] mb-2">God-Mode</h3>
            <div className="text-3xl font-headline font-bold text-[#e5e2e1] mb-6">$199 <span className="text-sm font-body text-[#849495] font-normal">/ CYCLE</span></div>
            <ul className="space-y-4 mb-8 font-body text-sm text-[#b9cacb] flex-grow">
              <li className="flex items-start gap-3"><Check className="text-[#849495] w-4 h-4 mt-0.5" /> Unlimited Routing</li>
              <li className="flex items-start gap-3"><Check className="text-[#849495] w-4 h-4 mt-0.5" /> Custom Encryption Keys</li>
              <li className="flex items-start gap-3"><Check className="text-[#849495] w-4 h-4 mt-0.5" /> Infinite Data Cache</li>
            </ul>
            <button className="w-full bg-transparent border border-[#3a494b]/50 text-[#00f3ff] hover:border-[#00f3ff] transition-colors py-3 rounded-sm font-headline uppercase tracking-widest text-sm mt-auto">
              INITIALIZE
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
