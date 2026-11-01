import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, ArrowUpLeft } from 'lucide-react';
import Brand from './Brand';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand-col">
          <Brand />
          <p className="footer-desc">
            مطبعة برند كرياتور في طنطا — متخصصون في التصميم الإبداعي، فصل الألوان، والطباعة
            بأعلى المعايير الاحترافية للمطبوعات التجارية والإعلانية.
          </p>
          <div className="footer-badges">
            <span>تصميمات</span> • <span>فصل ألوان</span> • <span>طباعة</span>
          </div>
        </div>

        <div>
          <h4>روابط سريعة</h4>
          <div className="footer-links">
            <Link to="/">الرئيسية</Link>
            <Link to="/services">دليل الخدمات</Link>
            <Link to="/gallery">أعمالنا</Link>
            <Link to="/about">من نحن</Link>
            <Link to="/order">طلب مباشر</Link>
            <Link to="/privacy">الخصوصية</Link>
          </div>
        </div>

        <div>
          <h4>بيانات التواصل</h4>
          <div className="footer-contact-list">
            <div className="footer-contact-item">
              <Phone size={15} />
              <a href="tel:01004071071">01004071071</a>
            </div>
            <div className="footer-contact-item">
              <Phone size={15} />
              <a href="tel:01270581152">01270581152</a>
            </div>
            <div className="footer-contact-item">
              <Mail size={15} />
              <a href="mailto:printcreator.tanta@gmail.com">printcreator.tanta@gmail.com</a>
            </div>
            <div className="footer-contact-item">
              <MapPin size={15} />
              <span>طنطا — شارع شوقي تقاطع شارع الحلو</span>
            </div>
          </div>
        </div>

        <div>
          <h4>ابدأ طلبك</h4>
          <p className="footer-cta-text">
            سجّل مواصفات مطبوعاتك وسيقوم فريق العمل بمتابعة التفاصيل معك لبدء التنفيذ.
          </p>
          <Link className="btn btn-primary btn-wide" to="/order">
            <span>تسجيل طلب جديد</span>
            <ArrowUpLeft size={16} />
          </Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} مطبعة برند كرياتور — Print Creator. جميع الحقوق محفوظة.</span>
        <span>طنطا، محافظة الغربية</span>
      </div>
    </footer>
  );
}
