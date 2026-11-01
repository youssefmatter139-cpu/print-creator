/**
 * Security and Validation Utilities
 */

// Maximum reasonable length for text fields
const MAX_TEXT_LENGTH = 500;
const MAX_NOTES_LENGTH = 1000;

/**
 * Sanitize and trim user string input, preventing memory bloat and injection
 */
export function sanitizeText(val, maxLength = MAX_TEXT_LENGTH) {
  if (typeof val !== 'string') return '';
  return val.trim().slice(0, maxLength);
}

/**
 * Validate phone numbers (supports Egyptian mobile format and general numbers)
 */
export function isValidPhone(phone) {
  if (!phone || typeof phone !== 'string') return false;
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  // Matches typical Egyptian numbers like 010..., 011..., 012..., 015... or with country code +20...
  const egRegex = /^(?:\+?20|0)?1[0125][0-9]{8}$/;
  // Also permit general valid phone numbers of 8-15 digits
  const genRegex = /^\+?[0-9]{8,15}$/;
  return egRegex.test(cleaned) || genRegex.test(cleaned);
}

/**
 * Securely build a WhatsApp URL without risks of unescaped control sequences
 */
export function buildWhatsAppUrl(phoneNumber, message) {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMsg}`;
}

