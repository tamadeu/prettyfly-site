'use client';

import Image from 'next/image';

/* No skill precedent for this section (see blueprint/coffee-homepage-plan.md
   §1) — a two-column dashed-leader price list is unique to the Coffee
   homepage. The decorative background image is scoped to container width
   (not full-bleed 100vw) — it lives inside .cfmb-board alongside the
   heading/columns, all layered on top of it, matching the reference where
   the background pattern is visibly inset from the browser edges. Column
   header icons are the actual /coffee/menu-board/icon1png.webp (Espresso)
   and icon2png.webp (Category) assets, not custom SVGs. Candidate for a new
   skill/menu-board.md once verified against the running page. */

interface MenuItem {
  id: string;
  name: string;
  colorValue: string;
  weightValue: string;
  price: number;
  compareAtPrice?: number;
  image: string;
}

/* Thumbnails matched to the actual /coffee/products/*.webp contents:
   product-1 = manual grinder (black/gold) · product-2 = black kraft bag ·
   product-3 = kraft cup + beans + lid · product-4 = yellow saucer, top-view ·
   product-5 = espresso machine · product-6 = pink ridged cup + beans ·
   product-7 = white cup + saucer + spoon. */
const espressoItems: MenuItem[] = [
  { id: 'mb-e1', name: 'Grains coffee drink', colorValue: 'Coffee, Yellow', weightValue: '250 gram, 500 gram', price: 25, image: '/coffee/products/product-6.webp' },
  { id: 'mb-e2', name: 'Coffee Beans Bags', colorValue: 'Coffee, Brown', weightValue: '250 gram, 500 gram', price: 15, compareAtPrice: 35, image: '/coffee/products/product-3.webp' },
  { id: 'mb-e3', name: 'Coffee Cup Top', colorValue: 'Brown, Black', weightValue: '250 gram, 500 gram', price: 45, image: '/coffee/products/product-4.webp' },
  { id: 'mb-e4', name: 'Black Gold Coffee', colorValue: 'Black, Coffee', weightValue: '250 gram, 500 gram', price: 15, compareAtPrice: 24, image: '/coffee/products/product-1.webp' },
];

const categoryItems: MenuItem[] = [
  { id: 'mb-c1', name: 'Coffee Machines', colorValue: 'Black, Gold', weightValue: '250 gram, 500 gram', price: 250, image: '/coffee/products/product-5.webp' },
  { id: 'mb-c2', name: 'Mountain Harvest Coffee', colorValue: 'Black, Coffee', weightValue: '250 gram, 500 gram', price: 20, compareAtPrice: 35, image: '/coffee/products/product-7.webp' },
  { id: 'mb-c3', name: 'Havana Blend Coffee', colorValue: 'Gold, Black', weightValue: '250 gram, 500 gram', price: 13, compareAtPrice: 17, image: '/coffee/products/product-2.webp' },
  { id: 'mb-c4', name: 'Eclipse Brew Coffee', colorValue: 'Brown, Coffee', weightValue: '250 gram, 500 gram', price: 18, image: '/coffee/products/product-6.webp' },
];

function MenuColumn({ title, iconSrc, items }: { title: string; iconSrc: string; items: MenuItem[] }) {
  return (
    <div className="cfmb-col">
      <div className="cfmb-col-header">
        <span className="cfmb-col-icon">
          <Image src={iconSrc} alt="" width={32} height={32} />
        </span>
        <span className="cfmb-col-title">{title}</span>
      </div>
      <div className="cfmb-rows">
        {items.map((item) => (
          <div key={item.id} className="cfmb-row">
            <div className="cfmb-row-thumb">
              <Image src={item.image} alt={item.name} fill style={{ objectFit: 'contain' }} sizes="90px" />
            </div>
            <div className="cfmb-row-top">
              <span className="cfmb-row-name">{item.name}</span>
              <span className="cfmb-row-leader" aria-hidden="true" />
            </div>
            <div className="cfmb-row-price">
              <span className="cfmb-price-new">${item.price.toFixed(2)}</span>
              {item.compareAtPrice && <span className="cfmb-price-old">${item.compareAtPrice.toFixed(2)}</span>}
            </div>
            <div className="cfmb-row-meta">
              <span className="cfmb-meta-label">Color:</span> {item.colorValue} <span className="cfmb-meta-label">Weight:</span> {item.weightValue}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CoffeeMenuBoard() {
  return (
    <section className="cfmb-section">
      <div className="container-main">
        <div className="cfmb-board">
          <div className="cfmb-heading-wrap">
            <h2 className="cfmb-heading">Menu Board</h2>
            <p className="cfmb-subtitle">Express yourself—fashionable, refined, and effortlessly unique styles await.</p>
          </div>

          <div className="cfmb-grid">
            <MenuColumn title="Espresso" iconSrc="/coffee/menu-board/icon1png.webp" items={espressoItems} />
            <MenuColumn title="Category" iconSrc="/coffee/menu-board/icon2png.webp" items={categoryItems} />
          </div>
        </div>
      </div>

      <style>{`
        /* Background image is scoped to .cfmb-board — the container-main
           content width — not the full-bleed section, per the reference:
           the decorative pattern is visibly inset from the browser edges,
           and every piece of content (heading through rows) sits on top of
           it, inside that same bounded box. */
        .cfmb-board {
          position: relative;
          width: 100%;
          background-color: #fdfbf7;
          background-image: url('/coffee/menu-board/menu-board-background.webp');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: clamp(14px, 3vw, 20px);
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(58, 42, 26, 0.08);
        }

        .cfmb-heading-wrap { text-align: center; margin-bottom: clamp(20px, 3vw, 36px); }
        .cfmb-heading { font-size: clamp(20px, 2.6vw, 30px); font-weight: 700; color: rgb(58, 58, 59); margin-bottom: clamp(6px, 1vw, 10px); }
        .cfmb-subtitle { font-size: clamp(12px, 2.6vw, 14px); color: #8a7c6a; }

        .cfmb-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(18px, 3vw, 28px);
        }

        .cfmb-col-header {
          display: flex;
          align-items: center;
          gap: clamp(6px, 1.4vw, 10px);
          background: #f2e0c8;
          border-radius: 8px;
          padding: clamp(10px, 2.2vw, 14px) clamp(12px, 3vw, 20px);
          margin-bottom: clamp(12px, 2.4vw, 18px);
        }
        .cfmb-col-icon { display: flex; flex-shrink: 0; }
        .cfmb-col-icon img { width: clamp(22px, 5vw, 32px); height: clamp(22px, 5vw, 32px); }
        .cfmb-col-title { font-size: clamp(15px, 3.4vw, 19px); font-weight: 700; color: rgb(58, 58, 59); }

        /* ── Rows — one continuous clamp per text element (not a hard
           breakpoint jump), and white-space is no longer "nowrap": once a
           name can wrap inside its own grid column, it can never bleed
           past the column boundary into the price column. min-height (not
           a fixed height) lets the row grow if a name wraps to 2 lines. ── */
        .cfmb-rows { display: flex; flex-direction: column; }
        .cfmb-row {
          display: grid;
          grid-template-columns: clamp(64px, 14vw, 90px) 1fr auto;
          grid-template-rows: auto auto;
          column-gap: clamp(10px, 2.4vw, 18px);
          row-gap: 6px;
          align-items: center;
          min-height: 125px;
          padding-block: 10px;
          border-bottom: 1px dashed #e5dcc8;
        }
        .cfmb-row:last-child { border-bottom: none; }
        .cfmb-row-thumb {
          position: relative;
          grid-column: 1;
          grid-row: 1 / 3;
          width: clamp(64px, 14vw, 90px);
          height: clamp(64px, 14vw, 90px);
          flex-shrink: 0;
          background: #eee9e1;
          border-radius: 10px;
        }
        .cfmb-row-top {
          grid-column: 2;
          grid-row: 1;
          display: flex;
          align-items: baseline;
          gap: 10px;
          min-width: 0;
        }
        .cfmb-row-name {
          font-size: clamp(13px, 3.2vw, 17px);
          font-weight: 600;
          color: rgb(58, 58, 59);
          overflow-wrap: break-word;
        }
        .cfmb-row-leader {
          flex: 1;
          min-width: 12px;
          height: 0;
          align-self: center;
          border-bottom: 1px dotted #c9bba3;
        }
        .cfmb-row-price {
          grid-column: 3;
          grid-row: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          flex-shrink: 0;
        }
        .cfmb-price-new { font-size: clamp(13px, 3.2vw, 17px); font-weight: 700; color: rgb(58, 58, 59); }
        .cfmb-price-old { font-size: clamp(10px, 2.4vw, 13px); color: #b3a794; text-decoration: line-through; }
        .cfmb-row-meta {
          grid-column: 2 / 4;
          grid-row: 2;
          font-size: clamp(10px, 2.4vw, 14px);
          color: #6b5f52;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .cfmb-meta-label { color: #8b83ad; }

        @media (min-width: 750px) {
          .cfmb-row-meta { white-space: normal; }
        }
        @media (min-width: 992px) {
          .cfmb-board { height: 720px; }
          .cfmb-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
        }

        /* ── ≤550px — the leader-dash "name ⋯⋯ price" single-line layout
           has no room left once the name wraps; stack price/meta under
           the name instead of beside it so nothing can ever collide. ── */
        @media (max-width: 550px) {
          .cfmb-row {
            grid-template-columns: 56px 1fr;
            grid-template-rows: auto auto auto;
            row-gap: 4px;
          }
          .cfmb-row-thumb {
            grid-row: 1 / 4;
            width: 56px;
            height: 56px;
          }
          .cfmb-row-top {
            grid-column: 2;
            grid-row: 1;
          }
          .cfmb-row-leader { display: none; }
          .cfmb-row-price {
            grid-column: 2;
            grid-row: 2;
            align-items: flex-start;
            flex-direction: row;
            gap: 8px;
          }
          .cfmb-row-meta {
            grid-column: 2;
            grid-row: 3;
            white-space: normal;
          }
        }
      `}</style>
    </section>
  );
}
