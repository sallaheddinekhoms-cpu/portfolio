import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import '../index.css';

const Login = ({ onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate auth: If it's sign up, they are a new user.
    onLogin(isSignUp);
  };

  return (
    <div className="login-page fade-in">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <img src="/logo.jpg" alt="MedSpace Logo" className="app-logo-large" />
            <h2>{isSignUp ? "Créer un compte" : "Bon retour !"}</h2>
            <p className="text-muted">
              {isSignUp ? "Rejoignez la plus grande communauté médicale." : "Connectez-vous pour continuer votre apprentissage."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label>Adresse Email</label>
              <div className="input-with-icon">
                <Mail size={20} className="input-icon" />
                <input 
                  type="email" 
                  placeholder="etudiant@medecine.dz" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Mot de passe</label>
              <div className="input-with-icon">
                <Lock size={20} className="input-icon" />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block btn-large">
              {isSignUp ? "S'inscrire" : "Se connecter"} <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </button>
          </form>

          <div className="social-login-separator">
            <span>Ou continuer avec</span>
          </div>

          <div className="social-buttons">
            <button className="btn btn-outline social-btn" onClick={() => onLogin(isSignUp)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.67 15.63 16.86 16.79 15.68 17.58V20.34H19.24C21.32 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4"/>
                <path d="M12 23C14.97 23 17.46 22.02 19.24 20.34L15.68 17.58C14.7 18.24 13.45 18.63 12 18.63C9.2 18.63 6.83 16.74 5.96 14.19H2.3V17.03C4.1 20.61 7.76 23 12 23Z" fill="#34A853"/>
                <path d="M5.96 14.19C5.74 13.53 5.61 12.79 5.61 12C5.61 11.21 5.74 10.47 5.96 9.81V6.97H2.3C1.56 8.44 1.13 10.15 1.13 12C1.13 13.85 1.56 15.56 2.3 17.03L5.96 14.19Z" fill="#FBBC05"/>
                <path d="M12 5.38C13.62 5.38 15.06 5.93 16.2 7.02L19.32 3.9C17.46 2.16 14.97 1.13 12 1.13C7.76 1.13 4.1 3.5 2.3 6.97L5.96 9.81C6.83 7.26 9.2 5.38 12 5.38Z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button className="btn btn-outline social-btn" onClick={() => onLogin(isSignUp)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.47715 2 2 6.47715 2 12C2 16.9913 5.65692 21.1283 10.4375 21.881V14.8906H7.89844V12H10.4375V9.79688C10.4375 7.29063 11.9305 5.90625 14.2146 5.90625C15.3088 5.90625 16.4531 6.10156 16.4531 6.10156V8.5625H15.1921C13.95 8.5625 13.5625 9.33334 13.5625 10.1242V12H16.3359L15.8926 14.8906H13.5625V21.881C18.3431 21.1283 22 16.9913 22 12C22 6.47715 17.5228 2 12 2Z" fill="#1877F2"/>
              </svg>
              Facebook
            </button>
          </div>

          <div className="login-footer">
            <p>
              {isSignUp ? "Vous avez déjà un compte ?" : "Vous n'avez pas de compte ?"}
              <button 
                className="btn-text" 
                onClick={() => setIsSignUp(!isSignUp)}
                style={{ marginLeft: '8px', color: 'var(--primary-color)', fontWeight: 'bold' }}
              >
                {isSignUp ? "Connectez-vous" : "Créez-en un"}
              </button>
            </p>
          </div>
          
          {/* Secret Admin Button for Prototype */}
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button className="btn-text text-muted" style={{ fontSize: '0.8rem' }} onClick={() => navigate('/admin')}>
              🔒 Accès Administrateur (Prototype)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
