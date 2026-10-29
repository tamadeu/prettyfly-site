'use client';

import { createContext, useContext } from 'react';
import type { NavigationItem } from '@/types/common';
import type { TopbarConfig } from '@/lib/backend';

interface MainSiteConfig {
  logo: string | null;
  menu: NavigationItem[] | null;
  topbar: TopbarConfig | null;
  contact: { enabled: boolean; label: string; phone: string } | null;
}

const MainSiteConfigContext = createContext<MainSiteConfig | null>(null);

export const MainSiteConfigProvider = MainSiteConfigContext.Provider;

/** Admin-managed logo/menu; null outside the main site header. */
export function useMainSiteConfig() {
  return useContext(MainSiteConfigContext);
}
