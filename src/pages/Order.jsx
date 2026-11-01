import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { sanitizeText, isValidPhone, buildWhatsAppUrl, normalizeDigits } from '../lib/security';

const WHATSAPP_PHONE = '201004071071';

export default function Order() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: 'كروت شخصية فاخرة',
    size: 'A4',
    quantity: '500 قطعة',
    material: 'كوشيه فاخر 350 جرام',
    designStatus: 'ملف التصميم جاهز للطباعة',
    notes: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = sanitizeText(form.name, 100);
    const phone = sanitizeText(normalizeDigits(form.phone), 30);
    const size = sanitizeText(form.size, 60);
    const quantity = sanitizeText(form.quantity, 60);
    const notes = sanitizeText(form.notes, 500);

    if (!name) return setError('يرجى كتابة اسم العميل أو اسم النشاط.');
    if (!phone || !isValidPhone(phone)) return setError('يرجى إدخال رقم هاتف صحيح للتواصل.');

    setIsSubmitting(true);
    setError('');

    const orderId = 'PC-' + Math.floor(1000 + Math.random() * 9000);
    const now = new Date();

    const message = [
      `مرحباً مطبعة برند كرياتور 👋`,
      `طلب طباعة جديد (#${orderId})`,
      `---------------------------------`,
      `الاسم: ${name}`,
      `الهاتف: ${phone}`,
      `الخدمة: ${form.service}`,
      `المقاس: ${size}`,
      `الكمية: ${quantity}`,
      `الخامة: ${form.material}`,
      `حالة التصميم: ${form.designStatus}`,
      notes ? `ملاحظات: ${notes}` : '',
      `---------------------------------`,
      `التاريخ: ${now.toLocaleDateString('ar-EG')}`
    ].filter(Boolean).join('\n');

    const url = buildWhatsAppUrl(WHATSAPP_PHONE, message);

    try {
      window.open(url, '_blank', 'noopener,noreferrer');
      setSuccess(true);
    } catch {}

    setIsSubmitting(false);
  };

  return (
    <div className="page-pad">
      <div className="container">
        <div className="page-hero">
          <span className="section-eyebrow">طلب مباشر</span>
          <h1>تسجيل تفاصيل الطلب</h1>
          <p>
            أدخل مواصفات مطبوعاتك وسيقوم فريق العمل في مطبعة برند كرياتور بمراجعة التفاصيل وتأكيد موعد التسليم.
          </p>
        </div>

        <div className="order-form-container">
          <div className="order-form-card">
            {success ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <CheckCircle2 size={48} color="#10b981" style={{ margin: '0 auto 16px', display: 'block' }} />
                <h3 style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 10 }}>
                  تم إرسال تفاصيل طلبك بنجاح
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 24 }}>
                  تم فتح محادثة المتابعة مع فريق برند كرياتور لتأكيد السعر وميعاد الاستلام.
                </p>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setSuccess(false)}
                >
                  تسجيل طلب آخر
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <label className="field">
                    اسم العميل أو النشاط التجاري *
                    <input
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="الاسم بالكامل"
                    />
                  </label>

                  <label className="field">
                    رقم الهاتف للتواصل *
                    <input
                      required
                      type="tel"
                      maxLength={30}
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      placeholder="01xxxxxxxxx"
                    />
                  </label>

                  <label className="field">
                    نوع الخدمة المطلوبة *
                    <select
                      value={form.service}
                      onChange={(e) => update('service', e.target.value)}
                    >
                      <option value="كروت شخصية فاخرة">كروت شخصية فاخرة</option>
                      <option value="فواتير وإيصالات ودفاتر">فواتير وإيصالات ودفاتر</option>
                      <option value="فلايرات وبروشورات تسويقية">فلايرات وبروشورات تسويقية</option>
                      <option value="لوحات وبنرات إعلانية">لوحات وبنرات إعلانية</option>
                      <option value="استيكر لاصق وفينيل">استيكر لاصق وفينيل</option>
                      <option value="شنط وأكياس تغليف">شنط وأكياس تغليف</option>
                      <option value="منيو مطاعم وكافيهات">منيو مطاعم وكافيهات</option>
                      <option value="هدايا دعائية ومطبوعات مكتبية">هدايا دعائية ومطبوعات مكتبية</option>
                      <option value="تصميم هوية بصرية كاملة">تصميم هوية بصرية كاملة</option>
                      <option value="طلب مخصص">طلب مخصص</option>
                    </select>
                  </label>

                  <label className="field">
                    المقاس المطلوب *
                    <input
                      required
                      maxLength={60}
                      value={form.size}
                      onChange={(e) => update('size', e.target.value)}
                      placeholder="مثال: A4 أو 9×5 سم أو مقاس مخصص"
                    />
                  </label>

                  <label className="field">
                    الكمية المطلوبة *
                    <input
                      required
                      maxLength={60}
                      value={form.quantity}
                      onChange={(e) => update('quantity', e.target.value)}
                      placeholder="مثال: 500 أو 1000"
                    />
                  </label>

                  <label className="field">
                    نوع الخامة أو التشطيب
                    <input
                      maxLength={100}
                      value={form.material}
                      onChange={(e) => update('material', e.target.value)}
                      placeholder="مثال: كوشيه 350 جرام / سلوفان مطفي"
                    />
                  </label>

                  <label className="field full">
                    حالة ملف التصميم
                    <select
                      value={form.designStatus}
                      onChange={(e) => update('designStatus', e.target.value)}
                    >
                      <option value="ملف التصميم جاهز للطباعة (PDF / AI / PSD)">
                        ملف التصميم جاهز للطباعة (PDF / AI / PSD)
                      </option>
                      <option value="أحتاج تصميم من البداية">
                        أحتاج تصميم من البداية
                      </option>
                      <option value="عندي نموذج قديم وأريد تعديله">
                        عندي نموذج قديم وأريد تعديله
                      </option>
                    </select>
                  </label>

                  <label className="field full">
                    ملاحظات إضافية وتفاصيل التنفيذ
                    <textarea
                      rows="3"
                      maxLength={500}
                      value={form.notes}
                      onChange={(e) => update('notes', e.target.value)}
                      placeholder="أي مواصفات خاصة تتعلق بالألوان، التشطيب، أو موعد التسليم..."
                    />
                  </label>
                </div>

                {error && <div className="form-error">{error}</div>}

                <div style={{ marginTop: 24 }}>
                  <button
                    className="btn btn-primary btn-wide"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    <Send size={16} />
                    <span>{isSubmitting ? 'جاري الإرسال...' : 'إرسال تفاصيل الطلب'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
