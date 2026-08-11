import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, CheckSquare, BarChart2, ArrowRight, Star, Check, Mail, MapPin, Phone } from 'lucide-react';
import '../index.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <header className="landing-header">
        <div className="landing-brand">
          <img src="/logo.jpg" alt="MedSpace Logo" className="app-logo-small" />
          <h2>MedSpace</h2>
        </div>
        <div className="header-right-section">
          <nav className="landing-nav-links">
            <a href="#features">Fonctionnalités</a>
            <a href="#pricing">Tarifs</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="landing-nav">
            <Link to="/login" className="btn btn-secondary">Se connecter</Link>
            <Link to="/login" className="btn btn-primary">Créer un compte</Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-section fade-in">
          <div className="hero-content">
            <h1>L'espace d'étude ultime pour les étudiants en médecine</h1>
            <p>Centralisez vos cours, révisez intelligemment avec des QCMs interactifs, et optimisez votre temps avec la méthode Pomodoro.</p>
            <div className="hero-actions">
              <Link to="/login" className="btn btn-primary btn-large">
                Commencer maintenant <ArrowRight size={20} style={{ marginLeft: '8px' }} />
              </Link>
              <div className="store-buttons">
                <button className="btn btn-secondary store-btn" onClick={() => alert('Lien vers App Store à venir')}>
                  <span className="store-text">
                    <small>Télécharger sur</small>
                    <strong>App Store</strong>
                  </span>
                </button>
                <button className="btn btn-secondary store-btn" onClick={() => alert('Lien vers Google Play à venir')}>
                  <span className="store-text">
                    <small>Disponible sur</small>
                    <strong>Google Play</strong>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-visuals">
              <div className="blob blob-1"></div>
              <div className="blob blob-2"></div>
              
              <div className="floating-card card-stat">
                <div className="stat-icon" style={{ backgroundColor: 'var(--warning)', width: '40px', height: '40px' }}>
                  <BarChart2 size={20} color="white" />
                </div>
                <div>
                  <h4>Score Moyen</h4>
                  <p>76% <span className="positive">↑</span></p>
                </div>
              </div>

              <div className="floating-card card-pomodoro">
                <h4>Minuteur Pomodoro</h4>
                <h2>25:00</h2>
                <div className="pomodoro-dots">
                  <span className="p-dot active"></span>
                  <span className="p-dot"></span>
                  <span className="p-dot"></span>
                </div>
              </div>

              <div className="floating-card card-qcm">
                <div className="qcm-tag">Cardiologie</div>
                <h4>Cas Clinique #104</h4>
                <div className="qcm-fake-option">
                  <div className="qcm-circle">B</div>
                  <div className="qcm-line">Infarctus du myocarde</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features-section">
          <div className="features-header text-center">
            <h2>Tout ce dont vous avez besoin pour réussir</h2>
            <p className="text-muted">Des outils pensés par des étudiants, pour des étudiants.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card card">
              <div className="feature-icon bg-primary">
                <BookOpen size={24} color="white" />
              </div>
              <h3>Modules & Résumés</h3>
              <p>Accédez à tous vos cours officiels et ajoutez-y vos propres notes et astuces personnelles.</p>
            </div>
            
            <div className="feature-card card">
              <div className="feature-icon" style={{ backgroundColor: 'var(--success)' }}>
                <CheckSquare size={24} color="white" />
              </div>
              <h3>Gestion du Temps</h3>
              <p>Organisez votre journée avec une to-do list intégrée et restez concentré grâce au minuteur Pomodoro.</p>
            </div>

            <div className="feature-card card">
              <div className="feature-icon" style={{ backgroundColor: 'var(--warning)' }}>
                <BarChart2 size={24} color="white" />
              </div>
              <h3>QCMs & Cas Cliniques</h3>
              <p>Testez vos connaissances en conditions réelles, avec correction instantanée et espace de discussion.</p>
            </div>
          </div>
        </section>

        {/* Pricing / Packages Section */}
        <section id="pricing" className="pricing-section fade-in">
          <h2 style={{ textAlign: 'center', marginBottom: '8px', fontSize: '2rem' }}>Choisissez votre Pack</h2>
          <p className="text-muted" style={{ textAlign: 'center', marginBottom: '48px' }}>Investissez dans votre réussite médicale avec nos abonnements abordables.</p>
          
          <div className="pricing-grid">
            {/* Free Pack */}
            <div className="pricing-card">
              <h3>Pack Découverte</h3>
              <div className="price">
                <span className="amount">Gratuit</span>
              </div>
              <p className="text-muted" style={{ marginBottom: '24px' }}>Pour tester la plateforme</p>
              <ul className="pricing-features">
                <li><Check size={18} color="var(--success)" /> <span>Accès à 3 cours par spécialité</span></li>
                <li><Check size={18} color="var(--success)" /> <span>10 QCMs par jour</span></li>
                <li><Check size={18} color="var(--success)" /> <span>Minuteur Pomodoro basique</span></li>
                <li className="disabled"><Check size={18} color="var(--text-muted)" /> <span>Annales de Résidanat</span></li>
                <li className="disabled"><Check size={18} color="var(--text-muted)" /> <span>Résumés PDF téléchargeables</span></li>
              </ul>
              <button className="btn btn-outline" style={{ width: '100%' }} onClick={() => navigate('/login')}>S'inscrire</button>
            </div>

            {/* Pro Pack (Popular) */}
            <div className="pricing-card popular">
              <div className="popular-badge"><Star size={14} style={{marginRight: '4px'}}/> Le plus choisi</div>
              <h3>Pack Pro (Semestriel)</h3>
              <div className="price">
                <span className="amount">3500</span>
                <span className="currency"> DZD</span>
                <span className="duration">/ 6 mois</span>
              </div>
              <p style={{ marginBottom: '24px', color: 'rgba(255,255,255,0.9)' }}>La solution idéale pour préparer ses EMDs</p>
              <ul className="pricing-features">
                <li><Check size={18} color="white" /> <span>Accès illimité à tous les cours</span></li>
                <li><Check size={18} color="white" /> <span>Banque QCMs illimitée + Corrections</span></li>
                <li><Check size={18} color="white" /> <span>Sujets EMDs des universités</span></li>
                <li><Check size={18} color="white" /> <span>Téléchargement des résumés</span></li>
                <li className="disabled" style={{ opacity: 0.6 }}><Check size={18} color="rgba(255,255,255,0.5)" /> <span>Préparation intensive Résidanat</span></li>
              </ul>
              <button className="btn" style={{ width: '100%', backgroundColor: 'white', color: 'var(--primary-color)' }} onClick={() => navigate('/login')}>
                Commencer maintenant
              </button>
            </div>

            {/* Premium Pack */}
            <div className="pricing-card">
              <h3>Pack Excellence (Annuel)</h3>
              <div className="price">
                <span className="amount">6000</span>
                <span className="currency"> DZD</span>
                <span className="duration">/ an</span>
              </div>
              <p className="text-muted" style={{ marginBottom: '24px' }}>Pour les futurs résidents</p>
              <ul className="pricing-features">
                <li><Check size={18} color="var(--success)" /> <span>Toutes les options du Pack Pro</span></li>
                <li><Check size={18} color="var(--success)" /> <span>Préparation Complète Résidanat</span></li>
                <li><Check size={18} color="var(--success)" /> <span>Simulations de concours réels</span></li>
                <li><Check size={18} color="var(--success)" /> <span>Statistiques de performance</span></li>
                <li><Check size={18} color="var(--success)" /> <span>Support prioritaire</span></li>
              </ul>
              <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => navigate('/login')}>S'abonner (Économisez 15%)</button>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="landing-footer-rich">
        <div className="footer-content">
          <div className="footer-brand-section">
            <div className="landing-brand" style={{ marginBottom: '16px', justifyContent: 'flex-start' }}>
              <img src="/logo.jpg" alt="MedSpace Logo" className="app-logo-small" />
              <h2>MedSpace</h2>
            </div>
            <p className="text-muted" style={{ textAlign: 'left', marginBottom: '24px', maxWidth: '300px' }}>
              La première plateforme algérienne dédiée à l'accompagnement des étudiants en sciences médicales.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>
          
          <div className="footer-links-section">
            <h4 style={{ color: 'white', marginBottom: '16px' }}>Liens Rapides</h4>
            <ul>
              <li><a href="#features">Fonctionnalités</a></li>
              <li><a href="#pricing">Tarifs & Abonnements</a></li>
              <li><Link to="/login">Espace Étudiant</Link></li>
              <li><Link to="/admin">Espace Administrateur</Link></li>
            </ul>
          </div>

          <div className="footer-contact-section">
            <h4 style={{ color: 'white', marginBottom: '16px' }}>Contactez-nous</h4>
            <div className="contact-item">
              <Mail size={16} color="var(--primary-color)" />
              <span>contact@medspace.dz</span>
            </div>
            <div className="contact-item">
              <Phone size={16} color="var(--primary-color)" />
              <span>+213 555 12 34 56</span>
            </div>
            <div className="contact-item">
              <MapPin size={16} color="var(--primary-color)" />
              <span>Alger, Algérie</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} MedSpace. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
