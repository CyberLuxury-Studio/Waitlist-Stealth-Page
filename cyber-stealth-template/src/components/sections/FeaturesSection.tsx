"use client";

import React from 'react';
import { Cpu, ShieldCheck, Network } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUpVariant } from '@/lib/motion';

export function FeaturesSection() {
  const features = [
    {
      title: "Neural Routing",
      description: "Bypass standard protocols with direct-to-node neural routing. Reduce latency to near-zero states.",
      icon: <Cpu className="text-primary-container w-6 h-6" />,
      colorClass: "bg-primary-container",
      hoverClass: "hover:border-primary-container/50",
      accentColor: "bg-primary-container/20"
    },
    {
      title: "Quantum Encryption",
      description: "Military-grade encryption algorithms dynamically shift based on real-time threat detection.",
      icon: <ShieldCheck className="text-secondary w-6 h-6" />,
      colorClass: "bg-secondary",
      hoverClass: "hover:border-secondary/50",
      accentColor: "bg-secondary/20"
    },
    {
      title: "Decentralized Mesh",
      description: "Distribute your processing power across a global mesh network, eliminating single points of failure.",
      icon: <Network className="text-tertiary-container w-6 h-6" />,
      colorClass: "bg-tertiary-container",
      hoverClass: "hover:border-tertiary-container/50",
      accentColor: "bg-tertiary-container/20"
    }
  ];

  return (
    <section className="w-full bg-surface-container-lowest py-24 px-6 border-t border-surface relative">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <span className="font-body text-xs text-primary-container uppercase tracking-[0.2em] mb-4 block">[MODULES]</span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-tighter text-surface-tint">
              SYSTEM<br/>CAPABILITIES
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-body text-sm text-on-surface-variant">
              Our construct provides unparalleled data manipulation tools, designed for high-density environments. Operatives gain total control over their data flow.
            </p>
          </div>
        </motion.div>

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
              className={`bg-surface border border-outline-variant/20 p-8 relative group transition-colors ${feature.hoverClass} flex flex-col`}
            >
              <div className={`absolute top-0 right-0 w-2 h-2 opacity-0 group-hover:opacity-100 transition-opacity ${feature.colorClass}`}></div>
              <div className="w-12 h-12 bg-surface-container flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="font-headline text-xl font-bold uppercase tracking-tight text-on-surface mb-4">{feature.title}</h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
                {feature.description}
              </p>
              <div className={`w-8 h-1 mt-auto ${feature.accentColor}`}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
