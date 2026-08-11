import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, ChevronLeft, Search, Bell, User, PlayCircle, FileText, Activity } from 'lucide-react';

export default function MedSpaceApp() {
  const [activeView, setActiveView] = useState('dashboard'); // dashboard, course, quiz
  const [activeCourse, setActiveCourse] = useState(null);
  
  const courses = [
    { id: 1, title: 'Anatomie', progress: 75, nextLesson: 'Système Nerveux', icon: Activity, color: '#10b981' },
    { id: 2, title: 'Pharmacologie', progress: 40, nextLesson: 'Antibiotiques', icon: FileText, color: '#059669' },
    { id: 3, title: 'Pathologie', progress: 15, nextLesson: 'Inflammation Cellulaire', icon: Activity, color: '#34d399' },
  ];

  const quizQuestions = [
    { q: 'Quel est le nerf crânien responsable de la vision ?', options: ['Nerf olfactif', 'Nerf optique', 'Nerf facial', 'Nerf vague'], correct: 1 },
    { q: 'Laquelle de ces cellules produit des anticorps ?', options: ['Lymphocytes T', 'Lymphocytes B', 'Neutrophiles', 'Macrophages'], correct: 1 },
  ];
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAns, setSelectedAns] = useState(null);

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'sans-serif', direction: 'ltr', display: 'flex' }}>
      
      {/* Sidebar */}
      <div style={{ width: '260px', backgroundColor: '#ffffff', borderRight: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '25px 20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ width: '45px', height: '45px', background: 'linear-gradient(135deg, #10b981, #059669)', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            <Activity size={24} />
          </div>
          <h2 style={{ margin: 0, fontSize: '1.4rem', color: '#1e293b', fontWeight: '800' }}>MedSpace</h2>
        </div>

        <div style={{ padding: '20px', flex: 1 }}>
          <p style={{ color: '#94a3b8', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '15px', textTransform: 'uppercase' }}>Plateforme Éducative</p>
          <button onClick={() => { setActiveView('dashboard'); setActiveCourse(null); }} style={{ width: '100%', padding: '12px 15px', display: 'flex', alignItems: 'center', gap: '15px', backgroundColor: activeView === 'dashboard' ? '#ecfdf5' : 'transparent', color: activeView === 'dashboard' ? '#10b981' : '#64748b', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: activeView === 'dashboard' ? 'bold' : 'normal', marginBottom: '10px' }}>
            <HomeIcon size={20} /> Tableau de bord
          </button>
          <button onClick={() => { setActiveView('quiz'); }} style={{ width: '100%', padding: '12px 15px', display: 'flex', alignItems: 'center', gap: '15px', backgroundColor: activeView === 'quiz' ? '#ecfdf5' : 'transparent', color: activeView === 'quiz' ? '#10b981' : '#64748b', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: activeView === 'quiz' ? 'bold' : 'normal' }}>
            <CheckCircle size={20} /> Auto-évaluation
          </button>
        </div>

        <div style={{ padding: '20px', borderTop: '1px solid #e2e8f0' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <button style={{ width: '100%', padding: '12px 15px', display: 'flex', alignItems: 'center', gap: '15px', backgroundColor: '#f1f5f9', color: '#475569', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' }}>
              <ChevronLeft size={20} /> Retour au portfolio
            </button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* Top Navbar */}
        <div style={{ height: '80px', backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f8fafc', padding: '10px 15px', borderRadius: '12px', width: '400px' }}>
            <Search size={18} color="#94a3b8" style={{ marginRight: '10px' }} />
            <input type="text" placeholder="Rechercher des cours, des leçons..." style={{ border: 'none', background: 'transparent', outline: 'none', padding: '0 10px', width: '100%' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ position: 'relative', cursor: 'pointer' }}>
              <Bell size={22} color="#64748b" />
              <span style={{ position: 'absolute', top: '-2px', right: '-2px', width: '10px', height: '10px', backgroundColor: '#ef4444', borderRadius: '50%' }}></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: '#e2e8f0', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#475569' }}>
                <User size={20} />
              </div>
              <span style={{ fontWeight: 'bold', color: '#1e293b' }}>Étudiant - 3ème Année</span>
            </div>
          </div>
        </div>

        {/* Dynamic Content */}
        <div style={{ padding: '40px', overflowY: 'auto', flex: 1 }}>
          
          {activeView === 'dashboard' && (
            <>
              <div style={{ backgroundColor: '#10b981', borderRadius: '24px', padding: '40px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', boxShadow: '0 20px 25px -5px rgba(16, 185, 129, 0.2)' }}>
                <div>
                  <h1 style={{ fontSize: '2.5rem', margin: '0 0 10px 0', fontWeight: '800' }}>Ravi de vous revoir ! 👋</h1>
                  <p style={{ fontSize: '1.2rem', margin: '0 0 20px 0', opacity: 0.9 }}>Vous progressez bien, continuez votre apprentissage en Anatomie aujourd'hui.</p>
                  <button onClick={() => { setActiveView('course'); setActiveCourse(courses[0]); }} style={{ backgroundColor: 'white', color: '#059669', border: 'none', padding: '12px 25px', borderRadius: '30px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <PlayCircle size={20} /> Reprendre le cours
                  </button>
                </div>
                <div style={{ width: '150px', height: '150px', border: '15px solid rgba(255,255,255,0.2)', borderRadius: '50%', borderTopColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', transform: 'rotate(45deg)' }}>
                  <div style={{ transform: 'rotate(-45deg)', textAlign: 'center' }}>
                    <span style={{ fontSize: '2rem', fontWeight: '800' }}>75%</span>
                  </div>
                </div>
              </div>

              <h2 style={{ fontSize: '1.5rem', color: '#1e293b', marginBottom: '20px' }}>Mes Cours</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px' }}>
                {courses.map(course => (
                  <div key={course.id} onClick={() => { setActiveView('course'); setActiveCourse(course); }} style={{ backgroundColor: 'white', borderRadius: '20px', padding: '25px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', cursor: 'pointer', transition: 'transform 0.2s', border: '1px solid #f1f5f9' }}>
                    <div style={{ width: '50px', height: '50px', backgroundColor: `${course.color}15`, borderRadius: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: course.color, marginBottom: '20px' }}>
                      <course.icon size={26} />
                    </div>
                    <h3 style={{ fontSize: '1.2rem', color: '#1e293b', margin: '0 0 10px 0' }}>{course.title}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#64748b', fontSize: '0.9rem', marginBottom: '20px' }}>
                      <Clock size={16} /> <span>Prochaine leçon : {course.nextLesson}</span>
                    </div>
                    <div style={{ width: '100%', backgroundColor: '#f1f5f9', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: `${course.progress}%`, height: '100%', backgroundColor: course.color, borderRadius: '4px' }}></div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontSize: '0.8rem', color: '#94a3b8', fontWeight: 'bold' }}>
                      <span>Progression</span>
                      <span style={{ color: course.color }}>{course.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeView === 'course' && activeCourse && (
            <div>
              <button onClick={() => setActiveView('dashboard')} style={{ background: 'transparent', border: 'none', color: '#64748b', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '30px', fontWeight: 'bold' }}>
                <ChevronLeft size={20} /> Retour aux cours
              </button>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
                <div>
                  <h1 style={{ fontSize: '2.5rem', color: '#1e293b', margin: '0 0 10px 0' }}>{activeCourse.title}</h1>
                  <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Contenu du cours organisé par systèmes corporels.</p>
                </div>
                <button style={{ backgroundColor: activeCourse.color, color: 'white', border: 'none', padding: '12px 30px', borderRadius: '12px', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer' }}>
                  Commencer l'étude
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {[1, 2, 3, 4].map(lesson => (
                  <div key={lesson} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', border: '1px solid #f1f5f9' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                      <div style={{ width: '40px', height: '40px', backgroundColor: lesson === 1 ? '#10b981' : '#f1f5f9', color: lesson === 1 ? 'white' : '#94a3b8', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {lesson === 1 ? <CheckCircle size={20} /> : lesson}
                      </div>
                      <div>
                        <h3 style={{ margin: '0 0 5px 0', color: '#1e293b', fontSize: '1.1rem' }}>Leçon {lesson}: {lesson === 1 ? 'Introduction à l\'Anatomie' : 'Membre supérieur'}</h3>
                        <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.9rem' }}>45 minutes • Vidéo + PDF</p>
                      </div>
                    </div>
                    <PlayCircle size={30} color={lesson === 2 ? activeCourse.color : '#cbd5e1'} style={{ cursor: 'pointer' }} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeView === 'quiz' && (
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h1 style={{ fontSize: '2rem', color: '#1e293b', marginBottom: '30px', textAlign: 'center' }}>Test Diagnostique</h1>
              
              <div style={{ backgroundColor: 'white', borderRadius: '24px', padding: '40px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', color: '#64748b', fontWeight: 'bold' }}>
                  <span>Question {currentQ + 1} sur {quizQuestions.length}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ef4444' }}><Clock size={18} /> 04:59</span>
                </div>

                <h2 style={{ fontSize: '1.5rem', color: '#1e293b', marginBottom: '40px', lineHeight: '1.6' }}>
                  {quizQuestions[currentQ].q}
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {quizQuestions[currentQ].options.map((opt, i) => (
                    <button 
                      key={i} 
                      onClick={() => setSelectedAns(i)}
                      style={{ 
                        width: '100%', padding: '20px', textAlign: 'left', borderRadius: '16px', fontSize: '1.1rem', cursor: 'pointer', transition: '0.2s',
                        backgroundColor: selectedAns === i ? '#ecfdf5' : '#f8fafc',
                        border: `2px solid ${selectedAns === i ? '#10b981' : '#e2e8f0'}`,
                        color: selectedAns === i ? '#059669' : '#334155',
                        fontWeight: selectedAns === i ? 'bold' : 'normal'
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'flex-end' }}>
                  <button 
                    disabled={selectedAns === null}
                    onClick={() => {
                      if (currentQ < quizQuestions.length - 1) {
                        setCurrentQ(c => c + 1);
                        setSelectedAns(null);
                      } else {
                        alert('Le test est terminé avec succès !');
                        setActiveView('dashboard');
                      }
                    }}
                    style={{ backgroundColor: selectedAns !== null ? '#10b981' : '#94a3b8', color: 'white', border: 'none', padding: '15px 40px', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 'bold', cursor: selectedAns !== null ? 'pointer' : 'not-allowed' }}
                  >
                    {currentQ < quizQuestions.length - 1 ? 'Question Suivante' : 'Terminer le test'}
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

function HomeIcon(props) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
}
