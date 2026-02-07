import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="container" style={{
            padding: '80px 20px 40px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            marginTop: '80px'
        }}>
            <div className="footer-content" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '40px'
            }}>
                <div className="footer-brand">
                    <h2 className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '16px' }}>QueAI</h2>
                    <p style={{ color: 'var(--color-text-muted)', maxWidth: '300px' }}>
                        The ultimate invisible interview assistant. Powered by advanced AI to help you succeed.
                    </p>
                </div>

                <div className="footer-links" style={{ display: 'flex', gap: '60px' }}>
                    <div>
                        <h4 style={{ marginBottom: '20px', fontWeight: '600' }}>Product</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--color-text-muted)' }}>
                            <li><a href="#" className="hover-text">Download</a></li>
                            <li><a href="#" className="hover-text">Features</a></li>
                            <li><a href="#" className="hover-text">Pricing</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '20px', fontWeight: '600' }}>Legal</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--color-text-muted)' }}>
                            <li><a href="#" className="hover-text">Privacy Policy</a></li>
                            <li><a href="#" className="hover-text">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '40px',
                marginTop: '40px',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                color: 'var(--color-text-muted)',
                fontSize: '0.9rem'
            }}>
                <p>&copy; {new Date().getFullYear()} QueAI. All rights reserved.</p>
                <div className="social-links" style={{ display: 'flex', gap: '20px' }}>
                    <a href="#" className="hover-text"><Twitter size={20} /></a>
                    <a href="#" className="hover-text"><Github size={20} /></a>
                    <a href="#" className="hover-text"><Linkedin size={20} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
