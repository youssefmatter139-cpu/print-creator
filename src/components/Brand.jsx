import React from 'react';
import { Link } from 'react-router-dom';

export default function Brand() {
  return (
    <Link to="/" className="brand" aria-label="مطبعة برند كرياتور - الصفحة الرئيسية">
      <div className="brand-badge" aria-hidden="true">
        <span>PC</span>
      </div>
      <div className="brand-text">
        <b className="brand-name">برند كرياتور</b>
        <small className="brand-sub">PRINT CREATOR · TANTA</small>
      </div>
    </Link>
  );
}
