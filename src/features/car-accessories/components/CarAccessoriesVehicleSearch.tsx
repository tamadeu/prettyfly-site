'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const collections = ['Wheels', 'Auto Parts', 'Accessories', 'Brakes', 'Audio & Electronics'];
const makes = ['Toyota', 'BMW', 'Ford', 'Honda', 'Mercedes', 'Audi', 'Volkswagen'];
const models = ['Corolla', 'X5', 'F-150', 'Civic', 'C-Class', 'A4', 'Golf', 'Camry'];
const years = ['2025', '2024', '2023'];
const engines = ['1.6L', '2.0L', '2.5L', '3.0L', '3.5L', 'V6', 'V8', 'Electric'];

/* Feather help-circle — stroke-based */
function InfoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={20}
      height={20}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} aria-hidden="true">
      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
    </svg>
  );
}

/* Tooltip wrapper — pure CSS hover, no JS state needed */
function Tip({ text }: { text: string }) {
  return (
    <span className="ca-afs-tip-wrap">
      <span className="ca-afs-info"><InfoIcon /></span>
      <span className="ca-afs-tip" role="tooltip">{text}</span>
    </span>
  );
}

export function CarAccessoriesVehicleSearch() {
  const router = useRouter();
  const [collection, setCollection] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [engine, setEngine] = useState('');
  const [loading, setLoading] = useState(false);

  const collectionSelected = collection !== '';

  function triggerLoading() {
    setLoading(true);
    setTimeout(() => setLoading(false), 700);
  }

  function handleSearch() {
    const params = new URLSearchParams();
    if (collection) params.set('category', collection);
    if (make) params.set('make', make);
    if (model) params.set('model', model);
    if (year) params.set('year', year);
    if (engine) params.set('engine', engine);
    router.push(`/car-accessories/shop?${params.toString()}`);
  }

  const lockedTip = 'Select a collection first';

  return (
    <section className="ca-afs-section">
      <div className="container-main">

        <div className="ca-afs-heading-wrap">
          <h2 className="ca-afs-heading">Find Your Dream Automobile</h2>
          <p className="ca-afs-sub">
            Discover the perfect automobile that matches your style, needs, and aspirations for the{' '}
            <span className="ca-afs-sub-accent">ultimate driving</span> experience.
          </p>
        </div>

        <div className="ca-afs-card">
          <div className="ca-afs-bar">

            {/* Collections — always enabled */}
            <div className="ca-afs-field">
              <Tip text="Browse all product collections" />
              <label className="ca-afs-label">Collections</label>
              <div className={`ca-afs-select-wrap${collection ? ' ca-afs-select-wrap--selected' : ''}`}>
                <select
                  className="ca-afs-select"
                  value={collection}
                  onChange={(e) => { setCollection(e.target.value); triggerLoading(); }}
                  aria-label="Collections"
                >
                  <option value="">Collections</option>
                  {collections.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <span className="ca-afs-chevron" aria-hidden="true"><ChevronIcon /></span>
              </div>
            </div>

            {/* Make */}
            <div className={`ca-afs-field${!collectionSelected ? ' ca-afs-field--locked' : ''}`}>
              <Tip text={!collectionSelected ? lockedTip : 'Filter by make'} />
              <label className="ca-afs-label">Make</label>
              <div className={`ca-afs-select-wrap${make ? ' ca-afs-select-wrap--selected' : ''}`}>
                <select
                  className="ca-afs-select"
                  value={make}
                  onChange={(e) => { setMake(e.target.value); triggerLoading(); }}
                  disabled={!collectionSelected}
                  aria-label="Make"
                >
                  <option value="">Make</option>
                  {makes.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
                <span className="ca-afs-chevron" aria-hidden="true"><ChevronIcon /></span>
              </div>
            </div>

            {/* Model */}
            <div className={`ca-afs-field${!collectionSelected ? ' ca-afs-field--locked' : ''}`}>
              <Tip text={!collectionSelected ? lockedTip : 'Filter by model'} />
              <label className="ca-afs-label">Model</label>
              <div className={`ca-afs-select-wrap${model ? ' ca-afs-select-wrap--selected' : ''}`}>
                <select
                  className="ca-afs-select"
                  value={model}
                  onChange={(e) => { setModel(e.target.value); triggerLoading(); }}
                  disabled={!collectionSelected}
                  aria-label="Model"
                >
                  <option value="">Model</option>
                  {models.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
                <span className="ca-afs-chevron" aria-hidden="true"><ChevronIcon /></span>
              </div>
            </div>

            {/* Year */}
            <div className={`ca-afs-field${!collectionSelected ? ' ca-afs-field--locked' : ''}`}>
              <Tip text={!collectionSelected ? lockedTip : 'Filter by year'} />
              <label className="ca-afs-label">Year</label>
              <div className={`ca-afs-select-wrap${year ? ' ca-afs-select-wrap--selected' : ''}`}>
                <select
                  className="ca-afs-select"
                  value={year}
                  onChange={(e) => { setYear(e.target.value); triggerLoading(); }}
                  disabled={!collectionSelected}
                  aria-label="Year"
                >
                  <option value="">Year</option>
                  {years.map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
                <span className="ca-afs-chevron" aria-hidden="true"><ChevronIcon /></span>
              </div>
            </div>

            {/* Engine */}
            <div className={`ca-afs-field${!collectionSelected ? ' ca-afs-field--locked' : ''}`}>
              <Tip text={!collectionSelected ? lockedTip : 'Filter by engine'} />
              <label className="ca-afs-label">Engine</label>
              <div className={`ca-afs-select-wrap${engine ? ' ca-afs-select-wrap--selected' : ''}`}>
                <select
                  className="ca-afs-select"
                  value={engine}
                  onChange={(e) => { setEngine(e.target.value); triggerLoading(); }}
                  disabled={!collectionSelected}
                  aria-label="Engine"
                >
                  <option value="">Engine</option>
                  {engines.map((eng) => (
                    <option key={eng} value={eng}>{eng}</option>
                  ))}
                </select>
                <span className="ca-afs-chevron" aria-hidden="true"><ChevronIcon /></span>
              </div>
            </div>

            {/* Search */}
            <button
              className={`ca-afs-search-btn${loading ? ' ca-afs-search-btn--loading' : ''}`}
              onClick={handleSearch}
              aria-label="Search parts"
            >
              {loading ? (
                <span className="ca-afs-spinner" aria-hidden="true" />
              ) : (
                <svg viewBox="0 0 24 24" fill="currentColor" width={22} height={22} aria-hidden="true">
                  <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" />
                </svg>
              )}
              <span>{loading ? 'Searching…' : 'Search'}</span>
            </button>

          </div>
        </div>
      </div>

      <style>{`
        .ca-afs-section { background-color: #fff; }

        /* ── Heading ── */
        .ca-afs-heading-wrap {
          text-align: center;
          margin-bottom: 40px;
        }
        .ca-afs-heading {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(26px, 2.8vw, 40px);
          font-weight: 700;
          color: #111;
          letter-spacing: -0.3px;
          margin: 0 0 16px;
        }
        .ca-afs-sub {
          font-size: clamp(13px, 1.15vw, 16px);
          color: #888;
          line-height: 1.65;
          margin: 0 auto;
          max-width: 560px;
        }
        .ca-afs-sub-accent { color: #5b72d6; }

        /* ── Filter card ── */
        .ca-afs-card {
          background: #fff;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
          height: auto;
          display: flex;
          align-items: center;
          padding: 28px;
        }

        /* ── Bar — flex-wrap so items flow to next line instead of overflowing ── */
        .ca-afs-bar {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          width: 100%;
          gap: 12px 16px;
        }

        /* ── Each filter field ── */
        .ca-afs-field {
          position: relative;
          flex: 1 1 150px;
          min-width: 140px;
          padding: 0;
          transition: opacity 200ms ease;
        }
        .ca-afs-field--locked {
          opacity: 0.4;
          pointer-events: none;
        }

        /* ── Label row ── */
        .ca-afs-label {
          font-size: 16px;
          font-weight: 600;
          color: #555;
          letter-spacing: 0.2px;
          display: block;
          margin-bottom: 5px;
          white-space: nowrap;
        }

        /* ── Tooltip icon: absolute top-right corner of field item ── */
        .ca-afs-tip-wrap {
          position: absolute;
          top: 4px;
          right: 4px;
          display: inline-flex;
          align-items: center;
          z-index: 10;
        }
        .ca-afs-info {
          display: inline-flex;
          align-items: center;
          color: #bbb;
          cursor: default;
          transition: color 150ms ease;
        }
        .ca-afs-tip-wrap:hover .ca-afs-info {
          color: #5b72d6;
        }
        .ca-afs-tip {
          position: absolute;
          bottom: calc(100% + 8px);
          left: auto;
          right: 0;
          transform: none;
          background: #1a1a2e;
          color: #fff;
          font-size: 12px;
          font-weight: 500;
          line-height: 1.4;
          padding: 7px 12px;
          border-radius: 6px;
          white-space: normal;
          max-width: 200px;
          pointer-events: none;
          opacity: 0;
          transition: opacity 150ms ease;
          z-index: 100;
          letter-spacing: 0;
        }
        /* Down arrow — aligned to icon center (tip-wrap is 20px wide, right-aligned) */
        .ca-afs-tip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: auto;
          right: 8px;
          transform: none;
          border: 5px solid transparent;
          border-top-color: #1a1a2e;
        }
        .ca-afs-tip-wrap:hover .ca-afs-tip {
          opacity: 1;
        }

        /* ── Select wrapper — position:relative so chevron can be absolute-overlaid ── */
        .ca-afs-select-wrap {
          position: relative;
          border: 1.5px solid #e0e0e0;
          border-radius: 6px;
          background-color: #f9f9f9;
          transition: border-color 160ms ease;
        }
        .ca-afs-select-wrap:hover {
          border-color: #222;
        }
        .ca-afs-select-wrap:focus-within {
          border-color: #222;
        }
        /* Persistent border after selection — stays until reload (React state = no localStorage) */
        .ca-afs-select-wrap--selected {
          border-color: #222;
        }

        /* ── Native select fills the full wrapper; right padding reserves chevron space ── */
        .ca-afs-select {
          display: block;
          width: 100%;
          padding: 10px 32px 10px 12px;
          font-size: clamp(13px, 1.25vw, 16px);
          font-weight: 500;
          color: #222;
          background: transparent;
          border: none;
          outline: none;
          appearance: none;
          cursor: pointer;
          font-family: inherit;
        }
        .ca-afs-select:disabled {
          cursor: not-allowed;
          color: #bbb;
        }

        /* ── Option padding ── */
        .ca-afs-select option {
          padding: 12px 20px;
          font-size: 15px;
        }

        /* ── Chevron: absolute overlay — pointer-events:none lets clicks fall through to select ── */
        .ca-afs-chevron {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          color: #aaa;
          display: inline-flex;
          align-items: center;
          pointer-events: none;
        }

        /* ── Search button ── */
        .ca-afs-search-btn {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 10px;
          background-color: #5b72d6;
          color: #fff;
          border: none;
          cursor: pointer;
          padding: 14px 32px;
          font-size: 17px;
          font-weight: 600;
          font-family: inherit;
          border-radius: 8px;
          transition: background-color 200ms ease;
          white-space: nowrap;
        }
        .ca-afs-search-btn:hover { background-color: #4a62c8; }
        .ca-afs-search-btn--loading {
          opacity: 0.88;
          cursor: default;
        }

        /* ── Spinner ring ── */
        .ca-afs-spinner {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 2.5px solid rgba(255, 255, 255, 0.35);
          border-top-color: #fff;
          animation: ca-afs-spin 0.65s linear infinite;
          flex-shrink: 0;
        }
        @keyframes ca-afs-spin {
          to { transform: rotate(360deg); }
        }

        /* ── Mobile (≤749 px) — 2-col grid, Collections full-width, Search full-width ── */
        @media (max-width: 749px) {
          .ca-afs-card { padding: 20px 16px; }
          .ca-afs-bar { gap: 10px 12px; }
          .ca-afs-field { flex: 0 0 calc(50% - 6px); min-width: 0; }
          .ca-afs-field:first-child { flex: 0 0 100%; }
          .ca-afs-search-btn { flex: 0 0 100%; justify-content: center; padding: 14px 32px; }
          .ca-afs-heading { margin-bottom: 10px; }
        }
      `}</style>
    </section>
  );
}
