"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface WaitlistInputProps {
  label?: string;
  placeholder?: string;
  buttonText?: string;
  className?: string;
}

export function WaitlistInput({
  label = "[01] EMAIL:",
  placeholder = "user@node.network",
  buttonText = "REQUEST_ACCESS",
  className
}: WaitlistInputProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", email);
  };

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col sm:flex-row gap-4 w-full", className)}>
      <div className="flex-grow bg-surface-container-lowest border border-outline-variant/20 flex items-center px-4 py-3 relative group w-full">
        <span className="font-body text-primary-container mr-2 text-sm">{label}</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent border-none outline-none text-on-surface font-body w-full placeholder-on-surface-variant/50 focus:ring-0 p-0 text-sm"
          placeholder={placeholder}
          required
        />
        <span className="absolute right-4 text-primary-container animate-pulse">_</span>
      </div>
      <button
        type="submit"
        className="bg-primary-container text-on-primary-fixed px-8 py-3 font-headline uppercase tracking-widest text-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform shadow-[4px_4px_0px_0px_#ff003c] whitespace-nowrap group sm:w-auto w-full relative overflow-hidden flex-shrink-0"
      >
        <span className="group-hover:opacity-0 transition-opacity">{buttonText}</span>
        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-on-primary-fixed font-bold tracking-widest">&gt;&gt;&gt;</span>
      </button>
    </form>
  );
}
