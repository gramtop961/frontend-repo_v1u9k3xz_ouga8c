import { LayoutDashboard, Image as ImageIcon, Mic, Shield, Sparkles } from 'lucide-react';

export default function FeatureGrid() {
  const features = [
    {
      icon: LayoutDashboard,
      title: 'Flow-first Kanban',
      desc: 'A board that feels buttery—snappy drag, multiplayer cursors, and inline comments. Designed for creatives, not paperwork.'
    },
    {
      icon: ImageIcon,
      title: 'Shared moodboards',
      desc: 'Pin Figma frames, shots, and links into living boards. React in real-time with stickers and emoji bursts.'
    },
    {
      icon: Mic,
      title: 'Audio huddles',
      desc: 'Jump into quick voice rooms straight from a card or board. Spatial audio makes side-convos feel natural.'
    },
    {
      icon: Shield,
      title: 'Private by default',
      desc: 'Granular roles, SSO/SAML, and on-request audit logs. Your creative process stays yours.'
    },
  ];

  return (
    <section id="features" className="relative w-full py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-fuchsia-600">Features</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">Built for bright, collaborative work</h2>
            <p className="mt-3 text-neutral-600 max-w-2xl">Loopwork blends the playfulness of moodboards with the discipline of Kanban—plus spontaneous audio to keep momentum high.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm text-neutral-500">
            <Sparkles size={16} /> Multiplayer magic
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-black/10 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-fuchsia-500 via-rose-500 to-amber-400 text-white p-2">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
