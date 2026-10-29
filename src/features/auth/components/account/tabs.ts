export const ACCOUNT_TABS = [
  { id: 'dados', label: 'Meus dados' },
  { id: 'enderecos', label: 'Endereços' },
  { id: 'compras', label: 'Compras' },
  { id: 'favoritos', label: 'Favoritos' },
] as const;

export type AccountTab = (typeof ACCOUNT_TABS)[number]['id'];
