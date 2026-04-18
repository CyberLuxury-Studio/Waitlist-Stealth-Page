"use client";

import React from 'react';
import { Cpu, ShieldCheck, Infinity } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUpVariant } from '@/lib/motion';

export function FeaturesSection() {
  const features = [
    {
      title: "NEURAL_ROUTING",
      description: "Adaptive pathways ensure zero-latency data transmission across global nodes. Self-healing infrastructure.",
      icon: <Cpu className="text-[#00f3ff] w-10 h-10 mb-6" />,
      colorClass: "bg-[#00f3ff]",
      number: "01"
    },
    {
      title: "VOID_ENCRYPTION",
      description: "Military-grade cryptographic protocols protect data at rest and in transit. Impenetrable defense layer.",
      icon: <ShieldCheck className="text-[#ff003c] w-10 h-10 mb-6" />,
      colorClass: "bg-[#ff003c]",
      number: "02"
    },
    {
      title: "INFINITE_SCALE",
      description: "Elastic computational resources that expand instantly based on real-time operational demands.",
      icon: <Infinity className="text-[#bd00ff] w-10 h-10 mb-6" />,
      colorClass: "bg-[#bd00ff]",
      number: "03"
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-[#111116] relative border-t border-[#3a494b]/10">
      <div className="max-w-screen-2xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="font-headline text-3xl font-bold tracking-tighter mb-16 text-center text-on-surface uppercase"
        >
          SYSTEM_CAPABILITIES
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={fadeUpVariant}
              className="bg-[#131313] p-8 rounded-lg relative overflow-hidden group ghost-border"
            >
              <div className={`absolute top-0 right-0 w-16 h-16 ${feature.colorClass}/20 blur-2xl group-hover:${feature.colorClass}/40 transition-all`}></div>
              {feature.icon}
              <h3 className="font-headline text-xl font-bold mb-4 text-on-surface">{feature.title}</h3>
              <p className="font-body text-on-surface-variant text-sm relative z-10">
                {feature.description}
              </p>
              <div className="absolute bottom-0 right-0 p-4 opacity-10 font-headline text-6xl font-black pointer-events-none select-none">
                {feature.number}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
