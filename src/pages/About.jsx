import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpLeft, Target, HeartHandshake, Layers, MapPin } from 'lucide-react';

export default function About() {
  return (
    <div className="page-pad">
      <div className="container">
        <div className="page-hero">
          <span className="section-eyebrow">عن المطبعة</span>
          <h1>
            برند كرياتور<br />
            <span className="text-highlight">التزام بأعلى معايير جودة الطباعة.</span>
          </h1>
          <p>
            استوديو متخصص يجمع بين التصميم الإبداعي وفصل الألوان الدقيق وخبرة الطباعة الاحترافية في طنطا.
          </p>
        </div>

        {/* Feature Box */}
        <div className="about-overview-card">
          <div className="about-content">
            <span className="section-eyebrow">رؤيتنا</span>
            <h2>المطبوعات هي واجهة علامتك التجارية أمام عملائك</h2>
            <p>
              كل مطبوعة تمثل هوية مشروعك. هدفنا في مطبعة برند كرياتور أن نكون شريكك الموثوق في كل مرحلة: من إعداد ملف التصميم وضبط درجات الألوان، حتى اختيار أوزان الورق والتشطيبات التي تمنح مطبوعاتك رونقاً واحترافية.
            </p>
            <p>
              نخدم الأنشطة التجارية والشركات والمؤسسات في طنطا وجميع محافظات الجمهورية، مع الالتزام التام بالمعايير الفنية ومواعيد التسليم.
            </p>
            <div style={{ marginTop: 20 }}>
              <Link className="btn btn-primary" to="/services">
                <span>استكشف خدماتنا</span>
                <ArrowUpLeft size={16} />
              </Link>
            </div>
          </div>

          <div className="about-brand-box">
            <div className="brand-badge-large">PC</div>
            <div className="brand-title">برند كرياتور</div>
            <div className="brand-subtitle">PRINT CREATOR · STUDIO</div>
            <div className="about-location">
              <MapPin size={15} />
              <span>طنطا — شارع شوقي تقاطع شارع الحلو</span>
            </div>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="section-head">
          <span className="section-eyebrow">ركائز العمل</span>
          <h2>المعايير التي نحافظ عليها في كل مطبوعة</h2>
        </div>

        <div className="features-grid" style={{ marginBottom: 60 }}>
          <div className="feature-box">
            <div className="feature-icon">
              <Target size={22} />
            </div>
            <h3>فهم الهدف من المطبوعة</h3>
            <p>
              ندرس طبيعة استخدام المطبوعة والجمهور المستهدف لنقترح عليك أفضل المقاسات والخامات المناسبة للميزانية والهدف.
            </p>
          </div>

          <div className="feature-box">
            <div className="feature-icon">
              <Layers size={22} />
            </div>
            <h3>دقة الألوان والتشطيب</h3>
            <p>
              معالجة فنية للملفات ومطابقة أنظمة الألوان، مع عناية تامة بجميع مراحل التشطيب من سلوفان وقص وتجليد.
            </p>
          </div>

          <div className="feature-box">
            <div className="feature-icon">
              <HeartHandshake size={22} />
            </div>
            <h3>وضوح ومتابعة مباشرة</h3>
            <p>
              تواصل شفاف من لحظة استلام طلبك ومواصفاته وحتى جاهزيته للاستلام أو الشحن.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="final-cta">
          <h2>جاهز لبدء مطبوعاتك معنا؟</h2>
          <p>
            تفضل بزيارتنا في مقرنا بطنطا أو سجّل طلبك مباشرة عبر الموقع وسنتواصل معك فوراً.
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
      </div>
    </div>
  );
}
