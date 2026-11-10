import { useState } from 'react';
import { Copy, Lock, RefreshCw, Wand2 } from 'lucide-react';
import { generatePalette, contrastRatio } from '../data/mockData';

export function PaletteStudioPage() {
  const [kind, setKind] = useState('complementary');
  const [seed, setSeed] = useState('Northstar');
  const [palette, setPalette] = useState(generatePalette(kind, seed));

  const regenerate = () => {
    setPalette(generatePalette(kind, seed));
  };

  const copyHex = async (hex: string) => {
    await navigator.clipboard.writeText(hex);
  };

  return (
    <div className="app-shell min-h-screen bg-[#111318] px-4 py-8 text-offwhite">
      <div className="container">
        <div className="mb-8 panel rounded-[28px] p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#b8f36b]">Color studio</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-[-0.07em] text-white">Palette generator</h1>
            </div>
            <button type="button" onClick={regenerate} className="primary-btn inline-flex items-center gap-2"><RefreshCw size={16} /> Generate palette</button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          <aside className="panel rounded-[28px] p-5">
            <label className="block text-sm text-slate-300">
              <span className="mb-2 block">Brand seed</span>
              <input className="input-base" value={seed} onChange={(e) => setSeed(e.target.value)} />
            </label>
            <div className="mt-5 space-y-2">
              {['complementary', 'analogous', 'monochromatic', 'triadic', 'neutral', 'custom'].map((value) => (
                <button type="button" key={value} onClick={() => setKind(value)} className={`w-full rounded-xl border px-3 py-2 text-left text-sm ${kind === value ? 'border-[#b8f36b] bg-[#b8f36b]/10 text-[#dfffae]' : 'border-white/10 bg-white/5 text-slate-300'}`}>
                  {value}
                </button>
              ))}
            </div>
          </aside>

          <div className="space-y-6">
            <div className="panel rounded-[28px] p-5">
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {palette.map((color) => {
                  const ratio = contrastRatio(color.hex, '#111318');
                  return (
                    <div key={color.name} className="rounded-2xl border border-white/10 bg-[#111318] p-3">
                      <div className="mb-3 h-32 rounded-xl border border-white/10" style={{ backgroundColor: color.hex }} />
                      <div className="flex items-center justify-between text-sm text-slate-300">
                        <span>{color.hex}</span>
                        <div className="flex gap-2">
                          <button type="button" onClick={() => copyHex(color.hex)} className="text-[#b8f36b]"><Copy size={15} /></button>
                          <button type="button" className="text-slate-400"><Lock size={15} /></button>
                        </div>
                      </div>
                      <p className="mt-2 text-xs text-slate-400">{color.rgb}</p>
                      <p className="mt-1 text-xs text-slate-400">{color.hsl}</p>
                      <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-slate-400">Contrast {ratio.toFixed(2)}:1</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="panel rounded-[28px] p-5">
              <div className="mb-4 flex items-center gap-2 text-[#b8f36b]"><Wand2 size={18} /> Accessibility preview</div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-[#F8F8F5] p-5 text-[#111318]">
                  <p className="text-xl font-bold">Brand heading</p>
                  <p className="mt-2 text-sm">Readable on light background.</p>
                </div>
                <div className="rounded-2xl bg-[#111318] p-5 text-[#F8F8F5]">
                  <p className="text-xl font-bold">Brand heading</p>
                  <p className="mt-2 text-sm">Readable on dark background.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
