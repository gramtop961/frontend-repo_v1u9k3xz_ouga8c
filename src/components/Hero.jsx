import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-neutral-700 border border-white/60">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Now in open beta
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-neutral-900">
            Loopwork: the productivity OS for creative teams
          </h1>
          <p className="mt-4 text-lg text-neutral-700 max-w-xl">
            Blend Kanban, shared moodboards, and spontaneous audio huddles into a single, playful workspace—engineered for flow and collaboration.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-black text-white px-5 py-3 font-semibold shadow hover:shadow-lg transition-transform hover:-translate-y-0.5">Create your workspace</a>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl bg-white/80 backdrop-blur px-5 py-3 font-semibold border border-black/10 hover:border-black/30 transition-colors">See how it works</a>
          </div>
        </div>

        <div className="mt-12">
          <div className="rounded-2xl border border-black/10 bg-white/90 backdrop-blur-xl shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 border-b border-black/10 bg-neutral-50 px-4 py-2">
              <div className="flex gap-1">
                <span className="h-3 w-3 rounded-full bg-red-400 inline-block" />
                <span className="h-3 w-3 rounded-full bg-amber-400 inline-block" />
                <span className="h-3 w-3 rounded-full bg-emerald-400 inline-block" />
              </div>
              <div className="ml-3 text-xs text-neutral-500">Loopwork • Dashboard</div>
            </div>
            <div className="grid grid-cols-12">
              <aside className="col-span-3 hidden md:block border-r border-black/10 bg-white/70 p-4">
                <p className="text-xs font-medium text-neutral-500 mb-3">Projects</p>
                <ul className="space-y-2 text-sm">
                  <li className="rounded-lg bg-neutral-100 px-3 py-2">Brand Refresh</li>
                  <li className="rounded-lg hover:bg-neutral-100 px-3 py-2">Spring Campaign</li>
                  <li className="rounded-lg hover:bg-neutral-100 px-3 py-2">Website v3</li>
                  <li className="rounded-lg hover:bg-neutral-100 px-3 py-2">Motion Kit</li>
                </ul>
              </aside>
              <main className="col-span-12 md:col-span-9 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold">Brand Refresh</h3>
                  <div className="text-xs text-neutral-500">Board • 12 members</div>
                </div>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {['Backlog','In Progress','Review'].map((col) => (
                    <div key={col} className="rounded-xl bg-neutral-50 border border-black/10 p-3">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{col}</p>
                        <span className="text-xs text-neutral-400">•••</span>
                      </div>
                      <div className="mt-3 space-y-2">
                        <Card title="Exploration: wordmark" tags={["branding","ref"]} />
                        <Card title="Moodboard: spring palette" tags={["moodboard"]} />
                        <Card title="Huddle: typography" tags={["audio","crit"]} />
                      </div>
                    </div>
                  ))}
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

function Card({ title, tags }) {
  return (
    <div className="rounded-lg bg-white border border-black/10 p-3 hover:shadow-sm transition-shadow">
      <p className="text-sm font-medium">{title}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wide text-neutral-600 bg-neutral-50">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
