import { Ghost, Zap, Shield, Laptop, Brain, Eye } from 'lucide-react';

const features = [
    {
        icon: <Ghost size={32} />,
        title: "Truly Invisible",
        description: "Operates in a completely hidden overlay that screen recording software cannot detect."
    },
    {
        icon: <Zap size={32} />,
        title: "Real-time AI",
        description: "Get instant answers as you type or speak. Zero latency for natural conversation flow."
    },
    {
        icon: <Shield size={32} />,
        title: "Undetectable",
        description: "Advanced anti-cheat protection bypass ensures you stay safe during proctored exams."
    },
    {
        icon: <Brain size={32} />,
        title: "Context Aware",
        description: "Analyzes your screen to understand code context and provide relevant solutions."
    },
    {
        icon: <Laptop size={32} />,
        title: "Native Performance",
        description: "Built with Rust for maximum performance and minimal memory footprint."
    },
    {
        icon: <Eye size={32} />,
        title: "Privacy First",
        description: "Your data is processed locally where possible. No logs kept on our servers."
    }
];

const Features = () => {
    return (
        <section id="features" className="container" style={{ padding: '100px 20px' }}>
            <div className="features-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
                    Unfair Advantage? <br /> Maybe.
                </h2>
                <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                    Built for engineers who want to focus on solving problems, not memorizing syntax.
                </p>
            </div>

            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                {features.map((feature, index) => (
                    <div key={index} className="glass-panel feature-card" style={{ padding: '32px', transition: 'transform 0.3s ease' }}>
                        <div style={{ color: 'var(--color-primary)', marginBottom: '20px' }}>
                            {feature.icon}
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', fontWeight: 'bold' }}>{feature.title}</h3>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
