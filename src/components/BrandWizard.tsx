import { FolderOpen, Plus, ArrowUpRight, LogOut, Sparkles, Layers3, Wand2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectCards } from '../data/mockData';

export function DashboardPage({ onLogout }: { onLogout: () => void }) {
  return (
    <div className="app-shell min-h-screen bg-[#111318] px-4 py-8 text-offwhite">
      <div className="container">
        <header className="mb-10 flex flex-col gap-5 rounded-[28px] border border-white/10 bg-[#141b22]/80 p-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="logo-mark">B</span>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#b8f36b]">Workspace</p>
              <h1 className="text-2xl font-semibold tracking-[-0.06em] text-white">BrandForge dashboard</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/wizard" className="primary-btn inline-flex items-center gap-2"><Plus size={16} /> Create New Brand</Link>
            <button type="button" onClick={onLogout} className="ghost-btn inline-flex items-center gap-2"><LogOut size={16} /> Logout</button>
          </div>
        </header>

        <div className="mb-10 grid gap-6 md:grid-cols-[1.3fr_0.7fr]">
          <div className="panel rounded-[28px] p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#b8f36b]">Welcome back</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-[-0.07em] text-white">Design your next brand story.</h2>
              </div>
              <Sparkles className="text-[#b8f36b]" size={24} />
            </div>
            <p className="max-w-xl text-slate-300">Develop a polished visual identity across concept generation, palette exploration, typography refinement, and mockup presentation.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/wizard" className="primary-btn inline-flex items-center gap-2"><Wand2 size={16} /> Launch wizard</Link>
              <Link to="/studio/logo" className="secondary-btn inline-flex items-center gap-2"><Layers3 size={16} /> Open studio</Link>
            </div>
          </div>

          <div className="panel rounded-[28px] p-6">
            <p className="text-sm uppercase tracking-[0.22em] text-[#b8f36b]">Account</p>
            <div className="mt-4 space-y-4 text-sm text-slate-300">
              <div className="flex items-center justify-between"><span>Plan</span><span className="text-white">Pro</span></div>
              <div className="flex items-center justify-between"><span>Projects</span><span className="text-white">12</span></div>
              <div className="flex items-center justify-between"><span>Exports</span><span className="text-white">48</span></div>
            </div>
          </div>
        </div>

        <div className="mb-10 grid gap-6 lg:grid-cols-3">
          {projectCards.map((project) => (
            <div key={project.name} className="panel rounded-[24px] p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-[#111318]" style={{ backgroundColor: project.accent }}>{project.name[0]}</span>
                  <div>
                    <p className="font-medium text-white">{project.name}</p>
                    <p className="text-xs text-slate-400">{project.type}</p>
                  </div>
                </div>
                <span className="rounded-full border border-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-slate-300">{project.status}</span>
              </div>

              <div className="mb-4 rounded-2xl border border-white/10 bg-[#111318] p-4">
                <div className="mb-4 flex gap-2">
                  {['#111318', project.accent, '#8A8D96', '#F8F8F5'].map((hex) => (
                    <span key={hex} className="h-7 w-7 rounded-full" style={{ backgroundColor: hex }} />
                  ))}
                </div>
                <div className="text-3xl font-bold tracking-[-0.08em] text-white">{project.name.split(' ')[0]}</div>
                <div className="mt-2 text-xs text-slate-400">Updated {project.updated}</div>
              </div>

              <div className="flex items-center justify-between text-sm text-slate-300">
                <span>{project.status === 'Live' ? 'Brand ready' : 'In progress'}</span>
                <Link to="/wizard" className="inline-flex items-center gap-2 text-[#b8f36b]">
                  Open <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="panel rounded-[28px] p-6">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">Recent activity</h3>
              <FolderOpen size={18} className="text-[#b8f36b]" />
            </div>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-center justify-between border-b border-white/10 pb-3"><span>Northstar — logo refinement</span><span>2h ago</span></div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3"><span>Cinder & Co — mockup scene updated</span><span>Yesterday</span></div>
              <div className="flex items-center justify-between"><span>Kite Harbor — guidelines exported</span><span>4d ago</span></div>
            </div>
          </div>

          <div className="panel rounded-[28px] p-6">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">Quick actions</h3>
              <Wand2 size={18} className="text-[#b8f36b]" />
            </div>
            <div className="space-y-3">
              <Link to="/studio/colors" className="secondary-btn inline-flex w-full justify-center">Create color palette</Link>
              <Link to="/studio/typography" className="secondary-btn inline-flex w-full justify-center">Refine typography</Link>
              <Link to="/studio/mockups" className="secondary-btn inline-flex w-full justify-center">Design mockups</Link>
              <Link to="/guidelines" className="secondary-btn inline-flex w-full justify-center">Generate guidelines</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
