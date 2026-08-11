import React from 'react';
import { Clock, CheckCircle, Target, TrendingUp } from 'lucide-react';
import '../index.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: 'var(--secondary-color)' }}>
            <Clock size={24} color="var(--primary-color)" />
          </div>
          <div className="stat-content">
            <h3>Temps d'étude</h3>
            <p className="stat-value">4h 30m</p>
            <span className="stat-trend positive">+15% vs hier</span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: '#fef3c7' }}>
            <Target size={24} color="var(--warning)" />
          </div>
          <div className="stat-content">
            <h3>QCMs Réalisés</h3>
            <p className="stat-value">124</p>
            <span className="stat-trend">Aujourd'hui</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: '#dcfce7' }}>
            <CheckCircle size={24} color="var(--success)" />
          </div>
          <div className="stat-content">
            <h3>Tâches Terminées</h3>
            <p className="stat-value">5 / 8</p>
            <span className="stat-trend">Aujourd'hui</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: '#fee2e2' }}>
            <TrendingUp size={24} color="var(--danger)" />
          </div>
          <div className="stat-content">
            <h3>Score Moyen</h3>
            <p className="stat-value">76%</p>
            <span className="stat-trend positive">Bonne progression</span>
          </div>
        </div>
      </div>

      <div className="dashboard-sections">
        <div className="card recent-activity">
          <h2>Activités Récentes</h2>
          <ul className="activity-list">
            <li className="activity-item">
              <div className="activity-dot bg-primary"></div>
              <div className="activity-details">
                <h4>Série QCM Cardiologie terminée</h4>
                <p>Score: 18/20 • Il y a 2 heures</p>
              </div>
            </li>
            <li className="activity-item">
              <div className="activity-dot bg-warning"></div>
              <div className="activity-details">
                <h4>Module Pneumologie (Chapitre 3)</h4>
                <p>Révision • Il y a 5 heures</p>
              </div>
            </li>
            <li className="activity-item">
              <div className="activity-dot bg-success"></div>
              <div className="activity-details">
                <h4>Tâche complétée</h4>
                <p>"Faire 50 QCMs de gastro" • Hier</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="card next-tasks">
          <h2>Prochaines tâches prioritaires</h2>
          <div className="task-mini-list">
            <div className="task-mini-item">
              <input type="checkbox" />
              <span>Réviser l'anatomie du cœur</span>
            </div>
            <div className="task-mini-item">
              <input type="checkbox" />
              <span>Lire le résumé d'infectiologie</span>
            </div>
          </div>
          <button className="btn btn-primary" style={{marginTop: '16px', width: '100%'}}>Voir toutes les tâches</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
