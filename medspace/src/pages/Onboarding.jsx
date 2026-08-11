import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Book, CheckCircle, UploadCloud, ArrowRight } from 'lucide-react';
import '../index.css';

const Onboarding = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [fileUploaded, setFileUploaded] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step === 1) setStep(2);
    else {
      onComplete(); // Finishes onboarding
      navigate('/dashboard');
    }
  };

  return (
    <div className="onboarding-page fade-in">
      <div className="onboarding-container card">
        <div className="onboarding-header">
          <img src="/logo.jpg" alt="MedSpace" className="app-logo-small" style={{ margin: '0 auto 16px' }} />
          <h2>{step === 1 ? "Commençons par faire connaissance" : "Dernière étape !"}</h2>
          <p className="text-muted">
            {step === 1 
              ? "Veuillez remplir vos informations académiques pour personnaliser votre espace." 
              : "Veuillez téléverser votre reçu de paiement pour activer votre compte étudiant."}
          </p>
        </div>

        <div className="stepper">
          <div className={`step ${step >= 1 ? 'active' : ''}`}>
            <span className="step-num">1</span> Profil
          </div>
          <div className="step-line"></div>
          <div className={`step ${step >= 2 ? 'active' : ''}`}>
            <span className="step-num">2</span> Paiement
          </div>
        </div>

        {step === 1 ? (
          <div className="onboarding-form fade-in">
            <div className="form-group">
              <label>Nom complet</label>
              <div className="input-with-icon">
                <User size={20} className="input-icon" />
                <input type="text" placeholder="Ex: Sarah Boumaza" />
              </div>
            </div>

            <div className="form-group">
              <label>Filière (Sciences Médicales)</label>
              <select className="form-select">
                <option value="">Sélectionnez votre filière</option>
                <option value="medecine">Médecine (Générale / Spécialité)</option>
                <option value="pharmacie">Pharmacie</option>
                <option value="dentaire">Médecine Dentaire</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Université</label>
              <select className="form-select">
                <option value="">Sélectionnez votre faculté</option>
                <option value="alger">Faculté de Médecine d'Alger</option>
                <option value="oran">Faculté de Médecine d'Oran</option>
                <option value="constantine">Faculté de Médecine de Constantine</option>
                <option value="annaba">Faculté de Médecine d'Annaba</option>
                <option value="tizi">Faculté de Médecine de Tizi Ouzou</option>
                <option value="other">Autre</option>
              </select>
            </div>

            <div className="form-group">
              <label>Niveau / Année d'étude</label>
              <div className="input-with-icon">
                <Book size={20} className="input-icon" />
                <select className="form-select" style={{ paddingLeft: '44px' }}>
                  <option value="">Sélectionnez l'année</option>
                  <option value="1">1ère année</option>
                  <option value="2">2ème année</option>
                  <option value="3">3ème année</option>
                  <option value="4">4ème année</option>
                  <option value="5">5ème année</option>
                  <option value="6">6ème année</option>
                  <option value="7">7ème année (Médecine)</option>
                  <option value="residanat">Résidanat (Spécialité)</option>
                </select>
              </div>
            </div>
          </div>
        ) : (
          <div className="onboarding-payment fade-in">
            <div className="payment-instructions card">
              <h4>Détails de l'abonnement</h4>
              <p>Abonnement Annuel VIP : <strong style={{ color: 'var(--primary-color)', fontSize: '1.2rem'}}>8 000 DZD</strong></p>
              <p className="text-muted" style={{ fontSize: '0.85rem', marginTop: '8px' }}>
                Modes acceptés : BaridiMob (RIP), CCP, ou virement bancaire.
              </p>
            </div>
            
            <div 
              className={`upload-zone ${fileUploaded ? 'uploaded' : ''}`}
              onClick={() => setFileUploaded(true)}
            >
              {!fileUploaded ? (
                <>
                  <UploadCloud size={48} color="var(--primary-color)" />
                  <h4>Cliquez ou glissez le reçu ici</h4>
                  <p className="text-muted">Format accepté: JPG, PNG, PDF (Max 5MB)</p>
                  <p style={{fontSize: '0.8rem', color: 'var(--primary-color)', marginTop: '8px'}}>(Prototype: Cliquez simplement pour simuler l'upload)</p>
                </>
              ) : (
                <>
                  <CheckCircle size={48} color="var(--success)" />
                  <h4 style={{ color: 'var(--success)', margin: '16px 0 8px' }}>Reçu téléversé avec succès !</h4>
                  <p className="text-muted">recu_baridimob.jpg (1.2 MB)</p>
                </>
              )}
            </div>
          </div>
        )}

        <div className="onboarding-footer">
          {step === 2 && (
            <button className="btn btn-secondary" onClick={() => setStep(1)}>Retour</button>
          )}
          <button 
            className="btn btn-primary" 
            style={{ marginLeft: 'auto' }}
            onClick={handleNext}
            disabled={step === 2 && !fileUploaded}
          >
            {step === 1 ? "Continuer" : "Activer mon compte"} <ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
