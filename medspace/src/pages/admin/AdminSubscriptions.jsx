import React, { useState } from 'react';
import { CreditCard, Tag, Plus, Edit2, Trash2, CheckCircle, XCircle } from 'lucide-react';
import '../../index.css';

const AdminSubscriptions = () => {
  const [activeTab, setActiveTab] = useState('packages');

  return (
    <div className="admin-page fade-in">
      <div className="admin-header-flex">
        <div>
          <h2>Abonnements & Promotions</h2>
          <p className="text-muted">Gérez les offres, tarifs et codes promo de la plateforme.</p>
        </div>
        <div className="content-tabs" style={{ marginBottom: 0 }}>
          <button 
            className={`tab-btn ${activeTab === 'packages' ? 'active' : ''}`}
            onClick={() => setActiveTab('packages')}
          >
            <CreditCard size={18} />
            Packs & Tarifs
          </button>
          <button 
            className={`tab-btn ${activeTab === 'promos' ? 'active' : ''}`}
            onClick={() => setActiveTab('promos')}
          >
            <Tag size={18} />
            Codes Promo
          </button>
        </div>
      </div>

      {activeTab === 'packages' && (
        <div className="admin-grid-2">
          {/* Pack Découverte */}
          <div className="card">
            <div className="card-header-flex">
              <h3>Pack Découverte</h3>
              <span className="badge bg-success" style={{ color: 'white' }}>Actif</span>
            </div>
            <div className="price-display" style={{ margin: '16px 0' }}>
              <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>Gratuit</span>
            </div>
            <p className="text-muted" style={{ marginBottom: '16px' }}>Pour tester la plateforme.</p>
            <div className="form-group">
              <label>Limites (QCMs / jour)</label>
              <input type="number" defaultValue="10" className="form-control" />
            </div>
            <button className="btn btn-outline" style={{ marginTop: '16px', width: '100%' }}>Mettre à jour</button>
          </div>

          {/* Pack Pro */}
          <div className="card">
            <div className="card-header-flex">
              <h3>Pack Pro (Semestriel)</h3>
              <span className="badge bg-success" style={{ color: 'white' }}>Actif</span>
            </div>
            <div className="price-display" style={{ margin: '16px 0' }}>
              <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>3500 DZD</span>
            </div>
            <p className="text-muted" style={{ marginBottom: '16px' }}>Accès illimité pour 6 mois.</p>
            <div className="form-group">
              <label>Prix actuel (DZD)</label>
              <input type="number" defaultValue="3500" className="form-control" />
            </div>
            <button className="btn btn-primary" style={{ marginTop: '16px', width: '100%' }}>Sauvegarder les modifications</button>
          </div>

          {/* Pack Excellence */}
          <div className="card">
            <div className="card-header-flex">
              <h3>Pack Excellence (Annuel)</h3>
              <span className="badge bg-success" style={{ color: 'white' }}>Actif</span>
            </div>
            <div className="price-display" style={{ margin: '16px 0' }}>
              <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>6000 DZD</span>
            </div>
            <p className="text-muted" style={{ marginBottom: '16px' }}>Idéal pour le concours de Résidanat.</p>
            <div className="form-group">
              <label>Prix actuel (DZD)</label>
              <input type="number" defaultValue="6000" className="form-control" />
            </div>
            <button className="btn btn-primary" style={{ marginTop: '16px', width: '100%' }}>Sauvegarder les modifications</button>
          </div>
        </div>
      )}

      {activeTab === 'promos' && (
        <div className="card fade-in">
          <div className="card-header-flex" style={{ marginBottom: '24px' }}>
            <h3>Codes Promo Actifs</h3>
            <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Plus size={16} /> Créer un code
            </button>
          </div>
          
          <div className="table-responsive">
            <table className="users-table">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Réduction</th>
                  <th>Date d'expiration</th>
                  <th>Utilisations</th>
                  <th>Statut</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>MED2026</strong></td>
                  <td>-20%</td>
                  <td>31 Décembre 2026</td>
                  <td>45 / 100</td>
                  <td><span className="user-badge active"><CheckCircle size={14} /> Actif</span></td>
                  <td>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button className="btn-icon" title="Modifier"><Edit2 size={16} /></button>
                      <button className="btn-icon" title="Désactiver" style={{ color: 'var(--warning)' }}><XCircle size={16} /></button>
                      <button className="btn-icon" title="Supprimer" style={{ color: 'var(--danger)' }}><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><strong>WELCOME50</strong></td>
                  <td>-50%</td>
                  <td>15 Septembre 2026</td>
                  <td>120 / Illimité</td>
                  <td><span className="user-badge active"><CheckCircle size={14} /> Actif</span></td>
                  <td>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button className="btn-icon" title="Modifier"><Edit2 size={16} /></button>
                      <button className="btn-icon" title="Désactiver" style={{ color: 'var(--warning)' }}><XCircle size={16} /></button>
                      <button className="btn-icon" title="Supprimer" style={{ color: 'var(--danger)' }}><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
                <tr style={{ opacity: 0.6 }}>
                  <td><strong>RAMADAN24</strong></td>
                  <td>-30%</td>
                  <td>15 Avril 2026</td>
                  <td>500 / 500</td>
                  <td><span className="user-badge inactive"><XCircle size={14} /> Expiré</span></td>
                  <td>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button className="btn-icon" title="Modifier"><Edit2 size={16} /></button>
                      <button className="btn-icon" title="Réactiver" style={{ color: 'var(--success)' }}><CheckCircle size={16} /></button>
                      <button className="btn-icon" title="Supprimer" style={{ color: 'var(--danger)' }}><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSubscriptions;
