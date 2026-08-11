import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, BookOpen, Settings, LogOut, Menu, X, Moon, Sun, CreditCard } from 'lucide-react';
import '../index.css';

const AdminLayout = ({ onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    // Cleanup on unmount if we leave admin
    return () => document.body.classList.remove('dark-theme');
  }, [isDarkMode]);

  const handleLogout = () => {
    document.body.classList.remove('dark-theme');
    onLogout();
    navigate('/login');
  };

  return (
    <div className={`app-layout admin-layout ${isDarkMode ? 'dark-theme-active' : ''}`}>
      {isMobileMenuOpen && <div className="sidebar-overlay" onClick={closeMenu}></div>}

      <aside className={`sidebar admin-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <div className="admin-badge">Admin</div>
            <h2>MedSpace</h2>
          </div>
          <button className="btn-icon close-sidebar-btn" onClick={closeMenu}>
            <X size={24} />
          </button>
        </div>
        
        <nav className="sidebar-nav">
          <NavLink to="/admin/dashboard" onClick={closeMenu} className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <LayoutDashboard size={20} />
            Vue d'ensemble
          </NavLink>
          <NavLink to="/admin/users" onClick={closeMenu} className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <Users size={20} />
            Inscriptions & Utilisateurs
          </NavLink>
          <NavLink to="/admin/content" onClick={closeMenu} className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <BookOpen size={20} />
            Gestion du Contenu
          </NavLink>
          <NavLink to="/admin/subscriptions" onClick={closeMenu} className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <CreditCard size={20} />
            Abonnements & Promos
          </NavLink>
          <NavLink to="/admin/settings" onClick={closeMenu} className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <Settings size={20} />
            Paramètres
          </NavLink>
        </nav>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div className="topbar-left">
            <button className="btn-icon mobile-menu-btn" onClick={toggleMenu}>
              <Menu size={24} />
            </button>
            <h1 className="topbar-title">Espace Administration</h1>
          </div>
          <div className="topbar-actions">
            <button className="btn-icon" onClick={toggleTheme} title="Basculer le thème">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="user-profile">
              <div className="avatar bg-danger">AD</div>
            </div>
            <button className="btn-icon" onClick={handleLogout} title="Quitter l'admin">
              <LogOut size={20} color="var(--danger)" />
            </button>
          </div>
        </header>
        
        <div className="content-area">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
