import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthPage } from './components/AuthPage';
import { BrandWizardPage } from './components/BrandWizard';
import { DashboardPage } from './components/DashboardPage';
import { GuidelinesPage } from './components/GuidelinesPage';
import { LogoStudioPage } from './components/LogoStudio';
import { MarketingPage } from './components/MarketingPage';
import { MockupStudioPage } from './components/MockupStudio';
import { PaletteStudioPage } from './components/PaletteStudio';
import { TypographyStudioPage } from './components/TypographyStudio';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem('brandforge_session');
    setIsAuthenticated(Boolean(saved));
  }, []);

  const handleAuthSuccess = () => {
    window.localStorage.setItem('brandforge_session', 'demo-user');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    window.localStorage.removeItem('brandforge_session');
    setIsAuthenticated(false);
  };

  return (
    <Routes>
      <Route path="/" element={<MarketingPage isAuthenticated={isAuthenticated} />} />
      <Route path="/auth" element={<AuthPage onAuthSuccess={handleAuthSuccess} isAuthenticated={isAuthenticated} />} />
      <Route path="/dashboard" element={<ProtectedRoute isAuthenticated={isAuthenticated}><DashboardPage onLogout={handleLogout} /></ProtectedRoute>} />
      <Route path="/wizard" element={<ProtectedRoute isAuthenticated={isAuthenticated}><BrandWizardPage /></ProtectedRoute>} />
      <Route path="/studio/logo" element={<ProtectedRoute isAuthenticated={isAuthenticated}><LogoStudioPage /></ProtectedRoute>} />
      <Route path="/studio/colors" element={<ProtectedRoute isAuthenticated={isAuthenticated}><PaletteStudioPage /></ProtectedRoute>} />
      <Route path="/studio/typography" element={<ProtectedRoute isAuthenticated={isAuthenticated}><TypographyStudioPage /></ProtectedRoute>} />
      <Route path="/studio/mockups" element={<ProtectedRoute isAuthenticated={isAuthenticated}><MockupStudioPage /></ProtectedRoute>} />
      <Route path="/guidelines" element={<ProtectedRoute isAuthenticated={isAuthenticated}><GuidelinesPage /></ProtectedRoute>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function ProtectedRoute({ isAuthenticated, children }: { isAuthenticated: boolean; children: JSX.Element }) {
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return children;
}

export default App;
