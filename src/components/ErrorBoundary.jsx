import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    try {
      localStorage.removeItem('cp-cart');
    } catch {}
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '24px',
          fontFamily: "'Cairo', sans-serif",
          textAlign: 'center',
          backgroundColor: '#0b0e14',
          color: '#f1f5f9',
          direction: 'rtl'
        }}>
          <div style={{
            background: '#131926',
            border: '1px solid #1e293b',
            padding: '36px',
            borderRadius: '16px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            maxWidth: '520px',
            width: '100%'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(239, 68, 68, 0.12)',
              border: '1px solid rgba(239, 68, 68, 0.25)',
              color: '#ef4444',
              display: 'grid',
              placeItems: 'center',
              fontSize: '24px',
              margin: '0 auto 18px'
            }}>
              ⚠️
            </div>
            <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#f1f5f9', margin: '0 0 10px' }}>عفواً، حدث خطأ غير متوقع</h2>
            <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.8', margin: '0 0 24px' }}>
              واجه التطبيق مشكلة أثناء التحميل. يمكنك إعادة تحميل الصفحة أو إعادة تعيين البيانات للعودة للوضع الطبيعي.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => window.location.reload()}
                style={{
                  background: '#2563eb',
                  color: '#ffffff',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '10px',
                  fontWeight: '700',
                  fontSize: '14px',
                  cursor: 'pointer'
                }}
              >
                إعادة تحميل الصفحة
              </button>
              <button
                onClick={this.handleReset}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#cbd5e1',
                  border: '1px solid #1e293b',
                  padding: '12px 20px',
                  borderRadius: '10px',
                  fontWeight: '700',
                  fontSize: '14px',
                  cursor: 'pointer'
                }}
              >
                العودة للرئيسية
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

