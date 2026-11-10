import { useState } from 'react';
import { Sparkles } from 'lucide-react';

const pairings = [
  { heading: 'Playfair Display', body: 'Inter', accent: 'Cormorant Garamond' },
  { heading: 'Poppins', body: 'Inter', accent: 'Lora' },
  { heading: 'Sora', body: 'Manrope', accent: 'Cormorant Garamond' },
];

export function TypographyStudioPage() {
  const [brandName, setBrandName] = useState('Northstar');
  const [heading, setHeading] = useState('Playfair Display');
  const [body, setBody] = useState('Inter');
  const [accent, setAccent] = useState('Cormorant Garamond');

  return (
    <div className="app-shell min-h-screen bg-[#111318] px-4 py-8 text-offwhite">
      <div className="container">
        <div className="mb-8 panel rounded-[28px] p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#b8f36b]">Typography system</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-[-0.07em] text-white">Brand typography workspace</h1>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#b8f36b]/30 bg-[#b8f36b]/10 px-3 py-1.5 text-sm text-[#dfffae]">
              <Sparkles size={15} /> Pairing ready
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          <aside className="panel rounded-[28px] p-5">
            <label className="block text-sm text-slate-300">
              <span className="mb-2 block">Brand name</span>
              <input className="input-base" value={brandName} onChange={(e) => setBrandName(e.target.value)} />
            </label>
            <div className="mt-5 space-y-4">
              <label className="block text-sm text-slate-300">
                <span className="mb-2 block">Heading font</span>
                <select className="input-base" value={heading} onChange={(e) => setHeading(e.target.value)}>
                  {['Playfair Display', 'Sora', 'Poppins', 'Montserrat'].map((font) => <option key={font}>{font}</option>)}
                </select>
              </label>
              <label className="block text-sm text-slate-300">
                <span className="mb-2 block">Body font</span>
                <select className="input-base" value={body} onChange={(e) => setBody(e.target.value)}>
                  {['Inter', 'Manrope', 'Lato', 'Open Sans'].map((font) => <option key={font}>{font}</option>)}
                </select>
              </label>
              <label className="block text-sm text-slate-300">
                <span className="mb-2 block">Accent font</span>
                <select className="input-base" value={accent} onChange={(e) => setAccent(e.target.value)}>
                  {['Cormorant Garamond', 'Libre Baskerville', 'Merriweather', 'Lora'].map((font) => <option key={font}>{font}</option>)}
                </select>
              </label>
            </div>
          </aside>

          <div className="space-y-6">
            <div className="panel rounded-[28px] p-6">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">Preview</h3>
                <span className="text-sm text-slate-400">{brandName}</span>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-[#111318] p-6">
                <div className="mb-3 text-5xl font-bold tracking-[-0.08em]" style={{ fontFamily: heading }}>{brandName}</div>
                <div className="mb-4 text-lg text-slate-300" style={{ fontFamily: body }}>
                  Build your next chapter with a decisive brand presence and a cohesive customer experience.
                </div>
                <div className="text-2xl italic text-[#b8f36b]" style={{ fontFamily: accent }}>Clear, premium, memorable.</div>
              </div>
            </div>

            <div className="panel rounded-[28px] p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">Recommended pairings</h3>
              <div className="grid gap-4 md:grid-cols-3">
                {pairings.map((pair) => (
                  <div key={`${pair.heading}-${pair.body}`} className="rounded-[24px] border border-white/10 bg-[#151b22] p-4">
                    <div className="text-2xl font-bold tracking-[-0.06em]" style={{ fontFamily: pair.heading }}>{brandName}</div>
                    <div className="mt-2 text-sm text-slate-300" style={{ fontFamily: pair.body }}>Editorial clarity for product storytelling.</div>
                    <div className="mt-3 text-sm italic text-[#b8f36b]" style={{ fontFamily: pair.accent }}>Signature accent</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
