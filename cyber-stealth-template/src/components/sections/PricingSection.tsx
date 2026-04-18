"use client";

import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUpVariant } from '@/lib/motion';

export function PricingSection() {
  return (
    <section className="w-full py-24 px-6 relative">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-16"
        >
          <span className="font-body text-xs text-primary-container uppercase tracking-[0.2em] mb-4 block">[ACCESS_TIERS]</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-tighter text-surface-tint">
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
          <motion.div variants={fadeUpVariant} className="bg-surface-container-lowest border border-outline-variant/30 p-8 h-full flex flex-col hover:-translate-y-2 transition-transform duration-300">
            <h3 className="font-headline text-lg font-bold uppercase tracking-wider text-on-surface-variant mb-2">Hacker</h3>
            <div className="text-3xl font-headline font-bold text-on-surface mb-6">FREE <span className="text-sm font-body text-outline font-normal">/ NODE</span></div>
            <ul className="space-y-4 mb-8 font-body text-sm text-on-surface-variant flex-grow">
              <li className="flex items-start gap-3"><Check className="text-outline w-4 h-4 mt-0.5" /> Basic Routing</li>
              <li className="flex items-start gap-3"><Check className="text-outline w-4 h-4 mt-0.5" /> Standard Encryption</li>
              <li className="flex items-start gap-3"><Check className="text-outline w-4 h-4 mt-0.5" /> 1GB Data Cache</li>
            </ul>
            <button className="w-full bg-transparent border border-outline-variant/50 text-primary hover:border-primary transition-colors py-3 font-headline uppercase tracking-widest text-sm mt-auto">
              INITIALIZE
            </button>
          </motion.div>

          {/* Tier 2 (Highlighted) */}
          <motion.div variants={fadeUpVariant} className="bg-surface border border-transparent p-1 relative shadow-[0_0_40px_rgba(0,243,255,0.1)] z-10 transform md:scale-105 h-full flex flex-col hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-tertiary-container to-primary-container z-0"></div>
            <div className="bg-surface-container p-8 relative z-10 h-full flex flex-col">
              <div className="absolute top-0 right-0 w-4 h-4 bg-primary-container"></div>
              <h3 className="font-headline text-xl font-bold uppercase tracking-wider text-primary-container mb-2">Cyber</h3>
              <div className="text-4xl font-headline font-bold text-on-surface mb-6">$49 <span className="text-sm font-body text-outline font-normal">/ CYCLE</span></div>
              <ul className="space-y-4 mb-8 font-body text-sm text-on-surface-variant flex-grow">
                <li className="flex items-start gap-3"><Check className="text-primary-container w-4 h-4 mt-0.5" /> Advanced Neural Routing</li>
                <li className="flex items-start gap-3"><Check className="text-primary-container w-4 h-4 mt-0.5" /> Quantum Encryption</li>
                <li className="flex items-start gap-3"><Check className="text-primary-container w-4 h-4 mt-0.5" /> 100GB Data Cache</li>
                <li className="flex items-start gap-3"><Check className="text-primary-container w-4 h-4 mt-0.5" /> Priority Support Link</li>
              </ul>
              <button className="w-full bg-primary-container text-on-primary-fixed py-3 font-headline uppercase tracking-widest text-sm hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_0px_#ff003c] mt-auto">
                DEPLOY_NODE
              </button>
            </div>
          </motion.div>

          {/* Tier 3 */}
          <motion.div variants={fadeUpVariant} className="bg-surface-container-lowest border border-outline-variant/30 p-8 h-full flex flex-col hover:-translate-y-2 transition-transform duration-300">
            <h3 className="font-headline text-lg font-bold uppercase tracking-wider text-on-surface-variant mb-2">God-Mode</h3>
            <div className="text-3xl font-headline font-bold text-on-surface mb-6">$199 <span className="text-sm font-body text-outline font-normal">/ CYCLE</span></div>
            <ul className="space-y-4 mb-8 font-body text-sm text-on-surface-variant flex-grow">
              <li className="flex items-start gap-3"><Check className="text-outline w-4 h-4 mt-0.5" /> Unlimited Routing</li>
              <li className="flex items-start gap-3"><Check className="text-outline w-4 h-4 mt-0.5" /> Custom Encryption Keys</li>
              <li className="flex items-start gap-3"><Check className="text-outline w-4 h-4 mt-0.5" /> Infinite Data Cache</li>
            </ul>
            <button className="w-full bg-transparent border border-outline-variant/50 text-primary hover:border-primary transition-colors py-3 font-headline uppercase tracking-widest text-sm mt-auto">
              INITIALIZE
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
