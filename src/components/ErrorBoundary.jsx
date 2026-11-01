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
          backgroundColor: '#f7f8fc',
          color: '#171922',
          direction: 'rtl'
        }}>
          <div style={{
            background: '#ffffff',
            padding: '36px',
            borderRadius: '20px',
            boxShadow: '0 16px 45px rgba(20,29,58,0.08)',
            maxWidth: '520px',
            width: '100%'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: '#fff0f1',
              color: '#e73c45',
              display: 'grid',
              placeItems: 'center',
              fontSize: '28px',
              margin: '0 auto 18px'
            }}>
              ⚠️
            </div>
            <h2 style={{ fontSize: '22px', margin: '0 0 10px' }}>عفواً، حدث خطأ غير متوقع</h2>
            <p style={{ fontSize: '14px', color: '#737887', lineHeight: '1.8', margin: '0 0 24px' }}>
              واجه التطبيق مشكلة أثناء التحميل. يمكنك إعادة تحميل الصفحة أو إعادة تعيين البيانات.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => window.location.reload()}
                style={{
                  background: '#1f4fd8',
                  color: '#ffffff',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '12px',
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
                  background: '#f0f2f7',
                  color: '#171922',
                  border: 'none',
                  padding: '12px 20px',
                  borderRadius: '12px',
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

