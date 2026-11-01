import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';

export function ImageSlot({ src, alt, large = false }) {
  const [bad, setBad] = useState(false);

  useEffect(() => {
    setBad(false);
  }, [src]);

  return (
    <div className={'image-slot ' + (large ? 'large' : '')}>
      {!bad && src && (
        <img
          src={src}
          alt={alt || 'خدمة طباعة'}
          loading="lazy"
          onError={() => setBad(true)}
        />
      )}
      {(bad || !src) && (
        <div className="image-fallback" aria-hidden="true">
          <span className="fallback-logo">PC</span>
          <span>
            PRINT <b>CREATOR</b>
          </span>
          <small>برند كرياتور • طنطا</small>
        </div>
      )}
    </div>
  );
}

export default function ServiceCard({ service, lang = 'ar', onAdd }) {
  if (!service) return null;

  return (
    <article className="service-card">
      <ImageSlot src={service.image} alt={lang === 'ar' ? service.ar : service.en} />
      <div className="service-card-body">
        <div className="service-meta">
          <span>{lang === 'ar' ? 'طباعة احترافية' : 'PREMIUM PRINT'}</span>
          <span>0{((service.id ? service.id.length : 1) % 9) + 1}</span>
        </div>
        <h3>{lang === 'ar' ? service.ar : service.en}</h3>
        <p>{service.desc}</p>
        <button
          type="button"
          className="btn-order-now"
          onClick={() => onAdd(service)}
          aria-label={lang === 'ar' ? `اطلب الآن ${service.ar}` : `Order now ${service.en}`}
        >
          <span>{lang === 'ar' ? 'اطلب الآن' : 'Order Now'}</span>
          <span className="plus-icon">
            <Plus size={16} />
          </span>
        </button>
      </div>
    </article>
  );
}
