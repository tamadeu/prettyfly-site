'use client';

import { useState } from 'react';

export function FooterNewsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <div>
      <h4 className="text-[1.6rem] font-semibold mb-[1.6rem] text-white">Newsletter</h4>
      <p className="text-[1.3rem] text-white/70 mb-[1.6rem]">
        Write your email first to know about any information.
      </p>
      <form onSubmit={handleSubmit} className="flex">
        <div className="flex-1 flex items-center bg-white/10 rounded-s-[var(--radius-md)] px-[1.2rem]">
          <span className="text-white/50 text-[1.4rem] me-[0.8rem]">✉</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full bg-transparent text-[1.3rem] text-white placeholder:text-white/40 py-[1rem] outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-primary hover:bg-primary-hover text-white px-[1.6rem] rounded-e-[var(--radius-md)] text-[1.6rem] transition-colors"
          aria-label="Subscribe"
        >
          →
        </button>
      </form>
    </div>
  );
}
