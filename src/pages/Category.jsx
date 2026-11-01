import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpLeft, CheckCircle2 } from 'lucide-react';
import { services } from '../data/services';
import ServiceCard from '../components/ServiceCard';

export default function Category({ category, onAdd, lang }) {
  const list = services.filter((s) => s.category === category.id);

  return (
    <div className="page-pad">
      <div className="container">
        <div className="breadcrumb-nav">
          <Link to="/">الرئيسية</Link>
          <span>/</span>
          <Link to="/services">الخدمات</Link>
          <span>/</span>
          <span className="current">{category.ar}</span>
        </div>

        <div className="page-hero">
          <span className="section-eyebrow">
            {category.ar}
          </span>
          <h1>
            {category.ar}<br />
            <span className="text-highlight">تنفيذ متقن واهتمام بأدق التفاصيل.</span>
          </h1>
          <p>{category.desc}</p>
        </div>

        <div className="section-head" style={{ marginBottom: 35 }}>
          <h2>الخدمات المتاحة ({list.length})</h2>
          <p>اختر الخدمة المناسبة واضغط على "اطلب الآن" لتحديد المقاس والكمية.</p>
        </div>

        <div className="service-grid">
          {list.map((s) => (
            <ServiceCard key={s.id} service={s} lang={lang} onAdd={onAdd} />
          ))}
        </div>

        {/* Custom Quote Strip */}
        <div className="custom-quote-strip">
          <span className="section-eyebrow">طلب خاص</span>
          <h3>هل تبحث عن مواصفات أو خامات مخصصة؟</h3>
          <p>
            فريق مطبعة برند كرياتور جاهز لمساعدتك في تنفيذ أي مطبوعات بمقاسات أو تشطيبات خاصة تناسب مشروعك.
          </p>
          <div style={{ marginTop: 20 }}>
            <Link to="/order" className="btn btn-primary">
              <span>تسجيل طلب مخصص</span>
              <ArrowUpLeft size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
