import { Sparkles, Zap, Shield } from 'lucide-react';

const AdminHome = () => {
  return (
    <div className="page-container" data-testid="home-page">
      <div className="page-header">
        <h1 className="page-title">Welcome to Sukhkarta</h1>
        <p className="page-subtitle">Your comprehensive business solutions platform</p>
      </div>

      <div className="content-section">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          <div style={{ padding: '32px', background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(37, 99, 235, 0.04) 100%)', borderRadius: '20px', border: '2px solid rgba(59, 130, 246, 0.1)' }}>
            <div style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
              <Sparkles size={28} color="white" />
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b', marginBottom: '12px', fontFamily: 'Space Grotesk, sans-serif' }}>Artificial Jewellery</h3>
            <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.6' }}>Explore our stunning collection of artificial jewellery designs that combine elegance with affordability.</p>
          </div>

          <div style={{ padding: '32px', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(5, 150, 105, 0.04) 100%)', borderRadius: '20px', border: '2px solid rgba(16, 185, 129, 0.1)' }}>
            <div style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
              <Zap size={28} color="white" />
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b', marginBottom: '12px', fontFamily: 'Space Grotesk, sans-serif' }}>Trading Solutions</h3>
            <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.6' }}>Access powerful trading tools and analytics to make informed investment decisions.</p>
          </div>

          <div style={{ padding: '32px', background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(217, 119, 6, 0.04) 100%)', borderRadius: '20px', border: '2px solid rgba(245, 158, 11, 0.1)' }}>
            <div style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
              <Shield size={28} color="white" />
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b', marginBottom: '12px', fontFamily: 'Space Grotesk, sans-serif' }}>HR Consulting</h3>
            <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.6' }}>Professional HR consulting services to help you build and manage effective teams.</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2 className="section-title">About Our Platform</h2>
        <p className="section-text">
          Sukhkarta Enterprises is your one-stop solution for modern business needs. We offer exquisite artificial jewellery, 
          trading expertise, and human resources consulting to provide comprehensive services that drive growth and innovation.
        </p>
        <p className="section-text">
          Navigate through our sections using the sidebar to explore our products and services. Whether you're 
          looking for beautiful jewellery pieces, trading solutions, or HR consulting, we have the expertise to help your business succeed.
        </p>
      </div>
    </div>
  );
};

export default AdminHome;