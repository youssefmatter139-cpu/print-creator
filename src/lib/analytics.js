// Privacy-friendly analytics hook: integrate your provider later without coupling it to UI.
// Events can be observed by an approved analytics adapter listening for `creator-print:event`.
export function track(eventName, details = {}) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('creator-print:event', {
    detail: { eventName, details, timestamp: new Date().toISOString() }
  }));
}
