import { ArrowRight, CheckCircle2, Sparkles, Wand2, Palette, Type, LayoutTemplate, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { featureCards, pricingPlans } from '../data/mockData';

export function MarketingPage({ isAuthenticated }: { isAuthenticated: boolean }) {
  return (
    <div className="app-shell min-h-screen text-offwhite">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#111318]/80 backdrop-blur-xl">
        <div className="container flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3 text-lg font-semibold">
            <span className="logo-mark">B</span>
            BrandForge
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#features">Features</a>
            <a href="#showcase">Showcase</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link to={isAuthenticated ? '/dashboard' : '/auth'} className="ghost-btn hidden sm:inline-flex">
              {isAuthenticated ? 'Dashboard' : 'Sign in'}
            </Link>
            <Link to={isAuthenticated ? '/wizard' : '/auth'} className="primary-btn inline-flex items-center gap-2">
              Start Creating <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="container grid items-center gap-12 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
          <div>
            <div className="brand-chip mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium">
              <Sparkles size={14} />
              Built for modern brand teams
            </div>
            <h1 className="section-title mb-6">
              Build a brand that looks like your vision.
            </h1>
            <p className="max-w-xl text-base text-slate-300 md:text-lg">
              Create distinctive brand identities, explore creative directions, and transform your business ideas into complete visual systems.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to={isAuthenticated ? '/wizard' : '/auth'} className="primary-btn inline-flex items-center gap-2">
                Start Creating <ArrowRight size={18} />
              </Link>
              <a href="#features" className="secondary-btn inline-flex items-center gap-2">
                Explore Features <ChevronRight size={16} />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-accent" /> AI-ready workflows</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-accent" /> Export-ready packages</span>
            </div>
          </div>

          <div className="hero-mockup rounded-[2rem] p-5">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="logo-mark">B</span>
                <div>
                  <p className="text-sm font-medium text-white">BrandForge studio</p>
                  <p className="text-xs text-slate-400">Northstar Studio</p>
                </div>
              </div>
              <div className="rounded-full border border-[#b8f36b]/40 bg-[#b8f36b]/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#dfffae]">
                Live concept
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-3xl border border-white/10 bg-[#181d23] p-4">
                <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
                  <span>Brand direction</span>
                  <span>Premium</span>
                </div>
                <div className="mb-6">
                  <div className="text-4xl font-bold tracking-[-0.08em] text-white">Northstar</div>
                  <div className="mt-2 text-lg italic text-slate-300">Studio</div>
                </div>
                <div className="mb-6 flex gap-2">
                  {['#111318', '#F8F8F5', '#B8F36B', '#8A8D96'].map((color) => (
                    <span key={color} className="h-8 w-8 rounded-full border border-white/10" style={{ backgroundColor: color }} />
                  ))}
                </div>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2"><span>Logo system</span><span className="text-white">Wordmark</span></div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-2"><span>Typography</span><span className="text-white">Sora + Inter</span></div>
                  <div className="flex items-center justify-between"><span>Mockup scenes</span><span className="text-white">12 ready</span></div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#b8f36b]/15 via-transparent to-transparent p-4">
                  <p className="mb-3 text-xs uppercase tracking-[0.18em] text-slate-400">Guidelines</p>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-slate-300">Brand voice</span>
                    <span className="text-white">Confident</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-slate-300">Positioning</span>
                    <span className="text-white">Modern premium</span>
                  </div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-[#111318] p-4">
                  <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-400">
                    <span>Palette</span>
                    <span>Ready</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {['#111318', '#B8F36B', '#8A8D96', '#F8F8F5'].map((hex) => (
                      <span key={hex} className="h-12 rounded-xl" style={{ backgroundColor: hex }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="container py-16 md:py-24">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.22em] text-[#b8f36b]">How it works</p>
            <h2 className="section-title text-4xl md:text-5xl">A complete studio from brief to brand package.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map(({ title, description }) => (
              <div key={title} className="panel rounded-3xl p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#b8f36b]/10 text-[#dfffae]">
                  {title.includes('Brand') ? <Wand2 size={22} /> : title.includes('Creative') ? <Palette size={22} /> : title.includes('Presentation') ? <LayoutTemplate size={22} /> : <Type size={22} />}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
                <p className="text-sm leading-7 text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="showcase" className="container py-16 md:py-24">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.22em] text-[#b8f36b]">Brand identity showcase</p>
              <h2 className="section-title text-4xl md:text-5xl">Identity systems shaped for real businesses.</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {['Northstar Studio', 'Kite Harbor', 'Stellar Foundry'].map((name, index) => (
              <div key={name} className="panel rounded-[28px] p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="logo-mark">{name[0]}</span>
                    <div>
                      <p className="font-medium text-white">{name}</p>
                      <p className="text-xs text-slate-400">Brand system</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">{index % 2 === 0 ? 'Live' : 'Draft'}</span>
                </div>
                <div className="preview-box p-4">
                  <div className="mb-4 flex gap-2">
                    {['#111318', '#B8F36B', '#8A8D96', '#F8F8F5'].map((color) => (
                      <span key={color} className="h-7 w-7 rounded-full" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                  <div className="text-3xl font-bold tracking-[-0.08em] text-white">{name.split(' ')[0]}</div>
                  <div className="mt-2 text-sm italic text-slate-300">Refined positioning</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="container py-16 md:py-24">
          <div className="mb-10 max-w-xl">
            <p className="mb-3 text-sm uppercase tracking-[0.22em] text-[#b8f36b]">Pricing</p>
            <h2 className="section-title text-4xl md:text-5xl">Flexible plans for growing brands.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div key={plan.name} className="panel rounded-[28px] p-6" style={{ borderColor: `${plan.accent}55` }}>
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
                  <span className="rounded-full border border-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">{plan.name === 'Pro' ? 'Popular' : 'Starter'}</span>
                </div>
                <div className="mb-6 text-4xl font-bold tracking-[-0.06em] text-white">{plan.price}<span className="text-lg text-slate-400">/mo</span></div>
                <ul className="space-y-3 text-sm text-slate-300">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3"><CheckCircle2 size={16} className="text-[#b8f36b]" />{feature}</li>
                  ))}
                </ul>
                <Link to="/auth" className="primary-btn mt-8 inline-flex w-full justify-center">Choose {plan.name}</Link>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="container pb-20 pt-16 md:pb-28 md:pt-24">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.22em] text-[#b8f36b]">FAQ</p>
              <h2 className="section-title text-4xl md:text-5xl">Everything you need to know.</h2>
            </div>
            <div className="space-y-4 text-slate-300">
              <div className="panel rounded-2xl p-5">
                <p className="mb-2 text-lg font-medium text-white">Is BrandForge only for logos?</p>
                <p>No. BrandForge covers brand strategy, mood direction, color systems, typography, mockups, guidelines, and export-ready assets.</p>
              </div>
              <div className="panel rounded-2xl p-5">
                <p className="mb-2 text-lg font-medium text-white">Can I export my work?</p>
                <p>Yes — SVG, PNG, PDF, and ZIP brand packages are all included in the platform architecture.</p>
              </div>
              <div className="panel rounded-2xl p-5">
                <p className="mb-2 text-lg font-medium text-white">Is this ready for real teams?</p>
                <p>BrandForge is built to scale with Supabase-ready architecture, entitlements, and future AI provider integrations.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="container flex flex-col gap-4 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="logo-mark">B</span>
            BrandForge
          </div>
          <div className="flex gap-8">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
