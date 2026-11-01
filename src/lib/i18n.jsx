import React, { createContext, useContext, useState, useEffect } from 'react';

const C = createContext(null);

function getStorage(key, fallback) {
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
}

function setStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {}
}

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => getStorage('cp-lang', 'ar'));
  const [dark, setDark] = useState(() => getStorage('cp-dark', '0') === '1');

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  }, [dark]);

  const toggleLang = () => {
    const next = lang === 'ar' ? 'en' : 'ar';
    setLang(next);
    setStorage('cp-lang', next);
  };

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    setStorage('cp-dark', next ? '1' : '0');
  };

  return (
    <C.Provider value={{ lang, dark, toggleLang, toggleDark }}>
      {children}
    </C.Provider>
  );
}

export const useI18n = () => {
  const ctx = useContext(C);
  if (!ctx) {
    return {
      lang: 'ar',
      dark: false,
      toggleLang: () => {},
      toggleDark: () => {}
    };
  }
  return ctx;
};
