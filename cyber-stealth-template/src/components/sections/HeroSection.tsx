"use client";

import React from 'react';
import { WaitlistInput } from '../ui/WaitlistInput';
import { Shield, ShieldAlert, Box } from 'lucide-react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { fadeUpVariant } from '@/lib/motion';

const SplineScene = dynamic(() => import('../spline/HeroSplineScene').then(mod => mod.HeroSplineScene), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-surface-container-lowest animate-pulse">
        <span className="font-headline text-on-surface-variant tracking-widest text-sm">INITIALIZING_3D_CONTEXT...</span>
    </div>
  ),
});

export function HeroSection() {
  return (
    <section className="min-h-[921px] flex flex-col lg:flex-row w-full max-w-[1440px] mx-auto px-6 py-20 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-container/5 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-tertiary-container/5 blur-[120px] rounded-full pointer-events-none"></div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUpVariant}
        className="w-full lg:w-1/2 flex flex-col justify-center relative z-10"
      >
        <div className="inline-block border border-outline-variant/30 bg-surface-container-lowest px-4 py-1 mb-8 w-max">
          <span className="font-body text-xs text-on-surface-variant uppercase tracking-[0.2em]">System Status: Online</span>
        </div>

        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-[0.9] text-surface-tint mb-6">
          ENTER<br/>THE NEXT<br/>ERA
        </h1>

        <p className="font-body text-lg md:text-xl text-on-surface-variant mb-12 max-w-md border-l-2 border-primary-container pl-4">
          Join the stealth beta. Limited access. Secure your node in the construct.
        </p>

        <div className="max-w-lg w-full">
            <WaitlistInput />
        </div>

        <div className="mt-16 flex items-center gap-6 opacity-60">
          <div className="text-xs font-body text-on-surface-variant uppercase tracking-widest">Encrypted via</div>
          <div className="flex gap-4">
            <Shield className="text-primary-container w-5 h-5" />
            <ShieldAlert className="text-primary-container w-5 h-5" />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-full lg:w-1/2 flex items-center justify-center mt-12 lg:mt-0 relative z-10 min-h-[400px]"
      >
        <div className="w-full h-full min-h-[500px] border border-outline-variant/20 bg-surface-container-lowest flex items-center justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-2 h-2 bg-primary-container z-20"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-secondary z-20"></div>

          <div className="absolute inset-0 bg-gradient-to-tr from-surface via-transparent to-primary-container/10 z-10 pointer-events-none"></div>

          <div className="absolute inset-0 z-0 opacity-80 mix-blend-screen">
             <SplineScene />
          </div>

          <div className="text-center relative z-10 p-8 border border-outline-variant/30 backdrop-blur-md bg-surface/50 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
             <Box className="w-10 h-10 text-primary-container mb-4 mx-auto" />
             <span className="font-headline uppercase tracking-widest text-sm text-on-surface-variant block mb-2">RENDER_VIEWPORT</span>
             <span className="font-body text-xs text-outline block">Interactive Node Active</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
