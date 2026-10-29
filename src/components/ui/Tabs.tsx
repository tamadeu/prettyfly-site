'use client';

import { useState } from 'react';
import { cn } from '@/utils/cn';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
}

export function Tabs({ tabs, defaultTab, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  return (
    <div className={className}>
      <div className="flex border-b border-border gap-[2rem]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'pb-[1.2rem] text-[1.4rem] font-medium border-b-2 transition-colors -mb-px',
              activeTab === tab.id
                ? 'border-dark text-heading'
                : 'border-transparent text-body hover:text-heading'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="pt-[2rem]">
        {tabs.find((t) => t.id === activeTab)?.content}
      </div>
    </div>
  );
}
