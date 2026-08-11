import React, { useState } from 'react';
import { Settings, CreditCard, Shield, Globe, Save, Upload, AlertTriangle, Database } from 'lucide-react';
import '../../index.css';

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="admin-page fade-in">
      <div className="admin-header-flex">
        <div>
          <h2>Paramètres de la Plateforme</h2>
          <p className="text-muted">Configuration générale, paiements et maintenance.</p>
        </div>
        <div className="content-tabs" style={{ marginBottom: 0 }}>
          <button 
            className={`tab-btn ${activeTab === 'general' ? 'active' : ''}`}
            onClick={() => setActiveTab('general')}
          >
            <Globe size={18} />
            Général
          </button>
          <button 
            className={`tab-btn ${activeTab === 'payments' ? 'active' : ''}`}
            onClick={() => setActiveTab('payments')}
          >
            <CreditCard size={18} />
            Paiements
          </button>
          <button 
            className={`tab-btn ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            <Shield size={18} />
            Sécurité & Maintenance
          </button>
        </div>
      </div>

      <div className="admin-settings-container" style={{ maxWidth: '800px' }}>
        
        {/* TAB: GENERAL */}
        {activeTab === 'general' && (
          <div className="card fade-in">
            <h3 style={{ marginBottom: '24px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>Informations de la Plateforme</h3>
            
            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label>Nom de la plateforme</label>
              <input type="text" className="form-control" defaultValue="MedSpace" />
            </div>

            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label>Logo</label>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <img src="/logo.jpg" alt="Logo" style={{ width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover' }} />
                <button className="btn btn-outline"><Upload size={16} style={{ marginRight: '8px' }} /> Changer le logo</button>
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label>Email de contact (Support)</label>
              <input type="email" className="form-control" defaultValue="contact@medspace.dz" />
            </div>

            <div className="form-group" style={{ marginBottom: '32px' }}>
              <label>Lien Facebook</label>
              <input type="text" className="form-control" defaultValue="https://facebook.com/medspace" />
            </div>

            <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Save size={18} /> Enregistrer les modifications
            </button>
          </div>
        )}

        {/* TAB: PAYMENTS */}
        {activeTab === 'payments' && (
          <div className="card fade-in">
            <h3 style={{ marginBottom: '24px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>Méthodes de Paiement (Algérie)</h3>
            
            <div className="form-group" style={{ marginBottom: '24px', backgroundColor: 'rgba(13, 148, 136, 0.05)', padding: '16px', borderRadius: '8px', border: '1px solid var(--primary-color)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div>
                  <h4 style={{ margin: '0 0 4px 0' }}>Paiement par CCP / BaridiMob</h4>
                  <p className="text-muted" style={{ margin: 0, fontSize: '0.9rem' }}>Ces informations s'afficheront aux étudiants lors du paiement manuel.</p>
                </div>
                <div className="toggle-switch" style={{ width: '40px', height: '24px', backgroundColor: 'var(--success)', borderRadius: '12px', position: 'relative', cursor: 'pointer' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', right: '2px', top: '2px' }}></div>
                </div>
              </div>
              
              <div className="form-group" style={{ marginBottom: '12px' }}>
                <label>Nom du titulaire (CCP)</label>
                <input type="text" className="form-control" defaultValue="Dr. Amine Benali" />
              </div>
              <div className="form-group" style={{ marginBottom: '12px' }}>
                <label>Numéro CCP</label>
                <input type="text" className="form-control" defaultValue="0012345678 99" />
              </div>
              <div className="form-group">
                <label>Numéro RIP (BaridiMob)</label>
                <input type="text" className="form-control" defaultValue="007 99999 0012345678 99" />
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '32px', backgroundColor: 'var(--bg-color)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ margin: '0 0 4px 0' }}>Paiement en ligne (CIB / EDAHABIA)</h4>
                  <p className="text-muted" style={{ margin: 0, fontSize: '0.9rem' }}>Intégration SATIM (En cours de développement)</p>
                </div>
                <div className="toggle-switch" style={{ width: '40px', height: '24px', backgroundColor: 'var(--border-color)', borderRadius: '12px', position: 'relative', cursor: 'pointer' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', left: '2px', top: '2px' }}></div>
                </div>
              </div>
            </div>

            <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Save size={18} /> Mettre à jour les paiements
            </button>
          </div>
        )}

        {/* TAB: SECURITY & MAINTENANCE */}
        {activeTab === 'security' && (
          <div className="fade-in">
            <div className="card" style={{ marginBottom: '24px' }}>
              <h3 style={{ marginBottom: '24px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>Changer le mot de passe Administrateur</h3>
              
              <div className="form-group" style={{ marginBottom: '16px' }}>
                <label>Ancien mot de passe</label>
                <input type="password" className="form-control" />
              </div>
              <div className="form-group" style={{ marginBottom: '16px' }}>
                <label>Nouveau mot de passe</label>
                <input type="password" className="form-control" />
              </div>
              <button className="btn btn-outline" style={{ marginTop: '8px' }}>Modifier le mot de passe</button>
            </div>

            <div className="card" style={{ border: '1px solid var(--warning)' }}>
              <h3 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--warning)' }}>
                <AlertTriangle size={20} /> Actions Sensibles
              </h3>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid var(--border-color)' }}>
                <div>
                  <h4 style={{ margin: '0 0 4px 0' }}>Mode Maintenance</h4>
                  <p className="text-muted" style={{ margin: 0, fontSize: '0.9rem' }}>Désactive l'accès aux étudiants pendant les mises à jour.</p>
                </div>
                <button className="btn btn-outline" style={{ color: 'var(--warning)', borderColor: 'var(--warning)' }}>Activer le mode</button>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ margin: '0 0 4px 0' }}>Sauvegarde de la base de données</h4>
                  <p className="text-muted" style={{ margin: 0, fontSize: '0.9rem' }}>Télécharger les cours, QCMs et données utilisateurs.</p>
                </div>
                <button className="btn" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Database size={16} /> Générer un Backup
                </button>
              </div>
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default AdminSettings;
