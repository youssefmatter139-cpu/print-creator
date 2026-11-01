import React, { useState } from 'react';
import { X, ArrowUpLeft } from 'lucide-react';

const pieces = [
  ['Brand Identity', 'هوية تجارية متكاملة', 'paper'],
  ['Business Cards', 'كروت شخصية فاخرة', 'paper'],
  ['Storefront Signage', 'واجهات ولوحات إعلانية', 'signage'],
  ['Packaging Box', 'علب وتغليف منتجات', 'commercial'],
  ['Event Banners', 'مطبوعات مؤتمرات وفعاليات', 'paper'],
  ['Branded Gifts', 'هدايا ترويجية ومكتبية', 'gifts'],
  ['Restaurant Menu', 'قوائم طعام للمطاعم', 'paper'],
  ['Outdoor Billboard', 'بنرات ولوحات خارجية', 'signage'],
  ['Corporate Stationery', 'أوراق ومراسلات رسمية', 'commercial']
];

const graphics = [
  ['PRINT', 'CREATOR'],
  ['QUALITY', 'FIRST'],
  ['SHARP', 'COLORS'],
  ['CRAFTED', 'PRINT']
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [active, setActive] = useState(null);

  const filters = [
    ['all', 'جميع الأعمال'],
    ['paper', 'مطبوعات ورقية'],
    ['commercial', 'تجاري وتغليف'],
    ['signage', 'لوحات وبنرات'],
    ['gifts', 'هدايا وتذكارات']
  ];

  return (
    <div className="page-pad">
      <div className="container">
        <div className="page-hero">
          <span className="section-eyebrow">أعمالنا</span>
          <h1>نماذج من أعمال برند كرياتور</h1>
          <p>
            مجموعة مختارة توضح جودة التنفيذ والتنوع في المطبوعات التجارية والورقية والإعلانية.
          </p>
        </div>

        <div className="filter-row">
          {filters.map(([id, label]) => (
            <button
              key={id}
              className={`filter ${filter === id ? 'active' : ''}`}
              onClick={() => setFilter(id)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {pieces
            .filter((p) => filter === 'all' || p[2] === filter)
            .map((p, i) => {
              const words = graphics[i % graphics.length];
              return (
                <button
                  className="gallery-piece"
                  key={p[0]}
                  onClick={() => setActive(p)}
                  aria-label={p[1]}
                >
                  <div className="gallery-visual">
                    <span className="gallery-stamp">PRINT CREATOR</span>
                    <b>{String(i + 1).padStart(2, '0')}</b>
                    <span className="gallery-graphic">
                      {words.map((w, idx) => (
                        <React.Fragment key={idx}>
                          {w}
                          <br />
                        </React.Fragment>
                      ))}
                    </span>
                  </div>
                  <div className="gallery-caption">
                    <div>
                      <h3>{p[1]}</h3>
                      <small>{p[0]}</small>
                    </div>
                    <ArrowUpLeft size={16} />
                  </div>
                </button>
              );
            })}
        </div>
      </div>

      {active && (
        <div className="modal-backdrop" onClick={() => setActive(null)}>
          <div className="lightbox" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setActive(null)} aria-label="إغلاق">
              <X size={18} />
            </button>
            <div className="gallery-visual lightbox-art">
              <span className="gallery-stamp">PRINT CREATOR</span>
              <span className="gallery-graphic">
                PRINT<br />CREATOR
              </span>
            </div>
            <h2>{active[1]}</h2>
            <p>{active[0]} — نموذج توضيحي لمطبوعات برند كرياتور.</p>
          </div>
        </div>
      )}
    </div>
  );
}
