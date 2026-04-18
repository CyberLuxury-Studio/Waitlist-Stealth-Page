"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface WaitlistInputProps {
  placeholder?: string;
  buttonText?: string;
  className?: string;
}

export function WaitlistInput({
  placeholder = "ENTER_EMAIL_ADDRESS",
  buttonText = "REQUEST ACCESS",
  className
}: WaitlistInputProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", email);
  };

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col sm:flex-row gap-4 w-full", className)}>
      <label htmlFor="email-input" className="sr-only">Email address</label>
      <input
        id="email-input"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-surface-container-low border-0 border-b border-[#3a494b]/15 px-4 py-3 text-on-surface font-body w-full focus:ring-0 focus:border-[#00f3ff] focus:border-b transition-colors placeholder:text-on-surface-variant/50"
        placeholder={placeholder}
        required
        aria-label="Email address for waitlist"
      />
      <button
        type="submit"
        className="bg-[#00f3ff] text-[#002022] px-8 py-3 rounded-sm font-label font-bold tracking-wider glow-primary hover:bg-[#6ff6ff] transition-colors whitespace-nowrap flex-shrink-0"
      >
        {buttonText}
      </button>
    </form>
  );
}
