import Image from 'next/image';
import Link from 'next/link';
import { pizzaProducts } from '@/data/pizza-products';

const bbqItems    = pizzaProducts.filter((p) => p.category === 'BBQ Pizza').slice(0, 4);
const chickenItems = pizzaProducts.filter((p) => p.category === 'Chicken Pizza').slice(0, 4);

function MenuItem({ product }: { product: (typeof pizzaProducts)[0] }) {
  return (
    <div className="ps-mb-item">
      {/* Thumbnail */}
      <div className="ps-mb-thumb">
        <Image
          src={product.images[0]?.src || ''}
          alt={product.name}
          fill
          style={{ objectFit: 'cover' }}
          sizes="72px"
        />
      </div>

      {/* Info — dashed right border acts as vertical divider */}
      <div className="ps-mb-info">
        <Link href={`/pizza/product/${product.slug}`} className="ps-mb-name">
          {product.name}
        </Link>
        <span className="ps-mb-meta">
          <strong>Category:</strong> {product.category}&nbsp;&nbsp;<strong>Size:</strong>
        </span>
        <span className="ps-mb-sizes">{product.sizes.join(', ')}</span>
      </div>

      {/* Price */}
      <div className="ps-mb-price-col">
        <span className="ps-mb-price">${product.price.toFixed(2)}</span>
        {product.compareAtPrice && (
          <span className="ps-mb-orig">${product.compareAtPrice.toFixed(2)}</span>
        )}
      </div>
    </div>
  );
}

function MenuColumn({ title, items }: { title: string; items: typeof pizzaProducts }) {
  return (
    <div className="ps-mb-col">
      <h3 className="ps-mb-col-title">{title}</h3>
      <div className="ps-mb-list">
        {items.map((p) => <MenuItem key={p.id} product={p} />)}
      </div>
    </div>
  );
}

export function PizzaShopMenuBoard() {
  return (
    <section className="ps-mb">
      <div className="container-main">
        <div className="ps-mb-card">

          {/* Header */}
          <div className="ps-mb-head">
            <h2 className="ps-mb-heading">Menu board</h2>
            <p className="ps-mb-sub">
              Express yourself—fashionable, refined, and effortlessly unique styles await.
            </p>
          </div>

          {/* Two-column grid */}
          <div className="ps-mb-body">
            <MenuColumn title="BBQ Pizza"     items={bbqItems}     />
            <MenuColumn title="Chicken Pizza" items={chickenItems} />
          </div>

        </div>
      </div>

      <style>{`
        /* ── Card wrapper ── */
        .ps-mb-card {
          background: #111;
          border-radius: 16px;
          padding: clamp(32px, 5vw, 60px) clamp(24px, 4vw, 56px);
        }

        /* ── Header ── */
        .ps-mb-head {
          text-align: center;
          margin-bottom: clamp(32px, 4vw, 56px);
        }
        .ps-mb-heading {
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 800;
          color: #fff;
          margin: 0 0 12px;
          letter-spacing: -0.3px;
        }
        .ps-mb-sub {
          font-size: clamp(13px, 1.1vw, 15px);
          color: rgba(255,255,255,0.45);
          margin: 0;
          line-height: 1.6;
        }

        /* ── Two-column grid ── */
        .ps-mb-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(24px, 4vw, 56px);
        }

        /* ── Column title ── */
        .ps-mb-col-title {
          font-size: clamp(18px, 2vw, 26px);
          font-weight: 700;
          color: #fff;
          margin: 0 0 clamp(16px, 2vw, 28px);
          letter-spacing: -0.2px;
        }

        /* ── Item row ── */
        .ps-mb-item {
          display: grid;
          grid-template-columns: 72px 1fr auto;
          gap: 0;
          align-items: center;
          padding-block: 16px;
          border-bottom: 1px dashed rgba(255,255,255,0.12);
          transition: background 200ms ease;
          border-radius: 6px;
        }
        .ps-mb-item:first-child { border-top: 1px dashed rgba(255,255,255,0.12); }
        .ps-mb-item:hover { background: rgba(255,255,255,0.03); }

        /* Thumbnail */
        .ps-mb-thumb {
          position: relative;
          width: 72px;
          height: 72px;
          border-radius: 8px;
          overflow: hidden;
          background: #1a1a1a;
          flex-shrink: 0;
        }

        /* Info block — dashed right border = vertical divider */
        .ps-mb-info {
          display: flex;
          flex-direction: column;
          gap: 3px;
          padding-inline: 14px 18px;
          border-right: 1px dashed rgba(255,255,255,0.15);
          align-self: stretch;
          justify-content: center;
        }
        .ps-mb-name {
          font-size: clamp(13px, 1.1vw, 15px);
          font-weight: 700;
          color: #fff;
          text-decoration: none;
          line-height: 1.3;
          transition: color 200ms ease;
        }
        .ps-mb-name:hover { color: #e84d1c; }
        .ps-mb-meta {
          font-size: clamp(11px, 0.85vw, 12px);
          color: rgba(255,255,255,0.45);
          line-height: 1.5;
        }
        .ps-mb-meta strong {
          font-weight: 600;
          color: rgba(255,255,255,0.6);
        }
        .ps-mb-sizes {
          font-size: clamp(11px, 0.85vw, 12px);
          color: rgba(255,255,255,0.45);
        }

        /* Price column */
        .ps-mb-price-col {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 3px;
          padding-left: 18px;
          flex-shrink: 0;
        }
        .ps-mb-price {
          font-size: clamp(14px, 1.2vw, 17px);
          font-weight: 700;
          color: #fff;
          white-space: nowrap;
        }
        .ps-mb-orig {
          font-size: clamp(11px, 0.85vw, 13px);
          color: rgba(255,255,255,0.38);
          text-decoration: line-through;
          white-space: nowrap;
        }

        /* ── Responsive ── */
        @media (max-width: 991px) {
          .ps-mb-body { grid-template-columns: 1fr; gap: 36px; }
        }
        @media (max-width: 749px) {
          .ps-mb-card { padding: 28px 20px; }
          .ps-mb-item { grid-template-columns: 60px 1fr auto; }
          .ps-mb-thumb { width: 60px; height: 60px; }
          .ps-mb-info { padding-inline: 10px 12px; }
          .ps-mb-price-col { padding-left: 12px; }
        }
      `}</style>
    </section>
  );
}
