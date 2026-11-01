import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowUpLeft } from 'lucide-react';
import Brand from './Brand';

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    ['/', 'الرئيسية'],
    ['/services', 'الخدمات'],
    ['/gallery', 'أعمالنا'],
    ['/about', 'من نحن'],
    ['/contact', 'تواصل معنا']
  ];

  return (
    <header className="header">
      <div className="container nav">
        <Brand onClick={() => setOpen(false)} />

        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <Link to="/order" onClick={() => setOpen(false)} className="btn btn-primary nav-order-btn">
            <span>اطلب الآن</span>
            <ArrowUpLeft size={16} />
          </Link>

          <button
            className="mobile-menu"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
