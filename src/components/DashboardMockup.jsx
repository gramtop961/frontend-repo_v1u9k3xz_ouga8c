export default function DashboardMockup() {
  return (
    <section className="relative -mt-16" aria-label="Product preview">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-black/10 bg-white shadow-xl overflow-hidden">
          <div className="flex items-center gap-2 border-b border-black/10 bg-neutral-50 px-4 py-2">
            <div className="flex gap-1">
              <span className="h-3 w-3 rounded-full bg-red-400 inline-block" />
              <span className="h-3 w-3 rounded-full bg-amber-400 inline-block" />
              <span className="h-3 w-3 rounded-full bg-emerald-400 inline-block" />
            </div>
            <div className="ml-3 text-xs text-neutral-500">loopwork.app/workspace/creative-lab</div>
          </div>

          <div className="grid grid-cols-12">
            <aside className="col-span-3 hidden md:block border-r border-black/10 bg-white/60 p-4">
              <p className="text-xs font-medium text-neutral-500 mb-3">Projects</p>
              <ul className="space-y-2 text-sm">
                <li className="rounded-lg bg-neutral-100 px-3 py-2">Brand Refresh</li>
                <li className="rounded-lg hover:bg-neutral-100 px-3 py-2">Spring Campaign</li>
                <li className="rounded-lg hover:bg-neutral-100 px-3 py-2">Website v3</li>
                <li className="rounded-lg hover:bg-neutral-100 px-3 py-2">Motion Kit</li>
              </ul>
              <p className="mt-6 text-xs font-medium text-neutral-500 mb-2">Huddles</p>
              <div className="space-y-2 text-xs text-neutral-600">
                <div className="rounded-lg border px-2 py-2">Room: Design Crit</div>
                <div className="rounded-lg border px-2 py-2">Room: Daily Sync</div>
              </div>
            </aside>

            <main className="col-span-12 md:col-span-9 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Brand Refresh</h3>
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
