import { useMemo, useState } from 'react';
import { AlignCenter, AlignLeft, AlignRight, Download, Layers3, RotateCcw, RotateCw, ZoomIn, ZoomOut } from 'lucide-react';

const fonts = ['Inter', 'Georgia', 'Poppins', 'Playfair Display', 'Montserrat', 'Helvetica'];

export function LogoStudioPage() {
  const [brandName, setBrandName] = useState('Northstar');
  const [fontFamily, setFontFamily] = useState('Inter');
  const [fontSize, setFontSize] = useState(72);
  const [fontWeight, setFontWeight] = useState(700);
  const [letterSpacing, setLetterSpacing] = useState(1);
  const [color, setColor] = useState('#F8F8F5');
  const [bgColor, setBgColor] = useState('#111318');
  const [alignment, setAlignment] = useState<'left' | 'center' | 'right'>('center');
  const [shape, setShape] = useState<'none' | 'circle' | 'square'>('circle');
  const [zoom, setZoom] = useState(1);

  const svgMarkup = useMemo(() => {
    const anchor = alignment === 'left' ? 'start' : alignment === 'center' ? 'middle' : 'end';
    const xValue = alignment === 'left' ? 90 : alignment === 'center' ? 380 : 670;

    return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 280" width="760" height="280">
        <rect width="760" height="280" fill="${bgColor}" />
        <g transform="translate(40,20)">
          ${shape === 'none' ? '' : `<g>
            <rect x="0" y="70" width="72" height="72" rx="18" fill="${shape === 'square' ? '#B8F36B' : '#111318'}" stroke="#B8F36B" stroke-width="3" />
            ${shape === 'circle' ? '<circle cx="36" cy="106" r="28" fill="#B8F36B" />' : ''}
          </g>`}
          <text
            x="${shape === 'none' ? 40 : 120}"
            y="140"
            text-anchor="${anchor}"
            font-size="${fontSize}"
            font-weight="${fontWeight}"
            letter-spacing="${letterSpacing}"
            font-family="${fontFamily}"
            fill="${color}"
          >${brandName}</text>
        </g>
      </svg>
    `;
  }, [alignment, bgColor, brandName, color, fontFamily, fontSize, fontWeight, letterSpacing, shape]);

  const handleExport = () => {
    const blob = new Blob([svgMarkup], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${brandName.toLowerCase().replace(/\s+/g, '-')}-logo.svg`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="app-shell min-h-screen bg-[#111318] px-4 py-8 text-offwhite">
      <div className="container">
        <div className="mb-8 panel rounded-[28px] p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#b8f36b]">Logo studio</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-[-0.07em] text-white">Vector identity editor</h1>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" className="secondary-btn inline-flex items-center gap-2"><RotateCcw size={16} /> Undo</button>
              <button type="button" className="secondary-btn inline-flex items-center gap-2"><RotateCw size={16} /> Redo</button>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <aside className="panel rounded-[28px] p-5">
            <div className="space-y-5">
              <label className="block text-sm text-slate-300">
                <span className="mb-2 block">Logo text</span>
                <input className="input-base" value={brandName} onChange={(e) => setBrandName(e.target.value)} />
              </label>

              <label className="block text-sm text-slate-300">
                <span className="mb-2 block">Font family</span>
                <select className="input-base" value={fontFamily} onChange={(e) => setFontFamily(e.target.value)}>
                  {fonts.map((font) => <option key={font}>{font}</option>)}
                </select>
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm text-slate-300">
                  <span className="mb-2 block">Size</span>
                  <input type="range" className="range-input w-full" min={32} max={120} value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} />
                  <span className="mt-2 block text-xs text-slate-400">{fontSize}px</span>
                </label>
                <label className="block text-sm text-slate-300">
                  <span className="mb-2 block">Weight</span>
                  <input type="range" className="range-input w-full" min={400} max={900} step={100} value={fontWeight} onChange={(e) => setFontWeight(Number(e.target.value))} />
                  <span className="mt-2 block text-xs text-slate-400">{fontWeight}</span>
                </label>
              </div>

              <label className="block text-sm text-slate-300">
                <span className="mb-2 block">Letter spacing</span>
                <input type="range" className="range-input w-full" min={-2} max={12} value={letterSpacing} onChange={(e) => setLetterSpacing(Number(e.target.value))} />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm text-slate-300">
                  <span className="mb-2 block">Text color</span>
                  <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="h-12 w-full rounded-xl border border-white/10 bg-transparent" />
                </label>
                <label className="block text-sm text-slate-300">
                  <span className="mb-2 block">Background</span>
                  <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="h-12 w-full rounded-xl border border-white/10 bg-transparent" />
                </label>
              </div>

              <div>
                <p className="mb-2 text-sm text-slate-300">Alignment</p>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    ['left', <AlignLeft key="left" size={16} />],
                    ['center', <AlignCenter key="center" size={16} />],
                    ['right', <AlignRight key="right" size={16} />],
                  ].map(([value, icon]) => (
                    <button type="button" key={String(value)} onClick={() => setAlignment(value as 'left' | 'center' | 'right')} className={`rounded-xl border px-3 py-2 ${alignment === value ? 'border-[#b8f36b] bg-[#b8f36b]/10 text-[#dfffae]' : 'border-white/10 bg-white/5 text-slate-300'}`}>
                      {icon}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-2 text-sm text-slate-300">Graphic shape</p>
                <div className="flex gap-2">
                  {['none', 'circle', 'square'].map((value) => (
                    <button type="button" key={value} onClick={() => setShape(value as 'none' | 'circle' | 'square')} className={`rounded-xl border px-3 py-2 text-sm ${shape === value ? 'border-[#b8f36b] bg-[#b8f36b]/10 text-[#dfffae]' : 'border-white/10 bg-white/5 text-slate-300'}`}>
                      {value === 'none' ? 'None' : value === 'circle' ? 'Circle' : 'Square'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button type="button" onClick={() => setZoom((value) => Math.max(0.7, Number((value - 0.1).toFixed(1))))} className="secondary-btn inline-flex items-center gap-2"><ZoomOut size={16} /> </button>
                <button type="button" onClick={() => setZoom((value) => Math.min(1.4, Number((value + 0.1).toFixed(1))))} className="secondary-btn inline-flex items-center gap-2"><ZoomIn size={16} /> </button>
                <span className="text-sm text-slate-400">{zoom.toFixed(1)}x</span>
              </div>
            </div>
          </aside>

          <div className="panel rounded-[28px] p-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-300"><Layers3 size={18} className="text-[#b8f36b]" /> Layer stack</div>
              <button type="button" onClick={handleExport} className="primary-btn inline-flex items-center gap-2"><Download size={16} /> Export SVG</button>
            </div>

            <div className="preview-box flex items-center justify-center overflow-auto p-4">
              <div className="rounded-[22px] border border-white/10 bg-[#111318] p-6">
                <div dangerouslySetInnerHTML={{ __html: svgMarkup }} style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
