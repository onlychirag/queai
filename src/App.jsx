import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <header className="container" style={{ padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: '800' }}>QueAI</h1>
        <nav style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
          <a href="#" style={{ color: 'var(--color-text)' }}>Home</a>
          <a href="#features">Features</a>
          <a href="#how-it-works">How it Works</a>
          <a href="#pricing">Pricing</a>
        </nav>
      </header>
      <main>
        <Hero />
        <Features />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}

export default App
