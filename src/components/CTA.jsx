export default function CTA() {
  return (
    <section id="cta" className="relative w-full py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-black/10 bg-gradient-to-br from-fuchsia-500 via-rose-500 to-amber-400 p-1 shadow-lg">
          <div className="rounded-[14px] bg-white p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Spin up your first workspace in minutes</h3>
              <p className="mt-2 text-neutral-600 max-w-xl">Invite your team, import your boards, and start shipping with flow. Free for small teams during beta.</p>
            </div>
            <div className="flex gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-black text-white px-5 py-3 font-semibold shadow hover:shadow-lg transition-transform hover:-translate-y-0.5">Get started free</a>
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white border border-black/10 px-5 py-3 font-semibold hover:border-black/30">Book a demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
