import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpLeft,
  ChevronDown,
  Layers,
  ShieldCheck,
  Award,
  Clock,
  Sparkles
} from 'lucide-react';
import { categories, services } from '../data/services';
import ServiceCard from '../components/ServiceCard';

export default function Home({ onAdd, lang }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: 'هل يمكنني إرسال التصميم الخاص بي للطباعة مباشرة؟',
      a: 'نعم، نقبل ملفات التصميم بصيغ (PDF, AI, PSD, CDR, TIFF, JPG) بجودة عالية. يقوم فريقنا بفحص المقاسات ومطابقة نظام الألوان قبل بدء الطباعة لضمان أدق نتيجة.'
    },
    {
      q: 'هل تقدمون خدمة التصميم إذا لم يكن لدي ملف جاهز؟',
      a: 'بالتأكيد، لدينا فريق تصميم متخصص لتنفيذ الهويات البصرية والمطبوعات التجارية من البداية بما يناسب طبيعة نشاطك.'
    },
    {
      q: 'كم يستغرق تجهيز الطلب؟',
      a: 'تعتمد المدة على نوع الخدمة والكمية والتشطيب المطلوب. أغلب المطبوعات الورقية والتجارية تُسلّم خلال 24 إلى 72 ساعة، مع توفر خيارات للطلبات المستعجلة.'
    },
    {
      q: 'أين يقع مقر المطبعة وكيف يتم الاستلام؟',
      a: 'مقرنا في طنطا: شارع شوقي تقاطع شارع الحلو (بجوار شركة الفيروز). كما يتوفر شحن وتوصيل لجميع مراكز محافظة الغربية وكافة المحافظات.'
    }
  ];

  return (
    <>
      {/* ==================== Hero Section ==================== */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="section-eyebrow">
              <Sparkles size={13} />
              استوديو تصميم وفصل ألوان وطباعة • طنطا
            </span>
            <h1>
              برند كرياتور<br />
              <span className="text-highlight">مطبوعات تصنع هيبة علامتك التجارية.</span>
            </h1>
            <p className="hero-description">
              نقدم حلول طباعة متكاملة تجمع بين دقة الألوان وجودة الخامات، لنحوّل أفكارك إلى مطبوعات تجارية وإعلانية تليق بنشاطك وتترك انطباعاً دائماً.
            </p>
            <div className="hero-actions">
              <Link to="/order" className="btn btn-primary">
                <span>ابدأ طلبك الآن</span>
                <ArrowUpLeft size={16} />
              </Link>
              <Link to="/services" className="btn btn-outline">
                <span>استكشف الخدمات</span>
              </Link>
            </div>
          </div>

          <div className="hero-visual-card">
            <div className="visual-header">
              <span className="visual-brand">PRINT CREATOR</span>
              <span className="visual-tag">STUDIO</span>
            </div>
            <div className="visual-body">
              <h3 className="visual-title">تصميم • فصل ألوان • طباعة</h3>
              <p className="visual-desc">
                عناية بكل تفصيلة مطبعية وهندسية لضمان خروج الألوان بأعلى درجة نقاء ومطابقة.
              </p>
              <div className="visual-features">
                <div className="visual-feature-item">
                  <span className="bullet" />
                  <span>مطبوعات تجارية ومكتبية</span>
                </div>
                <div className="visual-feature-item">
                  <span className="bullet" />
                  <span>لوحات وبنرات إعلانية</span>
                </div>
                <div className="visual-feature-item">
                  <span className="bullet" />
                  <span>تغليف وهدايا دعائية</span>
                </div>
              </div>
              <div className="visual-action">
                <Link to="/services" className="btn btn-primary btn-wide">
                  تصفح قائمة الخدمات
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== Categories Section ==================== */}
      <section className="section container">
        <div className="section-head">
          <span className="section-eyebrow">تخصصاتنا</span>
          <h2>حلول طباعة شاملة لكل احتياجاتك</h2>
          <p>
            سواء كنت تطلق مشروعاً جديداً أو تطوّر مطبوعات شركتك، نوفر لك كافة الخدمات بجودة عالية.
          </p>
        </div>

        <div className="category-grid">
          {categories.map((c) => (
            <Link to={'/services/' + c.id} className="category-card" key={c.id}>
              <div className="category-icon-box">
                <Layers size={22} />
              </div>
              <h3>{c.ar}</h3>
              <p>{c.desc}</p>
              <div className="category-footer">
                <span>عرض الخدمات</span>
                <ArrowUpLeft size={15} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ==================== Featured Services Section ==================== */}
      <section className="section section-surface">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">الخدمات المختارة</span>
            <h2>أبرز خدمات الطباعة</h2>
            <p>
              اختر الخدمة واضغط على "اطلب الآن" لإدخال المقاس والكمية والبدء مباشرة.
            </p>
          </div>

          <div className="service-grid">
            {services
              .filter((s) => ['business-cards', 'flyers', 'invoices', 'banners'].includes(s.id))
              .map((s) => (
                <ServiceCard key={s.id} service={s} lang={lang} onAdd={onAdd} />
              ))}
          </div>

          <div className="section-cta-center">
            <Link to="/services" className="btn btn-outline">
              <span>عرض جميع الخدمات ({services.length} خدمة)</span>
              <ArrowUpLeft size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== Why Brand Creator Section ==================== */}
      <section className="section container">
        <div className="section-head">
          <span className="section-eyebrow">معايير العمل</span>
          <h2>لماذا مطبعة برند كرياتور؟</h2>
          <p>
            نهتم بأدق التفاصيل لضمان ظهور مطبوعاتك بالشكل الاحترافي الذي يستحقه مشروعك.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-box">
            <div className="feature-icon">
              <ShieldCheck size={24} />
            </div>
            <h3>دقة ومطابقة في الألوان</h3>
            <p>
              معالجة فنية دقيقة لملفات التصميم لضمان تطابق الألوان المطبوعة مع درجات الهوية البصرية.
            </p>
          </div>

          <div className="feature-box">
            <div className="feature-icon">
              <Award size={24} />
            </div>
            <h3>خامات وتشطيبات متميزة</h3>
            <p>
              أوزان ورق كوشيه أصلية، خامات خارجية مقاومة للعوامل الجوية، وخيارات تشطيب متنوعة تشمل السلوفان والبصمة.
            </p>
          </div>

          <div className="feature-box">
            <div className="feature-icon">
              <Clock size={24} />
            </div>
            <h3>وضوح والتزام بالمواعيد</h3>
            <p>
              تسجيل واضح لمواصفات طلبك والتزام بتسليم العمل في الموعد المتفق عليه.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== FAQ Section ==================== */}
      <section className="section section-surface">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">الأسئلة الشائعة</span>
            <h2>إجابات على استفساراتكم</h2>
          </div>

          <div className="faq-container">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="faq-item"
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-question">
                  <h3>{faq.q}</h3>
                  <ChevronDown
                    size={18}
                    className={`faq-icon ${openFaq === idx ? 'open' : ''}`}
                  />
                </div>
                {openFaq === idx && (
                  <p className="faq-answer">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== Final CTA ==================== */}
      <section className="container">
        <div className="final-cta">
          <h2>جاهز لتنفيذ مطبوعاتك القادمة؟</h2>
          <p>
            تواصل مع فريق مطبعة برند كرياتور لبدء طلبك أو الاستفسار عن تفاصيل الخامات والأسعار.
          </p>
          <div className="cta-actions">
            <Link to="/order" className="btn btn-primary">
              <span>تسجيل طلب جديد</span>
              <ArrowUpLeft size={16} />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              <span>تواصل معنا</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
