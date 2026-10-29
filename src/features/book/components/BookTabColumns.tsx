'use client';

import Image from 'next/image';
import Link from 'next/link';
import { formatPrice } from '@/utils/formatPrice';
import { useProducts } from '@/features/products/hooks/useProducts';
import type { Product } from '@/types/product';

function MiniRow({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="bktc-row">
      <div className="bktc-thumb">
        <Image src={product.images[0]?.src || ''} alt={product.name} fill style={{ objectFit: 'contain' }} sizes="70px" />
      </div>
      <div className="bktc-row-info">
        <span className="bktc-row-name">{product.name}</span>
        <span className="bktc-row-price">
          {product.compareAtPrice && <span className="bktc-row-compare">{formatPrice(product.compareAtPrice)}</span>}
          {formatPrice(product.price)}
        </span>
      </div>
    </Link>
  );
}

export function BookTabColumns() {
  const { data } = useProducts({ limit: 30 }, { endpoint: '/api/book-products' });
  const all = data?.products ?? [];

  const bestSeller = all.filter((p) => p.category === 'Bestsellers').slice(0, 3);
  const newProduct = all.filter((p) => p.category === 'New Arrivals').slice(0, 3);
  const featured = all.filter((p) => p.category === 'Featured').slice(0, 3);

  const columns = [
    { title: 'Best Seller', items: bestSeller.length ? bestSeller : all.slice(0, 3) },
    { title: 'New Product', items: newProduct.length ? newProduct : all.slice(3, 6) },
    { title: 'Featured', items: featured.length ? featured : all.slice(6, 9) },
  ];

  return (
    <section className="bktc-section">
      <div className="container-main">
        <div className="bktc-grid">
          {columns.map((col) => (
            <div key={col.title} className="bktc-col">
              <h3 className="bktc-col-title">{col.title}</h3>
              <div className="bktc-list">
                {col.items.map((p) => <MiniRow key={p.id} product={p} />)}
              </div>
            </div>
          ))}

          {/* Promo card */}
          <Link href="/shop" className="bktc-promo">
            <Image src="/book/promo-banner-thumbnail/thumbnail-1.avif" alt="Special offer" fill style={{ objectFit: 'cover' }} sizes="25vw" />
            <div className="bktc-promo-overlay" />
            <div className="bktc-promo-content">
              <p className="bktc-promo-eyebrow">Enjoy up to 50% OFF</p>
              <h4 className="bktc-promo-title">Heading</h4>
              <span className="bktc-promo-btn">Shop now</span>
            </div>
          </Link>
        </div>
      </div>

      <style>{`
        .bktc-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        @media (min-width: 600px) { .bktc-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 992px) { .bktc-grid { grid-template-columns: repeat(3, 1fr) 320px; } }

        .bktc-col-title {
          font-size: 20px;
          font-weight: 700;
          color: #2a2a2a;
          padding-bottom: 10px;
          margin-bottom: 18px;
          border-bottom: 2px solid #eee;
          position: relative;
        }
        .bktc-col-title::after {
          content: '';
          position: absolute;
          left: 0; bottom: -2px;
          width: 40px; height: 2px;
          background: #e0294a;
        }
        .bktc-list { display: flex; flex-direction: column; gap: 20px; }
        .bktc-row { display: flex; align-items: center; gap: 14px; text-decoration: none; }
        .bktc-thumb {
          position: relative;
          width: 60px;
          height: 80px;
          flex-shrink: 0;
          background: #f6f6f6;
          border-radius: 6px;
          overflow: hidden;
          padding: 4px;
        }
        .bktc-row-info { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
        .bktc-row-name { font-size: 15px; font-weight: 600; color: #2a2a2a; transition: color 180ms ease; }
        .bktc-row:hover .bktc-row-name { color: #e0294a; }
        .bktc-row-price { font-size: 14px; font-weight: 600; color: #2a2a2a; display: inline-flex; gap: 8px; }
        .bktc-row-compare { color: #999; text-decoration: line-through; font-weight: 400; }

        .bktc-promo {
          position: relative;
          display: block;
          min-height: 320px;
          border-radius: 12px;
          overflow: hidden;
          text-decoration: none;
        }
        .bktc-promo-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.55)); z-index: 1; }
        .bktc-promo-content {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 24px;
        }
        .bktc-promo-eyebrow { font-size: 14px; color: rgba(255,255,255,0.9); margin-bottom: 8px; }
        .bktc-promo-title { font-size: 30px; font-weight: 700; color: #fff; margin-bottom: 20px; }
        .bktc-promo-btn {
          display: inline-flex;
          align-items: center;
          background: #e0294a;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          padding: 12px 28px;
          border-radius: 40px;
          transition: background 200ms ease;
        }
        .bktc-promo:hover .bktc-promo-btn { background: #b81f3b; }
      `}</style>
    </section>
  );
}
