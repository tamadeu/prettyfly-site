'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatPrice } from '@/utils/formatPrice';

/* ── Fashion 03 "Shop the look" — two side-by-side lookbook images, each with
   coral hotspot pins that reveal a product tooltip on hover. Matches the
   screenshot (no heading, no product cards — just the two hotspot images). ── */

type Pin = {
  id: string;
  top: string;
  left: string;
  name: string;
  price: number;
  href: string;
};

const lookbooks: { id: string; image: string; alt: string; pins: Pin[] }[] = [
  {
    id: 'look-1',
    image: '/fashion-03/lookbook/Look_1 (1).webp',
    alt: 'Shop the look — everyday edit',
    pins: [
      { id: 'l1-p1', top: '14%', left: '70%', name: 'Striking Metallic Dress', price: 42, href: '/products/f3-striking-metallic-dress' },
      { id: 'l1-p2', top: '45%', left: '4%', name: 'Classic Wrap Dress', price: 56, href: '/products/f3-classic-wrap-dress' },
      { id: 'l1-p3', top: '34%', left: '40%', name: 'Linen Summer Blouse', price: 36, href: '/products/f3-linen-summer-blouse' },
    ],
  },
  {
    id: 'look-2',
    image: '/fashion-03/lookbook/Look_2.webp',
    alt: 'Shop the look — casual edit',
    pins: [
      { id: 'l2-p1', top: '22%', left: '28%', name: 'Cropped Denim Jacket', price: 50, href: '/products/f3-cropped-denim-jacket' },
      { id: 'l2-p2', top: '50%', left: '72%', name: 'Casual Chambray Shirt', price: 40, href: '/products/f3-casual-chambray-shirt' },
    ],
  },
];

function LookbookPin({ pin }: { pin: Pin }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="f3-stl-pin"
      style={{ position: 'absolute', top: pin.top, left: pin.left, zIndex: 5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        aria-label={pin.name}
        className="f3-stl-dot"
        style={{
          position: 'relative',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          border: '3px solid #fff',
          backgroundColor: '#ef7d6b',
          cursor: 'pointer',
          padding: 0,
          boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
          transition: 'transform 250ms ease, background-color 250ms ease',
          transform: hovered ? 'scale(1.18)' : 'scale(1)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: 'calc(100% + 10px)',
          left: '50%',
          transform: `translateX(-50%) translateY(${hovered ? '0' : '6px'})`,
          backgroundColor: '#fff',
          borderRadius: '6px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
          padding: '12px 16px',
          whiteSpace: 'nowrap',
          opacity: hovered ? 1 : 0,
          pointerEvents: hovered ? 'auto' : 'none',
          transition: 'opacity 250ms ease, transform 250ms ease',
          zIndex: 10,
        }}
      >
        <Link href={pin.href} style={{ textDecoration: 'none' }}>
          <p style={{ fontSize: '14px', fontWeight: 600, color: '#222', marginBottom: '2px' }}>{pin.name}</p>
          <p style={{ fontSize: '14px', fontWeight: 500, color: '#F15B41' }}>{formatPrice(pin.price)}</p>
        </Link>
      </div>
    </div>
  );
}

export function Fashion03ShopTheLook() {
  return (
    <section className="f3-stl-section">
      <div className="f3-stl-fullwidth">
        <div className="f3-stl-grid">
          {lookbooks.map((look) => (
            <div key={look.id} className="f3-stl-img-wrap">
              <Image
                src={look.image}
                alt={look.alt}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                sizes="(max-width: 749px) 100vw, 50vw"
              />
              {look.pins.map((pin) => (
                <LookbookPin key={pin.id} pin={pin} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Full-bleed: span the entire viewport width, edge to edge. */
        .f3-stl-fullwidth {
          width: 100%;
        }
        .f3-stl-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(16px, 2vw, 24px);
        }
        .f3-stl-img-wrap {
          position: relative;
          width: 100%;
          height: clamp(320px, 64vw, 430px);
          overflow: hidden;
          background-color: #f5f5f5;
        }
        @media (min-width: 750px) {
          .f3-stl-grid {
            grid-template-columns: 1fr 1fr;
          }
          .f3-stl-img-wrap {
            height: 580px;
          }
        }

        /* Soft pulsing halo on the coral dots */
        .f3-stl-dot::after {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 2px solid rgba(239, 125, 107, 0.55);
          animation: f3StlPulse 2s ease-out infinite;
        }
        @keyframes f3StlPulse {
          0% { transform: scale(0.7); opacity: 0.8; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
