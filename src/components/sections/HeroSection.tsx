"use client";

import React from 'react';
import { WaitlistInput } from '../ui/WaitlistInput';
import { motion } from 'framer-motion';
import { fadeUpVariant } from '@/lib/motion';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#00f3ff]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUpVariant}
        className="flex-1 space-y-8 z-10 w-full"
      >
        <h1 className="font-headline font-black text-5xl md:text-[4rem] leading-[0.9] tracking-[-0.05em] text-on-surface uppercase">
          ENTER THE<br/>
          <span className="text-[#00f3ff] glow-text">NEXT ERA</span>
        </h1>
        <p className="text-on-surface-variant text-lg font-body max-w-md">
          Join the stealth beta. Advanced neural architecture designed for the digital elite.
        </p>

        <div className="max-w-lg mt-8">
            <WaitlistInput />
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          <div className="bg-[#353534] px-2 py-1 rounded-sm text-[#00f3ff] font-label text-xs uppercase tracking-widest">SECURE_CHANNEL</div>
          <div className="bg-[#353534] px-2 py-1 rounded-sm text-[#00f3ff] font-label text-xs uppercase tracking-widest">INVITE_ONLY</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="flex-1 w-full h-[400px] md:h-[600px] relative"
      >
        {/* Placeholder for 3D Spline Scene */}
        <div className="absolute inset-0 bg-[#131313] rounded-lg ghost-border overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00f3ff]/10 via-[#050505] to-[#050505] z-10 pointer-events-none"></div>
          <Image
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
            alt="Abstract 3D rendering of floating geometric shapes in dark space"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover opacity-60 mix-blend-screen mix-blend-luminosity grayscale z-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
