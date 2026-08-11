import React from 'react';
import { Users, TrendingUp, DollarSign, Clock, CheckCircle, BookOpen } from 'lucide-react';
import '../../index.css';

const AdminDashboard = () => {
  return (
    <div className="admin-page fade-in">
      <div className="admin-header">
        <h2>Vue d'ensemble</h2>
        <p className="text-muted">Statistiques et performances de la plateforme MedSpace.</p>
      </div>

      {/* Stats Overview */}
      <div className="stats-grid">
        <div className="stat-card card">
          <div className="stat-icon bg-primary">
            <Users size={24} color="white" />
          </div>
          <div className="stat-details">
            <p className="stat-label">Total Étudiants</p>
            <h3 className="stat-value">1,248</h3>
            <span className="stat-trend positive">↑ 12% ce mois</span>
          </div>
        </div>

        <div className="stat-card card">
          <div className="stat-icon bg-warning">
            <Clock size={24} color="white" />
          </div>
          <div className="stat-details">
            <p className="stat-label">En attente de validation</p>
            <h3 className="stat-value">34</h3>
            <span className="stat-trend neutral">Comptes à vérifier</span>
          </div>
        </div>

        <div className="stat-card card">
          <div className="stat-icon bg-success">
            <DollarSign size={24} color="white" />
          </div>
          <div className="stat-details">
            <p className="stat-label">Revenus (Mois)</p>
            <h3 className="stat-value">272K DZD</h3>
            <span className="stat-trend positive">↑ 5% ce mois</span>
          </div>
        </div>

        {/* New Stat: Content Size */}
        <div className="stat-card card">
          <div className="stat-icon bg-warning" style={{ backgroundColor: '#8b5cf6' }}>
            <BookOpen size={24} color="white" />
          </div>
          <div className="stat-details">
            <p className="stat-label">Contenu Actif</p>
            <h3 className="stat-value">8,450</h3>
            <span className="stat-trend neutral">QCMs & Cours</span>
          </div>
        </div>
      </div>

      <div className="admin-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '24px' }}>
        {/* Recent Validations */}
        <div className="card">
          <div className="card-header-flex">
            <h3>Dernières Validations</h3>
            <button className="btn-text">Voir tout</button>
          </div>
          <div className="activity-list">
            {[1, 2, 3, 4].map((i) => (
              <div className="activity-item" key={i}>
                <div className="activity-icon bg-success">
                  <CheckCircle size={16} color="white" />
                </div>
                <div className="activity-details">
                  <p><strong>Compte activé</strong> pour Amine B. (Médecine, 3ème année)</p>
                  <span className="activity-time">Il y a {i * 15} min</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Engagement */}
        <div className="card">
          <div className="card-header-flex">
            <h3>Engagement</h3>
          </div>
          <div className="engagement-stats">
            <div className="e-stat">
              <p>QCMs résolus (Aujourd'hui)</p>
              <h4>4,520</h4>
            </div>
            <div className="e-stat">
              <p>Sessions Pomodoro</p>
              <h4>850 h</h4>
            </div>
            <div className="e-stat">
              <p>Examens EMD passés</p>
              <h4>312</h4>
            </div>
          </div>
        </div>

        {/* Subscriptions Breakdown */}
        <div className="card">
          <div className="card-header-flex">
            <h3>Répartition des Abonnements</h3>
          </div>
          <div style={{ marginTop: '16px' }}>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span className="text-muted">Pack Découverte (Gratuit)</span>
                <strong>45%</strong>
              </div>
              <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--border-color)', borderRadius: '4px' }}>
                <div style={{ width: '45%', height: '100%', backgroundColor: 'var(--text-muted)', borderRadius: '4px' }}></div>
              </div>
            </div>
            
            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ color: 'var(--primary-color)' }}>Pack Pro (Semestriel)</span>
                <strong>35%</strong>
              </div>
              <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--border-color)', borderRadius: '4px' }}>
                <div style={{ width: '35%', height: '100%', backgroundColor: 'var(--primary-color)', borderRadius: '4px' }}></div>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ color: '#8b5cf6' }}>Pack Excellence (Annuel)</span>
                <strong>20%</strong>
              </div>
              <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--border-color)', borderRadius: '4px' }}>
                <div style={{ width: '20%', height: '100%', backgroundColor: '#8b5cf6', borderRadius: '4px' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
