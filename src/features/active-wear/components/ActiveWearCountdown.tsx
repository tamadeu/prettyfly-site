'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import { text, type CmsContent } from '../cms';

function IconArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

const pad = (n: number) => String(n).padStart(2, '0');

/* Live countdown timer — identical to the Promo Banner (Limited Time Offer)
   countdown in the centre of the Default Fashion homepage. Targets a far-future
   date so it keeps ticking and never reads "closed". */
const DEFAULT_END = '2029-01-01T00:00:00';

function CountdownTimer({ endsAt }: { endsAt: string }) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const parsed = new Date(endsAt).getTime();
    const target = Number.isNaN(parsed) ? new Date(DEFAULT_END).getTime() : parsed;
    const update = () => {
      const diff = Math.max(0, target - Date.now());
      setTime({
        days:    Math.floor(diff / 86_400_000),
        hours:   Math.floor((diff % 86_400_000) / 3_600_000),
        minutes: Math.floor((diff % 3_600_000)  / 60_000),
        seconds: Math.floor((diff % 60_000)      / 1_000),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [endsAt]);

  return (
    <div className="awcd-countdown">
      {[
        { val: String(time.days), label: 'Dias' },
        { val: pad(time.hours),   label: 'H'  },
        { val: pad(time.minutes), label: 'Min'  },
        { val: pad(time.seconds), label: 'Seg'  },
      ].map(({ val, label }) => (
        <div key={label} className="awcd-cd-cell">
          <span className="awcd-cd-val">{val}</span>
          <span className="awcd-cd-lbl">{label}</span>
        </div>
      ))}
    </div>
  );
}

export function ActiveWearCountdown({ content }: { content?: CmsContent }) {
  return (
    <section>
      <div className="container-main">
        <div className="awcd-bar">
          <div className="awcd-text">
            <h3 className="awcd-heading">{text(content?.title, 'Oferta por tempo limitado')}</h3>
            <p className="awcd-desc">
              {text(content?.text, 'Destaque seu produto, coleção ou publicação com uma imagem e uma mensagem especial.')}
            </p>
          </div>

          <div className="awcd-center">
            <CountdownTimer endsAt={text(content?.ends_at, DEFAULT_END)} />
          </div>

          <div className="awcd-cta-wrap">
            <Link href={text(content?.button_url, '/shop')} className="awcd-cta">
              {text(content?.button_label, 'Comprar agora')}
              <IconArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .awcd-bar {
          background-color: #f4f5f3;
          padding: clamp(28px, 4vw, 44px) clamp(20px, 4vw, 56px);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 20px;
        }
        .awcd-heading {
          font-size: clamp(22px, 3vw, 28px);
          font-weight: 700;
          color: #222;
          margin-bottom: 10px;
        }
        .awcd-desc {
          font-size: 15px;
          color: #777;
          line-height: 1.6;
          max-width: 360px;
        }

        /* ── Countdown cells — same as the Default Fashion Promo Banner ── */
        .awcd-countdown {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        .awcd-cd-cell {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 1px solid #d4d4d4;
          border-radius: 4px;
          background: #fff;
          width: 60px;
          height: 58px;
          box-sizing: border-box;
          flex-shrink: 0;
        }
        .awcd-cd-val {
          font-size: 19px;
          font-weight: 600;
          color: #222;
          line-height: 1;
          font-variant-numeric: tabular-nums;
        }
        .awcd-cd-lbl {
          font-size: 11px;
          font-weight: 400;
          color: #888;
          margin-top: 4px;
          line-height: 1;
        }

        .awcd-cta {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 16px; font-weight: 600; color: #222;
          text-decoration: none;
          border-bottom: 1.5px solid #222;
          padding-bottom: 3px;
          transition: color 200ms ease, border-color 200ms ease, gap 200ms ease;
        }
        .awcd-cta:hover { gap: 10px; }

        /* Desktop: 3-column bar — text | countdown | cta */
        @media (min-width: 992px) {
          .awcd-bar {
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            align-items: center;
            text-align: left;
            gap: 32px;
          }
          .awcd-center { display: flex; justify-content: center; }
          .awcd-cta-wrap { display: flex; justify-content: flex-end; }
          .awcd-heading { margin-bottom: 12px; }
          .awcd-cd-cell { width: 66px; height: 64px; }
          .awcd-cd-val { font-size: 21px; }
          .awcd-cd-lbl { font-size: 12px; }
        }

        /* Small phones */
        @media (max-width: 480px) {
          .awcd-countdown { gap: 6px; }
          .awcd-cd-cell { width: 52px; height: 52px; }
          .awcd-cd-val { font-size: 16px; }
          .awcd-cd-lbl { font-size: 10px; }
        }
      `}</style>
    </section>
  );
}
