import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { ArrowUpLeft } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import { categories } from './data/services';
import { useI18n } from './lib/i18n';
import Home from './pages/Home';
import Services from './pages/Services';
import Category from './pages/Category';
import Order from './pages/Order';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  const [modal, setModal] = useState(null);
  const { lang } = useI18n();
  const location = useLocation();

  useEffect(() => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {}
  }, [location.pathname]);

  const add = (service) => setModal(service);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home onAdd={add} lang={lang} />} />
          <Route path="/services" element={<Services onAdd={add} lang={lang} />} />
          {categories.map((c) => (
            <Route
              key={c.id}
              path={'/services/' + c.id}
              element={<Category category={c} onAdd={add} lang={lang} />}
            />
          ))}
          <Route path="/order" element={<Order />} />
          <Route path="/gallery" element={<Gallery lang={lang} />} />
          <Route path="/about" element={<About lang={lang} />} />
          <Route path="/contact" element={<Contact lang={lang} />} />
          <Route
            path="/privacy"
            element={
              <div className="container page-pad" style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
                <span className="section-eyebrow">الخصوصية</span>
                <h1 style={{ fontSize: 32, fontWeight: 800, color: '#fff', margin: '14px 0' }}>
                  سياسة الخصوصية
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.9 }}>
                  في مطبعة برند كرياتور، نحرص تماماً على سرية وأمان بيانات عملائنا. بيانات التواصل وتفاصيل المطبوعات والتصميمات تُستخدم حصراً لغرض مراجعة وتنفيذ طلبك ولا تتم مشاركتها أو بيعها لأي جهة أخرى.
                </p>
                <div style={{ marginTop: 24 }}>
                  <Link className="btn btn-outline" to="/contact">
                    <span>تواصل معنا</span>
                    <ArrowUpLeft size={15} />
                  </Link>
                </div>
              </div>
            }
          />
          <Route
            path="*"
            element={
              <div className="container page-pad" style={{ textAlign: 'center', padding: '80px 20px' }}>
                <span style={{ fontSize: 80, fontWeight: 900, color: 'rgba(255, 255, 255, 0.1)', display: 'block' }}>
                  404
                </span>
                <h1 style={{ fontSize: 28, fontWeight: 800, color: '#fff', margin: '10px 0' }}>
                  الصفحة غير موجودة
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: 15, marginBottom: 24 }}>
                  الصفحة التي طلبتها غير متوفرة، يمكنك استكشاف خدماتنا أو العودة للرئيسية.
                </p>
                <Link className="btn btn-primary" to="/">
                  <span>العودة للرئيسية</span>
                </Link>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />

      {modal && (
        <OrderModal
          service={modal}
          lang={lang}
          onClose={() => setModal(null)}
        />
      )}
    </>
  );
}
