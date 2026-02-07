import { Download, PlayCircle, ShieldCheck, Cpu, EyeOff } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero-section container">
            <div className="hero-content">
                <div className="badge animate-fade-in">
                    <span className="badge-text">v2.0 Now Available</span>
                </div>

                <h1 className="hero-title animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    Ace Interviews with <br />
                    <span className="text-gradient">Invisible AI Support</span>
                </h1>

                <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    The undetectable desktop assistant that captures your screen and audio
                    to give you real-time answers. Stay ahead without getting caught.
                </p>

                <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    {/* PASTE YOUR GITHUB RELEASE PRO LINK HERE LATER */}
                    <a
                        href="https://github.com/YOUR_USERNAME/queai/releases/download/v1.0.0/QueAI-Setup.exe"
                        className="btn btn-primary"
                        download
                    >
                        <Download size={20} />
                        Download for Windows
                    </a>
                    <button className="btn btn-secondary">
                        <PlayCircle size={20} />
                        Watch Demo
                    </button>
                </div>

                <div className="hero-stats animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <div className="stat-item">
                        <EyeOff className="stat-icon" />
                        <span>100% Undetectable</span>
                    </div>
                    <div className="stat-item">
                        <Cpu className="stat-icon" />
                        <span>Low CPU Usage</span>
                    </div>
                    <div className="stat-item">
                        <ShieldCheck className="stat-icon" />
                        <span>Secure & Private</span>
                    </div>
                </div>
            </div>

            <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="glass-panel visual-content">
                    <div className="code-mockup">
                        <div className="window-controls">
                            <span className="control close"></span>
                            <span className="control minimize"></span>
                            <span className="control maximize"></span>
                        </div>
                        <pre>
                            <code>
                                <span className="comment">// Initializing Stealth Mode...</span><br />
                                <span className="keyword">const</span> <span className="variable">assistant</span> = <span className="function">activate</span>();<br />
                                <span className="keyword">await</span> <span className="variable">assistant</span>.<span className="function">listen</span>();<br />
                                <span className="comment">// Listening for questions...</span>
                            </code>
                        </pre>
                        <div className="ai-response-mockup">
                            <div className="ai-typing">
                                <span></span><span></span><span></span>
                            </div>
                            <p>The answer is: O(n log n) because...</p>
                        </div>
                    </div>
                    <div className="glow-effect"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
