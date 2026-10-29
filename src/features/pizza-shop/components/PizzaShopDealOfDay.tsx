'use client';

import { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const END_DATE = new Date('2027-10-04T12:00:00Z');

function getRemaining() {
  const diff = Math.max(0, END_DATE.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hrs: Math.floor((diff % 86400000) / 3600000),
    min: Math.floor((diff % 3600000) / 60000),
    sec: Math.floor((diff % 60000) / 1000),
  };
}

export function PizzaShopDealOfDay() {
  const [t, setT] = useState(getRemaining);

  useEffect(() => {
    const id = setInterval(() => setT(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const cells = [
    { value: t.days, label: 'Days' },
    { value: t.hrs, label: 'Hrs' },
    { value: t.min, label: 'Min' },
    { value: t.sec, label: 'Sec' },
  ];

  return (
    <section className="ps-dod">
      <div className="container-main">
        <div className="ps-dod-card">
          {/* Left — image */}
          <div className="ps-dod-image">
            <Image
              src="/pizza/img-with-text/img-with-text1.webp"
              alt="Deal of the Day"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(min-width: 992px) 50vw, 100vw"
            />
          </div>

          {/* Right — content + countdown */}
          <div className="ps-dod-content">
            <h2 className="ps-dod-title">Deal of The Day</h2>
            <p className="ps-dod-copy">
              Offers daily and weekly deals on our freshly baked pizzas, sides, and drinks.
              Exclusive offers for members — order now and save big.
            </p>

            <div className="ps-dod-clock">
              {cells.map((c, i) => (
                <Fragment key={c.label}>
                  <div className="ps-dod-cell">
                    <span className="ps-dod-val">{c.value}</span>
                    <span className="ps-dod-lbl">{c.label}</span>
                  </div>
                  {i < cells.length - 1 && (
                    <span className="ps-dod-sep">•</span>
                  )}
                </Fragment>
              ))}
            </div>

            <Link href="/pizza/shop" className="ps-dod-cta">Shop Now</Link>
          </div>
        </div>
      </div>

      <style>{`
        .ps-dod { padding: 0; }
        .ps-dod-card {
          display: grid;
          grid-template-columns: 1fr;
        }
        .ps-dod-image {
          position: relative;
          min-height: 260px;
          border-radius: 14px;
          overflow: hidden;
        }
        .ps-dod-content {
          background: rgb(20, 20, 20);
          color: #fff;
          padding: 40px 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .ps-dod-title {
          font-size: 30px;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 14px;
          color: #fff;
        }
        .ps-dod-copy {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.6;
          margin-bottom: 28px;
          max-width: 420px;
        }

        /* Countdown */
        .ps-dod-clock {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }
        .ps-dod-cell {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        .ps-dod-val {
          font-size: 28px;
          font-weight: 800;
          line-height: 1;
          color: #fff;
        }
        .ps-dod-lbl {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.3px;
          color: rgba(255, 255, 255, 0.55);
        }
        .ps-dod-sep {
          font-size: 20px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.35);
          line-height: 1;
          margin-bottom: 18px;
          flex-shrink: 0;
        }

        /* CTA */
        .ps-dod-cta {
          align-self: flex-start;
          background: #e84d1c;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.2px;
          padding: 13px 34px;
          border-radius: 40px;
          text-decoration: none;
          transition: background 260ms ease, transform 260ms ease, box-shadow 260ms ease;
          box-shadow: 0 4px 14px rgba(232, 77, 28, 0.35);
        }
        .ps-dod-cta:hover {
          background: #c73d12;
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(232, 77, 28, 0.45);
        }

        @media (min-width: 750px) {
          .ps-dod-title { font-size: 36px; }
          .ps-dod-content { padding: 50px 40px; }
          .ps-dod-image { min-height: 340px; }
        }
        @media (min-width: 992px) {
          .ps-dod-card { grid-template-columns: 1fr 1fr; height: 610px; align-items: stretch; }
          .ps-dod-title { font-size: 42px; margin-bottom: 18px; }
          .ps-dod-copy { font-size: 15px; margin-bottom: 36px; }
          .ps-dod-content { padding: 60px 56px; height: 100%; }
          .ps-dod-image { height: 100%; min-height: 0; }
          .ps-dod-val { font-size: 34px; }
          .ps-dod-clock { gap: 18px; margin-bottom: 40px; }
          .ps-dod-sep { font-size: 22px; }
          .ps-dod-cta { font-size: 15px; padding: 14px 36px; }
        }
      `}</style>
    </section>
  );
}
