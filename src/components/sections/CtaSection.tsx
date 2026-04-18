"use client";

import React from 'react';
import { WaitlistInput } from '../ui/WaitlistInput';
import { motion } from 'framer-motion';
import { fadeUpVariant } from '@/lib/motion';

export function CtaSection() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#131313] border-t border-[#3a494b]/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00f3ff]/5 via-[#131313] to-[#131313] pointer-events-none"></div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariant}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-tighter text-[#e5e2e1] mb-8">
          READY TO UPLOAD YOUR CONSCIOUSNESS?
        </h2>
        <p className="font-body text-lg text-[#b9cacb] mb-12">
          The network is waiting. Establish your uplink now.
        </p>
        <div className="flex justify-center max-w-lg mx-auto">
            <WaitlistInput placeholder="transmit@node" buttonText="EXECUTE" />
        </div>
      </motion.div>
    </section>
  );
}
