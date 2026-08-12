import { useState, useEffect } from 'react';
import { getProjects, saveProjects, getCourses, saveCourses, getStats, saveStats, getTestimonials, saveTestimonials, getRequests, deleteRequest, getVisits } from '../data';
import { Link } from 'react-router-dom';
import '../index.css';

function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('requests'); 
  
  const [projects, setProjects] = useState([]);
  const [courses, setCourses] = useState([]);
  const [stats, setStats] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [requests, setRequests] = useState([]);
  const [visits, setVisits] = useState([]);
  
  const [formData, setFormData] = useState({ id: null, title: '', image: '', link: '', tags: '', description: '', value: '', name: '', role: '', text: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('admin_auth') === 'true') {
      setIsAuthenticated(true);
      loadAllData();
    }
  }, []);

  const loadAllData = async () => {
    setProjects(getProjects());
    setCourses(getCourses());
    setStats(getStats());
    setTestimonials(getTestimonials());
    const reqs = await getRequests();
    setRequests(reqs);
    const vs = await getVisits();
    setVisits(vs);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'salahpassword') {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_auth', 'true');
      loadAllData();
    } else {
      alert('كلمة المرور غير صحيحة');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('admin_auth');
    setPassword('');
  };

  const resetForm = () => {
    setFormData({ id: null, title: '', image: '', link: '', tags: '', description: '', value: '', name: '', role: '', text: '' });
    setIsEditing(false);
  };

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    resetForm();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
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
        setFormData((prev) => ({ ...prev, image: dataUrl }));
      };
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (activeTab === 'projects') {
      if (!formData.image) return alert('يرجى رفع صورة للعمل.');
      let updated = [...projects];
      const tagsArray = formData.tags ? formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '') : [];
      if (isEditing) updated = updated.map(p => p.id === formData.id ? { ...formData, tags: tagsArray } : p);
      else updated.push({ ...formData, id: Date.now(), tags: tagsArray });
      setProjects(updated); saveProjects(updated);
    } 
    else if (activeTab === 'courses') {
      if (!formData.image) return alert('يرجى رفع صورة للدورة.');
      let updated = [...courses];
      if (isEditing) updated = updated.map(c => c.id === formData.id ? { ...formData } : c);
      else updated.push({ ...formData, id: Date.now() });
      setCourses(updated); saveCourses(updated);
    }
    else if (activeTab === 'stats') {
      let updated = [...stats];
      if (isEditing) updated = updated.map(s => s.id === formData.id ? { ...formData } : s);
      else updated.push({ ...formData, id: Date.now() });
      setStats(updated); saveStats(updated);
    }
    else if (activeTab === 'testimonials') {
      let updated = [...testimonials];
      if (isEditing) updated = updated.map(t => t.id === formData.id ? { ...formData } : t);
      else updated.push({ ...formData, id: Date.now(), image: formData.image || '/assets/hero.jpg' });
      setTestimonials(updated); saveTestimonials(updated);
    }
    resetForm();
  };

  const handleEdit = (item) => {
    if (activeTab === 'projects') setFormData({ ...item, tags: item.tags ? item.tags.join(', ') : '', description: item.description || '' });
    else if (activeTab === 'courses') setFormData({ ...item, tags: '' });
    else if (activeTab === 'stats') setFormData({ ...item, tags: '' });
    else if (activeTab === 'testimonials') setFormData({ ...item, tags: '' });
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('هل أنت متأكد من الحذف؟')) {
      if (activeTab === 'projects') {
        const updated = projects.filter(p => p.id !== id); setProjects(updated); saveProjects(updated);
      } else if (activeTab === 'courses') {
        const updated = courses.filter(c => c.id !== id); setCourses(updated); saveCourses(updated);
      } else if (activeTab === 'stats') {
        const updated = stats.filter(s => s.id !== id); setStats(updated); saveStats(updated);
      } else if (activeTab === 'testimonials') {
        const updated = testimonials.filter(t => t.id !== id); setTestimonials(updated); saveTestimonials(updated);
      } else if (activeTab === 'requests') {
        const updated = requests.filter(r => r.id !== id); setRequests(updated); await deleteRequest(id);
      }
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="glass" style={{ padding: '3rem', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '2rem' }}>تسجيل الدخول للإدارة</h2>
          <form onSubmit={handleLogin}>
            <input type="password" placeholder="كلمة المرور..." value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>دخول</button>
          </form>
          <div style={{ marginTop: '1rem' }}><Link to="/" style={{ color: 'var(--accent-light)' }}>العودة للموقع</Link></div>
        </div>
      </div>
    );
  }

  let currentItems = [];
  if (activeTab === 'projects') currentItems = projects;
  else if (activeTab === 'courses') currentItems = courses;
  else if (activeTab === 'stats') currentItems = stats;
  else if (activeTab === 'testimonials') currentItems = testimonials;
  else if (activeTab === 'requests') currentItems = requests;
  else if (activeTab === 'visits') currentItems = visits;

  return (
    <div style={{ padding: '2rem', minHeight: '100vh', direction: 'rtl' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2>لوحة التحكم</h2>
        <div>
          <Link to="/" className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>معاينة الموقع</Link>
          <button onClick={handleLogout} className="btn" style={{ background: '#ef4444', color: 'white', padding: '0.5rem 1rem' }}>تسجيل الخروج</button>
        </div>
      </div>

      <div className="admin-tabs" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <button onClick={() => handleTabSwitch('requests')} className={`btn ${activeTab === 'requests' ? 'btn-primary' : 'btn-outline'}`}>
          الطلبات الواردة <span style={{ background: 'red', color: 'white', borderRadius: '50%', padding: '0.1rem 0.5rem', fontSize: '0.8rem', marginRight: '0.5rem' }}>{requests.length}</span>
        </button>
        <button onClick={() => handleTabSwitch('projects')} className={`btn ${activeTab === 'projects' ? 'btn-primary' : 'btn-outline'}`}>الأعمال</button>
        <button onClick={() => handleTabSwitch('courses')} className={`btn ${activeTab === 'courses' ? 'btn-primary' : 'btn-outline'}`}>الدورات</button>
        <button onClick={() => handleTabSwitch('stats')} className={`btn ${activeTab === 'stats' ? 'btn-primary' : 'btn-outline'}`}>الإحصائيات</button>
        <button onClick={() => handleTabSwitch('testimonials')} className={`btn ${activeTab === 'testimonials' ? 'btn-primary' : 'btn-outline'}`}>آراء العملاء</button>
        <button onClick={() => handleTabSwitch('visits')} className={`btn ${activeTab === 'visits' ? 'btn-primary' : 'btn-outline'}`}>سجل الزوار</button>
      </div>

      <div className={`admin-grid ${(activeTab === 'requests' || activeTab === 'visits') ? 'single-column' : ''}`}>
        
        {/* Form - Only show if not in requests or visits tab */}
        {(activeTab !== 'requests' && activeTab !== 'visits') && (
          <div className="glass" style={{ padding: '2rem', height: 'fit-content' }}>
            <h3>{isEditing ? 'تعديل' : 'إضافة'} بيانات</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
              
              {activeTab === 'stats' && (
                <>
                  <div>
                    <label style={labelStyle}>العنوان (مثال: مشاريع مكتملة)</label>
                    <input required name="title" value={formData.title} onChange={handleChange} type="text" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>الرقم (مثال: +50)</label>
                    <input required name="value" value={formData.value} onChange={handleChange} type="text" style={inputStyle} />
                  </div>
                </>
              )}

              {activeTab === 'testimonials' && (
                <>
                  <div>
                    <label style={labelStyle}>اسم العميل</label>
                    <input required name="name" value={formData.name} onChange={handleChange} type="text" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>المسمى الوظيفي / الشركة</label>
                    <input required name="role" value={formData.role} onChange={handleChange} type="text" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>التقييم (النص)</label>
                    <textarea required name="text" value={formData.text} onChange={handleChange} rows="4" style={{ ...inputStyle, resize: 'vertical' }}></textarea>
                  </div>
                  <div>
                    <label style={labelStyle}>صورة العميل (اختياري)</label>
                    <input type="file" accept="image/*" onChange={handleImageUpload} style={{...inputStyle, padding: '0.5rem'}} />
                    {formData.image && <img src={formData.image} alt="Preview" style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '50%', marginTop: '0.5rem' }} />}
                  </div>
                </>
              )}

              {(activeTab === 'projects' || activeTab === 'courses') && (
                <>
                  <div>
                    <label style={labelStyle}>العنوان</label>
                    <input required name="title" value={formData.title} onChange={handleChange} type="text" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>الصورة (رفع من الجهاز)</label>
                    <input type="file" accept="image/*" onChange={handleImageUpload} style={{...inputStyle, padding: '0.5rem'}} />
                    {formData.image && <img src={formData.image} alt="Preview" style={{ width: '100%', maxHeight: '150px', objectFit: 'cover', borderRadius: '8px', marginTop: '0.5rem' }} />}
                  </div>
                  <div>
                    <label style={labelStyle}>الرابط</label>
                    <input required name="link" value={formData.link} onChange={handleChange} type="text" style={inputStyle} />
                  </div>
                  {activeTab === 'projects' && (
                    <div>
                      <label style={labelStyle}>التقنيات (افصل بـ , )</label>
                      <input name="tags" value={formData.tags} onChange={handleChange} type="text" style={inputStyle} />
                    </div>
                  )}
                  <div>
                    <label style={labelStyle}>الوصف التفصيلي</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} rows="4" style={{ ...inputStyle, resize: 'vertical' }}></textarea>
                  </div>
                </>
              )}

              <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>{isEditing ? 'حفظ التعديلات' : 'إضافة'}</button>
              {isEditing && <button type="button" onClick={resetForm} className="btn btn-outline" style={{ marginTop: '0.5rem' }}>إلغاء</button>}
            </form>
          </div>
        )}

        {/* Items List */}
        <div className="glass" style={{ padding: '2rem' }}>
          <h3>البيانات الحالية ({currentItems.length})</h3>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            {/* Standard Items Render (Projects, Courses, Stats, Testimonials) */}
            {(activeTab !== 'requests' && activeTab !== 'visits') && currentItems.map(item => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  {activeTab !== 'stats' && (
                    <img src={item.image} alt={item.title || item.name} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: activeTab === 'testimonials' ? '50%' : '4px' }} />
                  )}
                  <div>
                    <h4 style={{ margin: 0 }}>
                      {activeTab === 'stats' ? item.title : (activeTab === 'testimonials' ? item.name : item.title)}
                    </h4>
                    {activeTab === 'projects' && <span style={{ fontSize: '0.8rem', color: 'var(--accent-light)' }}>{item.tags?.join(', ')}</span>}
                    {activeTab === 'courses' && <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>{item.description?.substring(0, 50)}...</p>}
                    {activeTab === 'stats' && <strong style={{ fontSize: '1.2rem', color: 'var(--accent-light)' }}>{item.value}</strong>}
                    {activeTab === 'testimonials' && <span style={{ fontSize: '0.8rem', color: 'var(--accent-light)' }}>{item.role}</span>}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button onClick={() => handleEdit(item)} className="btn btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.9rem' }}>تعديل</button>
                  <button onClick={() => handleDelete(item.id)} className="btn" style={{ background: '#ef4444', color: 'white', padding: '0.4rem 0.8rem', fontSize: '0.9rem' }}>حذف</button>
                </div>
              </div>
            ))}

            {/* Requests List Render */}
            {activeTab === 'requests' && currentItems.map(req => (
              <div key={req.id} style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '8px', borderLeft: req.type === 'devis' ? '4px solid var(--accent-light)' : '4px solid #10b981' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div>
                    <h4 style={{ margin: '0 0 0.5rem 0', color: req.type === 'devis' ? 'var(--accent-light)' : '#10b981' }}>
                      {req.type === 'devis' ? 'طلب تسعيرة مشروع (Devis)' : 'طلب تسجيل في دورة'}
                    </h4>
                    <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}><strong>المرسل:</strong> {req.name} | <strong>الهاتف:</strong> <span dir="ltr">{req.phone}</span></p>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>التاريخ: {new Date(req.id).toLocaleString('ar-DZ')}</p>
                  </div>
                  <button onClick={() => handleDelete(req.id)} className="btn" style={{ background: '#ef4444', color: 'white', padding: '0.4rem 0.8rem', fontSize: '0.9rem' }}>حذف الطلب</button>
                </div>

                <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                  {req.type === 'devis' ? (
                    <>
                      <p><strong>نوع المشروع:</strong> {req.projectType}</p>
                      <p><strong>الوصف:</strong> {req.description}</p>
                      {req.image && (
                        <div style={{ marginTop: '1rem' }}>
                          <strong>مرفقات:</strong><br />
                          <img src={req.image} alt="مرفق" style={{ maxWidth: '100%', maxHeight: '300px', borderRadius: '8px', marginTop: '0.5rem', border: '1px solid var(--glass-border)' }} />
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <p><strong>الدورة المطلوبة:</strong> {req.courseTitle}</p>
                      <p><strong>نوع الحضور:</strong> {req.attendanceType}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
            {/* Visits List Render */}
            {activeTab === 'visits' && (
              <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px' }}>
                <table style={{ width: '100%', textAlign: 'right', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                      <th style={{ padding: '1rem' }}>التاريخ</th>
                      <th style={{ padding: '1rem' }}>عدد الزيارات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((visit, index) => (
                      <tr key={index} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '1rem' }}>{visit.date}</td>
                        <td style={{ padding: '1rem', color: 'var(--accent-light)', fontWeight: 'bold' }}>{visit.count} زائر</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {currentItems.length === 0 && <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>لا توجد بيانات لعرضها.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

const inputStyle = { width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.1)', color: 'inherit', fontSize: '1rem', fontFamily: 'inherit' };
const labelStyle = { display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' };

export default Admin;
