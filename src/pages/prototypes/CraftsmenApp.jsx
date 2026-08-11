import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Star, Phone, ChevronLeft, Wrench, Menu, MessageCircle, X, CheckCircle, ShieldCheck } from 'lucide-react';

export default function CraftsmenApp() {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCraftsman, setSelectedCraftsman] = useState(null);
  const [contactModal, setContactModal] = useState(false);

  const craftsmen = [
    { id: 1, name: 'عمر الحداد', profession: 'سباك', rating: 4.8, reviews: 124, distance: '1.2 كم', image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=200', available: true, bio: 'متخصص في جميع أعمال السباكة وتأسيس شبكات المياه وإصلاح التسربات بأحدث الأجهزة. خبرة 15 عاماً في المجال.', jobsDone: 340, rate: '2500 د.ج/ساعة' },
    { id: 2, name: 'محمد الصالح', profession: 'كهربائي', rating: 4.9, reviews: 89, distance: '3.5 كم', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200', available: false, bio: 'تركيب وصيانة جميع التمديدات الكهربائية المنزلية والصناعية بأعلى معايير السلامة والأمان.', jobsDone: 180, rate: '3000 د.ج/ساعة' },
    { id: 3, name: 'سعيد النجار', profession: 'نجار', rating: 4.5, reviews: 56, distance: '5.0 كم', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200', available: true, bio: 'تفصيل غرف نوم، مطابخ، وتركيب الأبواب الخشبية باحترافية ودقة عالية.', jobsDone: 95, rate: 'تفاوضي' },
    { id: 4, name: 'خالد الدهان', profession: 'صباغ', rating: 4.7, reviews: 210, distance: '2.1 كم', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200', available: true, bio: 'طلاء الجدران داخلي وخارجي، وتركيب ورق الجدران والديكورات الحديثة بألوان عصرية تدوم طويلاً.', jobsDone: 512, rate: 'تفاوضي' },
  ];

  const categories = [
    { name: 'الكل', icon: Menu },
    { name: 'سباك', icon: Wrench },
    { name: 'كهربائي', icon: Wrench },
    { name: 'نجار', icon: Wrench },
    { name: 'صباغ', icon: Wrench },
  ];

  const filteredCraftsmen = useMemo(() => {
    return craftsmen.filter(c => {
      const matchCategory = activeCategory === 'الكل' || c.profession === activeCategory;
      const matchSearch = c.name.includes(searchQuery) || c.profession.includes(searchQuery);
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div style={{ backgroundColor: '#2d3748', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem', fontFamily: 'sans-serif' }}>
      
      {/* Mobile Device Mockup */}
      <div style={{ width: '100%', maxWidth: '400px', height: '800px', backgroundColor: '#f7fafc', borderRadius: '40px', overflow: 'hidden', position: 'relative', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', border: '8px solid #1a202c' }}>
        
        {/* Dynamic Island */}
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '120px', height: '30px', backgroundColor: '#1a202c', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px', zIndex: 50 }}></div>

        {!selectedCraftsman ? (
          <>
            {/* Header */}
            <div style={{ backgroundColor: '#ecc94b', padding: '40px 20px 30px 20px', borderBottomLeftRadius: '30px', borderBottomRightRadius: '30px', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <Link to="/" style={{ color: '#1a202c', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem', fontWeight: 'bold' }}>
                  <ChevronLeft size={20} /> المعرض
                </Link>
                <Menu size={24} color="#1a202c" />
              </div>
              
              <h1 style={{ fontSize: '1.8rem', fontWeight: '800', margin: '0 0 10px 0', color: '#1a202c', direction: 'rtl' }}>تحتاج محترف؟</h1>
              <p style={{ color: '#744210', margin: '0 0 20px 0', direction: 'rtl' }}>ابحث عن أفضل الحرفيين في منطقتك</p>

              <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', borderRadius: '16px', padding: '12px 16px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', direction: 'rtl' }}>
                <Search size={20} color="#a0aec0" />
                <input 
                  type="text" 
                  placeholder="ابحث بالاسم أو المهنة..." 
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  style={{ border: 'none', background: 'transparent', outline: 'none', padding: '0 10px', width: '100%', fontFamily: 'inherit' }} 
                />
              </div>
            </div>

            {/* Content Area */}
            <div style={{ height: 'calc(100% - 240px)', overflowY: 'auto', padding: '20px', direction: 'rtl' }}>
              
              {/* Categories */}
              <div style={{ display: 'flex', gap: '15px', overflowX: 'auto', paddingBottom: '10px', marginBottom: '25px', scrollbarWidth: 'none' }}>
                {categories.map((cat, i) => (
                  <div key={i} onClick={() => setActiveCategory(cat.name)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer', minWidth: '60px' }}>
                    <div style={{ width: '60px', height: '60px', borderRadius: '16px', backgroundColor: activeCategory === cat.name ? '#ecc94b' : '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', transition: '0.3s' }}>
                      <cat.icon size={24} color={activeCategory === cat.name ? '#1a202c' : '#a0aec0'} />
                    </div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: activeCategory === cat.name ? '#1a202c' : '#718096' }}>{cat.name}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: 0, color: '#2d3748' }}>الحرفيون المتاحون</h3>
                <span style={{ color: '#718096', fontSize: '0.9rem' }}>{filteredCraftsmen.length} نتيجة</span>
              </div>

              {/* Craftsmen List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', paddingBottom: '30px' }}>
                {filteredCraftsmen.map(person => (
                  <div key={person.id} onClick={() => setSelectedCraftsman(person)} style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', display: 'flex', gap: '15px', cursor: 'pointer' }}>
                    <div style={{ position: 'relative' }}>
                      <img src={person.image} alt={person.name} style={{ width: '80px', height: '80px', borderRadius: '16px', objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', bottom: '-5px', left: '50%', transform: 'translateX(-50%)', backgroundColor: person.available ? '#48bb78' : '#e53e3e', color: 'white', fontSize: '0.6rem', padding: '2px 8px', borderRadius: '10px', whiteSpace: 'nowrap' }}>
                        {person.available ? 'متاح الآن' : 'مشغول'}
                      </div>
                    </div>
                    
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <h4 style={{ margin: '0 0 5px 0', fontSize: '1.1rem', color: '#1a202c' }}>{person.name}</h4>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: '#fefcbf', padding: '2px 6px', borderRadius: '6px' }}>
                          <Star size={12} color="#d69e2e" fill="#d69e2e" />
                          <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#975a16' }}>{person.rating}</span>
                        </div>
                      </div>
                      <p style={{ margin: '0 0 10px 0', color: '#718096', fontSize: '0.9rem' }}>{person.profession}</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#a0aec0', fontSize: '0.8rem', marginBottom: '10px' }}>
                        <MapPin size={14} /> تبعد عنك {person.distance}
                      </div>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <button onClick={(e) => { e.stopPropagation(); setSelectedCraftsman(person); setContactModal(true); }} style={{ flex: 1, backgroundColor: '#ecc94b', color: '#1a202c', border: 'none', padding: '8px', borderRadius: '10px', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
                          <Phone size={16} /> طلب
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                {filteredCraftsmen.length === 0 && <p style={{ textAlign: 'center', color: '#a0aec0', marginTop: '20px' }}>لم يتم العثور على حرفي بهذه المواصفات.</p>}
              </div>
            </div>
          </>
        ) : (
          /* Craftsman Profile View */
          <div style={{ height: '100%', backgroundColor: '#f7fafc', direction: 'rtl', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', height: '250px' }}>
              <img src={selectedCraftsman.image} alt={selectedCraftsman.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 50%, rgba(0,0,0,0.8) 100%)' }}></div>
              <button onClick={() => setSelectedCraftsman(null)} style={{ position: 'absolute', top: '40px', right: '20px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', cursor: 'pointer' }}>
                <ChevronLeft size={24} />
              </button>
              <div style={{ position: 'absolute', bottom: '20px', right: '20px', color: 'white' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                  <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: 0 }}>{selectedCraftsman.name}</h1>
                  <ShieldCheck size={20} color="#48bb78" />
                </div>
                <p style={{ margin: 0, opacity: 0.9 }}>{selectedCraftsman.profession}</p>
              </div>
            </div>
            
            <div style={{ flex: 1, backgroundColor: '#fff', borderRadius: '30px 30px 0 0', marginTop: '-20px', position: 'relative', zIndex: 10, padding: '25px', overflowY: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px', paddingBottom: '20px', borderBottom: '1px solid #edf2f7' }}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ margin: '0 0 5px 0', fontSize: '1.2rem', fontWeight: 'bold', color: '#1a202c', display: 'flex', alignItems: 'center', gap: '5px', justifyContent: 'center' }}><Star size={16} color="#d69e2e" fill="#d69e2e"/> {selectedCraftsman.rating}</p>
                  <span style={{ fontSize: '0.8rem', color: '#718096' }}>{selectedCraftsman.reviews} تقييم</span>
                </div>
                <div style={{ width: '1px', backgroundColor: '#edf2f7' }}></div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ margin: '0 0 5px 0', fontSize: '1.2rem', fontWeight: 'bold', color: '#1a202c' }}>{selectedCraftsman.jobsDone}</p>
                  <span style={{ fontSize: '0.8rem', color: '#718096' }}>مهمة منجزة</span>
                </div>
                <div style={{ width: '1px', backgroundColor: '#edf2f7' }}></div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ margin: '0 0 5px 0', fontSize: '1.2rem', fontWeight: 'bold', color: '#1a202c', direction: 'ltr' }}>{selectedCraftsman.rate}</p>
                  <span style={{ fontSize: '0.8rem', color: '#718096' }}>السعيرة</span>
                </div>
              </div>

              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', margin: '0 0 10px 0', color: '#2d3748' }}>عن الحرفي</h3>
              <p style={{ color: '#4a5568', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '25px' }}>{selectedCraftsman.bio}</p>

              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', margin: '0 0 10px 0', color: '#2d3748' }}>الموقع</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#f7fafc', padding: '15px', borderRadius: '12px', color: '#4a5568', marginBottom: '25px' }}>
                <MapPin size={20} color="#ecc94b" />
                يبعد عن موقعك الحالي بحوالي {selectedCraftsman.distance}
              </div>

              <button onClick={() => setContactModal(true)} disabled={!selectedCraftsman.available} style={{ width: '100%', backgroundColor: selectedCraftsman.available ? '#ecc94b' : '#e2e8f0', color: selectedCraftsman.available ? '#1a202c' : '#a0aec0', border: 'none', padding: '15px', borderRadius: '16px', fontSize: '1.1rem', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', cursor: selectedCraftsman.available ? 'pointer' : 'not-allowed', marginTop: '10px' }}>
                <Phone size={20} /> {selectedCraftsman.available ? 'اطلب الخدمة الآن' : 'الحرفي مشغول حالياً'}
              </button>
            </div>
          </div>
        )}

        {/* Contact Modal */}
        {contactModal && selectedCraftsman && (
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(26, 32, 44, 0.8)', zIndex: 60, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', direction: 'rtl' }}>
            <div style={{ backgroundColor: '#fff', width: '100%', borderTopLeftRadius: '30px', borderTopRightRadius: '30px', padding: '30px 20px', animation: 'slideUp 0.3s ease-out' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 style={{ margin: 0, fontSize: '1.3rem', color: '#1a202c' }}>تواصل مع {selectedCraftsman.name}</h3>
                <button onClick={() => setContactModal(false)} style={{ background: '#f7fafc', border: 'none', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}><X size={16} /></button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                <button style={{ backgroundColor: '#48bb78', color: 'white', border: 'none', padding: '15px', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                  <Phone size={24} /> اتصال هاتفي
                </button>
                <button style={{ backgroundColor: '#4299e1', color: 'white', border: 'none', padding: '15px', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                  <MessageCircle size={24} /> رسالة نصية
                </button>
              </div>
              <p style={{ textAlign: 'center', color: '#718096', fontSize: '0.8rem', margin: 0 }}>يتم الرد عادة خلال 15 دقيقة</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
