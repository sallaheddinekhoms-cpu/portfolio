import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Folder, UploadCloud, CheckCircle, Save, PlusCircle, ChevronRight, Stethoscope, Pill, Syringe, Award } from 'lucide-react';
import '../../index.css';

const AdminContent = () => {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'add'
  const [selectedFiliere, setSelectedFiliere] = useState(null);
  
  const [files, setFiles] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState({ text: '', a: '', b: '', c: '', d: '', correct: 'a' });

  // Dummy data for Filières
  const filieres = [
    { id: 'med', name: 'Médecine Générale', icon: <Stethoscope size={32} color="var(--primary-color)" />, modules: 45, qcms: 1200 },
    { id: 'med_spec', name: 'Médecine Spécialisée (Résidanat)', icon: <Stethoscope size={32} color="var(--warning)" />, modules: 85, qcms: 3400 },
    { id: 'pharm', name: 'Pharmacie', icon: <Pill size={32} color="var(--success)" />, modules: 32, qcms: 850 },
    { id: 'dent', name: 'Médecine Dentaire', icon: <Syringe size={32} color="var(--danger)" />, modules: 28, qcms: 620 },
    { id: 'exams', name: 'Examens & Concours', icon: <Award size={32} color="#8b5cf6" />, modules: 15, qcms: 5000 },
  ];

  // Dummy modules grouped by year (for Médecine Générale as example)
  const groupedModules = {
    "1ère année (Pré-clinique)": ['Anatomie I', 'Biophysique', 'Biochimie'],
    "3ème année": ['Sémiologie', 'Pharmacologie', 'Anatomie Pathologique'],
    "4ème année (Clinique)": ['Cardiologie', 'Pneumologie', 'Gastro-entérologie', 'Neurologie']
  };

  const handleFileUpload = (e) => {
    e.preventDefault();
    setFiles([...files, { name: 'nouveau_cours.pdf', size: '2.4 MB' }]);
  };

  const handleAddQuestion = () => {
    if (currentQ.text) {
      setQuestions([...questions, currentQ]);
      setCurrentQ({ text: '', a: '', b: '', c: '', d: '', correct: 'a' });
    }
  };

  const handleDeleteQuestion = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const handleSaveModule = () => {
    alert("Module sauvegardé avec succès !");
    setActiveTab('overview');
    setFiles([]);
    setQuestions([]);
  };

  return (
    <div className="admin-page fade-in">
      <div className="admin-header-flex">
        <div>
          <h2>Gestion du Contenu</h2>
          <p className="text-muted">Organisez les cours et QCMs par spécialité et par année.</p>
        </div>
        {activeTab === 'overview' && (
          <button className="btn btn-primary" onClick={() => setActiveTab('add')}>
            <Plus size={18} style={{marginRight: '8px'}} /> Ajouter un module
          </button>
        )}
      </div>

      <div className="tabs-container" style={{ marginBottom: '24px' }}>
        <button 
          className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Vue d'ensemble
        </button>
        <button 
          className={`tab-btn ${activeTab === 'add' ? 'active' : ''}`}
          onClick={() => setActiveTab('add')}
        >
          {activeTab === 'add' ? 'Ajouter / Éditer un module' : 'Ajouter un module'}
        </button>
      </div>

      {activeTab === 'overview' ? (
        <div className="fade-in">
          {/* Level 1: Filières or Level 2: Modules grouped by year */}
          {!selectedFiliere ? (
            <>
              <div className="card-header-flex" style={{ borderBottom: 'none', marginBottom: '8px' }}>
                <h3>Toutes les Spécialités (Filières)</h3>
                <button className="btn btn-outline btn-sm"><Plus size={16} style={{marginRight: '4px'}}/> Nouvelle filière</button>
              </div>
              <div className="admin-grid-3">
                {filieres.map((filiere) => (
                  <div 
                    className="card content-card filiere-card" 
                    key={filiere.id} 
                    onClick={() => setSelectedFiliere(filiere)}
                    style={{ cursor: 'pointer', transition: 'transform 0.2s', border: '2px solid transparent' }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary-color)'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                      <div className="content-icon bg-primary-light" style={{ width: '64px', height: '64px' }}>
                        {filiere.icon}
                      </div>
                      <div>
                        <h3 style={{ margin: '0 0 4px 0', fontSize: '1.2rem' }}>{filiere.name}</h3>
                        <p className="text-muted" style={{ margin: 0, fontSize: '0.85rem' }}>
                          {filiere.modules} Modules • {filiere.qcms} QCMs
                        </p>
                      </div>
                    </div>
                    <div className="content-card-footer" style={{ borderTop: 'none', padding: 0, marginTop: 0, textAlign: 'right' }}>
                      <span className="btn-text">Gérer le contenu <ChevronRight size={16} style={{verticalAlign: 'middle'}}/></span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="fade-in">
              {/* Breadcrumb Navigation */}
              <div className="breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', fontSize: '0.95rem' }}>
                <button className="btn-text text-muted" onClick={() => setSelectedFiliere(null)}>Toutes les Spécialités</button>
                <ChevronRight size={16} color="var(--text-muted)" />
                <strong>{selectedFiliere.name}</strong>
              </div>

              {/* Grouped by Year */}
              {Object.entries(groupedModules).map(([year, modules], idx) => (
                <div key={idx} style={{ marginBottom: '40px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                    <h3 style={{ margin: 0, color: 'var(--text-main)', fontSize: '1.3rem' }}>{year}</h3>
                    <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border-color)' }}></div>
                    <button className="btn btn-outline btn-sm"><Plus size={16}/> Ajouter dans cette année</button>
                  </div>
                  
                  <div className="admin-grid-3">
                    {modules.map((module, mIdx) => (
                      <div className="card content-card" key={mIdx}>
                        <div className="content-card-header">
                          <div className="content-icon bg-primary-light">
                            <Folder size={24} color="var(--primary-color)" />
                          </div>
                          <div className="content-actions">
                            <button className="btn-icon btn-small" onClick={() => setActiveTab('add')}><Edit2 size={16} /></button>
                            <button className="btn-icon btn-small text-danger"><Trash2 size={16} /></button>
                          </div>
                        </div>
                        <h3>{module}</h3>
                        <p className="text-muted">12 Cours • 45 QCMs</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="admin-add-module fade-in">
          <div className="card" style={{ padding: '32px', marginBottom: '24px' }}>
            <h3 style={{ marginBottom: '24px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
              1. Informations Générales
            </h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Nom du Module</label>
                <input type="text" placeholder="Ex: Hématologie" />
              </div>
              <div className="form-group">
                <label>Enseignant / Professeur</label>
                <input type="text" placeholder="Ex: Pr. Y. Mansouri" />
              </div>
              <div className="form-group">
                <label>Filière / Section</label>
                <select className="form-select" defaultValue={selectedFiliere ? selectedFiliere.name : ""}>
                  <option value="">Sélectionnez la filière</option>
                  <option value="Médecine Générale">Médecine Générale</option>
                  <option value="Médecine Spécialisée (Résidanat)">Médecine Spécialisée (Résidanat)</option>
                  <option value="Pharmacie">Pharmacie</option>
                  <option value="Médecine Dentaire">Médecine Dentaire</option>
                  <option value="Examens & Concours">Examens & Concours Officiels</option>
                </select>
              </div>
              <div className="form-group">
                <label>Année d'étude / Type</label>
                <select className="form-select">
                  <option>1ère année</option>
                  <option>2ème année</option>
                  <option>3ème année</option>
                  <option>4ème année</option>
                  <option>5ème année</option>
                  <option>6ème année</option>
                  <option>7ème année</option>
                  <option>Résidanat</option>
                  <option>Préparation Concours</option>
                  <option>Sujets d'examens (EMD)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="card" style={{ padding: '32px', marginBottom: '24px' }}>
            <h3 style={{ marginBottom: '24px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
              2. Cours et Résumés (Documents)
            </h3>
            
            <div className="form-grid">
              <div>
                <h4 style={{ marginBottom: '16px', color: 'var(--text-main)' }}>Cours Officiels (PDF)</h4>
                <div className="upload-zone" onClick={handleFileUpload} style={{ marginBottom: '20px', padding: '30px 16px' }}>
                  <UploadCloud size={40} color="var(--primary-color)" />
                  <h4 style={{fontSize: '1rem'}}>Uploader un cours</h4>
                  <p className="text-muted" style={{fontSize: '0.8rem'}}>PDF (Max 50 MB)</p>
                </div>
              </div>
              
              <div>
                <h4 style={{ marginBottom: '16px', color: 'var(--success)' }}>Résumés & Fiches Pratiques</h4>
                <div className="upload-zone" onClick={handleFileUpload} style={{ marginBottom: '20px', padding: '30px 16px', borderColor: 'var(--success)', backgroundColor: 'rgba(16, 185, 129, 0.05)' }}>
                  <UploadCloud size={40} color="var(--success)" />
                  <h4 style={{fontSize: '1rem', color: 'var(--success)'}}>Uploader un résumé</h4>
                  <p className="text-muted" style={{fontSize: '0.8rem'}}>PDF, JPG (Max 20 MB)</p>
                </div>
              </div>
            </div>
            
            {files.length > 0 && (
              <div className="uploaded-files-list" style={{ marginTop: '16px' }}>
                <h4>Fichiers ajoutés :</h4>
                {files.map((f, idx) => (
                  <div key={idx} className="file-item">
                    <CheckCircle size={18} color="var(--success)" />
                    <span>{f.name}</span>
                    <span className="badge-outline" style={{ marginLeft: '12px' }}>
                      {idx % 2 === 0 ? 'Cours' : 'Résumé'}
                    </span>
                    <span className="text-muted" style={{ marginLeft: 'auto' }}>{f.size}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="card" style={{ padding: '32px', marginBottom: '32px' }}>
            <h3 style={{ marginBottom: '24px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
              3. Banque de QCMs
            </h3>
            
            <div className="qcm-builder">
              <div className="form-group">
                <label>Question ou Cas Clinique</label>
                <textarea 
                  rows="3" 
                  placeholder="Écrivez la question ici..."
                  value={currentQ.text}
                  onChange={(e) => setCurrentQ({...currentQ, text: e.target.value})}
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)' }}
                ></textarea>
              </div>

              <div className="qcm-options-builder" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '16px' }}>
                {['a', 'b', 'c', 'd'].map((opt) => (
                  <div className="form-group" key={opt}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <input 
                        type="radio" 
                        name="correct_answer" 
                        checked={currentQ.correct === opt}
                        onChange={() => setCurrentQ({...currentQ, correct: opt})}
                      /> 
                      Option {opt.toUpperCase()} (Cocher si vraie)
                    </label>
                    <input 
                      type="text" 
                      placeholder={`Réponse ${opt.toUpperCase()}`} 
                      value={currentQ[opt]}
                      onChange={(e) => setCurrentQ({...currentQ, [opt]: e.target.value})}
                    />
                  </div>
                ))}
              </div>
              
              <button className="btn btn-outline" style={{ marginTop: '16px' }} onClick={handleAddQuestion}>
                <PlusCircle size={18} style={{marginRight: '8px'}} /> Ajouter cette question
              </button>
            </div>

            {questions.length > 0 && (
              <div className="added-questions" style={{ marginTop: '32px' }}>
                <h4>Questions ajoutées ({questions.length})</h4>
                <div className="questions-list" style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
                  {questions.map((q, idx) => (
                    <div key={idx} style={{ padding: '16px', backgroundColor: 'var(--bg-color)', borderRadius: '8px', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <strong>Q{idx + 1}: {q.text}</strong>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '8px' }}>
                          Réponse correcte : {q.correct.toUpperCase()} - {q[q.correct]}
                        </div>
                      </div>
                      <button className="btn-icon text-danger" onClick={() => handleDeleteQuestion(idx)}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px', marginBottom: '40px' }}>
            <button className="btn btn-secondary" onClick={() => setActiveTab('overview')}>Annuler</button>
            <button className="btn btn-primary" onClick={handleSaveModule}>
              <Save size={20} style={{marginRight: '8px'}} /> Publier le Module
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminContent;
