import { useState } from 'react';
import { ImageDown, SlidersHorizontal } from 'lucide-react';

const scenes = ['Business cards', 'Letterheads', 'T-shirts', 'Storefront signage', 'Packaging'];

export function MockupStudioPage() {
  const [scene, setScene] = useState('Business cards');
  const [logoScale, setLogoScale] = useState(1);
  const [color, setColor] = useState('#B8F36B');

  return (
    <div className="app-shell min-h-screen bg-[#111318] px-4 py-8 text-offwhite">
      <div className="container">
        <div className="mb-8 panel rounded-[28px] p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#b8f36b]">Mockup studio</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-[-0.07em] text-white">Presentation scenes</h1>
            </div>
            <button type="button" className="primary-btn inline-flex items-center gap-2"><ImageDown size={16} /> Export mockup</button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          <aside className="panel rounded-[28px] p-5">
            <label className="block text-sm text-slate-300">
              <span className="mb-2 block">Scene</span>
              <select className="input-base" value={scene} onChange={(e) => setScene(e.target.value)}>
                {scenes.map((value) => <option key={value}>{value}</option>)}
              </select>
            </label>
            <div className="mt-5">
              <div className="mb-2 flex items-center gap-2 text-sm text-slate-300"><SlidersHorizontal size={16} className="text-[#b8f36b]" /> Position</div>
              <input type="range" className="range-input w-full" min={0.7} max={1.5} step={0.1} value={logoScale} onChange={(e) => setLogoScale(Number(e.target.value))} />
              <p className="mt-2 text-xs text-slate-400">{logoScale.toFixed(1)}x scale</p>
            </div>
            <label className="mt-5 block text-sm text-slate-300">
              <span className="mb-2 block">Scene accent</span>
              <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="h-12 w-full rounded-xl border border-white/10 bg-transparent" />
            </label>
          </aside>

          <div className="panel rounded-[28px] p-6">
            <div className="mockup-scene flex min-h-[500px] items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(184,243,107,0.15),_transparent_35%)] p-6">
              <div className="relative h-[360px] w-full max-w-[760px] rounded-[26px] border border-white/10 bg-[#111318] p-6">
                <div className="absolute inset-4 rounded-[18px] border border-dashed border-white/10" />
                <div className="absolute left-10 top-10 h-32 w-52 rounded-[20px] border border-white/10 bg-[#1a1d23] p-4 shadow-soft">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="logo-mark">B</span>
                    <div className="text-sm font-semibold text-white">Northstar</div>
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Brand system</div>
                </div>
                <div className="absolute bottom-12 right-10 h-20 w-40 rounded-[18px] border border-white/10 bg-[#121821] p-3">
                  <div className="h-full w-full rounded-[12px]" style={{ backgroundColor: color }} />
                </div>
                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border border-white/10 bg-[#10171d] p-6 shadow-soft" style={{ transform: `translate(-50%, -50%) scale(${logoScale})` }}>
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-[#111318]" style={{ backgroundColor: color }}>N</span>
                    <div className="text-2xl font-bold tracking-[-0.08em] text-white">Northstar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
