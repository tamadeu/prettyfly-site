'use client';

import Link from 'next/link';
import { FeaturedSlider } from '@/features/home/components/FeaturedSlider';

function IconArrowRight({ size = 15 }: { size?: number }) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" /></svg>);
}

/* Reuses the shared FeaturedSlider (same HomeProductCard, badges, swatches,
   Quick Add / Quick View / Wishlist / Compare) pointed at the Basketball
   catalog, then adds the "View All" pill shown in the screenshot. */
export function BasketballFeaturedCollection() {
  return (
    <section className="bbfc-wrap">
      <FeaturedSlider
        apiEndpoint="/api/basketball-products"
        productHrefBase="/products"
        title="Featured Collection"
        cardTheme={{ imageHeight: '345px' }}
      />
      <div style={{ textAlign: 'center', marginTop: '12px' }}>
        <Link href="/shop" className="bbfc-viewall">
          View All
          <IconArrowRight size={15} />
        </Link>
      </div>

      <style>{`
        /* Contain product shots within the fixed 345px square image box so
           nothing overflows or is cropped incorrectly. Scoped to Basketball. */
        .bbfc-wrap .fc-card > a:first-child img {
          object-fit: contain !important;
        }
        .bbfc-viewall {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 32px;
          font-size: 15px;
          font-weight: 500;
          color: #222;
          border: 1.5px solid #222;
          border-radius: 40px;
          text-decoration: none;
          transition: background-color 250ms ease, color 250ms ease, gap 250ms ease;
        }
        .bbfc-viewall:hover { background-color: #222; color: #fff; gap: 12px; }
      `}</style>
    </section>
  );
}
