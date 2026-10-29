'use client';

import { useState } from 'react';
import { cn } from '@/utils/cn';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: string;
  className?: string;
}

export function Accordion({ items, defaultOpen, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpen || null);

  return (
    <div className={cn('divide-y divide-border border-y border-border', className)}>
      {items.map((item) => (
        <div key={item.id}>
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="w-full flex items-center justify-between py-[1.6rem] text-start text-[1.5rem] font-medium text-heading hover:text-primary transition-colors"
            aria-expanded={openId === item.id}
          >
            {item.title}
            <span
              className={cn(
                'text-[1.8rem] transition-transform duration-[var(--transition-base)]',
                openId === item.id && 'rotate-45'
              )}
            >
              +
            </span>
          </button>
          <div
            className={cn(
              'overflow-hidden transition-all duration-[var(--transition-base)]',
              openId === item.id ? 'max-h-[100rem] pb-[1.6rem]' : 'max-h-0'
            )}
          >
            <div className="text-[1.4rem] text-body leading-relaxed">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
