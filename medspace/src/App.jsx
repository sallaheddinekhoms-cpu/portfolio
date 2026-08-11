import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Outlet, Navigate } from 'react-router-dom';
import { BookOpen, CheckSquare, BarChart2, Layout, Bell, Menu, X, LogOut, Stethoscope, Award } from 'lucide-react';
import Home from './pages/Home';
import Login from './pages/Login';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import Modules from './pages/Modules';
import QCMs from './pages/QCMs';
import Exams from './pages/Exams';
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUsers from './pages/admin/AdminUsers';
import AdminContent from './pages/admin/AdminContent';
import AdminSubscriptions from './pages/admin/AdminSubscriptions';
import AdminSettings from './pages/admin/AdminSettings';
import './index.css';

// Layout Component
const AppLayout = ({ onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="app-layout">
      {/* Mobile Overlay */}
      {isMobileMenuOpen && <div className="sidebar-overlay" onClick={closeMenu}></div>}

      {/* Sidebar */}
      <aside className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <img src="/logo.jpg" alt="MedSpace Logo" className="app-logo-small" />
            <h2>MedSpace</h2>
          </div>
          <button className="btn-icon close-sidebar-btn" onClick={closeMenu}>
            <X size={24} />
          </button>
        </div>
        <nav className="sidebar-nav">
          <NavLink to="/dashboard" onClick={closeMenu} className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <Layout size={20} />
            Tableau de bord
          </NavLink>
          <NavLink to="/tasks" onClick={closeMenu} className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <CheckSquare size={20} />
            Tâches & Pomodoro
          </NavLink>
          <NavLink to="/modules" onClick={closeMenu} className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <BookOpen size={20} />
            Modules & Résumés
          </NavLink>
          <NavLink to="/qcms" onClick={closeMenu} className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <BarChart2 size={20} />
            QCMs & Simulations
          </NavLink>
          <NavLink to="/exams" onClick={closeMenu} className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <Award size={20} />
            Examens & Concours
          </NavLink>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        {/* Topbar */}
        <header className="topbar">
          <div className="topbar-left">
            <button className="btn-icon mobile-menu-btn" onClick={toggleMenu}>
              <Menu size={24} />
            </button>
            <h1 className="topbar-title">Bonjour, Docteur ! 👋</h1>
          </div>
          <div className="topbar-actions">
            <button className="btn-icon">
              <Bell size={20} />
            </button>
            <div className="user-profile">
              <div className="avatar">Dr</div>
            </div>
            <button className="btn-icon" onClick={onLogout} title="Se déconnecter">
              <LogOut size={20} color="var(--danger)" />
            </button>
          </div>
        </header>
        
        {/* Page Content */}
        <div className="content-area">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

// No placeholder components remaining.
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [needsOnboarding, setNeedsOnboarding] = useState(false);

  const handleLogin = (isNewUser) => {
    setIsAuthenticated(true);
    if (isNewUser) {
      setNeedsOnboarding(true);
    }
  };

  const handleOnboardingComplete = () => {
    setNeedsOnboarding(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Auth Route */}
        <Route 
          path="/login" 
          element={
            isAuthenticated ? 
              (needsOnboarding ? <Navigate to="/onboarding" replace /> : <Navigate to="/dashboard" replace />)
            : <Login onLogin={handleLogin} />
          } 
        />

        {/* Onboarding Route */}
        <Route 
          path="/onboarding" 
          element={
            isAuthenticated && needsOnboarding ? 
              <Onboarding onComplete={handleOnboardingComplete} /> 
            : <Navigate to="/dashboard" replace />
          } 
        />
        
        {/* Protected Routes */}
        <Route 
          element={
            isAuthenticated && !needsOnboarding ? <AppLayout onLogout={() => setIsAuthenticated(false)} /> : <Navigate to="/login" replace />
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/qcms" element={<QCMs />} />
          <Route path="/exams" element={<Exams />} />
        </Route>

        {/* Admin Routes */}
        <Route 
          path="/admin" 
          element={<AdminLayout onLogout={() => setIsAuthenticated(false)} />}
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="content" element={<AdminContent />} />
          <Route path="subscriptions" element={<AdminSubscriptions />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route index element={<Navigate to="dashboard" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
