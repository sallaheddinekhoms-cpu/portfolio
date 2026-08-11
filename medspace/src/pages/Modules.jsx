import React, { useState } from 'react';
import { Book, ChevronRight, Edit3, Save, ArrowLeft, FileText } from 'lucide-react';
import '../index.css';

const Modules = () => {
  const [selectedModule, setSelectedModule] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [personalNotes, setPersonalNotes] = useState("Astuce: Le cœur gauche est postérieur, le cœur droit est antérieur.\n\nÀ retenir pour le QCM: La valve mitrale a 2 valvules, la tricuspide en a 3.");

  const modulesData = [
    { id: 1, name: 'Cardiologie', icon: '🫀', progress: 75, chapters: ['Anatomie du cœur', 'ECG Normal', 'Valvulopathies'] },
    { id: 2, name: 'Pneumologie', icon: '🫁', progress: 40, chapters: ['Asthme', 'BPCO', 'Tuberculose'] },
    { id: 3, name: 'Neurologie', icon: '🧠', progress: 10, chapters: ['Système nerveux central', 'AVC', 'Épilepsie'] },
    { id: 4, name: 'Gastro-entérologie', icon: '🩺', progress: 90, chapters: ['Ulcère', 'Hépatite', 'Maladie Cœliaque'] },
  ];

  if (selectedModule) {
    return (
      <div className="module-detail-container fade-in">
        <button className="btn btn-secondary back-btn" onClick={() => { setSelectedModule(null); setIsEditing(false); }}>
          <ArrowLeft size={20} /> Retour aux modules
        </button>
        
        <div className="module-header card">
          <div className="module-title-wrap">
            <span className="module-emoji">{selectedModule.icon}</span>
            <h2>{selectedModule.name} - Résumé: Anatomie</h2>
          </div>
          <div className="module-actions">
            {!isEditing ? (
              <button className="btn btn-primary" onClick={() => setIsEditing(true)}>
                <Edit3 size={20} /> Modifier mes notes
              </button>
            ) : (
              <button className="btn btn-success" onClick={() => setIsEditing(false)}>
                <Save size={20} /> Enregistrer
              </button>
            )}
          </div>
        </div>

        <div className="summary-layout">
          {/* Official Course */}
          <div className="card official-course">
            <h3 className="section-title"><FileText size={20} color="var(--primary-color)"/> Cours Officiel (Lecture seule)</h3>
            <div className="course-content">
              <h4>1. Introduction</h4>
              <p>L'anatomie cardiaque est essentielle pour comprendre la physiologie et la pathologie. Le cœur est situé dans le médiastin moyen.</p>
              <h4>2. Configuration externe</h4>
              <p>Il présente 3 faces: antérieure (sterno-costale), inférieure (diaphragmatique) et latérale (pulmonaire). Les sillons séparent les atriums des ventricules.</p>
              <h4>3. Vascularisation</h4>
              <p>Assurée par les artères coronaires droite et gauche naissant de l'aorte ascendante.</p>
            </div>
          </div>

          {/* Personal Notes */}
          {isEditing ? (
            <div className="card personal-notes edit-mode">
              <h3 className="section-title">Vos notes personnelles</h3>
              <textarea 
                className="notes-editor" 
                value={personalNotes}
                onChange={(e) => setPersonalNotes(e.target.value)}
                placeholder="Tapez vos astuces, mnémotechniques et notes cliniques ici..."
              ></textarea>
            </div>
          ) : (
            <div className="card personal-notes view-mode">
              <h3 className="section-title">Vos notes personnelles (Privé)</h3>
              <div className="notes-display">
                {personalNotes ? (
                  <div className="formatted-notes">
                    {personalNotes.split('\n').map((line, i) => <p key={i}>{line}</p>)}
                  </div>
                ) : (
                  <p className="text-muted">Aucune note personnelle ajoutée.</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="modules-container fade-in">
      <div className="page-header">
        <h2>Vos Modules d'Étude</h2>
        <p className="text-muted">Sélectionnez un module pour consulter les résumés et ajouter vos notes.</p>
      </div>
      
      <div className="modules-grid">
        {modulesData.map(mod => (
          <div key={mod.id} className="module-card card" onClick={() => setSelectedModule(mod)}>
            <div className="module-icon-large">{mod.icon}</div>
            <div className="module-info">
              <h3>{mod.name}</h3>
              <p className="text-muted">{mod.chapters.length} chapitres</p>
              <div className="progress-bar-container">
                <div className="progress-bar-fill" style={{ width: `${mod.progress}%` }}></div>
              </div>
              <span className="progress-text">{mod.progress}% complété</span>
            </div>
            <ChevronRight className="module-arrow" size={24} color="var(--text-muted)" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modules;
