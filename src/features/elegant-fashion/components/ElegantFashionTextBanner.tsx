'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';

const TEXT =
  'Our latest fashion collection offers something truly special for every occasion and every personality. Featuring an expansive array of elegant evening wear, refined professional attire, and chic casual outfits, this collection ensures you are always prepared — whether it\'s a boardroom meeting, a weekend brunch, or a night out. Crafted with premium fabrics and a keen eye for detail, every piece is designed to make you feel confident, stylish, and effortlessly put together.';

const words = TEXT.split(' ');

function Word({
  word,
  progress,
  start,
  end,
}: {
  word: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  return (
    <motion.span style={{ opacity, color: '#fff', display: 'inline' }}>
      {word}{' '}
    </motion.span>
  );
}

export function ElegantFashionTextBanner() {
  const ref = useRef<HTMLElement>(null);

  /* Tighter offset = reveal starts earlier and finishes faster */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.75', 'end 0.1'],
  });

  return (
    <section ref={ref} className="eftb-section">
      <div className="container-main">
        <div className="eftb-card">
          <p className="eftb-text">
            {words.map((word, i) => {
              /* Compress range to 0→0.72 so all words reveal before the
                 section fully exits — makes the animation feel snappier */
              const start = (i / words.length) * 0.72;
              const end   = ((i + 1) / words.length) * 0.72;
              return (
                <Word
                  key={i}
                  word={word}
                  progress={scrollYProgress}
                  start={start}
                  end={end}
                />
              );
            })}
          </p>
        </div>
      </div>

      <style>{`
        .eftb-card {
          width: 100%;
          height: 540px;
          background: #0a1e33;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(28px, 5vw, 64px) 180px;
          box-sizing: border-box;
        }

        @media (max-width: 991px) {
          .eftb-card { padding: 48px 64px; }
        }
        @media (max-width: 749px) {
          .eftb-card { padding: 32px 24px; }
        }

        .eftb-text {
          font-size: clamp(18px, 3.2vw, 42px);
          font-weight: 500;
          line-height: 1.18;
          letter-spacing: 0.01em;
          word-spacing: -0.04em;
          text-align: justify;
          color: rgba(255, 255, 255, 0.18);
          margin: 0;
        }
      `}</style>
    </section>
  );
}
