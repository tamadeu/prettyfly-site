'use client';

import Image from 'next/image';
import Link from 'next/link';

export function PlumbingPromoGrid() {
  return (
    <section>
      <div className="container-main">
        <div className="plpg-wrapper">
          {/* LEFT — large banner */}
          <Link href="/shop" className="plpg-card plpg-left">
            <Image
              src="/plumbing-supplies/banner/banner-1.webp"
              alt="Affordable Plumbing Repairs"
              fill
              className="plpg-img"
              style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 500ms ease' }}
              sizes="50vw"
            />
            <div className="plpg-left-content">
              <div>
                <span className="plpg-badge">POPULAR</span>
              </div>
              <div className="plpg-left-mid">
                <h3 className="plpg-left-title">Affordable Plumbing<br />Repairs</h3>
                <p className="plpg-left-sub">Starting price at $70</p>
              </div>
              <div>
                <span className="plpg-btn">Shop now</span>
              </div>
            </div>
          </Link>

          {/* RIGHT — two stacked cards */}
          <div className="plpg-right">
            <Link href="/shop" className="plpg-card plpg-small">
              <Image
                src="/plumbing-supplies/banner/banner-2.webp"
                alt="Your Plumbing Experts"
                fill
                className="plpg-img"
                style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 500ms ease' }}
                sizes="50vw"
              />
              <div className="plpg-small-content">
                <h3 className="plpg-small-title">Your Plumbing Experts</h3>
                <span className="plpg-btn">Shop Now</span>
              </div>
            </Link>

            <Link href="/shop" className="plpg-card plpg-small">
              <Image
                src="/plumbing-supplies/banner/banner-3.webp"
                alt="Top-Notch Plumbing Work"
                fill
                className="plpg-img"
                style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 500ms ease' }}
                sizes="50vw"
              />
              <div className="plpg-small-content">
                <h3 className="plpg-small-title">Top-Notch Plumbing Work</h3>
                <span className="plpg-btn">Shop Now</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .plpg-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .plpg-card {
          position: relative;
          display: block;
          overflow: hidden;
          border-radius: 10px;
          text-decoration: none;
          color: inherit;
        }
        .plpg-left { height: 610px; }
        .plpg-right {
          display: grid;
          grid-template-rows: 1fr 1fr;
          gap: 20px;
          height: 610px;
        }
        .plpg-card:hover .plpg-img { transform: scale(1.05); }

        .plpg-left-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          padding: 34px 40px;
          z-index: 2;
        }
        .plpg-badge {
          display: inline-block;
          background: #fff;
          color: #1c2230;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 7px 16px;
          border-radius: 3px;
        }
        .plpg-left-mid { flex: 1; display: flex; flex-direction: column; justify-content: center; }
        .plpg-left-title {
          font-size: clamp(24px, 2.6vw, 30px);
          font-weight: 700;
          color: #1c2230;
          line-height: 1.2;
          margin-bottom: 10px;
        }
        .plpg-left-sub { font-size: 15px; color: #4a4f57; }

        .plpg-small-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 30px 34px;
          z-index: 2;
        }
        .plpg-small-title {
          font-size: clamp(20px, 2.2vw, 24px);
          font-weight: 700;
          color: #1c2230;
          line-height: 1.3;
          max-width: 60%;
        }

        .plpg-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #0a2540;
          color: #fff;
          font-size: 15px;
          font-weight: 500;
          padding: 14px 26px;
          border-radius: 4px;
          width: fit-content;
          transition: background-color 250ms ease;
        }
        .plpg-btn:hover { background: #061a30; }

        /* Stack the three banner items into a single column and scale each
           item's height down smoothly. Height floors at 310px (its value at
           the 320px breakpoint) so nothing collapses. */
        @media (max-width: 991px) {
          .plpg-wrapper { grid-template-columns: 1fr; }
          .plpg-right { height: auto; grid-template-rows: auto auto; }
          .plpg-left { height: clamp(310px, 46vw, 400px); }
          .plpg-small { height: clamp(310px, 42vw, 320px); }
        }
        /* Scale the overlaid content (typography, padding) down with the viewport. */
        @media (max-width: 749px) {
          .plpg-left-content { padding: clamp(22px, 5vw, 34px) clamp(22px, 5.5vw, 40px); }
          .plpg-left-title { font-size: clamp(20px, 5.2vw, 30px); }
          .plpg-left-sub { font-size: clamp(13px, 3.4vw, 15px); }
          .plpg-small-content { padding: clamp(18px, 4.6vw, 30px) clamp(20px, 5vw, 34px); }
          .plpg-small-title { font-size: clamp(17px, 4.6vw, 24px); max-width: 78%; }
          .plpg-btn {
            font-size: clamp(13px, 3.4vw, 15px);
            padding: clamp(10px, 2.6vw, 14px) clamp(18px, 4vw, 26px);
          }
        }
      `}</style>
    </section>
  );
}
