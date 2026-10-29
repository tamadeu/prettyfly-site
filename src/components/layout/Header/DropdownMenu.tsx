import Link from 'next/link';
import type { NavigationChild } from '@/types/common';

interface DropdownMenuProps {
  items: NavigationChild[];
  bg?: string;
  textColor?: string;
  borderColor?: string;
  hoverColor?: string;
}

export function DropdownMenu({ items, bg = '#fff', textColor = '#444', borderColor = '#f0f0f0', hoverColor = '#F15B41' }: DropdownMenuProps) {
  return (
    <div
      style={{
        position: 'absolute',
        top: '100%',
        minWidth: '260px',
        backgroundColor: bg,
        border: `1px solid ${borderColor}`,
        borderRadius: '0 0 6px 6px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
        zIndex: 300,
        paddingTop: '14px',
        paddingBottom: '14px',
        animation: 'menuSlideDown 300ms ease-out',
      }}
    >
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          style={{
            display: 'block',
            padding: '10px 24px',
            fontSize: '15px',
            color: textColor,
            textDecoration: 'none',
            transition: 'color 150ms ease',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = hoverColor; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = textColor; }}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
