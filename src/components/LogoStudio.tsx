import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, RefreshCw, Sparkles, Star } from 'lucide-react';
import { brandTraits } from '../data/mockData';
import { generateBrandConcepts } from '../data/mockData';

const initialForm = {
  businessName: 'Northstar Studio',
  industry: 'Design consultancy',
  description: 'Helping startups craft premium digital identities and launch-ready brand systems.',
  audience: 'Founders and product teams',
  website: 'northstarstudio.co',
  tagline: 'Clarity in motion',
  traits: ['Modern', 'Minimalist', 'Professional'],
  paletteDirection: 'Deep charcoal + soft neutral with green accent',
  logoStyle: 'Wordmark',
  typographyPreference: 'High-contrast serif + modern sans',
  inspiration: 'Linear, premium, editorial',
};

export function BrandWizardPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [concepts, setConcepts] = useState(generateBrandConcepts({
    businessName: form.businessName,
    industry: form.industry,
    description: form.description,
    audience: form.audience,
    personality: form.traits,
  }));

  const canAdvance = useMemo(() => {
    if (step === 1) {
      return form.businessName.trim().length > 0 && form.industry.trim().length > 0 && form.description.trim().length > 0;
    }
    if (step === 2) return form.traits.length > 0;
    if (step === 3) return form.paletteDirection.trim().length > 0 && form.logoStyle.trim().length > 0;
    return true;
  }, [form, step]);

  const toggleTrait = (trait: string) => {
    setForm((current) => ({
      ...current,
      traits: current.traits.includes(trait)
        ? current.traits.filter((value) => value !== trait)
        : [...current.traits, trait],
    }));
  };

  const next = () => setStep((current) => Math.min(current + 1, 4));
  const prev = () => setStep((current) => Math.max(current - 1, 1));

  const regenerate = () => {
    const nextConcepts = generateBrandConcepts({
      businessName: form.businessName,
      industry: form.industry,
      description: form.description,
      audience: form.audience,
      personality: form.traits,
    });
    setConcepts(nextConcepts);
  };

  return (
    <div className="app-shell min-h-screen bg-[#111318] px-4 py-8 text-offwhite">
      <div className="container">
        <div className="mb-8 panel rounded-[28px] p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#b8f36b]">Brand wizard</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-[-0.07em] text-white">Create a new brand identity</h1>
            </div>
            <div className="flex gap-2 text-sm text-slate-400">
              {[1, 2, 3, 4].map((index) => (
                <span key={index} className={`flex h-8 w-8 items-center justify-center rounded-full border ${step === index ? 'border-[#b8f36b] bg-[#b8f36b]/10 text-[#dfffae]' : 'border-white/10 bg-white/5'}`}>
                  {index}
                </span>
              ))}
            </div>
          </div>
        </div>

        {step === 1 && (
          <div className="panel rounded-[28px] p-6">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.2em] text-[#b8f36b]">Step 1</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.06em] text-white">Business information</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <label className="block text-sm text-slate-300">
                <span className="mb-2 block">Business name</span>
                <input className="input-base" value={form.businessName} onChange={(e) => setForm({ ...form, businessName: e.target.value })} />
              </label>
              <label className="block text-sm text-slate-300">
                <span className="mb-2 block">Industry</span>
                <input className="input-base" value={form.industry} onChange={(e) => setForm({ ...form, industry: e.target.value })} />
              </label>
              <label className="block text-sm text-slate-300 md:col-span-2">
                <span className="mb-2 block">Business description</span>
                <textarea className="input-base min-h-[120px]" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
              </label>
              <label className="block text-sm text-slate-300">
                <span className="mb-2 block">Target audience</span>
                <input className="input-base" value={form.audience} onChange={(e) => setForm({ ...form, audience: e.target.value })} />
              </label>
              <label className="block text-sm text-slate-300">
                <span className="mb-2 block">Website</span>
                <input className="input-base" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} />
              </label>
              <label className="block text-sm text-slate-300 md:col-span-2">
                <span className="mb-2 block">Tagline</span>
                <input className="input-base" value={form.tagline} onChange={(e) => setForm({ ...form, tagline: e.target.value })} />
              </label>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="panel rounded-[28px] p-6">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.2em] text-[#b8f36b]">Step 2</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.06em] text-white">Brand personality</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {brandTraits.map((trait) => {
                const active = form.traits.includes(trait);
                return (
                  <button type="button" key={trait} onClick={() => toggleTrait(trait)} className={`rounded-full border px-4 py-2 text-sm font-medium ${active ? 'border-[#b8f36b] bg-[#b8f36b]/10 text-[#dfffae]' : 'border-white/10 bg-white/5 text-slate-300'}`}>
                    {active ? <span className="inline-flex items-center gap-2"><Check size={14} /> {trait}</span> : trait}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="panel rounded-[28px] p-6">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.2em] text-[#b8f36b]">Step 3</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.06em] text-white">Visual direction</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <label className="block text-sm text-slate-300">
                <span className="mb-2 block">Preferred color direction</span>
                <input className="input-base" value={form.paletteDirection} onChange={(e) => setForm({ ...form, paletteDirection: e.target.value })} />
              </label>
              <label className="block text-sm text-slate-300">
                <span className="mb-2 block">Logo style</span>
                <select className="input-base" value={form.logoStyle} onChange={(e) => setForm({ ...form, logoStyle: e.target.value })}>
                  <option>Wordmark</option>
                  <option>Lettermark</option>
                  <option>Abstract symbol</option>
                  <option>Combination mark</option>
                  <option>Emblem</option>
                  <option>Monogram</option>
                </select>
              </label>
              <label className="block text-sm text-slate-300">
                <span className="mb-2 block">Typography preference</span>
                <input className="input-base" value={form.typographyPreference} onChange={(e) => setForm({ ...form, typographyPreference: e.target.value })} />
              </label>
              <label className="block text-sm text-slate-300">
                <span className="mb-2 block">Visual inspiration</span>
                <input className="input-base" value={form.inspiration} onChange={(e) => setForm({ ...form, inspiration: e.target.value })} />
              </label>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <div className="panel rounded-[28px] p-6">
              <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-[#b8f36b]">Step 4</p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-[-0.06em] text-white">Brand concepts</h2>
                </div>
                <button type="button" onClick={regenerate} className="secondary-btn inline-flex items-center gap-2"><RefreshCw size={16} /> Regenerate concepts</button>
              </div>

              <div className="grid gap-5 lg:grid-cols-3">
                {concepts.map((concept) => (
                  <div key={concept.id} className="rounded-[24px] border border-white/10 bg-[#151b22] p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <p className="text-lg font-semibold text-white">{concept.name}</p>
                        <p className="text-xs uppercase tracking-[0.18em] text-[#b8f36b]">{concept.type}</p>
                      </div>
                      <Star size={18} className="text-[#b8f36b]" />
                    </div>
                    <div className="mb-4 flex gap-2">
                      {concept.palette.map((hex) => (
                        <span key={`${concept.id}-${hex}`} className="h-7 w-7 rounded-full border border-white/10" style={{ backgroundColor: hex }} />
                      ))}
                    </div>
                    <p className="mb-5 text-sm text-slate-300">{concept.description}</p>
                    <div className="flex items-center justify-between text-sm text-slate-400">
                      <span>{concept.style}</span>
                      <button type="button" className="text-[#b8f36b]">Select</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 flex justify-between pb-10">
          <button type="button" onClick={prev} disabled={step === 1} className="ghost-btn inline-flex items-center gap-2 disabled:opacity-40">
            <ArrowLeft size={16} /> Previous
          </button>
          {step < 4 ? (
            <button type="button" onClick={next} disabled={!canAdvance} className="primary-btn inline-flex items-center gap-2 disabled:opacity-40">
              Next <ArrowRight size={16} />
            </button>
          ) : (
            <button type="button" className="primary-btn inline-flex items-center gap-2"><Sparkles size={16} /> Save brand concept</button>
          )}
        </div>
      </div>
    </div>
  );
}
