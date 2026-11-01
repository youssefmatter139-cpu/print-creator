import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { sanitizeText, isValidPhone, buildWhatsAppUrl } from '../lib/security';

const WHATSAPP_PHONE = '201004071071';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: 'مطبوعات تجارية', details: '' });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    const name = sanitizeText(form.name, 100);
    const phone = sanitizeText(form.phone, 30);
    const details = sanitizeText(form.details, 600);

    if (!name) return setError('يرجى كتابة الاسم بالكامل.');
    if (!phone || !isValidPhone(phone)) return setError('يرجى إدخال رقم هاتف صحيح.');

    setIsSubmitting(true);
    setError('');

    const message = [
      `مرحباً مطبعة برند كرياتور 👋`,
      `استفسار جديد من الموقع:`,
      `---------------------------------`,
      `الاسم: ${name}`,
      `الهاتف: ${phone}`,
      `نوع الخدمة: ${form.service || 'عام'}`,
      details ? `التفاصيل: ${details}` : '',
      `---------------------------------`
    ].filter(Boolean).join('\n');

    const url = buildWhatsAppUrl(WHATSAPP_PHONE, message);

    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
      setIsSubmitting(false);
    }, 250);
  };

  return (
    <div className="page-pad">
      <div className="container">
        <div className="page-hero">
          <span className="section-eyebrow">تواصل معنا</span>
          <h1>نسعد بالإجابة على استفساراتكم</h1>
          <p>
            فريق مطبعة برند كرياتور في طنطا جاهز لمساعدتك في اختيار أنسب خامات ومقاسات لمطبوعاتك.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details */}
          <div className="contact-info-column">
            <div className="contact-card-box">
              <div className="contact-icon-box">
                <Phone size={20} />
              </div>
              <div>
                <small className="contact-label">الهاتف الرئيسي</small>
                <a href="tel:01004071071" className="contact-value">01004071071</a>
              </div>
            </div>

            <div className="contact-card-box">
              <div className="contact-icon-box">
                <Phone size={20} />
              </div>
              <div>
                <small className="contact-label">الخط الإضافي</small>
                <a href="tel:01270581152" className="contact-value">01270581152</a>
              </div>
            </div>

            <div className="contact-card-box">
              <div className="contact-icon-box">
                <MessageCircle size={20} />
              </div>
              <div>
                <small className="contact-label">واتساب الاستوديو</small>
                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-value"
                >
                  01004071071
                </a>
              </div>
            </div>

            <div className="contact-card-box">
              <div className="contact-icon-box">
                <Mail size={20} />
              </div>
              <div>
                <small className="contact-label">البريد الإلكتروني</small>
                <a href="mailto:printcreator.tanta@gmail.com" className="contact-value">
                  printcreator.tanta@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-card-box">
              <div className="contact-icon-box">
                <MapPin size={20} />
              </div>
              <div>
                <small className="contact-label">المقر الرئيسي</small>
                <p className="contact-address">
                  طنطا — شارع شوقي تقاطع شارع الحلو، بجوار شركة الفيروز
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-panel">
            <h2 className="form-title">إرسال استفسار أو طلب تسعير</h2>
            <p className="form-subtitle">
              اكتب تفاصيل طلبك وسنقوم بالرد عليك في أقرب وقت.
            </p>

            <form onSubmit={submit}>
              <div className="form-stack">
                <label className="field">
                  الاسم بالكامل *
                  <input
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="الاسم"
                  />
                </label>

                <label className="field">
                  رقم الهاتف للتواصل *
                  <input
                    required
                    type="tel"
                    maxLength={30}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="01xxxxxxxxx"
                  />
                </label>

                <label className="field">
                  نوع الخدمة المطلوبة
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                  >
                    <option value="مطبوعات تجارية (فواتير، أظرف، دفاتر)">مطبوعات تجارية (فواتير، أظرف، دفاتر)</option>
                    <option value="مطبوعات ورقية (كروت، بروشورات، فلايرات)">مطبوعات ورقية (كروت، بروشورات، فلايرات)</option>
                    <option value="لوحات وبنرات إعلانية">لوحات وبنرات إعلانية</option>
                    <option value="هدايا دعائية ومطبوعات مكتبية">هدايا دعائية ومطبوعات مكتبية</option>
                    <option value="تصميم هوية بصرية">تصميم هوية بصرية</option>
                    <option value="استفسار عام">استفسار عام</option>
                  </select>
                </label>

                <label className="field">
                  تفاصيل الاستفسار
                  <textarea
                    rows="3"
                    maxLength={600}
                    value={form.details}
                    onChange={(e) => setForm({ ...form, details: e.target.value })}
                    placeholder="المقاس، الكمية التقريبية، أو أي استفسار حول الخامات..."
                  />
                </label>

                {error && <div className="form-error">{error}</div>}

                <button
                  className="btn btn-primary btn-wide"
                  type="submit"
                  disabled={isSubmitting}
                >
                  <Send size={15} />
                  <span>{isSubmitting ? 'جاري الإرسال...' : 'إرسال الاستفسار'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-panel">
          <div className="map-header">
            <div>
              <span className="section-eyebrow">موقعنا في طنطا</span>
              <h2>شارع شوقي تقاطع شارع الحلو</h2>
              <p>بجوار شركة الفيروز — طنطا، محافظة الغربية</p>
            </div>
            <a
              className="btn btn-outline"
              href="https://www.google.com/maps/search/?api=1&query=Tanta+Shawqi+Street+El+Halw+Street+El+Fayrouz+Company"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>فتح على خرائط جوجل</span>
              <MapPin size={15} />
            </a>
          </div>
          <iframe
            title="موقع مطبعة برند كرياتور في طنطا"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=Shawqi%20Street%20El%20Halw%20Street%20Tanta%20Egypt&t=&z=15&ie=UTF8&iwloc=&output=embed"
          />
        </div>
      </div>
    </div>
  );
}
