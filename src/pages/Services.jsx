import React, { useState } from 'react';
import { Search, ArrowUpLeft } from 'lucide-react';
import { categories, services } from '../data/services';
import ServiceCard from '../components/ServiceCard';

export default function Services({ lang, onAdd }) {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('all');

  const filtered = services.filter(
    (s) =>
      (cat === 'all' || s.category === cat) &&
      `${s.ar} ${s.en} ${s.desc}`.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="page-pad">
      <div className="container">
        <div className="page-hero">
          <span className="section-eyebrow">دليل الخدمات</span>
          <h1>
            خدمات الطباعة والتصميم<br />
            <span className="text-highlight">بأعلى دقة تنفيذ في طنطا.</span>
          </h1>
          <p>
            تصفح قائمتنا للمطبوعات التجارية والورقية واللوحات والهدايا الدعائية، واضغط على "اطلب الآن" لتحديد المواصفات وبدء التنفيذ.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="category-grid" style={{ marginBottom: 48 }}>
          {categories.map((c) => (
            <div
              key={c.id}
              onClick={() => setCat(c.id === cat ? 'all' : c.id)}
              className={`category-card ${cat === c.id ? 'active' : ''}`}
              style={{ cursor: 'pointer' }}
            >
              <h3>{c.ar}</h3>
              <p>{c.desc}</p>
              <div className="category-footer">
                <span>{cat === c.id ? '✓ محدد حالياً' : 'تصفية حسب هذا القسم'}</span>
                <ArrowUpLeft size={15} />
              </div>
            </div>
          ))}
        </div>

        {/* Search & Filter Bar */}
        <div className="service-browser">
          <div className="search-box">
            <Search size={18} />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="ابحث عن خدمة (كروت، فواتير، بنر، استيكر...)"
            />
          </div>

          <div className="filter-row">
            <button
              className={cat === 'all' ? 'filter active' : 'filter'}
              onClick={() => setCat('all')}
            >
              جميع الخدمات <span>({services.length})</span>
            </button>
            {categories.map((c) => (
              <button
                className={cat === c.id ? 'filter active' : 'filter'}
                key={c.id}
                onClick={() => setCat(c.id)}
              >
                {c.ar}
              </button>
            ))}
          </div>

          {/* Service Cards Grid */}
          <div className="service-grid">
            {filtered.map((s) => (
              <ServiceCard key={s.id} service={s} lang={lang} onAdd={onAdd} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="empty-results-box">
              <h3>لم يتم العثور على نتائج</h3>
              <p>جرب كتابة اسم خدمة أخرى، أو تواصل معنا لمساعدتك في إيجاد ما تحتاجه.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
