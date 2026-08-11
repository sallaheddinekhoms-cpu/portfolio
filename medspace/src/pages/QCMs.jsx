import React, { useState } from 'react';
import { Bookmark, MessageSquare, Check, X, AlertCircle, ArrowRight } from 'lucide-react';
import '../index.css';

const QCMs = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const qcmData = {
    id: 104,
    module: "Cardiologie",
    question: "Cas Clinique: Un patient de 65 ans, hypertendu, se présente aux urgences pour une douleur thoracique typique évoluant depuis 2 heures. L'ECG montre un sus-décalage du segment ST en V1-V4. Quel est le diagnostic le plus probable ?",
    options: [
      { id: 'A', text: "Péricardite aiguë" },
      { id: 'B', text: "Infarctus du myocarde antérieur (IDM)" },
      { id: 'C', text: "Dissection aortique" },
      { id: 'D', text: "Embolie pulmonaire" }
    ],
    correctOption: 'B',
    explanation: "Le sus-décalage ST dans le territoire antéroseptal (V1-V4) avec douleur typique signe un syndrome coronarien aigu avec sus-décalage du segment ST (SCA ST+), indiquant un infarctus antérieur. La péricardite donnerait un sus-décalage diffus."
  };

  const handleSubmit = () => {
    if (selectedOption) setIsSubmitted(true);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    setShowComments(false);
    // In a real app, this would load the next QCM
  };

  return (
    <div className="qcm-container fade-in">
      <div className="page-header">
        <h2>Simulations & QCMs</h2>
        <p className="text-muted">Testez vos connaissances en conditions réelles et comparez vos résultats.</p>
      </div>

      <div className="qcm-card card">
        <div className="qcm-header">
          <span className="qcm-badge">{qcmData.module}</span>
          <span className="qcm-id">QCM #{qcmData.id}</span>
        </div>

        <div className="qcm-question">
          <p>{qcmData.question}</p>
        </div>

        <div className="qcm-options">
          {qcmData.options.map(opt => {
            let optionClass = "qcm-option";
            if (isSubmitted) {
              if (opt.id === qcmData.correctOption) {
                optionClass += " correct";
              } else if (selectedOption === opt.id && opt.id !== qcmData.correctOption) {
                optionClass += " incorrect";
              } else {
                optionClass += " disabled";
              }
            } else if (selectedOption === opt.id) {
              optionClass += " selected";
            }

            return (
              <div 
                key={opt.id} 
                className={optionClass}
                onClick={() => !isSubmitted && setSelectedOption(opt.id)}
              >
                <div className="option-letter">{opt.id}</div>
                <div className="option-text">{opt.text}</div>
                {isSubmitted && opt.id === qcmData.correctOption && <Check className="option-icon" color="var(--success)" />}
                {isSubmitted && selectedOption === opt.id && opt.id !== qcmData.correctOption && <X className="option-icon" color="var(--danger)" />}
              </div>
            );
          })}
        </div>

        <div className="qcm-submit-area">
          {!isSubmitted ? (
            <button 
              className="btn btn-primary submit-qcm-btn" 
              disabled={!selectedOption}
              onClick={handleSubmit}
            >
              Valider ma réponse
            </button>
          ) : (
            <button className="btn btn-secondary next-qcm-btn" onClick={handleNext}>
              QCM Suivant <ArrowRight size={18} />
            </button>
          )}
        </div>

        {isSubmitted && (
          <div className="qcm-explanation fade-in">
            <h4><AlertCircle size={18} /> Explication officielle</h4>
            <p>{qcmData.explanation}</p>
          </div>
        )}

        <div className="qcm-actions">
          <button 
            className={`btn-icon action-btn ${isSaved ? 'saved' : ''}`}
            onClick={() => setIsSaved(!isSaved)}
          >
            <Bookmark size={20} fill={isSaved ? "var(--warning)" : "none"} color={isSaved ? "var(--warning)" : "currentColor"} /> 
            {isSaved ? "Sauvegardé" : "Favoris"}
          </button>
          
          <button 
            className={`btn-icon action-btn ${showComments ? 'active' : ''}`}
            onClick={() => setShowComments(!showComments)}
          >
            <MessageSquare size={20} /> Discussion (2)
          </button>
        </div>
      </div>

      {showComments && (
        <div className="qcm-comments card fade-in">
          <h3>Discussion entre étudiants</h3>
          <div className="comment-list">
            <div className="comment">
              <div className="comment-avatar bg-primary">Am</div>
              <div className="comment-body">
                <strong>Amine M.</strong> <span className="comment-time">Il y a 2 heures</span>
                <p>Attention au piège de la péricardite ! Le sus-décalage de la péricardite est diffus et non localisé en V1-V4.</p>
              </div>
            </div>
            <div className="comment">
              <div className="comment-avatar bg-success">Sa</div>
              <div className="comment-body">
                <strong>Sarah B.</strong> <span className="comment-time">Il y a 1 heure</span>
                <p>Exactement, merci Amine pour la précision. L'ECG est typique d'un IDM antérieur étendu.</p>
              </div>
            </div>
          </div>
          <div className="comment-input-area">
            <input type="text" className="comment-input" placeholder="Partagez votre avis ou posez une question..." />
            <button className="btn btn-primary">Envoyer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QCMs;
