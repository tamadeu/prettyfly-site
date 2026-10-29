'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { MegaMenuColumn, MegaCategoryCard } from '@/types/common';
import productsData from '@/data/products.json';
import type { Product } from '@/types/product';
import { formatPrice } from '@/utils/formatPrice';

/* ── Remix Icon arrows for product slider ── */

function IconArrowLeftS({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
    </svg>
  );
}

function IconArrowRightS({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

/* ── Theme system ── */

export interface MegaMenuTheme {
  bg?: string;
  headingColor?: string;
  linkColor?: string;
  linkHoverColor?: string;
  cardBg?: string;
  sliderBtnBg?: string;
  sliderBtnBorder?: string;
  sliderBtnHoverBorder?: string;
  sliderBtnColor?: string;
  sliderOldPriceColor?: string;
  promoTitleColor?: string;
  promoSubtitleColor?: string;
  categoryCountColor?: string;
}

const DEFAULT_THEME: Required<MegaMenuTheme> = {
  bg: '#fff',
  headingColor: '#222',
  linkColor: '#555',
  linkHoverColor: '#F15B41',
  cardBg: '#f7f7f7',
  sliderBtnBg: '#fff',
  sliderBtnBorder: '#e5e5e5',
  sliderBtnHoverBorder: '#222',
  sliderBtnColor: '#222',
  sliderOldPriceColor: '#999',
  promoTitleColor: '#222',
  promoSubtitleColor: '#555',
  categoryCountColor: '#888',
};

function resolveTheme(t?: MegaMenuTheme): Required<MegaMenuTheme> {
  return { ...DEFAULT_THEME, ...t };
}

/* ── Shared column renderer ── */

function MegaMenuColumns({ columns, t }: { columns: MegaMenuColumn[]; t: Required<MegaMenuTheme> }) {
  return (
    <>
      {columns.map((column, i) => (
        <div key={i}>
          <h4
            style={{
              fontSize: '15px',
              fontWeight: 700,
              color: t.headingColor,
              marginBottom: '18px',
            }}
          >
            {column.title}
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {column.links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  style={{
                    fontSize: '14px',
                    color: t.linkColor,
                    textDecoration: 'none',
                    transition: 'color 150ms ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: link.comingSoon ? 'default' : undefined,
                  }}
                  onClick={(e) => {
                    if (link.comingSoon) {
                      e.preventDefault();
                    } else {
                      window.scrollTo({ top: 0, behavior: 'instant' });
                    }
                  }}
                  onMouseEnter={(e) => { if (!link.comingSoon) e.currentTarget.style.color = t.linkHoverColor; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = t.linkColor; }}
                >
                  {link.label}
                  {link.comingSoon && (
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: 600,
                        color: '#fff',
                        backgroundColor: 'rgba(107, 114, 128, 0.8)',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        letterSpacing: '0.3px',
                        lineHeight: 1.4,
                        flexShrink: 0,
                      }}
                    >
                      Em breve
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

/* ── Product Slider for Products mega menu ── */

export interface SliderProduct {
  id: string;
  slug: string;
  name: string;
  price: number;
  compareAtPrice?: number | null;
  images: { src: string }[];
}

function ProductSlider({ products: overrideProducts, hrefBase = '/products', t }: { products?: SliderProduct[]; hrefBase?: string; t: Required<MegaMenuTheme> }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const products: SliderProduct[] = (overrideProducts ?? (productsData as Product[])).slice(0, 6);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const step = el.clientWidth / 2 + 8;
    el.scrollBy({ left: dir === 'left' ? -step : step, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h4 style={{ fontSize: '18px', fontWeight: 700, color: t.headingColor }}>Coleção em destaque</h4>
        <div style={{ display: 'flex', gap: '6px' }}>
          <button
            onClick={() => scroll('left')}
            style={{
              width: '36px', height: '36px', borderRadius: '50%', border: `1px solid ${t.sliderBtnBorder}`,
              background: t.sliderBtnBg, display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: t.sliderBtnColor, transition: 'border-color 150ms ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = t.sliderBtnHoverBorder; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = t.sliderBtnBorder; }}
            aria-label="Produtos anteriores"
          >
            <IconArrowLeftS size={16} />
          </button>
          <button
            onClick={() => scroll('right')}
            style={{
              width: '36px', height: '36px', borderRadius: '50%', border: `1px solid ${t.sliderBtnBorder}`,
              background: t.sliderBtnBg, display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: t.sliderBtnColor, transition: 'border-color 150ms ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = t.sliderBtnHoverBorder; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = t.sliderBtnBorder; }}
            aria-label="Próximos produtos"
          >
            <IconArrowRightS size={16} />
          </button>
        </div>
      </div>

      {/* Scrollable product cards — exactly 2 fully visible, snap-aligned (no peek) */}
      <div
        ref={scrollRef}
        style={{
          display: 'grid',
          gridAutoFlow: 'column',
          gridAutoColumns: 'calc(50% - 8px)',
          gap: '16px',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          scrollSnapType: 'x mandatory',
        }}
      >
        {products.map((product) => (
          <Link
            key={product.id}
            href={`${hrefBase}/${product.slug}`}
            style={{ textDecoration: 'none', color: 'inherit', scrollSnapAlign: 'start' }}
          >
            <div
              style={{
                width: '100%',
                height: '385px',
                backgroundColor: t.cardBg,
                borderRadius: '4px',
                overflow: 'hidden',
                position: 'relative',
                marginBottom: '10px',
              }}
            >
              <Image
                src={product.images[0]?.src || ''}
                alt={product.name}
                fill
                style={{ objectFit: 'cover' }}
                sizes="220px"
              />
            </div>
            <p style={{ fontSize: '14px', fontWeight: 500, color: t.linkColor, marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {product.name}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {product.compareAtPrice && (
                <span style={{ fontSize: '13px', color: t.sliderOldPriceColor, textDecoration: 'line-through' }}>
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
              <span style={{ fontSize: '14px', fontWeight: 600, color: t.headingColor }}>
                {formatPrice(product.price)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ── Main MegaMenu Component ── */

interface MegaMenuProps {
  columns?: MegaMenuColumn[];
  promoImage?: {
    src: string;
    alt: string;
    title: string;
    subtitle: string;
  };
  showProductSlider?: boolean;
  categoryCards?: MegaCategoryCard[];
  sliderProducts?: SliderProduct[];
  /** Base href for slider product links. Default: "/products". */
  sliderHrefBase?: string;
  theme?: MegaMenuTheme;
}

export function MegaMenu({ columns, promoImage, showProductSlider, categoryCards, sliderProducts, sliderHrefBase, theme }: MegaMenuProps) {
  const t = resolveTheme(theme);

  /* Layout: Categories mega menu = 5 image cards */
  if (categoryCards && categoryCards.length > 0) {
    return (
      <div
        style={{
          position: 'absolute',
          top: '100%',
          left: 'calc(50% - 50vw)',
          right: 'calc(50% - 50vw)',
          backgroundColor: t.bg,
          borderTop: 'none',
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
          zIndex: 300,
          animation: 'menuSlideDown 300ms ease-out',
        }}
      >
        <div className="container-main" style={{ height: '420px', paddingTop: '30px', paddingBottom: '30px', display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${categoryCards.length}, 1fr)`,
              gap: '24px',
              width: '100%',
            }}
          >
            {categoryCards.map((card) => (
              <Link
                key={card.id}
                href={card.href}
                className="category-card-link"
                style={{ textDecoration: 'none', color: 'inherit', textAlign: 'left' }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '280px',
                    backgroundColor: t.cardBg,
                    overflow: 'hidden',
                    marginBottom: '14px',
                  }}
                >
                  <Image
                    src={card.image}
                    alt={card.label}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 400ms ease' }}
                    sizes="(max-width: 1200px) 33vw, 20vw"
                  />
                </div>

                <span
                  className="category-card-label"
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: t.headingColor,
                    position: 'relative',
                    display: 'inline-block',
                    paddingBottom: '4px',
                    lineHeight: 1.3,
                  }}
                >
                  {card.label}
                </span>

                {card.itemCount !== undefined && (
                  <p style={{ fontSize: '14px', color: t.categoryCountColor, marginTop: '4px', fontWeight: 400 }}>
                    {card.itemCount} itens
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>

        <style>{`
          .category-card-link .category-card-label::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 2px;
            background-color: ${t.headingColor};
            transition: width 300ms ease, left 300ms ease;
          }
          .category-card-link:hover .category-card-label::after {
            width: 100%;
            left: 0;
          }
          .category-card-link:hover img {
            transform: scale(1.05);
          }
        `}</style>
      </div>
    );
  }

  /* Layout: Products mega menu = 70/30 split */
  if (showProductSlider && columns) {
    return (
      <div
        style={{
          position: 'absolute',
          top: '100%',
          left: 'calc(50% - 50vw)',
          right: 'calc(50% - 50vw)',
          backgroundColor: t.bg,
          borderTop: 'none',
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
          zIndex: 300,
          animation: 'menuSlideDown 300ms ease-out',
        }}
      >
        <div className="container-main" style={{ paddingTop: '32px', paddingBottom: '32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '60% 40%', gap: '40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              <MegaMenuColumns columns={columns} t={t} />
            </div>
            <ProductSlider products={sliderProducts} hrefBase={sliderHrefBase} t={t} />
          </div>
        </div>
      </div>
    );
  }

  /* Layout: Shop mega menu = text columns + promo image */
  if (promoImage && columns) {
    return (
      <div
        style={{
          position: 'absolute',
          top: '100%',
          left: 'calc(50% - 50vw)',
          right: 'calc(50% - 50vw)',
          backgroundColor: t.bg,
          borderTop: 'none',
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
          zIndex: 300,
          animation: 'menuSlideDown 300ms ease-out',
        }}
      >
        <div className="container-main" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns.length}, 1fr) 1fr`, gap: '24px' }}>
            <MegaMenuColumns columns={columns} t={t} />

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', backgroundColor: t.cardBg, borderRadius: '4px', overflow: 'hidden' }}>
                <Image
                  src={promoImage.src}
                  alt={promoImage.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="280px"
                />
              </div>
              <div style={{ textAlign: 'center', paddingTop: '16px' }}>
                <p style={{ fontSize: '16px', fontWeight: 700, color: t.promoTitleColor, letterSpacing: '1px' }}>{promoImage.title}</p>
                <p style={{ fontSize: '13px', color: t.promoSubtitleColor, marginTop: '4px', letterSpacing: '1px' }}>{promoImage.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* Layout: Default (Home) = equal columns, no image */
  if (!columns) return null;

  return (
    <div
      style={{
        position: 'absolute',
        top: '100%',
        left: 'calc(50% - 50vw)',
        right: 'calc(50% - 50vw)',
        backgroundColor: t.bg,
        borderTop: `1px solid ${t.sliderBtnBorder}`,
        boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
        zIndex: 300,
        animation: 'menuSlideDown 300ms ease-out',
      }}
    >
      <div className="container-main" style={{ paddingTop: '32px', paddingBottom: '32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns.length}, 1fr)`, gap: '24px' }}>
          <MegaMenuColumns columns={columns} t={t} />
        </div>
      </div>
    </div>
  );
}
