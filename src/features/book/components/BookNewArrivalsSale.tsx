'use client';

import Image from 'next/image';
import Link from 'next/link';

function IconArrowRight({ size = 14 }: { size?: number }) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" /></svg>);
}

const thumbs = [
  '/book/products/product-4.webp',
  '/book/products/product-6.webp',
  '/book/products/product-2.webp',
];

export function BookNewArrivalsSale() {
  return (
    <section>
      <div className="container-main">
        <div className="bkna-band">
          {/* Left — image + copy */}
          <div className="bkna-left">
            <div className="bkna-img">
              <Image src="/book/blog/blog-1.webp" alt="New Arrivals Sale" fill style={{ objectFit: 'cover' }} sizes="120px" />
            </div>
            <div className="bkna-copy">
              <h3 className="bkna-title">New Arrivals Sale</h3>
              <p className="bkna-text">Check out our new arrivals and enjoy a 15% discount products!</p>
            </div>
          </div>

          {/* Right — thumbnails + deal */}
          <div className="bkna-right">
            <div className="bkna-thumbs">
              {thumbs.map((src, i) => (
                <div key={i} className="bkna-thumb">
                  <Image src={src} alt={`New arrival ${i + 1}`} fill style={{ objectFit: 'contain' }} sizes="72px" />
                </div>
              ))}
            </div>
            <div className="bkna-deal">
              <p className="bkna-deal-title">Special Weekend Deal</p>
              <p className="bkna-deal-sub">Save an Extra 20%!</p>
              <Link href="/shop" className="bkna-deal-link">
                Shop Now
                <IconArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .bkna-band {
          background: #fde8ec;
          border-radius: 14px;
          padding: clamp(20px, 3vw, 32px) clamp(22px, 3.5vw, 44px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
        }
        .bkna-left { display: flex; align-items: center; gap: 20px; min-width: 0; }
        .bkna-img {
          position: relative;
          width: clamp(96px, 10vw, 130px);
          height: clamp(72px, 8vw, 96px);
          border-radius: 10px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .bkna-title { font-size: clamp(18px, 2.2vw, 22px); font-weight: 700; color: #2a2a2a; margin-bottom: 6px; }
        .bkna-text { font-size: 14px; color: #7a6a6e; line-height: 1.6; max-width: 320px; }

        .bkna-right { display: flex; align-items: center; gap: clamp(20px, 3vw, 40px); flex-wrap: wrap; }
        .bkna-thumbs { display: flex; gap: 12px; }
        .bkna-thumb {
          position: relative;
          width: clamp(56px, 6vw, 72px);
          height: clamp(72px, 8vw, 92px);
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          padding: 6px;
        }
        .bkna-deal { text-align: left; }
        .bkna-deal-title { font-size: 15px; color: #7a6a6e; }
        .bkna-deal-sub { font-size: clamp(15px, 1.8vw, 17px); font-weight: 700; color: #2a2a2a; margin: 2px 0 6px; }
        .bkna-deal-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 14px;
          font-weight: 600;
          color: #e0294a;
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: gap 200ms ease;
        }
        .bkna-deal-link:hover { gap: 9px; }

        @media (max-width: 749px) {
          .bkna-band { flex-direction: column; align-items: flex-start; }
          .bkna-right { width: 100%; justify-content: space-between; }
        }
      `}</style>
    </section>
  );
}
