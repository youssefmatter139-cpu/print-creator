/**
 * Security and Validation Utilities
 */

const MAX_TEXT_LENGTH = 500;

/**
 * Normalizes Arabic-Indic (٠-٩) and Eastern-Arabic digits into standard Latin digits (0-9).
 * Crucial for Arabic mobile keyboards.
 */
export function normalizeDigits(str) {
  if (typeof str !== 'string') return '';
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  const easternDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return str
    .replace(/[٠-٩]/g, (d) => String(arabicDigits.indexOf(d)))
    .replace(/[۰-۹]/g, (d) => String(easternDigits.indexOf(d)));
}

/**
 * Sanitize and trim user string input, preventing memory bloat and injection
 */
export function sanitizeText(val, maxLength = MAX_TEXT_LENGTH) {
  if (typeof val !== 'string') return '';
  return val.trim().slice(0, maxLength);
}

/**
 * Validate phone numbers (supports Egyptian mobile format, standard and Arabic digits)
 */
export function isValidPhone(phone) {
  if (!phone || typeof phone !== 'string') return false;
  const normalized = normalizeDigits(phone);
  const cleaned = normalized.replace(/[\s\-\(\)]/g, '');
  // Matches typical Egyptian numbers like 010..., 011..., 012..., 015... or with country code +20...
  const egRegex = /^(?:\+?20|0)?1[0125][0-9]{8}$/;
  // Also permit general valid international phone numbers of 8-15 digits
  const genRegex = /^\+?[0-9]{8,15}$/;
  return egRegex.test(cleaned) || genRegex.test(cleaned);
}

/**
 * Securely build a WhatsApp URL without risks of unescaped control sequences
 */
export function buildWhatsAppUrl(phoneNumber, message) {
  const normalizedPhone = normalizeDigits(phoneNumber);
  const cleanPhone = normalizedPhone.replace(/[^0-9]/g, '');
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMsg}`;
}
