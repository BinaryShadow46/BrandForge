import { useState } from 'react';
import { ArrowRight, KeyRound, Mail } from 'lucide-react';
import { Link, Navigate } from 'react-router-dom';

export function AuthPage({ onAuthSuccess, isAuthenticated }: { onAuthSuccess: () => void; isAuthenticated: boolean }) {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('founder@brandforge.io');
  const [password, setPassword] = useState('brandforge123');

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!email || !password) return;
    onAuthSuccess();
  };

  return (
    <div className="app-shell min-h-screen bg-[#111318] px-4 py-10 text-offwhite">
      <div className="container flex min-h-[calc(100vh-5rem)] items-center justify-center">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/10 bg-[#121821]/80 shadow-2xl md:grid-cols-[1.05fr_0.95fr]">
          <div className="grid-pattern relative hidden min-h-[620px] items-end overflow-hidden p-8 md:flex">
            <div className="absolute inset-0 bg-gradient-to-br from-[#b8f36b]/10 via-transparent to-transparent" />
            <div className="relative z-10 max-w-md space-y-6">
              <div className="flex items-center gap-3 text-lg font-semibold">
                <span className="logo-mark">B</span>
                BrandForge
              </div>
              <div className="rounded-[24px] border border-white/10 bg-[#121821]/70 p-5 backdrop-blur-md">
                <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-slate-400">
                  <span>Creative workspace</span>
                  <span>Live</span>
                </div>
                <div className="mb-4 text-3xl font-bold tracking-[-0.08em]">Northstar</div>
                <div className="mb-6 flex gap-2">
                  {['#111318', '#B8F36B', '#8A8D96', '#F8F8F5'].map((hex) => (
                    <span key={hex} className="h-8 w-8 rounded-full border border-white/10" style={{ backgroundColor: hex }} />
                  ))}
                </div>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex justify-between"><span>Logo concept</span><span className="text-white">Wordmark</span></div>
                  <div className="flex justify-between"><span>Palette</span><span className="text-white">3 variants</span></div>
                  <div className="flex justify-between"><span>Brand kit</span><span className="text-white">Ready</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-[#b8f36b]">Welcome</p>
                <h1 className="mt-2 text-3xl font-semibold tracking-[-0.06em] text-white">{mode === 'login' ? 'Log in' : 'Create account'}</h1>
              </div>
              <Link to="/" className="secondary-btn px-3 py-2 text-sm">Back home</Link>
            </div>

            <div className="mb-8 inline-flex rounded-full border border-white/10 bg-white/5 p-1 text-sm">
              <button type="button" onClick={() => setMode('login')} className={`rounded-full px-4 py-2 ${mode === 'login' ? 'bg-[#b8f36b] text-[#111318]' : 'text-slate-300'}`}>
                Login
              </button>
              <button type="button" onClick={() => setMode('register')} className={`rounded-full px-4 py-2 ${mode === 'register' ? 'bg-[#b8f36b] text-[#111318]' : 'text-slate-300'}`}>
                Register
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <label className="block text-sm text-slate-300">
                <span className="mb-2 flex items-center gap-2"><Mail size={15} /> Email</span>
                <input className="input-base" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" />
              </label>

              <label className="block text-sm text-slate-300">
                <span className="mb-2 flex items-center gap-2"><KeyRound size={15} /> Password</span>
                <input type="password" className="input-base" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
              </label>

              <button type="submit" className="primary-btn inline-flex w-full items-center justify-center gap-2">
                {mode === 'login' ? 'Access dashboard' : 'Create account'} <ArrowRight size={18} />
              </button>
            </form>

            <div className="mt-6 text-sm text-slate-400">
              {mode === 'login' ? 'Need an account?' : 'Already a member?'}{' '}
              <button type="button" className="font-medium text-[#b8f36b]" onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>
                {mode === 'login' ? 'Register' : 'Log in'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
