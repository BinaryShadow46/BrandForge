import { FileText, Download, PackageOpen } from 'lucide-react';
import { exportBrandPdf, exportBrandZip } from '../lib/exporters';

const palette = ['#111318', '#F8F8F5', '#B8F36B', '#8A8D96', '#D7E9C7'];

export function GuidelinesPage() {
  const handlePdf = async () => {
    await exportBrandPdf('Northstar Studio', palette, 'Clarity in motion');
  };

  const handleZip = async () => {
    await exportBrandZip('Northstar Studio', palette, 'Clarity in motion');
  };

  return (
    <div className="app-shell min-h-screen bg-[#111318] px-4 py-8 text-offwhite">
      <div className="container">
        <div className="mb-8 panel rounded-[28px] p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#b8f36b]">Guidelines</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-[-0.07em] text-white">Brand system documentation</h1>
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={handlePdf} className="primary-btn inline-flex items-center gap-2"><FileText size={16} /> Export PDF</button>
              <button type="button" onClick={handleZip} className="secondary-btn inline-flex items-center gap-2"><PackageOpen size={16} /> Export ZIP</button>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="panel rounded-[28px] p-6">
            <h2 className="mb-5 text-2xl font-semibold text-white">Northstar Studio</h2>
            <p className="mb-5 text-slate-300">A premium identity built for clear storytelling, modern positioning, and consistent digital execution.</p>
            <div className="space-y-5 text-sm text-slate-300">
              <div className="border-b border-white/10 pb-3"><strong className="text-white">Mission:</strong> Help founders and product teams clarify their voice and build trust with confident, memorable design.</div>
              <div className="border-b border-white/10 pb-3"><strong className="text-white">Positioning:</strong> Premium, editorial, and modern—clear enough for real business growth.</div>
              <div className="border-b border-white/10 pb-3"><strong className="text-white">Logo usage:</strong> Maintain clear space equal to the capital height, use on dark or light surfaces with high contrast.</div>
              <div><strong className="text-white">Minimum size:</strong> 32px for digital and 18mm for print.</div>
            </div>
          </div>

          <div className="panel rounded-[28px] p-6">
            <h2 className="mb-5 text-2xl font-semibold text-white">Primary palette</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {palette.map((hex) => (
                <div key={hex} className="rounded-2xl border border-white/10 bg-[#111318] p-3">
                  <div className="mb-2 h-16 rounded-xl border border-white/10" style={{ backgroundColor: hex }} />
                  <div className="text-sm text-white">{hex}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
