import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-inter">
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <CTA />
      </main>
      <footer className="border-t border-black/10 py-10 mt-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} Loopwork, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-black">Status</a>
            <a href="#" className="hover:text-black">Privacy</a>
            <a href="#" className="hover:text-black">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
