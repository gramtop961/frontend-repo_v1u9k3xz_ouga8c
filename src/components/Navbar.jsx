import { Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <nav className="mt-4 flex items-center justify-between rounded-2xl border border-white/30 bg-white/60 backdrop-blur-xl shadow-sm px-4 py-2">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-fuchsia-500 via-rose-500 to-amber-400 text-white">
              <Sparkles size={18} />
            </span>
            <span className="text-lg font-semibold tracking-tight">Loopwork</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
            <a href="#features" className="hover:text-black transition-colors">Product</a>
            <a href="#" className="hover:text-black transition-colors">Pricing</a>
            <a href="#" className="hover:text-black transition-colors">Blog</a>
            <a href="#" className="hover:text-black transition-colors">Docs</a>
          </div>
          <div className="flex items-center gap-2">
            <a href="#" className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm font-medium shadow-sm hover:shadow transition-all">Sign in</a>
            <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-black text-white px-4 py-2 text-sm font-semibold shadow hover:shadow-lg transition-transform hover:-translate-y-0.5">
              Get started
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
