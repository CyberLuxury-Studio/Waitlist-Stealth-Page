"use client";

import React from 'react';
import { WaitlistInput } from '../ui/WaitlistInput';
import { motion } from 'framer-motion';
import { fadeUpVariant } from '@/lib/motion';

export function CtaSection() {
  return (
    <section className="w-full bg-surface py-32 px-6 border-t border-surface-container-lowest relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-container/5 via-surface to-surface pointer-events-none animate-pulse-slow"></div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariant}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        <h2 className="font-headline text-4xl md:text-6xl font-bold uppercase tracking-tighter text-surface-tint mb-8">
          READY TO UPLOAD YOUR CONSCIOUSNESS?
        </h2>
        <p className="font-body text-lg text-on-surface-variant mb-12">
          The network is waiting. Establish your uplink now.
        </p>
        <div className="flex justify-center">
            <WaitlistInput label="[UPLINK]:" placeholder="transmit@node" buttonText="EXECUTE" className="max-w-lg mx-auto" />
        </div>
      </motion.div>
    </section>
  );
}
