'use client';

const items = [
  'Todas as lojas estão abertas, assim como nossas operações on-line',
  'Smartphones',
  'Loja de eletrônicos',
  'Notebooks e computadores',
  'Câmera sem fio',
  'Fones de ouvido e áudio',
  'iPad e tablet',
  'Boas-vindas à nossa loja',
];

export function MegastoreCategoriesMarquee() {
  const repeated = [...items, ...items];

  return (
    <section className="ms-cm">
      <div className="ms-cm-track">
        {repeated.map((item, i) => (
          <span key={i} className="ms-cm-item">
            <span className="ms-cm-dot" aria-hidden="true" />
            <span className="ms-cm-label">{item}</span>
          </span>
        ))}
      </div>

      <style jsx>{`
        .ms-cm {
          background-color: #232f3f;
          color: #fff;
          height: 85px;
          display: flex;
          align-items: center;
          overflow: hidden;
          position: relative;
        }
        .ms-cm-track {
          display: flex;
          width: max-content;
          gap: 15px;
          align-items: center;
          animation: ms-cm-scroll 18s linear infinite;
        }
        .ms-cm:hover .ms-cm-track { animation-play-state: paused; }
        .ms-cm-item {
          display: inline-flex;
          align-items: center;
          gap: 15px;
          font-size: clamp(15px, 1.15vw, 17px);
          font-weight: 500;
          white-space: nowrap;
          color: #fff;
        }
        .ms-cm-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #fff;
          flex-shrink: 0;
        }
        .ms-cm-label { letter-spacing: 0.2px; }

        @keyframes ms-cm-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
