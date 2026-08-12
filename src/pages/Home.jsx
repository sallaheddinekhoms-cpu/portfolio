import { useState, useEffect } from 'react';
import { Code, Smartphone, Monitor } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaWhatsapp, FaTelegram, FaFacebook, FaGraduationCap, FaSun, FaMoon, FaQuoteRight, FaInfoCircle, FaBars, FaTimes } from 'react-icons/fa';
import { getProjects, getCourses, getStats, getTestimonials, getRequests, addRequest, recordVisit } from '../data';
import { Link } from 'react-router-dom';

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [projects, setProjects] = useState([]);
  const [courses, setCourses] = useState([]);
  const [stats, setStats] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  
  const [selectedProject, setSelectedProject] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Request Modals State
  const [showDevisModal, setShowDevisModal] = useState(false);
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [showCourseDetailsModal, setShowCourseDetailsModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [requestData, setRequestData] = useState({ name: '', phone: '', projectType: 'تطبيق موبايل', description: '', image: '', courseTitle: '', attendanceType: 'أونلاين' });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    recordVisit();
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    setProjects(getProjects());
    setCourses(getCourses());
    setStats(getStats());
    setTestimonials(getTestimonials());
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRequestChange = (e) => {
    setRequestData({ ...requestData, [e.target.name]: e.target.value });
  };

  const handleRequestImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 800;
        const MAX_HEIGHT = 800;
        let width = img.width;
        let height = img.height;
        if (width > height) {
          if (width > MAX_WIDTH) { height *= MAX_WIDTH / width; width = MAX_WIDTH; }
        } else {
          if (height > MAX_HEIGHT) { width *= MAX_HEIGHT / height; height = MAX_HEIGHT; }
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
        setRequestData((prev) => ({ ...prev, image: dataUrl }));
      };
    };
  };

  const submitDevisRequest = async (e) => {
    e.preventDefault();
    const newRequest = {
      id: Date.now(),
      type: 'devis',
      name: requestData.name,
      phone: requestData.phone,
      projectType: requestData.projectType,
      description: requestData.description,
      image: requestData.image
    };
    await addRequest(newRequest);
    alert('تم إرسال طلبك بنجاح! سيتم التواصل معك قريباً.');
    setShowDevisModal(false);
    setRequestData({ ...requestData, name: '', phone: '', description: '', image: '' });
  };

  const submitCourseRequest = async (e) => {
    e.preventDefault();
    const newRequest = {
      id: Date.now(),
      type: 'course',
      name: requestData.name,
      phone: requestData.phone,
      courseTitle: requestData.courseTitle,
      attendanceType: requestData.attendanceType
    };
    await addRequest(newRequest);
    alert('تم تسجيل طلبك بنجاح! سيتم التواصل معك قريباً لتأكيد التسجيل.');
    setShowCourseModal(false);
    setRequestData({ ...requestData, name: '', phone: '' });
  };

  const openCourseModal = (courseName) => {
    setRequestData({ ...requestData, courseTitle: courseName });
    setShowCourseModal(true);
  };

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="logo" style={{ direction: 'ltr', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/assets/logo.jpg" alt="KhoMs Tech Logo" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
            <div>KhoMs <span>Tech</span></div>
          </div>
          <div className="nav-links" style={{ display: 'flex', alignItems: 'center' }}>
            <a href="#home">الرئيسية</a>
            <a href="#about">عني</a>
            <a href="#services">خدماتي</a>
            <a href="#portfolio">أعمالنا</a>
            <a href="#contact">تواصل معنا</a>

            <button onClick={toggleTheme} title="تغيير المظهر" style={{ background: 'transparent', border: 'none', color: 'var(--text-main)', cursor: 'pointer', fontSize: '1.2rem', marginRight: '1rem' }}>
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu">
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>الرئيسية</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>عني</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>خدماتي</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)}>أعمالنا</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>تواصل معنا</a>
            <div className="mobile-menu-actions">
              <button onClick={toggleTheme} title="تغيير المظهر" style={{ background: 'transparent', border: 'none', color: 'var(--text-main)', cursor: 'pointer', fontSize: '1.2rem' }}>
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="blob"></div>
        <div className="container">
          <div className="hero-content">
            <h2>مرحباً بك في</h2>
            <h1 style={{ direction: 'ltr' }}>KhoMs <span>Tech</span></h1>
            <p>
              استوديو تطوير برمجيات احترافي متخصص في بناء تطبيقات الويب، الهواتف الذكية، وتطبيقات سطح المكتب. نُحول الأفكار المعقدة إلى تجارب رقمية بسيطة، تفاعلية، وجذابة باستخدام أحدث التقنيات.
            </p>
            <div className="hero-buttons">
              <button onClick={() => setShowDevisModal(true)} className="btn btn-primary" style={{ fontSize: '1.1rem' }}>اطلب تسعيرة مشروعك</button>
              <a href="#portfolio" className="btn btn-outline">شاهد أعمالنا</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/assets/logo.jpg" alt="KhoMs Tech Logo" style={{ borderRadius: '50%', boxShadow: '0 0 40px rgba(59, 130, 246, 0.5)' }} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="container">
          <h2 className="section-title">نبذة <span>عني</span></h2>
          <div className="glass" style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 250px', textAlign: 'center' }}>
              <img src="/assets/profile.jpg" alt="خمس صلاح الدين" style={{ width: '100%', maxWidth: '250px', borderRadius: '16px', objectFit: 'cover', border: '4px solid var(--accent-color)', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }} />
            </div>
            <div style={{ flex: '2 1 400px' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-main)' }}>أنا خمس صلاح الدين</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', margin: 0 }}>
                أستاذ ومدرب في المجال التكنولوجي والرقمي، ومطور برمجيات شغوف بالبرمجة والتصميم. 
                أمتلك خبرة واسعة في بناء تطبيقات متكاملة تعمل على مختلف المنصات (ويب، اندرويد، ios، ويندوز).
                هدفي دائماً هو نقل المعرفة، وكتابة كود نظيف، قابل للتطوير، مع تقديم واجهات مستخدم مذهلة (UI/UX) تترك انطباعاً رائعاً لدى المستخدم.
              </p>
            </div>
          </div>


        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <div className="container">
          <h2 className="section-title">ماذا <span>نُقدم؟</span></h2>
          <div className="services-grid">
            <div className="service-card glass">
              <div className="service-icon">
                <Code size={36} />
              </div>
              <h3>تطوير الويب</h3>
              <p>تصميم وبرمجة مواقع وتطبيقات ويب سريعة ومتجاوبة مع كافة الشاشات باستخدام أحدث تقنيات الويب.</p>
            </div>
            <div className="service-card glass">
              <div className="service-icon">
                <Smartphone size={36} />
              </div>
              <h3>تطبيقات الموبايل</h3>
              <p>تطوير تطبيقات هواتف ذكية (Android & iOS) بأداء عالي وتجربة مستخدم سلسة وجذابة.</p>
            </div>
            <div className="service-card glass">
              <div className="service-icon">
                <Monitor size={36} />
              </div>
              <h3>تطبيقات سطح المكتب</h3>
              <p>بناء برامج وأنظمة قوية وموثوقة لسطح المكتب لإدارة الأعمال وتسهيل المهام اليومية.</p>
            </div>
            <div className="service-card glass">
              <div className="service-icon">
                <FaGraduationCap size={36} />
              </div>
              <h3>التكوين والتدريب</h3>
              <p>تقديم دورات تدريبية وتوجيه في مجالات البرمجة وتطوير البرمجيات لمساعدتك في بناء مسيرتك التقنية.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio">
        <div className="container">
          <h2 className="section-title">أحدث <span>أعمالنا</span></h2>
          <div className="portfolio-grid">
            {projects.map((project) => (
              <div 
                className="portfolio-card glass" 
                key={project.id} 
                onClick={() => setSelectedProject(project)}
                style={{ cursor: 'pointer' }}
              >
                <img src={project.image} alt={project.title} className="portfolio-img" />
                <div className="portfolio-info">
                  <h3 style={{ color: 'white', cursor: 'pointer' }}>{project.title}</h3>
                  <div className="portfolio-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            {projects.length === 0 && <p style={{ textAlign: 'center', gridColumn: '1 / -1' }}>لا توجد أعمال لعرضها.</p>}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses">
        <div className="container">
          <h2 className="section-title">الدورات <span>التدريبية والتكوينية</span></h2>
          <div className="portfolio-grid">
            {courses.map((course) => (
              <div 
                className="glass" 
                key={course.id}
                style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', transition: 'transform 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <img src={course.image} alt={course.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: 'rgba(15, 23, 42, 0.4)' }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ color: 'var(--accent-light)', marginBottom: '0.8rem', fontSize: '1.25rem', lineHeight: '1.4' }}>{course.title}</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.6' }}>{course.description}</p>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem' }}>
                    <button onClick={() => openCourseModal(course.title)} className="btn btn-primary" style={{ flex: 1, fontSize: '0.9rem', padding: '0.6rem' }}>سجل الآن</button>
                    <button onClick={() => { setSelectedCourse(course); setShowCourseDetailsModal(true); }} className="btn btn-outline" style={{ flex: 1, fontSize: '0.9rem', padding: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', margin: 0 }}>
                      <FaInfoCircle /> تفاصيل
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {courses.length === 0 && <p style={{ textAlign: 'center', gridColumn: '1 / -1' }}>لا توجد دورات حالياً.</p>}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">تواصل <span>معنا</span></h2>
          <div className="glass" style={{ padding: '3rem', maxWidth: '600px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
              هل لديك فكرة مشروع رائعة؟ دعنا نتحدث ونجعلها حقيقة!
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem', fontSize: '1.1rem' }}>
              <a href="mailto:Sallaheddinekhoms@gmail.com" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-main)' }}>
                <FaEnvelope size={20} style={{ color: 'var(--accent-light)' }} />
                <span>Sallaheddinekhoms@gmail.com</span>
              </a>
              <a href="tel:+213670459370" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-main)' }} dir="ltr">
                <FaPhone size={20} style={{ color: 'var(--accent-light)' }} />
                <span>+213 670 45 93 70</span>
              </a>
              <a href="https://wa.me/213670459370" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-main)' }} dir="ltr">
                <FaWhatsapp size={20} style={{ color: '#25D366' }} />
                <span>WhatsApp</span>
              </a>
              <a href="https://t.me/+213670459370" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-main)' }} dir="ltr">
                <FaTelegram size={20} style={{ color: '#0088cc' }} />
                <span>Telegram</span>
              </a>
            </div>
            <div className="social-links" style={{ marginTop: '0' }}>
              <a href="https://www.facebook.com/profile.php?id=61585974989988" target="_blank" rel="noopener noreferrer" className="social-link" title="Facebook"><FaFacebook size={24} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>© {new Date().getFullYear()} KhoMs Tech. جميع الحقوق محفوظة.</p>
        </div>
      </footer>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div onClick={() => setSelectedProject(null)} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', direction: 'rtl' }}>
          <div className="glass" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '800px', width: '100%', maxHeight: '90vh', overflowY: 'auto', background: 'var(--primary-color)', borderRadius: '16px', position: 'relative' }}>
            <button onClick={() => setSelectedProject(null)} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', fontSize: '1.2rem', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
            <img src={selectedProject.image} alt={selectedProject.title} style={{ width: '100%', height: '350px', objectFit: 'cover', borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }} />
            <div style={{ padding: '2rem' }}>
              <h2 style={{ fontSize: '2rem', margin: '0 0 1rem 0' }}>{selectedProject.title}</h2>
              <div className="portfolio-tags" style={{ margin: '1rem 0', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {selectedProject.tags?.map((tag, i) => <span key={i} style={{ background: 'rgba(59, 130, 246, 0.2)', padding: '0.4rem 1rem', borderRadius: '30px' }}>{tag}</span>)}
              </div>
              <div style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2rem', fontSize: '1.1rem', whiteSpace: 'pre-line' }}>
                {selectedProject.description || 'لم يتم إضافة وصف مفصل لهذا المشروع حتى الآن.'}
              </div>
              {selectedProject.link !== '#' && (
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-block' }}>زيارة المشروع</a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Modal for Devis Request */}
      {showDevisModal && (
        <div onClick={() => setShowDevisModal(false)} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', direction: 'rtl' }}>
          <div className="glass" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px', width: '100%', maxHeight: '95vh', overflowY: 'auto', background: 'var(--primary-color)', borderRadius: '16px', padding: '2rem', position: 'relative' }}>
            <button onClick={() => setShowDevisModal(false)} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,0,0,0.2)', border: 'none', color: 'var(--text-main)', width: '30px', height: '30px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
            <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-light)' }}>اطلب تسعيرة مشروع</h2>
            <form onSubmit={submitDevisRequest} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>الاسم الكريم</label>
                <input required type="text" name="name" value={requestData.name} onChange={handleRequestChange} style={inputStyle} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>رقم الهاتف (أو واتساب)</label>
                <input required type="text" name="phone" value={requestData.phone} onChange={handleRequestChange} style={inputStyle} dir="ltr" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>نوع المشروع</label>
                <select name="projectType" value={requestData.projectType} onChange={handleRequestChange} style={inputStyle}>
                  <option value="تطبيق موبايل">تطبيق موبايل (Android / iOS)</option>
                  <option value="تطبيق سطح مكتب">تطبيق سطح مكتب (Windows)</option>
                  <option value="تطبيق ويب">تطبيق ويب / موقع إلكتروني</option>
                  <option value="منصة متكاملة">منصة متكاملة (موبايل + ويب + لوحة تحكم)</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>وصف المشروع (الفكرة والخصائص المطلوبة)</label>
                <textarea required name="description" value={requestData.description} onChange={handleRequestChange} rows="5" style={{ ...inputStyle, resize: 'vertical' }}></textarea>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>إرفاق صورة أو رسم توضيحي (اختياري)</label>
                <input type="file" accept="image/*" onChange={handleRequestImage} style={{ ...inputStyle, padding: '0.5rem' }} />
                {requestData.image && <p style={{ fontSize: '0.8rem', color: '#10b981', marginTop: '0.5rem' }}>تم إرفاق الصورة بنجاح ✓</p>}
              </div>
              <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>إرسال الطلب</button>
            </form>
          </div>
        </div>
      )}

      {/* Modal for Course Registration */}
      {showCourseModal && (
        <div onClick={() => setShowCourseModal(false)} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', direction: 'rtl' }}>
          <div className="glass" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '500px', width: '100%', background: 'var(--primary-color)', borderRadius: '16px', padding: '2rem', position: 'relative' }}>
            <button onClick={() => setShowCourseModal(false)} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,0,0,0.2)', border: 'none', color: 'var(--text-main)', width: '30px', height: '30px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
            <h2 style={{ marginBottom: '0.5rem', color: 'var(--accent-light)' }}>طلب تسجيل في دورة</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>{requestData.courseTitle}</p>
            <form onSubmit={submitCourseRequest} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>الاسم الكريم</label>
                <input required type="text" name="name" value={requestData.name} onChange={handleRequestChange} style={inputStyle} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>رقم الهاتف (أو واتساب)</label>
                <input required type="text" name="phone" value={requestData.phone} onChange={handleRequestChange} style={inputStyle} dir="ltr" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>طبيعة الحضور المفضلة</label>
                <select name="attendanceType" value={requestData.attendanceType} onChange={handleRequestChange} style={inputStyle}>
                  <option value="أونلاين">عن بُعد (أونلاين)</option>
                  <option value="حضوري">حضوري</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', background: '#10b981' }}>تأكيد التسجيل</button>
            </form>
          </div>
        </div>
      )}
      {/* Modal for Course Details */}
      {showCourseDetailsModal && selectedCourse && (
        <div onClick={() => setShowCourseDetailsModal(false)} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', direction: 'rtl' }}>
          <div className="glass" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '700px', width: '100%', maxHeight: '95vh', overflowY: 'auto', background: 'var(--primary-color)', borderRadius: '16px', padding: '2rem', position: 'relative' }}>
            <button onClick={() => setShowCourseDetailsModal(false)} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,0,0,0.2)', border: 'none', color: 'var(--text-main)', width: '30px', height: '30px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
            
            <h2 style={{ marginBottom: '1rem', color: 'var(--accent-light)' }}>{selectedCourse.title}</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.6' }}>{selectedCourse.description}</p>
            
            {selectedCourse.details && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-main)' }}>
                <div>
                  <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>🎯 الهدف من التكوين</h4>
                  <p style={{ lineHeight: '1.6', margin: 0 }}>{selectedCourse.details.objective}</p>
                </div>
                
                <div>
                  <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>📚 محاور التكوين</h4>
                  <ul style={{ listStyleType: 'disc', paddingRight: '1.5rem', lineHeight: '1.8', margin: 0 }}>
                    {selectedCourse.details.content.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', backgroundColor: 'rgba(0,0,0,0.1)', padding: '1rem', borderRadius: '8px' }}>
                  <div>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'block', marginBottom: '0.2rem' }}>⏱️ المدة المقترحة</span>
                    <span style={{ fontWeight: 'bold' }}>{selectedCourse.details.duration}</span>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'block', marginBottom: '0.2rem' }}>🎓 متطلبات الالتحاق</span>
                    <span style={{ fontWeight: 'bold' }}>{selectedCourse.details.prerequisites}</span>
                  </div>
                </div>
              </div>
            )}
            
            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
              <button onClick={() => { setShowCourseDetailsModal(false); openCourseModal(selectedCourse.title); }} className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '0.8rem 2rem', background: '#10b981' }}>
                سجل في هذه الدورة الآن
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const inputStyle = { width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.1)', color: 'inherit', fontSize: '1rem', fontFamily: 'inherit' };

export default Home;
