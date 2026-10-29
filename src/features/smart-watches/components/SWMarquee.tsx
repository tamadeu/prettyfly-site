'use client';

function IconStar() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
      <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z" />
    </svg>
  );
}

/* Alternate stroke ↔ solid to match the screenshot */
const ITEMS = [
  { text: 'Track Your Progress',   stroke: true  },
  { text: 'Ultimate Sales Boost',  stroke: false },
  { text: 'Elevate Your Fitness',  stroke: true  },
  { text: 'Get Fit Now',           stroke: false },
  { text: 'Stay Connected Always', stroke: true  },
  { text: 'Style Your Wrist',      stroke: false },
];

/* Duplicate once — animation moves -50% so the loop is seamless */
const TRACK = [...ITEMS, ...ITEMS];

export function SWMarquee() {
  return (
    <section className="swmq-section">
      <div className="swmq-track" aria-hidden="true">
        {TRACK.map((item, i) => (
          <span key={i} className="swmq-item">
            <span className={`swmq-text${item.stroke ? ' swmq-text--stroke' : ' swmq-text--solid'}`}>
              {item.text}
            </span>
            <span className="swmq-star">
              <IconStar />
            </span>
          </span>
        ))}
      </div>

      <style>{`
        /* ── Section ── */
        .swmq-section {
          background: rgb(27, 43, 62);
          height: 100px;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        /* ── Scrolling track ── */
        .swmq-track {
          display: flex;
          align-items: center;
          white-space: nowrap;
          width: max-content;
          /* -50% = one full set of items (half the duplicated track) */
          animation: swmqScroll 28s linear infinite;
        }
        @keyframes swmqScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .swmq-section:hover .swmq-track {
          animation-play-state: paused;
        }

        /* ── Each item: text + star separator ── */
        .swmq-item {
          display: inline-flex;
          align-items: center;
          gap: 56px;
          padding-right: 56px;
        }

        /* ── Shared text base ── */
        .swmq-text {
          font-size: 28px;
          letter-spacing: 0.02em;
          line-height: 1;
          white-space: nowrap;
        }

        /* Style 1 — outline / stroke (hollow letters, white outline) */
        .swmq-text--stroke {
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.72);
          font-weight: 600;
        }

        /* Style 2 — solid bold white */
        .swmq-text--solid {
          color: #fff;
          font-weight: 700;
        }

        /* ── Star separator ── */
        .swmq-star {
          display: inline-flex;
          align-items: center;
          flex-shrink: 0;
          color: #fff;
        }
      `}</style>
    </section>
  );
}
