import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { sanitizeText, isValidPhone, buildWhatsAppUrl } from '../lib/security';

const WHATSAPP_PHONE = '201004071071';

export default function OrderModal({ service, onClose }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    size: 'A4',
    customSize: '',
    quantity: '100',
    material: 'كوشيه فاخر 350 جرام',
    printType: 'وجهين - ألوان كاملة',
    designStatus: 'جاهز معي ملف التصميم للطباعة',
    notes: ''
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const submit = (e) => {
    e.preventDefault();

    const name = sanitizeText(form.name, 100);
    const phone = sanitizeText(form.phone, 30);
    const customSize = sanitizeText(form.customSize, 60);
    const quantity = sanitizeText(form.quantity, 60);
    const notes = sanitizeText(form.notes, 500);

    if (!name) {
      return setError('يرجى كتابة اسم العميل أو اسم النشاط.');
    }
    if (!phone || !isValidPhone(phone)) {
      return setError('يرجى إدخال رقم هاتف صحيح للتواصل.');
    }
    if (form.size === 'مقاس مخصص' && !customSize) {
      return setError('يرجى تحديد المقاس المخصص المطلوب.');
    }

    setIsSubmitting(true);
    setError('');

    const finalSize = form.size === 'مقاس مخصص' ? customSize : form.size;
    const now = new Date();
    const orderId = 'PC-' + Math.floor(1000 + Math.random() * 9000);

    const messageLines = [
      `مرحباً مطبعة برند كرياتور 👋`,
      `طلب طباعة جديد (#${orderId})`,
      `---------------------------------`,
      `الخدمة: ${service.ar || service.name}`,
      `الاسم: ${name}`,
      `الهاتف: ${phone}`,
      `المقاس: ${finalSize}`,
      `الكمية: ${quantity}`,
      `الخامة: ${form.material}`,
      `الطباعة: ${form.printType}`,
      `حالة التصميم: ${form.designStatus}`,
      notes ? `ملاحظات: ${notes}` : '',
      `---------------------------------`,
      `التاريخ: ${now.toLocaleDateString('ar-EG')}`
    ].filter(Boolean).join('\n');

    const whatsappUrl = buildWhatsAppUrl(WHATSAPP_PHONE, messageLines);

    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setIsSubmitting(false);
      onClose();
    }, 250);
  };

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <section
        className="order-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="modal-head">
          <div>
            <span className="modal-tag">{service.ar || service.name}</span>
            <h2 id="modal-title">تفاصيل الطلب</h2>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="إغلاق">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={submit}>
          <div className="form-grid">
            <label className="field">
              اسم العميل أو النشاط *
              <input
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                required
                maxLength={100}
                placeholder="الاسم بالكامل"
              />
            </label>

            <label className="field">
              رقم الهاتف *
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => update('phone', e.target.value)}
                required
                maxLength={30}
                placeholder="01xxxxxxxxx"
              />
            </label>

            <label className="field">
              المقاس *
              <select value={form.size} onChange={(e) => update('size', e.target.value)}>
                <option value="A4">A4 (21 × 29.7 سم)</option>
                <option value="A5">A5 (14.8 × 21 سم)</option>
                <option value="A3">A3 (29.7 × 42 سم)</option>
                <option value="كارت شخصي (9 × 5 سم)">كارت شخصي (9 × 5 سم)</option>
                <option value="10 × 15 سم">10 × 15 سم</option>
                <option value="مقاس مخصص">مقاس مخصص</option>
              </select>
            </label>

            {form.size === 'مقاس مخصص' && (
              <label className="field">
                المقاس المخصص *
                <input
                  value={form.customSize}
                  onChange={(e) => update('customSize', e.target.value)}
                  required
                  maxLength={60}
                  placeholder="مثال: 50 × 70 سم"
                />
              </label>
            )}

            <label className="field">
              الكمية *
              <input
                type="text"
                value={form.quantity}
                onChange={(e) => update('quantity', e.target.value)}
                required
                maxLength={60}
                placeholder="مثال: 500 أو 1000"
              />
            </label>

            <label className="field">
              نوع الخامة / الورق
              <select
                value={form.material}
                onChange={(e) => update('material', e.target.value)}
              >
                <option value="كوشيه فاخر 350 جرام">كوشيه فاخر 350 جرام</option>
                <option value="كوشيه 300 جرام">كوشيه 300 جرام</option>
                <option value="كوشيه 150 جرام">كوشيه 150 جرام</option>
                <option value="ورق مكربن (فواتير)">ورق مكربن (فواتير)</option>
                <option value="فينيل لاصق">فينيل لاصق</option>
                <option value="بنر أو فلكس">بنر أو فلكس</option>
                <option value="خامة مخصصة">خامة مخصصة</option>
              </select>
            </label>

            <label className="field">
              الطباعة والألوان
              <select
                value={form.printType}
                onChange={(e) => update('printType', e.target.value)}
              >
                <option value="وجهين - ألوان كاملة">وجهين - ألوان كاملة</option>
                <option value="وجه واحد - ألوان كاملة">وجه واحد - ألوان كاملة</option>
                <option value="وجهين - أبيض وأسود">وجهين - أبيض وأسود</option>
                <option value="سلوفان مطفي أو لامع">سلوفان مطفي أو لامع</option>
                <option value="تشطيب خاص (UV / بصمة)">تشطيب خاص (UV / بصمة)</option>
              </select>
            </label>

            <label className="field full">
              حالة ملف التصميم
              <select
                value={form.designStatus}
                onChange={(e) => update('designStatus', e.target.value)}
              >
                <option value="جاهز معي ملف التصميم للطباعة (PDF / AI / PSD)">
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
              ملاحظات إضافية (اختياري)
              <textarea
                rows="2"
                value={form.notes}
                maxLength={500}
                onChange={(e) => update('notes', e.target.value)}
                placeholder="أي تفاصيل أو مواصفات خاصة..."
              />
            </label>
          </div>

          {error && <div className="form-error">{error}</div>}

          <div className="modal-actions">
            <button type="button" className="btn btn-ghost" onClick={onClose}>
              إلغاء
            </button>
            <button
              className="btn btn-primary"
              type="submit"
              disabled={isSubmitting}
            >
              <Send size={15} />
              <span>{isSubmitting ? 'جاري الإرسال...' : 'إرسال الطلب'}</span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
