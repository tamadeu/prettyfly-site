'use client';

import { useEffect, useState } from 'react';
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

export function NutritionDealOfTheDay() {
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
    <section className="ndotd-section">
      <div className="container-main">
        <div className="ndotd-card">
          {/* Left — image */}
          <div className="ndotd-image">
            <Image
              src="/nutrition/img-with-text/img-with-text1.webp"
              alt="Deal of the Day"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(min-width: 992px) 50vw, 100vw"
            />
          </div>

          {/* Right — content + countdown */}
          <div className="ndotd-content">
            <h2 className="ndotd-title">Deal of The Day</h2>
            <p className="ndotd-copy">
              Offers daily and weekly discounts on food, litter, and health care items for pets.
              They also have membership discounts.
            </p>

            <div className="ndotd-clock">
              {cells.map((c) => (
                <div key={c.label} className="ndotd-cell">
                  <span className="ndotd-val">{String(c.value).padStart(3, '0').slice(-3)}</span>
                  <span className="ndotd-lbl">{c.label}</span>
                </div>
              ))}
            </div>

            <Link href="/nutrition/shop" className="ndotd-cta">SHOP NOW</Link>
          </div>
        </div>
      </div>

      <style>{`
        .ndotd-section { padding: 0; }
        .ndotd-card {
          display: grid;
          grid-template-columns: 1fr;
        }
        .ndotd-image {
          position: relative;
          min-height: 320px;
          border-radius: 14px;
          overflow: hidden;
        }
        .ndotd-content {
          background: #E94E1B;
          color: #fff;
          padding: 40px 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .ndotd-title {
          font-size: 30px;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 14px;
          color: #fff;
        }
        .ndotd-copy {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.55;
          margin-bottom: 24px;
          max-width: 420px;
        }
        .ndotd-clock {
          display: flex;
          gap: 10px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }
        .ndotd-cell {
          min-width: 64px;
          padding: 10px 12px;
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          border-radius: 6px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .ndotd-val {
          font-size: 22px;
          font-weight: 800;
          line-height: 1;
          color: #fff;
        }
        .ndotd-lbl {
          font-size: 11px;
          font-weight: 500;
          margin-top: 4px;
          letter-spacing: 0.5px;
          color: rgba(255, 255, 255, 0.85);
        }
        .ndotd-cta {
          align-self: flex-start;
          background: rgb(140, 255, 100);
          color: #0e1a0a;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.4px;
          padding: 13px 34px;
          border-radius: 40px;
          text-decoration: none;
          transition: background 260ms ease, color 260ms ease, transform 260ms ease, box-shadow 260ms ease;
          box-shadow: 0 4px 14px rgba(140, 255, 100, 0.3);
        }
        .ndotd-cta:hover {
          background: #fff;
          color: #000;
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        @media (min-width: 750px) {
          .ndotd-title { font-size: 36px; }
          .ndotd-content { padding: 50px 40px; }
          .ndotd-image { min-height: 420px; }
        }
        @media (min-width: 992px) {
          .ndotd-card { grid-template-columns: 1fr 1fr; height: 720px; align-items: stretch; }
          .ndotd-title { font-size: 42px; margin-bottom: 18px; }
          .ndotd-copy { font-size: 15px; margin-bottom: 32px; }
          .ndotd-content { padding: 60px 56px; height: 100%; }
          .ndotd-image { height: 100%; min-height: 0; }
          .ndotd-val { font-size: 26px; }
          .ndotd-cell { min-width: 72px; padding: 12px 14px; }
          .ndotd-cta { font-size: 15px; padding: 14px 36px; }
        }
      `}</style>
    </section>
  );
}
