import { useState, useEffect } from 'react';
import './App.css';

function PrivacyPolicy() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="app-wrapper">
      
      {/* Background Ambience */}
      <div className="ambient-glow top-left"></div>
      <div className="ambient-glow bottom-right"></div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <button className="icon-btn" onClick={() => window.history.back()}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
            <span className="btn-text">Back</span>
          </button>
          
          <div className="brand">
            <div className="brand-logo">Q</div>
            <span className="brand-name">Quirzy Legal</span>
          </div>

          <button className="icon-btn theme-toggle" onClick={() => setIsDark(!isDark)}>
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      <main className="main-content">
        
        {/* Hero */}
        <header className="hero">
          <div className="pill-badge">Last updated: November 30, 2025</div>
          <h1 className="hero-title">Privacy Policy</h1>
        </header>

        <div className="content-grid">
          
          {/* Introduction */}
          <section className="card intro-card">
            <h3>Introduction</h3>
            <p>Welcome to Quirzy ("we," "our," or "us"). We are committed to protecting your privacy and ensuring transparency in how we handle your personal information. This Privacy Policy explains our practices regarding the collection, use, disclosure, and protection of your data when you use our mobile application.</p>
            <p style={{marginTop: '16px'}}>By using Quirzy, you acknowledge that you have read, understood, and agree to the practices described in this policy. If you do not agree, please discontinue use of our app.</p>
          </section>

          {/* 1. Information We Collect */}
          <section className="section-block">
            <h2 className="section-title">1. Information We Collect</h2>
            
            <div className="bento-grid">
              {/* 1.1 Personal Information */}
              <div className="bento-item">
                <div className="bento-icon">👤</div>
                <h4>1.1 Personal Information</h4>
                <p>We collect the following personal information when you create an account:</p>
                <ul className="modern-list">
                  <li>Full name & Email address</li>
                  <li>Username</li>
                  <li>Password (stored using industry-standard encryption)</li>
                  <li>Profile picture (optional)</li>
                  <li>User preferences and settings</li>
                </ul>
              </div>

              {/* 1.2 Usage Data */}
              <div className="bento-item">
                <div className="bento-icon">📊</div>
                <h4>1.2 Usage & Performance</h4>
                <p>To provide and improve our services, we collect:</p>
                <ul className="modern-list">
                  <li>Quiz topics you enter or generate</li>
                  <li>Quiz questions generated for you</li>
                  <li>Scores, attempts, and completion rates</li>
                  <li>Study progress & performance analytics</li>
                  <li>Time spent & Feature usage patterns</li>
                </ul>
              </div>

              {/* 1.3 Device Info */}
              <div className="bento-item">
                <div className="bento-icon">📱</div>
                <h4>1.3 Device & Technical</h4>
                <p>We automatically collect certain technical data:</p>
                <ul className="modern-list">
                  <li>Device type, model, and manufacturer</li>
                  <li>Operating system and app version</li>
                  <li>IP address and general location (region)</li>
                  <li>Unique device identifiers</li>
                  <li>Crash reports and diagnostic data</li>
                </ul>
              </div>

              {/* 1.4 Content You Provide */}
              <div className="bento-item wide highlight-border">
                <div className="bento-icon">📝</div>
                <h4>1.4 Content You Provide</h4>
                <p>When you use Quirzy, you can enter or paste your own text topics and study material into the app. We process this content to generate personalized quiz questions for you.</p>
                <p style={{marginTop:'8px', opacity: 0.8}}>This content is used only to provide quiz generation features and is not shared with other users.</p>
              </div>
            </div>
          </section>

          {/* 2. How We Use Information */}
          <section className="section-block">
            <h2 className="section-title">2. How We Use Your Information</h2>
            <div className="list-card">
              <p style={{marginBottom:'16px'}}>We use your information for the following purposes:</p>
              <ul className="modern-list">
                <li>Account creation and authentication</li>
                <li>Generating AI-powered quiz content based on the topics and text you provide</li>
                <li>Tracking your learning progress and statistics</li>
                <li>Sending important notifications (quiz reminders, achievements, updates)</li>
                <li>Improving our AI algorithms and app features</li>
                <li>Analyzing app performance and user experience</li>
                <li>Providing customer support</li>
                <li>Ensuring security and preventing fraud</li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>
          </section>

          {/* 3. Legal Basis */}
          <section className="section-block">
            <h2 className="section-title">3. Legal Basis (GDPR)</h2>
            <div className="card">
              <p>For users in the European Economic Area (EEA), UK, and other regions with similar data protection laws, we process your data based on:</p>
              <div className="tags-container" style={{marginTop: '16px'}}>
                <div className="tag-block">
                  <strong>Consent:</strong> You provide explicit consent when creating an account.
                </div>
                <div className="tag-block">
                  <strong>Contract:</strong> Processing is necessary to provide our quiz services.
                </div>
                <div className="tag-block">
                  <strong>Legitimate Interest:</strong> To improve services, ensure security, and analyze usage.
                </div>
                <div className="tag-block">
                  <strong>Legal Obligation:</strong> We comply with applicable laws and regulations.
                </div>
              </div>
            </div>
          </section>

          {/* 4. AI & Third Parties */}
          <section className="section-block">
            <h2 className="section-title">4. AI & Third-Party Services</h2>
            <div className="card">
              <p>Quirzy uses AI services (such as Google Gemini or similar providers) to generate quiz questions based on the topics and text you submit in the app.</p>
              <p style={{marginTop: '12px'}}>When you request a quiz:</p>
              <ul className="modern-list" style={{margin:'12px 0'}}>
                <li>Your topic and/or text input is sent to our AI service provider</li>
                <li>The AI processes this data to generate relevant questions</li>
                <li>The provider's privacy practices are governed by their own Privacy Policy</li>
              </ul>
              <p>We may also use third-party services such as:</p>
              <div className="split-grid" style={{marginTop:'16px'}}>
                <div className="tech-card">
                  <strong>🔥 Firebase Authentication</strong>
                  <p>For secure login.</p>
                </div>
                <div className="tech-card">
                  <strong>☁️ Firebase Cloud Messaging</strong>
                  <p>For push notifications.</p>
                </div>
                <div className="tech-card">
                  <strong>🗄️ Cloud Database</strong>
                  <p>For secure data storage.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Data Security */}
          <section className="section-block">
            <h2 className="section-title">5. Data Security</h2>
            <div className="card">
              <p>We implement comprehensive security measures to protect your information:</p>
              <ul className="modern-list" style={{marginTop:'12px'}}>
                <li>All passwords are hashed using secure algorithms</li>
                <li>Data transmission uses HTTPS/TLS encryption</li>
                <li>Secure cloud infrastructure with regular security updates</li>
                <li>Access controls limiting who can view personal data</li>
                <li>Regular monitoring and basic security checks</li>
                <li>Automated backup systems where applicable</li>
              </ul>
              <p style={{marginTop:'16px', fontStyle:'italic', opacity:0.8}}>While we strive to protect your data, no method of transmission or storage is 100% secure. We cannot guarantee absolute security.</p>
            </div>
          </section>

          {/* 6. Data Sharing */}
          <section className="section-block">
            <h2 className="section-title">6. Data Sharing and Disclosure</h2>
            <div className="card">
              <p>We do NOT sell, rent, or trade your personal information. We may share data only in these limited circumstances:</p>
              <ul className="modern-list" style={{marginTop:'12px'}}>
                <li>With your explicit consent</li>
                <li>With service providers who assist our operations (under confidentiality obligations)</li>
                <li>To comply with legal obligations, court orders, or government requests</li>
                <li>To protect our rights, property, or safety, or that of our users</li>
                <li>In connection with a business merger, acquisition, or asset sale (users will be notified)</li>
              </ul>
            </div>
          </section>

          {/* 7. Privacy Rights */}
          <section className="section-block">
            <h2 className="section-title">7. Your Privacy Rights</h2>
            <div className="card">
              <p>You have the following rights regarding your personal data (subject to applicable law):</p>
              <div className="action-row" style={{marginTop:'20px'}}>
                <button className="action-btn">Access</button>
                <button className="action-btn">Rectification</button>
                <button className="action-btn">Erasure</button>
                <button className="action-btn">Portability</button>
              </div>
              <ul className="modern-list" style={{marginTop:'20px'}}>
                <li><strong>Access:</strong> Request or view a copy of your personal data and quiz history.</li>
                <li><strong>Rectification:</strong> Correct inaccurate or incomplete information.</li>
                <li><strong>Erasure:</strong> Request deletion of your account and data ("right to be forgotten").</li>
                <li><strong>Data Portability:</strong> Download your data in a machine-readable format.</li>
                <li><strong>Restriction & Objection:</strong> Limit processing or object to specific activities.</li>
                <li><strong>Withdraw Consent:</strong> Revoke consent at any time.</li>
                <li><strong>Notifications:</strong> Disable push notifications in settings.</li>
              </ul>
              <p style={{marginTop:'16px'}}>To exercise these rights, contact us at <a href="mailto:pratap.09082005@gmail.com" style={{color:'var(--accent)'}}>pratap.09082005@gmail.com</a>.</p>
            </div>
          </section>

          {/* 8-12 Text Blocks */}
          <section className="section-block text-columns">
            <div className="card">
              <h4>8. Data Retention</h4>
              <p>We retain your personal information only as long as necessary:</p>
              <ul className="modern-list small">
                <li>Active accounts: Data is retained while active.</li>
                <li>Deleted accounts: Deleted within a reasonable period.</li>
                <li>Legal requirements: Retained if required by law.</li>
              </ul>
            </div>
            
            <div className="card">
              <h4>9. Children's Privacy</h4>
              <p>Quirzy is not intended for children under 13 (or 16 in certain jurisdictions). We do not knowingly collect personal information from children. If you believe a child has provided us with data, please contact us to delete it.</p>
            </div>

            <div className="card">
              <h4>10. International Transfers</h4>
              <p>Your information may be processed and stored in countries other than your own. By using Quirzy, you consent to the transfer of your data as described in this Privacy Policy.</p>
            </div>

            <div className="card">
              <h4>11. Cookies and Tracking</h4>
              <p>We use minimal tracking technologies:</p>
              <ul className="modern-list small">
                <li>Essential cookies for authentication.</li>
                <li>Anonymous analytics for usage improvements.</li>
                <li>Crash and performance reporting.</li>
              </ul>
            </div>
          </section>

          {/* 12. California */}
          <section className="section-block">
            <h2 className="section-title">12. California Privacy Rights</h2>
            <div className="card">
              <p>Where laws like the California Consumer Privacy Act (CCPA/CPRA) apply, eligible users may have additional rights, such as:</p>
              <ul className="modern-list">
                <li>Right to know what categories of personal information we collect and use.</li>
                <li>Right to request deletion of personal information.</li>
                <li>Right to opt-out of certain types of data sharing (we do not sell personal information).</li>
                <li>Right to non-discrimination for exercising privacy rights.</li>
              </ul>
            </div>
          </section>

          {/* 13 & 14 Updates and Contact */}
          <section className="section-block">
            <div className="split-grid">
              <div className="card">
                <h4>13. Changes to This Policy</h4>
                <p>We may update this Privacy Policy to reflect changes. When we make material changes, we will notify you through the app or by updating the "Last updated" date. Your continued use implies acceptance.</p>
              </div>
              <div className="card highlight-border">
                <h4>14. Contact Us</h4>
                <p>If you have any questions, concerns, or requests:</p>
                <div style={{marginTop:'12px', fontWeight:'bold', color:'var(--accent)'}}>
                  Email: pratap.09082005@gmail.com
                </div>
                <p style={{marginTop:'8px', fontSize:'0.9rem'}}>We will do our best to respond as soon as reasonably possible.</p>
              </div>
            </div>
          </section>

          {/* Consent Footer */}
          <section className="consent-footer">
            <div className="shield-wrapper">🛡️</div>
            <div className="consent-content">
              <h3>Your Privacy Matters</h3>
              <p>By using Quirzy, you acknowledge that you have read, understood, and agree to this Privacy Policy and our data practices.</p>
              <a href="mailto:pratap.09082005@gmail.com" className="support-link">Contact Privacy Team &rarr;</a>
            </div>
          </section>

        </div>
      </main>
      
      <footer className="site-footer">
        © 2025 Quirzy App. All rights reserved.
      </footer>
    </div>
  );
}

function App() {
  return <PrivacyPolicy />;
}

export default App;