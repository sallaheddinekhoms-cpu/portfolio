import React from 'react';
import { Award, FileText, Clock, ChevronRight } from 'lucide-react';
import '../index.css';

const Exams = () => {
  return (
    <div className="fade-in">
      <div className="header-flex">
        <div>
          <h2>Examens & Concours 🏆</h2>
          <p className="text-muted">Préparez-vous aux examens officiels et au concours de résidanat avec des annales corrigées.</p>
        </div>
      </div>

      <div className="admin-grid-2" style={{ marginTop: '24px' }}>
        <div className="card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <div className="stat-icon" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)' }}>
              <Award size={32} color="var(--warning)" />
            </div>
            <div>
              <h3 style={{ margin: '0 0 4px' }}>Concours de Résidanat</h3>
              <p className="text-muted" style={{ margin: 0, fontSize: '0.9rem' }}>Sujets des années précédentes (Alger, Oran, Constantine)</p>
            </div>
          </div>
          <div className="activity-list" style={{ marginTop: '24px' }}>
            {['Résidanat 2025 (Alger)', 'Résidanat 2024 (Oran)', 'Résidanat 2023 (Constantine)'].map((exam, i) => (
              <div className="card" style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }} key={i}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <FileText size={20} color="var(--primary-color)" />
                  <strong>{exam}</strong>
                </div>
                <ChevronRight size={20} color="var(--text-muted)" />
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <div className="stat-icon bg-primary-light">
              <Clock size={32} color="var(--primary-color)" />
            </div>
            <div>
              <h3 style={{ margin: '0 0 4px' }}>Examens Semestriels (EMDs)</h3>
              <p className="text-muted" style={{ margin: 0, fontSize: '0.9rem' }}>Annales des examens par module et par année</p>
            </div>
          </div>
          <div className="activity-list" style={{ marginTop: '24px' }}>
            {['EMD 1 - Cardiologie (2024)', 'EMD 2 - Pneumologie (2023)', 'EMD 1 - Gastro-entérologie (2024)'].map((exam, i) => (
              <div className="card" style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }} key={i}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <FileText size={20} color="var(--success)" />
                  <strong>{exam}</strong>
                </div>
                <ChevronRight size={20} color="var(--text-muted)" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exams;
