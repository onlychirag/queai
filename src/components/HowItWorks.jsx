import { Download, Play, CheckCircle } from 'lucide-react';

const steps = [
    {
        icon: <Download size={40} />,
        title: "1. Install",
        description: "Download the desktop client and run the installer. No admin rights required."
    },
    {
        icon: <Play size={40} />,
        title: "2. Activate",
        description: "Launch QueAI in stealth mode using your custom shortcut key (e.g., Ctrl+Shift+X)."
    },
    {
        icon: <CheckCircle size={40} />,
        title: "3. Succeed",
        description: "QueAI automatically detects questions on your screen and provides answers instantly."
    }
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="container" style={{ padding: '100px 20px', position: 'relative' }}>
            <div className="section-header" style={{ textAlign: 'center', marginBottom: '80px' }}>
                <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
                    Zero Setup Required
                </h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
                    From download to done in less than 60 seconds.
                </p>
            </div>

            <div className="steps-container" style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                {steps.map((step, index) => (
                    <div key={index} className="step-card glass-panel" style={{
                        flex: '1',
                        minWidth: '280px',
                        maxWidth: '350px',
                        padding: '40px 30px',
                        textAlign: 'center',
                        position: 'relative'
                    }}>
                        <div className="step-icon-wrapper" style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.05)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 24px',
                            color: 'var(--color-primary)',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}>
                            {step.icon}
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{step.title}</h3>
                        <p style={{ color: 'var(--color-text-muted)' }}>{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
